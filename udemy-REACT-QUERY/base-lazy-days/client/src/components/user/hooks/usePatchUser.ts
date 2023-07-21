import jsonpatch from 'fast-json-patch';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

// TODO: update type to UseMutateFunction type
export function usePatchUser(): UseMutateFunction<
  User,
  unknown,
  User,
  unknown
> {
  const { user, updateUser } = useUser();
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      onMutate: async (newUser: User | null) => {
        // * 새로운 데이터 받아오는 쿼리 취소
        await queryClient.cancelQueries(queryKeys.user);
        // * 이전 데이터 저장
        const previousUserData: User = queryClient.getQueryData(queryKeys.user);

        // * 신규 데이터로 갱신
        updateUser(newUser);
        // * 이전 Context 데이터 반환
        return { previousUserData };
      },
      onError: (error, newData, context) => {
        // * 롤백
        if (context.previousUserData) {
          updateUser(context.previousUserData);
          toast({
            title: 'Update Failed; Restoring previous values',
            status: 'warning',
          });
        }
      },
      onSuccess: (userData: User | null) => {
        if (!user) return;
        // updateUser(userData);
        toast({
          title: 'User updated!',
          status: 'success',
        });
      },

      onSettled: (data) => {
        // * 사용자 쿼리 무효화
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}

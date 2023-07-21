const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    sortedBase = base.sort((a, b) => a - b);
    sortedSample = sample.sort((a, b) => a - b);

    function includeNum(baseArr, sampleArr) {
        if (sampleArr.length === 0) return true;
        let sampleTarget = sampleArr.shift();

        let baseIndex = baseArr.indexOf(sampleTarget);
        if (baseIndex < 0) return false;
        let result = includeNum(baseArr.slice(baseIndex), sampleArr);
        return result;
    }

    return includeNum(sortedBase, sortedSample);
};

const arr1 = Array.from({length: 7000}, (v, i) => i);
const arr2 = Array.from({length: 7000}, (v, i) => i);

isSubsetOf(arr1, arr2);

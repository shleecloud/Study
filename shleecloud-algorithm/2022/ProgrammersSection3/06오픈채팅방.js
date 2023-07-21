function solution(record) {
    const result = [];
    const userData = {};
    for (let i = 0; i < record.length; i++) {
        const [command, userId, userNickname] = record[i].split(' ');
        switch (command) {
            case 'Enter':
                userData[userId] = userNickname;
                break;
            case 'Change':
                userData[userId] = userNickname;
                break;
        }
    }
    for (let i = 0; i < record.length; i++) {
        const [command, userId, userNickname] = record[i].split(' ');
        switch (command) {
            case 'Enter':
                result.push(`${userData[userId]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                result.push(`${userData[userId]}님이 나갔습니다.`);
                break;
        }
    }
    return result;
}

solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']);

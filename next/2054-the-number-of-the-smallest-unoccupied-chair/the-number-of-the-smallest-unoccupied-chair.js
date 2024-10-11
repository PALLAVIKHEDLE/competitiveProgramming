const smallestChair = function (times, targetFriend) {
    const chairs = [];
    const ARRIVE = "arrive";
    const LEAVE = "leave";

    const queue = times
        .reduce((arr, t, i) => {
            arr.push({ id: i, time: t[0], action: ARRIVE });
            arr.push({ id: i, time: t[1], action: LEAVE });
            return arr;
        }, [])
        .sort((a, b) => {
            if (a.time === b.time) {
                if (a.action === LEAVE) return -1;
                else return 1;
            }
            return a.time - b.time;
        });

    let friend;
    for (let i = 0; i < queue.length; i++) {
        friend = queue[i];
        if (friend.action === ARRIVE) {
            const index = findChair(chairs);
            chairs[index] = friend.id;
        } else {
            const index = chairs.indexOf(friend.id);
            chairs[index] = undefined;
        }
        if (friend.id === targetFriend) {
            break;
        }
    }

    return chairs.indexOf(friend.id);
};

function findChair(chairs) {
    if (!chairs.length) return 0;
    const nextIndex = chairs.indexOf(undefined);
    if (nextIndex < 0) {
        return chairs.length;
    } else {
        return nextIndex;
    }
}
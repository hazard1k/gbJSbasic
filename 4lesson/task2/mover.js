let mover = {
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите направление(1, 2, 3, 4, 6, 7, 8, 9)"));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('2,4,6,8'); {
                    continue;
                }
            }
            return direction;
        }
    },

    getNextPosition(direction) {

        const nextPosition = {
            x: player.x,
            y: player.y
        };

        const curPosition = Object.assign({}, nextPosition);

        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;

                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
            default:
                break;
        }

        if (nextPosition.x > config.colsCount - 1 || nextPosition.x < 0 || nextPosition.y > config.rowsCount - 1 || nextPosition.y < 0) {
            nextPosition.x = curPosition.x;
            nextPosition.y = curPosition.y;
        }

        return nextPosition;
    }
};
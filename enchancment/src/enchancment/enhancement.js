// module.exports = {
//     repair,
//     success,
//     fail
// };

export function repair(item) {
    const newItem = {...item};

    newItem.durability = 100;

    return newItem;
}

export function success(item) {
    const newItem = {...item};

    if(newItem.enhancement > 19){
        return null;
    } else {
        newItem.enhancement += 1;
        
        if(newItem.enhancement < 15 && newItem.durability < 26){
            return null;
        }

        if(newItem.enhancement > 14 && newItem.durability < 11 ){
            return null;
        }

        if(newItem.enhancement === 16){
            newItem.displayName = `[PRI] ${newItem.name}`;
        } else if(newItem.enhancement === 17){
            newItem.displayName = `[DUO] ${newItem.name}`;
        } else if(newItem.enhancement === 18){
            newItem.displayName = `[TRI] ${newItem.name}`;
        } else if(newItem.enhancement === 19){
            newItem.displayName = `[TET] ${newItem.name}`;
        } else if(newItem.enhancement === 20){
            newItem.displayName = `[PEN] ${newItem.name}`;
        } else {
            newItem.displayName = `[+${newItem.enhancement}] ${newItem.name}`;
        }
        

        return newItem;
    }
}

export function fail(item) {
    const newItem = {...item};

    if(newItem.enhancement < 15){
        if(newItem.durability < 26){
            return null;
        } else {
            newItem.durability -= 5;
        }
    } else {
        if(newItem.durability < 10){
            return null;
        } else {
            newItem.durability -= 10;

            if(newItem.enhancement > 16) {

                newItem.enhancement -= 1;

                if(newItem.enhancement === 16){
                    newItem.displayName = `[PRI] ${newItem.name}`;
                } else if(newItem.enhancement === 17){
                    newItem.displayName = `[DUO] ${newItem.name}`;
                } else if(newItem.enhancement === 18){
                    newItem.displayName = `[TRI] ${newItem.name}`;
                } else if(newItem.enhancement === 19){
                    newItem.displayName = `[TET] ${newItem.name}`;
                } else if(newItem.enhancement === 20){
                    newItem.displayName = `[PEN] ${newItem.name}`;
                } else {
                    newItem.displayName = `[+${newItem.enhancement}] ${newItem.name}`;
                }
            }
        }
    }

    return newItem;
}
const removeFromArray = function(...parameters) {

    let array = parameters[0];

    for (let i = 1; i < parameters.length; i++) {
        
        let val = parameters[i];

        while (array.includes(val)) {
            let index = array.indexOf(val);

            let tmp = array.splice(index, 1);
        }
    }
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;

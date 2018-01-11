module.exports = {
    mongooseToObject(object){
        if (object.constructor.name === 'model') {
            return object.toObject();
        }
        else if (Array.isArray(object)) {
            return object.map(item => {
                if (item.constructor.name === 'model')
                    return item.toObject();
                return item;
            })
        }
        return object;
    }
};
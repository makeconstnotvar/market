function getParametersQuery(parameters) {
    let and = [];
    if (parameters) {
        parameters.forEach(function (parameter) {
            let or = parameter.field ? getSpecialCondition(parameter) : getCondition(parameter);
            if (or)
                and.push(or)
        });
    }
    return and;
}

function getCondition(parameter) {
    let field = 'parameters.selected';
    switch (parameter.behavior) {
        case 'checklist':
            return {[field]: {$in: parameter.values.map(v => v._id)}};
        case 'radiolist':
        case 'onecheck':
            if (!parameter.values || parameter.values.length != 1)
                throw new Error("Values у параметра onecheck должен быть один");
            return {[field]: parameter.values[0]._id};
        case 'input':
            let condition = {};
            if (parameter.from)
                condition.$gte = parseInt(parameter.from);
            if (parameter.to)
                condition.$lte = parseInt(parameter.to);
            return {[field]: condition};
        default:
            throw Error('Несуществующее значение behavior = ' + behavior);
    }

}

function getSpecialCondition(parameter) {
    let field = parameter.field;
    switch (field) {
        case 'count':
            return {[field]: {$gt: 0}};
        case 'price':
            let condition = {};
            if (parameter.from)
                condition.$gte = parseInt(parameter.from);
            if (parameter.to)
                condition.$lte = parseInt(parameter.to);
            return {[field]: condition};
        case 'stock':
            return {[field]: true};
        default :
            throw Error('Несуществующее значение field = ' + field);
    }
}

module.exports = {
    getParametersQuery
};
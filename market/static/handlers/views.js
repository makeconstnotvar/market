let _ = require('underscore');

function specials(products, contract) {

    products.forEach(product => {
        product.available = product.count > 0;

        if (product.discount && product.price)
            product.bonus = product.discount - product.price;

        if (product.category && product.category.url)
            product.url = `/${product.category.url}/${product.url}`;

        if (product.photos) {
            product.cover = `/photos/${product._id}/l_${product.photos[0].fileId}`

        }
        if (contract && contract.positions) {
            product.inCart = !!contract.positions.find(position => {
                if (position.product)
                    return product._id.equals(position.product._id)
            });
        }
    });

    return products;
}

function product(product, contract) {
    product.available = product.count > 0;
    product.photos = product.photos.filter(photo => photo.fileType === 'image');

    if (product.discount && product.price)
        product.bonus = product.discount - product.price;

    if (product.photos) {
        product.photos = product.photos.sort((f1, f2) => f1.order - f2.order);
        product.images = product.photos.map(photo => {

            return {
                id: photo._id.toString(),
                url: `/${product.categoryUrl}/${product.url}/${photo._id}`,
                src: `/photos/${product._id}/m_${photo.fileId}`
            }
        });


        let photo;
        if (product.imageId) {
            photo = product.photos.find(photo => photo._id.toString() === product.imageId);
            product.images.forEach(image => {
                if (image.id === product.imageId)
                    image.active = 'active'
            })

        }

        else {
            photo = product.photos[0];
            product.images[0].active = 'active';
        }
        product.selectedImageSrc = `/photos/${product._id}/l_${photo.fileId}`;
    }

    if (contract && contract.positions) {
        let inCart = _.find(contract.positions, function (position) {
            if (position.product)
                return product._id.equals(position.product)
        });

        product.inCart = !!inCart;

    }
    if (product.parameters) {
        let combinedParameters = [];
        for (let i = 0; i < product.parameters.length; i++) {
            if (product.parameters[i].parameter && !product.parameters[i].parameter.field) {
                let parameter = {
                    name: product.parameters[i].parameter.name,
                    unit: product.parameters[i].parameter.unit,
                    value: getValue(product.parameters[i])
                };
                combinedParameters.push(parameter);
            }
        }
        product.parameters = combinedParameters;
    }

    return product;
}

function getValue(paramContainer) {
    let foundValue = '';
    let exist = _.find(paramContainer.parameter.values, val => {
        return val._id.equals(paramContainer.selected)
    });
    if (exist)
        foundValue = exist.value;

    return foundValue;
}

module.exports = {
    specials,
    product
};
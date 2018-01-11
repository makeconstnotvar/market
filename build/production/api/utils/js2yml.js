var fs = require('fs'),
    xml = require('xmlbuilder'),
    moment = require('moment'),
    _ = require("underscore");

module.exports = function (obj) {
    var result;

    var root = xml.create('yml_catalog', {'version': '1.0', 'encoding': 'UTF-8'}, {ext: 'SYSTEM "shops.dtd"'});

    root.att('date', moment(new Date()).format('YYYY-MM-DD HH:mm'));

    var shop = root.ele('shop');

    _.each(obj, function (value, key) {

        switch (key) {
            case 'currencies':
                var cur = shop.ele(key);
                _.each(value, function (item) {
                    cur.ele('currency', _.pick(item, 'id', 'rate', 'plus'));
                });
                break;
            case 'categories':
                var cat = shop.ele(key);
                _.each(value, function (item) {
                    cat.ele('category', _.pick(item, 'id', 'parentId')).txt(item.name);
                });
                break;
            case 'offers':
                var offers = shop.ele(key);
                _.each(value, function (item) {
                    var offer = offers.ele('offer', _.pick(item, 'id', 'type', 'available', 'bid'));
                    _.each(_.omit(item, 'id', 'type', 'available', 'bid', 'param', 'picture'), function (offerValue, offerKey) {
                        if (offerValue)
                            offer.ele(offerKey).txt(offerValue);
                    });

                    if ('param' in item) {
                        _.each(item.param, function (param) {
                            if (param.value)
                                offer.ele('param', _.pick(param, 'name', 'unit')).txt(param.value);
                        });
                    }
                    if ('picture' in item) {
                        _.each(item.picture, function (picture) {
                            if (picture)
                                offer.ele('picture', picture);
                        });
                    }
                });
                break;
            case 'delivery-options':
                var delopts = shop.ele(key);
                _.each(value, function (item) {
                    delopts.ele('option', {'cost': item.cost, 'days': item.days})
                });
                break;
            default:
                shop.ele(key).txt(value);
        }


    });

    result = root.end({'pretty': true, 'indent': '  ', 'newline': '\n'});

    return result;
};


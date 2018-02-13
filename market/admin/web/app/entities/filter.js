Filter.$inject = ['$cacheFactory', '$stateParams'];

function Filter($cacheFactory, $stateParams) {
    return function (filterName) {
        filterName = filterName || 'default';
        var cache = $cacheFactory.get('filter') || $cacheFactory('filter'),
            initData = {
                take: 15,
                order: {name: 1},
                page: $stateParams.page || 1
            };


        function upsert(filterField, key, value) {
            var filter = cache.get(filterName) || {data: {}, query: {}};
            filterField = filterField || 'data';

            if (angular.isObject(key)) {
                Object.assignNotEmptyFields(filter[filterField], key);
                cache.put(filterName, filter);
            }
            else if (angular.isString(key)) {
                filter[filterField][key] = value;
                cache.put(filterName, filter);
            }
            return filter[filterField];
        }

        function data(key, value) {
            //дополнительные поля, которые не query
            var data = upsert('data', key, value);
            return Object.assign(angular.copy(initData), data);
        }

        function query(key, value) {
            //поля для поискового запроса. Названия полей и тип данных должны совпадать с БД
            return upsert('query', key, value);
        }

        function reset(filterField, value) {
            switch (filterField) {
                case 'query':
                    return resetQuery(value);
                case 'data':
                    return resetData(value);
                default :
                    throw Error('Неправильно указано название поля фильтра ' + filterField);
            }
        }

        function resetQuery(value) {
            var filter = cache.get(filterName);
            if (value)
                delete filter.query[value];
            else
                filter.query = {};
            cache.put(filterName, filter);
        }

        function resetData(value) {
            var filter = cache.get(filterName);
            if (value) {
                var init = initData[value];
                if (init)
                    filter.data[value] = init;
                else
                    delete filter.data[value];
            }
            else {
                filter.data = angular.copy(initData);
            }
            cache.put(filterName, filter);
        }

        if (!Object.assignNotEmptyFields) {
            Object.defineProperty(Object, 'assignNotEmptyFields', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function (target, firstSource) {
                    'use strict';
                    if (target === undefined || target === null) {
                        throw new TypeError('Cannot convert first argument to object');
                    }

                    var to = Object(target);
                    for (var field in firstSource) {
                        if (firstSource[field] === null || firstSource[field] === undefined || (Object.keys(firstSource[field]).length === 0 && firstSource[field].constructor === Object)) {
                            delete to[field];
                            delete firstSource[field];
                        }
                    }
                    Object.assign(to, firstSource);
                    return to;
                }
            });
        }


        return {
            data: data,
            query: query,
            reset: reset
        }
    }
}

angular.module('entity').factory('Filter', Filter);
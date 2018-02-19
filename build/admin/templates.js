(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/header.html',
    '<h2 ng-bind="header"></h2>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/template.html',
    '<div class="adm-header"><h2 ng-bind="templateTitle"></h2><div ui-view="subtabs"></div></div><div class="adm-body" ui-view="form"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/base/base.html',
    '<div class="adm-header view-container"><div ui-view="progress" class="my-progress"></div><div ui-view="header"></div><div ui-view="tabs" class="form-group"></div></div><div class="view-container" ui-view="filter"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/error/error.html',
    '<div class="container"><div class="alert">ошибка</div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/menu/menu.html',
    '<ul class="bl nav nav-pills adm-margin10 col-sm-12"><li ng-class="{active:menu.active}" ng-repeat="menu in menus"><a class="my-pointer" ng-bind="menu.name" ng-click="toSubnav(menu.state)"></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/navbar/navbar.html',
    '<div class="me-header"><a class="me-brand" href="https://getyourbag.ru/">getyourbag.ru</a></div><ul class="mb-navbar"><li class="me-nav" ng-repeat="nav in navs" ng-class="{\'active\':nav.active}"><a class="me-link m-pointer" ng-click="toState(nav.state)" ng-bind="nav.name"></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/pager/pager.html',
    '<ul class="pagination" ng-if="show && pages.length > 1"><li ng-class="{active:page.active}" ng-repeat="page in pages"><a ng-click="toPage(page.n)" ng-bind="page.n"></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/product/list.html',
    '<table class="table table-bordered table-hover"><tbody><tr ng-repeat="product in products"><td ng-if="product.selected" width="39px" title="Убрать продукт" class="btn-default text-center my-pointer success" ng-click="remove(product)"><i class="fa fa-check"></i></td><td ng-if="!product.selected" width="39px" title="Добавить продукт" class="btn-default text-center my-pointer" ng-click="add(product)"><i class="fa fa-minus"></i></td><td class="cover"><img ng-repeat="photo in product.photos | filter:getCover" ng-src="{{\'/photos/\' + product._id + \'/\' + photo.fileId}}"></td><td><a ng-href="{{\'products/edit/\'+product._id}}" ng-bind="product.name"></a></td><td ng-bind="product.price"></td><td ng-bind="product.category.name"></td></tr></tbody></table>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/progress/progress.html',
    '<i ng-class="{visible:isVisible}" class="fa fa-cog spinner"></i>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/status/status.html',
    '<div class="me-status-block" ng-class="{\'active\':status.show, \'success\':status.success, \'error\':!status.success}"><span ng-bind="status.text"></span> <i class="fa fa-times m-pointer me-status-close" ng-click="showOff()"></i></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/common/tabs/tabs.html',
    '<ul class="nav nav-tabs"><li ng-class="{active:tab.active}" ng-repeat="tab in tabs"><a class="my-pointer" title="{{tab.title}}" ng-click="toState(tab.state)">{{tab.name}}</a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/404/404.html',
    '<div class="row"><div class="col-sm-12"><h1>404</h1></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/wrap.html',
    '<div ui-view="wrap"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/login/login.html',
    '<div class="container"><div class="form-signin"><h2 class="form-signin-heading">Введите логин и пароль</h2><input type="text" class="form-control" placeholder="логин" required="" autofocus="" ng-model="passport.login"> <input type="password" class="form-control" placeholder="пароль" required="" ng-model="passport.password"><div class="checkbox"><label><input type="checkbox" value="remember-me" ng-model="passport.remember"> Запомнить</label></div><a class="btn btn-lg btn-primary btn-block margin-bottom-10" ng-click="login()">Вход</a><div class="alert alert-danger" ng-bind="error" ng-show="!!error"></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/list/list.html',
    '<div class="row form-group" ng-show="categories.length==0"><div class="col-sm-12"><span>Вы не создали ни одной категории</span> <a ng-click="newCatagory()" class="btn btn-primary">Создать</a></div></div><div class="row form-group" ng-show="categories.length>0"><div class="col-sm-12"><ul class="list-unstyled my-cat-list"><li ng-repeat="category in categories" ng-include="\'admin/pages/category/list/tree.html\'"></li></ul></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/list/tree.html',
    '<div class="media my-cat-block"><div class="media-left" ng-class="{\'min-w78\':category.children}"><a ng-hide="category.collapse ||(!category.children)" title="Скрыть дочернии категории" ng-click="hideChilds(category)" class="margin-right-10 mt7"><i class="fa fa-minus-square-o"></i></a> <a ng-hide="!category.collapse" title="Показать дочернии категории" ng-click="showChilds(category)" class="margin-right-10 mt7"><i class="fa fa-plus-square-o"></i></a> <button title="Редактировать категорию" ng-click="edit(category._id)" class="btn btn-default"><i class="fa fa-pencil-square-o"></i></button></div><div class="media-body me-cat-body"><span ng-show="category.order" ng-bind="category.order+\'. \'"></span> <span class="me-cat-name"><span class="margin-right-10" ng-bind="category.name"></span> <span class="m-url" ng-bind="category.url"></span></span> <span class="margin-right-10"><img class="img-responsive" ng-repeat="photo in category.photos | filter:getCover" ng-src="{{\'/photos/\'+category._id+\'/s_\'+photo.fileId}}"></span> <button title="Удалить категорию" ng-click="delete(category._id)" class="btn btn-danger pull-right"><i class="fa fa-times"></i></button><div class="form-inline"><div class="form-group"><div class="input-group"><input type="text" class="form-control" placeholder="Дочерняя категория" ng-enter="addChild(category)" ng-model="category.childName"> <a class="input-group-addon btn btn-success" ng-click="addChild(category)"><i class="fa fa-plus"></i></a></div></div></div><ul ng-if="category.children" ng-hide="category.collapse" class="list-unstyled my-cat-list"><li ng-repeat="category in category.children" ng-include="\'admin/pages/category/list/tree.html\'"></li></ul></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/delete/delete.html',
    '<div class="row form-group"><div class="col-sm-12">Вы уверены что хотите удалить категорию <b ng-bind="category.name"></b>?</div></div><div class="row form-group"><div class="col-sm-12"><button class="btn btn-success" ng-click="ok(category._id)">Удалить</button> <button class="btn btn-warning" ng-click="cancel()">Отмена</button></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/new/new.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Родительская категория</label><div class="col-sm-10"><select class="form-control" ng-options="category.name for category in cats" ng-model="selectedCategory"><option value="">Корневая</option></select></div></div><div class="row form-group"><label class="col-sm-2 control-label text-nowrap">Название <i class="fa fa-asterisk my-red"></i></label><div class="col-sm-10"><input type="text" class="form-control" ng-model="category.name" ng-model-options="{updateOn:\'input\'}" ng-change="nameToUrl()"></div></div><div class="row form-group"><label class="col-sm-2 control-label text-nowrap">Url</label><div class="col-sm-10"><div class="input-group m-input-group"><input id="url" ng-model="category.url" ng-change="hideUrlError()" class="form-control"> <a class="btn btn-default input-group-addon" ng-click="nameToUrl()" title="Создать url из названия"><i class="fa fa-refresh"></i></a></div></div></div><div class="row form-group"><label for="urlText" class="col-sm-2 control-label text-nowrap">Текст Url</label><div class="col-sm-10"><input id="urlText" type="text" class="form-control" ng-model="category.urlText"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Порядок</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="category.order" placeholder="порядковый номер для сортировки 1,2 или 3 и т.д."></div></div><div class="row form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10 ace-information"><a class="m-pointer" ng-click="btf(\'details\', category.details)">Выровнять</a> <textarea ui-ace="aceOptions" ng-model="category.details"></textarea></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a value="Сохранить" class="btn btn-success" ng-click="save()">Сохранить</a> <a value="Назад" class="btn btn-warning" ng-click="back()">Назад</a> <span ng-show="noNameError" class="text-danger">Нужно обязательно заполнить поле <strong>Название</strong></span></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/parent/parent.html',
    '<div class="row form-group" ng-if="category"><label class="col-sm-2 control-label">Выбранная категория</label><div class="col-sm-10"><span ng-bind="category.name"></span></div></div><div class="row form-group"><label class="col-sm-2 control-label">Категории</label><div class="col-sm-10"><ul class="list-unstyled"><li class="checkbox" ng-repeat="cat in categories" ng-include="\'admin/pages/category/parent/tree.html\'"></li></ul></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success">Сохранить</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/parent/tree.html',
    '<div class="my-cat-block my-small"><div class="radio-inline"><label for="{{cat._id}}"><input id="{{cat._id}}" ng-model="category.parent" ng-value="cat._id" ng-checked="cat._id==category.parent" ng-disabled="cat._id==category._id" name="catRadios" type="radio"> <span ng-class="{\'m-strong\':cat._id==category._id}" ng-bind="cat.name"></span></label></div><a title="Удалить категорию" ng-click="remove(cat._id)" class="pull-right margin-left-10 text-danger"><i class="fa fa-times"></i></a> <a title="Редактировать категорию" ng-click="edit(cat._id)" class="pull-right margin-left-10"><i class="fa fa-pencil-square-o"></i></a></div><ul class="list-unstyled my-cat-list" ng-if="cat.children"><li ng-class="{\'padding-left-40\': cat.level==\'1\', \'padding-left-80\': cat.level==\'2\', \'padding-left-120\': cat.level==\'3\'}" ng-repeat="cat in cat.children" ng-include="\'admin/pages/category/parent/tree.html\'"></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/tabs/tabs.html',
    '<div ui-view="editor"></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a class="btn btn-success m-rgap" ng-click="save()">Сохранить</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/template/template.html',
    '<div class="row form-group" ng-show="templates.length==0"><div class="col-sm-12"><span>Вы не создали ни одного шаблона параметров</span> <a ng-click="newTemplate()" class="btn btn-primary">Создать</a></div></div><div class="row form-group" ng-show="templates.length>0"><div class="col-sm-12"><table class="table table-bordered table-hover"><tr ng-repeat="model in templates"><td width="82px" title="Выбрать шаблон" class="btn-success text-center my-pointer" ng-click="add(model)">Выбрать</td><td><i ng-show="model.selected" class="fa fa-check margin-right-10"></i><span ng-bind="model.name"></span></td><td width="39px" title="Редактировать шаблон" class="btn-warning text-center my-pointer" ng-click="edit(model._id)"><i class="fa fa-pencil-square-o"></i></td><td width="39px" title="Удалить шаблон" ng-click="remove(model._id)" class="btn-danger text-center my-pointer"><i class="fa fa-times"></i></td></tr></table></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/contract/delete/delete.html',
    '<div class="row form-group"><div class="col-sm-12">Вы уверены что хотите удалить контракт №<span ng-bind="contract.number">?</span></div><div class="col-sm-12" ng-show="isPermanent"><b>(Контракт будет удален навсегда)</b></div></div><div class="row form-group"><div class="col-sm-12"><button class="btn btn-success m-rgap" ng-click="ok()">Удалить</button> <button class="btn btn-warning" ng-click="cancel()">Отмена</button></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/contract/edit/edit.html',
    '<div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Номер контракта</label><div class="col-sm-10"><span ng-bind="contract.number"></span></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Телефон <i style="color: red" class="fa fa-asterisk"></i></label><div class="col-sm-10"><input type="text" class="form-control" ng-model="contract.phone"></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Имя</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="contract.name"></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="contract.mail"></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Адрес</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="contract.address"></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Уведомления</label><div class="col-sm-10"><ul class="list-unstyled"><li class="checkbox"><label for="sendsms"><input type="checkbox" id="sendsms" ng-model="contract.sendSms">Отправлять в смс</label></li></ul></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Получение</label><div class="col-sm-10"><ul class="list-unstyled"><li class="radio"><label for="auto"><input type="radio" name="delivery" id="auto" ng-model="contract.delivery" value="auto" checked=""> Доставка курьером</label></li><li class="radio"><label for="manual"><input type="radio" name="delivery" id="manual" ng-model="contract.delivery" value="manual"> Самовывоз</label></li></ul></div></div><div class="row form-group p-form-pad"><label class="col-sm-2 control-label">Комментарий</label><div class="col-sm-10"><textarea rows="4" cols="20" class="form-control" ng-model="contract.note"></textarea></div></div><div class="row form-group p-form-pad"><div class="col-sm-offset-2 col-sm-10"><a class="btn btn-success m-rgap" ng-click="save()">Сохранить</a> <a class="btn btn-primary m-rgap" ng-click="toStatus()">Обработать</a> <a class="btn btn-warning" ng-click="cancel()">Отмена</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/contract/list/list.html',
    '<div class="row form-group" ng-show="showEmptyPlaced"><div class="col-sm-12"><span>Пока не поступило ни одного заказа</span> <a ng-click="newContract()" class="btn btn-primary">Создать</a></div></div><div class="row form-group" ng-show="showEmptyMessage"><div class="col-sm-12" ng-bind="emptyMessage"></div></div><div class="row form-group my-ord-row" ng-show="contracts.length>0" ng-repeat="contract in contracts"><div class="col-xs-12 col-sm-5 col-md-3 col-lg-3"><table class="table"><tbody><tr><td colspan="2"><a title="Редактировать заказ" class="btn btn-default pull-left contract120" ng-click="edit(contract._id)"><i class="fa fa-pencil-square-o"></i> Изменить</a> <a title="Удалить заказ" class="btn btn-danger pull-right" ng-click="toDelete(contract._id)"><i class="fa fa-times"></i></a></td></tr><tr><td colspan="2"><a class="btn btn-primary contract120" title="Изменить статус заказа" ng-click="toStatus(contract._id)"><i class="fa fa-cog"></i> Обработать</a></td></tr><tr><td><b>Номер:</b></td><td ng-bind="contract.number"></td></tr><tr><td><b>Дата:</b></td><td ng-bind="contract.date| date:\'dd.MM.yyyy\'"></td></tr><tr><td><b>Время:</b></td><td ng-bind="contract.date| date:\'HH:mm:ss\'"></td></tr></tbody></table></div><div class="col-xs-12 col-sm-7 col-md-4 col-lg-4"><table class="table"><tr><td><b>Имя:</b></td><td ng-bind="contract.name"></td></tr><tr><td><b>Телефон:</b></td><td ng-bind="contract.phone"></td></tr><tr><td><b class="text-nowrap">Способ получения:</b></td><td><span ng-if="contract.delivery==\'auto\'">Доставка курьером</span> <span ng-if="contract.delivery==\'manual\'">Самовывоз</span></td></tr><tr><td><b>Адрес:</b></td><td ng-bind="contract.address"></td></tr><tr><td><b>Комментарий:</b></td><td ng-bind="contract.note"></td></tr></table></div><div class="col-xs-12 col-sm-12 col-md-5 col-lg-5"><table class="table table-bordered"><tbody><tr><th>Товар</th><th>Шт</th><th>Цена за шт.</th><th>Сумма</th></tr><tr ng-repeat="position in contract.positions"><td ng-bind="position.product.name"></td><td ng-bind="position.count"></td><td ng-bind="position.product.price"></td><td ng-bind="position.sum"></td></tr><tr class="info"><td colspan="3"><strong>итого:</strong></td><td><strong ng-bind="contract.final"></strong></td></tr></tbody></table></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/contract/products/products.html',
    '<div class="row form-group product-list"><div class="col-sm-6"><div ui-view="products"></div></div><div class="col-sm-6"><table class="table table-bordered table-hover"><tbody><tr ng-repeat="position in contract.positions"><td width="39px" class="btn-danger text-center m-pointer" ng-click="remove(position.product._id)"><i class="fa fa-minus"></i></td><td class="cover"><img ng-repeat="photo in position.product.photos | filter:getCover" ng-src="{{\'/photos/\' + position.product._id + \'/\' + photo.fileId}}"></td><td><a ng-href="{{\'products/main/\'+position.product._id}}" ng-bind="position.product.name"></a></td><td width="10%"><span ng-bind="position.product.price"></span><i class="fa fa-rub"></i></td><td class="my-cart-change no-padding"><div class="input-group"><a class="btn btn-default input-group-addon" ng-click="minus(position)"><i class="fa fa-minus"></i></a> <input ng-disabled="true" type="text" value="1" class="form-control m-cart-center" ng-model="position.count"> <a class="btn btn-default input-group-addon" ng-click="plus(position)"><i class="fa fa-plus"></i></a></div></td><td width="10%" class="info"><span ng-bind="position.sum"></span><i class="fa fa-rub"></i></td></tr></tbody><tfoot><tr><td colspan="2"></td><td colspan="3"><b>Итого</b></td><td class="info"><span ng-bind="contract.final"></span><i class="fa fa-rub"></i></td></tr></tfoot></table><a class="btn btn-success m-rgap" ng-click="save()">Сохранить</a> <a class="btn btn-warning" ng-click="cancel()">Отмена</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/contract/status/status.html',
    '<div class="row form-group"><div class="col-xs-12"><div class="mb-contract-status"><a class="me-contract-edit m-pointer" href="" ng-click="toEdit()"><i class="fa fa-cogs"></i></a><table><tbody><tr><td>Номер заказа:</td><td ng-bind="contract.number"></td></tr><tr><td>Дата:</td><td ng-bind="contract.date| date:\'dd.MM.yyyy\'"></td></tr><tr><td>Время:</td><td ng-bind="contract.date| date:\'HH:mm:ss\'"></td></tr><tr><td>Имя клиента:</td><td ng-bind="contract.name"></td></tr><tr><td>Адрес доставки:</td><td ng-bind="contract.address"></td></tr><tr><td>Комментарий:</td><td ng-bind="contract.note"></td></tr></tbody></table></div></div><div class="col-xs-12"><div class="mb-contract-status"><table><tbody><tr><td>Текущий статус заказа</td><td ng-bind="contract.status|statusName"></td></tr><tr><td>Будет изменен на</td><td><select ng-options="status as status.name for status in statuses" ng-model="status"><option style="display:none" value="">select a region</option></select></td></tr></tbody></table></div></div><div class="col-xs-12"><div class="mb-contract-status"><table><tbody><tr><td><i style="color: red" class="fa fa-asterisk m-icon-gap"></i><label for="phone">Телефон клиента</label></td><td><input id="phone" type="text" class="form-control" ng-model="contract.phone"></td></tr></tbody></table></div></div><div class="col-xs-12"><div class="mb-contract-status"><table><tbody><tr><td>Форма доставки</td><td><span ng-if="contract.delivery==\'auto\'">Доставка курьером</span> <span ng-if="contract.delivery==\'manual\'">Самовывоз</span></td></tr><tr><td><i ng-if="contract.sendSms && contract.notifyClient" style="color: red" class="fa fa-asterisk"></i>Текст сообщения (смс)</td><td ng-if="contract.sendSms"><span ng-bind="\'Заказ \'+contract.number+\' принят. \'"></span><a ng-click="addAcceptText()">добавить в начало</a> <textarea rows="3" class="form-control" ng-model="contract.smsText"></textarea></td><td ng-if="!contract.sendSms"><span>Клиент не хочет получать смс уведомления</span></td></tr><tr><td>Подтвердить отправку</td><td class="checkbox"><label for="sendsms"><input type="checkbox" id="sendsms" ng-model="contract.notifyClient"> <span ng-if="contract.notifyClient">Отправить сообщение</span> <span ng-if="!contract.notifyClient">Сообщение не будет отправлено</span></label></td></tr></tbody></table></div></div></div><div class="row form-group"><div class="col-sm-offset-3 col-sm-9"><button class="btn btn-primary m-rgap" ng-click="ok()">Подтвердить</button> <button class="btn btn-warning" ng-click="cancel()">Отмена</button><div class="alert alert-danger" ng-if="showSmsError">Ошибка</div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/parameter/delete/delete.html',
    '<div class="row form-group"><div class="col-sm-12">Вы уверены что хотите удалить параметр <b ng-bind="parameter.name"></b>?</div></div><div class="row form-group"><div class="col-sm-12"><button class="btn btn-success" ng-click="ok(parameter._id)">Удалить</button> <button class="btn btn-warning" ng-click="cancel()">Отмена</button></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/parameter/edit/edit.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10"><div class="input-group m-input-group m-input-group-w100"><input type="text" ng-model="parameter.name" ng-model-options="{updateOn:\'input\'}" ng-change="nameToUrl()" class="form-control m-input-addon-50" placeholder="название"> <input type="text" ng-model="parameter.url" class="input-group-addon form-control m-input-addon-50" placeholder="url"> <a class="btn btn-default input-group-addon" ng-click="nameToUrl(true)" title="Создать url из названия"><i class="fa fa-refresh"></i></a></div></div></div><div class="row form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10"><input ng-model="parameter.details" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Единица измерения</label><div class="col-sm-10"><input ng-model="parameter.unit" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Yml *</label><div class="col-sm-10"><input ng-model="parameter.ymlName" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Field *</label><div class="col-sm-10"><input ng-model="parameter.field" class="form-control"></div></div><div class="row form-group"><label for="behaviors" class="col-sm-2 control-label">Тип</label><div class="col-sm-10"><select id="behaviors" class="form-control" ng-model="parameter.behavior" ng-options="b.behavior as b.name for b in behaviors" ng-change="behaviorChange(parameter.behavior)"></select></div></div><div class="row form-group" ng-show="parameter.behavior !=\'onecheck\'"><label class="col-sm-2 control-label"><span ng-bind="!editable?\'Добавить значение\':\'Изменить значение\'"></span></label><div class="col-sm-10"><div class="input-group m-input-group m-input-group-w100"><input type="text" class="input-group-addon form-control m-input-addon-50" ng-enter="modify()" ng-model="selected.val" placeholder="значение" ng-model-options="{updateOn:\'input\'}" ng-change="valToUrl()"> <input type="text" class="form-control m-input-addon-50" ng-enter="modify()" ng-model="selected.url" placeholder="url"> <a class="btn btn-default input-group-addon" ng-click="valToUrl(true)" title="Создать url из названия"><i class="fa fa-refresh"></i></a> <a class="input-group-addon btn btn-success" ng-click="modify()"><span ng-bind="!editable?\'Добавить\':\'Изменить\'"></span></a></div></div></div><div class="row form-group" ng-if="parameter.values.length"><label class="col-sm-2 control-label">Значения параметра</label><div class="col-sm-10"><table class="table table-bordered table-hover"><tr ng-repeat="v in parameter.values track by v.value"><td width="39px" class="btn-warning text-center my-pointer" title="Редактировать значение" ng-click="edit(v, $index)"><i class="fa fa-pencil-square-o"></i></td><td><span ng-bind="v.value"></span><div class="param-url" ng-bind="v.url"></div></td><td width="20%" ng-show="parameter.behavior ==\'onecheck\'||parameter.behavior ==\'radiolist\'"><label for="selected" class="my-pointer regular"><input type="checkbox" id="selected" ng-model="v.selected"> <span ng-if="v.selected">Выбрано</span><span ng-if="!v.selected">Не выбрано</span></label></td><td width="20%" ng-show="parameter.behavior ==\'radiolist\'"><label for="nomatter_{{v._id}}" class="my-pointer regular"><input type="checkbox" id="nomatter_{{v._id}}" ng-model="v.nomatter"> <span>Игнорируемый</span></label></td><td width="39px" class="btn-danger text-center my-pointer" title="Удалить значение" ng-click="remove($index)"><i class="fa fa-times"></i></td></tr></table></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success">Сохранить</a> <a ng-click="back()" ng-if="isBack" class="btn btn-warning">Назад</a> <span ng-if="noNameError" class="text-danger">Нужно обязательно заполнить поле <strong>Название</strong></span></div></div><div class="row"><div class="col-sm-offset-2 col-sm-10"><b>*</b> <span>Значения в этих полях указывается, только если пользователь понимает, что он делает</span></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/parameter/filter/filter.html',
    '<div class="mb-filter"><div class="row"><div class="col-xs-12"><div class="form-group"><button class="pull-right btn btn-danger mm-margin10" ng-click="clear()">Сбросить</button><div class="input-group"><input ng-model="filter.text" ng-enter="query()" class="form-control" placeholder="название параметра"> <a class="input-group-addon btn btn-success" ng-click="query()">Поиск</a></div></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/parameter/list/list.html',
    '<div class="row form-group" ng-if="parameters.length==0"><div class="col-sm-12"><span>Вы не создали ни одного параметра</span> <a ng-click="toNew()" class="btn btn-primary">Создать</a></div></div><div class="row form-group" ng-if="parameters.length>0"><div class="col-sm-12"><table class="table table-bordered table-hover"><thead><tr><th></th><th>Название</th><th>Описание</th><th>Тип</th><th>Возможные значения</th><th></th></tr></thead><tbody><tr ng-repeat="parameter in parameters"><td width="39px" title="Редактировать параметр" class="btn-warning text-center my-pointer" ng-click="toEdit(parameter._id)"><i class="fa fa-pencil-square-o"></i></td><td><span ng-bind="parameter.name"></span><span ng-if="parameter.unit" ng-bind="\', \'+parameter.unit"></span><div class="param-url" ng-bind="parameter.url"></div></td><td><span ng-if="parameter.details" ng-bind="parameter.details"></span></td><td ng-bind="parameter.behavior"></td><td><ul ng-if="parameter.values" class="list-inline no-margin"><li class="li-params" ng-repeat="v in parameter.values"><span ng-bind="v.value"></span><div class="param-url" ng-bind="v.url"></div></li></ul></td><td width="39px" title="Удалить параметр" class="btn-danger text-center my-pointer" ng-click="toRemove(parameter._id)"><i class="fa fa-times"></i></td></tr></tbody></table></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/category/category.html',
    '<div class="row form-group" ng-if="product"><label class="col-sm-2 control-label">Выбранный продукт</label><div class="col-sm-10"><span ng-bind="product.name + \' \' + product.extra"></span></div></div><div class="row form-group"><label class="col-sm-2 control-label">Категории</label><div class="col-sm-10"><ul class="list-unstyled"><li class="checkbox" ng-repeat="category in categories" ng-include="\'admin/pages/product/category/tree.html\'"></li></ul></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success">Сохранить</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/category/tree.html',
    '<div class="my-cat-block my-small"><div class="radio-inline"><label for="{{category._id}}"><input id="{{category._id}}" ng-model="product.category" ng-value="category" ng-checked="category._id==product.category._id" name="catRadios" type="radio"> <span ng-bind="category.name"></span></label></div><a title="Удалить категорию" ng-click="remove(category._id)" class="pull-right margin-left-10 text-danger"><i class="fa fa-times"></i></a> <a title="Редактировать категорию" ng-click="edit(category._id)" class="pull-right margin-left-10"><i class="fa fa-pencil-square-o"></i></a></div><ul class="list-unstyled my-cat-list" ng-if="category.children"><li ng-class="{\'padding-left-40\': category.level==\'1\', \'padding-left-80\': category.level==\'2\', \'padding-left-120\': category.level==\'3\'}" ng-repeat="category in category.children" ng-include="\'admin/pages/product/category/tree.html\'"></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/delete/delete.html',
    '<div class="row form-group"><div class="col-sm-12">Вы уверены что хотите удалить продукт <b ng-bind="product.name"></b><b ng-bind="\' \' + product.extra"></b>?</div></div><div class="row form-group"><div class="col-sm-12"><button class="btn btn-success" ng-click="ok(product._id)">Удалить</button> <button class="btn btn-warning" ng-click="cancel()">Отмена</button></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/filter/filter.html',
    '<div class="mb-filter"><div class="row"><div class="col-xs-12"><div class="form-group"><div class="input-group"><input ng-model="filter.text" ng-enter="query()" class="form-control" placeholder="название товара"> <a class="input-group-addon btn btn-success" ng-click="query()">Поиск</a></div></div><div class="form-inline"><div class="inline m-rgap"><div>категория</div><select class="form-control" ng-model="filter.category" ng-change="query()" ng-options="category._id as category.name for category in source.categories"><option value="">не важно</option></select></div><div class="inline m-rgap"><div>видимость</div><select class="form-control" ng-model="filter.publish" ng-change="query()" ng-options="publish.value as publish.name for publish in source.publishes"><option value="">не важно</option></select></div><div class="inline m-rgap"><div>наличие</div><select class="form-control" ng-model="filter.count" ng-change="query()" ng-options="count.value as count.name for count in source.counts"><option value="">не важно</option></select></div><div class="inline m-rgap"><div>на главной</div><select class="form-control" ng-model="filter.special" ng-change="query()" ng-options="special.value as special.name for special in source.specials"><option value="">не важно</option></select></div><button class="btn btn-danger form-control" ng-click="clear()">Сбросить</button></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/list/list.html',
    '<form class="product-list"><div class="row" ng-show="products.length==0"><div class="col-sm-12"><span>Вы не создали ни одного продукта</span> <a ng-click="newProduct()" class="btn btn-primary">Создать</a></div></div><div class="row" ng-show="products.length>0"><div class="col-sm-12"><table class="table table-bordered table-hover"><thead><tr><th></th><th></th><th></th><th>Название</th><th>Цена</th><th>Наличие</th><th class="text-center" title="Располагается на главной странице"><i class="fa fa-home"></i></th><th class="text-center" title="Видимость на клиентском сайте"><i class="fa fa-eye"></i></th><th class="text-center" title="Удаление товара"><i class="fa fa-trash-o"></i></th></tr></thead><tbody><tr ng-repeat="product in products"><td title="Основные параметры" class="btn-default text-center m-pointer button" ng-click="edit(product._id)"><i class="fa fa-pencil-square-o"></i></td><td title="Редактировать описание" class="btn-default text-center m-pointer button" ng-click="toInfo(product._id)"><i class="fa fa-info"></i></td><td title="Фотографии" class="cover m-pointer" ng-click="toPhoto(product._id)"><img fade-in="" ng-repeat="photo in product.photos | filter:getCover" ng-src="{{\'/photos/\' + product._id + \'/s_\' + photo.fileId}}"></td><td class="name"><div><span ng-bind="product.name"></span><span ng-show="product.extra" ng-bind="\' \' + product.extra"></span></div><div class="url"><span class="m-url-red" title="Товар продается по акции" ng-if="product.stock">A</span> <span class="m-url-purple" title="Количество загруженных картинок" ng-bind="\'к:\'+product.imageCount"></span> <span class="m-url-purple" title="Количество загруженных обложек" ng-bind="\'о:\'+product.coverCount"></span> <span title="Url продукта" ng-bind="product.url"></span></div></td><td class="no-padding price"><input id="price" ng-model="product.price" class="form-control text-center no-margin-bottom me-price" ng-model-options="{updateOn:\'input\'}" ng-change="save(product)"></td><td class="no-padding my-count"><div class="input-group"><a class="btn btn-default input-group-addon" ng-click="minus(product)"><i class="fa fa-minus"></i></a> <input ng-disabled="true" id="count" ng-model="product.count" class="form-control text-center"> <a class="btn btn-default input-group-addon" ng-click="plus(product)"><i class="fa fa-plus"></i></a></div></td><td class="m-pointer button m-hover" ng-click="invert(product, \'special\')"><i class="fa center-correct" ng-class="product.special?\'fa-check-square-o\':\'fa-square-o\'"></i></td><td class="m-pointer button m-hover" ng-click="invert(product, \'publish\')"><i class="fa center-correct" ng-class="product.publish?\'fa-check-square-o\':\'fa-square-o\'"></i></td><td class="btn-danger text-center m-pointer button" title="Удалить товар" ng-click="delete(product._id)"><i class="fa fa-times"></i></td></tr></tbody></table></div></div></form>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/new/new.html',
    '<div class="row form-group"><label class="col-sm-2 control-label my-pointer" for="name">Название <i class="fa fa-asterisk my-red"></i></label><div class="col-sm-10"><input id="name" ng-model="product.name" class="form-control" ng-model-options="{updateOn:\'input\'}" ng-change="nameToUrl()"></div></div><div class="row form-group"><label class="col-sm-2 control-label my-pointer" for="url">Url</label><div class="col-sm-10"><div class="input-group m-input-group"><input id="url" ng-model="product.url" class="form-control"> <a class="btn btn-default input-group-addon" ng-click="nameToUrl()" title="Создать url из названия"><i class="fa fa-refresh"></i></a></div></div></div><div class="row form-group"><label class="col-sm-2 control-label my-pointer" for="code">Модель</label><div class="col-sm-10"><input id="code" ng-model="product.code" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label my-pointer" for="article">Артикул</label><div class="col-sm-10"><input id="article" ng-model="product.article" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10"><textarea rows="4" class="form-control" ng-model="product.details"></textarea></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success margin-right-10">Сохранить</a> <span ng-show="noNameError" class="text-danger">Нужно обязательно заполнить поле <strong>Название</strong></span></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/tabs.html',
    '<div class="photolist"><div class="photolist-item"><a ng-click="toState(p._id)" class="product-link" ng-class="{\'active\':product._id == p._id}" ng-repeat="p in products"><img ng-if="p.cover" fade-in="" ng-src="{{\'/photos/\' + p._id + \'/s_\' + p.cover}}"></a></div><div class="product-box" ui-view="editor"></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a class="btn btn-success m-rgap" ng-click="save()">Сохранить</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/settings/main/main.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Название сайта</label><div class="col-sm-10"><input type="text" ng-model="settings.mainParams.siteName" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Адрес сайта</label><div class="col-sm-10"><input type="text" ng-model="settings.mainParams.siteUrl" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Адрес системы администрирования</label><div class="col-sm-10"><input type="text" ng-model="settings.mainParams.adminUrl" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Телефон</label><div class="col-sm-10"><input type="text" ng-model="settings.mainParams.phone" class="form-control"></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success">Сохранить</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/settings/operations/operations.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Подготовить Sitemap</label><div class="col-sm-10"><div class="mb-form-block"><a ng-click="sitemap()" class="btn btn-primary">Выполнить</a></div><div class="mb-form-block"><label>Ссылка на Sitemap</label> <a target="_blank" href="{{host}}/sitemap.xml">sitemap.xml</a></div></div></div><div class="row form-group"><label class="col-sm-2 control-label">Размер картинок</label><div class="col-sm-10"><a ng-click="resizeAll()" class="btn btn-primary">Оптимизировать</a></div></div><div class="row form-group"><label class="col-sm-2 control-label">Подготовить Yml</label><div class="col-sm-10"><div class="mb-form-block"><label for="deliveryCost">Стоимость курьерской доставки, рубли (0-9999)</label> <input id="deliveryCost" ng-model="ymlParams.deliveryCost" class="form-control"> <span class="mb-input-help">пример: 0 = бесплатно, 350 = 350 рублей</span></div><div class="mb-form-block"><label for="deliveryDays">Срок курьерской доставки, дни (0-32)</label> <input id="deliveryDays" ng-model="ymlParams.deliveryDays" class="form-control"> <span class="mb-input-help">пример: 0 = сегодня, 1 = завтра, 2-4 = от двух до четырех дней, 32 = неизвестно</span></div><div class="mb-form-block"><label for="orderBefore">Успеть заказать до, часы (0-24)</label> <input id="orderBefore" ng-model="ymlParams.orderBefore" class="form-control"> <span class="mb-input-help">пример: 14 = успеть заказать до 14:00</span></div><div class="mb-form-block"><label for="prodoductByImage">Режим генерации фотографий товара</label> <label for="prodoductByImage" class="my-pointer regular margin-right-10 m-display-block"><input type="checkbox" id="prodoductByImage" ng-model="ymlParams.prodoductByImage"> <span ng-if="ymlParams.prodoductByImage">Каждое фото создает отдельный продукт в прайс листе</span> <span ng-if="!ymlParams.prodoductByImage">Фото крепятся списком к продукту</span></label></div><div class="mb-form-block"><label for="store">Наличие стационарного магазина</label> <label for="store" class="my-pointer regular margin-right-10 m-display-block"><input type="checkbox" id="store" ng-model="ymlParams.store"> <span ng-if="ymlParams.store">Есть</span> <span ng-if="!ymlParams.store">Нет</span></label></div><div class="mb-form-block"><label for="pickup">Возможность самовывоза</label> <label for="pickup" class="my-pointer regular margin-right-10 m-display-block"><input type="checkbox" id="pickup" ng-model="ymlParams.pickup"> <span ng-if="ymlParams.pickup">Есть</span> <span ng-if="!ymlParams.pickup">Нет</span></label></div><div class="mb-form-block"><label for="delivery">Доставка курьером</label> <label for="delivery" class="my-pointer regular margin-right-10 m-display-block"><input type="checkbox" id="delivery" ng-model="ymlParams.delivery"> <span ng-if="ymlParams.delivery">Осуществляется</span> <span ng-if="!ymlParams.delivery">Невозможна</span></label></div><div class="mb-form-block"><label>Гарантия завода изготовителя</label> <label for="warranty" class="my-pointer regular margin-right-10 m-display-block"><input type="checkbox" id="warranty" ng-model="ymlParams.warranty"> <span ng-if="ymlParams.warranty">Есть</span> <span ng-if="!ymlParams.warranty">Нет</span></label></div><div class="mb-form-block"><label for="bid">Стоимость одного клика, в у.е.</label> <input id="bid" ng-model="ymlParams.bid" class="form-control"> <span class="mb-input-help">пример: 0.1 = минимум, курс яндекса обычно 1:30</span></div><div class="mb-form-block"><label for="salesNotes">Комментарий к объявлению, текст</label> <input id="salesNotes" ng-model="ymlParams.salesNotes" class="form-control"> <span class="mb-input-help">пример: Курьеру - наличными, самовывоз - наличные и карты</span></div><div class="mb-form-block"><label>Ссылка на YML прайс лист</label> <a target="_blank" href="{{host}}/yml.xml">yml.xml</a></div><div class="mb-form-block"><a ng-click="yml()" class="btn btn-primary">Выполнить</a></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/settings/seo/seo.html',
    '<table class="table table-striped"><tr ng-repeat="seo in settings.seoParams"><td><label for="states" class="col-sm-2 control-label">Страница</label><div class="col-sm-10"><select id="states" class="form-control" ng-model="seo.state" ng-options="s.state as s.name for s in states"></select></div><label for="title" class="col-sm-2 control-label">Title</label><div class="col-sm-10"><input id="title" type="text" ng-model="seo.title" class="form-control"></div><label for="description" class="col-sm-2 control-label">Description</label><div class="col-sm-10"><input id="description" type="text" ng-model="seo.description" class="form-control"></div><label for="keywords" class="col-sm-2 control-label">Keywords</label><div class="col-sm-10"><input id="keywords" type="text" ng-model="seo.keywords" class="form-control"></div></td><td width="39px" title="Удалить сео" ng-click="remove($index)" class="btn-danger text-center my-pointer"><i class="fa fa-trash-o"></i></td></tr></table><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="add()" class="btn btn-info">Добавить</a></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success">Сохранить</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/template/delete/delete.html',
    '<div class="row form-group"><div class="col-sm-12">Вы уверены что хотите удалить шаблон <b ng-bind="item.name"></b>?</div></div><div class="row form-group"><div class="col-sm-12"><button class="btn btn-success" ng-click="ok(item._id)">Удалить</button> <button class="btn btn-warning" ng-click="cancel()">Отмена</button></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/template/edit/edit.html',
    '<div class="mb-template"><div class="row form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10"><input ng-model="template.name" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Фильтровать</label><div class="col-sm-10"><label for="order" class="my-pointer regular"><input type="checkbox" id="order" ng-model="order" ng-change="filter()"> <span>Только выбранные</span></label> <a href="#" class="m-pointer" ng-click="sorting()">Сортировать</a></div></div><div class="row form-group" ng-show="parameters.length>0"><label class="col-sm-2 control-label">Все параметры</label><div class="col-sm-10"><table class="table table-bordered table-hover"><tbody><tr ng-repeat="parameter in parameters"><td class="me-order"><div class="input-group" ng-show="parameter.selected"><a class="btn btn-default input-group-addon" ng-click="minus(parameter)"><i class="fa fa-minus"></i></a> <input class="form-control text-center" ng-model="parameter.order" type="text" ng-change="changeOrder(parameter)"> <a class="btn btn-default input-group-addon" ng-click="plus(parameter)"><i class="fa fa-plus"></i></a></div></td><td ng-if="parameter.selected" width="39px" title="Параметр в списке" class="btn-default text-center my-pointer success" ng-click="dismiss(parameter)"><i class="fa fa-check"></i></td><td ng-if="!parameter.selected" width="39px" title="Добавить параметр" class="btn-default text-center my-pointer" ng-click="append(parameter)"><i class="fa fa-minus"></i></td><td><span ng-bind="parameter.name"></span> <span ng-if="parameter.details" ng-bind="\'(\'+parameter.details+\')\'"></span><ul class="list-inline no-margin"><li class="li-params" ng-repeat="v in parameter.values" ng-bind="v.value"></li></ul></td><td width="39px" title="Редактировать параметр" class="btn-warning text-center my-pointer" ng-click="toEdit(parameter._id)"><i class="fa fa-pencil-square-o"></i></td></tr></tbody></table></div></div><div class="row form-group"><div class="col-sm-offset-2 col-sm-10"><a ng-click="save()" class="btn btn-success">Сохранить</a> <span ng-show="noNameError" class="text-danger">Нужно обязательно заполнить поле <strong>Название</strong></span></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/template/list/list.html',
    '<div class="row form-group" ng-show="templates.length==0"><div class="col-sm-12"><span>Вы не создали ни одного шаблона</span> <a ng-click="toNew()" class="btn btn-primary">Создать</a></div></div><div class="row form-group" ng-show="templates.length>0"><div class="col-sm-12"><table class="table table-bordered table-hover"><tbody><tr ng-repeat="template in templates"><td width="39px" title="Редактировать шаблон" class="btn-warning text-center my-pointer" ng-click="toEdit(template._id)"><i class="fa fa-pencil-square-o"></i></td><td ng-bind="template.name"></td><td width="39px" title="Удалить шаблон" class="btn-danger text-center my-pointer" ng-click="toRemove(template._id)"><i class="fa fa-times"></i></td></tr></tbody></table></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/tabs/file/file.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Добавить файл</label><div class="file-input-wrapper col-sm-10"><label for="upload" class="btn btn-primary">Выбрать</label> <input id="upload" type="file" ng-file-select="onFileSelect($files)" multiple=""></div></div><div class="row" ng-if="!category.files || category.files.length==0"><div class="col-sm-10 col-sm-offset-2"><div class="alert alert-info">Вы не загрузили ни одного файла</div></div></div><div ng-if="category.files.length>0" class="row form-group my-border-row" ng-repeat="file in category.files"><div class="col-sm-3"><i class="m-icon-gap" ng-class="\'fa \'+ file.fileType"></i> <a target="_blank" ng-href="{{\'/files/\' + category._id + \'/\' + file.fileId}}" ng-bind="file.fileId"></a></div><div class="col-sm-8 form-horizontal"><div class="form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="file.name"></div></div><div class="form-group"><label class="col-sm-2 control-label">Url</label><div class="col-sm-10"><div class="input-group mm-margin10"><input id="url" ng-model="file.url" ng-change="hideUrlError()" class="form-control"> <a class="btn btn-default input-group-addon" ng-click="makeUrl()"><i class="fa fa-exclamation"></i></a></div></div></div><div class="form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10 ace-details"><a class="m-pointer" ng-click="btf(file.details)">Выровнять</a> <textarea ui-ace="aceOptions" ng-model="file.details"></textarea></div></div></div><div class="col-sm-1"><a title="Удалить фотографию" ng-click="remove(file.fileId)" class="btn btn-danger js-remove"><i class="fa fa-trash-o"></i></a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/tabs/info/info.html',
    '<div class="product-edit"><div class="row form-group"><label class="col-sm-offset-2 col-sm-10 control-label" ng-bind="category.name"></label></div><div class="row"><div class="pull-right col-sm-3 cover-wrap"><a class="cover" target="_blank" ng-href="{{\'https://getyourbag.ru/\'+category.url}}" ng-repeat="photo in category.photos | filter:getCover" ng-if="photo.fileId"><img ng-src="{{\'/photos/\'+category._id+ \'/srv_\'+ photo.fileId}}"></a></div><div class="col-sm-2"><label class="control-label my-pointer" for="title">Title</label><div class="minihelper">знаков: <span class="label label-default" ng-bind="category.title.length"></span></div><div class="minihelper">max 70</div></div><div class="col-sm-7"><textarea id="title" rows="3" ng-model="category.title" class="form-control noresize"></textarea></div><div class="col-sm-2"><label class="control-label my-pointer" for="description">Description</label><div class="minihelper">знаков: <span class="label label-default" ng-bind="category.description.length"></span></div><div class="minihelper">max 300</div></div><div class="col-sm-7"><textarea id="description" rows="5" ng-model="category.description" class="form-control noresize"></textarea></div></div><div class="row form-group"><label class="col-sm-2 control-label">Краткое описание</label><div class="col-sm-10 ace-details"><a class="m-pointer" ng-click="btf(\'shortDescription\', category.shortDescription)">Выровнять</a><div ui-ace="aceOptions" ng-model="category.shortDescription"></div></div></div><div class="row form-group"><label class="col-sm-2 control-label">Полное описание</label><div class="col-sm-10 ace-information"><a class="m-pointer" ng-click="btf(\'longDescription\', category.longDescription)">Выровнять</a><div ui-ace="aceOptions" ng-model="category.longDescription"></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/tabs/main/main.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Родительская категория</label><div class="col-sm-10 form-inline"><a title="Выбрать родительскую категорию" ng-click="showParents()" class="bl btn btn-primary margin-right-10">Выбрать</a> <b ng-if="category.parent.name" style="display: inline-block" class="list-inline" ng-bind="category.parent.name"></b></div></div><div class="row form-group"><label class="col-sm-2 control-label text-nowrap">Название <i class="fa fa-asterisk my-red"></i></label><div class="col-sm-10"><input type="text" class="form-control" ng-model="category.name" ng-model-options="{updateOn:\'input\'}" ng-change="nameToUrl()"></div></div><div class="row form-group"><label class="col-sm-2 control-label text-nowrap">Url</label><div class="col-sm-10"><div class="input-group m-input-group"><input id="url" ng-model="category.url" ng-change="hideUrlError()" class="form-control"> <a class="btn btn-default input-group-addon" ng-click="nameToUrl(true)" title="Создать url из названия"><i class="fa fa-refresh"></i></a></div></div></div><div class="row form-group"><label for="urlText" class="col-sm-2 control-label text-nowrap">Текст Url</label><div class="col-sm-10"><input id="urlText" type="text" class="form-control" ng-model="category.urlText"></div></div><div class="row form-group"><label class="col-sm-2 control-label my-pointer" for="publish">Опубликовано</label><div class="col-sm-10"><label for="publish" class="my-pointer regular"><input type="checkbox" id="publish" ng-model="category.publish"> <span ng-if="category.publish">Пользователи видят эту категорию</span> <span ng-if="!category.publish">Не показывается на сайте</span></label></div></div><div class="row form-group"><label class="col-sm-2 control-label">Порядок</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="category.order" placeholder="порядковый номер для сортировки 1,2 или 3 и т.д."></div></div><div class="row form-group"><label for="ymlCategoryId" class="col-sm-2 control-label text-nowrap">YML Category Id *</label><div class="col-sm-10"><input id="ymlCategoryId" type="text" class="form-control" ng-model="category.ymlCategoryId" placeholder="идентификатор категории для яндекс маркета"></div></div><div class="row form-group"><label for="ymlMarketCategory" class="col-sm-2 control-label text-nowrap">YML Market Category *</label><div class="col-sm-10"><input id="ymlMarketCategory" type="text" class="form-control" ng-model="category.ymlMarketCategory" placeholder="полное название категории яндекс маркета"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Шаблон</label><div class="col-sm-10 form-inline"><a title="Выбрать шаблон параметров" ng-click="showTemplates()" class="bl btn btn-primary margin-right-10">Выбрать</a> <b ng-if="category.template.name" style="display: inline-block" class="list-inline" ng-bind="category.template.name"></b></div></div><div class="row form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10"><textarea rows="4" class="form-control" ng-model="category.details"></textarea></div></div><div class="row"><div class="col-sm-offset-2 col-sm-10"><b>*</b> <span>Значения в этих полях указывается, только если пользователь понимает, что он делает</span></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/category/tabs/photo/photo.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Добавить фото</label><div class="file-input-wrapper col-sm-10"><label for="upload" class="btn btn-primary">Выбрать</label> <input id="upload" type="file" ng-file-select="onFileSelect($files)" multiple=""></div></div><div class="row form-group my-border-row" ng-repeat="photo in category.photos"><div class="col-sm-3"><img class="img-responsive" ng-src="{{\'/photos/\' + category._id + \'/m_\' + photo.fileId}}"></div><div class="col-sm-8 form-horizontal"><div class="form-group"><label for="name" class="col-sm-2 control-label">Название</label><div class="col-sm-10"><input id="name" type="text" class="form-control" ng-model="photo.name"></div></div><div class="form-group"><label for="alt" class="col-sm-2 control-label">Alt</label><div class="col-sm-10"><input id="alt" type="text" class="form-control" ng-model="photo.alt"></div></div><div class="form-group"><label for="details" class="col-sm-2 control-label">Описание</label><div class="col-sm-10"><input id="details" type="text" class="form-control" ng-model="photo.details"></div></div><div class="form-group"><label class="col-sm-2 control-label">Настройки</label><div class="col-sm-10"><label class="checkbox-inline"><input type="radio" ng-model="photo.fileType" value="cover" ng-change="resize(photo.fileType)">Обложка</label> <label class="checkbox-inline"><input type="radio" ng-model="photo.fileType" value="jumbo" ng-change="resize(photo.fileType)">Джумбо</label></div></div></div><div class="col-sm-1"><a title="Удалить фотографию" ng-click="remove(photo.fileId)" class="btn btn-danger js-remove"><i class="fa fa-trash-o"></i></a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/convert/convert.html',
    '<div class="row"><div class="col-sm-12" ng-bind-html="product.fileTemplate"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/file/file.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Добавить файл</label><div class="file-input-wrapper col-sm-10"><label for="upload" class="btn btn-primary">Выбрать</label> <input id="upload" type="file" ng-file-select="onFileSelect($files)" multiple=""></div></div><div class="row" ng-if="!product.files || product.files.length==0"><div class="col-sm-10 col-sm-offset-2"><div class="alert alert-info">Вы не загрузили ни одного файла</div></div></div><div ng-if="product.files.length>0" class="row form-group my-border-row" ng-repeat="file in product.files"><div class="col-sm-3"><i ng-class="\'fa \'+ file.type"></i> <a target="_blank" ng-href="{{\'/files/\' + product._id + \'/\' + file.fileId}}" ng-bind="file.fileId"></a> <a title="Конвертировать Docx в Html страницу" ng-click="convert(product._id, file._id)" class="btn btn-primary">Конвертировать</a></div><div class="col-sm-8 form-horizontal"><div class="form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="file.name"></div></div><div class="form-group"><label class="col-sm-2 control-label">Url</label><div class="col-sm-10"><div class="input-group mm-margin10"><input id="url" ng-model="file.url" ng-change="hideUrlError()" class="form-control"> <a class="btn btn-default input-group-addon" ng-click="makeUrl()"><i class="fa fa-exclamation"></i></a></div></div></div><div class="form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10 ace-details"><a class="m-pointer" ng-click="btf(file.details)">Выровнять</a> <textarea ui-ace="aceOptions" ng-model="file.details"></textarea></div></div></div><div class="col-sm-1"><a title="Удалить фотографию" ng-click="remove(file.fileId)" class="btn btn-danger"><i class="fa fa-trash-o"></i></a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/info/info.html',
    '<div class="product-edit"><div class="row form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10 control-label" ng-bind="product.name"></div></div><div class="row"><div class="pull-right col-sm-3 cover-wrap"><a class="cover" target="_blank" ng-href="{{\'https://getyourbag.ru/\'+product.category.url+\'/\'+product.url}}" ng-repeat="photo in product.photos | filter:getCover" ng-if="photo.fileId"><img ng-src="{{\'/photos/\'+product._id+ \'/srv_\'+ photo.fileId}}"></a></div><div class="col-sm-2"><label class="control-label my-pointer" for="title">Заголовок</label><div class="minihelper">знаков: <span class="label label-default" ng-bind="product.title.length"></span></div><div class="minihelper">max 70</div></div><div class="col-sm-7"><textarea id="title" rows="3" ng-model="product.title" class="form-control noresize"></textarea></div><div class="col-sm-2"><label class="control-label my-pointer" for="description">Краткое описание</label><div class="minihelper">знаков: <span class="label label-default" ng-bind="product.description.length"></span></div><div class="minihelper">max 300</div></div><div class="col-sm-7"><textarea id="description" rows="5" ng-model="product.description" class="form-control noresize"></textarea></div></div><div class="row form-group"><div class="col-sm-2"><label class="control-label control-label" for="details">Краткое описание</label><div class="minihelper">(лишнее)</div></div><div class="col-sm-10 ace-details"><textarea id="details" rows="5" ng-model="product.details" class="form-control noresize"></textarea></div></div><div class="row form-group"><label class="col-sm-2 control-label">Полное описание</label><div class="col-sm-10 ace-information"><a class="m-pointer" ng-click="btf(\'information\', product.information)">Выровнять</a><div ui-ace="aceOptions" ng-model="product.information"></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/main/main.html',
    '<div class="product-edit"><div class="row form-group"><label class="col-sm-2 control-label">Категория</label><div class="col-sm-10 form-inline"><a title="Выбрать категорию продукта" ng-click="showCategories()" class="bl btn btn-primary margin-right-10">Выбрать</a> <span class="my-cat-selected bg-info" ng-bind="product.category.name" ng-if="product.category.name"></span></div></div><div class="row"><div class="pull-right col-sm-3 cover-wrap"><a class="cover" target="_blank" ng-href="{{\'https://getyourbag.ru/\'+product.category.url+\'/\'+product.url}}" ng-repeat="photo in product.photos | filter:getCover" ng-if="photo.fileId"><img ng-src="{{\'/photos/\'+product._id+ \'/srv_\'+ photo.fileId}}"></a></div><div class="form-group"><label class="col-sm-2 control-label my-pointer" for="name">Название <i class="fa fa-asterisk my-red"></i></label><div class="col-sm-7"><input id="name" ng-model="product.name" class="form-control" ng-model-options="{updateOn:\'input\'}" ng-change="nameToUrl()"></div></div><div class="form-group"><label class="col-sm-2 control-label my-pointer" for="url">Url</label><div class="col-sm-7"><div class="input-group mm-margin10"><input id="url" ng-model="product.url" ng-change="hideUrlError()" class="form-control"> <a class="btn btn-default input-group-addon" ng-click="nameToUrl(true)" title="Создать url из названия"><i class="fa fa-refresh"></i></a></div></div></div><div class="form-group"><label class="col-sm-2 control-label my-pointer" for="code">Модель</label><div class="col-sm-7"><input id="code" ng-model="product.code" class="form-control"></div></div><div class="form-group"><label class="col-sm-2 control-label my-pointer" for="article">Артикул</label><div class="col-sm-7"><input id="article" ng-model="product.article" class="form-control"></div></div><div class="form-group"><label class="col-sm-2 control-label my-pointer" for="storeNumber">Номер на складе</label><div class="col-sm-7"><input id="storeNumber" ng-model="product.storeNumber" class="form-control"></div></div><div class="form-group"><label class="col-sm-2 control-label my-pointer" for="purchase">Закупочная цена</label><div class="col-sm-7"><input id="purchase" ng-model="product.purchase" class="form-control"></div></div></div><div class="row"><label class="col-sm-2 control-label my-pointer" for="price">Цена</label><div class="col-sm-10"><input id="price" ng-model="product.price" class="form-control"></div></div><div class="row"><label class="col-sm-2 control-label my-pointer" for="price">Акция</label><div class="col-sm-10"><label for="stock" class="my-pointer regular margin-right-10"><input type="checkbox" id="stock" ng-model="product.stock" ng-change="addStockText()"> <span ng-if="product.stock">Акция включена</span> <span ng-if="!product.stock">Не попадает под акцию</span></label> <a href="#" ng-click="addStockText(true)">Добавить стандартный текст</a> <input id="stockText" ng-model="product.stockText" class="form-control"></div></div><div class="row form-group"><label class="col-sm-2 control-label my-pointer" for="publish">Опубликовано</label><div class="col-sm-10"><label for="publish" class="my-pointer regular"><input type="checkbox" id="publish" ng-model="product.publish"> <span ng-if="product.publish">(Пользователи видят это товар)</span> <span ng-if="!product.publish">(Не показывается на сайте)</span></label></div></div><div class="row"><label class="col-sm-2 control-label my-pointer" for="count">Наличие</label><div class="col-sm-10"><div class="input-group my-count"><a class="btn btn-default input-group-addon" ng-click="minus()"><i class="fa fa-minus"></i></a> <input id="count" ng-model="product.count" class="form-control text-center"> <a class="btn btn-default input-group-addon" ng-click="plus()"><i class="fa fa-plus"></i></a></div></div></div><div class="row"><label class="col-sm-2 control-label my-pointer" for="special">Лучший товар</label><div class="col-sm-10 checkbox"><label><input type="checkbox" id="special" ng-model="product.special"> <span ng-if="product.special">(Показывается на главной странице)</span> <span ng-if="!product.special">(Отсутствует на главной странице)</span></label></div></div><div class="row form-group"><label class="col-sm-2 control-label">Параметры</label><div class="col-sm-10"><label ng-bind="product.template.name">шаблон не выбран</label><table class="table table-bordered my-params"><thead><tr><th width="1%">название</th><th>значение</th><th width="1%">ед.изм</th></tr></thead><tbody><tr ng-repeat="p in product.parameters" ng-if="!p.parameter.field"><td><span class="text-nowrap" ng-bind="p.parameter.name"></span></td><td><select class="form-control" ng-model="p.selected" ng-options="v._id as v.value for v in p.parameter.values"><option value="">выбрать</option></select></td><td width="1%"><span ng-bind="p.parameter.unit"></span></td></tr></tbody></table></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/photo/photo.html',
    '<form class="product-photos"><div class="row form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10 control-label" ng-bind="product.name"></div></div><div class="row form-group"><label class="col-sm-2 control-label">Добавить фото</label><div class="file-input-wrapper col-sm-9"><label for="upload" class="btn btn-primary"><i class="fa fa-picture-o m-icon-gap"></i> Выбрать</label> <input id="upload" type="file" ng-file-select="onFileSelect($files)" multiple=""></div></div><div class="row form-group"><label class="col-sm-2 control-label">Обновить размеры</label><div class="col-sm-10"><a class="btn btn-success" ng-click="refresh()"><i class="fa fa-refresh"></i></a></div></div><div class="row"><div class="col-xs-12 col-sm-6 col-md-4" ng-repeat="photo in product.photos"><div class="image-item"><div class="image-row"><div style="flex-basis: 40px; text-align: center"><span ng-bind="$index+1"></span></div><div style="flex-grow:1;text-align: center;"><img ng-src="{{\'/photos/\'+product._id+ \'/srv_\'+photo.fileId}}"></div><div><a title="Удалить фотографию" ng-click="remove(photo.fileId)" class="btn btn-danger text-center my-pointer"><i class="fa fa-trash-o"></i></a></div></div><div class="image-row"><div style="padding: 0 15px; flex-basis: 50%"><label style="display: block">Тип</label><ul class="list-unstyled"><li class="radio"><label><input type="radio" ng-model="photo.fileType" value="cover" ng-change="resize(photo.fileType)">обложка</label></li><li class="radio"><label><input type="radio" ng-model="photo.fileType" value="image" ng-change="resize(photo.fileType)">картинка</label></li><li class="radio"><label><input type="radio" ng-model="photo.fileType" value="list" ng-change="resize(photo.fileType)">скрыть</label></li></ul></div><div style="padding: 0 15px; flex-basis: 50%" ng-if="photo.fileType==\'image\'"><label>Порядок</label><div class="input-group"><a class="btn btn-default input-group-addon" ng-click="down(photo)"><i class="fa fa-chevron-down"></i></a> <input id="count" ng-model="photo.order" class="form-control text-center"> <a class="btn btn-default input-group-addon" ng-click="up(photo)"><i class="fa fa-chevron-up"></i></a></div></div></div></div></div></div></form>');
}]);
})();

(function(module) {
try {
  module = angular.module('admin-templates');
} catch (e) {
  module = angular.module('admin-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('admin/pages/product/tabs/video/video.html',
    '<div class="row form-group"><label class="col-sm-2 control-label">Добавить видео</label><div class="file-input-wrapper col-sm-8"><input class="form-control" ng-model="uploadvideo"></div><div class="col-sm-2"><a class="btn btn-primary" ng-click="addVideo()">Добавить</a></div></div><div class="row form-group" ng-repeat="video in product.videos"><div class="col-sm-3"><iframe ng-src="{{trustSrc(video.path)}}"></iframe></div><div class="col-sm-8 form-horizontal"><div class="form-group"><label class="col-sm-2 control-label">Название</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="video.name"></div></div><div class="form-group"><label class="col-sm-2 control-label">Ссылка</label><div class="col-sm-10"><input type="text" class="form-control" ng-model="video.path"></div></div><div class="form-group"><label class="col-sm-2 control-label">Описание</label><div class="col-sm-10"><textarea rows="4" class="form-control" ng-model="video.details"></textarea></div></div></div><div class="col-sm-1"><a title="Удалить видео" ng-click="deleteVideo()" class="btn btn-danger js-remove"><i class="fa fa-trash-o"></i></a></div></div>');
}]);
})();

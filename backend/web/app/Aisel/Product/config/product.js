'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            AiselProduct
 * @description     Module configuration
 */

define(['app'], function (app) {
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state("products", {
                url: "/:locale/products/",
                templateUrl: '/app/Kernel/Resource/views/collection.html',
                controller: 'ProductCtrl'
            })
            .state("productView", {
                url: "/:locale/product/view/:id/",
                templateUrl: '/app/Aisel/Product/views/product-detail.html',
                controller: 'ProductDetailCtrl'
            })
    }]);
});
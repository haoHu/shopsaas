/**
 * 加载config代码，同时加载其他依赖库，然后根据路由情况加载页面逻辑部分的模块
 */
require(['config', 'vendor'], function () {
	require(['jquery', 'underscore', 'Handlebars', 'Bootstrap', 'stapes', 'IX' ,'common'], function () {
		console.info(arguments);
		var init = function () {
			Hualala.PageRoute.start(function (pageName, pageParams, pageInitFn) {
				require([pageName], function (ctrl) {
					pageInitFn && pageInitFn.apply(null, [pageName, pageParams]);
					ctrl.init();
				});
				
			});
		};
		init();
		
	});
});
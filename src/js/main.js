/**
 * 加载config代码，同时加载其他依赖库，然后根据路由情况加载页面逻辑部分的模块
 */
require(['config', 'vendor'], function (config, vendor) {
	var location = document.location,
		hash = location.hash;
	if (hash == '#login') {
		require(['app/page1/control1']);
	} else  if (hash == '#home') {
		require(['app/page2/control2']);
	}
	
});
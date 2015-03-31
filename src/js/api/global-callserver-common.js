(function () {
	IX.ns("Hualala.Global");
	var HG = Hualala.Global;
	// 接口引擎
	var ajaxEngine = Hualala.ajaxEngine;
	// 接口设置
	var MappingURLs = [
		["loginCallServer", "/login.ajax", "", "POST"]
	];
	HG.APIMappingUrls = MappingURLs;
	// 接口注册
	ajaxEngine.mappingUrls(MappingURLs);
	// 接口装载
	HG.commonCallServer = ajaxEngine.createCaller(_.map(MappingURLs, function (urlCfg) {
		var cName = urlCfg[0];
		return cName;
	}));
	// 接口同步
	_.each(MappingURLs, function (urlCfg) {
		var cName = urlCfg[0];
		HG[cName] = (function (n) {
			return function (params, cbFn) {
				Hualala.Global.commonCallServer(n, params, cbFn);
			};
		})(cName);
	});
})();
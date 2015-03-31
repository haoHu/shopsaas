/**
 * AJAX Engine 
 * 项目接口的引擎，用于构建接口库的定义与调用
 */
(function () {
	var RouteAttrDefValue = {name :"", url : "", urlType : "site", type : "GET"};
	function urlItemFn(columns, urlDef){
		return IX.loop(columns, {}, function(acc, name, idx){
			var _value = urlDef.length>idx?urlDef[idx]:null;
			if (IX.isEmpty(_value))
				_value = RouteAttrDefValue[name];
			acc[name] = _value;
			return acc;
		});
	}
	// columns : ["name", "url", "urlType"] , // or  ["name", "url", "urlType", "type"]
	function UrlStore(columns){
		var _routes = new IX.IListManager();
		var _urlItemFn = function(urlDef){
			var routeName = urlDef[0];
			if (!IX.isEmpty(routeName))
				_routes.register(routeName, urlItemFn(columns, urlDef));
		};
		return {
			map : function(urlList){IX.iterate(urlList, _urlItemFn);},
			getAll : _routes.getAll,
			get :  _routes.get
		};
	}

	var urlEngine = IX.urlEngine, ajaxEngine = IX.ajaxEngine;
	var urlStore = new UrlStore(["name", "url", "urlType"]),
		ajaxStore = new UrlStore(["name", "url", "urlType", "type"]);
	var urlGenerator = null; //function(name, params){return "";};
	function _urlGenerator(name, params){
		return  IX.isFn(urlGenerator)?urlGenerator(name, params):"";
	}

	/** routeDef : "routeName" or  {
	 * 		name:  "routeName",
	 * 		channel: "",
	 * 		url : function(params){},
	 * 		preAjax : function(name, params){return paramsl;}, // default null;
	 * 		postAjax : function(name, params, cbFn){}, //default null;
	 * 		onsuccess : function(data,cbFn, params), 
	 * 		onfail : function(data, failFn, params) // default null;
	 *  }
	 */
	function createEntries(routes, isCaller){
		return ajaxEngine[isCaller?"createCaller": "createRouter"](IX.map(routes, function(routeDef){
			var isRef = IX.isString(routeDef);
			return IX.inherit(ajaxStore.get(isRef?routeDef:routeDef.name), isRef?{}:routeDef);
		}), function (res) {
			if($XP(res, 'resultcode', '') == 'FP10005') {
				document.location.href = Hualala.PageRoute.createPath('login');
				return false;
			}
			return true;
		});
	}
	function initEngine (cfg){
		urlEngine.init(cfg);
		ajaxEngine.init(cfg);
	}

	IX.ns("Hualala");

	Hualala.urlEngine = {
		init : initEngine,
		reset :initEngine,
		/**  urlList : [ [name, url, urlType], ...]  */
		mappingUrls : function(urlList){
			urlStore.map(urlList);
			urlGenerator = urlEngine.createRouter(urlStore.getAll());
		},
		genUrls : function(names){return IX.map(names, _urlGenerator);},
		genUrl : function(name, params){return _urlGenerator(name, params);}
	};
	Hualala.ajaxEngine = {
		init : initEngine,
		reset :initEngine,
		/**  urlList : [ [name, url, urlType, type], ...]  */
		mappingUrls : ajaxStore.map, //function(urlList)
		
		createCaller :  function(routes){return createEntries(routes, true);},
		createRoute : createEntries
	};
})();
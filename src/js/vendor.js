/**
 * 这里包含第三方的库，例如Bootstrap、underscore、handlebars等，以及项目自身的公共库文件
 */
require.config({
	baseUrl : './js',
	paths : {

	},
	// 针对不支持AMD标准的文件
	shim : {
		'underscore' : {
			exports : '_'
		},
		'Handlebars' : {
			exports : 'Handlebars'
		},
		'Bootstrap' : {
			exports : 'bs',
			deps : ['jquery']
		},
		'stapes' : {
			exports : 'stapes'
		},
		'IX' : {
			exports : 'IX'
		}
	}
});

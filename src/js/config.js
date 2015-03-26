/**
 * 这里发布后，将包含第三方库jQuery
 */
require.config({
	baseUrl : './js',
	paths : {
		jquery : "vendor/jquery/jquery",
		underscore : "vendor/underscore/underscore",
		Handlebars : "vendor/handlebars/handlebars",
		stapes : 'vendor/stapes/stapes',
		Bootstrap : 'vendor/bootstrap/bootstrap',
		plugTest : 'plugin/jquery.plugTest',
		IX : 'common/ixutils',
		app : './app'
	},
	shim : {
		'underscore' : {
			exports : '_'
		},
		'Handlebars' : {
			exports : 'Handlebars'
		},
		'plugTest' : {
			deps : ['jquery'],
			exports : 'jQuery.fn.plugTest'
		},
		'Bootstrap' : {
			exports : 'bs',
			deps : ['jquery']
		}
	}
})
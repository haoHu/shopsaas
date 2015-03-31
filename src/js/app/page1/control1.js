define(function (require) {
	var $ = require('jquery'),
		_ = require('underscore'),
		stapes = require('stapes'),
		hbr = require('Handlebars'),
		model = require('app/page1/model1'),
		view = require('app/page1/view1');
	
	return {
		init : function () {
			$(function () {
				$('body').append('<p>Login page inited!</p>');
				view.render(model.getData());
				console.info(model.getData());
				console.info(_);
				console.info(stapes);
				console.info(hbr);
			});
		}
	};
});
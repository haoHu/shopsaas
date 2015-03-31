define(function (require) {
	var $ = require('jquery'),
		_ = require('underscore'),
		stapes = require('stapes'),
		hbr = require('Handlebars'),
		model = require('app/page2/model2'),
		view = require('app/page2/view2');
	
	return {
		init : function () {
			$(function () {
				$('body').append('<p>Home page inited!</p>');
				view.render(model.getData());
				console.info(model.getData());
				console.info(_);
				console.info(stapes);
				console.info(hbr);
			});
		}
	};
});
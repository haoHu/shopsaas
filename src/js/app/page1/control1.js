define(function (require) {
	var $ = require('jquery'),
		_ = require('underscore'),
		stapes = require('stapes'),
		hbr = require('Handlebars'),
		model = require('app/page1/model1'),
		view = require('app/page1/view1');
	$(function () {
		$('body').append('<p>Main1 page inited!</p>');
		view.render(model.getData());
		console.info(model.getData());
		console.info(_);
		console.info(stapes);
		console.info(hbr);
	});
});
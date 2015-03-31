define(['jquery', 'underscore'], function ($, _) {
	return {
		render : function (data) {
			$('body').empty();
			$('body').append('<p>name : ' + data.name + ', age : ' + data.age + ', sex : ' + data.sex + '</p>');
			$('body').append('<ul><li><a href="#home">Page2</a></li></ul><br/>name : ' + data.name + ', age : ' + data.age + ', sex : ' + data.sex + '</p>');
		}
	}
});
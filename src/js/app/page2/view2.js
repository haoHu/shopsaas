define(['jquery', 'underscore'], function ($, _) {
	return {
		render : function (data) {
			$('body').empty();
			$('body').append('<p>This is Module2 Page</p>');
			$('body').append('<p>name : ' + data.name + ', age : ' + data.age + ', sex : ' + data.sex + '</p>');
		}
	}
});
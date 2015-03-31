define(['jquery', 'underscore'], function ($, _) {
	return {
		render : function (data) {
			$('body').empty();
			$('body').append('<p>This is Home Page</p>');
			$('body').append('<p>name : ' + data.name + ', age : ' + data.age + ', sex : ' + data.sex + '</p>');
			$('body').append('<ul><li><a href="#login">Login</a></li></ul>');
		}
	}
});
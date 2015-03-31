'use strict';
module.exports = function (grunt) {
	var fs = require('fs'),
		path = require('path');
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	var banner = "Hualala SAAS FE Project";

	var config = {
		src : "src",
		dist : "dist",
		test : "test",
		pkg : grunt.file.readJSON("package.json"),
		connect : {
			port : 9000,
			hostname : 'localhost'
		},
		banner : '/*!' + banner + '\n' +
			'* <%= config.pkg.name %> -v <%= config.pkg.version %>-\n' + 
			'<%= config.pkg.homepage ? "* " + config.pkg.homepage + "\\n" : "" %>' + 
			'* Copyright (c) <%= grunt.template.today("yyyy")%> <%= config.pkg.author.name %> (<%= config.pkg.author.homepage %>) */\n'
	};

	grunt.initConfig({
		config : config,
		// 清空临时目录下的资源文件
		clean : {
			server : '.tmp',
			dist : {
				files : [{
					dot : true,
					src : [
						'.tmp',
						'<%= config.dist %>/*',
						'<%= config.dist %>/.git*'
					]
				}]
			}
		},
		// JS语法校验
		jshint : {
			options : {
				jshintrc : 'jshint.jshintrc',
				globals : {
					jQuery : true,
					console : true,
					module : true,
					document : true,
					IX : true
				},
				reporter : require('jshint-stylish')
			},
			all : [
				'Gruntfile.js',
				'<%= config.src %>/js/{,*/}*.js',
				'<%= config.test %>/{.*/}*.js'
			]
		},
		// 监听文件变化
		watch : {
			bower : {
				files : ['bower.json'],
				tasks : ['wiredep']
			},
			js : {
				files : ['<%= config.src %>/js/{,*/}*.js', '<%= config.src %>/test.js'],
				tasks : ['jshint'],
				options : {
					livereload : true
				}
			},
			jstest : {
				files : ['test/spec/{,*/}*.js'],
				tasks : ['test:watch']
			},
			gruntfile : {
				files : ['Gruntfile.js']
			},
			less : {
				files : ['<%= config.src %>/css/{,*/}*.less'],
				tasks : ['less']
			},
			css : {
				files : ['<%= config.src %>/css/{,*/}*.css'],
				tasks : ['newer:copy:css']
			},
			livereload : {
				options : {
					livereload : '<%= connect.options.livereload %>'
				},
				files : [
					'<%= config.src %>/{,*/}*.html',
					'.tmp/css/{,*/}*.*',
					'<%= config.src %>/img/{,*/}*'
				]
			}
		},
		// 将bower依赖自动拷贝到指定目录位置
		bower : {
			install : {
				options : {
					targetDir : '<%= config.src %>/js/vendor',
					layout : function (type, component, source) {
						var surfix = source.slice(source.lastIndexOf('.') + 1);
						var renameType = '';
						if (surfix == 'js') {
							renameType = surfix;
							return path.join(component);
						} else if (surfix == 'css' || surfix == 'less') {
							renameType = 'css';
							return path.join(component, '../../../' + renameType);
						} else {
							renameType = 'fonts';
							return path.join(component, '../../../' + renameType);
						}
						// return path.join(component, renameType);
					},
					install : true,
					verbose : false,
					cleanTargetDir : false,
					cleanBowerDir : false,
					bowerOptions : {

					}
				}
			}
		},
		concurrent : {
			server : [
				'less',
				'copy:css'
			],
			test : [
				'less',
				'copy:css'
			],
			dist : [
				'less',
				'copy:css',
				'svgmin'
			]
		},
		connect : {
			options : {
				port : '<%= config.connect.port %>',
				open : true,
				livereload : 35729,
				hostname : '<%= config.connect.hostname %>'
			},
			livereload : {
				options : {
					middleware : function (connect) {
						return [
							connect.static('.tmp'),
							connect().use('/bower_components', connect.static('./bower_components')),
							connect().use('/test', connect.static('./test')),
							connect.static(config.src)
						]
					}
				}
			},
			test : {
				options : {
					open : false,
					port : 9001,
					middleware : function (connect) {
						return [
							connect.static('.tmp'),
							connect.static('.test'),
							connect().use('/bower_components', connect.static('./bower_components')),
							connect.static(config.src)
						];
					}
				}
			},
			dist : {
				options : {
					base : '<%= config.dist %>',
					livereload : false
				}
			}
		},
		less : {
			options : {
				report : 'min'
			},
			compile : {
				files : {
					"<%= config.src %>/css/core.css" : "<%= config.src %>/css/core.less"
				}
			}
		},
		copy : {
			css : {
				expand : true,
				dot : true,
				cwd : '<%= config.src %>/css',
				dest : '.tmp/css',
				src : '{,*/}*.css'
			}
		},
		targethtml : {
			dev : {
				files : {
					'.tmp/index.html' : '<%= config.src %>/index.html'
				}
			},
			mu : {
				files : {
					'<%= config.dist %>/index.html' : '<%= config.dist %>/index.html'
				}
			},
			dohko : {
				files : {
					'<%= config.dist %>/index.html' : '<%= config.dist %>/index.html'
				}
			},
			dist : {
				files : {
					'<%= config.dist %>/index.html' : '<%= config.dist %>/index.html'
				}
			}
		},
		requirejs : {
			compile : {
				options : {
					appDir : "<%= config.src %>",
					mainConfigFile : "<%= config.src %>/js/config.js",
					dir : "<%= config.dist %>/",
					modules : [
						// config file 预加载全局的jQuery
						{
							name : "config",
							include : ["jquery"]
						},
						// vendor files 打包所有依赖的库文件
						{
							name : "vendor",
							include : ["Bootstrap", "Handlebars", "underscore", "stapes", "IX"],
							exclude : ["config"]
						},
						// common files 打包工程的公共文件
						{
							name : "common",
							include : [
								"common/datatype",
								"common/typedef",
								"common/ajaxEngine",
								"common/commonFn",
								"common/router",
								"api/global-const",
								"api/global-url",
								"api/global-callserver-common",
								"route/pageroute"
							],
							exclude : ["config", "vendor"]
						},
						// pymatch
						{
							name : "pymatch/matcher",
							include : [
								"pymatch/pymatch"
							]
						},
						// 模块打包
						{
							name : "app/page1/control1",
							exclude : ["config", "vendor"]
						},
						{
							name : "app/page2/control2",
							exclude : ["config", "vendor"]
						}
					]
				}
			}
		}
		

	});

	grunt.registerTask('serve', 'Start the server and preview your app, --allow-remote for remote access', function (target) {
		if (grunt.option('allow-remote')) {
			grunt.config.set('connect.options.hostname', '0.0.0.0');
		}
		if (target === 'dist' || target === 'mu' || target === 'dohko') {
			return grunt.task.run(['build:' + target, 'connect:dist:keepalive']);
		}
		grunt.task.run([
					'clean:server',
					'bower',
					'targethtml:dev',
					'concurrent:server',
					'connect:livereload',
					'watch'
				]);
	});

	grunt.registerTask('build', function (target) {
		var htmlTarget = !target ? 'dev' : target;
		grunt.task.run([
			'clean:dist',
			'bower',
			'targethtml:' + htmlTarget,
			'requirejs'
			]);
	});
};
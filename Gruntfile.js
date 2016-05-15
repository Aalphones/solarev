module.exports = function (grunt) {
    var jsFilesToIgnore = [
        'js/compressed.js'
    ];
    var jsFilesToIgnoreNegated = [];

    for (var i = 0; i < jsFilesToIgnore.length; i++) {
        jsFilesToIgnoreNegated.push('!' + jsFilesToIgnore[i]);
    }

    var compressOptions = {
        mode: 'gzip',
        level: 9
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                ignores: jsFilesToIgnore
            },
            src: [
                'js/app.js'
            ]
        },
        uglify: {
            options: {
                sourceMap: true,
                preserveComments: 'none',
                mangle: true,
                compress: {}
            },
            files: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/materialize-css/bin/materialize.js',
                    'js/materialize_init.js',
                    'js/app.js'
                ],
                dest: 'js/compressed.js'
            }
        },
        less: {
            dist: {
                options: {
                    style: 'compressed',
                    preserveComments: 'none',
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'css/style.css': 'css/style.less'
                }
            }
        },
        compress: {
            javascript: {
                options: compressOptions,
                files: {
                    'js/compressed.js.gz': 'js/compressed.js'
                }
            },
            css: {
                options: compressOptions,
                files: {
                    'css/style.css.gz': 'css/style.css'
                }
            }
        },
        watch: {
            uglify: {
                files: [
                    'js/*.js'
                ],
                tasks: ['uglify', 'compress']
            },
            less: {
                files: [
                    'css/*.less',
                    'css/Partials/*.less'
                ],
                tasks: ['less', 'compress']
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['uglify', 'less', 'compress']);

};
'use strict';

module.exports = function(grunt) {

        grunt.initConfig({
                watch: {
                        scripts: {
                                files: ['src/**','index.pug'],
                                tasks: ['sass','pug'],
                                options: {
                                        livereload: true,
                                },
                        },
                },
                sass: {
                        dist: {
                                options: {
                                        style: 'compressed'
                                },
                                files: {
                                        'dist/autumn.css': 'src/main.scss',
                                }
                        }
                },
                pug: {
                        compile: {
                                options: {
                                        data: {
                                                debug: false
                                        }
                                },
                                files: {
                                        'dist/index.html': ['index.pug']
                                }
                        }
                }
        });

        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-pug');
        grunt.loadNpmTasks('grunt-contrib-sass');

        grunt.registerTask('default', ['sass','pug','watch']);

};

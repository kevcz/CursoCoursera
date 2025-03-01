module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

 
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },


        less: {
            dist: {
                files: {
                    'css/styles2.css': 'css/styles2.less'
                }
            }
        },

        copy: {
            main: {
                expand: true,
                src: ['css/**', 'js/**', '*.html', 'node_modules/**'],
                dest: 'distri/',
            }
        },


        watch: {
            css: {
                files: ['css/**/*.scss', 'css/**/*.less'],
                tasks: ['sass', 'less']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registrar tareas
    grunt.registerTask('default', ['sass', 'less', 'copy']);
};
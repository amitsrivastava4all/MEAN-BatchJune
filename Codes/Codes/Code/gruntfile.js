module.exports = function(grunt){
    console.log("Grunt Function Call");
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
              files: ['**/*.js','**/*.css'],
              tasks: ['uglify:myfiles','concat'],
              options: {
                spawn: false,
              },
            },
          },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['css/*.css'],
              dest: 'release/combine.css',
            },
          },
        uglify: {
            myfiles: {
              files: {
                'release/release.min.js': ['js/*.js']
              }
            }
            // },
            // myfiles2: {
            //     files: {
            //       'release/release2.min.js': ['custom/*.js']
            //     }
            //   }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);

}
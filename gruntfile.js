module.exports = function(grunt) {
  grunt.initConfig({

		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
				}
			},
		},

    cssmin: {
      build: {
        src: 'css/style.css',
        dest: 'style.css'
      }
    },

		 uglify: {
		   my_target: {
		     files: {
		       'js/nerra-min.js': ['scripts/nerra.js'],
		       'js/mapbox-projects-min.js' : 'scripts/mapbox-projects.js',
		       'js/mapbox-reserves-min.js' : 'scripts/mapbox-reserves.js'
		     }
		   }
		 },

    watch: {
       sass: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['compass', 'cssmin']
      },
    }

  }); //initConfig


  // run tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass', 'cssmin', 'uglify']);


}; //wrapper function

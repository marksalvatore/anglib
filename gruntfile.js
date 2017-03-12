module.exports = function(grunt) {
  grunt.initConfig({

		sass: {                              
	   dist: {                            
	     options: {            
	       style: 'expanded'
	     },
	     files: {           
	     	'style.css': 'sass.scss',
	     	'components/accordion/style.css': 'components/accordion/sass.scss',
	     	'components/loginform/style.css': 'components/loginform/sass.scss'
	     }
	   }
	 },

	 postcss: {
	   options: {
	     map: false,
	     processors: [
		     //require('pixrem')(), // add fallbacks for rem units
		     require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
		     //require('cssnano')() // minify the result
	     ]
	   },
	   dist: {
	     src: ['style.css', 'components/accordion/style.css', 'components/loginform/style.css']
	   }
	 },

    watch: {
       sass: {
        files: [
          '**/sass.scss'
        ],
        tasks: ['sass', 'postcss']
      },
    }

  }); //initConfig


  // run tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'postcss', 'watch']);


}; //wrapper function

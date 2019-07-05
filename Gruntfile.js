module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcCardsSimpleTemplates',
					standalone: true
				},
				cwd: '.',
				src: ['cards-simple.html'],
				dest: 'wccardssimpletemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['wccardssimpletemplates.js', 'index.js'],
		      dest: 'dist/wccardssimple.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['ngtemplates','concat']);
};
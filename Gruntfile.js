module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      options: {
        configFile: 'karma.conf.js',
      },
      // "random-prod-unmin": {
      //   files: {
      //     src: [
      //       './p5.js',
      //       'src/test.js',
      //       'bench/random.bench.js',
      //     ],
      //   }
      // },
      randomprodmin: {
        options: {
          files: [
            'https://cdnjs.cloudflare.com/ajax/libs/p5.js/<%= pkg.version %>/p5.min.js',
            'src/test.js',
            'bench/random.bench.js',
          ],
        },
      },
      // random: {
      //   files: {
      //     src: [
      //       'libraries/p5.js',
      //       'src/test.js',
      //       'bench/random.bench.js',
      //     ],
      //   }
      // },
      // array: {
      //   files: {
      //     src: [
      //       'src/util.js',
      //       'bench/array.bench.js',
      //       'bench/array.search.bench.js',
      //     ],
      //   }
      // }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
};

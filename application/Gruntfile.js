'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
       watch:{
           js: {
               files:['app/**/*.js','!app/vendors/**/*'],
               tasks:['jshint'],
               options: {
                   livereload: false
               }
           },
           html: {
               files: ['app/**/*.html'],
               tasks: [],
               options: {
                   livereload: false
               }
           }
       },

       jshint: {
           options: {
               jshintrc: '.jshintrc',
               reporter: require('jshint-stylish')
           },
           all: {
               src: ['app/**/*.js','!app/vendors/**/*']
           }
       }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
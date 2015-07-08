/*
 * covreview
 * 
 *
 * Copyright (c) 2015 Rachel Satoyama <rachel.satoyama@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var lcovParse = require('lcov-parse');
var Promise = require('bluebird');
var _ = require('lodash');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
    grunt.task.registerMultiTask('covreview', 'Parsing lcov report and throwing an error if any file in src folder is missing', function() {

     var done = this.async();   
     var data = this.data;

      var files = _.flatten(this.files.map(function(pattern) {
            return pattern.src.map(function(srcFile) {
                return path.resolve(srcFile);
            });
      }));

        new Promise(function(resolve, reject) {
            var lcovReportContents = grunt.file.read(data.reportPath);
            lcovParse(lcovReportContents, function(err, lcovEntries) {
                var lcovFiles = lcovEntries.map(function(lcovEntry) {return path.resolve(lcovEntry.file);});
                resolve(lcovFiles);
            });
        }).then(function(lcovFiles) {

            var missingInLcov = _.difference(files, lcovFiles);
            if (missingInLcov.length > 0) {
                var missingInLcovSerialized = JSON.stringify(missingInLcov, null, 4);
                if (data.strictnessLevel === "ERROR") {
                    grunt.fail.fatal('[WARN] Following files are not in lcov report ' + missingInLcovSerialized);
                } else {
                    console.log('Following files are not in lcov report ' + missingInLcovSerialized);
                }
            }
        
            done();
        });

    });



};

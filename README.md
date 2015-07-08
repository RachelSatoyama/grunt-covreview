# grunt-covreview

> Parsing lcov report and throwing an error if any file in src folder is missing

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install coverage-check --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('coverage-check');
```

## The "covreview" task

### Overview
In your project's Gruntfile, add a section named `covreview` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  covreview: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```


### Usage Example


```js

grunt.initConfig({
  covreview: {
        release: {
            // List of files that are supposed to be in lcov report
            files: [
                {
                    src: "src/js/**/*.js"
                }
            ],
            // Path to lcov report
            reportPath: 'target/reports/core/coverage/phantom/lcov.info',
            strictnessLevel: 'ERROR' // Optional. If present, throws error in case if lcov is missing something
        }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Rachel Satoyama <rachel.satoyama@gmail.com>. Licensed under the MIT license.

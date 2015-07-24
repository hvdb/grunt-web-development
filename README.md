# grunt-angularjs-development


##How to use:  
```javascript

'use strict';
module.exports = function (grunt) {
    var gruntWebDevelopment = require('grunt-web-development')(grunt);

    var spectingularConfigurer = require('spectingular-configurer')(grunt, __dirname);
    var localConfig = spectingularConfigurer.configure();

    var gruntWebDevelopmentConfig  = gruntWebDevelopment.configure(localConfig.gwd);
    spectingularConfigurer.init(gruntWebDevelopmentConfig);
};
```


##Basic config that should be provided  
make an include folder and place a gwd.js file.  
include\gwd.js  


```javascript  

'use strict';

/** gwd configuration. */
module.exports = function () {
    return {
        gwd: {
            fqn: 'localhost',
            seleniumAddress: 'http://localhost:4444/wd/hub', //Only needed if directConnect === false.
            appDirectory: 'app', //Optional, only needed if you defer from the default which is app.
            sourceDirectory: 'js', //Optional, only needed if you defer from the default which is js.
            directConnect: true //If set to true, directConnect will be used by protractor. No seleniumserver is needed
        }
    };
};
```

You can set a seleniumaddress, this can be a grid or a local running webdriver-manager start.  
FQN, the fully qualified name of your machine. This is used so that you can remotely access your machine.  

If you want to use the 'john papa' style.  
You need to provide two extra parameters:  
appDirectory: Name of the root directory where the application lives in. This should have the value: 'src'  
sourceDirectory: Name of the directory where the sources live in. For new style this is 'app'  

##Available grunt options:

start with grunt (and then one of these:)

gwd-serve-direct //Serve local js files  
gwd-test-direct //Test against local js files  

gwd-serve-direct-dist //Serve the files after concat, ngminify, ngannotate etc.  
gwd-test-direct-dist //Concat/ngminify etc and then test.  

##What does it do?

serve: serve the files in the same way as the build does it.  
Test: Test the same way as the build does it.  

It will run karma and protractor tests.

#The following is not yet recommended!
---
This helps you with making the script includes.
You don't need to insert them again.


Add the folowing ot your index.html:
Only if you want to use it without the build!
Currently the build is not support this.
When you want to test/serve based on the build structure run the direct command!!
```
		<!-- build:css  css/the-guide-styles-responsive.min.css-->
        <!-- fileblock:css theGuideStyles -->
        <!-- endfileblock -->
        <!-- endbuild -->
        
        <!-- build:js js/lib/jquery.min.js -->
        <!-- fileblock:js jquery -->
        <!-- endfileblock -->
        <!-- endbuild -->
        <!-- build:js js/lib/angular.min.js -->
        <!-- fileblock:js angular -->
        <!-- endfileblock -->
        <!-- endbuild -->
        <!-- build:js js/lib/deps.min.js -->
        <!-- fileblock:js deps -->
        <!-- endfileblock -->
        <!-- endbuild -->
        
        <!-- build:js js/app.min.js -->
        <!-- fileblock:js app -->
        <!-- endfileblock -->
        <!-- endbuild -->
        
        <!-- build:js js/mocks.min.js -->
        <!-- fileblock:js mocks -->
        <!-- endfileblock -->
        <!-- endbuild -->
```

## Then you can use the following commands:  
gwd-serve-dist  
gwd-test-dist  
gwd-test-dev  
gwd-serve-dev 


##TODO

direct browser options.
Option to provide/override protractor.
livereload

Fixes in the loading of karma files. Those are now hard.
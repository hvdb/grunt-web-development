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
            seleniumAddress: 'http://localhost:4444/wd/hub'
        }
    };
};
```

Add the folowing ot your index.html:

```
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
```

##Available grunt options:

start with grunt *option*

gwd-serve-dist  
gwd-test-dist  
gwd-test-dev  
gwd-serve-dev  


##What does it do?

dist:  

Minifiy ngannotate, etc.  
and test karma and protractor.  

dev:  
Local files.
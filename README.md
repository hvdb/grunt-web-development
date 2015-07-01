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

You can set a seleniumaddress, this can be a grid or a local running webdriver-manager.  
FQN, the fully qualified name of your machine. This is used so that you can remotely access your machine.  

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

start with grunt (and then one of this:)

gwd-serve-dist  
gwd-test-dist  
gwd-test-dev  
gwd-serve-dev  


##What does it do?

You can remove any html script include.  
It will include it for you.  
(make sure you add the fileblocks)  

dist:  

concat, Minifiy ngannotate, etc.  
test: run tests karma and protractor.  

dev:  
Serve local files, don't concat etc.

test: Run karma and protractor.



##TODO

Protractor coverage
direct browser options.
Option to provide/override protractor.
screenshots and save them.
more?


More configuration options. /app is now hard etc.
automatic include karma files.
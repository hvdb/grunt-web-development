# grunt-web-development


#You need npm 3 !

##What is it?

It is an npm module which will provide you with default configuration and tasks that will help you in developing your application.
You no longer need to make your own gruntfile/gulp file.  
If you follow the installation guide and usage guide you should be up and running in 15m!  
It will provide you with some default tasks:

1. Running karma tests.  
2. Running protractor test with *coverage*  
3. Live reload server.  
4. Production ready: It will concat/minify/ngannotate your application so that you can deploy it right into an environment! 

##What is in it for you?
Just develop and don't be bothered with build/test tasks.  
Everything just works out of the box.  

##Example application
If you want to see how it works, have a look at the hello-webbie application.

##How to install  
You can use it in few ways, i will explain the most common use cases here.  
You need to provide some small config, like the selenium address and the FQN.  
There are two ways to do that:  
1. Provide a json config in the gruntWebDevelopment.configure(JSON) method.
2. Make a file and read it and then provide it.  

There are a lot of tasks already provided for you, these should be enough to do your daily work.  
If that is not the case, please read appendex A.


####Gruntfile.js
Put the following in your/a Gruntfile.js
```javascript

'use strict';
module.exports = function (grunt) {
    var gruntWebDevelopment = require('grunt-web-development')(grunt);
    var localConfig = grunt.file.readJSON('include\config.json');
    var gruntWebDevelopmentConfig  = gruntWebDevelopment.configure(localConfig);
    configurer.init(gruntWebDevelopmentConfig);
};
```

####Package.json
Add the following to your package.json.  
You can/must remove all other packages because you don't need them anymore.  
If you need some taks that is not in the grunt-web-develpoment, please read appendex A.  

```json  
"gunt-web-development" : "^0.0.35"
```

####Basic config that should be provided  
As stated earlier you need to provide some configuration for grunt-web-development so that it works.  
Here is an example and the mostly used options. See appendex B for more configuration options.
In the example we are using the chromedriver directly for the protractor tests.  
And we expect thw following:  
1. Application javascript lives in : app/js
2. Test are in test/unit or test/protractor

```json  
 {
    directConnect: true 
}
```

#Usage

##Available grunt options:

```bash
grunt #OPTION_SEE_BELOW#
```

We expected that the html has the script includes that are needed, so all javascript files are referenced there.  
When you want to serve the concated files you need to specify how you want to concat them.  
You can do this quite easily, just add some extra script tags.
Example:  
```html
        <!-- build:js js/app.min.js -->
       Here you must add html script includes for all the files you want to add to app.min.js.
       This is some work, we can also do that automatically with fileblock.
       If you want more information about that please read appendex D.
        <!-- endbuild -->
```

**gwd-serve** :Serve local source js files  
**gwd-test** :Test against local js files  

You can also run a task which will concat, minify and package the javascript files.  
You can test either serve them so you can manually test it or you can run the protractor tests against them.  

**gwd-serve-dist** //Serve the files after concat, ngminify, ngannotate etc.  
**gwd-test-dist** //Concat/ngminify etc and then test.  

*Read appendex C for more detailed information about what the tasks are doing*

#Appendex A.  

How to use other tasks.

#Appendex B.

##Available configuration options:

You can set a seleniumaddress, this can be a grid or a local running webdriver-manager start.  
FQN, the fully qualified name of your machine. This is used so that you can remotely access your machine.  

If you want to use the 'john papa' style.  
You need to provide two extra parameters:  
appDirectory: Name of the root directory where the application lives in. This should have the value: 'src'  
sourceDirectory: Name of the directory where the sources live in. For new style this is 'app'  

#Appendex C
##Taks details


serve: serve the files in the same way as the build does it.  
Test: Test the same way as the build does it.  

It will run karma and protractor tests.
The karma files are included with wiredep, so all bower_component files are available.  
Mocks needs to be loaded with mocks/file.js 

##results

Results are stored in .tmp/results.  
Here you can find karma/jshint/protractor results.  

You can check protractor by starting the html: .tmp/results/protractor/screenshots/report.html  
This will give an overview of the tests and option to show screenshot on failed test.


#Appendex D
##Autowire dependencies.
This helps you with making the script includes.
You don't need to insert them again.

Add the folowing ot your index.html:
Only if you want to use it without the build!
Currently the build is not support this.
When you want to test/serve based on the build structure run the direct command!!
```
		<!-- build:css  css/the-guide-styles-responsive.min.css-->
        <!-- bower:css -->
        <!-- endbower -->
        <!-- endbuild -->
        
        <!-- build:js js/lib/deps.min.js -->
        <!-- bower:js -->
        <!-- endbower -->
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


##The grunt tasks.
If you want to use fileblock you should also use other grunt tasks:  
The working is the same as described in appendex C, but fileblock is also executed.
  
gwd-serve-nw-dist  
gwd-test-nw-dist  
gwd-test-nw  
gwd-serve-nw 


#So what is it lacking? 

This is just a very very early version, expect lots of changes in the coming time.

direct browser options.
Option to provide/override protractor.
livereload

Fixes in the loading of karma files. Those are now hard.

/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();

/* add bootstrap */
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');


/* Add CSS files from DopeTrope theme */
app.import('vendor/dopetrope/css/skel.css');
app.import('vendor/dopetrope/css/style.css');
app.import('vendor/dopetrope/css/style-desktop.css');
/*
app.import('vendor/dopetrope/css/style-1000px.css');
app.import('vendor/dopetrope/css/style-mobile.css');
*/
app.import('vendor/dopetrope/css/font-awesome.min.css');



/* Add JS files from DopeTrope theme */
app.import('vendor/dopetrope/js/skel.min.js');
app.import('vendor/dopetrope/js/skel-layers.min.js');
app.import('vendor/dopetrope/js/init.js');

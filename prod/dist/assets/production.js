eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"production/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: \'production\', // TODO: loaded via config\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, \'production\');\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=production/app.js");

;eval("define(\"production/models/blog\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n     question: DS.attr(\'string\'),\n     answer: DS.attr(\'string\')\n    });\n  });//# sourceURL=production/models/blog.js");

;eval("define(\"production/models/contact\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n     question: DS.attr(\'string\'),\n     answer: DS.attr(\'string\')\n    });\n  });//# sourceURL=production/models/contact.js");

;eval("define(\"production/models/faq\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n     question: DS.attr(\'string\'),\n     answer: DS.attr(\'string\')\n    });\n  });//# sourceURL=production/models/faq.js");

;eval("define(\"production/models/music\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = DS.Model.extend({\n     question: DS.attr(\'string\'),\n     answer: DS.attr(\'string\')\n    });\n  });//# sourceURL=production/models/music.js");

;eval("define(\"production/router\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: ProductionENV.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'music\');\n      this.route(\'blog\');\n      this.route(\'contact\');\n      this.route(\'faq\');\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=production/router.js");

;eval("define(\"production/routes/blog\", \n  [\"ember\",\"ember-data\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var DS = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n     model: function() {\n     this.store.push(\'faq\',{id:1,question:\'Is this a question?\',answer:\'Of course it is.\'});\n     this.store.push(\'faq\',{id:2,question:\'What time is it?\',answer:\'It is now.\'});\n     return this.store.all(\'faq\');\n     }\n    });\n  });//# sourceURL=production/routes/blog.js");

;eval("define(\"production/routes/contact\", \n  [\"ember\",\"ember-data\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var DS = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n     model: function() {\n     this.store.push(\'faq\',{id:1,question:\'Is this a question?\',answer:\'Of course it is.\'});\n     this.store.push(\'faq\',{id:2,question:\'What time is it?\',answer:\'It is now.\'});\n     return this.store.all(\'faq\');\n     }\n    });\n  });//# sourceURL=production/routes/contact.js");

;eval("define(\"production/routes/faq\", \n  [\"ember\",\"ember-data\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var DS = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n     model: function() {\n     this.store.push(\'faq\',{id:1,question:\'Is this a question?\',answer:\'Of course it is.\'});\n     this.store.push(\'faq\',{id:2,question:\'What time is it?\',answer:\'It is now.\'});\n     return this.store.all(\'faq\');\n     }\n    });\n  });//# sourceURL=production/routes/faq.js");

;eval("define(\"production/routes/music\", \n  [\"ember\",\"ember-data\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var DS = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n     model: function() {\n     this.store.push(\'faq\',{id:1,question:\'Is this a question?\',answer:\'Of course it is.\'});\n     this.store.push(\'faq\',{id:2,question:\'What time is it?\',answer:\'It is now.\'});\n     return this.store.all(\'faq\');\n     }\n    });\n  });//# sourceURL=production/routes/music.js");

;eval("define(\"production/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"    <!-- Header -->\\n      <div id=\\\"header-wrapper\\\">\\n        <div id=\\\"header\\\">\\n          <!-- Logo -->\\n            <h1><a href=\\\"index.html\\\"><img src=\\\"assets/images/logo.jpg\\\" /></a></h1>\\n          <!-- Nav -->\\n            <nav id=\\\"nav\\\">\\n              <ul>\\n                <li class=\\\"current\\\"><a href=\\\"/\\\">Home</a></li>\\n                <li><a href=\\\"/music\\\">Music</a></li>\\n                <li><a href=\\\"/blog\\\">Blog</a></li>\\n                <li><a href=\\\"/contact\\\">Contact</a></li>\\n              </ul>\\n            </nav>\\n\\n        \");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\\n\\n          <!-- Banner -->\\n            <section id=\\\"banner\\\">\\n              <header>\\n                <h2>Holler! Welcome to Bitch Please.</h2>\\n                <p>The number one hip hop club night in Dublin</p>\\n              </header>\\n            </section>\\n\\n        </div>\\n      </div>\\n\\n    <!-- Main -->\\n      <div id=\\\"main-wrapper\\\">\\n        <div class=\\\"container\\\">\\n          <div class=\\\"row\\\">\\n            <div class=\\\"12u\\\">\\n\\n              <!-- Portfolio -->\\n                <section>\\n                  <header class=\\\"major\\\">\\n                    <h2>Our Music</h2>\\n                  </header>\\n                  <div class=\\\"row\\\">\\n                    <div class=\\\"4u\\\">\\n                      <section class=\\\"box\\\">\\n                        <a href=\\\"#\\\" class=\\\"image featured\\\"><img src=\\\"assets/images/pic05.jpg\\\" alt=\\\"\\\" /></a>\\n                        <header>\\n                          <h3>House</h3>\\n                        </header>\\n                        <p>House music</p>\\n                        <footer>\\n                          <a href=\\\"#\\\" class=\\\"button alt\\\">Find out more</a>\\n                        </footer>\\n                      </section>\\n                    </div>\\n                    <div class=\\\"4u\\\">\\n                      <section class=\\\"box\\\">\\n                        <a href=\\\"#\\\" class=\\\"image featured\\\"><img src=\\\"assets/images/pic06.jpg\\\" alt=\\\"\\\" /></a>\\n                        <header>\\n                          <h3>Hip Hop</h3>\\n                        </header>\\n                        <p>Hip hop</p>\\n                        <footer>\\n                          <a href=\\\"#\\\" class=\\\"button alt\\\">Find out more</a>\\n                        </footer>\\n                      </section>\\n                    </div>\\n                    <div class=\\\"4u\\\">\\n                      <section class=\\\"box\\\">\\n                        <a href=\\\"#\\\" class=\\\"image featured\\\"><img src=\\\"assets/images/pic07.jpg\\\" alt=\\\"\\\" /></a>\\n                        <header>\\n                          <h3>Dance</h3>\\n                        </header>\\n                        <p>Dance music.</p>\\n                        <footer>\\n                          <a href=\\\"#\\\" class=\\\"button alt\\\">Find out more</a>\\n                        </footer>\\n                      </section>\\n                    </div>\\n                  </div>\\n                </section>\\n\\n            </div>\\n          </div>\\n          <div class=\\\"row\\\">\\n            <div class=\\\"12u\\\">\\n\\n              <!-- Blog -->\\n                <section>\\n                  <header class=\\\"major\\\">\\n                    <h2>Our Blog</h2>\\n                  </header>\\n                  <div class=\\\"row\\\">\\n                    <div class=\\\"6u\\\">\\n                      <section class=\\\"box\\\">\\n                        <a href=\\\"#\\\" class=\\\"image featured\\\"><img src=\\\"assets/images/pic08.jpg\\\" alt=\\\"\\\" /></a>\\n                        <header>\\n                          <h3>Bitch Please Be Back</h3>\\n                          <p>Posted 45 minutes ago</p>\\n                        </header>\\n                        <p>After a short hiatus we are happy to announce that Bitch Please club night is back and in a new location - 4 Dame Lane. We look forward to seeing you Bitches there! </p>\\n                        <footer>\\n                          <ul class=\\\"actions\\\">\\n                            <li><a href=\\\"#\\\" class=\\\"button icon fa-file-text\\\">Continue Reading</a></li>\\n                            <li><a href=\\\"#\\\" class=\\\"button alt icon fa-comment\\\">33 comments</a></li>\\n                          </ul>\\n                        </footer>\\n                      </section>\\n                    </div>\\n                    <div class=\\\"6u\\\">\\n                      <section class=\\\"box\\\">\\n                        <a href=\\\"#\\\" class=\\\"image featured\\\"><img src=\\\"assets/images/pic09.jpg\\\" alt=\\\"\\\" /></a>\\n                        <header>\\n                          <h3>Request yo shit</h3>\\n                          <p>Posted 45 minutes ago</p>\\n                        </header>\\n                        <p>Got some tunes you\'d like to hear at the next Bitch Please night? Hit us up and let us know and if they pass the Bitchometer rating we\'ll be happy to include them</p>\\n                        <footer>\\n                          <ul class=\\\"actions\\\">\\n                            <li><a href=\\\"#\\\" class=\\\"button icon fa-file-text\\\">Continue Reading</a></li>\\n                            <li><a href=\\\"#\\\" class=\\\"button alt icon fa-comment\\\">33 comments</a></li>\\n                          </ul>\\n                        </footer>\\n                      </section>\\n                    </div>\\n                  </div>\\n                </section>\\n\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n\\n    <!-- Footer -->\\n      <div id=\\\"footer-wrapper\\\">\\n        <section id=\\\"footer\\\" class=\\\"container\\\">\\n          <div class=\\\"row\\\">\\n            <div class=\\\"8u\\\">\\n              <section>\\n              <header>\\n                  <h2>Social Media</h2>\\n                </header>\\n                <ul class=\\\"social\\\">\\n                  <li><a class=\\\"icon fa-facebook\\\" href=\\\"#\\\"><span class=\\\"label\\\">Facebook</span></a></li>\\n                  <li><a class=\\\"icon fa-twitter\\\" href=\\\"#\\\"><span class=\\\"label\\\">Twitter</span></a></li>\\n                  <li><a class=\\\"icon fa-dribbble\\\" href=\\\"#\\\"><span class=\\\"label\\\">Dribbble</span></a></li>\\n                  <li><a class=\\\"icon fa-linkedin\\\" href=\\\"#\\\"><span class=\\\"label\\\">LinkedIn</span></a></li>\\n                  <li><a class=\\\"icon fa-google-plus\\\" href=\\\"#\\\"><span class=\\\"label\\\">Google+</span></a></li>\\n                </ul>\\n                <header>\\n                  <h2>Upcoming Events</h2>\\n                </header>\\n                <ul class=\\\"dates\\\">\\n                  <li>\\n                    <span class=\\\"date\\\">Sep <strong>4</strong></span>\\n                    <h3><a href=\\\"#\\\">Bitch Please - Dame Lane</a></h3>\\n                    <p>Bitch Please will be running from our new location in 4 Dame Lane.</p>\\n                  </li>\\n                  <li>\\n                    <span class=\\\"date\\\">Oct <strong>6</strong></span>\\n                    <h3><a href=\\\"#\\\">Bitch Please - Dame Lane</a></h3>\\n                    <p>Bitch Please will be running from our new location in 4 Dame Lane.</p>\\n                  </li>\\n                  <li>\\n                    <span class=\\\"date\\\">Nov <strong>10</strong></span>\\n                    <h3><a href=\\\"#\\\">Bitch Please - Dame Lane</a></h3>\\n                    <p>Bitch Please will be running from our new location in 4 Dame Lane.</p>\\n                  </li>\\n                  <li>\\n                    <span class=\\\"date\\\">Dec <strong>17</strong></span>\\n                    <h3><a href=\\\"#\\\">Bitch Please - Dame Lane</a></h3>\\n                    <p>Bitch Please will be running from our new location in 4 Dame Lane.</p>\\n                  </li>\\n                </ul>\\n              </section>\\n            </div>\\n            <div class=\\\"4u\\\">\\n              <section>\\n                <header>\\n                  <h2>What\'s this all about?</h2>\\n                </header>\\n                <a href=\\\"#\\\" class=\\\"image featured\\\"><img src=\\\"assets/images/pic10.jpg\\\" alt=\\\"\\\" /></a>\\n                <p>\\n                  <strong>Bitch Please</strong> is a hip-hop and house club night that has been running for the past 3 years\\n                </p>\\n                <footer>\\n                  <a href=\\\"#\\\" class=\\\"button\\\">Find out more</a>\\n                </footer>\\n\\n              </section>\\n            </div>\\n          </div>\\n          <div class=\\\"row\\\">\\n            <div class=\\\"12u\\\">\\n\\n              <!-- Copyright -->\\n                <div id=\\\"copyright\\\">\\n                  <ul class=\\\"links\\\">\\n                    <li>&copy; Developed by <a href=\\\"www.peterjwatters.com\\\" target=\\\"_blank\\\">Peter Watters</a>. All rights reserved.</li>\\n                    <li>Design: <a href=\\\"http://html5up.net\\\" target=\\\"_blank\\\">HTML5 UP</a></li>\\n                  </ul>\\n                </div>\\n\\n            </div>\\n          </div>\\n        </section>\\n      </div>\\n\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=production/templates/application.js");

;eval("define(\"production/templates/blog\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n <h2>\");\n      stack1 = helpers._triageMustache.call(depth0, \"question\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n \");\n      stack1 = helpers._triageMustache.call(depth0, \"answer\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"<br />\\n \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<h1>Welcome to the Blog page</h1>\\n \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      return buffer;\n      \n    });\n  });//# sourceURL=production/templates/blog.js");

;eval("define(\"production/templates/contact\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n <h2>\");\n      stack1 = helpers._triageMustache.call(depth0, \"question\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n \");\n      stack1 = helpers._triageMustache.call(depth0, \"answer\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"<br />\\n \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<h1>Welcome to the Contact page</h1>\\n \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      return buffer;\n      \n    });\n  });//# sourceURL=production/templates/contact.js");

;eval("define(\"production/templates/faq\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n <h2>\");\n      stack1 = helpers._triageMustache.call(depth0, \"question\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n \");\n      stack1 = helpers._triageMustache.call(depth0, \"answer\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"<br />\\n \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<h1>Welcome to the FAQ page</h1>\\n \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      return buffer;\n      \n    });\n  });//# sourceURL=production/templates/faq.js");

;eval("define(\"production/templates/music\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n <h2>\");\n      stack1 = helpers._triageMustache.call(depth0, \"question\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h2>\\n \");\n      stack1 = helpers._triageMustache.call(depth0, \"answer\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"<br />\\n \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<h1>Welcome to the Music page</h1>\\n \");\n      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      return buffer;\n      \n    });\n  });//# sourceURL=production/templates/music.js");

;eval("define(\"production/tests/helpers/resolver\", \n  [\"ember/resolver\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: \'production\'\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=production/tests/helpers/resolver.js");

;eval("define(\"production/tests/helpers/start-app\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    /* global require */\n\n    var Application = require(\'production/app\')[\'default\'];\n    var Router = require(\'production/router\')[\'default\'];\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({\n        // useful Test defaults\n        rootElement: \'#ember-testing\',\n        LOG_ACTIVE_GENERATION:false,\n        LOG_VIEW_LOOKUPS: false\n      }, attrs); // but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function(){\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=production/tests/helpers/start-app.js");

;eval("define(\"production/tests/production/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production\');\n    test(\'production/app.js should pass jshint\', function() { \n      ok(false, \'production/app.js should pass jshint.\\nproduction/app.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/app.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/app.js: line 3, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/app.js: line 14, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n4 errors\'); \n    });\n  });//# sourceURL=production/tests/production/app.jshint.js");

;eval("define(\"production/tests/production/models/blog.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/models\');\n    test(\'production/models/blog.js should pass jshint\', function() { \n      ok(false, \'production/models/blog.js should pass jshint.\\nproduction/models/blog.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/models/blog.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=production/tests/production/models/blog.jshint.js");

;eval("define(\"production/tests/production/models/contact.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/models\');\n    test(\'production/models/contact.js should pass jshint\', function() { \n      ok(false, \'production/models/contact.js should pass jshint.\\nproduction/models/contact.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/models/contact.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=production/tests/production/models/contact.jshint.js");

;eval("define(\"production/tests/production/models/faq.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/models\');\n    test(\'production/models/faq.js should pass jshint\', function() { \n      ok(false, \'production/models/faq.js should pass jshint.\\nproduction/models/faq.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/models/faq.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=production/tests/production/models/faq.jshint.js");

;eval("define(\"production/tests/production/models/music.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/models\');\n    test(\'production/models/music.js should pass jshint\', function() { \n      ok(false, \'production/models/music.js should pass jshint.\\nproduction/models/music.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/models/music.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=production/tests/production/models/music.jshint.js");

;eval("define(\"production/tests/production/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production\');\n    test(\'production/router.js should pass jshint\', function() { \n      ok(false, \'production/router.js should pass jshint.\\nproduction/router.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/router.js: line 14, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=production/tests/production/router.jshint.js");

;eval("define(\"production/tests/production/routes/blog.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/routes\');\n    test(\'production/routes/blog.js should pass jshint\', function() { \n      ok(false, \'production/routes/blog.js should pass jshint.\\nproduction/routes/blog.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/blog.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/blog.js: line 4, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=production/tests/production/routes/blog.jshint.js");

;eval("define(\"production/tests/production/routes/contact.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/routes\');\n    test(\'production/routes/contact.js should pass jshint\', function() { \n      ok(false, \'production/routes/contact.js should pass jshint.\\nproduction/routes/contact.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/contact.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/contact.js: line 4, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=production/tests/production/routes/contact.jshint.js");

;eval("define(\"production/tests/production/routes/faq.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/routes\');\n    test(\'production/routes/faq.js should pass jshint\', function() { \n      ok(false, \'production/routes/faq.js should pass jshint.\\nproduction/routes/faq.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/faq.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/faq.js: line 4, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=production/tests/production/routes/faq.jshint.js");

;eval("define(\"production/tests/production/routes/music.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/routes\');\n    test(\'production/routes/music.js should pass jshint\', function() { \n      ok(false, \'production/routes/music.js should pass jshint.\\nproduction/routes/music.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/music.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nproduction/routes/music.js: line 4, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=production/tests/production/routes/music.jshint.js");

;eval("define(\"production/tests/production/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/helpers\');\n    test(\'production/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'production/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/helpers/resolver.jshint.js");

;eval("define(\"production/tests/production/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/helpers\');\n    test(\'production/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'production/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/helpers/start-app.jshint.js");

;eval("define(\"production/tests/production/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests\');\n    test(\'production/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'production/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/test-helper.jshint.js");

;eval("define(\"production/tests/production/tests/unit/models/blog-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/models\');\n    test(\'production/tests/unit/models/blog-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/models/blog-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/models/blog-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/models/contact-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/models\');\n    test(\'production/tests/unit/models/contact-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/models/contact-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/models/contact-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/models/faq-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/models\');\n    test(\'production/tests/unit/models/faq-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/models/faq-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/models/faq-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/models/music-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/models\');\n    test(\'production/tests/unit/models/music-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/models/music-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/models/music-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/routes/blog-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/routes\');\n    test(\'production/tests/unit/routes/blog-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/routes/blog-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/routes/blog-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/routes/contact-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/routes\');\n    test(\'production/tests/unit/routes/contact-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/routes/contact-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/routes/contact-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/routes/faq-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/routes\');\n    test(\'production/tests/unit/routes/faq-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/routes/faq-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/routes/faq-test.jshint.js");

;eval("define(\"production/tests/production/tests/unit/routes/music-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - production/tests/unit/routes\');\n    test(\'production/tests/unit/routes/music-test.js should pass jshint\', function() { \n      ok(true, \'production/tests/unit/routes/music-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=production/tests/production/tests/unit/routes/music-test.jshint.js");

;eval("define(\"production/tests/test-helper\", \n  [\"production/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n  });//# sourceURL=production/tests/test-helper.js");

;eval("define(\"production/tests/unit/models/blog-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleForModel = __dependency1__.moduleForModel;\n\n    moduleForModel(\'blog\', \'Blog\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(model);\n    });\n  });//# sourceURL=production/tests/unit/models/blog-test.js");

;eval("define(\"production/tests/unit/models/contact-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleForModel = __dependency1__.moduleForModel;\n\n    moduleForModel(\'contact\', \'Contact\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(model);\n    });\n  });//# sourceURL=production/tests/unit/models/contact-test.js");

;eval("define(\"production/tests/unit/models/faq-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleForModel = __dependency1__.moduleForModel;\n\n    moduleForModel(\'faq\', \'Faq\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(model);\n    });\n  });//# sourceURL=production/tests/unit/models/faq-test.js");

;eval("define(\"production/tests/unit/models/music-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleForModel = __dependency1__.moduleForModel;\n\n    moduleForModel(\'music\', \'Music\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(model);\n    });\n  });//# sourceURL=production/tests/unit/models/music-test.js");

;eval("define(\"production/tests/unit/routes/blog-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleFor = __dependency1__.moduleFor;\n\n    moduleFor(\'route:blog\', \'BlogRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=production/tests/unit/routes/blog-test.js");

;eval("define(\"production/tests/unit/routes/contact-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleFor = __dependency1__.moduleFor;\n\n    moduleFor(\'route:contact\', \'ContactRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=production/tests/unit/routes/contact-test.js");

;eval("define(\"production/tests/unit/routes/faq-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleFor = __dependency1__.moduleFor;\n\n    moduleFor(\'route:faq\', \'FaqRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=production/tests/unit/routes/faq-test.js");

;eval("define(\"production/tests/unit/routes/music-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var test = __dependency1__.test;\n    var moduleFor = __dependency1__.moduleFor;\n\n    moduleFor(\'route:music\', \'MusicRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=production/tests/unit/routes/music-test.js");

import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BitchPleaseENV.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('faq');
  this.route('music');
  this.route('blog');
});

export default Router;

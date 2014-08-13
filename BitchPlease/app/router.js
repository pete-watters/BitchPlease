import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BitchPleaseENV.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('faq');
});

export default Router;

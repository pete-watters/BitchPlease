import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
         model: function() {

         // set reference to this here so it's not lost when inside $.getJSON
         var self = this;

         var tumblrBlogLink="bitchpleaseclub.tumblr.com";
         var tumblrApiKey="nkKquWIZznM9pwnuLaylruhVIA4ecxN8oSlQTwPY0hgEaW8SXf";
         var tumblrAPIURL = 'http://api.tumblr.com/v2/blog/'+ tumblrBlogLink +'/posts?api_key=' + tumblrApiKey +'&tag=event&limit=5&callback=?';

         $.getJSON(tumblrAPIURL, function(responseObj) {

              if (responseObj.meta.status === 200){

                    var posts = responseObj.response.posts;

                    // for each blog entry returned store them in the store
                    for (var i = posts.length - 1; i >= 0; i--) {
                          self.store.push('blog', { id: posts[i].id ,
                                                    post_date: posts[i].title.replace("Bitch Please Club Night - ",""),
                                                    post_title: posts[i].title,
                                                    post_body: posts[i].body,
                                                    post_url: posts[i].post_url
                                                  });
                    };
              }

        });


 return this.store.all('blog');
 }
});

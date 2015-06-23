export default Ember.Route.extend({
  model: function(){
    return $.getJSON('states.json');
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyCity(city) {
      if (confirm('Are you sure you want to delete {{city.name}}?')) {
        console.log(city);
        this.sendAction('destroyCity', city);
      }
    }
  }
});

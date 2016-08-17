import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    save99() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.set('addNewCity', false);
      this.sendAction('save100', params);
    }
  }
});

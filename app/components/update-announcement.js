import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false;
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    update(announcement) {
      var params = {
        text: this.get('text'),
        announcer: this.get('announcer'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcement, params);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('announcement', params.announcement_id);
  },
  actions: {
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcement');
    },
    update(announcement, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          announcement.set(key, params[key]);
        }
      });
      announcement.save();
      this.transitionTo('announcement');
    }
  }
});

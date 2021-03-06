import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showNewAnswerForm() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        date_added: Date.now(),
        question: this.get('question')
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});

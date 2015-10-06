import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    updateQuestion(question, params) {
      
      this.set('updateQuestionForm', false),
      this.sendAction('updateQuestion', question, params);
    }
  }
});

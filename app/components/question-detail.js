import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    updateQuestion(question, params) {
      // var params = {
      //   author: this.get('author'),
      //   category: this.get('category'),
      //   date: this.get('date'),
      //   image: this.get('image'),
      //   location: this.get('location'),
      //   title: this.get('title')
      // };
      this.set('updateQuestionForm', false),
      this.sendAction('updateQuestion', question, params);
    },
    destroyQuestion(question) {
      this.sendAction('destroyQuestion', question);
    }
  }
});

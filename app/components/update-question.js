import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionFormShow() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params= {
        author: this.get('author'),
        image: this.get('image'),
        question: this.get('question'),
        note: this.get('note')
      };
      this.set('updateQuestionForm', false),
      this.sendAction('update', question, params);
    }
  }
});

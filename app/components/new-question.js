import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params= {
        author: this.get('author'),
        image: this.get('image'),
        question: this.get('question'),
        note: this.get('note')
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params);

    }
  }
});

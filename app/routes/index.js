import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Veruca Salt",
  question: "Any body know a good place to get a squirrel in SF?",
  note: "I want!",
  image: "http://vignette1.wikia.nocookie.net/charlieandthechocolatefactoryfilm/images/3/39/Screen_Shot_2015-06-28_at_1.22.45_AM.png/revision/latest/scale-to-width-down/220?cb=20150628052316"
}, {
  id: 2,
  author: "Snoopy",
  question: "How do I change the air brakes on my dog house?",
  note: "Ugrade to a Condo...",
  image: "https://cliffordfanfer.files.wordpress.com/2012/11/cropped-snoopy_red_baron_peanuts_comic_strip_desktop_1024x768_wallpaper-1012525-1.jpg"
}, {
  id: 3,
  author: "Stewie Griffin",
  question: "What the deuce Portland?!",
  note: "Damn!",
  image: "https://1.bp.blogspot.com/-KUWs33yXVj8/UGta9ockkeI/AAAAAAAAAG0/YHI2uaNvUZs/s1600/family-guy-stewie-griffin-3.jpg"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});

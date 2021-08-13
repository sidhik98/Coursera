(function (window){
  var byespeaker = {};
  byespeaker.name = [];
  var speakWord = "Good Bye";
  byespeaker.speak =function (name) {
      console.log(speakWord + " " + name);
  }
window.byespeaker =byespeaker;

})(window);
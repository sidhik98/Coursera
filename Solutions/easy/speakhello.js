(function (window){
  var hellospeaker = {};
  hellospeaker.name = [];
  var speakWord = "Hello";
  hellospeaker.speak =function (name) {
      console.log(speakWord + " " + name);
  }
window.hellospeaker =hellospeaker;

})(window);

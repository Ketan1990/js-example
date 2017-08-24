var play = function(e) {
    console.log(e.keyCode);
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};
function removeTransitionEvent(e) {
    if (e.propertyName != 'transform') {
        return;
    } else {
        this.classList.remove('playing');
    }
}
var keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransitionEvent);
});
window.addEventListener('keydown', play);

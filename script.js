var play = function(e) {
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
};
function removeTransitionEvent(e) {
    if (e.propertyName != 'height') {
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
window.addEventListener('keyup', function(e){
	
	var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
	key.classList.remove('playing');
});


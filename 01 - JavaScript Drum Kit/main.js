const playDrum = (e) => {
  console.log(e.keyCode); // keyCode of key pressed

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) {
    return;
  }
  console.log('AUDIO-->', audio, 'KEY-->', key);
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');// adding css transition
}


const keys = document.querySelectorAll('.key');

const removeTrans = function(e) {
  if(e.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
}

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTrans);
})

window.addEventListener('keydown', playDrum);

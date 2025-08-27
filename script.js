// select all keys
const keys = document.querySelectorAll('.key');

// -- Listeners --// 
// add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// -- handelers --//
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
}
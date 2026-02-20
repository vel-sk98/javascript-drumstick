function soundplay(e) {
    const audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-id="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener("keydown", soundplay)

const keys = Array.from(document.querySelectorAll('.sounds'));
console.log(keys)
keys.forEach(key => key.addEventListener('transitionend', removetrans));

function removetrans(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
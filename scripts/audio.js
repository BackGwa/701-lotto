function play(src, volume = 1.0) {
    var audio = document.createElement('audio');
    audio.src = src;
    document.body.appendChild(audio);
    audio.play();
    audio.volume = volume;
    audio.onended = () => {
        audio.remove();
    };
}
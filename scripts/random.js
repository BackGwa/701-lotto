function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    const range = max - min + 1;
    const randomBytes = new Uint32Array(1);
    let randomValue;
    
    do {
        window.crypto.getRandomValues(randomBytes);
        randomValue = randomBytes[0] / (0xFFFFFFFF + 1);
    } while (randomValue * range >= range);

    return Math.floor(randomValue * range) + min;
}
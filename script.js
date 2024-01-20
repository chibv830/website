document.addEventListener('DOMContentLoaded', function () {
    const kissingContainer = document.querySelector('.kissing-container');
    const numEmojis = 500; // Change the number of emojis as needed

    for (let i = 0; i < numEmojis; i++) {
        createEmoji();
    }

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = '😘';
        emoji.classList.add('kissing-emoji');
        setPosition(emoji);
        kissingContainer.appendChild(emoji);
    }

    function setPosition(emoji) {
        const maxX = window.innerWidth - emoji.clientWidth;
        const maxY = window.innerHeight - emoji.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        emoji.style.left = `${randomX}px`;
        emoji.style.top = `${randomY}px`;
    }
});

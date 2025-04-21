if (window.innerWidth <= 500) {
    document.querySelector('nav ul').classList.add('hidden');
}

document.querySelector('#menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('hidden');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        document.querySelector('nav ul').classList.remove('hidden');
    } else {
        document.querySelector('nav ul').classList.add('hidden');
    }
});
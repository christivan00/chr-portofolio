console.log("Hello, World!");


function toggleMenu() {
    const menu = document.getElementById('navigasi');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

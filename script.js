const HEADER_NAV = document.getElementById('header-nav');

HEADER_NAV.addEventListener('click', (event) => {
    HEADER_NAV.querySelectorAll('a').forEach(el => el.classList.remove('header-active'));
    event.target.classList.add('header-active');
});

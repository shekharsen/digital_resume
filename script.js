const toggle__dark = document.getElementById('toggle--dark');
var bg = document.querySelector(':root');

toggle__dark.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (toggle__dark.classList.value == 'bi bi-brightness-high-fill')
    {
        bg.style.setProperty('--mainTextColor', 'var(--mainTextColor-light)');
        bg.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-light)');
        bg.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-light)');
        bg.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-light)');
        bg.style.setProperty('--mainBgColor', 'var(--mainBgColor-light)');
    }
    else
    {
        bg.style.setProperty('--mainTextColor', 'var(--mainTextColor-dark)');
        bg.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-dark)');
        bg.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-dark)');
        bg.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-dark)');
        bg.style.setProperty('--mainBgColor', 'var(--mainBgColor-dark)');
    }
})
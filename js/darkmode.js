function updateTheme() {
    let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let light = document.querySelector('#hljsThemeLight');
    let dark = document.querySelector('#hljsThemeDark');
    if(isDark) {
        light.disabled = true;
        dark.disabled = false;
    }
    else {
        light.disabled = false;
        dark.disabled = true;
    }
}

window.addEventListener('DOMContentLoaded', updateTheme);
var togglebutton = document.getElementById('toggle-experience');
var experience = document.getElementById('experience');
togglebutton.addEventListener('click', function () {
    if ((experience.style.display) === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});

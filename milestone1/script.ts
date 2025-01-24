const togglebutton = document.getElementById('toggle-experience') as HTMLButtonElement
const experience = document.getElementById('experience') as HTMLElement

togglebutton.addEventListener('click', () => {
  if ((experience.style.display) === 'none') {
    experience.style.display = 'block';
  } else {
    experience.style.display = 'none';
  }
});
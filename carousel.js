const slider = document.querySelector('.carousel-team-wrap');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}); //Ini function untuk add class active di variable slider

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
}); //Ini function untuk ngeremove class active di variable slider

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
}); //Ini function untuk ngeremove class active di variable slider

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; //Stop the func from run
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
}); //Ini function untuk ngedrag card nya

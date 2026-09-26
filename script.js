var stories = document.querySelectorAll('.story');

function showStory() {
  for (var i = 0; i < stories.length; i++) {
    var top = stories[i].getBoundingClientRect().top;

    if (top < window.innerHeight * 0.9) {
      stories[i].classList.add('visible');
    }
  }
}

document.body.classList.add('scroll-ready');
window.addEventListener('scroll', showStory);
window.addEventListener('resize', showStory);
showStory();

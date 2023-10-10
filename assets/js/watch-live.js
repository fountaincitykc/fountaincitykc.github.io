window.addEventListener('DOMContentLoaded', function(event) {

  // If it's Sunday morning, show the "Watch live" button on the home page

  const btn = document.getElementById('watch-live');
  if (btn) {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    if (dayOfWeek === 0 && hours >= 9 && hours < 12) {
      btn.classList.remove('hide');
    }
  }
}, false);

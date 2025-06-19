// For now, just preventing form reload
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out!');
});

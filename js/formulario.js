document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulando el envío del formulario
  setTimeout(function() {
    document.getElementById('successAlert').style.display = 'block';
  }, 1000);
});

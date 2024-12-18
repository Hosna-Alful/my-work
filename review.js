document.addEventListener('DOMContentLoaded', () => {
  // Handle star rating selection
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      // Reset all stars
      stars.forEach(s => s.classList.remove('selected'));
      // Highlight selected stars
      star.classList.add('selected');
      const value = star.getAttribute('data-value');
      console.log(`Selected Rating: ${value}`);
    });
  });

  // Handle form submission
  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const patientName = document.getElementById('patientName').value;
    const feedback = document.getElementById('feedback').value;
    const selectedRating = document.querySelector('.star-rating span.selected');

    if (!selectedRating) {
      alert('Please select a rating!');
      return;
    }

    const rating = selectedRating.getAttribute('data-value');

    console.log('Review Submitted:', {
      patientName,
      feedback,
      rating,
    });

    // Reset the form
    reviewForm.reset();
    stars.forEach(s => s.classList.remove('selected'));
    alert('Thank you for your feedback!');
  });
});

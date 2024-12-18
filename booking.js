// script.js

// Example Doctor Data
const doctors = [
    { name: "Dr. John Doe", specialty: "Cardiologist", experience: "10 years", rating: "4.5/5", image: "doctor-image.jpg" },
    { name: "Dr. Jane Smith", specialty: "Neurologist", experience: "8 years", rating: "4.7/5", image: "doctor-image.jpg" },
    { name: "Dr. Emily Johnson", specialty: "Orthopedic", experience: "12 years", rating: "4.8/5", image: "doctor-image.jpg" },
];

// Function to render Doctor Cards
function renderDoctorCards(filteredDoctors) {
    const doctorCardsContainer = document.getElementById('doctor-cards');
    doctorCardsContainer.innerHTML = '';  // Clear existing cards

    filteredDoctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.classList.add('doctor-card');
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">
            <h3>${doctor.name}</h3>
            <p>Specialty: ${doctor.specialty}</p>
            <p>Experience: ${doctor.experience}</p>
            <p>Rating: ${doctor.rating}</p>
            <button class="book-appointment">Book Appointment</button>
        `;
        doctorCardsContainer.appendChild(doctorCard);
    });
}

// Search functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    const filteredDoctors = doctors.filter(doctor => doctor.specialty.toLowerCase().includes(searchQuery));
    renderDoctorCards(filteredDoctors);
});

// Initial render
renderDoctorCards(doctors);

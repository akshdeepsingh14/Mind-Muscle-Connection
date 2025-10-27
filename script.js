const searchInput = document.getElementById('search');
const bodyParts = document.querySelectorAll('.body-part');

// Accordion functionality
bodyParts.forEach(part => {
    part.addEventListener('click', function() {
        bodyParts.forEach(p => {
            if (p !== part) {
                p.querySelector('.sub-exercises').style.display = 'none';
            }
        });

        const subList = part.querySelector('.sub-exercises');
        subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
    });
});

// Search functionality
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();

    bodyParts.forEach(part => {
        const partName = part.firstChild.textContent.toLowerCase();
        const subExercises = part.querySelectorAll('li');

        let match = partName.includes(filter);
        subExercises.forEach(ex => {
            if (ex.textContent.toLowerCase().includes(filter)) {
                match = true;
            }
        });

        part.style.display = match ? '' : 'none';

        // Show only matched exercises
        subExercises.forEach(ex => {
            ex.style.display = ex.textContent.toLowerCase().includes(filter) ? '' : 'none';
        });

        // Automatically expand if match found
        const subList = part.querySelector('.sub-exercises');
        if (match) subList.style.display = 'block';
        else subList.style.display = 'none';
    });
});

// Contact form alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting us!');
    form.reset();
});

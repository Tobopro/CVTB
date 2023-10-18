document.getElementById('darkModeToggle').addEventListener('click', function () {
    // Basculez l'attribut "data-bs-theme" sur l'élément <html>
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    // Sélectionnez les icônes du soleil et de la lune
    const sunIcon = document.querySelector('#darkModeToggle i.fa-sun');
    const moonIcon = document.querySelector('#darkModeToggle i.fa-moon');
    // const gitIcon = document.querySelector('.git');

    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        // Changez les éléments avec la classe "bg-dark-subtle" en "bg-light"
        const darkSubtleElements = document.querySelectorAll('.bg-dark-subtle');
        darkSubtleElements.forEach(element => {
            element.classList.remove('bg-dark-subtle');
            element.classList.add('bg-light');
        });
        // Affichez l'icône du soleil et masquez l'icône de la lune
        sunIcon.classList.remove('d-none');
        moonIcon.classList.add('d-none');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        // Changez les éléments avec la classe "bg-light" en "bg-dark-subtle"
        const lightElements = document.querySelectorAll('.bg-light');
        lightElements.forEach(element => {
            element.classList.remove('bg-light');
            element.classList.add('bg-dark-subtle');
        });
        // Affichez l'icône de la lune et masquez l'icône du soleil
        moonIcon.classList.remove('d-none');
        sunIcon.classList.add('d-none');
    }
});

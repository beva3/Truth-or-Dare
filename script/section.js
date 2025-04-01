// section.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Initially hide all sections except the first one
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });
    
    // Function to show a specific section and hide others
    function showSection(sectionIndex) {
        sections.forEach((section, index) => {
            if (index === sectionIndex) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
    
    // Make the function available globally so other scripts can use it
    window.showSection = showSection;
    
    // Example of how to transition between sections (you'll call these from your other scripts)
    // When user completes step 1 (selects a player), call:
    // showSection(1); // Shows section 2 (challenge type)
    
    // When user completes step 2 (selects challenge type), call:
    // showSection(2); // Shows section 3 (select challenge)
    
    // And so on...


    // In your challenge_type.js or other scripts:
    document.getElementById('generateUserBtn').addEventListener('click', function() {
        // Your existing code to generate user...
        
        // Then show the next section
        showSection(1); // Show challenge type section
    });

    document.getElementById('generateChallengeBtn').addEventListener('click', function() {
        // Your existing code to generate challenge...
        
        // Then show the next section
        showSection(2); // Show challenge list section
    });

    document.getElementById('generateActionBtn').addEventListener('click', function() {
        // Your existing code to generate challenge...
        
        // Then show the next section
        showSection(3); // Show challenge list section
    });

    document.getElementById('ContinueBtn').addEventListener('click', function() {
        // Your existing code to generate challenge...
        
        // Then show the next section
        showSection(1); // Show challenge list section
    });

});
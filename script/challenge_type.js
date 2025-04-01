document.addEventListener('DOMContentLoaded', function() {
    const challengeDice = document.getElementById('challengeDice');
    const generateBtn = document.getElementById('generateChallengeBtn');
    const challengeText = document.getElementById('challengeText');
    
    // Challenge types corresponding to dice faces
    const challengeTypes = [
        { name: "Truth", icon: "fa-comment-dots", color: "#4ecdc4" },
        { name: "Dare", icon: "fa-fire", color: "#ff6b6b" },
        { name: "Random", icon: "fa-random", color: "#6a4c93" },
        { name: "Roleplay", icon: "fa-theater-masks", color: "#2a9d8f" },
        { name: "Mystery", icon: "fa-question", color: "#e9c46a" },
        { name: "Spin Again", icon: "fa-redo", color: "#f4a261" }
    ];
    
    generateBtn.addEventListener('click', function() {
        // Disable button during animation
        generateBtn.disabled = true;
        
        // Add spinning animation
        challengeDice.classList.add('spinning');
        
        // Randomly select a challenge type
        const randomFace = Math.floor(Math.random() * 6);
        
        // After animation completes
        setTimeout(function() {
            // Remove spinning class
            challengeDice.classList.remove('spinning');
            
            // Set final rotation to show selected face
            const rotations = [
                "rotateX(0) rotateY(0)",
                "rotateX(0) rotateY(-90deg)",
                "rotateX(-90deg) rotateY(0)",
                "rotateX(90deg) rotateY(0)",
                "rotateX(0) rotateY(90deg)",
                "rotateX(0) rotateY(180deg)"
            ];
            challengeDice.style.transform = rotations[randomFace];
            
            // Update challenge text
            const selectedChallenge = challengeTypes[randomFace];
            challengeText.innerHTML = `
                <strong>${selectedChallenge.name}</strong> challenge!
                <i class="fas ${selectedChallenge.icon} ms-2" style="color:${selectedChallenge.color}"></i>
            `;
            
            // Re-enable button
            generateBtn.disabled = false;
        }, 1000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Sample user data with icon, color, and name
    const allUsers = [
        { icon: 'fas fa-user-astronaut', color: '#4ecdc4', name: 'Alex Space' },
        { icon: 'fas fa-user-ninja', color: '#ff6b6b', name: 'Ninja Sam' },
        { icon: 'fas fa-user-graduate', color: '#6a4c93', name: 'Professor Taylor' },
        { icon: 'fas fa-user-tie', color: '#2a9d8f', name: 'CEO Jordan' },
        { icon: 'fas fa-user-md', color: '#e9c46a', name: 'Dr. Casey' },
        { icon: 'fas fa-user-injured', color: '#f4a261', name: 'Patient Drew' },
        { icon: 'fas fa-user-cowboy', color: '#e76f51', name: 'Cowboy Blake' },
        { icon: 'fas fa-user-secret', color: '#264653', name: 'Agent Skyler' }
    ];
    
    // Currently participating users (starts empty)
    let participatingUsers = [];
    
    const userList = document.getElementById('userList');
    const generateBtn = document.getElementById('generateUserBtn');
    const userAvatar = document.getElementById('userAvatar');
    const diceIcon = document.getElementById('diceIcon');
    
    // Initialize by rendering empty user list
    renderUserList();
    
    generateBtn.addEventListener('click', function() {
        // If all users are already participating, don't generate
        if (participatingUsers.length >= allUsers.length) {
            alert('All available users are already participating!');
            return;
        }
        
        // Start processing
        generateBtn.disabled = true;
        diceIcon.classList.add('spinning');
        userAvatar.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>';
        
        // Simulate processing delay
        setTimeout(function() {
            // Find users not yet participating
            const availableUsers = allUsers.filter(user => 
                !participatingUsers.some(pu => pu.name === user.name)
            );
            
            // Select random user from available
            const selectedUser = availableUsers[Math.floor(Math.random() * availableUsers.length)];
            
            // Add to participating users
            participatingUsers.push(selectedUser);
            
            // Update display
            renderUserList();
            displaySelectedUser(selectedUser);
            
            // Reset generate button
            generateBtn.disabled = false;
            diceIcon.classList.remove('spinning');
        }, 1500); // 1.5 second processing time
    });
    
    function renderUserList() {
        userList.innerHTML = '';
        
        if (participatingUsers.length === 0) {
            userList.innerHTML = '<div class="text-center p-4 text-muted">No participants yet</div>';
            return;
        }
        
        participatingUsers.forEach(user => {
            const userRow = document.createElement('div');
            userRow.className = 'user-row';
            
            const userIcon = document.createElement('div');
            userIcon.className = 'user-icon';
            userIcon.style.backgroundColor = user.color;
            userIcon.innerHTML = `<i class="${user.icon}"></i>`;
            
            const userNameSpan = document.createElement('span');
            userNameSpan.className = 'user-name';
            userNameSpan.textContent = user.name;
            
            userRow.appendChild(userIcon);
            userRow.appendChild(userNameSpan);
            userList.appendChild(userRow);
        });
    }
    
    function displaySelectedUser(user) {
        userAvatar.style.backgroundColor = user.color;
        userAvatar.innerHTML = `<i class="${user.icon}"></i>`;
        
        // Add celebration effect
        userAvatar.style.transform = 'scale(1.1)';
        setTimeout(() => {
            userAvatar.style.transform = 'scale(1)';
        }, 300);
    }
    console.log(userList);
    
});
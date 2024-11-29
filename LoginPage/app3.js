// User storage (in memory)
let users = [];

// Show Registration Form
function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('welcome-screen').style.display = 'none';
}

// Show Login Form
function switchToLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('welcome-screen').style.display = 'none';
}

// Register Functionality
function register(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const error = document.getElementById('reg-error');

    // Check if user exists
    if (users.some(user => user.username === username)) {
        error.textContent = 'Username already exists!';
        error.style.display = 'block';
        return;
    }

    // Add new user
    users.push({
        username,
        password
    });
    alert('Registration successful!');
    error.style.display = 'none';
    switchToLogin();
}

// Login Functionality
function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const error = document.getElementById('login-error');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        error.style.display = 'none';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-screen').style.display = 'block';
    } else {
        error.textContent = 'Invalid username or password!';
        error.style.display = 'block';
    }
}

// Logout Functionality
function logout() {
    switchToLogin();
}
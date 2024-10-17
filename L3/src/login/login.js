document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const registeredEmail = localStorage.getItem('registeredEmail')
    const registeredPassword = localStorage.getItem('registeredPassword')

    const loginMessage = document.getElementById('loginMessage')

    // Check credentials
    if (email === registeredEmail && password === registeredPassword) {
        loginMessage.textContent = 'Login successful!'
        loginMessage.className = 'sucess'
    } else {
        loginMessage.textContent = 'Invalid email or password.'
        loginMessage.className = 'error'
    }
})
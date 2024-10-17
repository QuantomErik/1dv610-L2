document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault()

            const email = document.getElementById('email').value
            const password = document.getElementById('password').value

            // Save information to localStorage
            localStorage.setItem('registeredEmail', email)
            localStorage.setItem('registeredPassword', password)

            const registrationMessage = document.getElementById('registrationMessage')
            registrationMessage.textContent = "Registration successful!"
            registrationMessage.className = 'success'

            setTimeout(() => {
                window.location.href = '/src/login/login.html'
            }, 1000)
        })
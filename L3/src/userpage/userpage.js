// Get the user's email from localStorage
const userEmail = localStorage.getItem('registeredEmail')

// Display the user's email on the page
document.getElementById('userEmail').textContent = `Logged in as: ${userEmail}`

// Handle the logout button
document.getElementById('logoutButton').addEventListener('click', function() {
    // Clear the localStorage or specific user data
    localStorage.removeItem('registeredEmail')
    localStorage.removeItem('registeredPassword')

    // Redirect to the homepage after logout
    window.location.href = '/src/homepage/homepage.html'
})



import { initTodoList } from "./todolist.js"
initTodoList()



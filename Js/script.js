let form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    let inputFirstName = document.getElementById('first-name').value;
    let inputLastName = document.getElementById('last-name').value;
    let inputMessage = document.getElementById('message').value;

    if (inputFirstName === '' || inputLastName === ''|| inputMessage === '') {
        let errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        e.preventDefault();
    }
});
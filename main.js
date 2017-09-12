// Get modal element

var modal = document.getElementById('simpleModal');

// Get open modal button 
var modalBtn = document.getElementById('modalBtn');

//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for click
modalBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'block';
}
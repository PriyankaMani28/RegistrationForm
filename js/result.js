// Selecting and creating variables for html
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const gen = document.querySelector('.gen');
const emailID = document.querySelector('.emailID');
const phoneNum = document.querySelector('.phoneNum');

// Getting the input value from local storage
firstName.textContent = `${localStorage.getItem('fname')}`;
lastName.textContent = `${localStorage.getItem('lname')}`;
gen.textContent = `${localStorage.getItem('gender')}`;
emailID.textContent = `${localStorage.getItem('email')}`;
phoneNum.textContent = `${localStorage.getItem('phoneNumber')}`;

// Submit Another Form
document.querySelector('#backBtn').addEventListener('click', function (event) {
    event.preventDefault();

    window.location.href = "index.html";
})
const submitButton = document.querySelector('#submitBtn');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    // Storing the input value in variable
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let gen = document.querySelector('#gender').value;
    let emailID = document.querySelector('#email').value;
    let phoneNum = document.querySelector('#phoneNumber').value;
    // console.log(firstName, lastName, gen, emailID, phoneNumber);

    // Storing the input in local storage
    localStorage.setItem('fname', firstName);
    localStorage.setItem('lname', lastName);
    localStorage.setItem('gender', gen);
    localStorage.setItem('email', emailID);
    localStorage.setItem('phoneNumber', phoneNum);

    window.location.href = "result.html";
})
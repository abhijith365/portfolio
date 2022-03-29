// const form = document.getElementById("form");
// const submit = document.getElementById("submit");

// const first_name = document.getElementById("first_name");
// const last_name = document.getElementById("last_name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const message = document.getElementById("message");



// form.addEventListener('submit', e => {
//     e.preventDefault();

//     checkInputs();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//         method: 'POST',
//         body: data,
//     })
//         .then(() => {
//             alert("Success!");
//         })
//         alert(phone.value)
//     first_name.value = "";
//     last_name.value = "";
//     email.value = "";
//     phone.value = "";

// }, false);

// const checkInputs = () => {
//     //taking values
//     const fistnameValue = first_name.value.trim();
//     const last_nameValue = last_name.value.trim()
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();


//     //creating error meesage function
//     function setErrorFor(input, message) {

//         const formControl = input.parentElement;
//         const err = formControl.querySelector('.err');
//         formControl.className = 'form-control error';
//         err.innerText = message;

//     }
//     //if input all valid
//     function setSuccessFor(input) {
//         //appending new class
//         const formControl = input.parentElement;
//         formControl.className = 'form-control success';
//     }

//     //for email format validation
//     function isEmail(email) {
//         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
//     }
//     //for only number contain
//     function isNum(phone) {
//         return /^\d+$/.test(phone);
//     }

//     if (fistnameValue === '') {
//         setErrorFor(first_name, 'first name cannot be blank');
//     } else {
//         setSuccessFor(first_name);
//         return true;
//     }

//     if (last_nameValue === '') {
//         setErrorFor(last_name, 'last_name cannot be blank');
//     } else {
//         setSuccessFor(last_name);
//         return true;
//     }

//     if (message === '') {
//         setErrorFor(last_name, 'message cannot be blank');
//     } else {
//         setSuccessFor(message);
//         return true;
//     }

//     if (emailValue === '' || emailValue === null) {
//         setErrorFor(email, 'Email cannot be blank');
//     } else if (!isEmail(emailValue)) {
//         setErrorFor(email, 'Not a valid email');
//     } else {
//         setSuccessFor(email);
//         return true;
//     }
//     if (phoneValue === '' || phoneValue.length != 10) {
//         setErrorFor(phone, "must have 10 digit")
//     }
//     else if (!isNum(phoneValue)) {
//         setErrorFor(phone, "Only numbers")
//     }
//     else {
//         setSuccessFor(phone);
//         return true;
//     }




// }
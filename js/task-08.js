const form = document.querySelector(".login-form");

function onSubmit(event) {
    event.preventDefault();

const email = form.email.value;
const password = form.password.value;

if (email === "" || password === "") {
   return alert('Всі поля повинні бути заповнені!');
};

 console.log(`Login: ${email.value} Password: ${password.value}`);

event.currentTarget.reset();
};
form.addEventListener("submit", onSubmit);
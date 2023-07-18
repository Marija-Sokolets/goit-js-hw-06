const form = document.querySelector(".login-form");

function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

if (email.value === "" || password.value === "") {
   return alert("Всі поля повинні бути заповнені!");
}

 console.log(`Login: ${email.value} Password: ${password.value}`);

event.currentTarget.reset();
};
form.addEventListener("submit", onSubmit);


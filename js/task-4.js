const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);
  form.reset();
};

form.addEventListener("submit", onFormSubmit);

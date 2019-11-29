// validation script here

const patterns = {
  username: /^[\w]{5,12}$/i,
  email: /^([\w\.-]+)@([\w-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/
};

function validate(field, regex) {
  regex.test(field.value)? field.className='valid' : field.className='invalid';
};

let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('keyup',(e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
  })
});




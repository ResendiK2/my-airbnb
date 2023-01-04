function checkRequire(id) {
  let field = document.getElementById(id);
  let error = document.getElementById(id + "-error");

  if (((field || {}).value || {}).length) {
    error.innerHTML = "";
    setInputError(id);
    return true;
  }

  setInputError(id, true);
  error.innerHTML = "Campo obrigatório!";
}

function setInputError(id, error) {
  let inputs = document.getElementsByClassName("input-block");
  let selects = document.getElementsByClassName("select-block");
  let longText = document.getElementsByClassName("textarea-block");

  const fields = [...inputs, ...selects, ...longText];

  for (let i = 0; i < (fields || []).length; i++)
    for (let j = 0; j < (fields[i].children || []).length; j++) {
      if (fields[i].children[j].id != id) continue;

      if (!error) {
        fields[i].classList.remove("form-error");
        return;
      }

      fields[i].classList.add("form-error");
      return;
    }
}

function checkEmail() {
  let field = document.getElementById("email");
  let error = document.getElementById("email-error");
  setInputError("email", true);

  if (!checkRequire("email")) return;

  //   if (!isLower(field.value)) return;

  if (!firstIsLetter(field.value)) {
    error.innerHTML = "Email invalido!";
    setInputError("email", true);
    return;
  }

  error.innerHTML = "";
  setInputError("email");
}

function isLower(str) {
  var regexp = new RegExp(/^(.*[a-z].*)(.*\W.*) .+$/);

  return regexp.exec(str);
}

function firstIsLetter(str) {
  let firstChar = str.charAt(0);

  var regexp = new RegExp(/^[a-z]+$/);

  return regexp.exec(firstChar);
}

function checkCompleteName() {
  let field = document.getElementById("name");
  let error = document.getElementById("name-error");
  setInputError("name", true);

  if (!checkRequire("name")) return;

  if (!completeName(field.value)) {
    setInputError("name", true);
    error.innerHTML = "Nome muito curto!";
    return;
  }

  error.innerHTML = "";
  setInputError("name");

  field.value = capitalize(field.value).trim();
}

function completeName(value) {
  const str = value.trim();

  const name = str.split(" ");

  if (name.length < 2) return false;

  if (name.length == 2 && name.some((str) => str.length < 3)) return false;

  return true;
}

function capitalize(value) {
  const arr = value.split(" ");

  for (var i = 0; i < arr.length; i++)
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  return arr.join(" ");
}

function checkCPF() {
  let field = document.getElementById("cpf");
  let error = document.getElementById("cpf-error");
  setInputError("cpf", true);

  if (!checkRequire("cpf")) return;

  if (!validateCPF(field.value)) {
    setInputError("cpf", true);
    error.innerHTML = "CPF inválido!";
    return;
  }

  error.innerHTML = "";
  setInputError("cpf");
}

function validateCPF(value) {
  var Soma;
  var Resto;
  Soma = 0;
  if (value == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(value.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(value.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(value.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(value.substring(10, 11))) return false;

  return true;
}

function checkBirthDate() {
  let field = document.getElementById("birthdate");
  let error = document.getElementById("birthdate-error");
  setInputError("birthdate", true);

  if (!checkRequire("birthdate")) return;

  if (!validateBirthDate(field.value)) {
    setInputError("birthdate", true);
    error.innerHTML = "Data inválida!";
    return;
  }

  error.innerHTML = "";
  setInputError("birthdate");
}

function validateBirthDate(value) {
  const last = new Date();
  const selected = new Date(value);
  const before = new Date("1900-01-01");

  return selected > before && selected < last;
}

function checkUF() {
  let field = document.getElementById("state");
  let error = document.getElementById("state-error");
  setInputError("state", true);

  if (!checkRequire("state")) return;

  if (!validateState(field.value)) {
    setInputError("state", true);
    error.innerHTML = "UF inválida!";
    return;
  }

  error.innerHTML = "";
  setInputError("state");
}

function validateState(value) {
  if (value.length < 2) return false;

  var regexp = new RegExp(/^[A-Z\s]+/);

  return regexp.exec(value);
}

function checkCEP() {
  let field = document.getElementById("cep");
  let error = document.getElementById("cep-error");
  setInputError("cep", true);

  if (!checkRequire("cep")) return;

  if (!validateCep(field.value)) {
    setInputError("cep", true);
    error.innerHTML = "CEP inválida!";
    return;
  }

  error.innerHTML = "";
  setInputError("cep");
}

function validateCep(value) {
  var regexp = new RegExp(/^[0-9]{8}$/);

  return regexp.exec(value);
}

function checkPassword() {
  let field = document.getElementById("password");
  let error = document.getElementById("password-error");
  setInputError("password", true);

  if (!checkRequire("password")) return;

  matchPassword();

  error.innerHTML = "";
  setInputError("password");
}

function checkPasswordConf() {
  if (!checkRequire("passwordConfirm")) return;

  if (!matchPassword()) return;
}

function matchPassword() {
  let password = document.getElementById("password");
  let field = document.getElementById("passwordConfirm");
  let error = document.getElementById("passwordConfirm-error");

  if (field.value == password.value) {
    error.innerHTML = "";
    setInputError("passwordConfirm");
    return true;
  }

  error.innerHTML = "As senhas devem ser idênticas!";
  setInputError("passwordConfirm", true);
  return false;
}

function checkContactName() {
  let field = document.getElementById("name");
  let error = document.getElementById("name-error");
  setInputError("name", true);

  if (!checkRequire("name")) return;

  if (!fullName(field.value)) {
    setInputError("name", true);
    error.innerHTML = "Nome inválido!";
    return;
  }

  error.innerHTML = "";
  setInputError("name");
}

function fullName(value) {
  if (value.length < 3) return false;

  var regexp = new RegExp(/^[A-Za-z]+$/);

  return regexp.exec(value[0]);
}

function checkPhoneNumber() {
  let field = document.getElementById("phoneNumber");
  let error = document.getElementById("phoneNumber-error");
  setInputError("phoneNumber", true);

  if (!checkRequire("phoneNumber")) return;

  if (!validateNumber(field.value)) {
    setInputError("phoneNumber", true);
    error.innerHTML = "Telefone inválido!";
    return;
  }

  error.innerHTML = "";
  setInputError("phoneNumber");
}

function validateNumber(value) {
  if (value.length < 3) return false;

  var regexp = new RegExp(/\(\d{2,}\)\d{5,}\-\d{4}/g);

  return regexp.exec(value);
}

function passwordForce() {
  let error = document.getElementById("password-error");

  console.log(error.innerHTML);

  let field = document.getElementById("password");

  const { value } = field || {};

  if (!value) return;

  if (strong(value)) return;
  if (medium(value)) return;
  week(value);
}

function strong(value) {
  let force = document.getElementById("password-strong");
  if (isStrong(value)) {
    (document.getElementById("password-medium") || {}).innerHTML = "";
    (document.getElementById("password-week") || {}).innerHTML = "";
    force.innerHTML = "Senha Forte!";
    return true;
  } else force.innerHTML = "";
}

function medium(value) {
  let force = document.getElementById("password-medium");

  if (isMedium(value)) {
    (document.getElementById("password-week") || {}).innerHTML = "";
    force.innerHTML = "Senha Media!";
    return true;
  } else force.innerHTML = "";
}

function week(value) {
  let force = document.getElementById("password-week");

  if (isWeek(value)) force.innerHTML = "Senha Fraca!";
  else force.innerHTML = "";
}

function isStrong(value) {
  var regexp = new RegExp(
    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){2,}).{7,}$/
  );

  return regexp.exec(value);
}

function isMedium(value) {
  if (value.length < 7) return;

  var regexp = new RegExp(
    /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{7,}$/
  );

  return regexp.exec(value);
}

function isWeek(value) {
  if (value.length < 7) return true;

  var regexp = new RegExp(/^[a-zA-Z0-9_.-]*$/);

  return regexp.exec(value);
}

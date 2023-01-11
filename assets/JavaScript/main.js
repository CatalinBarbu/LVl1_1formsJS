const number = document.getElementById("number");
const submit = document.getElementById("submit");
const pTag = document.getElementById("pTag");

function myFunction() {
  const multi = number.value * 2;
  pTag.innerHTML = multi;
}
submit.addEventListener("click", myFunction);

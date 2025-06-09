const data = [];
document.getElementById("formAutoridaion").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("user-email");
  const password = document.getElementById("user-password");
  if (data.includes(email.value)) {
    document.getElementById("hasEmail").style.display = "block";
    return;
  }
  data.push(email.value)
  document.getElementById("hasEmail").style.display = "none";

  const table = document.querySelector(".datas table");

  const newRow = document.createElement("tr");

  const emailCell = document.createElement("td");
  emailCell.textContent = email.value;

  const passwordCell = document.createElement("td");
  passwordCell.textContent = password.value;

  newRow.appendChild(emailCell);
  newRow.appendChild(passwordCell);

  table.appendChild(newRow);
});

// index.js
// Author: Bartosz Brzostek
// Date: 2025-11-06


document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("addCourseForm");
  const table = document.getElementById("timetable").querySelector("tbody");
  const courseInput = document.getElementById("fullName");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.getElementById('timeStamp').value = new Date().toLocaleString("pl-pl", {
      timeZone: "Europe/Helsinki",
      hour12: false
    });

    const fullName = courseInput.value.trim();
    const nameArray = fullName.trim().split(/\s+/); const nameVald = nameArray.length === 2;
    
    if (!fullName || !nameVald) {document.getElementById("nameError").style.display = "block";  event.preventDefault(); return;}
    else {document.getElementById("nameError").style.display = "none";}
    const email = document.getElementById("email").value;
    if (!email.includes('@')) { document.getElementById("emailError").style.display = "block"; event.preventDefault(); return;}
    else {document.getElementById("emailError").style.display = "none";}
    const tel = document.getElementById("tel").value;
    if(!/^\+358\d{9}$/.test(tel)){document.getElementById("telError").style.display = "block"; event.preventDefault(); return;}
    else {document.getElementById("telError").style.display = "none";}
    const brithDate = document.getElementById("brithDate").value;
    if(!isAtLeast13(brithDate)){document.getElementById("birthError").style.display = "block"; event.preventDefault(); return;}
    else {document.getElementById("birthError").style.display = "none";}
    const timeStamp = document.getElementById("timeStamp").value;
    const eula = document.getElementById("terms");
    if(!eula.checked){document.getElementById("eulaError").style.display = "block"; event.preventDefault(); return;}
    else {document.getElementById("eulaError").style.display = "none";}
    // Create new table row
    const row = document.createElement("tr");

    // Course cell
    const nameCell = document.createElement("td"); nameCell.textContent = fullName; row.appendChild(nameCell);
    const emailCell = document.createElement("td"); emailCell.textContent = email; row.appendChild(emailCell);
    const telCell = document.createElement("td"); telCell.textContent = tel; row.appendChild(telCell);
    const brithCell = document.createElement("td"); brithCell.textContent = brithDate; row.appendChild(brithCell);
    const timeCell = document.createElement("td"); timeCell.textContent = timeStamp; row.appendChild(timeCell);

    table.appendChild(row);

    // Reset form and focus
    form.reset();
    courseInput.focus();    
  });
});

function isAtLeast13(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age >= 13;
}
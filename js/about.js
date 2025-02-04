// about.js
document
  .getElementById("service-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value;
    const coachName = document.getElementById("coach-name").value;
    const injuryType = document.getElementById("injury-type").value;
    const organizationName = document.getElementById("organization-name").value;
    const location = document.getElementById("location").value;

    // Display the form data in the console (you could send this to a server instead)
    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Coach Name:", coachName);
    console.log("Injury Type:", injuryType);
    console.log("Organization Name:", organizationName);
    console.log("Location:", location);

    // Optionally, clear the form after submission
    document.getElementById("service-form").reset();
  });

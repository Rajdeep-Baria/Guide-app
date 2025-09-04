function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var fullNameInput = document.getElementById("fullName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
  
    // Create user object
    var user = {
      fullName: fullNameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };
  
    // Save user data to Local Storage
    saveUser(user);
  
    // Clear input fields
    fullNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  
    alert("Sign up successful!");
  
    // Redirect to login page
    window.location.href = "login.html";
  }
  
  function saveUser(user) {
    var users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve existing users or initialize an empty array
  
    // Add new user to the array
    users.push(user);
  
    // Save updated users array to Local Storage
    localStorage.setItem("users", JSON.stringify(users));
  }




// for login form 



  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic client-side validation
    if (username === 'fullNameInput' || password === 'passwordInput') {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: Perform server-side validation and login logic here
    // You would typically make an AJAX request to the server to validate the credentials and handle the login process.

    // For the sake of this example, we'll log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // TODO: Redirect to the authenticated page or show a success message
  });
  
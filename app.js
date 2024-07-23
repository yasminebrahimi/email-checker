// Define a constant for the registered email
const registeredEmail = "user.test@gmail.com";

/**
 * Function to check if an email already exists in the registered email list.
 * @param {string} email - The email to be checked.
 * @returns {string} - A message indicating if the email exists or a welcome message with the username.
 */
function checkEmailExist(email) {
    // Convert the input email to lowercase and trim any whitespace
    const signUpEmail = email.toLowerCase().trim(); 
    
    // Extract the username part of the email (before the @ symbol)
    const username = signUpEmail.split("@")[0]; 

    // Check if the converted email matches the registered email
    if (registeredEmail.toLowerCase() === signUpEmail) return "Email already exists!";
    
    // Return a welcome message with the extracted username
    return `Welcome!, this is your username ${username}`; 
}

// Test the function with an email that matches the registered email
console.log(checkEmailExist("User.test@gmail.com")); // Expected output: "Email already exists!"

// Test the function with a new email
console.log(checkEmailExist("newuser@test.com")); // Expected output: "Welcome!, this is your username newuser"

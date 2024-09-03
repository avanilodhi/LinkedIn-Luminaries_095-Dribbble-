document.addEventListener("DOMContentLoaded", () => {
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            height: 100vh;
        }

        .ava-contain {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            // padding: 40px;
        }

        .ava-contain-left {
            background-color: #000000;
            color: #ffffff;
            width: 26%;
            text-align: center;
        
        }

        .ava-contain-right {
            background-color: #ffffff;
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .background-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .login-content {
            width: 80%;
            max-width: 400px;
        }

        .login-content h2 {
            font-size: 1.8em;
            margin-bottom: 20px;
        }

        .google-signin {
            background-color: #ffffff;
            color: #333333;
            padding: 15px 20px;
            border: 1px solid #cccccc;
            border-radius: 25px;
            cursor: pointer;
            width: 100%;
            font-size: .9em;
            width: 100%;
            margin-bottom: 20px;
            font-weight:bold;
        }

        .login-content p {
            font-size: 0.9em;
            color: #888888;
            margin-bottom: 30px;
        }

        #login-form {
            width: 100%;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-size: 0.9em;
            color: #333333;
            margin-bottom: 5px;
            text-align: left;
            font-weight:bold;
        }

        .form-group input {
            width: 100%;
            padding: 15px;
            border: 1px solid #cccccc;
            border-radius: 10px;
            font-size: 1em;
        }

        .forgot {
            font-size: 0.9em;
            color: black;
            text-align: right;
            display: block;
            margin-bottom: 20px;
            text-decoration: none;
        }

        .forgot:hover {
            text-decoration: underline;
        }

        .signin {
            background-color: #000000;
            color: #ffffff;
            padding: 15px 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1em;
            width: 100%;
            margin-bottom: 20px;
        }

        .signin:hover {
            background-color: #333333;
        }

        .login-content a {
            color: #007bff;
            text-decoration: none;
        }

        .login-content a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    // Form submission logic
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "" || password === "") {
            alert("Please fill in both fields.");
        } else {
            alert("Form submitted!");
        }
    });

    // Google sign-in button logic
    const googleSigninButton = document.querySelector('.google-signin');
    googleSigninButton.addEventListener('click', () => {
        window.location.href = 'https://accounts.google.com/signin'; // Google sign-in link
    });
});

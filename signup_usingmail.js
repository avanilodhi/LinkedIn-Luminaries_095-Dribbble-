document.addEventListener('DOMContentLoaded', function () {
    // styles
    const style = document.createElement('style');
    style.textContent = `
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;

        }
        #container {
            display: flex;
            height: 100%;
        }
        .ava-contain-left {
            width: 26%;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        
        }
        .background-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        #logo {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 150px;
            cursor: pointer;
        }
        .ava-contain-right {
            width: 40%;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .login-content {
            text-align: left;
            max-width: 400px;
            width: 100%;
        }
        .back-button {
            font-size: 1.5em;
            background: none;
            border: none;
            cursor: pointer;
            margin-bottom: 20px;
        }
        .login-content h1 {
            font-size: 2em;
            margin-bottom: 10px;
            display: flex;
            align-items: left;
            justify-content: center;
        }
        .input-group {
            display: flex;
            gap: 50px;
            margin-bottom: 15px;
           
        }
        .form-group {
            flex: 1;
            padding: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input {
            width: 100%;
            padding: 15px;
            border: 1px solid #e6e6e6;
            border-radius: 10px;
            font-size: 1em;
            color:f0f0f0;
        }
        .checkbox-group {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        .checkbox-group input {
            margin-right: 10px;
        }
        .checkbox-group label {
            font-size: 0.9em;
            color: #666;
        }
        .checkbox-group a {
            color: #000;
            text-decoration: none;
        }
        .checkbox-group a:hover {
            text-decoration: underline;
        }
        .signin {
            width: 100%;
            padding: 15px;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 25px;
            font-size: 1em;
            cursor: pointer;
        }
        .signin:hover {
            background-color: #333;
        }
        .login-content p {
            font-size: 0.9em;
            color: #666;
            text-align: center;
        }
        .login-content a {
            color: #000;
            text-decoration: none;
        }
        .login-content a:hover {
            text-decoration: underline;
        }
        .recaptcha-note p {
            font-size: 0.8em;
            color: #888;
            text-align: center;
            margin-top: 20px;
        }
        .recaptcha-note a {
            color: #000;
            text-decoration: none;
        }
        .recaptcha-note a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    // Redirect logo click to main page
    document.getElementById('logo').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Form submission handling
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Create Account button clicked');
    });

    // Back button functionality
    document.getElementById('back-button').addEventListener('click', function () {
        window.location.href = 'signup.html'; // Updated to link to signup.html
    });
});

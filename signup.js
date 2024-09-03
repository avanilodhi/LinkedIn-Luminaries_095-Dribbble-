document.addEventListener('DOMContentLoaded', function() {
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
        .ava-contain {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px;
        }
        #left-panel {
            width: 26%;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        #right-panel {
            width: 40%;
            background-color:white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #webflow {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .background-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        #signup-box {
            text-align: center;
            max-width: 400px;
        }
        #signup-box h1 {
            font-size: 2em;
            margin-bottom: 20px;
        }
        #google-signup {
            background-color: white;
            color: white;
            border: 1px solid black;
            border-radius: 25px;
            padding: 15px 20px;
            width: 100%;
            margin-bottom: 15px;
            cursor: pointer;
        }
        
        #email-signup {
            background-color: white;
            color: black;
            border: 1px solid grey;
            border-radius: 25px;
            padding: 15px 20px;
            width: 100%;
            margin-bottom: 15px;
            cursor: pointer;
            font-weight: 400;
        }
            
        #google-signup {
            color: white;
            background-color: #1a1a1a;
        }
        #or-divider {
            margin: 20px 0;
            font-size: 1em;
            color: #666;
        }
        #signup-box p {
            font-size: 0.9em;
            color: #666;
        }
        #signup-box a {
            color: #000;
            text-decoration: none;
        }
        #signup-box a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);



      // Form submission handling
    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!name || !username || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            if (response.status === 201) {
                alert('User registered successfully');
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });

    // Back button functionality (existing code)
});




     // buttons
     document.getElementById('google-signup').addEventListener('click', function() {
        window.location.href = 'https://accounts.google.com/';  // Link to Google accounts
    });

    document.getElementById('email-signup').addEventListener('click', function() {
        window.location.href = 'signup_usingmail.html';  // Link to continue with email page
    });

    // Link "Sign In" text to login.html page
    const signInText = document.querySelector('#signup-box a');
    if (signInText) {
        signInText.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }


   
   
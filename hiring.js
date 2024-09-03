document.addEventListener("DOMContentLoaded", () => {
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #content-container {
            text-align: center;
            margin: 40px 0;
        }

        #pricing-container {
            display: flex;
            justify-content: space-around;
            width: 80%;
            margin-bottom: 30px;
        }

        .pricing-box {
            background: rgb(255,255,255);
            border: 1px solid #e8e8e8;
            border-radius: 10px;
            width: 37%;
            padding: 20px;
            text-align: center;
            // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .pricing-box h2 {
            font-size: 1.5em;
            font-weight:100;
            margin-bottom: 15px;
            margin-top: 5px;
            color:#504948;
        }

        .pricing-box h3 {
            font-size: 1.7em;
            margin: 10px 0;
            margin-bottom: 20px;
            color:#504948;
        }

        .pricing-box p {
            font-size: 1em;
            color: #666666;
            margin: 20px 0;
        }

        .pricing-box ul {
            list-style: none;
            padding: 0;
            text-align: left;
            margin-bottom: 20px;
        }

        .pricing-box ul li {
            margin: 10px 0;
        }

        .pricing-box button {
            background-color: #000000;
            color: #ffffff;
            padding: 10px 20px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1em;
            margin-top: 15px;
        }

        .pricing-box .cancel {
            font-size: 0.8em;
            color: #888888;
            margin-top: 10px;
        }

        .pricing-box .most-popular {
            background-color: #ff66cc;
            color: #ffffff;
            padding: 5px 10px;
            border-radius: 25px;
            position: center;
            width: 150px;
            margin-left: 140px;
            transform: translateY(-20px);
            
        }

        #brand-logos {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80%;
            margin: 40px 0;
            overflow: hidden;
            position: relative;
        }

        #brand-logos img {
            height: 50px;
            animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
            0% {
                transform: translateX(100%);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateX(-100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Redirect to login page on "Get started" button click
    document.getElementById('get-started').addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Redirect to post job page on "Post a job" button click
    document.getElementById('post-job').addEventListener('click', () => {
        window.location.href = 'postjob.html';
    });
});

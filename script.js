// Avani Part Start
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    const getStartedButton = document.getElementById('get-started');
    const searchInput = document.getElementById('search');
    const findDesignersLink = document.getElementById('find-designers'); // Added for Find designers link

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // to login page
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; // to signup page
    });

    getStartedButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; // to signup page
    });

    findDesignersLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'hiring.html'; // Redirect to hiring.html
    });

    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#000';
        });
        item.addEventListener('mouseout', function() {
            this.style.color = '#333';
        });
    });

    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#000';
    });

    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
    });

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        filterDesigns(query);
    });

    function filterDesigns(query) {
        const designs = [
            { title: 'Blue Ocean', designer: 'Alex Krugli', tags: ['blue', 'ocean', 'water'] },
            { title: 'Sunset', designer: 'Jane Doe', tags: ['orange', 'sunset', 'sky'] },
            { title: 'Forest', designer: 'John Smith', tags: ['green', 'trees', 'nature'] },
            { title: 'Blue Sky', designer: 'Alex Krugli', tags: ['blue', 'sky', 'clouds'] },
        ];

        const filteredDesigns = designs.filter(design => {
            return design.tags.includes(query) || design.designer.toLowerCase().includes(query);
        });

        displayDesigns(filteredDesigns);
    }

    function displayDesigns(designs) {
        // Implement the logic to display the filtered designs
        console.log('Filtered Designs:', designs);
    }
});


// Avani Part End



// Shasikant Part Start

//  Shasikant Part End



// Neelesh Part Start
let ncontainer=document.querySelector("#ncontainer")
let ncontainer1=document.querySelector("#ncontainer1")
let browse=document.querySelector("#browse")
let move=document.querySelector("#move")
browse.addEventListener("click",handleBrowse)
function handleBrowse(){
    window.location.href="browse.html"
}
async function ngetData(){
    try{
        let res=await fetch('https://my-json-server-cqdz.onrender.com/inspiring_designs')
        if(res.ok){
            let data=await res.json()
            nshowData(data)
        }
    }catch(error){
        console.log(error)
    }
}    

    function nshowData(data){
        ncontainer1.innerHTML=""
        data.forEach((ele)=>{
            let card1=document.createElement('div')
            let card2=document.createElement('div')
            let card3=document.createElement('div')
            let card=document.createElement('div')
            let cards=document.createElement('div')
            let img=document.createElement('img')
            img.src=ele.img
            let icon=document.createElement('img')
            icon.src=ele.icon
            let name=document.createElement("p")
            name.textContent=ele.name
            let like=document.createElement('p')
            like.textContent=ele.like_count
            let watch=document.createElement('p')
            watch.textContent=ele.watch_count
            card1.append(img)
            let status;
            if(ele.id===9 || ele.id===10 || ele.id===18 || ele.id ===40){
                 status=document.createElement('p')
                status.textContent="TEAM"
                
            }
            else if(ele.id===20 || ele.id===26){
                status=document.createElement('p')
                status.textContent=""
            }
            else{
                status=document.createElement('p')
                status.textContent="PRO"
            }
            status.classList.add('stats')
            let heart=document.createElement('i')
            heart.classList.add('fa-solid','fa-heart')
            let eye=document.createElement('i')
            eye.classList.add("fa-regular","fa-eye")
            eye.style.color="#727274"
            eye.style.fontSize="24px"
            heart.style.fontSize="24px"
            card3.append(heart,like,eye,watch)
            card2.append(icon,name,status)
            card.append(card2,card3)
            cards.append(card1,card)
            ncontainer1.append(cards)

        })
    }
    ngetData()
    async function ngetData1(){
        try{
            let res=await fetch(`https://my-json-server-cqdz.onrender.com/moving-cards`)
            if(res.ok){
                let data=await res.json()
                nshowData1(data)
            }
        }catch(error){
            console.log(error)
        }
    }   
    function nshowData1(data){
        ncontainer.innerHTML=""
        
        data.forEach((ele)=>{
            let card=document.createElement('div')
            card.style.backgroundImage=`url(${ele.img})`
            card.style.width="273px"
            card.style.height="339px"
            card.style.borderRadius="12px"
            card.style.backgroundSize="cover"
            card.style.objectFit="contain"
            card.style.backgroundRepeat="norepeat"
            card.style.backgroundPosition="center"
            let name=document.createElement('p')
            name.textContent=ele.name
            let designation=document.createElement('p')
            designation.textContent=ele.designation
            let tagContainer=document.createElement('div')
            ele.tag.forEach((tags)=>{
                let tag=document.createElement('p')
                tag.textContent=tags
                // tag.style.border="1px solid"
                tagContainer.append(tag)
            })
            card.append(name,designation,tagContainer)
            
            move.append(card)
            ncontainer.append(move)
        })
        let clonedCards = move.innerHTML
        move.innerHTML += clonedCards
    }
    ngetData1()

    
// Neelesh Part End



// Ayush Part Start

    // Create the main section element
    const footerCta = document.createElement('section');
    footerCta.classList.add('footer-cta');
    footerCta.setAttribute('data-track-location', 'Lower Pricing Tiers');
    
    // Create the content div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('footer-cta__content', 'home-container');
    
    // Create and append the heading
    const heading = document.createElement('h2');
    heading.classList.add('footer-cta__heading', 'home-type-heading');
    heading.innerHTML = 'Find your next<br><br>Designer Today ';
    contentDiv.appendChild(heading);
       // Create and append the copy div
    const copyDiv1 = document.createElement('div');
    copyDiv1.classList.add('footer-cta__copy');
    copyDiv1.innerHTML = '<br>The world’s leading brands use Dribbble to hire creative talent.<br>Browse millions of top-rated portfolios to find your perfect <br>creative match.<br>';
    contentDiv.appendChild(copyDiv1);
    
    // Create and append the actions div
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('footer-cta__actions');
    
    // Create and append the first button
    const getStartedNowButton = document.createElement('a');
    getStartedNowButton.classList.add('btn1', 'btn1--large');
    getStartedNowButton.setAttribute('data-track-cta', 'Get started');
    getStartedNowButton.setAttribute('href', 'signup.html');
    getStartedNowButton.textContent = 'Get started now';
    actionsDiv.appendChild(getStartedNowButton);
    
    // Create and append the second button
    const learnMoreButton = document.createElement('a');
    learnMoreButton.classList.add('btn2', 'btn2--secondary-alt', 'btn2--large');
    learnMoreButton.setAttribute('data-track-cta', 'Learn about hiring');
    learnMoreButton.setAttribute('href', 'hiring.html');
    learnMoreButton.textContent = 'Learn about hiring';
    actionsDiv.appendChild(learnMoreButton);
    
    contentDiv.appendChild(actionsDiv);
    
    // Create and append the second copy div
    const copyDiv2 = document.createElement('div');
    copyDiv2.classList.add('footer-cta__copy');
    copyDiv2.textContent = 'Are you a designer? ';
    
    const joinDribbbleLink = document.createElement('a');
    joinDribbbleLink.setAttribute('data-track-cta', 'Join Dribbble');
    joinDribbbleLink.setAttribute('href', 'signup.html');
    joinDribbbleLink.textContent = 'Join Dribbble';
    
    copyDiv2.appendChild(joinDribbbleLink);
    contentDiv.appendChild(copyDiv2);
    
    // Append the content div to the main section
    footerCta.appendChild(contentDiv);
    
    // Append the main section to the specified container in the body
    document.getElementById('footer-cta-container').appendChild(footerCta);
    
    
// Ayush Part End



// Kranti Part Start
    const twitter = document.querySelector(".fa-twitter")
    twitter.addEventListener("click", function (){
        window.location = "https://x.com/dribbble"
    })

    const facebook = document.querySelector(".fa-square-facebook")
    facebook.addEventListener("click", function (){
        window.location = "https://www.facebook.com/dribbble"
    })

    const instragram = document.querySelector(".fa-instagram")
    instragram.addEventListener("click", function (){
        window.location = "https://www.instagram.com/dribbble/"
    })

    const pinterest = document.querySelector(".fa-pinterest")
    pinterest.addEventListener("click", function (){
        window.location = "https://www.pinterest.com/dribbble/"
    })

    const supportPage = document.querySelector("#ksupportpage")
    supportPage.addEventListener("click", function (){
        window.location = "support.html"
    })
// Kranti Part End
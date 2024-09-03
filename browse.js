let selectTag = document.querySelector("#selectTag");
let ncontainer2 = document.querySelector("#ncontainer2");
let go=document.querySelector("#go")
let data=[]
async function ngetData2() {
    try {
        let res = await fetch('https://my-json-server-cqdz.onrender.com/explore_designs');
        if (res.ok) {
             data = await res.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

function nshowData2(data2) {
    ncontainer2.innerHTML = "";
    data2.forEach((ele) => {
        let card1 = document.createElement('div');
        let card2 = document.createElement('div');
        let card3 = document.createElement('div');
        let card = document.createElement('div');
        let cards = document.createElement('div');
        let img = document.createElement('img');
        img.src = ele.img;
        let icon = document.createElement('img');
        icon.src = ele.icon;
        let name = document.createElement("p");
        name.textContent = ele.name;
        let like = document.createElement('p');
        like.textContent = ele.like_count;
        let watch = document.createElement('p');
        watch.textContent = ele.watch_count;
        card1.append(img);
        let status;
        if (ele.id === 9 || ele.id === 10 || ele.id === 18 || ele.id === 40) {
            status = document.createElement('p');
            status.textContent = "TEAM";
        } else if (ele.id === 20 || ele.id === 26) {
            status = document.createElement('p');
            status.textContent = "";
        } else {
            status = document.createElement('p');
            status.textContent = "PRO";
        }

        let heart = document.createElement('i');
        heart.classList.add('fa-solid', 'fa-heart');
        status.classList.add('stats');
        let eye = document.createElement('i');
        eye.classList.add("fa-regular", "fa-eye");
        eye.style.color = "#727274";
        eye.style.fontSize = "24px";
        heart.style.fontSize = "24px";
        card3.append(heart, like, eye, watch);
        card2.append(icon, name, status);
        card.append(card2, card3);
        cards.append(card1, card);
        
cards.addEventListener('click', () => {
    showModal(ele);
});
        ncontainer2.append(cards);
    });
}

selectTag.addEventListener("change", handleSelect);

async function handleSelect() {
    let value = selectTag.value;
     data = await ngetData2();

    if (value === "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "likeCount") {
        data.sort((a, b) => b.like_count - a.like_count);
    } else if (value === "watchCount") {
        data.sort((a, b) => a.watch_count.localeCompare(b.watch_count));
    }

    nshowData2(data);
}
go.addEventListener("input",handleSearch)
let timeout;
async function handleSearch(){
    let value=go.value.toLowerCase()
    clearTimeout(timeout)
    if(value.length===0)
    {
        nshowData2(data)
        return
    }
    if(value.length<=4){
        return false
    }
    
    timeout=setTimeout(()=>{
        let narr=data.filter((ele)=>{
            return ele.name.toLowerCase().includes(value)
        })
        nshowData2(narr)
    },2000)
}
function showModal(cardData) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');
    let availabilityText;
    let availabilityIcon;
   
    if (cardData.id % 3 === 0) {
        availabilityText = "Available to work";
        availabilityIcon = '<i class="fa-solid fa-circle" style="color: green; margin-left: 10px;"></i>';
    } else {
        availabilityText = "Not available";
        availabilityIcon = '<i class="fa-solid fa-circle" style="color: red; margin-left: 10px;"></i>';
    }
    modalContent.innerHTML = `
        <h2>${cardData.name}</h2>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center;">
                <p style="margin: 0;">${availabilityText}${availabilityIcon}</p>
            </div>
            <button class="contact-btn">Get in touch</button>
        </div>
        <img src="${cardData.img}" alt="${cardData.name}">
    `;
    const contactButton = modalContent.querySelector('.contact-btn');
    contactButton.addEventListener('click', function() {

        window.location.href="signup.html"
    });

    modal.style.display = 'block';
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

(async function init() {
     data = await ngetData2();
    nshowData2(data);
})();

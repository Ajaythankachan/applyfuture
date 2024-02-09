window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    var logoImg = document.getElementById('logo');
    console.log(logoImg)
    // if (this.scrollY <= 10) nav.className = 'navbar-expand-lg navbar absolute-nav'; else nav.className = 'scroll navbar-expand-lg navbar absolute-nav';

    if (window.scrollY > 50) {
        nav.className = 'scroll navbar-expand-lg navbar absolute-nav';
      
        navbar.style.padding = '10px 0';
        logoImg.style.width = '60px';
    } else {
        nav.className = 'navbar-expand-lg navbar absolute-nav';
        navbar.style.padding = '20px 0';
        logoImg.style.width = '100%';
    }
};



AOS.init({

});
$(".testimonial-content").owlCarousel({
    loop: true,
    items: 1,
    margin: 50,
    dots: true,
    nav: true,
    navText: ["<img data-aos='fade-up' data-aos-duration='1500' src='img/arrow-l.png'>", "<img data-aos='fade-up' data-aos-duration='1500' src='img/arrow.png'>"],
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 800
});
function truncateText(text, letters = 90) {
    let truncatedText = text.slice(0, letters);
    let truncatedToHTML = `<p class="truncate">${truncatedText}...</p>`;

    return truncatedToHTML;
}

/* Select all card text containers */
let cards = document.getElementsByClassName("aboutservice-p");

/* Save texts within the cards as plain text */
let plainText = [];
for (let i = 0; i < cards.length; i++) {
    plainText[i] = cards[i].innerText;
}

/* Save the original card texts */
let htmlText = [];
for (let i = 0; i < cards.length; i++) {
    htmlText[i] = cards[i].innerHTML;
}

/* Add truncated text inside the cards */
for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = truncateText(plainText[i]);
}

/* Add events to all buttons */
let btns = document.getElementsByClassName("more-icon");

for (let i = 0; i < cards.length; i++) {
    btns[i].addEventListener("click", function () {

        var newText = "See Less -";
        var oldText = "See More +"

        document.getElementById("more").innerHTML = newText;
        console.log(newText)
        /* If the first child in the card text container has 'truncate' class... */
        if (cards[i].firstChild.className == "truncate") {
            /* Add their full text */
            cards[i].innerHTML = htmlText[i];
            document.getElementById("more").innerHTML = newText;
        } else {
            /* Add their truncated text */
            document.getElementById("more").innerHTML = oldText;
            cards[i].innerHTML = truncateText(plainText[i]);
        }
    });
}





function truncateText1(text, letters = 90) {
    let truncatedText1 = text.slice(0, letters);
    let truncatedToHTML1 = `<p class="truncate">${truncatedText1}...</p>`;

    return truncatedToHTML1;
}

/* Select all card text containers */
let cards1 = document.getElementsByClassName("aboutservice-p-n");

/* Save texts within the cards as plain text */
let plainText1 = [];
for (let i = 0; i < cards1.length; i++) {
    plainText1[i] = cards1[i].innerText;
}

/* Save the original card texts */
let htmlText1= [];
for (let i = 0; i < cards1.length; i++) {
    htmlText1[i] = cards1[i].innerHTML;
}

/* Add truncated text inside the cards */
for (let i = 0; i < cards1.length; i++) {
    cards1[i].innerHTML = truncateText1(plainText1[i]);
}

/* Add events to all buttons */
let btns1 = document.getElementsByClassName("more-icon-n");

for (let i = 0; i < cards1.length; i++) {
    btns1[i].addEventListener("click", function () {

        var newText = "See Less -";
        var oldText = "See More +"

        document.getElementById("more-n").innerHTML = newText;
        console.log(newText)
        /* If the first child in the card text container has 'truncate' class... */
        if (cards1[i].firstChild.className == "truncate") {
            /* Add their full text */
            cards1[i].innerHTML = htmlText1[i];
            document.getElementById("more-n").innerHTML = newText;
        } else {
            /* Add their truncated text */
            document.getElementById("more-n").innerHTML = oldText;
            cards1[i].innerHTML = truncateText1(plainText1[i]);
        }
    });
}

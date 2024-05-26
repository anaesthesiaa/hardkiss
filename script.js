/* бургер-меню */
document.getElementById('burger-btn').addEventListener('click', function() {
    document.querySelector('header').classList.add('open')
})
document.getElementById('anti-burger-btn').addEventListener('click', function() {
    document.querySelector('header').classList.remove('open')
})

/* модальное окно */
document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal-box').classList.add('open')
})
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal-box').classList.remove('open')
})

/* табы */
const tabsButton = document.querySelectorAll('.tabs__nav__button');
const tabsItem = document.querySelectorAll('.tabs__content__el');

tabsButton.forEach(function(item) {
    item.addEventListener('click', function() {
        let actButton = item;
        let tabId = actButton.getAttribute('data-tab');
        let actTab = document.querySelector(tabId);

        tabsButton.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItem.forEach(function(item) {
            item.classList.remove('active');
        });

        actButton.classList.add('active');
        actTab.classList.add('active');
    });
});

/* фильтер */
const filButton = document.querySelectorAll('.filter__nav__button');
const filItem = document.querySelectorAll('.filter__content__el');

filButton.forEach(function(item) {
    item.addEventListener('click', function() {
        let activeButton = item;
        let filId = activeButton.getAttribute('data-fil');
        let activeFil = document.querySelector(filId);

        filButton.forEach(function(item) {
            item.classList.remove('active');
        });

        filItem.forEach(function(item) {
            item.classList.remove('active');
        });

        activeButton.classList.add('active');
        activeFil.classList.add('active');
    });
});

/* слайдер */
var slider_img = document.querySelector('.slider-img');
var images = ["cover1.png", "cover2.png", "cover3.png", "cover4.png"];
var i = 0;

function prev() {
 if(i <= 0) i = images.length; 
 i--;
 return setImg();    
}

function next() {
 if(i >= images.length-1) i = -1;
 i++;
 return setImg();    
}

function setImg() {
 return slider_img.setAttribute('src', "images/"+images[i]); 
}

/* аккордеон */
const boxes = Array.from(document.querySelectorAll(".box")); 

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler); 
});

function boxHandler(e) {
  e.preventDefault(); 
  let currentBox = e.target.closest(".box"); 
  let currentContent = e.target.nextElementSibling; 

  currentBox.classList.toggle("active"); 

  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px"; 
  } else {
    currentContent.style.maxHeight = 0; 
  }
}
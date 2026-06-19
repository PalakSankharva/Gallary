const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const counter = document.getElementById("counter");
const downloadBtn = document.getElementById("downloadBtn");

let currentIndex = 0;

const images = [...galleryItems].map(item =>
item.querySelector("img"));

function showImage(index){

    currentIndex = index;

    lightboxImg.src = images[index].src;

    counter.textContent =
    `${index + 1} / ${images.length}`;

    downloadBtn.href = images[index].src;

    lightbox.classList.add("show");
}

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        showImage(index);

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show"))
        return;

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="Escape"){

        closeBtn.click();

    }

});

/* SEARCH */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    galleryItems.forEach(item=>{

        const text =
        item.innerText.toLowerCase();

        item.style.display =
        text.includes(value)
        ? "block"
        : "none";

    });

});

/* FILTER */

const filterBtns =
document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        document
        .querySelector(".active")
        .classList.remove("active");

        btn.classList.add("active");

        const filter =
        btn.dataset.filter;

        galleryItems.forEach(item=>{

            if(
                filter==="all" ||
                item.classList.contains(filter)
            ){

                item.style.display="block";

            }
            else{

                item.style.display="none";

            }

        });

    });

});

/* Close by clicking outside */

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});
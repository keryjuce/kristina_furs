document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox img');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 120}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 3;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 3) ? currentIndex + 1 : 0;
        updateSlider();
    });

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            lightboxImg.src = slide.querySelector('img').src;
            lightbox.style.display = 'flex';
            document.body.classList.add('no-scroll');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });
});
const courseContainer = document.querySelector('.course-container');
const courseItems = document.querySelectorAll('.course-item');
const nextCourseBtn = document.querySelector('.course-next');
const prevCourseBtn = document.querySelector('.course-prev');
let currentCourseIndex = 0;

function updateCourseItems() {
  courseItems.forEach((course, index) => {
    course.classList.remove('active');
    course.style.filter = 'blur(5px)';
    course.style.transform = 'translateX(0) scale(1)';
    course.style.zIndex = '0';
  });

  const prevIndex = (currentCourseIndex - 1 + courseItems.length) % courseItems.length;
  const nextIndex = (currentCourseIndex + 1) % courseItems.length;

  courseItems[prevIndex].style.transform = 'translateX(-100%) scale(0.8)';
  courseItems[prevIndex].style.zIndex = '0';
  courseItems[prevIndex].style.filter = 'blur(5px)';

  courseItems[nextIndex].style.transform = 'translateX(100%) scale(0.8)';
  courseItems[nextIndex].style.zIndex = '0';
  courseItems[nextIndex].style.filter = 'blur(5px)';

  courseItems[currentCourseIndex].classList.add('active');
  courseItems[currentCourseIndex].style.transform = 'translateX(0) scale(1.1)';
  courseItems[currentCourseIndex].style.zIndex = '1';
  courseItems[currentCourseIndex].style.filter = 'none';
}

nextCourseBtn.addEventListener('click', () => {
  currentCourseIndex = (currentCourseIndex + 1) % courseItems.length;
  updateCourseItems();
});

prevCourseBtn.addEventListener('click', () => {
  currentCourseIndex = (currentCourseIndex - 1 + courseItems.length) % courseItems.length;
  updateCourseItems();
});

updateCourseItems();


const info = document.getElementById("cources_active_item_1")
const infoOpen = document.getElementById("button_open_1")
const closeBtn = document.getElementById("button_close_1")

const bodySec   = document.body;

if(info && infoOpen) {
    infoOpen.addEventListener('click', () =>{
        info.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn.addEventListener('click', () =>{
        info.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
};

const info2 = document.getElementById("cources_active_item_2")
const infoOpen2 = document.getElementById("button_open_2")
const closeBtn2 = document.getElementById("button_close_2")


if(info2 && infoOpen2) {
    infoOpen2.addEventListener('click', () =>{
        info2.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn2.addEventListener('click', () =>{
        info2.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
}

const info3 = document.getElementById("cources_active_item_3")
const infoOpen3 = document.getElementById("button_open_3")
const closeBtn3 = document.getElementById("button_close_3")


if(info3 && infoOpen3) {
    infoOpen3.addEventListener('click', () =>{
        info3.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn3.addEventListener('click', () =>{
        info3.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
}


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


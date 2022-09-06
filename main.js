// Get all images
let images = document.querySelectorAll(".slider-container img");
let sliderImages = Array.from(images);
// Get slider number
let sliderCount = sliderImages.length;
let currentSlide = 1;
// get slider number element
let slidreNumber = document.getElementById("slider-number");
// get prev and next buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
// create ul
let paginationElement = document.createElement("ul");
// set id attribete in ul
paginationElement.setAttribute("id", "pagination-ul");

// loop inside ul to create li same as the image length
for (let i = 1; i <= sliderCount; i++) {
  let paginationItem = document.createElement("li");
  //   set custom attribute take the index
  paginationItem.setAttribute("data-index", i);
  //    set iner text inside li
  paginationItem.appendChild(document.createTextNode(i));
  // set li inside ul
  paginationElement.appendChild(paginationItem);
}
// set ul inside div indicator in html
document.getElementById("indicator").appendChild(paginationElement);
// get pagination element
let paginationElementCreated = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
//  click on pagination  element to select image 
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
// hondle prev and next function
prevButton.onclick = prevImage;
nextButton.onclick = nextImage;

//  create previous slide image function
function prevImage() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
//  create next slide image function
function nextImage() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
theChecker();

// Create function checker
function theChecker() {
  // set slide number
  slidreNumber.textContent = `Slide #${currentSlide} of ${sliderCount}`;
  removeAllActive();
  // set active class on current image
  sliderImages[currentSlide - 1].classList.add("active");
  // set active class on currnet slide
  paginationElementCreated.children[currentSlide - 1].classList.add("active");
  prevChecker();
  nextChecker();
}

// create function previous check
function prevChecker() {
  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
}
// create function next check
function nextChecker() {
  if (currentSlide === sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes
function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}

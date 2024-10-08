let currentIndex1 = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }
    function goNext() {
        currentIndex1 = (currentIndex1 + 1) % totalSlides;
        showSlide(currentIndex1);
    }
    function goPre() {
        currentIndex1 = (currentIndex1 - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex1);
    }
    function autoSlide() {
        goNext();
        setTimeout(autoSlide, 1000);
    }

    
    window.onload = autoSlide;

    const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const slider = document.querySelector(".w");
  const totalImages = slider.children.length;
  let currentIndex = 0;

  function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalImages - 1; 
    }
    updateSliderPosition();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateSliderPosition();
  });

const images = document.querySelectorAll(".K img");

        images.forEach(img => {
            img.addEventListener("mouseenter", () => {
                const message = document.createElement("p");
                message.textContent = "You're hovering over the image!";
                message.style.color = "orange";
                message.classList.add("hover-message");
                img.parentElement.appendChild(message);
            });

            img.addEventListener("mouseleave", () => {
                const message = img.parentElement.querySelector(".hover-message");
                if (message) {
                    img.parentElement.removeChild(message);
                }
            });
        });

       document.querySelectorAll("#footer div h5").forEach((item) => {
          item.addEventListener("click", () => {
            const subItems = item.nextElementSibling;
            if (subItems && subItems.tagName === 'DIV') {
              subItems.style.display = subItems.style.display === 'none' ? 'block' : 'none';
            }
          });
        });       



        
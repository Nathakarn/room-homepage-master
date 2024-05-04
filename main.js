document.addEventListener("DOMContentLoaded", function () {
    const slideLeft = document.getElementById('slideLeft');
    const slideRight = document.getElementById('slideRight');
    const infoText = document.getElementById('infoText');
    const infoHeadline = document.querySelector('.info__headline'); // เพิ่มการเลือก element สำหรับ headline

    let currentSlide = 1; // Set initial slide index
  
    slideLeft.addEventListener('click', () => {
      currentSlide = (currentSlide === 1) ? 3 : currentSlide - 1; // Loop through images
      changeImage(`./images/desktop-image-hero-${currentSlide}.jpg`);
      changeInfoText(`Image ${currentSlide} info`);
      changeInfoHeadline(); // เรียกใช้ฟังก์ชันเพื่อเปลี่ยน headline
    });
  
    slideRight.addEventListener('click', () => {
      currentSlide = (currentSlide === 3) ? 1 : currentSlide + 1; // Loop through images
      changeImage(`./images/desktop-image-hero-${currentSlide}.jpg`);
      changeInfoText(`Image ${currentSlide} info`);
      changeInfoHeadline(); // เรียกใช้ฟังก์ชันเพื่อเปลี่ยน headline
    });
  
    function changeImage(src) {
      const mainImg = document.querySelector('.main__img img');
      mainImg.src = src;
    }
  
    function changeInfoText(text) {
      if (currentSlide === 1) {
        infoText.textContent = "We provide unmatched quality, comfort, and style for property owners across the country.  Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
      } else if (currentSlide === 2) {
        infoText.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
      }else if (currentSlide === 3) {
        infoText.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
      }
    }

    function changeInfoHeadline() { 
      if (currentSlide === 1) {
          infoHeadline.textContent = "Discover innovative ways to decorate"; 
        } else if (currentSlide === 2) {
          infoHeadline.textContent = "We are available all across the globe"; 
        } else if (currentSlide === 3) {
          infoHeadline.textContent = "Manufactured with the best materials"; 
      }
    }
});

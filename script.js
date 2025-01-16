document.addEventListener("DOMContentLoaded", () => {
    // Matn animatsiyasi
    const effectText = document.querySelector(".effect-text");
  
    function updateEffectTextStyle() {
      if (window.innerWidth <= 768) {
        effectText.style.fontSize = "18px";
        effectText.style.padding = "8px 10px";
      } else {
        effectText.style.fontSize = "30px";
        effectText.style.padding = "10px 20px";
      }
    }
  
    updateEffectTextStyle();
  
    setTimeout(() => {
      effectText.classList.add("active");
    }, 500);
  
    window.addEventListener("resize", updateEffectTextStyle);
  
    // Dron animatsiyasi
    const dron = document.querySelector(".absolut_images");
  
    function startAnimation() {
      if (!dron) return;
  
      const isSmallScreen = window.innerWidth <= 768;
  
      dron.style.top = isSmallScreen ? "50px" : "100px";
      dron.style.left = isSmallScreen ? "50px" : "100px";
  
      setTimeout(() => {
        dron.style.top = "0";
        dron.style.left = isSmallScreen ? "80%" : "1220px";
      }, 2000);
    }
  
    setInterval(startAnimation, 5000);
  
    // Akkordeon
    const items = document.querySelectorAll(".accordion button");
  
    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");
      items.forEach((item) => item.setAttribute("aria-expanded", "false"));
      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }
  
    function updateAccordionStyle() {
      const isSmallScreen = window.innerWidth <= 768;
      items.forEach((item) => {
        item.style.fontSize = isSmallScreen ? "16px" : "20px";
        item.style.padding = isSmallScreen ? "10px" : "15px";
      });
    }
  
    items.forEach((item) => item.addEventListener("click", toggleAccordion));
    updateAccordionStyle();
  
    window.addEventListener("resize", updateAccordionStyle);
  });
  
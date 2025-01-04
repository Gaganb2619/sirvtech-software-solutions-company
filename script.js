document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("mouseenter", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      menu.style.display = "block";
    });
  
    dropdown.addEventListener("mouseleave", () => {
      const menu = dropdown.querySelector(".dropdown-menu");
      menu.style.display = "none";
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {

  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {

      const currentItem = header.closest(".accordion-item");
      const icon = header.querySelector(".icon");
      const isOpen = currentItem.classList.contains("active");

      // close all
      document.querySelectorAll(".accordion-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".icon").textContent = "+";
      });

      // toggle clicked
      if (!isOpen) {
        currentItem.classList.add("active");
        icon.textContent = "−";
      }

    });
  });

});

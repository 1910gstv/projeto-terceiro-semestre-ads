class Eventos {
  activeModal() {
    const modal = document.getElementById("modal");
    const buttonModal = document.getElementById("buttonModal");
    const close = document.getElementsByClassName("close")[0];

    buttonModal.addEventListener("click", (event) => {
      modal.style.display = "block";
      event.preventDefault();
    });

    close.onclick = function () {
     
        modal.style.display = "none";
      
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  activeMenu() {
    const hamburger = document.getElementById("hamburger");
    const menuNav = document.getElementById("menu-nav");

    hamburger.addEventListener("click", () => {
      menuNav.classList.toggle("show");
    });
  }
}

let eventos = new Eventos();

eventos.activeMenu();
eventos.activeModal();

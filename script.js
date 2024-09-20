const iconBoxes = document.querySelectorAll(".icon-box");
const iconBoxContainers = document.querySelectorAll(".icon-container");
const closeBtns = document.querySelectorAll(".close-btn");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");

iconBoxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    modal.style.display = "none";
    body.classList.remove("prevent-background-scroll");
    iconBoxContainers.forEach((container) => {
      container.style.display = "flex";
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});

maximizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    let container = modal.querySelector(".popup-container");
    let body = modal.querySelector(".popup-body");

    if (modal.classList.contains("maximized")) {
      container.style.width = "min(900px, 90%)";
      container.style.top = "45%";
      body.style.height = "70vh";
    } else {
      container.style.width = "100%";
      container.style.top = "50%";
      body.style.height = "90vh";
    }

    modal.classList.toggle("maximized");
    body.classList.toggle("prevent-scroll");
  });
});

var swiper = new Swiper(".swiper", {
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  mousewheel: {
    invert: false,
    thresholdDelta: 50,
    sensitivity: 1
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    680: {
      slidesPerView: 2
    },
    1100: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 4
    }
  }
});

let items = document.querySelectorAll(".socials-item-icon"),
  self = this;
items.forEach((item, index) => {
  item.addEventListener("mousemove", mouseMove);
  item.addEventListener("mouseleave", mouseLeave);
});

function mouseMove(e) {
  let target = e.target.closest("a"),
    targetData = target.getBoundingClientRect(),
    targetIcon = target.querySelector("i"),
    offset = {
      x: ((e.pageX - (targetData.left + targetData.width / 2)) / 4) * -1,
      y: ((e.pageY - (targetData.top + targetData.height / 2)) / 4) * -1
    };
  target.style.transform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
  target.style.webkitTransform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
  document.querySelectorAll(".socials-item-icon").forEach((e) => {
    if (e !== target) {
      e.style.transform =
        "translate(" +
        offset.x / 2 +
        "px, " +
        offset.y / 2 +
        "px) scale(" +
        0.9 +
        ")";
      e.style.webkitTransform =
        "translate(" +
        offset.x / 2 +
        "px, " +
        offset.y / 2 +
        "px) scale(" +
        0.9 +
        ")";
    }
  });
  targetIcon.style.transform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
  targetIcon.style.webkitTransform =
    "translate(" + offset.x + "px," + offset.y + "px) scale(" + 1.1 + ")";
}

function mouseLeave(e) {
  document.querySelectorAll(".socials-item-icon").forEach((target) => {
    let targetIcon = target.querySelector("i");
    target.style.transform = "translate(0px,0px) scale(1)";
    target.style.webkitTransform = "translate(0px,0px) scale(1)";
    targetIcon.style.transform = "translate(0px,0px) scale(1)";
    targetIcon.style.webkitTransform = "translate(0px,0px) scale(1)";
  });
}

document.querySelectorAll(".socials-item a").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 300);
  });
});

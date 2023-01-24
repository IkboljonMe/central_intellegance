window.addEventListener("DOMContentLoaded", allScripts);
let classesToAdd = ["show", "fade"];
function allScripts() {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");

  //Loader
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, [500]);
  }, [2000]);

  //Tab
  const hideContent = () => {
    tabs.forEach((item) => item.classList.remove("tabheader__item_active"));
    tabsContent.forEach((item) => {
      item.classList.add("hide"), item.classList.remove("show", "fade");
    });
  };

  hideContent();

  const showContent = (i = 0) => {
    tabs[i].classList.add("tabheader__item_active");
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
  };
  showContent();

  const showExactTabcontentById = (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, id) => {
        if (target === item) {
          hideContent();
          showContent(id);
        }
      });
    }
  };
  tabsParent.addEventListener("click", showExactTabcontentById);
}

//Timer

const givenDeadline = new Date("2023-07-26");

function getData(deadline) {
  const now = new Date();
  timer = deadline - now;
  const days = Math.floor(timer / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timer / (1000 * 60)) % 60);
  const seconds = Math.floor((timer / 1000) % 60);
  return {
    timer,
    days,
    hours,
    minutes,
    seconds,
  };
}

function wrapToZero(number) {
  if (number > 0 && number < 10) {
    return `0${number}`;
  } else return number;
}

function setCountdown() {
  const days = document.querySelector("#days"),
    hours = document.querySelector("#hours"),
    minutes = document.querySelector("#minutes"),
    seconds = document.querySelector("#seconds");

  setInterval(() => {
    const allDates = getData(givenDeadline);
    days.textContent = wrapToZero(allDates.days);
    hours.textContent = wrapToZero(allDates.hours);
    minutes.textContent = wrapToZero(allDates.minutes);
    seconds.textContent = wrapToZero(allDates.seconds);
  }, [1000]);
}
setCountdown();

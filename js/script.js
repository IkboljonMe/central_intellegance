window.addEventListener("DOMContentLoaded", allScripts);
let classesToAdd = ["show", "fade"];
function allScripts() {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

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

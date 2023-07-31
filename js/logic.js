function ResponsiveNavMenu() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    console.log("adding responsive");
    x.className += " responsive";
  } else {
    console.log("adding topnac");
    x.className = "topnav";
  }
}

function toggleDropdownMenu(menuId) {
  console.log("toggle drop down");
  console.log(menuId);

  const menu = document.getElementById(menuId);
  console.log(menu.className);
  if (menu.className === "menu" || menu.className === "menu visible") {
    console.log("adding invisible");
    menu.className = "menu";
    menu.className += " invisible";
  } else {
    console.log("adding visible");
    menu.className = "menu";
    menu.className += " visible";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var hiddenContent = document.getElementById("hidden-content");
  hiddenContent.style.height = "0";
  hiddenContent.style.opacity = 0;

  document.getElementById("learn-more").addEventListener("click", function () {
    if (hiddenContent.style.height === "0px") {
      // Show the hidden content with a smooth transition
      hiddenContent.style.height = "auto";
      hiddenContent.style.opacity = 1;

      // Scroll to the hidden content
      hiddenContent.scrollIntoView({ behavior: "smooth" });
    }
  });
});

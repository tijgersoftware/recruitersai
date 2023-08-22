function ResponsiveNavMenu() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleDropdownMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (menu.className === "menu" || menu.className === "menu visible") {
    menu.className = "menu";
    menu.className += " invisible";
  } else {
    menu.className = "menu";
    menu.className += " visible";
  }
}

function revealContent(hiddenContent) {
  if (hiddenContent.style.height === "0px") {
    // Show the hidden content with a smooth transition
    hiddenContent.style.height = "auto";
    hiddenContent.style.opacity = 1;

    // Scroll to the hidden content
    hiddenContent.scrollIntoView({ behavior: "smooth" });
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

  setTimeout(function () {
    revealContent(hiddenContent); // Call the function after 8 seconds
  }, 12000);
});

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

document.addEventListener("DOMContentLoaded", function () {
  // On page load, set the opacity of the body to 1, creating the fade-in effect
  document.body.style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", function () {
  // On page load, set the opacity of the body to 1, creating the fade-in effect
  document.body.style.opacity = 1;
});
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "content-container"
  const contentContainers = document.querySelectorAll(".content-container");

  // Loop through each content container
  contentContainers.forEach((contentContainer) => {
    // Select all child elements of contentContainer except those with the class "video"
    const otherContent = contentContainer.querySelectorAll(
      ".content-container > :not(.video)"
    );

    // After 2 seconds, remove the "hidden" class to show the content and apply the ease-in effect
    setTimeout(function () {
      contentContainer.classList.remove("hidden");
      contentContainer.classList.add("content-ease-in");

      // Apply the "content-ease-in" class to other content elements
      otherContent.forEach((element) => {
        element.classList.add("content-ease-in");
      });
    }, 2000); // 2000ms = 2 seconds
  });
});

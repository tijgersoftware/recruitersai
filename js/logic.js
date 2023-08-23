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

document.addEventListener("DOMContentLoaded", function () {
  function setActiveTab(tabId, tabs) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    const tab = document.getElementById(tabId);
    if (tab) {
      tab.classList.add("active");
    }
  }

  setTimeout(function () {
    const tabs = document.querySelectorAll(".tab");
    console.log(tabs);

    // Check the URL to determine the active tab
    const url = window.location.href;
    if (
      url.endsWith("index.html") ||
      url.endsWith("/") ||
      url.endsWith("5500") ||
      url.endsWith(".com")
    ) {
      setActiveTab("home-tab", tabs);
    } else if (url.endsWith("features.html")) {
      setActiveTab("features-tab", tabs);
    } else if (url.endsWith("pricing.html")) {
      setActiveTab("pricing-tab", tabs);
    } else if (url.endsWith("company.html")) {
      setActiveTab("company-tab", tabs);
    } else if (url.endsWith("info.html")) {
      setActiveTab("services-tab", tabs);
    }
  }, 300); // 5000 milliseconds = 5 seconds
});

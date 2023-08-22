document.addEventListener("DOMContentLoaded", function () {
  const topNavContainer = document.getElementById("topNavContainer");
  const footer = document.getElementById("footer");

  // Fetch the header HTML file
  fetch("./components/top-nav.html")
    .then((response) => response.text())
    .then((data) => {
      // Insert the header content into the header container
      topNavContainer.innerHTML = data;
    })
    .catch((error) => {
      console.log("Error fetching header:", error);
    });

  // Fetch the header HTML file
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      // Insert the header content into the header container
      footer.innerHTML = data;
    })
    .catch((error) => {
      console.log("Error fetching header:", error);
    });
});

// Get the slider element
var slider = document.querySelector(".slider");

// Get the value elements
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");

// Function to update the slider value
function changeValue() {
  const sliderValue = slider.value;

  if (sliderValue === "0") {
    value1.textContent = "Free Software";
    value2.textContent = "€" + 0;
  }
  // else if (sliderValue==="50"){
  //   value1.textContent = 50;
  //   value2.textContent = '€' + 250;

  // }
  else if (sliderValue === "100") {
    value1.textContent = "Custom AI";
    value2.textContent = "Custom Price";
  }
}

// Add event listener to the slider
slider.addEventListener("input", changeValue);

function supportMail() {
  // Get the support email address
  var email = "support@CasaQuest.com";

  // Open the user's default email client with the support email address
  window.location.href = "mailto:" + email;
}

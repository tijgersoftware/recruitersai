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
    }, 500); // 2000ms = 2 seconds
  });
});

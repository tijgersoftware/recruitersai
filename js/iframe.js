document.getElementById("iframe-chatbot").onload = function () {
  var iframe = document.getElementById("iframe-chatbot");

  setTimeout(function () {
    iframe.style.display = "block"; // Show the iframe after a delay of 3 seconds
  }, 3000); // 3000 milliseconds = 3 seconds
};

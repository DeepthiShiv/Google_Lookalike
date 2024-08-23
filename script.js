var input = document.getElementById("search");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    window.open("https://www.google.co.uk/search?q=".concat(document.getElementById("search").value), "_top");
  }
});

function clickSearch(){
  if (document.getElementById("search").value != "" ) {
    window.open("https://www.google.co.uk/search?q=".concat(document.getElementById("search").value), "_top");
  }
}

function clickLucky(){
  if (document.getElementById("search").value != "" ) {
    window.open("https://www.google.co.uk/search?q=".concat(document.getElementById("search").value, "&btnI=I"), "_top");
  }
    else {
      window.open("https://www.google.com/search?q=google&btnI=I", "_top");
    }
}
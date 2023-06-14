function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function includeHTML(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Insert the retrieved content into the container
      document.getElementById("includedContent").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

function changeTitle(index) {
  var title = document.getElementById("titleNav");
  switch (index) {
    case 0:
      title.title = "Dashboard";
      console.log(title.title);
      break;
    case 1:
      title.title = "Create Task";
      console.log(title.title);
      break;
    case 2:
      title.title = "Members";
      console.log(title.title);
      break;
    case 3:
      break;
  }
}

includeHTML("../app/SliderMenu.html");

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function setupSliderMenu() {
  var arrMenuItems = [];

  arrMenuItems.push({
    name: "Dashboard",
    url: "../app/Dashboard.html",
  });

  const isAdmin = localStorage.getItem("isAdmin");
  const isAdminValue = JSON.parse(isAdmin);

  if (isAdminValue === true) {
    arrMenuItems.push({
      name: "Members",
      url: "../app/MemberList.html",
    });

    arrMenuItems.push({
      name: "Create Task",
      url: "../app/CreateTask.html",
    });

    arrMenuItems.push({
      name: "Create Member",
      url: "../app/CreateMember.html",
    });
  }

  arrMenuItems.push({ name: "Logout", url: "../app/LoginPage.html" });

  const sidenav = document.getElementById("mySidenav");
  for (let i = 0; i < arrMenuItems.length; i++) {
    const menuItem = arrMenuItems[i];
    const link = document.createElement("a");
    link.href = menuItem.url;
    link.textContent = menuItem.name;
    sidenav.appendChild(link);
  }
}

function includeHTML(file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Insert the retrieved content into the container
      document.getElementById("includedContent").innerHTML = this.responseText;
      setupSliderMenu();
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML("../app/SliderMenu.html");
});

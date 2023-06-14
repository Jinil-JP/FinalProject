var taskData = localStorage.getItem("tasks");
var arrTasks = taskData ? JSON.parse(taskData) : [];

var arrPendingTasks = arrTasks.filter(function (task) {
  return task.isCompleted === 0;
});

console.log(arrPendingTasks);

var arrCompletedTask = arrTasks.filter(function (task) {
  return task.isCompleted === 1;
});
console.log(arrCompletedTask);

function generateTable(data, tableId) {
  var table = document.getElementById(tableId);

  table.innerHTML = "";

  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  headerRow.innerHTML =
    "<th>Task ID</th><th>Task Name</th><th>Start Date</th><th>End Date</th><th></th>";
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].startDate}</td>
      <td>${data[i].endDate}</td>
      <td><button onclick="viewDetails(${data[i].taskId})">View Details</button></td>
    `;
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
}

function redirectToCreateTask() {
  window.location.href = "../app/CreateTask.html";
}

function openPopup() {
  var overlay = document.getElementById("overlay");
  var popupContent = document.getElementById("popupContent");
  var popupIframe = document.getElementById("popupIframe");
  popupIframe.src = "CreateTask.html";
  overlay.style.display = "block";
  popupContent.style.display = "block";
}

function closePopup() {
  var overlay = document.getElementById("overlay");
  var popupContent = document.getElementById("popupContent");
  var popupIframe = document.getElementById("popupIframe");
  popupIframe.src = "";
  overlay.style.display = "none";
  popupContent.style.display = "none";
}

function changeTab(tabIndex) {
  var tabs = document.getElementsByClassName("tab");
  var contents = document.getElementsByClassName("content");

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    contents[i].classList.remove("active");
  }

  tabs[tabIndex].classList.add("active");
  contents[tabIndex].classList.add("active");
}

function viewDetails(taskId) {
  console.log("View details for Task ID:", taskId);
}

function changeStatus(taskId) {
  console.log("Change status for Task ID:", taskId);
}

function toggleSliderMenu() {
  var sliderMenu = document.getElementById("sliderMenu");
  sliderMenu.classList.toggle("slider-menu-open");
}

generateTable(arrPendingTasks, "tblPending");
generateTable(arrCompletedTask, "tblCompleted");
changeTab(0);

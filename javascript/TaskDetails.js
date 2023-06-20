const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get("taskId");

function generateTaskTable(task) {
  const table = document.createElement("table");

  const taskIdRow = document.createElement("tr");
  const taskIdCell = document.createElement("td");
  taskIdCell.textContent = "Task ID";
  taskIdRow.appendChild(taskIdCell);

  const taskIdValueCell = document.createElement("td");
  taskIdValueCell.textContent = task.id;
  taskIdRow.appendChild(taskIdValueCell);

  table.appendChild(taskIdRow);

  const taskNameRow = document.createElement("tr");
  const taskNameCell = document.createElement("td");
  taskNameCell.textContent = "Task Name";
  taskNameRow.appendChild(taskNameCell);

  const taskNameValueCell = document.createElement("td");
  taskNameValueCell.textContent = task.name;
  taskNameRow.appendChild(taskNameValueCell);

  table.appendChild(taskNameRow);

  const taskDescriptionRow = document.createElement("tr");
  const taskDescriptionCell = document.createElement("td");
  taskDescriptionCell.textContent = "Task Description";
  taskDescriptionRow.appendChild(taskDescriptionCell);

  const taskDescriptionValueCell = document.createElement("td");
  taskDescriptionValueCell.textContent = task.description;
  taskDescriptionRow.appendChild(taskDescriptionValueCell);

  table.appendChild(taskDescriptionRow);

  const taskStartDateRow = document.createElement("tr");
  const taskStartDateCell = document.createElement("td");
  taskStartDateCell.textContent = "Task Start Date";
  taskStartDateRow.appendChild(taskStartDateCell);

  const taskStartDateValueCell = document.createElement("td");
  taskStartDateValueCell.textContent = task.startDate;
  taskStartDateRow.appendChild(taskStartDateValueCell);

  table.appendChild(taskStartDateRow);

  const taskEndDateRow = document.createElement("tr");
  const taskEndDateCell = document.createElement("td");
  taskEndDateCell.textContent = "Task End Date";
  taskEndDateRow.appendChild(taskEndDateCell);

  const taskEndDateValueCell = document.createElement("td");
  taskEndDateValueCell.textContent = task.endDate;
  taskEndDateRow.appendChild(taskEndDateValueCell);

  table.appendChild(taskEndDateRow);

  if (task.isCompleted) {
    const hoursWorkedRow = document.createElement("tr");
    const hoursWorkedCell = document.createElement("td");
    hoursWorkedCell.textContent = "Hours Worked";
    hoursWorkedRow.appendChild(hoursWorkedCell);

    const hoursWorkedValueCell = document.createElement("td");
    hoursWorkedValueCell.textContent = task.hoursWorked;
    hoursWorkedRow.appendChild(hoursWorkedValueCell);

    table.appendChild(hoursWorkedRow);

    const costOfProjectRow = document.createElement("tr");
    const costOfProjectCell = document.createElement("td");
    costOfProjectCell.textContent = "Cost of Project (CAD)";
    costOfProjectRow.appendChild(costOfProjectCell);

    table.appendChild(costOfProjectCell);

    const costOfProjectValueCell = document.createElement("td");
    costOfProjectValueCell.textContent =
      task.member.hourlyRate * task.hoursWorked;
    costOfProjectRow.appendChild(costOfProjectValueCell);

    table.appendChild(costOfProjectValueCell);
  } else {
    // Create a button to complete the task
    const completeTaskRow = document.createElement("tr");
    const completeTaskCell = document.createElement("td");
    completeTaskCell.setAttribute("colspan", "2");
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete Task";
    completeButton.addEventListener("click", function () {
      completeTask(task.id);
    });
    completeTaskCell.appendChild(completeButton);
    completeTaskRow.appendChild(completeTaskCell);
    table.appendChild(completeTaskRow);
  }
  return table;
}

function generateMemberTable(member) {
  const table = document.createElement("table");

  const memberIdRow = document.createElement("tr");
  const memberIdCell = document.createElement("td");
  memberIdCell.textContent = "Member ID";
  memberIdRow.appendChild(memberIdCell);

  const memberIdValueCell = document.createElement("td");
  memberIdValueCell.textContent = member.id;
  memberIdRow.appendChild(memberIdValueCell);

  table.appendChild(memberIdRow);

  const memberNameRow = document.createElement("tr");
  const memberNameCell = document.createElement("td");
  memberNameCell.textContent = "Member Name";
  memberNameRow.appendChild(memberNameCell);

  const memberNameValueCell = document.createElement("td");
  memberNameValueCell.textContent = member.name;
  memberNameRow.appendChild(memberNameValueCell);

  table.appendChild(memberNameRow);

  const memberEmailRow = document.createElement("tr");
  const memberEmailCell = document.createElement("td");
  memberEmailCell.textContent = "Member Email";
  memberEmailRow.appendChild(memberEmailCell);

  const memberEmailValueCell = document.createElement("td");
  memberEmailValueCell.textContent = member.email;
  memberEmailRow.appendChild(memberEmailValueCell);

  table.appendChild(memberEmailRow);

  const memberHourlyRateRow = document.createElement("tr");
  const memberHourlyRateCell = document.createElement("td");
  memberHourlyRateCell.textContent = "Member Hourly Rate";
  memberHourlyRateRow.appendChild(memberHourlyRateCell);

  const memberHourlyRateValueCell = document.createElement("td");
  memberHourlyRateValueCell.textContent = member.hourlyRate;
  memberHourlyRateRow.appendChild(memberHourlyRateValueCell);

  table.appendChild(memberHourlyRateRow);

  return table;
}

function completeTask(taskId) {
  console.log("Completed task with TaskID :: ", taskId);

  const hoursWorked = prompt("Enter hours you worked this task.");
  if (hoursWorked !== null) {
    const parsedHours = parseInt(hoursWorked);
    if (!isNaN(parsedHours) && parsedHours >= 0) {
      // Update the task with the hours worked
      const taskData = localStorage.getItem("tasks");
      const arrTasks = taskData ? JSON.parse(taskData) : [];
      const task = arrTasks.find((task) => task.id === parseInt(taskId));
      if (task) {
        task.isCompleted = 1;
        task.hoursWorked = parsedHours;
        localStorage.setItem("tasks", JSON.stringify(arrTasks));
        location.reload(); // Refresh the page to reflect the updated data
      }
    } else {
      alert("Invalid input. Please enter a valid number of hours worked.");
    }
  }
}

var taskData = localStorage.getItem("tasks");
var arrTasks = taskData ? JSON.parse(taskData) : [];

console.log(arrTasks);

const task = arrTasks.find((task) => {
  return task.id === parseInt(taskId);
});

if (task) {
  const taskTable = generateTaskTable(task);
  document.getElementById("taskDetails").appendChild(taskTable);

  const memberTable = generateMemberTable(task.member);
  document.getElementById("memberDetails").appendChild(memberTable);
}

function deleteTask() {
  const confirmation = confirm("Are you sure you want to delete this task?");
  if (confirmation) {
    const taskData = localStorage.getItem("tasks");
    const arrTasks = taskData ? JSON.parse(taskData) : [];
    const index = arrTasks.findIndex((task) => task.id === parseInt(taskId));
    if (index !== -1) {
      arrTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(arrTasks));
      location.href = "../app/Dashboard.html";
    }
  }
}

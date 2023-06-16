import * as constant from "../src/constants/constant.js";

class Member {
  constructor(id, name, email, hourlyRate, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.hourlyRate = hourlyRate;
    this.password = password;
  }
}

class Task {
  constructor(
    id,
    name,
    description,
    startDate,
    endDate,
    isCompleted,
    hoursWorked,
    member
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isCompleted = isCompleted;
    this.hoursWorked = hoursWorked;
    this.member = member;
  }
}

var arrTasks = [];

var arrMembers = JSON.parse(localStorage.getItem("members")) || [];

var selectedMember = new Member();

const selectElement = document.getElementById("txtAssignedMember");

arrMembers.forEach((member) => {
  const optionElement = document.createElement("option");
  optionElement.value = member.id;
  optionElement.text = `${member.name} (${member.email})`;
  selectElement.add(optionElement);
});

function handleMemberSelection() {
  const selectElement = document.getElementById("txtAssignedMember");
  const selectedMemberId = selectElement.value;
  if (selectedMemberId) {
    selectedMember = arrMembers.find(
      (member) => member.id === parseInt(selectedMemberId)
    );
    console.log(selectedMember);
  }
}

function createTask() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  var taskId = tasks.length;
  var taskName = document.getElementById("txtTaskName").value;
  var taskDescription = document.getElementById("txtDescription").value;
  var taskStartDate = document.getElementById("txtTaskStartDate").value;
  var taskEndDate = document.getElementById("txtTaskEndDate").value;

  var member = new Member(1, "John Doe", "john@example.com", 20);

  var task = new Task(
    taskId,
    taskName,
    taskDescription,
    taskStartDate,
    taskEndDate,
    0,
    0,
    selectedMember
  );

  saveTaskToLocal(task);
}

function saveTaskToLocal(task) {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task Created!");
}

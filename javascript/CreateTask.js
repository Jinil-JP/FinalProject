class Member {
  constructor(id, name, email, hourlyRate) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.hourlyRate = hourlyRate;
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

var arrMembers = [];
var selectedMember = new Member();

var memberFirst = new Member(0, "Nimesh Vasani", "nimesh@gmail.com", 40);
var memberSecond = new Member(1, "Jontish Kakadiya", "Jontish@gmail.com", 35);
var memberThird = new Member(2, "Kathan Patel", "Kathan@gmail.com", 25);

arrMembers.push(memberFirst);
arrMembers.push(memberSecond);
arrMembers.push(memberThird);

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
  var taskId = 0;
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
    1,
    0,
    selectedMember
  );

  saveTaskToLocal(task);
}

function saveTaskToLocal(task) {
  // Retrieve existing tasks from local storage or initialize an empty array
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Add the new task to the array
  tasks.push(task);

  // Save the updated array back to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  var updatedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // console.log(updatedTasks);
  var taskJson = JSON.stringify(updatedTasks);
  alert(taskJson);
}

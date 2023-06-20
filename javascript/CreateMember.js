function createMember() {
  var members = JSON.parse(localStorage.getItem("members")) || [];
  var memberId = members.length + 1;
  var memberName = document.getElementById("txtMemberName").value;
  var memberEmail = document.getElementById("txtMemberEmail").value;
  var hourlyRate = document.getElementById("txtHourlyRate").value;
  var password = document.getElementById("txtPassword").value;

  // Validate blank fields
  if (!memberName || !memberEmail || !hourlyRate || !password) {
    alert("Please fill in all the required fields.");
    return;
  }

  class Member {
    constructor(id, name, email, hourlyRate, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.hourlyRate = hourlyRate;
      this.password = password;
    }
  }

  var member = new Member(
    memberId,
    memberName,
    memberEmail,
    hourlyRate,
    password
  );

  document.getElementById("formCreateMember").reset();

  saveMemberToLocal(member);

  class User {
    constructor(id, email, password, isAdmin) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.isAdmin = isAdmin;
    }
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var userId = users.length;
  var user = new User(userId, memberEmail, password, 0);
  saveUserToLocal(user);
}

function saveMemberToLocal(member) {
  var members = JSON.parse(localStorage.getItem("members")) || [];

  members.push(member);

  localStorage.setItem("members", JSON.stringify(members));

  alert("Member Created!");
  location.href = "../app/MemberList.html";
}

function saveUserToLocal(user) {
  var users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
}

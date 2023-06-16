function createMember() {
  var members = JSON.parse(localStorage.getItem("members")) || [];
  var memberId = members.length;
  var memberName = document.getElementById("txtMemberName").value;
  var memberEmail = document.getElementById("txtMemberEmail").value;
  var hourlyRate = document.getElementById("txtHourlyRate").value;

  class Member {
    constructor(id, name, email, hourlyRate) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.hourlyRate = hourlyRate;
    }
  }

  var member = new Member(memberId, memberName, memberEmail, hourlyRate);

  console.log(member);

  document.getElementById("formCreateMember").reset();

  saveMemberToLocal(member);
}

function saveMemberToLocal(member) {
  var members = JSON.parse(localStorage.getItem("members")) || [];

  members.push(member);

  localStorage.setItem("members", JSON.stringify(members));

  alert("Member Created!");
}

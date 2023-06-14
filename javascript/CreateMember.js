function createMember() {
  var memberId = 0;
  var memberName = document.getElementById("txtMemberName").value;
  var memberEmail = document.getElementById("txtMemberEmail").value;
  var hourlyRate = document.getElementById("txtHourlyRate").value;

  var member = new Member(memberId, memberName, memberEmail, hourlyRate);

  console.log(member);

  document.getElementById("formCreateMember").reset();
  alert("Member Created!");
}

var memberData = localStorage.getItem("members");
var arrMembers = memberData ? JSON.parse(memberData) : [];

console.log(arrMembers);

function generateTable(data, tableId) {
  var table = document.getElementById(tableId);

  table.innerHTML = "";

  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  headerRow.innerHTML =
    "<th>Member Id</th><th>Member Name</th><th>Member Email</th><th>Hourly Rate</th>";
  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      <td>${data[i].hourlyRate}</td>
    `;
    tbody.appendChild(row);

    //<td><button onclick="deleteMember(${data[i].id})">Delete Member</button></td>
  }
  table.appendChild(tbody);
}

function deleteMember(memberId) {
  console.log("Delete Member with member ID:", memberId);
}

function generateTableMemberList() {
  if (arrMembers.length == 0) {
    var table = document.getElementById("tblMemberList");
    table.innerHTML = "<h2>No data found</h2>";
  } else {
    generateTable(arrMembers, "tblMemberList");
  }
}

generateTableMemberList(arrMembers, "tblMemberList");

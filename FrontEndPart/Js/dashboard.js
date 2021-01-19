$(document).ready(function () {
  getData();
});

function getData() {
  $.ajax({
    url: "http://localhost:4000/employee/read",
    Type: 'GET',
    success: function (result) {
      loadData(result.data);
      console.log(result.data);
    },
    error: (error) => { alert(error.message) }
  });

}

function loadData(data) {
  var myobj = $("#table").val();
  $.each(data, function (key, val) {
    myobj += "<tr>";
    myobj += "<td>" + val.firstName + "</td>";
    myobj += '<td>' + val.lastName + '</td>';
    myobj += '<td>' + val.emailId + '</td>';
    myobj += '<td>' + val.mobileNumber + '</td>';
    myobj += '<td>' + val.companyName + '</td>';
    myobj += '<td>' + val.salary + '</td>';
    myobj += '<td><button class= "edit">Edit</button></td>';
    myobj += `<td><button class="delet"  onclick="deleteOne('${val._id}')">Delete</button></td>`
    "</tr>";
  });
  $('#data').append(myobj);
}

deleteOne = (id) => {
  console.log(id)
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:4000/employee/delete/${id}`,
  })

  window.open("../HTML/main.html", "_self")
}  
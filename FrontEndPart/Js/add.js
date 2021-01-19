let fName
let lName
let email
let mobNumber
let comName
let sal

$(document).ready(function() {

fName = $("#firstName");
lName =  $("#lastName");
email = $("#emailId");
mobNumber = $("#mobileNumber");
compName = $("#companyName")
sal = $("#salary")
})

function postData(){
    
        var addData = {
            "firstName" : fName.val(),
            "lastName" : lName.val(),
            "emailId" : email.val(),
            "mobileNumber" : mobNumber.val(),
            "companyName" : compName.val(),
            "salary" : sal.val()
        };

        console.log(addData)

        $.ajax({
            type : 'POST',
            url : 'http://localhost:4000/employee/create',
            dataType: "json",
            contentType : "application/json",
            data : JSON.stringify(addData),
            success : function(newData) {
                alert(newData);
            },
            error: function () {
                alert("Error Adding Data...")
            }
        })
    
}
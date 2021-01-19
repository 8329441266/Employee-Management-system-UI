function validate() {
    console.log("in validate")
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailId  = document.getElementById("emailId").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let companyName = document.getElementById("companyName").value;
    let salary = document.getElementById("salary").value;

    let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
    let LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
    let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");
    let PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");
    let COMPANY_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
    let SALARY_PATTERN = new RegExp('(?!0$)[0-9]+(?:\\.[0-9]+)?');

    let fname = FIRST_NAME_PATTERN.test(firstName);
    let lname = LAST_NAME_PATTERN.test(lastName);
    let email = EMAIL_PATTERN.test(emailId);
    let mob = PHONE_NUMBER_PATTERN.test(mobileNumber);
    let company = COMPANY_NAME_PATTERN.test(companyName);
    let sal = SALARY_PATTERN.test(salary);


    if (fname == false) {
        document.getElementById('firstNamerequired').innerHTML = "Enter First Name";
        return false;
     }
    if (lname == false) {
          document.getElementById('lastNamerequired').innerHTML = "Enter Last Name";
          return false;
    }
    if (email == false) {
        document.getElementById('emailIdrequired').innerHTML = "Enter Email Address";
        return false;
    }
    if (mob  == false) {
        document.getElementById('mobileNumberrequired').innerHTML = "Enter Mobile Number";
        return false;
    }
    if (company== false) {
        document.getElementById('companyNamerequired').innerHTML = "Enter company Name";
        return false;
    }
     if (sal == false) {
       document.getElementById("salaryrequired").innerHTML = "Enter salary";
       return false;
    }
     return true;

}

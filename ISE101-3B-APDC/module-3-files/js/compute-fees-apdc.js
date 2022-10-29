$(document).ready(function(){
});


    $(document).on('click', '#btnCompute', function(){
        var yearLevelFees_apdc = 0;
      
        var regFee_apdc = 0;
        var internetFee_apdc = 0;
        var idFee_apdc = 0;
        var libFee_apdc = 0;
        var scholarships_apdc = 0;
         var totalAmount_apdc = 0;
        //GET SELECTED RADIOBUTTON
        if(document.getElementById("FirstYear").checked){
            yearLevelFees_apdc = 500.00;
        }
        else if(document.getElementById("SecondYear").checked){
        yearLevelFees_apdc = 600.00;
        }
        else if(document.getElementById("ThirdYear").checked){
        yearLevelFees_apdc = 800.00;
        }
        else{
        yearLevelFees_apdc = 900.00;
     }

     //GET SELECTED CHECKBOXES
    if(document.getElementById("regfee").checked){
        regFee_apdc = 25;
    }
    else{
        regFee_apdc = 0;
    }
    if(document.getElementById("internetFee").checked){
        internetFee_apdc = 50;
    }
    else{
        internetFee_apdc = 0;
    }
    if(document.getElementById("idFee").checked){
        idFee_apdc = 100;
    }
    else{
        idFee_apdc = 0;
    }
    if(document.getElementById("libFee").checked){
        libFee_apdc = 100;
    }
    else{
        libFee_apdc = 0;
    }

    //GET SELECTED Scholarships
    if(document.getElementById("Scholarship").value =="DEAN'S LISTER 200.00"){
        scholarships_apdc = 200.00;
    }
    else if(document.getElementById("Scholarship").value=="STUDENT ASSISTANT 500.00"){
        scholarships_apdc = 500.00;
    }
    else if(document.getElementById("Scholarship").value=="PRESIDENT LIST 700.00"){
        scholarships_apdc = 500.00;
    }
    else if(document.getElementById("Scholarship").value=="FULL SCHOLARSHIP 1000.00"){
        scholarships_apdc =1000.00;
    }
    else{
        scholarships_apdc = 0;
    }
    var totalAmount_apdc = regFee_apdc + internetFee_apdc + idFee_apdc + libFee_apdc + scholarships_apdc;
    document.getElementById("Total_Amount").value = totalAmount_apdc;
    });

    $(document).on('click', '#btnReceipt', function(){
        //GET USER INPUT FROM TEXT ELEMENTS
        strStudentNumber = document.getElementById("Student_Number").value;
        strStudentName = document.getElementById("Last_Name").value + ", "+ document.getElementById("First_Name").value + " "+ document.getElementById("Middle_Name").value ;
        strTotal = document.getElementById("Total_Amount").value;
        //DISPLAY OUTPUT USING CONTENATION
        strOutput ="";
        strOutput += "<br><h2>Total Amount To Pay</h2>";
        strOutput += "Student Number : " + strStudentNumber + "<br>";
        strOutput += "Student Name : " + strStudentName + "<br>";
        strOutput += "Total Amount : " + strTotal + "<br>";
        document.getElementById("receipt").innerHTML = strOutput;
        });
    
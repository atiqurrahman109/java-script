function passingData(){
    let name1=document.getElementById("name").value;
    let contact=document.getElementById("contact").value;
    let remark=document.getElementById("remark").value;
   let gender=document.querySelector('input[name="gender"]:checked');
   let course=document.querySelectorAll('input[name="course"]:checked');
    let location=document.getElementById("location").value;
    
    let courseValue=[];
    for(i=1;i<course.length;i++){
        courseValue.push(course[i].value);

    }

    let output="name:" +  name1  +"\n" +
                "contact:" +   contact + "\n" +
                "remark:" +   remark + "\n" +
                "gender:" +   gender.value + "\n" +
                "course:" +  courseValue+ "\n" +
                "location:" +   location + "\n";


                let newWindow=window.open(" ","_blank");
                newWindow.document.write("<pre>"+ output + "</pre>");

    }


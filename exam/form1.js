function passdata() {

    let user1 = document.getElementById("user1").value;
    let contact = document.getElementById("contact").value;
    let remarks = document.getElementById("remarks").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let courses = document.querySelectorAll('input[name="courses"]:checked');
    let location = document.getElementById("location").value;

    let courseValue=[];
    for( let i=0; i < courses.length; i++){
        courseValue.push(courses[i].value);
    
    }


    let output = "user1: " + user1 + "\n" +
        "contact: " + contact + "\n" +
        "remarks: " + remarks + "\n" +
        "gender: " + gender.value + "\n" +
        "courses: " + courseValue + "\n" +
        "location:" + location + "\n" +


        let newWindow=window.open('','_blank');
        newWindow.document.write("<pre>"+output+"</pre>");

}
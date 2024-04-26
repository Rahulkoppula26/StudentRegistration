//creating js variables using queryselector 
//getting the values from html elements
const stuName = document.querySelector(".stuname");
const  stuId = document.querySelector(".stuid");
const  stuEmail = document.querySelector(".email-id");
const  stuContact = document.querySelector(".contact-no");
const  button = document.querySelector(".add-button");
const  stuDetails = document.querySelector(".studentDetails");

// function to add student details in array
button.addEventListener("click",studentDetailsItem);
function studentDetailsItem(){ 
    //creating  an empty object and creating new elements for new student
    const stuDiv = document.createElement("div");
    stuDiv.classList.add("box-shape");
    const item1 = document.createElement("h4");
    item1.classList.add("name");
    const item2 = document.createElement("h4");
    item2.classList.add("id");
    const item3 = document.createElement("h4");
    item3.classList.add("email");
    const item4 = document.createElement("h4");
    item4.classList.add("contact");

    item1.innerHTML = stuName.value;
    item2.innerHTML = stuId.value;
    item3.innerHTML = stuEmail.value;
    item4.innerHTML = stuContact.value;

    stuDiv.appendChild(item1);
    stuDiv.appendChild(item2);
    stuDiv.appendChild(item3);
    stuDiv.appendChild(item4);

    //condition  to check if fields are empty or not
    if(stuName.value === '') return;
    if(stuId.value === '') return;
    if(stuEmail.value === '') return;
    if(stuContact.value === '') return;

    //creating  a edit button
    const  editBtn = document.createElement("button");
    editBtn.innerHTML ='Edit';
    editBtn.classList.add("edit");
    stuDiv.appendChild(editBtn);
    stuDetails.appendChild(stuDiv);

    //creating  a delete button
    const  deleteBtn =document.createElement("button");
    deleteBtn.innerHTML ='Delete';
    deleteBtn.classList.add("trash");
    stuDiv.appendChild(deleteBtn);
    stuDetails.appendChild(stuDiv);

    // initializing the values of inputs to null after adding to records
    stuName.value='';
    stuId.value='';
    stuEmail.value='';
    stuContact.value='';
    
    // creating delete function to erase the record of student
    stuDetails.addEventListener("click",deleteItem);
    function deleteItem(e){
        const  dlt = e.target;
        if (dlt.classList[0] === "trash") {
            const   parent= dlt.parentElement;
            parent.remove();
        }
    }
    // creating edit function to edit the record of student
    stuDetails.addEventListener("click", editItem);
    
    function editItem(e){
        const  rst = e.target;
           if (rst.parentElement.parentElement.querySelector("div")) {
            stuDetails.value = rst.parentElement.parentElement.querySelector("div").innerHTML;
    
        }
    }
}
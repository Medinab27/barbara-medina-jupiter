//Week 11: Adding a footer
const footer = document.createElement("footer"); //creates <footer> element

const body = document.querySelector('body');//refers to html element/id/class in which to add new footer
body.appendChild(footer); //adds new element "footer" to the end of the body tag as it's child

//creating content to include in the new element "footer"
const today = new Date(); //creates a variable that holds information regarding today's date
const todayFormatted = today.toLocaleDateString(); //reformats the date to month/day/year 
const thisYear = today.getFullYear();//adds current year
const copyright = document.createElement('p'); //creates a new paragraph element
copyright.innerHTML= `<strong> @${thisYear} - Created by Barbara Medina through Code the Dream.  ${todayFormatted} </strong>` //allows HTML to be added into whatever goes into paragraph "copyright"

//adds the new paragraph "copyright" to the new element "footer"
footer.appendChild(copyright);

//Week 11: Adding skills
const skills = ['Javacript','HTML','CSS', 'GitHub','Revit','BIM360','IES'];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let skill of skills){
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsList.appendChild(skillLI);
}

//Handle Message Form Submit
const messageForm = document.querySelector("[name='leave_message']")
messageForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let usersName = event.target.usersName.value;
    let usersMessage = event.target.usersMessage.value;
    let usersEmail = event.target.usersEmail.value;

    //log the information from the user inputs
    console.log("Name:", usersName);
    console.log("Message", usersMessage);
    console.log("Email:", usersEmail);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML=`<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

    //create a remove button
    const removeButton = document.createElement('button');
    removeButton.innerText='Remove';
    removeButton.type='button';

    //event listener with a click for the remove button
    removeButton.addEventListener("click",()=>{
        const entry = removeButton.parentNode;
        entry.remove();
        
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);
    
    //Resets the form after the submit button has been clicked
    messageForm.reset();
});


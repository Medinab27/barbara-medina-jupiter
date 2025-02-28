const footer = document.createElement("footer"); //creates <footer> element
const body = document.querySelector("body"); //refers to html element/id/class in which to add new footer
const copyright = document.createElement("p"); //creates a new paragraph element
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");
const messageForm = document.querySelector("[name='leave_message']");
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");
const removeButton = document.createElement("button");
const projectSection = document.querySelector("#Projects"); //refers to Projects section by id
const projectsList = projectSection.querySelector("ul"); //assigning a projectsList name to the referenced ul element

const skills = ["Javacript", "HTML", "CSS", "GitHub", "Revit", "BIM360", "IES"];

// Add footer
const addFooter = function () {
  body.appendChild(footer); //adds new element "footer" to the end of the body tag as it's child

  //creating content to include in the new element "footer"
  const today = new Date(); //creates a variable that holds information regarding today's date
  const todayFormatted = today.toLocaleDateString(); //reformats the date to month/day/year
  const thisYear = today.getFullYear(); //adds current year
  copyright.innerHTML = `@${thisYear} - Created by Barbara Medina through Code the Dream.  ${todayFormatted}`; //allows HTML to be added into whatever goes into paragraph "copyright"

  //adds the new paragraph "copyright" to the new element "footer"
  footer.appendChild(copyright);
};
addFooter();

//Week 11: Adding skills

for (let skill of skills) {
  let skillLI = document.createElement("li");
  skillLI.innerHTML = skill;
  skillsList.appendChild(skillLI);
}

//Handle Message Form Submit
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let usersName = event.target.usersName.value;
  let usersMessage = event.target.usersMessage.value;
  let usersEmail = event.target.usersEmail.value;

  //log the information from the user inputs
  console.log("Name:", usersName);
  console.log("Message", usersMessage);
  console.log("Email:", usersEmail);

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

  //create a remove button
  removeButton.innerText = "Remove";
  removeButton.type = "button";

  //event listener with a click for the remove button
  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //Resets the form after the submit button has been clicked
  messageForm.reset();
});

//fetch for populating Projects section of portfolio
fetch("https://api.github.com/users/Medinab27/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    for (let i = 0; i < repositories.length; i++) {
      const project = repositories[i].name; // assign to a variable project the name portion of the i array.
      //create an <li> element in the HTML document using DOM
      const li = document.createElement("li");
      li.innerText = project; //assign the name of the project to the li element 
      projectsList.appendChild(li); //add the li element with the project name to the HTML through the projectsList called in up above
    }
  })
  .catch((error) => {
    console.error("An error occured", error);
  });

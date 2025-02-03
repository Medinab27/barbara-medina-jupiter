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
const skills = ['Javacript','HTML','CSS', 'GitHUb','Revit','BIM360','IES'];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let skill of skills){
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsList.appendChild(skillLI);
}



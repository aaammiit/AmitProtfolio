const headingText = "Python Django Developer";
const paragraphText = "As a Python Django Developer, I build scalable web applications, handling both back-end with Django and front-end integration to deliver complete, high-performance solutions.";

let headingWords = headingText.split(" ");
let paragraphWords = paragraphText.split(" ");

let headingIndex = 0;
let paragraphIndex = 0;

function addWord(element, words, index) {
    if (index < words.length) {
        element.textContent += words[index] + " ";
        index++;
        setTimeout(function () {
            addWord(element, words, index);
        }, 200); // adjust the timing to fit your needs
    } else {
        element.textContent = element.textContent.trim(); // remove trailing space
        if (element.id === "heading") {
            setTimeout(function () {
                addWord(document.getElementById("paragraph"), paragraphWords, paragraphIndex);
            }, 300); // wait 2 seconds before starting the paragraph
        }
    }
}

addWord(document.getElementById("heading"), headingWords, headingIndex);
const skillSection = document.querySelector('.skill');
const cards = document.querySelectorAll('.card1');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        skillSection.classList.add('animated');
        cards.forEach((card) => {
            card.classList.add('animated');
        });
    } else {
        skillSection.classList.remove('animated');
        cards.forEach((card) => {
            card.classList.remove('animated');
        });
    }
}, { threshold: 0.05 }); // Trigger animation when 50% of the section is visible

observer.observe(skillSection);

// exp js

const headingText1 = "Python Django Developer, Krima Solutions (March 2024 - June 2024)";
const paragraphText1 = `Worked on projects involving Django, Python, Web Design, and Python libraries like Pandas, Openpyxl, and Tkinter. Implemented features including user authentication, email verification, and email OTP verification. Additionally, utilized version control systems like Git and GitHub to manage code repositories, ensuring efficient collaboration and versioning.`;
let headingWords1 = headingText1.split(" ");
let paragraphWords1 = paragraphText1.split(" ");
let headingIndex1 = 0;
let paragraphIndex1 = 0;

function addWord1(element, words, index) {
    if (index < words.length) {
        element.textContent += words[index] + " ";
        index++;
        setTimeout(function () {
            addWord1(element, words, index);
        }, 50); // adjust the timing to fit your needs
    } else {
        element.textContent = element.textContent.trim(); // remove trailing space
        if (element.id === "h41") {
            setTimeout(function () {
                addWord1(document.getElementById("p1"), paragraphWords1, paragraphIndex1);
            }, 200); // wait 2 seconds before starting the paragraph
        }
    }
}
addWord1(document.getElementById("h41"), headingWords1, headingIndex1);



const headingText2 = "Software Engineer (Python Developer), Neosoft Technologies Pvt. Ltd, (June 2024 - Present)";
const paragraphText2 = `working on client-side solutions by integrating Python-based backend services with front-end interfaces. Experienced in building interactive applications, automating workflows, and delivering efficient, client-focused solutions.`;
let headingWords2 = headingText2.split(" ");
let paragraphWords2 = paragraphText2.split(" ");
let headingIndex2 = 0;
let paragraphIndex2 = 0;
function addWord2(element, words, index) {
    if (index < words.length) {
        element.textContent += words[index] + " ";
        index++;
        setTimeout(function () {
            addWord2(element, words, index);
        }, 50); // adjust the timing to fit your needs
    } else {
        element.textContent = element.textContent.trim(); // remove trailing space
        if (element.id === "h42") {
            setTimeout(function () {
                addWord2(document.getElementById("p2"), paragraphWords2, paragraphIndex2);
            }, 200); // wait 2 seconds before starting the paragraph
        }
    }
}

setTimeout(function () {
    addWord2(document.getElementById("h42"), headingWords2, headingIndex2);
}, 3500); // wait 2 seconds before running addWord2


// certificate js


// Get the toggle input element
const toggleInput = document.getElementById('dark-mode-toggle');

// Add an event listener to the toggle input
toggleInput.addEventListener('change', () => {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');
});

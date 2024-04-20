const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    console.log(mySrc);
    console.log(myImage.src);

    if(mySrc === "images/black-induction.avif") {
        myImage.setAttribute("src", "images/02-electric-cooktop-stove-DT.avif");
    } else {
        myImage.setAttribute("src", "images/black-induction.avif");
    }
}

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What is your name?");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} will be a top tier front-end developer`;
}

if(!localStorage.getItem("name") === "") {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent= `${storedName} will be a top tier front-end developer`;
}

myButton.onclick = () => {
    setUserName();
}
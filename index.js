let contentTextElement = document.getElementById("textContent");
let sectionElement = document.getElementById("totalSection");
let signInButtonElement = document.getElementById("signInButton");
let inputEmailElement = document.getElementById("inputEmail");

function signIn() {
    contentTextElement.remove();
    signInButtonElement.remove();

    let signIndivElement = document.createElement("div");
    sectionElement.appendChild(signIndivElement);
    signIndivElement.classList.add("glass");

    let HeadingElement = document.createElement("h1");
    HeadingElement.textContent = "Sign In";
    HeadingElement.classList.add("jsh1");
    signIndivElement.appendChild(HeadingElement);

    let mailInputElement = document.createElement("input");
    mailInputElement.type = "text";
    mailInputElement.size = 25;
    mailInputElement.placeholder = "Email";
    mailInputElement.id = "textId";
    mailInputElement.classList.add("jsemail");
    signIndivElement.appendChild(mailInputElement);
    let breakElement = document.createElement("br");
    signIndivElement.appendChild(breakElement);

    let passwordInputElement = document.createElement("input");
    passwordInputElement.type = "password";
    passwordInputElement.size = 25;
    passwordInputElement.placeholder = "Password";
    passwordInputElement.id = "passwordId";
    passwordInputElement.classList.add("jspass");
    signIndivElement.appendChild(passwordInputElement);
    let breakE = document.createElement("br");
    signIndivElement.appendChild(breakE);


    let buttonElement = document.createElement("button");
    buttonElement.textContent = "Sign In"
    buttonElement.classList.add("jsbutton");
    signIndivElement.appendChild(buttonElement);

    let textElement = document.createElement("p");
    textElement.textContent = "Forgot password?"
    textElement.classList.add("jstext");
    signIndivElement.appendChild(textElement);

    let textuserElement = document.createElement("p");
    textuserElement.textContent = "New to Netflix?"
    textuserElement.classList.add("jstext");
    textuserElement.style.fontWeight = "bold";
    signIndivElement.appendChild(textuserElement);
};

function getStart() {
    contentTextElement.remove();
    signInButtonElement.remove();

    let signIndivElement = document.createElement("div");
    sectionElement.appendChild(signIndivElement);
    signIndivElement.classList.add("glass");

    let HeadingElement = document.createElement("h1");
    HeadingElement.textContent = "Sign In";
    HeadingElement.classList.add("jsh1");
    signIndivElement.appendChild(HeadingElement);

    let mailInputElement = document.createElement("input");
    mailInputElement.type = "text";
    mailInputElement.size = 25;
    mailInputElement.placeholder = "Email or Phone Number";
    mailInputElement.id = "textId";
    mailInputElement.value = inputEmailElement.value;
    mailInputElement.classList.add("jsemail");
    signIndivElement.appendChild(mailInputElement);
    let breakElement = document.createElement("br");
    signIndivElement.appendChild(breakElement);

    let passwordInputElement = document.createElement("input");
    passwordInputElement.type = "password";
    passwordInputElement.size = 25;
    passwordInputElement.placeholder = "Password";
    passwordInputElement.id = "passwordId";
    passwordInputElement.classList.add("jspass");
    signIndivElement.appendChild(passwordInputElement);
    let breakE = document.createElement("br");
    signIndivElement.appendChild(breakE);


    let buttonElement = document.createElement("button");
    buttonElement.textContent = "sign In"
    buttonElement.classList.add("jsbutton");
    signIndivElement.appendChild(buttonElement);
}

function getStarted() {
    if (inputEmailElement.value === "") {
        alert(
            "Enter email"
        );
    } else {
        getStart();
    }

};
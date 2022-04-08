let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e){
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    document.getElementById("paragraph").innerHTML = "Click here";

    document.getElementById("paragraph").style.backgroundColor= "#686868";

    document.getElementById("paragraph").style.color = "#ffffff";

    document.getElementById("paragraph").style.padding = "30px";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if ( a != b) {
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
        c.style.backgroundColor="#2D5D7B";
        c.style.color="white";
        c.style.padding="20px";
        c.style.textAlign="center";
    }else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.backgroundColor="#686868";
        z.style.color="white";
        z.style.padding="20px";
        z.style.textAlign="center";
        c.innerHTML = "You have tried " + counter + " times to get it right. "
        c.style.backgroundColor="#139A43";
        c.style.color="white";
        c.style.padding="20px";
        c.style.textAlign="center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "black";
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = " ";
    document.querySelector("body").style.backgroundColor = "white";

}
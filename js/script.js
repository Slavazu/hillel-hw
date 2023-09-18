'use strict';

let userName = prompt("What is your name?");
if (userName !== null && userName !== "") {
    alert("Hello, " + userName + "! How are you?");
} else {
    alert("You haven't entered your name!");
}

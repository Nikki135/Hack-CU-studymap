// console.log("uname", uname);
window.alert("IN");
const express = require("express");
const path = require("path");
const app = express();
app.get("/loggedin", (req, res) => {
    res.send("loggen In!!")
});
// function myFunction() {
//   document.getElementById("frm1").submit();
// }
function login(){
    window.alert("OKOK");
    const username = document.getElementById("uname").value;
    const password = document.getElementById("psw").value;

}
// const form = document.forms[0];

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const { uname, psw } = this.elements;
//   // or
//   // const { name, description, task } = event.target.elements;
//   console.log(uname.value, psw.value);
// });
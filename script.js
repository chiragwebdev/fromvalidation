let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let repassword = document.getElementById("repassword")

let usererror = document.getElementById("usererror")
let emailerror = document.getElementById("emailerror")
let passerror = document.getElementById("passerror")
let repasserror = document.getElementById("repasserror")

let submit = document.getElementById("submit")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let uservalue = username.value
    let emailvalue = email.value
    let passvalue = password.value
    let repassvalue = repassword.value


    let userdate = {}
    let userarr = []

    if (uservalue.trim() === "") {
        formerror(username, "Please enter the user name")
    } else if (uservalue.length < 3) {
        formerror(username, "User must be three or more characters")
    } else {
        formsucces(username)
        userdate.username = uservalue;
    }

    if (emailvalue.trim() === "") {
        formerror(email, "Please enter the valid email")
    } else {
        formsucces(email)
        userdate.email = emailvalue
    }

    if (passvalue.trim() === "") {
        formerror(password, "Plase enter the password")
    } else if (passvalue.length < 6) {
        formerror(password, "Passwords must be six or more characters")
    } else {
        formsucces(password)
        userdate.password = passvalue
    }

    if (repassvalue.trim() === "" || repassvalue !== passvalue) {
        formerror(repassword, "Please enter the confirm password")
    } else {
        formsucces(repassword)
        userdate.repassword = repassvalue
    }


    if (Object.keys(userdate).length === 4) {
        alert("Your Form Submite")
        username.value = "";
        email.value = "";
        password.value = "";
        repassword.value = "";
        // console.log(userdate)
        userarr.push(userdate)
        console.log(userarr)
        window.location.href = "./index.html"
    }

})


formerror = (idname, err) => {
    let ptag = idname.parentElement.querySelector('p')
    ptag.innerHTML = err
    idname.classList.replace("border-slate-800", "border-red-600")
}

formsucces = (idname) => {
    let ptag = idname.parentElement.querySelector('p')
    ptag.innerHTML = ""
    idname.classList.replace("border-red-600", "border-slate-800")
}





let signinformbtn = document.getElementById("signinformbtn")
let loginformbtn = document.getElementById("loginformbtn")
let mainform = document.getElementById("mainform")


signinformbtn.addEventListener("click", () => {
    mainform.classList.remove("formtodata")
    signinformbtn.classList.replace("bg-slate-800", "bg-green-500")
    loginformbtn.classList.replace("bg-green-500", "bg-slate-800")
})

loginformbtn.addEventListener("click", () => {
    mainform.classList.add("formtodata")
    loginformbtn.classList.replace("bg-slate-800", "bg-green-500")
    signinformbtn.classList.replace("bg-green-500", "bg-slate-800")
})
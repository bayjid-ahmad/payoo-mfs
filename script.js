let mainAmount = document.getElementById("amount")
let numberInput = document.getElementById("loginPageNumberInput")
let pinInput = document.getElementById("loginPagePinInput")
let cashInButton = document.getElementById("cashinButton")
let cashOutButton = document.getElementById("cashoutButton")
let cashOutSection = document.getElementById("cashoutContainer")
let cashInSection = document.getElementById("cashinContainer")
let cashOut = document.getElementById("cashoutButtonConfirm")
let cashInAmount = document.getElementById("cashInAmountInput")
let cashOutAmount = document.getElementById("cashOutAmountInput")
let pinInput2 = document.getElementById("cashInPinInput")
let pinInput3 = document.getElementById("cashOutPinInput")
// ! function for homepage login button
function homePageLogin(event){
    event.preventDefault()
    let mobileNumber = numberInput.value
    let pin = Number(pinInput.value)
    if(mobileNumber === "01761964262" && pin === 1234){
         window.location.assign("./homePage.html");
         numberInput.value = ""
         pinInput.value = ""
    }
    else{
        alert("wrong pin or number")
        numberInput.value = ""
         pinInput.value = ""
    }
} 
// !function for cash out / in Button selection
 function buttonCashOut(){
    console.log("cash out button clicked")
    cashOutSection.classList.remove("hidden")
    cashInSection.classList.add("hidden")
    cashOutButton.classList.add("bg-red-400")
     cashInButton.classList.remove("bg-green-400")


}
 function buttonCashIn(){
    console.log("cash In button clicked")
    cashInSection.classList.remove("hidden")
    cashOutSection.classList.add("hidden")
    cashInButton.classList.add("bg-green-400")
    cashOutButton.classList.remove("bg-red-400")
}
//! function for cash in amount 
function cashInConfirm(){
    let amount = parseFloat(mainAmount.innerText)
    let pinNumber1 = parseInt(pinInput2.value)
    let cashInAmountNumber = Number(cashInAmount.value);
    let newAmount = amount + cashInAmountNumber
    console.log(amount, pinNumber1, cashInAmountNumber, newAmount)
    if(pinNumber1 ==1234){
        mainAmount.innerText = newAmount
        console.log(amount, pinNumber1, cashInAmountNumber, newAmount , "hello")
        cashInAmount.value = ""
        pinInput2.value = ""
        alert("Congratulations money has Cash inned" )
    }
    else{
         cashInAmount.value = ""
        pinInput2.value = ""
        alert("wrong pin")
    }
}
//! function for cash Out

if (cashOut) {
    cashOut.addEventListener("click" , function(){
      let amount = parseFloat(mainAmount.innerText)
    let pinNumber1 = parseInt(pinInput3.value)
    let cashOutAmountNumber = Number(cashOutAmount.value);
    let newAmount = amount - cashOutAmountNumber
    console.log(amount, pinNumber1, cashOutAmountNumber, newAmount)
     if(pinNumber1 ==1234){
        mainAmount.innerText = newAmount
        console.log(amount, pinNumber1, cashOutAmountNumber, newAmount , "hello")
        cashOutAmount.value = ""
        pinInput3.value = ""
        alert("Congratulations money has Cash outed" )
    }
    else{
         cashOutAmount.value = ""
        pinInput3.value = ""
        alert("wrong pin")
    }
    })
}
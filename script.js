const bod = document.getElementById("inputd");
const button = document.getElementById("but");
const out = document.getElementById("output");

button.addEventListener("click" , (e) => {
    if(bod.value == ""){
        alert("Please enter your date of birth");
    }
    else {
        const nbod = new Date(bod.value);
        const cdate = new Date();
        const yernbod = nbod.getFullYear();
        const yercdate = cdate.getFullYear();
        const ans = yercdate - yernbod;
        out.innerHTML = 'youre age is '+ans ;
    }
});
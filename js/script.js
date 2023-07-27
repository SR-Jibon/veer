alert("Do you want to open this file?");

var name = prompt("Please Enter Your Name :");

console.log(name);


window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block"
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


document.querySelector("#popup_btn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
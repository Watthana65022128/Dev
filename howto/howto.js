const show = document.getElementsByClassName("con-head")
const magin = document.getElementsByClassName(" " );


a = function(){
    for(let i = 0; i===show ;i++){
        
    }
}


for ( let i = 0 ; i < show.length ; i++) {
 show[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let text = this.nextElementSibling;
    if (text.style.display === "block") {
        text.style.display = "none";
        
        
    } else {
        text.style.display = "block"
        
    }
 });
}





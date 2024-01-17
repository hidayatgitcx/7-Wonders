document.getElementById("imgSlide").addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
    $(".forFade").slideUp(function(){
        document.getElementById("mainImg").setAttribute("src", e.target.getAttribute("src"));
        $(".forFade").slideDown();
    });
    document.getElementById("imgText").innerHTML = e.target.getAttribute("data-text");
    document.querySelectorAll("#imgSlide img").forEach(element => {
        element.classList.remove("selected");
    });
    e.target.classList.add("selected");
}
});
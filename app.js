(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click",function() {
        document.body.classList.toggle("light-mode");

    })

    document.querySelector(".theme-btn").addEventListener("click",function() {
        if(document.body.classList.contains("light-mode"))
        {
            document.getElementById("black-dashboard").style.display="none";
            document.getElementById("white-dashboard").style.display="block";
        }
        else
        {
            document.getElementById("black-dashboard").style.display="block";
            document.getElementById("white-dashboard").style.display="none";   
        }

    })

    document.querySelectorAll('.accordian__button').forEach(button =>{
        button.addEventListener('click',()=>{
            const accordianContent = button.nextElementSibling;
            button.classList.toggle('accordian__button--active');

            if(button.classList.contains('accordian__button--active')){
                accordianContent.style.maxHeight=accordianContent.scrollHeight + 'px';
            }
            else{
                accordianContent.style.maxHeight=0;
            }
        })
    })

    
})();

const stars = document.querySelectorAll(".stars i");
countstar = document.querySelector(".count_star")

stars.forEach((star, index1) => {
    star.addEventListener("mouseover", () => {
        stars.forEach((star, index2) => {
            if(star.parentNode.classList == 'stars'){
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
            }else{
                star.removeEventListener("mouseover", ()=>{}, false)
            }
        });
    });

    star.addEventListener("click" , () => {
        star.parentNode.classList.remove("stars")
        star.parentNode.classList.add("stars-selected")
    })
});

var viagensCount = document.querySelector(".viagens_count")
viagensCount.textContent = document.querySelectorAll(".gd_viagens-item").length + " Viagens"


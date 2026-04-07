const stars = document.querySelectorAll(".stars i");


stars.forEach((star,index1) => {

    star.addEventListener("click",function(e){
        e.preventDefault();
        console.log(index1);
        

        // ADD FOREACH - LOOP AGAIN --->
        stars.forEach((star,index2) => {
            console.log(index2)

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    })

})





























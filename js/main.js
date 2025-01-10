//get all html element

const counter = document.getElementById("counter");
const btn = document.querySelectorAll(".btn");
let count=0;
btn.forEach((btn) => {
    btn.addEventListener('click', (eachBtn) => {
        let className = eachBtn.target.className;
        let classArr = className.split(" ");
        let exactClassName = classArr[classArr.length - 1];



        
        // if(exactClassName == "increase"){
        //     count++;
        // }
        // else if(exactClassName == "decrease"){
        //     count --;
        // }
        // else{
        //     count= 0;
           
        // }

    

        // counter.innerHTML =count;
        

        if(className.includes("increase")){
            count ++;
        }

        else if(className.includes("decrease")){
            count --;
        }
        else{
            count = 0;
        }

        counter.innerHTML =count;




    })

});




//Timer which run for 30 sec than stop autometically

// let count =0;

// let interval=setInterval(()=>{
//     counter.innerHTML =count++;

//     if(count>30){
//         clearInterval(interval);
//     }

// },500)




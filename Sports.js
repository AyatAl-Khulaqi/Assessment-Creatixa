window.onload = sendAPIRequest;

// an asynchronus function to fetch data from the API
async function sendAPIRequest(){
    
    let response = await fetch (`https://opentdb.com/api.php?amount=20&category=21&difficulty=medium&type=multiple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    UseAPIData(data)
}


function UseAPIData(data){
    
    document.querySelector("#category").innerHTML = `Category : ${data.results[0].category}`
    document.querySelector("#difficulty").innerHTML =` Difficulty : ${data.results[0].difficulty}`
    document.querySelector("#question").innerHTML = `Question : ${data.results[0].question}`
    document.querySelector("#option1").innerHTML = data.results[0].correct_answer
    document.querySelector("#option2").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#option3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#option4").innerHTML = data.results[0].incorrect_answers[2]
        
   

}

let  Correctanswer = document.querySelector("#option1");

Correctanswer.addEventListener("click",()=>{
    
    alert("Correct Answer")
    sendAPIRequest()
})


const setOWords = [
    "My name is Sahinur Islam and I am a web developer",
    "Hope you are a having this is a simple game you can make",
    "If you want the source code then i will put it to the github"
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime , endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOWords.length);
    msg.innerText = setOWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = " You typed total at " +speed+ " words per minutes. ";

    finalMsg += compareWords(msg.innerText,totalStr);

    msg.innerText = finalMsg; 
}
const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}
const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 1;
//   arrayName then foreach then it will take whole function with 
//   value and index no. of that array.
    words1.forEach(function (item, index){
        if (item == words2[index]){
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words the total number of error are "+ errorWords + ".");
}

// const wordCounter = (str) => {
//     let response = str.split(" ").length;
//     console.log(response);
//     return response;
// }


btn.addEventListener("click", function(){
    if(this.innerText == "Start"){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
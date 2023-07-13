const rollButtonEl = document.getElementById("roll-button");
const dicePicEl = document.getElementById("dice-pic");
const resultsEl = document.querySelector(".results");

let rollNumber = 0;

rollButtonEl.addEventListener("click", () =>{
    let randomDice = Math.floor(Math.random() * 6 + 1);
    changeImage(randomDice);
    rollNumber ++;
    dicePicEl.classList.add("roll-animation");
    setTimeout(() => {
        dicePicEl.classList.remove("roll-animation");
    }, 1000);
    let results = document.createElement("div");
    results.innerHTML = `
    <div class="result">
            <p>Roll ${rollNumber}:</p>
             <img src="./Images/dice_face_${randomDice}.png" alt="" class="result-image">
    </div>`;
    resultsEl.appendChild(results);
});

function changeImage(randomDice){
   dicePicEl.src = `./Images/dice_face_${randomDice}.png`;
}
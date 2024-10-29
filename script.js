let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector(".rbtn");
let newgamebtn = document.querySelector(".nbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true; //playerX , playerO
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    TurnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true ;
        count++;
        
        let isWinner = checkwinner();

         if (count === 9 && !isWinner) {
             gameDraw();
         }
    });


});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true ;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false ;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
    
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != "") {
        if(pos1val === pos2val && pos2val === pos3val){
            // console.log("winner" , pos1val);
            
            showwinner(pos1val);
        }
    }
    }
};


newgamebtn.addEventListener("click",resetgame) ;
rbtn.addEventListener("click",resetgame) ;

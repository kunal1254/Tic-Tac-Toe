let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgcontainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");

let turnK=true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnK = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnK){
            box.innerText = "K";
            turnK=false;
        }else{
            box.innerText = "S";
            turnK= true;
        
        }
       box.disabled = true;
       checkWinner ();
    });
    
});

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern) {
              let pos1Val = boxes[pattern[0]].innerText;
              let pos2Val = boxes[pattern[1]].innerText;
              let pos3Val =boxes[pattern[2]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos1Val != ""){
                if( pos1Val === pos2Val && pos2Val===pos3Val){
                    showWinner(pos1Val);
                }
            }
        
        
    }
}

resetBtn.addEventListener("click", resetGame);

newBtn.addEventListener("click", resetGame);

  


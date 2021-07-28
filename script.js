const diceButton = document.getElementsByClassName('roll_button');
const dieResult = document.getElementsByClassName('die_result');
const markerA1 = document.querySelector('#A1_div');
const markerA2 = document.querySelector('#A2_div');
const markerB1 = document.querySelector('#B1_div');
const markerB2 = document.querySelector('#B2_div');

//id of 28 boxes//
const cell_1 =document.querySelector('#cell_1');
const cell_2 =document.querySelector('#cell_2');
const cell_3 =document.querySelector('#cell_3');
const cell_4 =document.querySelector('#cell_4');
const cell_5 =document.querySelector('#cell_5');
const cell_6 =document.querySelector('#cell_6');
const cell_7 =document.querySelector('#cell_7');
const cell_8 =document.querySelector('#cell_8');
const cell_9 =document.querySelector('#cell_9');
const cell_10 =document.querySelector('#cell_10');
const cell_11 =document.querySelector('#cell_11');
const cell_12 =document.querySelector('#cell_12');
const cell_13 =document.querySelector('#cell_13');
const cell_14 =document.querySelector('#cell_14');
const cell_15 =document.querySelector('#cell_15');
const cell_16 =document.querySelector('#cell_16');
const cell_17 =document.querySelector('#cell_17');
const cell_18 =document.querySelector('#cell_18');
const cell_19 =document.querySelector('#cell_19');
const cell_20 =document.querySelector('#cell_20');
const cell_21 =document.querySelector('#cell_21');
const cell_22 =document.querySelector('#cell_22');
const cell_23 =document.querySelector('#cell_23');
const cell_24 =document.querySelector('#cell_24');
const cell_25 =document.querySelector('#cell_25');
const cell_26 =document.querySelector('#cell_26');
const cell_27 =document.querySelector('#cell_27');
const cell_28 =document.querySelector('#cell_28');


//random die number generator//
const getRndInteger = () => {
    dieResult.innerHTML = "Math.floor(Math.random() * (6 - 1 + 1)) + 1";
    return dieResult;
};

console.log(getRndInteger);

// diceButton.onclick = getRndInteger();
// diceButton.addEventListener('click', getRndInteger); //the button is not working for now//

function return_div_id(){
  // alert('e.target.id');
  return this.target.id;
};

cell_1.onclick = return_div_id();
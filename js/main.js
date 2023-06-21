/*
1. susirasti tevini elementa (.calc)
2. sugeneruoti visa HTML
3. istatyti i tevini elementa
4. susirasti visus mygtukus (.key)
5. mygtukams uzdeti event listener'ius
*/

/*

const calc = documnent.querySelector ('.calc');

calc.innerHTML 
`<div class="calc">`;  // tevas

`<div class="screen">`
`<div class="equation"></div>`
`<div class="result">0</div>`

`<div class="keyboard">` // tevas

`<div class="key">C</div>`
`<div class="key">/</div>`
`<div class="key">*</div>`
`<div class="key">7</div>`
`<div class="key">8</div>`
`<div class="key">9</div>`
`<div class="key">4</div>`
`<div class="key">5</div>`
`<div class="key">6</div>`
`<div class="key">1</div>`
`<div class="key">2</div>`
`<div class="key">3</div>`
`<div class="key">.</div>`
`<div class="key">0</div>`
`<div class="key">%</div>`

//Special keys
`<div class="key color">&lt;=</div>`
`<div class="key color">+</div>`
`<div class="key color height-2">=</div>`



*/

// const equationDOM = document.querySelector('.equation');
// const buttonsDOM = document.querySelectorAll('.key');

// for (const buttonDOM of buttonsDOM) {    // button of buttons ...!
//     buttonDOM.addEventListener('click', () => {
//         const buttonValue = buttonDOM.innerText;
//         const currentEquationValue = equationDOM.innerText;
//         let updateEquationValue = currentEquationValue;

//         switch (buttonValue) {
//             case 'C':
//                 updateEquationValue = '';
//                 break;

//             case '<=':
//                 updateEquationValue = currentEquationValue.slice(0, -1);
//                 break;

//             default:
//                 updateEquationValue += buttonValue;
//                 break;
//         }

//         equationDOM.innerText = updateEquationValue;
//     });
// }

/*
const equationDOM = document.querySelector('.equation');
const buttonsDOM = document.querySelectorAll('.key');

for (const buttonDOM of buttonsDOM) {
    buttonDOM.addEventListener('click', () => {
        const buttonValue = buttonDOM.innerText;
        const currentEquationValue = equationDOM.innerText;
        let updateEquationValue = '';

        if (buttonValue === 'C') {
            updateEquationValue = '';
        } else if { (buttonValue === '<=':
                updateEquationValue = currentEquationValue.slice(0, -1);
        } else {
                 updateEquationValue += buttonValue;
        }

        equationDOM.innerText = updateEquationValue;
    });
}
*/
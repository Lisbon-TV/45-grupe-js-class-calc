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




 `<div class="calc">
        <div class="screen">
            <div class="equation"></div>
            <div class="result">0</div>
        </div>'

`        <div class="keyboard">
            <div class="key">C</div>
            <div class="key">/</div>
            <div class="key">*</div>
            <div class="key color">&lt;=</div>

            <div class="key">7</div>
            <div class="key">8</div>
            <div class="key">9</div>
            <div class="key color">-</div>

            <div class="key">4</div>
            <div class="key">5</div>
            <div class="key">6</div>
            <div class="key color">+</div>

            <div class="key">1</div>
            <div class="key">2</div>
            <div class="key">3</div>
            <div class="key color height-2">=</div>

            <div class="key">.</div>
            <div class="key">0</div>
            <div class="key">%</div>
        </div>`

Vaido: 
let formDOM = document.querySelector("form");
let numberDOM = formDOM.querySelector("div");
let b1DOM = formDOM.querySelector("button");
let b2DOM = formDOM.querySelector("button:nth-child(3)");
let b3DOM = formDOM.querySelector("button:nth-child(4)");
let b4DOM = formDOM.querySelector("button:nth-child(5)");
let b5DOM = formDOM.querySelector("button:nth-child(6)");
let b6DOM = formDOM.querySelector("button:nth-child(7)");
let b7DOM = formDOM.querySelector("button:nth-child(8)");
let b8DOM = formDOM.querySelector("button:nth-child(9)");
let b9DOM = formDOM.querySelector("button:nth-child(10)");
let b10DOM = formDOM.querySelector("button:nth-child(11)");
let b11DOM = formDOM.querySelector("button:nth-child(12)");
let b12DOM = formDOM.querySelector("button:nth-child(13)");
let b13DOM = formDOM.querySelector("button:nth-child(14)");
let b14DOM = formDOM.querySelector("button:nth-child(15)");
let b15DOM = formDOM.querySelector("button:nth-child(16)");
let b16DOM = formDOM.querySelector("button:nth-child(17)");
let b17DOM = formDOM.querySelector("button:nth-child(18)");

let counter = 0;
let counterP = 0;
let counterM = 0;
let counterDG = 0;
let counterDL = 0;
let counterS = 0;
let counterB = 0;
let counterC = 0;

pasiziureti Vaido koda!
*/




const equationDOM = document.querySelector('.equation');
const buttonsDOM = document.querySelectorAll('.key');

for (const buttonDOM of buttonsDOM) {    // button of buttons ...!
    buttonDOM.addEventListener('click', () => {
        const buttonValue = buttonDOM.innerText;
        const currentEquationValue = equationDOM.innerText;
        let updateEquationValue = currentEquationValue;

        switch (buttonValue) {
            case 'C':
                updateEquationValue = '';
                break;

            case '<=':
                updateEquationValue = currentEquationValue.slice(0, -1);
                break;
            case '=':
                break;  // kol kas nieko nedarome! Algoritmai..
            case '.':
                if (currentEquationValue.includes('.')) {
                    break;
                } else {
                    updateEquationValue += buttonValue; 
                }
            case '+':
            case '-':
            case '*':
            case '%':
            case '/':
                if (updateEquationValue === buttonValue ||
                    updateEquationValue === '+' ||
                    updateEquationValue === '-' ||
                    updateEquationValue === '*' ||
                    updateEquationValue === '%' ||
                    updateEquationValue === '/'
                    ) {
                        break;
                    } else {
                        updateEquationValue += buttonValue; 
                    }
            default:
                updateEquationValue += buttonValue;
                break;
        }

        equationDOM.innerText = updateEquationValue;
    });
}

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
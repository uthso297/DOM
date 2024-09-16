const bandLI = document.getElementById('band');
// console.log(bandLI);
const li = document.createElement('li');
li.innerText = 'Bhober pagol';
bandLI.appendChild(li);
const mainContainer = document.getElementById('main-content');
const section2 = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Food list';
section2.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
const li2 = document.createElement('li');
li2.innerText = 'Biriyani';
const li3 = document.createElement('li');
li3.innerText = 'Biriyani';



ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


section2.appendChild(ul);

mainContainer.appendChild(section2);


// section using innerHTML

const section3 = document.createElement('section');
section3.innerHTML = `

    	<h1>My Awesome DOM de Baba</h1>
            <ul>
                <li>Jalali Set</li>
                <li>Shafayet</li>
                <li>Bonobash</li>
            </ul>

`
mainContainer.appendChild(section3);
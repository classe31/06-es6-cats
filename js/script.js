// Definire un array di oggetti; ogni oggetto rappresenta un 
// gatto, che è caratterizzato da: nome, età, colore e sesso.

// Tramite la funzione .forEach(), stampare in pagina 
// tutti i gattini, ciascuno con il proprio colore e il 
// proprio nome.

//abbiamo dei gattini 
const cats = [{
    name: 'Adam',
    age: 0.3,
    color: '#00ffff',
    gender: 'male'
  },
  {
    name: 'Emily',
    age: 0.8,
    color: '#f700ff',
    gender: 'female'
  },
  {
    name: 'Willoby',
    age: 1.3,
    color: '#ff6600',
    gender: 'male'
  },
  {
    name: 'Poppy',
    age : 0.2,
    color: '#00ff00',
    gender: 'female',
  },
];

const milestone1Ul = document.getElementById('milestone1-cats-list');

cats.forEach( (element) => {
  const newLiCat = `
    <li>
      <i class="fas fa-cat" style="color: ${element.color};"></i>
      ${element.name}
    </li>
  `;

  milestone1Ul.innerHTML += newLiCat;
} );

// Dividere i gatti in due contenitori distinti in base 
// al sesso e aggiungere a fianco di ogni gattino un fiocco 
// colorato di rosa, se femmina, o di blu, se maschio. 
// Il colore del fiocco deve essere più tenue se il gatto è più 
// giovane, più scuro se il gatto è più vecchio.

/* <li>
  <i class="fas fa-cat" style="color: red"></i>
  <i class="fas fa-ribbon" style="color:blue;opacity: 20%;"></i>
  Alessandro
</li> */

// Ho bisogno:
// colore fiocco in base al sesso
// percentuale di opacità
const catsWithRibbon = cats.map( (element, index, array) => {
  // let ribbonColour;
  // if(element.gender == 'female') {
  //   ribbonColour = 'pink';
  // } else {
  //   ribbonColour = 'blue';
  // }
  let ribbonColour = ( element.gender == 'female' ) ? 'pink' : 'blue';
  let ribbonOpacity = element.age * 100;
  
  // const {name, age, color, gender} = element;
  const newCat = {
    // name,
    // age,
    // color,
    // gender,
    ...element,
    ribbon: {
      color: ribbonColour,
      opacity: ribbonOpacity
    }
  };

  return newCat;
});

const femaleCats = catsWithRibbon.filter( (element, index, array) => {
  return element.gender == 'female';
} );

const maleCats = catsWithRibbon.filter( (element, index, array) => {
  return element.gender == 'male';
} );

// Stampo le gattine e i gattini
const femaleCatsContainer = document.getElementById('milestone-2-female');
const maleCatsContainer = document.getElementById('milestone-2-male');

femaleCats.forEach( (element) => {
    const catTemplate = `
    <li>
        <i class="fas fa-cat" style="color: ${element.color}"></i>
        <i class="fas fa-ribbon" style="color:${element.ribbon.color};opacity: ${element.ribbon.opacity}%;"></i>
        ${element.name}
    </li>
    `;

    femaleCatsContainer.innerHTML += catTemplate;
} );

maleCats.forEach( (element) => {
    const catTemplate = `
    <li>
        <i class="fas fa-cat" style="color: ${element.color}"></i>
        <i class="fas fa-ribbon" style="color:${element.ribbon.color};opacity: ${element.ribbon.opacity}%;"></i>
        ${element.name}
    </li>
    `;

    maleCatsContainer.innerHTML += catTemplate;
} );

// Creo nuovo array con gli elementi di entrambi gli array precedenti

const orderedCats = [...femaleCats, ...maleCats];

// Stampiamo tutti i gattini del nuovo array
const orderedCatsContainer = document.getElementById("milestone3-cats-list");

orderedCats.forEach( (element) => {
    const catTemplate = `
    <li>
        <i class="fas fa-cat" style="color: ${element.color}"></i>
        <i class="fas fa-ribbon" style="color:${element.ribbon.color};opacity: ${element.ribbon.opacity}%;"></i>
        ${element.name}
    </li>
    `;

    orderedCatsContainer.innerHTML += catTemplate;
} );


// Creo nuovo array con elementi che siano oggetti con solo le proprietà ribbon e nome
const catsTarget = orderedCats.map( (element) => {
    const { ribbon, name } = element;

    return { ribbon, name };
} );

console.log(orderedCats);
console.log(catsTarget);
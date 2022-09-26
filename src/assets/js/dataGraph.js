let datapoints = [10, 20, 30, 10, 20, 30, 10, 20, 30, 100, 200, 800, 200];
// <block:setup:1>
// let datapoints = [1200, 750, 775, 760, 2560];,
const DATA_COUNT = datapoints.length;
const labels = [];
for (let i = 0; i < DATA_COUNT; i++) {
  labels.push(i.toString());
}
const data = {
  labels: labels,
  datasets: [
    {
      label: "Compte",
      data: datapoints,
      borderColor: "purple",
      fill: true,
      cubicInterpolationMode: "monotone",
    },
  ],
};
// </block:setup>
// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
        //     text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};
console.log(config);
/*Le contexte du canevas HTML */
context = document.getElementById("myChart").getContext("2d");
console.log(context);
/* Création du graphique */
chart = new Chart(context, config);
console.log(chart);
/* Générer des données aléatoires */
// function generateData() {
//   randomTemperature = (Math.random() * Math.floor(50)).toFixed(2); // Deux chiffres après la virgule
//   addTemperature(new Date().toLocaleTimeString(), randomTemperature);
// }
// time
//temparature le montant  rajouter
function addTemperature(time, temperature) {
  /* Ajoute la valeur en X */
  config.data.labels.push(time);
  console.log(temperature);
  /* Ajoute la valeur */
  config.data.datasets[0].data.push(temperature);
  console.log(temperature);
  /* Rafraichir le graphique */
  chart.update();
}
addTemperature();
// mon code :
let ajout = document.querySelector(".btSubmit");
ajout.addEventListener("click", (e) => {
  e.preventDefault();
  let grid = document.getElementById("TrueContainer");
  let montantAjout = document.getElementById("montant");
  let titreAjout = document.getElementById("titre");
  let descAjout = document.getElementById("desc");
  let ValuemontantAjout = montantAjout.value;
  let ValuetitreAjout = titreAjout.value;
  let ValuedescAjout = descAjout.value;
  let ChoixPlusMoins = document.getElementById("operator");
  let ChoixPlusMoinsValue;
  ChoixPlusMoinsValue = ChoixPlusMoins.value;
  console.log(ChoixPlusMoinsValue);
  if (ChoixPlusMoinsValue == "credit") {
    grid.innerHTML += `<div class="operation credit">
       <div class="grid-x grid-padding-x align-middle">
         <div class="cell shrink">
           <div class="picto">
             <img src="./assets/images/sac-dargent.png" alt="credit" />
           </div>
         </div>
         <div class="cell auto">
           <div>
           <h2>${ValuetitreAjout}</h2>
           <small>${ValuedescAjout}</small>
           </div>
         </div>
         <div class="cell small-3 text-right">
           <div>
           <p class="count">${ValuemontantAjout}€</p>
             <small>100%</small>
           </div>
         </div>
       </div>`;
  } else {
    grid.innerHTML += `<div class="operation debit">
          <div class="grid-x grid-padding-x align-middle">
            <div class="cell shrink">
              <div class="picto">
                <img src="./assets/images/depenses.png" alt="debit" />
              </div>
            </div>
            <div class="cell auto">
              <div>
                <h2>${ValuetitreAjout}</h2>
                <small>${ValuedescAjout}</small>
              </div>
            </div>
            <div class="cell small-3 text-right">
              <div>
                <p class="count">${ValuemontantAjout}€</p>
                <small>37.5%</small>
              </div>
            </div>
          </div>
        </div>`;
  }
});

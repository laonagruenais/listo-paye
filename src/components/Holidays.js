import React, { useState } from 'react' ;
// Installation dépendance npm 
import DateRangePicker from '@wojtekmaj/react-daterange-picker' ;

// Fonction afin de pouvoir sélectionner une période de vacances
function Holidays() {
  const [value, onChange] = useState([new Date(), new Date()]) ;
// .toLocaleDateString() pour que la date soit en format 11.10.2020 et plus en chaîne de caractère (Fri Oct 2020)
// console.log(value[0].toLocaleDateString());
// console.log(value[1].toLocaleDateString());

// Tableau avec les mois pour ne pas afficher que les chiffres des mois
const month = [];
month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Aout";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";

// Pour afficher le premier et le dernier jour de vacances en milisecondes (plus facile pour calculer)
var startHolidays = value[0].getTime() ; 
var endHolidays = value[1].getTime() ;

// let month = startHolidays[3] + startHolidays[4]; // Pour récupérer le mois
let startMonth = value[0].getMonth(); // Pour récupérer le mois de départ
let endMonth = value[1].getMonth(); // Pour récupérer le mois de fin
// console.log(startHolidays);

let startDate = value[0].getDate(); // Pour récupérer le premier jour de vacances
// console.log(startDate);

let startYear = value[0].getFullYear(); // Pour récupérer l'année 

const diffTime = endHolidays - startHolidays // Pour connaître le nombre de jour de vacances en miliseconde
const totalHolidays = Math.round(diffTime / (1000 * 60 * 60 * 24)); // Pour passer les milisecondes en jours
 
// Pour connaître le dernier jour du mois
let lastDayOfMonth = function (year, month) {
  return new Date(year, month + 1, 0).getDate(); // recupère le dernier jour du mois
}

const daysToEndMonth = lastDayOfMonth(startYear, startMonth) - startDate; // pour récupérer le nombre de jour du vacances du mois d'octobre
const daysOfNextMonth = totalHolidays - daysToEndMonth; // pour récupérer le nombre de jour de vacances du mois suivant (novembre)
// console.log(daysToEndMonth, daysOfNextMonth);

return (
    <div>
        <h1> Déclarer une période de congés </h1>
      <DateRangePicker
        onChange={onChange}
        value={value}
        />

        {startMonth !== endMonth ? (
          <div>
          <h2>
            La période de congés s'étale sur plusieurs mois
            {month[startMonth]} et {month[endMonth]}
          </h2>
          <p>Début des vacances : {value[0].toLocaleDateString()}</p>
          <p>Fin des vacances : {value[1].toLocaleDateString()}</p>
          <p>Total des jours de congés : {totalHolidays}</p>
          <p>
            Nombre de jours de congés pour le mois {month[startMonth]} {daysToEndMonth}
          </p>
          <p>
            Nombre de jours de congés pour le mois suivant {month[endMonth]} {daysOfNextMonth}
          </p>
          </div>
        ) : (
          <div>
          <h2>
            La période de congés est seulement pour le mois de {month[startMonth]}
          </h2>
          <p>Début des vacances : {value[0].toLocaleDateString()}</p>
          <p>Fin des vacances : {value[1].toLocaleDateString()}</p>
          <p>Total des jours de congés : {totalHolidays}</p>
          </div>
        )}
    </div>
  ) ;
}

export default Holidays ;

// PROBLÈME
// Pour le nombre de jour de congés du mois d'Octobre il me comptabilise que jusqu'au 30 oct
// Le 31 oct compte comme le premier jour de novembre
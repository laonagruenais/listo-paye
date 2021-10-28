import React, { useState } from 'react' ;
// Installation dépendance npm 
import DateRangePicker from '@wojtekmaj/react-daterange-picker' ;

// Fonction afin de pouvoir sélectionner une période de vacances
function Holidays() {
  const [value, onChange] = useState([new Date(), new Date()]) ;
// .toLocaleDateString() pour que la date soit en format 11.10.2020 et plus en chaîne de caractère (Fri Oct 2020)
// console.log(value[0].toLocaleDateString());
// console.log(value[1].toLocaleDateString());

var startHolidays = value[0].toLocaleDateString() ; 
var endHolidays = value[1].toLocaleDateString() ;

let month = startHolidays[3] + startHolidays[4]; // Pour récupérer le mois

// La personne est en vacances la dernière semaine d'octobre et la première semaine de novembre
var d = new Date(2021, month, 0); // pour renvoyer le dernier jour du mois par rapport à la date de début des vacances
console.log(d.toString()); 

// Pour dire que les vacances sont dans le moins d'octobre
// Pas trouver comment vérifier si les vacances dépassent le mois d'octobre
if (startHolidays < month) {
console.log("yes");
} else {
    console.log("no");
}

  return (
    <div>
        <h1> Déclarer une période de congés </h1>
        <p>{startHolidays}</p>
        <p>{endHolidays}</p>
      <DateRangePicker
        onChange={onChange}
        value={value}
      />
    </div>
  ) ;
}

export default Holidays ;
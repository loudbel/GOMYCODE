const r1 = 0.7, r2 = 0.4, r3 = 0.2;
const p_d = 100;
const ins = 0.3;
const vat = 0.18;
var totalDist = 0, totalDays = 0;

function perDistance(km,days){
  /* start -- calsulate by displance */
    //calculer r1
    if(km <= 100){ totalDist += km * r1; }
    //calculer r2
    if(km > 100 && km <= 1000){ totalDist += km-100 * r2; }
    //calculer r3
    if(km > 1000){ totalDist += km * r1; }
    //apply ins
    totalDist += ins * days;
    //apply vat
    totalDist +=  totalDist * vat;
return((Math.round(totalDist * 100) / 100).toFixed(2));
} 

function perDays(km,days){
  /* start -- calsulate by displance */
    //calculer jours
    totalDays += days * p_d;
    //apply ins
    totalDays += ins * days;
    //apply vat
    totalDays +=  totalDist * vat;
    return((Math.round(totalDays * 100) / 100).toFixed(2));
} 

function rental(km,days){
  return ` Par Distance : ${perDistance(km,days)} \n Par Distance : ${perDistance(km,days)} `;
} 

console.log(rental(100,2));
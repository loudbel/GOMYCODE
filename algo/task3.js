const monthNames = ["months","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var date = 181019;

function convertDate(date){
let day = String(date).slice(0, 2); 
let month = String(date).slice(2, 4);
let year = String(date).slice(4, 6); 

var res = "Day : " + day + '\n';
res += "Month : " + monthNames[month] + '\n';
res += "Year : " + year + '\n';
  return res;
}

//document.write("Year : " + year + '<br>');

console.log(convertDate(date));

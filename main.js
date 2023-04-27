let massa = 72
let altura = 1.75

let imc = massa/altura**2

if(imc < 18.5) {
  alert('Magreza');
}
else {
  if(imc < 25){
    alert('Normal');
  }
  
  if(25 < imc){
    if(imc < 30){
    alert('Sobrepeso');}
    
    if(imc > 30){
      if(imc < 40)
    alert('Obesidade');}
    
  if(imc > 40) {
    alert('Obesidade Grave');}
  }
}
console.log(imc)

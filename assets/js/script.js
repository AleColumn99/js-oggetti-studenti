studente = {
  nome: 'Mario',
  cognome: 'Rossi',
  eta: '18'
}

for (var key in studente) {
  console.log(key + ': ' + studente[key]);
}
console.log('________________________________________');


var arrStudenti = [
  {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: '18'
  },
  {
    nome: 'Mattia',
    cognome: 'Brivio',
    eta: '17'
  },
  {
    nome: 'Anna',
    cognome: 'Mazzoni',
    eta: '15'
  },
  {
    nome: 'Arturo',
    cognome: 'de Benedetti',
    eta: '17'
  } 
]

var newFirstname = prompt('Inserisci il tuo nome:');
var newLastname = prompt('Inserisci il tuo cognome:');
var newAge = parseInt(prompt('Inserisci la tua età:'));
addStudente(arrStudenti, newFirstname, newLastname, newAge);

for (var studente of arrStudenti) {
  for (var key in studente) {
    console.log(key + ': ' + studente[key]);
  }
}

function addStudente (target, firstname, lastname, age) {
  target.push({
    firstname,
    lastname,
    age
  });
}
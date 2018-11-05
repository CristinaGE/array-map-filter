/* Array.prototype.filter - Exercice 2

Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Exemple d'entrée:
  1er argument:  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
  2ème argument: 5

  Sortie attendue:
  [-10, 5, 15, 20]

 */
const tableau = [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27];
const nbr = 5;

function getMultiplesOf(numbers, n){
  const multiplesOf = numbers.filter(function(number){
    if(number % nbr === 0){
      return number;
    }
  });
  return multiplesOf;
}
getMultiplesOf(tableau)

// Ne pas modifier l'export
module.exports = getMultiplesOf;

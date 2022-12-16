const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("EX A");
let sum=10+20;
console.log("10+20=",sum);

/* ESERCIZIO B !
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("EX B");
let random;
let max=21;
random=Math.floor(Math.random() * max); // OPZIONE A .se si vuole un numero INTERO tra 0 e 20 inclusi
//random=(Math.random() * max); // OPZIONE B . se si vuole un numero FLOAT tra 0 e 20 inclusi
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("EX C");
const me={
  name: "Shahruz",
  surname: "Amonov",
  age: 22,
}
console.log(me);
/* ESERCIZIO D !
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("EX D");
delete me.age;
console.log(me);
/* ESERCIZIO E !
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("EX E");
me.skills=["javascript","c++","c#"];
console.log(me);

/* ESERCIZIO F !
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("EX F");
const exFElement="html";
me.skills.push(exFElement);
console.log(me);
/* ESERCIZIO G !
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("EX G");
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("EX 1");
const dice=function(){
let myRandomNumber=Math.floor(Math.random() * 6)+1;
return myRandomNumber;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("EX 2");
const whoIsBigger=function(n1,n2){
  let result;
  if(n1>n2){
    result=n1;
  }else{
    result=n2;
  }
  return result;
}
let ex2N1=21;
let ex2N2=23;
console.log("i numeri sono ",ex2N1," e ",ex2N2,".Il piu grande è: " ,whoIsBigger(ex2N1,ex2N2));
/* ESERCIZIO 3 !
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("EX 3");
const splitMe=function(str){
  const arr=str.split(" ");
  return arr;
}
const ex3str="CIAO BABBO NATALE per natale voglio Lorem";

console.log(ex3str);
console.log(splitMe(ex3str));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("EX 4");
const deleteOne=function(str,bool){
  if(bool===true){
    return (str.slice(1));
  }else
  {
    return(str.slice(0,str.length-1));
  }
}
let ex4BoolNumber=false;
const ex4str="LA divina ComMEdIa";
console.log(ex4str,ex4BoolNumber);
console.log(deleteOne(ex4str,ex4BoolNumber));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("EX 5");
const onlyLetters=function(str){
  const numberArray=["0","1","2","3","4","5","6","7","8","9"];
 

  const arrayChar=str.split("");
  let convArray=[];
  for(i=0;i<arrayChar.length;i++){
    convArray.push(arrayChar[i]);
    for(j=0;j<numberArray.length;j++){
      if(arrayChar[i]===numberArray[j]){
        convArray.pop();
      }
    
    }
    
  }
  const result=convArray.join("");
  return result;
}
const ex5str="abcdefghi I have  4 dogs. I like the number 10, my grandmother is 178.45 cm, my phone number is +391234567890 prova prova"
console.log(ex5str);
console.log(onlyLetters(ex5str));

/* ESERCIZIO 6 !!!!!!
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("EX 6");
const isThisAnEmail=function(str){

}


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("EX 7");
const whatDayIsIt=function(){
  let giornoWord="";
  const start= new Date();
  console.log(start);
  const giornoNumber=start.getDay();
  switch(giornoNumber){
    case(1):
    giornoWord="Monday";
    break;
    case(3):
    giornoWord="Wednesday";
    break;
    case(4):
    giornoWord="Thursday";
    break;
    case(5):
    giornoWord="Friday";
    break;
    case(6):
    giornoWord="Saturday";
    break;
    case(7):
    giornoWord="Sunday";
    break;
  }
  return giornoWord;
}
console.log("Today is : ",whatDayIsIt());


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("EX 8");
const rollTheDices=function(num){
  
  const ex8object={
    sum:0,
    values:[],
  }

  for(i=0;i<num;i++){
    ex8object.values.push(dice());
    ex8object.sum=ex8object.values[i]+ex8object.sum;
  }
  
  return(ex8object);
}
let ex8Number=4;

console.log("il numero n è  :", ex8Number);
console.log("il risultato è :",rollTheDices(ex8Number));

/* ESERCIZIO 9 !!!
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
  const howManyDays=function(inputData){
    const today=new Date();
  }
  
  const ex9Date= new Date();
  console.log(ex9Date);

  

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("EX 10");
const isTodayMyBirthday=function(birthdaydate,birthdayMonth){
  const start=new Date();
  const todayDate=start.getDate();
  const todayMonth=start.getMonth();
  if(todayDate===birthdaydate && todayMonth===birthdayMonth){
    return true;
  }
  else{
    return false;
  }
}
const ex10MyBirthdayDay=9;
const ex10MybirthdayMonth=6;
console.log("the day of my Birthday is ",ex10MyBirthdayDay," and the Month is ",ex10MybirthdayMonth);

console.log(isTodayMyBirthday(ex10MyBirthdayDay,ex10MybirthdayMonth));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("EX 11");

const deleteProp=function(ob,str){
    delete alumn[str];
    return ob;
    
}

const alumn={
  name: "Shahruz",
  surname: "Amonov",
  age: 22,
  Mark: 9,
}

const ex11string="Mark";
console.log("la stringa è: ",ex11string);
console.log(alumn);
console.log(deleteProp(alumn,ex11string));

/* ESERCIZIO 12 !!!
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito. 
*/



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("EX 13");
const countMoviest=function(){
 let count=0;
 for(i=0;i<movies.length;i++){
  count=count+1;
 } 
 return count;
 // COMMENTO BY SHAHRUZ, ANCORA MEGLIO METODO 2 BASTA TOGLIERE IL FOR E SCRIVERE SEMPLICEMENTE count=movies.length
}

console.log(countMoviest());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("EX 14");
const onlyTheYears=function(){
  const onlyTheYears=[];
  for(i=0;i<movies.length;i++){
    onlyTheYears.push(movies[i].Year);
   } 
   return onlyTheYears;
}
console.log(onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("EX 15");
const onlyInLastMillennium=function(){
  const lastMilleniumMovies=[];
  for(i=0;i<movies.length;i++){
  
    if(movies[i].Year<2000){
      
    lastMilleniumMovies.push(movies[i]);
    }
   } 
   return lastMilleniumMovies;
  
}
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("EX 16");
const sumAllTheYears=function(){
  let sum=0;
  for(i=0;i<movies.length;i++){
    sum=+movies[i].Year+sum;
  }
  return sum;
}
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("EX 17");
const searchByTitle=function(str){

  const moviesbytitle=[];
  for(i=0;i<movies.length;i++)
 {
    if(movies[i].Title.includes(str)){

      moviesbytitle.push(movies[i]);
    }
  }

  return moviesbytitle;
}
const ex17title="Avengers";
console.log(searchByTitle(ex17title));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide=function(str){
  
  moviesDivide={
    match:[],
    unmatch:[],
  }

  for(i=0;i<movies.length;i++)
  {
     if(movies[i].Title.includes(str)){
 
       moviesDivide.match.push(movies[i]);
     }else
     moviesDivide.unmatch.push(movies[i]);
   }
 
   return moviesDivide;

}
const ex18title="Avengers";
console.log(searchAndDivide(ex18title));

/* ESERCIZIO 19 COMPLETATO
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("EX 19");
const removeIndex=function(n1){
  movies.splice(n1,1);
  return movies;
}
ex19n1=2;
console.log(removeIndex(ex19n1));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("EX 27");
const stampaNAsterischi=function(n){
  let stringAsterischi=""
  for(j=0;j<n;j++){

  
  stringAsterischi=stringAsterischi.concat("*");
  
}
return stringAsterischi;
}
const halfTree=function(n){

for(i=1;i<=n;i++){
  
  console.log(stampaNAsterischi(i));
}




}
let ex27num=10;
halfTree(ex27num);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

  
*/
console.log("EX 28");
const stampaNAsterischiTree=function(currentlevel,num){
  let stringAsterischi=""
  let numSpace=num;
  
  for(j=0;j<numSpace;j++){
    stringAsterischi=stringAsterischi.concat(" ")
  }

  

  for(j=0;j<currentlevel;j++){
    
  stringAsterischi=stringAsterischi.concat("**");

}

  

return stringAsterischi
}


const Tree=function(n){
space=n;
for(i=1;i<=n;i++){
  
  console.log(stampaNAsterischiTree(i,space));
  space=space-1;
}




}
let ex28num=10;
Tree(ex28num);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
/*   *
    ***
   *****
  *******
 *********/
/* Questo array viene usato per gli esercizi. Non modificarlo. */

/*console.log("EX 12");
const newestMovie=function(){
 const newmovies=[]; // COMMENTO BY SHAHRUZ IL FILM O I FILM SE SONO IN PIU CHE HANNO LA STESSA DATA 
 for(i=0;i<movies.length;i++){
  newmovies.push(movies[i]);
 } 
 console.log(newmovies);

 for(i=0;i<movies.length-1;i++){
  console.log("i",i,"i+1",i+1);
 if((+newmovies[i+1].Year)<(+newmovies[i].Year)){
  console.log("CIAONEEEEE")
  console.log(newmovies[i+1],"<",newmovies[i]);
  newmovies.splice(i+1,1);
  i=0;
  console.log(newmovies);
 
 }
}
 /*while(j<newmovies.length){
  console.log("for eseguito");
  if((+newmovies[j+1].Year)<(+newmovies[j].Year)){
    console.log("if eseguito"); 
    newmovies.splice((i+1),1);
    console.log(newestMovie());
    j=0;
  }
 }
 j++;*/ 
 //return(newmovies);
 

//}
//newestMovie();*
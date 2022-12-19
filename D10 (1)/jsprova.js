// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("EX A");            //CONCLUSO E FUNZIONA! 
let sum=10+20;
console.log("10+20=",sum);

/* ESERCIZIO B !
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("EX B");            //CONCUSO E FUNZIONA!
let random;
let max=21;
random=Math.floor(Math.random() * max); // OPZIONE A .se si vuole un numero INTERO tra 0 e 20 inclusi
//random=(Math.random() * max); // OPZIONE B . se si vuole un numero FLOAT tra 0 e 20 inclusi
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("EX C");            //CONCLUSO E FUNZIONA!
const me={
  name: "Shahruz",
  surname: "Amonov",
  age: 22,
}
console.log(me);
/* ESERCIZIO D !                
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("EX D");            //CONLCUSO E FUNZIONA!
delete me.age;
console.log(me);
/* ESERCIZIO E !
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("EX E");            //CONLCUSO E FUNZIONA!
me.skills=["javascript","c++","c#"];
console.log(me);

/* ESERCIZIO F !                
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("EX F");            //CONCLUSO E FUNZIONA!
const exFElement="html";
me.skills.push(exFElement);
console.log(me);
/* ESERCIZIO G                  
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("EX G");            //CONCLUSO E FUNZIONA!
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("EX 1");            //CONLCUSO E FUNZIONA
const dice=function(){
let myRandomNumber=Math.floor(Math.random() * 6)+1;
return myRandomNumber;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("EX 2");            //CONCLUSO E FUNZIONA
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
console.log("EX 3"); //FUNZIONA E CONLCUSO
const splitMe=function(str){
  const arr=str.split(" ");
  return arr;
}
const ex3str="CIAO BABBO NATALE per natale voglio una ragazza";

console.log(ex3str);
console.log(splitMe(ex3str));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("EX 4"); //FUNZIONA E CONCLUSO
const deleteOne=function(str,bool){
  if(bool===true){
    return (str.slice(1));
  }else
  {
    return(str.slice(0,str.length-1));
  }
}
let ex4BoolNumber=true;
const ex4str="LA divina ComMEdIa";
console.log(ex4str,ex4BoolNumber);
console.log(deleteOne(ex4str,ex4BoolNumber));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("EX 5"); //FUNZIONA E CONCLUSO
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
const ex5str=" I have  4 dogs. I like the number 10, my grandmother is 178.45 cm, my phone number is +391234567890 prova prova"
console.log(ex5str);
console.log(onlyLetters(ex5str));

/* ESERCIZIO 6 
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

//POTREI USARE LE REGULAR EXPRESSIONS, MA NON HO CAPITO COME FUNZIONANO COSI UTILIZZO UN METODO ALTERNATIVO INVENTATO DA ME
console.log("EX 6"); //COMPLETATO E FUNZIONA!
// UN EMAIL é COMPOSTO DA 3 parti divise da @ e . "FIRSTPART@SECONDPART.THIRDPART"
//TUTTE LE PARTI POSSONO AVERE SOLO LETTERE E NUMERI

const CheckStart=function(str,arr,k){
  let index=0;
  while((index<arr.length)){          
    if(str[k]===arr[index]){
      return true;
    }else{
      index=index+1;
  //    console.log("k=",k,"index=",index,"str[k]=",str[k],"arr[k]",arr[index]);
    }
    
    }
      return false;
    
}
const Checkchioccola=function(str,arr,k,div){
  let index=0;
  let check=false;
  while((k<str.length)&&(check==false)){
    while((j<arr.length)&&(check==false)){
      
      if(str[k]===arr[index]){
        k=k+1;
        index=0;
      }
      else{
        if(str[k]===div){
          check=true;
        } else {
          index=index+1;
          if(index===arr.length){
          return false;
        }};
      
      }
      
  
    }
  }
 //console.log("k=",k,"index=",index,k,check);
  return k;
}

const isThisAnEmail=function(str){



const ArrayLettereNumeri=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const strUppercase=str.toUpperCase();

let ex6i=0;



if(CheckStart(strUppercase,ArrayLettereNumeri,ex6i)===false){ //TORNA FALSO LA STRINGA NON INIZIA CON UNA LETTERA O UN NUMERO
  return false
}
ex6i=ex6i+1;
ex6i=Checkchioccola(strUppercase,ArrayLettereNumeri,ex6i,"@");
if(i===false){
  return false;
}
ex6i=ex6i+1;
if(CheckStart(strUppercase,ArrayLettereNumeri,ex6i)===false){ //TORNA FALSO SE DOPO LA @ NON CE UNA LETTERA O UN NUMERO 
  return false
}

ex6i=Checkchioccola(strUppercase,ArrayLettereNumeri,ex6i,".");
if(i===false){
  return false;
}
ex6i=ex6i+1;
if(CheckStart(strUppercase,ArrayLettereNumeri,ex6i)===false){ //TORNA FALSO SE DOPO IL PUNTO  NON C'E UNA LETTERA O UN NUMERO 
  return false
}

return true;
}



const ex6str="Epicode@gmail.com";
console.log("la stringa è: ",ex6str, "è un email?",isThisAnEmail(ex6str));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("EX 7"); //FUNZIONA E CONLCUSO
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
console.log("EX 8"); //Corretto e funziona
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

/* ESERCIZIO 9 
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/console.log("EX 9") //CORRETTO E FUNZIONA
  const howManyDays=function(pastDate){
    const today=new Date();
    let timePassedDays;
    timePassedDays=((today.getTime()-pastDate.getTime())/(24*60*60*1000)) //1giorno=24 ore*60 minuti* 60 secondi*1000 millisecondi
    timePassedDays=Math.floor(timePassedDays);//arrotonda per difetto
    return timePassedDays;
  }
  
  const ex9Date= new Date("12/18/2021");



  console.log("la data inserita è",ex9Date, "sono passati",howManyDays(ex9Date),"giorni");

  

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("EX 10");//CORRETTO E FUNZIONA
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

console.log("EX 11"); //CORRETTO E FUNZIONA

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

/* ESERCIZIO 12 
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito. 
*/

console.log("EX 12"); //CORRETTO E FUNZIONA
const newestMovie=function(film){
 const newmovies=[]; // COMMENTO BY SHAHRUZ IL FILM O I FILM SE SONO IN PIU CHE HANNO LA STESSA DATA 
 let newestdate;
 let ex12j=0;
 let lunghezzamovie;
 for(i=0;i<film.length;i++){
  newmovies.push(film[i]);
 } 


 newestdate=+newmovies[0].Year;
 for(i=0;i<newmovies.length;i++){
  if((+newmovies[i].Year)>(+newestdate)){
    newestdate=+newmovies[i].Year;
    
  }

 }
lunghezzamovie=newmovies.length;
 while(ex12j<lunghezzamovie){
  console.log(ex12j);
  if((+newmovies[ex12j].Year)!==(newestdate)){
    newmovies.splice(ex12j,1);
    lunghezzamovie=lunghezzamovie-1;
    ex12j=0
    }
    else{
      ex12j=ex12j+1;
    }

 }

 return newmovies;

}
console.log(" i film piu recenti sono",newestMovie(movies));


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("EX 13"); //CORRETTO E FUNZIONA
const countMoviest=function(){
 let count=0;
 for(i=0;i<movies.length;i++){
  count=count+1;
 } 
 return count;
 // COMMENTO BY SHAHRUZ, ANCORA MEGLIO METODO 2 BASTA TOGLIERE IL FOR E SCRIVERE SEMPLICEMENTE count=movies.length
}

console.log("L'array Movies contiente",countMoviest());

/* ESERCIZIO 14 
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("EX 14"); //CORRETTO E FUNZIONA
const onlyTheYears=function(){
  const onlyTheYears=[];
  for(i=0;i<movies.length;i++){
    onlyTheYears.push(movies[i].Year);
   } 
   return onlyTheYears;
}
console.log("Gli anni in cui sono usciti i film sono",onlyTheYears());
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("EX 15"); //CORRETTO E FUNZIONA
const onlyInLastMillennium=function(){
  const lastMilleniumMovies=[];
  for(i=0;i<movies.length;i++){
  
    if(movies[i].Year<2000){
      
    lastMilleniumMovies.push(movies[i]);
    }
   } 
   return lastMilleniumMovies;
  
}
console.log("I film dello scorso millenio sono questi:",onlyInLastMillennium());



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
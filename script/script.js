var bord = document.getElementById("bord");

var randomWord;
var maxAttempts;
var counterGoed;
var juistePlek = [];
var poging = 0;

function loadWord(){
    randomWord = Math.floor(Math.random() * words.length);
    console.log(words[randomWord]);
    randomWord = words[randomWord];
}

function loadBord(aantalRows, aantalColumns){
    maxAttempts = aantalRows;
    for(var i = 0; i < aantalRows; i++){
        bord.innerHTML += "<div id='"+ i +"' class='lingo_row'></div>";
        for(var j = 0; j < aantalColumns; j++){
            document.getElementById(i).innerHTML += "<div id='letter_"+i+"_"+j+"' class='lingo_letter'></div>";
        }
    }
}

function setBeginLetter(){
    document.getElementById("letter_" + poging + "_0").innerHTML = randomWord.charAt(0);
}

function plaatsen(woord){
    //haalt de woorden uitelkaar en maakt er chars van
    var lettersUser = [];
    var lettersWoord = [];
    for (var i = 0; i < woord.length; i++) {
        lettersUser[i] = woord.charAt(i);
    }   
    for(var i = 0; i < randomWord.length; i++){
        lettersWoord[i] = randomWord.charAt(i);
    }
    console.log(lettersWoord);
    //hier checkt en plaats je de letters
    for(var i = 0; i < lettersUser.length; i++){
        console.log(i);
        document.getElementById("letter_"+poging+"_"+i).innerText = lettersUser[i];
        if(lettersWoord[i] == lettersUser[i]){
            document.getElementById("letter_"+poging+"_"+i).style.backgroundColor = "green";
            counterGoed++;
            juistePlek[i] = lettersWoord[i];
            document.getElementById("letter_"+ (poging+1) + "_" + i).innerHTML = juistePlek[i];
        } else{
            //kijken of letter in woord zit en hem geel maken
            if(randomWord.includes(lettersUser[i])){
                document.getElementById("letter_"+poging+"_"+i).style.borderRadius = "50%";
                document.getElementById("letter_"+poging+"_"+i).style.backgroundColor = "#d1d100";
            }
        }
        if(counterGoed == lettersWoord.length){
            alert("GEWONNNEN WOELEH");
        }
    }
}

function checkWord(woord){
    if(poging < maxAttempts - 1){
        //zet de counter van de goede letters op 0;
        counterGoed = 0;
        plaatsen(woord);
        poging++;
    }else{
        plaatsen(woord);
        setTimeout(function(){
            alert("Helaas je hebt het woord niet geraden. Op naar het volgende woord");
            location.reload();
        }, 500);
        
    }
}


loadWord();
loadBord(5, 5);
setBeginLetter();
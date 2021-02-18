var bord = document.getElementById("bord");

var randomWord;
var maxAttempts;
var counterGoed;
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
        //Zet letter in vakje
        document.getElementById("letter_"+poging+"_"+i).innerText = lettersUser[i];

        //Kijken of letter gelijk is
        if(lettersWoord[i] == lettersUser[i]){
            document.getElementById("letter_"+poging+"_"+i).style.backgroundColor = "green";
            document.getElementById("letter_"+ (poging+1) + "_" + i).innerHTML = lettersUser[i];
            
            console.log(lettersWoord[i])

            lettersWoord[i] = '';
        } else{
            //kijken of letter in woord zit en hem geel maken
            // if(lettersWoord.includes(lettersUser[i])){
            //     document.getElementById("letter_"+poging+"_"+i).style.borderRadius = "50%";
            //     document.getElementById("letter_"+poging+"_"+i).style.backgroundColor = "#d1d100";

            //     //Verwijderd element uit array
            //     lettersWoord[i] = "";
            // }
            for(var x = 0; x < lettersWoord.length; x++){
                //check of letter in array zit
                if(lettersUser[i] == lettersWoord[x]){
                    console.log(lettersUser[i] + 'zit in array');
                    document.getElementById("letter_"+poging+"_"+i).style.borderRadius = "50%";
                    document.getElementById("letter_"+poging+"_"+i).style.backgroundColor = "#d1d100";
                    lettersWoord[i] = '';
                }else{
                    console.log(lettersUser[i] + "zit niet in arrray");
                }
            }
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
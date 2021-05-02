//Speech to Text

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();


recognition.onstart = function() {
    console.log("Mimicry app has started");
}

recognition.onspeechend = function() {
    console.log("User has completed statement");
    recognition.stop();
}


recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;

//Text to Speech
        let msg = transcript;
        let speech = new SpeechSynthesisUtterance();
                    speech.lang = "en-GB";
                    
                    speech.text = msg;
                    speech.volume = 1;
                    speech.rate = 1;
                    speech.pitch = 1;
                    
                    window.speechSynthesis.speak(speech);
                
    


    if (confidence * 100 <= 60)
    {
        console.log("I didn't catch that!")
    }
    else
    {
        console.log(transcript);
        if (confidence * 100 < 60){
            console.log("I'm not too sure if I heard you correctly");
        }
        else
        {
            console.log("I heard you pretty well")
        }
        
    }
}

function micEventListener(){
    recognition.start();
    document.getElementById("l").style.display = "block";
}

function runSpeechRecognition(){
    console.log(output);
}

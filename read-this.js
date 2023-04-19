class ReadThis extends HTMLElement {
  constructor() {
    super();
    let utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'en-US';
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    let utteranceVoiceURI = null;

    const readThisElement = "";
    let lang = utterance.lang;
    let lang2 = "";
    let isPlaying = false;


    const readVocabElements = document.querySelectorAll('.read-vocab');
    prepareLines(readVocabElements);
    
    function prepareLines(data) {
    data.forEach(readVocab => {
      let languageSetting = readVocab.dataset.lang;
      let languageSetting2 = readVocab.dataset.lang2;
      if (!languageSetting2) {
        switch (languageSetting) {
          case "en-US":
            languageSetting2 = "th-TH";
            break;
          case "es-MX":
            languageSetting2 = "en-US";
          case "th-TH":
            languageSetting2 = "en-US";
          case "de-DE":
            languageSetting2 = "en-US";  
          default:
            languageSetting2 = "en-US"
            break;
        }
      }
      languageSetting ? lang = languageSetting : lang = "en-US";
      languageSetting2 ? lang2 = languageSetting2 : lang2 = "en-US";

      const content = readVocab.textContent.trim();
      const lines = content.split('\n');
      readVocab.textContent = "";
      lines.forEach(line => {
        const parts = line.split('-');

        const span = document.createElement('span');
        span.classList.add('read-this');
        span.dataset.lang = lang;
        span.dataset.lang2 = lang2;
        let partCleaned = parts[0].trimStart().trim();
        span.dataset.speak = partCleaned;
        (parts[1]) ? span.dataset.translate = parts[1].trimStart().trim() : span.dataset.translate = "";
        span.textContent = partCleaned;
        readVocab.appendChild(span);
      });
    })
  }

    const readLinesElements = document.querySelectorAll('.read-lines');
    prepareLines(readLinesElements);

    let spans = document.querySelectorAll(".read-this");

    spans.forEach(function (span) {
      let parentText = span.dataset.speak.trim();
      let translatethis = span.dataset.translate;
      let button = document.createElement("button");
      let button2 = document.createElement('button');
      button.innerHTML = '&#127911;';
      button.className = "read-button";
      span.appendChild(button);
      if (translatethis) {
        button2.innerHTML = '&#127911;';
        button2.className = "read-button";
        var translateSpan = document.createElement("span");
        // let lineBreak1 = document.createElement("br");
        // span.appendChild(lineBreak1);
        translateSpan.textContent = ` (${translatethis})`;
        translateSpan.setAttribute('translate', 'yes');
        span.appendChild(translateSpan);
        span.appendChild(button2);
      }
      const lineBreak = document.createElement('br');
      span.appendChild(lineBreak);
      button.addEventListener("click", function () {
        let languageSetting = span.dataset.lang;
        languageSetting ? lang = languageSetting : lang = "en-US";
        if (isPlaying) {
          speechSynthesis.cancel();
          isPlaying = false;
        } else {
          readText(parentText);
          isPlaying = true;
        }
      });
      button2.addEventListener("click", function () {
        let languageSetting2 = span.dataset.lang2;
        let currentLang = document.documentElement.lang;
        console.log(currentLang);
        if (currentLang != "auto") {
          languageSetting2 = currentLang;
        }
        
        console.log(translateSpan);
        languageSetting2 ? lang = languageSetting2 : lang = "th-TH";
        if (isPlaying) {
          speechSynthesis.cancel();
          isPlaying = false;
        } else {
          readText(translateSpan.textContent);
          isPlaying = true;
        }
      });
    })



    utterance.addEventListener("end", function () {
      isPlaying = false;
    });

    function readText(text) {
      // let utterance = new SpeechSynthesisUtterance(text);
      utterance.text = text;
      utterance.lang = lang;
      utterance.rate = .8;
      window.speechSynthesis.speak(utterance);
    }


  }
}


customElements.define('read-this', ReadThis);


    // let voiceDropdown = document.querySelectorAll("div.read-lines");
    // voiceDropdown.forEach(vd => {
    //   vd.appendChild(select);
    // });


      // utterance.voiceURI = utteranceVoiceURI;
      // console.log("final URI", utterance.voiceURI);
      // utterance = new SpeechSynthesisUtterance(text);
      // (lang === "th-TH") ? utterance.voiceURI = "Microsoft Niwat Online (Natural) - Thai (Thailand)" : console.log("nope");
      // (lang === "en-US") ? utterance.voiceURI = "Microsoft Christopher Online (Natural) - English  (United States)" : console.log("nope");
      // (lang === "es-MX") ? utterance.voiceURI = "Microsoft Jorge Online (Natural) - Spanish (Mexico)" : console.log("nope");
      // (lang === "de-DE") ? utterance.voiceURI = "Microsoft Amala Online (Natural) - German (Germany)" : console.log("nope");



    
    // Add dropdown menu to each span
    // const select = document.createElement('select');
    // select.classList.add('read-this-select');

    // speechSynthesis.addEventListener('voiceschanged', (event) => {

    //   const voices = speechSynthesis.getVoices().filter((voice) => {

    //     return voice.lang === lang;

    //   });
    //   console.log(voices);
    //   // Add option elements, one for each matching voice
    //   voices.forEach((voice) => {
    //     const option = document.createElement('option');
    //     option.value = voice.voiceURI;
    //     option.textContent = voice.name;
    //     select.appendChild(option);
    //   });

    //   // Listen for the change event on the select element
    //   select.addEventListener('change', (event) => {
    //     utteranceVoiceURI = event.target.value;
    //     console.log(utteranceVoiceURI);
    //   });
    // })


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



    const readLinesElements = document.querySelectorAll('.read-lines');

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

    const readVocabElements = document.querySelectorAll('.read-vocab');
    readVocabElements.forEach(readVocab => {
      let languageSetting = readVocab.dataset.lang;
      languageSetting ? lang = languageSetting : lang = "en-US";
      const content = readVocab.textContent.trim();
      const lines = content.split('\n');
      readVocab.textContent = "";
      lines.forEach(line => {
        const parts = line.split('-');

        const span = document.createElement('span');

        span.classList.add('read-this');
        span.dataset.lang = lang;
        span.dataset.speak = parts[0];
        span.textContent = line;
        readVocab.appendChild(span);


      });
    })

    readLinesElements.forEach(readLines => {
      let languageSetting = readLines.dataset.lang;
      languageSetting ? lang = languageSetting : lang = "en-US";
      const content = readLines.textContent.trim();
      const lines = content.split('\n');
      readLines.textContent = "";
      lines.forEach(line => {
        const span = document.createElement('span');

        span.classList.add('read-this');
        span.dataset.lang = lang;
        span.dataset.speak = content;
        span.textContent = line;
        readLines.appendChild(span);


      });


    })

    let spans = document.querySelectorAll(".read-this");

    spans.forEach(function (span) {
      let parentText = span.dataset.speak.trim();
      let button = document.createElement("button");
      button.innerHTML = '&#127911;';
      button.className = "read-button";
      span.appendChild(button);
      const lineBreak = document.createElement('br');
      span.appendChild(lineBreak);
      button.addEventListener("click", function () {
        console.log(parentText);
        let languageSetting = span.dataset.lang;
        languageSetting ? lang = languageSetting : lang = "en-US";
        console.log(lang);
        readText(parentText);
      }
      )
    })

    // let voiceDropdown = document.querySelectorAll("div.read-lines");
    // voiceDropdown.forEach(vd => {
    //   vd.appendChild(select);
    // });

    function readText(text) {
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.text = text;
      utterance.lang = lang;
      utterance.rate = .8;
      // utterance.voiceURI = utteranceVoiceURI;
      console.log("final URI", utterance.voiceURI);
      // utterance = new SpeechSynthesisUtterance(text);
      // (lang === "th-TH") ? utterance.voiceURI = "Microsoft Niwat Online (Natural) - Thai (Thailand)" : console.log("nope");
      // (lang === "en-US") ? utterance.voiceURI = "Microsoft Christopher Online (Natural) - English  (United States)" : console.log("nope");
      // (lang === "es-MX") ? utterance.voiceURI = "Microsoft Jorge Online (Natural) - Spanish (Mexico)" : console.log("nope");
      // (lang === "de-DE") ? utterance.voiceURI = "Microsoft Amala Online (Natural) - German (Germany)" : console.log("nope");
      window.speechSynthesis.speak(utterance);
    }


  }
}


customElements.define('read-this', ReadThis);




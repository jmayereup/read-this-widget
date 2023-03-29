class ReadThis extends HTMLElement {
  constructor() {
    super();
    this.utterance = new SpeechSynthesisUtterance();
    this.utterance.lang = 'en-US';
    this.utterance.volume = 1;
    this.utterance.rate = .8;
    this.utterance.pitch = 1;
    let utteranceViceURI = null;

    const readThisElement = "";
    let lang = this.utterance.lang;

    // Add dropdown menu to each span
    const select = document.createElement('select');
    select.classList.add('read-this-select');

    const readLinesElements = document.querySelectorAll('.read-lines');
      // Listen for the voiceschanged event to update the select element
      speechSynthesis.addEventListener('voiceschanged', (event) => {
        // Filter voices for natural voices that match the current language
        const voices = speechSynthesis.getVoices().filter((voice) => {
          return voice.name.toLowerCase().includes("natural") && (voice.lang === lang);
        });
    
        // Add option elements, one for each matching voice
        voices.forEach((voice) => {
          const option = document.createElement('option');
          option.value = voice.voiceURI;
          option.textContent = voice.name;
          select.appendChild(option);
        });
    
        // Listen for the change event on the select element
        select.addEventListener('change', (event) => {
          utteranceViceURI = event.target.value;
        });
         })   // Prepend the select element to the span
        



    readLinesElements.forEach(readLines => {
      let languageSetting = readLines.dataset.lang;
      languageSetting ? lang = languageSetting : lang = "en-US";
      const content = readLines.textContent.trim();
      const lines = content.split('\n');
      readLines.textContent = "";

      lines.forEach(line => {
        const span = document.createElement('span');

        span.classList.add('read-this');
        span.classList.add('read-this');
        span.dataset.lang = lang;
        span.textContent = line;
        readLines.appendChild(span);


      });
      const firstLine = document.querySelector(".read-lines");
      firstLine.appendChild(select);
    })



    let divs = document.querySelectorAll(".read-this");

    divs.forEach(function (div) {
      let parentText = div.textContent.trim();
      let button = document.createElement("button");
      button.innerHTML = '&#127911;';
      button.className = "read-button";
      div.appendChild(button);
      const lineBreak = document.createElement('br');
      div.appendChild(lineBreak);
      button.addEventListener("click", function () {
        console.log(parentText);
        let languageSetting = div.dataset.lang;
        languageSetting ? lang = languageSetting : lang = "en-US";
        console.log(lang);
        readText(parentText);
      }
      )
    })

    function readText(text) {
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.voiceURI  = utteranceViceURI;
      // (lang === "th-TH") ? utterance.voiceURI = "Microsoft Niwat Online (Natural) - Thai (Thailand)" : console.log("nope");
      // (lang === "en-US") ? utterance.voiceURI = "Microsoft Christopher Online (Natural) - English  (United States)" : console.log("nope");
      // (lang === "es-MX") ? utterance.voiceURI = "Microsoft Jorge Online (Natural) - Spanish (Mexico)" : console.log("nope");
      // (lang === "de-DE") ? utterance.voiceURI = "Microsoft Amala Online (Natural) - German (Germany)" : console.log("nope");
      window.speechSynthesis.speak(utterance);
    }
  }
}


customElements.define('read-this', ReadThis);




class ReadThis extends HTMLElement {
  constructor() {
    super();
    this.utterance = new SpeechSynthesisUtterance();
    this.utterance.lang = 'en-US';
    this.utterance.volume = 1;
    this.utterance.rate = 1;
    this.utterance.pitch = 1;

    const readThisElement = "";
    let lang = this.utterance.lang;
    // getVoices().then(voices => {
    //   let languages = voices.map(voice => voice.lang);
    //   console.log(languages);
    // });
    // Get all elements with class "read-lines"
    const readLinesElements = document.querySelectorAll('.read-lines');

    readLinesElements.forEach(readLines => {
      let languageSetting = readLines.dataset.lang;
      languageSetting ? lang = languageSetting : lang = "en-US";
      const content = readLines.textContent.trim();
      const lines = content.split('\n');
      readLines.textContent="";

      lines.forEach(line => {
        const span = document.createElement('span');

        span.classList.add('read-this');
        span.classList.add('read-this');
        span.dataset.lang = lang;        
        span.textContent = line;
        readLines.appendChild(span);
      });
    });



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
      })

    })


    function readText(text) {
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    }
    // function setDefaultVoice() {

    //   const defaultVoice = voices.find(v => v.default);
    //   if (defaultVoice) {
    //     this.setVoice(defaultVoice.name);
    //   }
    // }

    // function getVoices() {
    //   return new Promise(resolve => {
    //     let voices = speechSynthesis.getVoices();
    //     if (voices.length) {
    //       resolve(voices);
    //     } else {
    //       speechSynthesis.addEventListener('voiceschanged', () => {
    //         voices = speechSynthesis.getVoices();
    //         resolve(voices);
    //       });
    //     }
    //   });
    // }

  }
}
customElements.define('read-this', ReadThis);





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

    let divs = document.querySelectorAll(".read-this");
    
    divs.forEach(function(div){
      let button = document.createElement("button");
      button.innerHTML = '&#127911;';
      button.className = "read-button";
      div.appendChild(button);
      button.addEventListener("click", function(){
        let parentText = this.parentElement.textContent;
        let length = parentText.length;
        let text = parentText.substring(0, length-1);
        console.log(text);
        let languageSetting = this.parentElement.dataset.lang;
        languageSetting ? lang = languageSetting : lang = "en-US";
        console.log(lang);
        readText(text);
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





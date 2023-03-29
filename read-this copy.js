class ReadThis extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root and attach it to the custom element
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Apply styles to the shadow root
    shadowRoot.innerHTML = `
      <style>
        h3 {
          display: inline;
        }
        
      </style>
      <slot></slot>
    `;

    // Set up speech synthesis options
    this.utterance = new SpeechSynthesisUtterance();
    this.utterance.lang = 'en-US';
    this.utterance.volume = 1;
    this.utterance.rate = 1;
    this.utterance.pitch = 1;

    let lang = this.utterance.lang;

    const readLinesElements = document.querySelectorAll('.read-lines');

    readLinesElements.forEach(readLines => {
      lang = readLines.dataset.lang || "en-US";
      const content = readLines.innerHTML.trim();
      const lines = content.split('\n');
      readLines.textContent = "";

      lines.forEach(line => {
        // Create a span element for each line
        const span = document.createElement('span');
        span.classList.add('read');
        span.dataset.lang = lang;

        // Remove HTML tags from the line and set it as the "toread" data attribute
        let lineCleaned = line.replace(/<.*?>/g, '');
        span.dataset.toread = lineCleaned;

        // Set the innerHTML of the span element to the original line
        span.innerHTML = line;
        readLines.appendChild(span);

        // Create a button element for each line
        let button = document.createElement("button");
        button.innerHTML = '&#127911;';
        button.className = "read-button";
        span.appendChild(button);

        // Add a line break element after each line
        const lineBreak = document.createElement('br');
        readLines.appendChild(lineBreak);

        // Add a click event listener to the button to read the line aloud
        button.addEventListener("click", function () {
          lang = span.dataset.lang || "en-US";
          readText(span.dataset.toread);
        });
      });
    });

    function readText(text) {
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    }


  }
}

customElements.define('read-this', ReadThis);

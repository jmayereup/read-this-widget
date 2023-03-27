# read-this-widget
A simple web component for the webspeech api

Include the script in your html and then wrap the text to be read. 
You can wrap multiple items, but each <div> that you want the 
widget to appear in and read should have class="read-this".
  
If the text is not English, you need to specify the language.

      <read-this>
        <div class="read-this" data-lang="en-US">
            This is the text to be read.
        </div>
        <div class="read-this" data-lang="es-MX">
            Este es el texto a leer.
        </div>
        <div class="read-this" data-lang="th-TH">
            นี่คือข้อความที่จะอ่าน
        </div>
        <div class="read-this">
            Este es el texto a leer.
        </div>
        <div class="read-this">
            This is the text to be read.
        </div>
    </read-this>
  
  You can use this `<script src=https://cdn.jsdelivr.net/gh/jmayereup/read-this-widget/read-this.js><script>`
  
  List of codes. Not all codes may be supported by your browser.
  http://www.lingoes.net/en/translator/langcode.htm

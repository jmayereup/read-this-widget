# read-this-widget
A simple web component for the webspeech api

Include the script in your html and then wrap the text to be read. 
You can wrap multiple items, but each <div> that you want the 
widget to appear in and read. It should have class="read-this" or class="read-vocab".
These classes will create a widget after each line break.
If no data-lang2 is specified the voice will default to.
lang = en-US -> lang2 = th-TH
lang = es-MX -> lang2 = en-US
lang = th-TH -> lang2 = en-US
lang = de-DE -> lang2 = en-US
  
If the text is not English, you need to specify the language.

        <div class="read-lines" data-lang="en-US" data-lang2="es-MX">
            <h3>This is the text to be read. - Este es el texto a leer.</h3>
            It will be read by lines.
            <p>HTML tags like p should be ignored.</p>
        </div>
        <br>
        <div class="read-lines" data-lang="es-MX">
            Juan: Mamá, estoy triste. - ฮวน: แม่ครับ ผมเสียใจ
            María: ¿Por qué, hijo?
            Juan: Porque Pedro y yo tuvimos una pelea.
        </div>
        <br>
        <div class="read-lines" data-lang="th-TH">
            ฉาก: ช่วงเวลาพักเที่ยงในโรงอาหารของโรงเรียน
            แมรี่: สวัสดี นิวัติ! ชั้นเรียนตอนเช้าของคุณเป็นอย่างไร
            นิวัฒน์: ดีครับ ขอบคุณครับ และของคุณ?
        </div>
        <div class="read-lines" data-lang="en-US">
            <h3>This is the text to be read.</h3>
            It will be read by lines.
            <p>HTML tags like p should be ignored.</p>
        </div>
        <div class="read-vocab" data-lang="en-US" data-lang2="es-MX">
            english1 - Mamá, estoy triste. 
            english2 - ขอบคุณครับ
            english3 - a phrase definition
        </div>
    </read-this>
    
  
  You can use this `<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/jmayereup/read-this-widget/read-this.js"></script>`
  
  List of codes. Not all codes may be supported by your browser.
  http://www.lingoes.net/en/translator/langcode.htm

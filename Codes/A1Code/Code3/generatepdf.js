const express = require("express");

const fs = require("fs");
const PDFDocument = require("pdfkit");
const app = express();

app.get('/getPdf',(request, response)=>{
    response.contentType("application/pdf");
    var doc = new PDFDocument();
    doc.circle(100, 50, 50)
   .lineWidth(3)
   .fillOpacity(0.8)
   .fillAndStroke("red", "#900");
   doc.text ('Brain Mentors Pvt Ltd',30,150);
   var quote = 'The main difference between men and the animals is the difference in their power of concentration. All success in any line of work is the result of this';
   doc.fontSize(18);
doc.fillColor('green');
doc.font(__dirname+'/fonts/Walkway/Walkway_Black.ttf');
doc.text (quote,{width: 510,align: 'left'});

doc.moveDown();
doc.fontSize(12);
doc.font(__dirname+'/fonts/grand-hotel/GrandHotel-Regular.otf');
doc.fillColor('red');
doc.text (quote,{width: 510,align: 'center',characterSpacing:2});
doc.image(__dirname+"/images/sachin.jpg", 100, 450, {width: 300});



doc.fontSize(28);
doc.font(__dirname+'/fonts/Walkway/Walkway_Black.ttf');
doc.fillColor('blue');
doc.moveDown();
doc.text (quote,{width: 510, align: 'right'}); 

doc.pipe(fs.createWriteStream("sample.pdf"));
doc.pipe(response);  // Write PDF to Response


// Creating Link
doc.fontSize(12).fillColor('blue').text('Read More Visit', 100, 715);
var width = doc.widthOfString('Read More Visit');
var height = doc.currentLineHeight() 
doc.underline(100, 700, width, height, {color: 'blue'});
doc.link(20, 0, width, height, 'http://www.brain-mentors.com/');
doc.end();

});

app.listen(1234,()=>{
    console.log("Server Start....");
});


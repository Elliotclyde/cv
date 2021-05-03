var html_to_pdf = require("html-pdf-node");
var fs = require("fs");

let options = {
  width: "700px",
  height: "970px",
  printBackground: true,
  pages: "1-1",
};
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

let file = { url: "http://localhost:8080/" };

function getDateString() {
  let now = new Date();
  console.log(now);
  return (
    now.getDate() +
    "-" +
    (now.getMonth() + 1) +
    "-" +
    now.getFullYear() +
    "-" +
    now.getTime()
  );
}

html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
  fs.writeFileSync("cv-" + getDateString() + ".pdf", pdfBuffer, "binary");
});

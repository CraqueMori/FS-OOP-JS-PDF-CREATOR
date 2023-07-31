const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')
const leitor = new Reader();
const escritor = new Writer();


async function main(){
    let data = await leitor.Read("./users.csv");
    let dadosProcessados = Processor.Process(data);
    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios)
    
    escritor.Write("meuhtmlgerado.html", html)
    PDFWriter.WritePDF("meupdf"+".pdf", html)
}

main();
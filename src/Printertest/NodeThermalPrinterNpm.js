var printer = require("node-thermal-printer");
var printerP = require('printer');
printer.init({
  type: 'epson',
  interface: '/dev/usb/lp0'
});
//console.log(printer.isPrinterConnected());
printer.alignCenter();
printer.setTypeFontA();
 printer.setTextNormal();
 printer.println("********************************");
printer.setTextDoubleHeight();
printer.println("Fudoo");
printer.setTextNormal();
printer.println("********************************");
printer.setTextNormal();
printer.setTextNormal();
printer.newLine();
printer.println("-------------------------------");
printer.tableCustom([
  { text:"Item", align:"LEFT", width:0.4, bold:true },
  { text:"Qty", align:"CENTER", width:0.1, bold:true },
  { text:"Price", align:"RIGHT", width:0.1, bold:true }
]);
printer.println("-------------------------------");
for(let i=0; i<11; i++){
  printer.tableCustom([
    { text:`long name items${i}`, align:"LEFT", width:0.4 },
    { text:`${i}`, align:"CENTER", width:0.1 },
    { text:`${i}0`, align:"RIGHT", width:0.2 }
  ]);
}
printer.println("-------------------------------");
 printer.setTextDoubleWidth();
 printer.alignCenter();
 printer.println("Total");
 printer.alignRight();
 printer.println("Rs 500");
printer.cut();
printer.execute(err => {
    if (err) {
      console.error("Print failed", err);
    } else {

     console.log("Print done");
    }
} );

printerP.printDirect({
  data: printer.getBuffer(),
  type: 'RAW',
  success: function (id)
  {
      console.log("Printer ID: ", id)
  },
  error: function (err)
  {
      console.log(err)
  }
})


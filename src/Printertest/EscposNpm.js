const escpos = require('escpos');
 const device  = new escpos.Serial('COM1');
//const device = new escpos.USB(0x04b8, 0x0202);

const options = { encoding: "GB18030" /* default */ }
// encoding is optional

const p = escpos.USB.findPrinter();
console.log(p);
const printer = new escpos.Printer(device, options);
device.open(function(e){
  console.log("open function called", e);
  printer.text('Hello World');
  device.close();
});
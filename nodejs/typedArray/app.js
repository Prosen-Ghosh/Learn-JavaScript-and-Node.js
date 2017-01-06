var buf = new ArrayBuffer(8);// in byte 8, 8 bit  = 1 byte
var view = new Int32Array(buf);

// view will contain 32 bit + 32 bit data
view[0] = 15;
view[1] = 10;

console.log(view);

// this data will not show
view[2] = 20;
console.log(view);
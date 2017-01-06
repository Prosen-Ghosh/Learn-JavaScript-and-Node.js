var buf = new Buffer('Hello','utf8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[0]);

buf.write('Wo');
console.log(buf.toString());

console.log(buf.length);

for (var value of buf.values()) {
  console.log(value);
}
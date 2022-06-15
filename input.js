
const prompt = require('prompt-sync')();

let a={
    altitude:0,
    his:0,
    adi:0,
}

a.altitude = Number(prompt('enter altitude : '));
a.his = Number( prompt('enter his : '));
a.adi = Number(prompt('enter adi : '));

if(a.altitude>3000)a.altitude=3000;
else if(a.altitude<0)a.altitude=0;
 a.altitude=350-(a.altitude/10);

if(a.adi<0)a.adi=0;
else if(a.adi>100)a.adi=100;
a.adi=a.adi*3.6;



console.log(`altitude : ${a.altitude}`);
console.log(`his : ${a.his}`);
console.log(`adi : ${a.adi}`);
module.exports=a;
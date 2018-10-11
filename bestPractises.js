/*
//example 1
const orders = [500,30,99,15,223];
let total = 0;
let withTax = [];
let highValue = [];


//noobs 
for(i=0;i<orders.length;i++) {
    total += orders[i];
    withTax.push(orders[i]*1.1);
    if(orders[i]>100){
        highValue.push(orders[i]);
    }
}
for(i=0;i<highValue.length;i++)
    console.log(highValue[i]);

//pros
total = orders.reduce((acc,cur) => acc+ cur);
withTax = orders.map(v => v*1.1);
highValue = orders.filter(v =>v>100)

for(i=0;i<highValue.length;i++)
    console.log(highValue[i]);
*/

//example 2
const horse = {
    name: 'Thor',
    size: 'large',
    skills: ['joursting','racing'],
    age: 7
}

const {name, skills,size, age} = horse;

var bio = `${name} is a ${size} with ${age} with ${skills.join(' & ')}`;

console.log(bio);


code:
var a =process.argv.slice(2);
var free = [];
var repeat = [];
for(var i = 0; i < a.length; i++)
{
  if(free.includes(a[i]) && !repeat.includes(a[i]))
    repeat.push(a[i])
  else
    free.push(a[i]);
}
console.log('repeated elements are:'+repeat);


output:
 
 C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 9 1 2 1 4 3 2
repeated elements are:1,2

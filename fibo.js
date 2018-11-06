code:

function fib(n) {
  var array1=[0,1];
  for (var i=2; i <=n; i++) 
  {
    array1.push(array1[i-1] + array1[i-2]);
  }
  return array1;
}
var t=process.argv[2]-1;
console.log(fib(t));

output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 5
[ 0, 1, 1, 2, 3 ]


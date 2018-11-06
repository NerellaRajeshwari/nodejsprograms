code:

var i, num,fact;
f=1;
n=process.argv[2];
for(i=1; i<=n; i++)  
 {
   f= f*i;
 } 
console.log('factorial is:'+f);


output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 5
factorial is:120

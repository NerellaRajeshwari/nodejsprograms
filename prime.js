code:
var n=process.argv[2];
var array1=[];
for (i = 1; i <=n; i++)
  {
    count = 0;
     for (j = 1; j <= i; j++) 
       {
         if ((i % j)== 0)
         count++;
       }
       if (count == 2)
         array1.push(i);
  }
    console.log('prime nmbrs till '+n+' are:'+array1);
    
output:
C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 11
prime nmbrs till 11 are:2,3,5,7,11

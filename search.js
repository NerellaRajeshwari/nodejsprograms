code:
function Searching(a){
    var n= Number(a[2]);
    var flag=0;
    for(var i=1;i<a.length;i++)
    {
     if(Number(a[i])==n) 
     {
         flag=1;
         break;
     }
    }
    if(flag==1)
    {
     console.log('number exits');
     }
     else console.log('number doesnt exists');
  }
  Searching(process.argv.slice(2));
 
 
output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 1 2 5 4
number exits

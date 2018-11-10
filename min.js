code:
function Min(a){
   
    var min=Number(a[2]);
    for(var i=1;i<a.length;i++) 
    {
     if(a<min)
       min=Number(a[i]);
    }
    console.log(" Minimum element:",min);
  }
  Min(process.argv.slice(2));
 

output:


C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 7 9 5
 Minimum element: 5

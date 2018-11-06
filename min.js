code:
function Min(a){
    var flag=0;
    var min=Number(a[2]);
    for(var i=1;i<a.length;i++) 
    {
     var a=Number(a[i]);
     if(a<min)
       min=temp;
    }
    console.log(" Minimum element:",min);
  }
  Min(process.argv.slice(2));
 

output:


C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 7 9 5
 Minimum element: 5

code:
function Sorting(a)
{
  var l=a.length;
  for (var i=l-1; i>=0; i--)
  {
    for(var j = 1; j<=i; j++)
    {
      if(Number(a[j-1])>Number(a[j]))
       {
          var temp = Number(a[j-1]);
          a[j-1] =Number(a[j]);
          a[j] = temp;
       }
    }
  }
  return a;
}
console.log(Sorting(process.argv.slice(2)));

output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 9 1 5
[ 1, 5, 9 ]

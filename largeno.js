code:
function large(a)
      {
          var max=Number(a[0]);
          for(var i=1;i<a.length;i++)
          {
              if(a[i]>max)
                max=Number(a[i]);
          }
          return max;
      }
      var n=process.argv.slice(2);
      console.log(large(n));

output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 9 1 2 1 4 3 2
9

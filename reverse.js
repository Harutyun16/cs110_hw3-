
const reverse = function(arr)
{
let l = arr.length;
let arr1=[];

for (let i=l-1, j=0; j<l,i>=0;j++, i--)
{

arr1[i]=arr[j];

}
return arr1;
};
const reversedArray=reverse([1,2,3,4,5]);
 console.log(reversedArray);


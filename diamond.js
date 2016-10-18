const diamond = function(a) {

if(a%2 === 0) {  

a = a + 1;

}

let p=1;
let g="";
m=0;
l=a-2;
for( let i=0; i<(a+1)/2; i = i + 1)
{

	for (let j=i; j<(a-1)/2; j++)
	{
		g+=" ";
	} ;

	
	for(let k=1; k<=p;k++)

	{
		if (p<=a)
		{
			g+="*";
		}
	}
	p+=2;
	g=g+"\n";

}
for(let r=0; r<(a+1)/2-1; r++)
{
	for(let b=r; b<=m;b++)
	{
		g+=" ";
	}
	m+=2;

	for(let n=1; n<=l; n++)
	{
		if(l>=0)
		{
			g+="*";
		}


	}
	g+="\n";
	l-=2;
}

console.log(g);


};

diamond(16);

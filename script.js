function mincost(arr)
{ 
	let totalcost = 0;
	while (arr.length>1){
		arr.sort((a, b) => a - b);
		let first = arr[0];
		let second = arr[1];
		let newrope = first + second ;
		totalcost += newrope;
		arr.splice(0,2);
		arr.push(newrope);
	}
//write your code here
// return the min cost
  
}

module.exports=mincost;

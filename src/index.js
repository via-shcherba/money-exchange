// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let names = ["H","Q","D","N","P"];
	let coins = [ 50,25,10,5,1 ];
	let res = {};	//object
	if(currency >= 10000){
		res = {error: "You are rich, my friend! We don't have so much coins for exchange"}
	}else{	
		let counter = 1;
		let length = coins.length;
		for(let i=0; i<length; i++){
			if(currency >= coins[i]){ //control
				currency -= coins[i];	
				res[names[i]] = counter;								
				if(currency >= coins[i]){ //additional control
					i--; counter++;
				}else{
					counter = 1;  //reset
				}
			}
		}
	}		
	return res;
}

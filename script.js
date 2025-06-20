function makeid(l) {
  // write your code here
	let result = "";
	let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	for (let i = 0; i < l;i++ {
		result+= char_list.charAt(Math.floor(Math.random()*char_list.length));
	}
	return result;
}
		
	// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

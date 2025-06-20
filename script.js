function makeid(l) {
    let result = "";
    let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
        let randomIndex = Math.floor(Math.random() * char_list.length);
        result += char_list.charAt(randomIndex);
    }
    return result;
}
		
	// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

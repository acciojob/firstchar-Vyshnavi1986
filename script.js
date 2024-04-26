function firstChar(str) {
    // Loop through each character in the string
	str=str.trim();
    for (let i = 0; i < str.length; i++) {
        // Check if the character is not a space
        if (str[i] !== ' ') {
            // Return the first non-space character
            return str[i];
        }
    }
    // If the string contains only spaces, return an empty string
    return '';
}
// Do not change the code below

//const text = prompt("Enter text:");
alert(firstChar(text));

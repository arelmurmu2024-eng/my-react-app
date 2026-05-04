
//Generating password logic
function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-+";
    let characters = "";

    if(uppercase) characters += uppercaseChars;
    if(lowercase) characters += lowercaseChars;
    if(numbers) characters += numberChars;
    if(symbols) characters += symbolChars;
    let password = "";

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

export default generatePassword;

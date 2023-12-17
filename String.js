function manipulate(input, callback) {
    const manipulatedInput = input.toUpperCase();
    callback(manipulatedInput);
}

function logString(manipulatedInput) {
    console.log(`Manipulated String is: ${manipulatedInput}`);
}

manipulate("Hello! How are you", logString);

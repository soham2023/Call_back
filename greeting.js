function greetPerson(name) {
    return new Promise((resolve, reject) => {
        if (typeof name === 'string') {
            resolve(`Hello, ${name}!`);
        } else {
            reject('Invalid input. Please provide a valid name.');
        }
    });
}


const personName = "Mithun";

greetPerson(personName)
    .then((greeting) => {
        console.log(greeting); 
    })
    .catch((error) => {
        console.error(error.message);
    });

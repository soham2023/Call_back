const person = {
    firstname: "Soham",
    lastName: "Bhunia",
    age: 22
};

function days(personObjet, callback) {
    const fullname = `${personObjet.firstname} ${personObjet.lastName}`;
    const ageInDays = personObjet.age * 365;
    callback(fullname, ageInDays);
}

function logResult(fullname, days) {
    console.log(`The person's full name is ${fullname} and their age in days is ${days}`);
}

days(person, logResult);

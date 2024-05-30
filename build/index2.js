/*
    2. Необходимо исправить ошибки TS
*/
 const persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
 function isAdmin(person) {
    return person.type === 'admin';
}
 function isUser(person) {
    return person.type === 'user';
}
 function logPerson(person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
persons.forEach(person => {
    logPerson(person);
});
//------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=index2.js.map
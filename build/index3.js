/* +-
    3. Необходимо описать тип PowerUser (121 строка), который имеет все поля интерфейсов User и Admin (кроме поля type),
    а также имеет поле type со значение "powerUser" (копирование кода запрещено)
*/
 const persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer'
    }
];
persons.forEach(person => {
    console.log(person);
});
//------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=index3.js.map
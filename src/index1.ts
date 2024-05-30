/* 
   1. Необходимо описать тип Person для того чтобы использовать его в массиве persons и функции logPerson 
 */
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

// export type Person = User | Admin;
export type Person = {
    name: string;
    age: number;
    occupation?: string;
    role?: string
}

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);


//------------------------------------------------------------------------------------------------------------
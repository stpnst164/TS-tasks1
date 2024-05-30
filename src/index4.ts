/* ?+-
    4. Необходимо удалить типы AdminsApiResponse и UsersApiResponse, и использовать вместо них тип ApiResponse с обобщенным типом
*/
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = {
    status: 'success' | 'error';
    data?: T[];
    error?: string;
};

export function requestAdmins(callback: (response: ApiResponse<Admin>) => void) {
    callback({
        status: 'success',
        data: admins
    });
}
export function requestUsers(callback: (response: ApiResponse<User>) => void) {
    callback({
        status: 'success',
        data: users
    });
}

requestAdmins((response) => {
    if (response.status === 'success') {
        console.log(response.data);
    } else {
        console.error(response.error);
    }
});

requestUsers((response) => {
    if (response.status === 'success') {
        console.log(response.data);
    } else {
        console.error(response.error);
    }
});
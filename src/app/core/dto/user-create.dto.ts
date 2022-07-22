export class UserCreateDto {   
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    "roles": [
        "admin"
      ];

    constructor() {
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.password = ''
    }
}
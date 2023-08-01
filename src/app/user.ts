
enum Role {
    ROLE_ADMIN,
    ROLE_USER
}

export class User {
    username!: String;
    password!: String;
    roles!: Role;
    token!: String;
}

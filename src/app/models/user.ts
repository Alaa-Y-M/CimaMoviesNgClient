export class Users {
    id: string=null!;
    userName: string=null!;
    normalizedUserName: string=null!;
    email: string=null!;
    normalizedEmail: string=null!;
    emailConfirmed: boolean=false;
    passwordHash: string=null!;
    securityStamp: string=null!;
    concurrencyStamp: string=null!;
    phoneNumber: string=null!;
    phoneNumberConfirmed: boolean=false;
    twoFactorEnabled: boolean=false;
    lockoutEnd: Date=null!;
    lockoutEnabled: boolean=false;
    accessFailedCount: number=null!;
}

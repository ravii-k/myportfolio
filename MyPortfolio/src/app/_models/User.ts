export class User {
  constructor(private email: string, private password: string) {}
  public get uemail() {
    return this.email;
  }
  public set uemail(email: string) {
    this.email = email;
  }
  public get upassword() {
    return this.password;
  }
  public set upassword(password: string) {
    this.password = password;
  }
}

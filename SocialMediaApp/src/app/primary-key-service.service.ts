import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimaryKeyServiceService {

  userPrimaryKey: string = '';
  emailId: string = '';
  isAdmin:boolean = false;
  isNameError:boolean = true; isEmailError:boolean = true; isPasswordError: boolean = true;passwordMatchError: boolean = true;

  constructor() { }

  setPrimaryKey(value: string) {
    this.userPrimaryKey = value;
  }

  setNameError() {
    this.isNameError = false;
  }

  setEmailError() {
    this.isEmailError = false;
  }

  setPasswordError() {
    this.isPasswordError = false;
  }

  setPasswordMatchError() {
    this.passwordMatchError = false;
  }

  getPrimaryKey() {
    return this.userPrimaryKey;
  }

  setEmailId(value: string) {
    this.emailId = value;
  }

  getEmailId() {
    return this.emailId;
  }

  setIsAdmin(value: boolean) {
    this.isAdmin = value;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  isRegistrationFormValid() {
    return this.isNameError || this.isPasswordError || this.passwordMatchError || this.isEmailError;
  }

}

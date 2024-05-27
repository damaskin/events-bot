import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/user.interface";

const PATH = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user!: IUser;

}

import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export interface UserModel extends Base {}

export class UserModel extends TimeStamps{

  @prop({ minlength: 2 })
  firstName: string

  @prop({ minlength: 2 })
  lastName: string

  @prop({ unique: true })
  email: string

  @prop({ minlength: 6 })
  password: string
}

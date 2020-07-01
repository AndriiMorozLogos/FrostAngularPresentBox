import {OrdersModel} from "../../main/models/Orders.model";

export interface UserModel {
  id: number;
  email?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  orders: OrdersModel[];
}

import {UserModel} from "../../user/models/User.model";

export interface OrdersModel {
  id: number;
  description: string;
  isAvalible: string;
  name: string;
  photoUrl: string;
  priceInUah: string;
  status: string;
  buyer: UserModel;
}

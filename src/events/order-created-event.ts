import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
   subject: Subjects.OrderCreated;

   data: {
      it: string;
      status: OrderStatus;
      userId: string;
      expiresAt: string;
      ticket: {
         id: string;
         price: number;
      }
   }
}
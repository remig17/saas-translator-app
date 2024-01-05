import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import Stripe from "stripe";

export interface Subscription {
  id?: string;
  /**
   * Set of key-value pairs that you can attach to an object
   *This can be useful to store additional information about the object in a structured format
   */
  metadata: { [name: string]: string };
  stripeLink: string;
  role: string | null;
  quantity: number;
  items: Stripe.SubscriptionItem[];
  /**
   * Firestore reference to the product doc for this subscription
   */
  product: DocumentReference<DocumentData>;
  /**
   * Firestore reference to the price doc for this subscription
   */
  price: DocumentReference<DocumentData>;
  /**
   * array of prices references
   */
  prices: Array<DocumentReference<DocumentData>>;
  payment_method?: string;
  latest_invoice?: string;

  /**
   * The status of the subscription object
   */
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "icomplete_expired"
    | "past_due"
    | "trialing"
    | "unpaid";

  canceled_at_period_end: boolean;
  created: Timestamp;
  current_period_start: Timestamp;
  current_period_end: Timestamp;
  ended_at: Timestamp | null;
  cancel_at: Timestamp | null;
  canceled_at: Timestamp | null;
  trial_start: Timestamp | null;
  trial_end: Timestamp | null;
}

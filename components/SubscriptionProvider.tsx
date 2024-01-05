"use client";
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session) return;

    return onSnapshot(
      subscriptionRef(session?.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          console.log("User has no subscription");
          // set no subscription
          setSubscription(null);
          return;
        } else {
          console.log("User has subscription");
          setSubscription(snapshot.docs[0].data());

          // set subscription
        }
      },
      (error) => {
        console.log("error getting the document", error);
      }
    );
  }, [session, setSubscription]);

  return <>{children}</>;
}

export default SubscriptionProvider;

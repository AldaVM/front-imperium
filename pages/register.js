import Register from "../src/componets/Register";
import TimetableProvider from "../src/providers/TimetableProvider";
import PaymentProvider from "../src/providers/PaymentProvider";

export default function Home() {
  return (
    <TimetableProvider>
      <PaymentProvider>
        <Register />
      </PaymentProvider>
    </TimetableProvider>
  );
}

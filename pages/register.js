import Register from "../src/componets/Register";
import TimetableProvider from "../src/providers/TimetableProvider";
import PaymentProvider from "../src/providers/PaymentProvider";
import withPrivateRoute from "../src/hoc/withPrivateRoute";

function Home() {
  return (
    <TimetableProvider>
      <PaymentProvider>
        <Register />
      </PaymentProvider>
    </TimetableProvider>
  );
}

export default withPrivateRoute(Home);

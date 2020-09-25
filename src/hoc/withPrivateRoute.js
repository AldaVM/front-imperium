const { useContext, useEffect } = require("react");
import { useRouter } from "next/router";
import CustomerContext from "../contexts/CustomerContext";

const withPrivateRoute = (Component) => {
  return (props) => {
    const { customer } = useContext(CustomerContext);
    const router = useRouter();

    useEffect(() => {
      if (!customer._id) {
        router.replace("/");
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withPrivateRoute;

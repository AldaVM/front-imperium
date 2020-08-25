import { useEffect, useContext } from "react";
import FormIndex from "../forms/FormIndex";
import { useRouter } from "next/router";
import { HomeWrapper } from "./styled";
import Logo from "../shared/Logo";
import CustomerContext from "../../contexts/CustomerContext";

export default function Home() {
  const router = useRouter();

  const { customer } = useContext(CustomerContext);

  if (customer._id) {
    router.push("/register");
  }

  useEffect(() => {
    router.prefetch("/register");
  }, []);

  return (
    <HomeWrapper>
      <Logo
        srcImg="/logo.png"
        descriptionImg="Logo Supay Imperium Cross"
        maxWidth="300px"
      />
      <h1>Ingresa tu número de DNI</h1>
      <FormIndex />
    </HomeWrapper>
  );
}

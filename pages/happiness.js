import { HomeWrapper } from "../src/componets/Home/styled";
import { StepperHeader } from "../src/componets/shared/StepperTitle/styled";
import Logo from "../src/componets/shared/Logo";
import { useContext } from "react";
import CustomerContext from "../src/contexts/CustomerContext";

export default function HappinessPage() {
  const { customer } = useContext(CustomerContext);

  return (
    <HomeWrapper>
      <Logo
        srcImg="/logo.png"
        descriptionImg="Logo Supay Imperium Cross"
        maxWidth="200px"
      />
      <StepperHeader>
        <h1>
          ¡Te damos la bienvenida a nuestra Familia,{" "}
          <em style={{ color: "var(--colorPrimary)" }}>{customer?.names}</em>!
        </h1>
        <span style={{ lineHeight: "1.5" }}>
          Nos estaremos comunicando contigo para coordinar el proceso de pago 👍
        </span>
      </StepperHeader>
    </HomeWrapper>
  );
}

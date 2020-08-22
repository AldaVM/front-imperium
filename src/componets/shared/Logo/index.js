import { LogoContainer } from "./styled"

export default function Logo(
  {
    srcImg,
    descriptionImg,
    maxWidth
  }
) {
  return (
    <LogoContainer maxWidth={maxWidth}>
      <img src={srcImg} alt={descriptionImg} />
    </LogoContainer>
  )
}
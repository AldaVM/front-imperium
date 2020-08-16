import FooterSite from "../../componets/sections/Footer"

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <FooterSite />
    </>
  )
}


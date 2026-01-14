import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import tw from "twin.macro";

import { Footer as FooterMain } from "@/components/layout/Footer/Footer";
import { Navbar as NavbarMain } from "@/components/layout/Navbar/Navbar";

const Layout = styled.div({
  ...tw`grid min-h-screen`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateAreas: `
    "navbar"
    "main"
    "footer"
  `,
});

const Navbar = styled(NavbarMain)`
  grid-area: navbar;
`;

const Main = styled.main`
  grid-area: main;
`;

const Footer = styled(FooterMain)`
  grid-area: footer;
`;

function AppRoot() {
  return (
    <Layout>
      <Navbar />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Layout>
  );
}

export default AppRoot;

import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar/NavBar";
import { SessionCard } from "../../components/SessionCard/SessionCard";
import * as DL from "./Default.layout.styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
};

export function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent>
          {props.children}
        </DL.FeaturedContent>
        <DL.Aside>
          <SessionCard
            name="Dona Maria"
            description="Confeiteira"
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

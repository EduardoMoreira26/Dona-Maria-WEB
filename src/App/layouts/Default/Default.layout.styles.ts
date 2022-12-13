import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 214px 680px 214px;
  gap: 16px;
`;

export const Navigation = styled.nav`
  display: flex;
  padding-right: 50px;
  margin-top: 40px;
  justify-content: flex-end;
`;

export const Aside = styled.aside`
  margin: 40px 40px 40px 0;
`;

export const FeaturedContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 32px;
`;

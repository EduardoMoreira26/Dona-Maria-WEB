import { NavLink } from 'react-router-dom';
import * as NB from './NavBar.styles'

export default function NavBar () {
  return <>
    <NB.List>
      <NB.Item><NavLink to="/">início</NavLink></NB.Item>
      <NB.Item><NavLink to="/forms">formulários</NavLink></NB.Item>
      <NB.Item><NavLink to="/form/create">criar formulário</NavLink></NB.Item>
    </NB.List>
  </>
}

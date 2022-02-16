import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserStatusPage from './pages/UserStatusPage.js';

function App() {
  return (
    <div>
      <nav>
        <LinkButton to="/">User status</LinkButton>
        <LinkButton to="/ships">Available ships</LinkButton>
        <LinkButton to="/market">Marketplace</LinkButton>
      </nav>
      <Routes>
        <Route path="/" element={<UserStatusPage />} />
        <Route path="/ships" element={<div>Available ships</div>} />
        <Route path="/market" element={<div>Marketplace</div>} />
      </Routes>
    </div>
  );
}

const LinkButton = styled(NavLink)`
  padding: 4px 12px;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: #eee;
  text-decoration: none;
  color: #333;

  &.active {
    background-color: hotpink;
  }
`;

export default App;

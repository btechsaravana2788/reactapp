import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { useAppContext } from './context/AppContext';

const AppShell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => (theme === 'dark' ? '#0f172a' : '#f6f7fb')};
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#1a1f2b')};
`;

const Header = styled.header`
  background: ${({ theme }) => (theme === 'dark' ? '#020617' : '#ffffff')};
  border-bottom: 1px solid rgba(100, 116, 139, 0.15);
  box-shadow: 0 1px 12px rgba(15, 23, 42, 0.06);
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1220px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  font-weight: 700;
  letter-spacing: -0.03em;
  color: inherit;
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ThemeButton = styled.button`
  border: none;
  padding: 10px 16px;
  border-radius: 999px;
  background: ${({ theme }) => (theme === 'dark' ? '#334155' : '#e2e8f0')};
  color: inherit;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => (theme === 'dark' ? '#475569' : '#cbd5e1')};
  }
`;

function App() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <AppShell theme={theme}>
      <Header theme={theme}>
        <HeaderInner>
          <Logo to="/">Clothify</Logo>
          <Controls>
            <ThemeButton theme={theme} onClick={toggleTheme}>
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </ThemeButton>
          </Controls>
        </HeaderInner>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </AppShell>
  );
}

export default App;

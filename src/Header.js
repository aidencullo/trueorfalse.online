import Logo from './components/Logo';
import Metrics from './components/Metrics';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <Metrics />
      </div>
    </header>
  );
}

export default Header; 
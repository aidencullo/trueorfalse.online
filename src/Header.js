import VisitCounter from './VisitCounter';
import CorrectCounter from './CorrectCounter';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/favicon.ico" alt="Favicon" style={{ width: '24px', height: '24px' }} />
        </div>
        <div className="counters-container">
          <VisitCounter />
          <CorrectCounter />
        </div>
      </div>
    </header>
  );
}

export default Header; 
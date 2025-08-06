import VisitCounter from './VisitCounter';
import CorrectCounter from './CorrectCounter';
import IncorrectCounter from './IncorrectCounter';
import { useAppContext } from './context/AppContext';

function Header() {
  const { state } = useAppContext();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/favicon.ico" alt="Favicon" style={{ width: '24px', height: '24px' }} />
        </div>
        {!state.loading && (
          <div className="counters-container">
            <VisitCounter />
            <CorrectCounter />
            <IncorrectCounter />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header; 
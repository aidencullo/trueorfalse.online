function Footer() {
  return (
    <footer className="footer">
      © 2025 Random Quote Generator - Powered by{' '}
      <a 
        href="https://dummyjson.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'underline' }}
      >
        DummyJSON API
      </a>
    </footer>
  );
}

export default Footer; 
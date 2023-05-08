import { Navbar, Home, Statistics, Contract, Billing, Business, CTA, Testimonials, Cleints, Footer } from './components';
import './index.css'
import { styles } from './util/styles';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Cleints />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
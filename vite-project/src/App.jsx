import React, { useState } from 'react'; // Import useState
import './App.css';
import Navbar from './com/Navbar'; // Ensure the path is correct
import Sec_1 from './com/Sec_1';
import Sec_2 from './com/Sec_2';
import Sec_3 from './com/Section_3';
import Sec_4 from './com/Sect_4';
import FAQSection from './com/FAQSection';
import Footer from './com/Footer';
import PartnerForm from './com/Partner';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSaaSClick = () => {
    setShowForm(true); // Show the form
  };

  return (
    <>
      {showForm ? (
        <>
        <Navbar/>
          <PartnerForm />
          <FAQSection />
          <Footer/>
          
          // Show only the PartnerForm
          </>
      ) : (
        <div className='App'>
          <Navbar onSaaSClick={handleSaaSClick} />
          <Sec_1 />
          <Sec_2 />
          <Sec_3 />
          <Sec_4 />
          <FAQSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

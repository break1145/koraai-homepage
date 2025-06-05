
import Home from './components/Home'
import AiJob from './components/AiJob.jsx'
import Community from './components/Community.jsx'
import HireFeatures from './components/HireFeatures.jsx'
import HumanData from './components/HumanData.jsx'
import IconShowcase from './components/IconShowcase.jsx'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
        <Home/>
        <AiJob/>
        <Community/>
        <HireFeatures/>
        <HumanData/>
        <IconShowcase/>
        <Footer />
    </div>
  );
}

export default App

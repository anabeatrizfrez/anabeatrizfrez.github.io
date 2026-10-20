import { SpotlightCursor } from "../components/animations/SpotlightCursor";
import Header from "../pages/Header";
import Main from "../pages/Main";
import Footer from "../pages/Footer";

function App() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <Header />
      <Main />
      <Footer />

      <SpotlightCursor color="#fffbeb" size={250} blur={80} opacity={0.1} />
    </div>
  );
}

export default App;
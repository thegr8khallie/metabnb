import ConnectWalletModal from "./utils/ConnectWalletModal";
import { Footer, Hero, Inspiration, MetaNFTs, Nav } from "./components";
import "./scss/style.scss";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Inspiration />
      <MetaNFTs />
      <Footer />
      <ConnectWalletModal />
    </div>
  );
}

export default App;

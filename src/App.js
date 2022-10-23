import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your Own Store of Nifty NFT. Start Selling 
      & Growing"
        description="Buy, Store, collect NFTS exhange & earn crypto. Join 25+ million people using ProNef MarketPlace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface marketPlace"
        description="Experience a Buttery UI of ProNef NFT marketplace.
        Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices.
        You can easily get your app in your hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains 2 screens. One to list all the NFT's and the other shows the details of the specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div
        className="px-4 py-2 justify-center items-center bg-primary
      flex-col text-center banner04"
      >
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with Love by <span className="bold">Aakkash</span>
        </p>
      </div>
    </>
  );
};

export default App;

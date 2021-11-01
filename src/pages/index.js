import * as React from "react";
import interiorImage from "../images/photo1.png";
import designerImage from "../images/photo2.png";
import {
  outerDiv,
  navStyle,
  divHomeName,
  pHome,
  divNavButtons,
  pNavButton,
  pMobileMenu,
  divMobileMenu,
  mainStyle,
  divAbout,
  pTitle,
  pAbout,
  pReadMore,
  divDemo,
  imgDemo,
  divDesignerOuter,
  divDesignerInner,
  imgDesigner,
  divDesignerInfo,
  pDesignerName,
  pDesignerTitle,
  pDesignInfo,
  footerStyle,
  pFooter,
  focused
} from "./index.module.css";
import {useState} from "react";

const Index = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <div className={outerDiv}>
      <nav className={navStyle}>
        <div className={divHomeName}>
          <p className={pHome}>This Interior</p>
        </div>
        <div className={divNavButtons}>
          <p className={`${pNavButton} ${focused}`}>Home</p>
          <p className={pNavButton}>Collection</p>
          <p className={pNavButton}>About</p>
          <p className={pNavButton}>Contact</p>
        </div>
        <span
          className={`material-icons ${pMobileMenu}`}
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
          {mobileMenuVisible ? "close" : "menu"}
        </span>
      </nav>
      <main className={mainStyle}>
        <div className={divAbout}>
          <p className={pTitle}>Modern interior</p>
          <p className={pAbout}>A full-Service residential & commercial interior design and staging company offering
            professional
            organizing & eco-services.</p>
          <p className={pReadMore}>Read more&nbsp;&nbsp;&nbsp;<span className={"material-icons"}>trending_flat</span>
          </p>
        </div>
        <div className={divDemo}>
          <img src={interiorImage} alt={"Room"} className={imgDemo}/>
          <div className={divDesignerOuter}>
            <div className={divDesignerInner}>
              <img src={designerImage} alt={"Designer"} className={imgDesigner}/>
              <div className={divDesignerInfo}>
                <p className={pDesignerName}>Aliza Webber</p>
                <p className={pDesignerTitle}>Interior designer</p>
              </div>
            </div>
            <p className={pDesignInfo}>Designed in 2020 by Aliza Webber</p>
          </div>
        </div>
      </main>
      <footer className={footerStyle}>
        <p className={pFooter}>created by pranav0281999 - devChallenges.io</p>
      </footer>

      <div
        className={divMobileMenu}
        style={mobileMenuVisible ? {} : {display: "none"}}
      >
        <p className={`${pNavButton} ${focused}`}>Home</p>
        <p className={pNavButton}>Collection</p>
        <p className={pNavButton}>About</p>
        <p className={pNavButton}>Contact</p>
      </div>
    </div>
  );
}

export default Index;

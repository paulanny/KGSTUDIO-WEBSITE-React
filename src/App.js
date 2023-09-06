import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Team from "./Components/Team";
import WhatWeDo from "./Components/WhatWeDo";
import Illustratorimg from "./assets/analysis.png";
import TeamImg from "./assets/pee.jpeg";
import Divider from "./Components/Divider";
import ImgSlider from "./Components/ImgSlider";


function App() {
  return (
    <div className="App">
      <div className="navhero">
      <NavBar />
      <Hero />
      </div>
      <Divider /> 
      {/* <Card> */}
       <WhatWeDo
        title="Logo Design"
        description="Logo design involves creating a 
        visually appealing and memorable symbol that 
        represents a brand's identity. It's a crucial
         element as it's often the first thing people 
         notice and associate with the brand. 
         A well-designed logo encapsulates the brand's 
         essence and values in a simple yet impactful way."
        imageUrl={Illustratorimg}
        alt="illustratorimg"
       />
       <WhatWeDo
        title="Digital Design"
        description="Digital design focuses on creating graphics tailored for
         online platforms. 
         This includes designing engaging visuals for websites, 
         social media posts, banners, and digital advertisements.
         Digital design ensures that the brand's online presence is visually 
         consistent and resonates effectively with the digital audience. 
           "
        imageUrl={Illustratorimg}
        alt="illustratorimg"
      />
      <WhatWeDo
        title="Packaging Design"
        description="Packaging design goes beyond aesthetics; it's about creating a compelling 
        visual experience for consumers. 
        Effective packaging design communicates product information,
         brand identity, and even emotions. It aims to capture attention on crowded shelves and 
         leave a lasting impression on buyers."
        imageUrl={Illustratorimg}
        alt="illustratorimg"
      />

      <WhatWeDo
        title="Branding Guidelines"
        description="Branding guidelines, also known as style guides, establish rules for using a 
        brand's visual elements consistently. They cover details like logo usage, color codes, 
        typography, and spacing. 
        These guidelines ensure that anyone using the brand's visuals, whether in-house or externally,
         maintains the brand's integrity and identity."
        imageUrl={Illustratorimg}
        alt="illustratorimg"
      />

      <WhatWeDo
        title="Branding Guidelines"
        description="Branding guidelines, also known as style guides, establish rules for using a 
        brand's visual elements consistently. They cover details like logo usage, color codes, 
        typography, and spacing. 
        These guidelines ensure that anyone using the brand's visuals, whether in-house or externally,
         maintains the brand's integrity and identity."
        imageUrl={Illustratorimg}
        alt="illustratorimg"
      />

      <WhatWeDo
        title="Branding Guidelines"
        description="Branding guidelines, also known as style guides, establish rules for using a 
        brand's visual elements consistently. They cover details like logo usage, color codes, 
        typography, and spacing. 
        These guidelines ensure that anyone using the brand's visuals, whether in-house or externally,
         maintains the brand's integrity and identity."
        imageUrl={Illustratorimg}
        alt="illustratorimg"
      />

      {/* <Card> */}
      <div className="Team-cards">
        <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Paul is a boy"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        />
       {/* </Card>

      //   <Card> */}
         <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Paul is a boy"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        /> 
        {/* </Card>

       <Card> */}
       <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Paul is a boy"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        /> 
        {/* </Card>

       <Card> */}
        <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Paul is a boy"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        /> 

       <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Paul is a boy"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        />

       <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Paul is a boy"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        />
       </div>  
      {/* </Card> */}
      {/* </Card> */}
      <ImgSlider />
    </div>
    
  );
}

export default App;

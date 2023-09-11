import { useState } from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Team from "./Components/Team";
import WhatWeDo from "./Components/WhatWeDo";
import Illustratorimg from "./assets/analysis.png";
import TeamImg from "./assets/pee.jpeg";
import Divider from "./Components/Divider";
import ImgSlider from "./Components/ImgSlider";
import TextsCom from "./Components/TextsCom";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import Backdrop from "./Components/BackDrop";



const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [error, setError] = useState(null);

  

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  async function submitHandler(formData) {
    try {
      // Set the loading state to true
      setLoading(true);
  
      const response = await fetch('https://kaapit-wesite-default-rtdb.firebaseio.com/designs.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to send data to Firebase REST API');
      }

      console.log('Data sent to Firebase REST API successfully!');
      setShowSuccessMessage(true);

      setTimeout(()=>{
        setShowSuccessMessage(false);
      }, 3000);
  } catch (error) {
    console.error('Error sending data to Firebase REST API:', error);
    // Optionally, display an error message to the user
  } finally {
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
    
    closeModal();
  }
}

  return (
    <div className="App">
      <Modal show={modalIsOpen} closed={closeModal} submitHandler={submitHandler} loading={loading} showSuccessMessage={showSuccessMessage}/>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Your design has been booked successfully. Our team will get in touch with you shortly.</p>
        </div>)}
      <Backdrop show={modalIsOpen} closed={closeModal}  submitHandler={submitHandler} />
      <div className="navhero">
      <NavBar showModal={showModal}  submitHandler={submitHandler}/>
      <Hero showModal={showModal}  submitHandler={submitHandler}/>
      </div>
      <Divider />
      <TextsCom
      className="teamtxtP"
        id="team"
        description="What we can help with"
        title="OUR SERVICES"
        /> 
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
      <ImgSlider showModal={showModal}/>
      <div className="Team-cards">
      <TextsCom
      className="teamtxt"
        id="team"
        description="The Team Behind the Scene"
        title="MEET OUR TEAM"
        />
        <div className="flexdiv">
        <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Executive Officer"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        />
         <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Director"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        /> 
       <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Manager"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        /> 
        </div>
       <div className="flexdiv">
        <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Director"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        /> 

       <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Design TeamLead"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        />

       <Team
          image={TeamImg}
          name="Animashaun Paul"
          description="Marketing Officer"
          email="example@example.com"
          twitter="https://twitter.com/yourTwitterHandle"
          instagram="https://instagram.com/yourInstagramHandle"
        />
        </div>
       </div>  
       
       <Divider />
       <Footer />
      
    </div>
    
  );
}

export default App;

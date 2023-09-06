import DividerImg from '../assets/divider.png';
import './Divider.css';
const Divider = () => {
  return (
    <div className='dividercomp'>
      <img src={DividerImg} />
      <h1 className='oservice'>Our Services</h1>
      {/* <h1>Our Services</h1> */}
    </div>
  );
};

export default Divider;
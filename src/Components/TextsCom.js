import './Texts.css';

const TextsCom = (props) => {
 
  return (
    <div className='textscompo' id= {props.id}> 
      <p  data-aos="fade-right" className={props.className}>{props.description}</p>
      <p data-aos="fade-right" className='pinkytext' >{props.title}</p>
    </div>
  )
};

export default TextsCom;

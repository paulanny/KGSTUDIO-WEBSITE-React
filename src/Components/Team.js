import "./Team.css";
import gmailIcon from "../assets/gmail.svg";

const Team = (props) => {
  return (
    <div className="Team-card">
        <div className="teamImg">
      <img src={props.image} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>

      <div className="contact">
        <a href={`mailto:${props.email}`}>
          <img src={gmailIcon} alt="Instagram" />
        </a>
        <a href={props.twitter}>
          <img src={gmailIcon} alt="Instagram" />
        </a>
        <a href={props.instagram}>
          <img src={gmailIcon} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Team;

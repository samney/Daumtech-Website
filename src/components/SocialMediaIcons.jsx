import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = ({ color = "text-white" }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <a
        className={`m-1 p-0 flex items-center ${color}`}
        href="https://www.linkedin.com/company/daumtech/"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a
        className={`m-1 p-0 flex items-center ${color}`}
        href="https://web.facebook.com/people/DAUMTech/61558622970368/"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

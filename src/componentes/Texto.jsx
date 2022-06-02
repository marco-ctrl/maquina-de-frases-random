import { FaQuoteLeft } from "react-icons/fa";

function Texto({ texto }) {
    return (
      <div className="quote-text">
      <FaQuoteLeft className="fa fa-quote-left" /> <span id="text">{ texto }</span>
    </div>
    );
  }

export default Texto;
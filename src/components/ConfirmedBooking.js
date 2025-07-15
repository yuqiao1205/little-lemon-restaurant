import React from "react";

// export default function ConfirmedBooking() {
//   return (
//     <div className="confirm">
//       <div>
//         <h1>
//           Booking has been <span>Confirmed!</span>
//         </h1>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom"; // needed for navigation
import { FaCheckCircle } from "react-icons/fa"; // import check mark icon

export default function ConfirmedBooking() {
  return (
    <div className="confirmation-page">
      <h1 className="confirmation-title">
        Booking Confirmed{" "}
        <FaCheckCircle
          style={{ color: "green", verticalAlign: "middle", marginLeft: "8px" }}
        />
      </h1>
      <p className="confirmation-subtitle">We look forward to seeing you!</p>
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
}

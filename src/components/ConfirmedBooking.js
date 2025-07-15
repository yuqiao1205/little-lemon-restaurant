import { Link, useLocation } from "react-router-dom"; // needed for navigation
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaGift,
} from "react-icons/fa";

export default function ConfirmedBooking() {
  const location = useLocation();
  const bookingData = location.state;

  // Generate a random confirmation number
  const confirmationNumber = Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase();

  // Format the date for better display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format time for better display
  const formatTime = (timeString) => {
    if (!timeString) return "N/A";
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <FaCheckCircle className="confirmation-icon" />
          <h1 className="confirmation-title">Booking Confirmed!</h1>
          <p className="confirmation-subtitle">
            We look forward to seeing you!
          </p>
        </div>

        {bookingData ? (
          <div className="booking-details-card">
            <h2 className="details-title">Reservation Details</h2>
            <div className="confirmation-number">
              <strong>Confirmation #: {confirmationNumber}</strong>
            </div>

            <div className="booking-info">
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Date</span>
                  <span className="info-value">
                    {formatDate(bookingData.date)}
                  </span>
                </div>
              </div>

              <div className="info-item">
                <FaClock className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Time</span>
                  <span className="info-value">
                    {formatTime(bookingData.time)}
                  </span>
                </div>
              </div>

              <div className="info-item">
                <FaUsers className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Party Size</span>
                  <span className="info-value">
                    {bookingData.guests}{" "}
                    {bookingData.guests === 1 ? "Guest" : "Guests"}
                  </span>
                </div>
              </div>

              <div className="info-item">
                <FaGift className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Occasion</span>
                  <span className="info-value">{bookingData.occasion}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-booking-data">
            <p>No booking information available.</p>
          </div>
        )}

        <div className="restaurant-info">
          <h3>Little Lemon Restaurant</h3>
          <p>123 Mediterranean Ave, Chicago, IL 60601</p>
          <p>Phone: (312) 555-0123</p>
          <p>Email: reservations@littlelemon.com</p>
        </div>

        <div className="next-steps">
          <h3>What's Next?</h3>
          <ul>
            <li>You'll receive a confirmation email shortly</li>
            <li>Please arrive 10 minutes before your reservation time</li>
            <li>
              If you need to modify or cancel, call us at least 2 hours in
              advance
            </li>
          </ul>
        </div>

        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

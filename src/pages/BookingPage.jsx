import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const passedService = location.state;

  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  // Load passed service and locations
  useEffect(() => {
    if (passedService) {
      setSelectedTreatment({
        name: passedService.title,
        duration: passedService.duration,
        price: passedService.price,
        imageUrl: passedService.images?.[0] || '',
      });
    }

    // Fetch location data dynamically from public folder
    fetch('/data/location.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch locations');
        return res.json();
      })
      .then((data) => setLocations(data))
      .catch((err) =>
        console.error('Error loading location data:', err)
      );
  }, [passedService]);

  const formattedDateTime = () => {
    if (bookingDate && bookingTime) {
      return `${bookingDate} at ${bookingTime}`;
    }
    return '--';
  };

  const handleConfirmBooking = () => {
    if (!selectedTreatment || !bookingDate || !bookingTime || !selectedLocation) {
      alert('Please select a date, time, and location to confirm booking.');
      return;
    }

    const booking = {
      ...selectedTreatment,
      date: bookingDate,
      time: bookingTime,
      location: selectedLocation,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(booking);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Booking confirmed!');
    navigate('/cart'); // Change if your cart route differs
  };

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 p-4 md:p-8 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Book Now</h1>
          <p className="text-lg mt-2">
            A few simple steps to begin your journey of well-being.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow space-y-6">
            {/* Treatment */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Treatment</h2>
              <p className="text-lg font-medium">{selectedTreatment?.name || '--'}</p>
            </div>

            {/* Date & Time */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="date"
                  className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                />
                <input
                  type="time"
                  className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                />
              </div>
            </div>

            {/* Location Dropdown */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Location</h2>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
              >
                <option value="">-- Select a location --</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Summary + Confirm Button */}
          <div className="p-6 lg:sticky top-8 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow space-y-6">
            <h3 className="text-2xl font-bold mb-4 border-b pb-3">Your Booking</h3>
            <div className="space-y-4">
              <div className="h-40 sm:h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                {selectedTreatment ? (
                  <img
                    src={selectedTreatment.imageUrl}
                    alt={selectedTreatment.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-gray-400">Select a treatment</p>
                )}
              </div>

              <div>
                <p className="text-sm font-medium">TREATMENT</p>
                <p className="text-lg font-semibold">{selectedTreatment?.name || '--'}</p>
              </div>

              <div>
                <p className="text-sm font-medium">DATE & TIME</p>
                <p className="text-lg font-semibold">{formattedDateTime()}</p>
              </div>

              <div>
                <p className="text-sm font-medium">LOCATION</p>
                <p className="text-lg font-semibold">{selectedLocation || '--'}</p>
              </div>

              <div>
                <p className="text-sm font-medium">DURATION</p>
                <p className="text-lg font-semibold">
                  {selectedTreatment ? `${selectedTreatment.duration} ` : '--'}
                </p>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium">ESTIMATED PRICE</p>
                <p className="text-3xl font-bold">
                  {selectedTreatment ? `${selectedTreatment.price}` : '--'}
                </p>
              </div>

              <button
                onClick={handleConfirmBooking}
                className="w-full mt-6 py-3 bg-green-600 text-white text-lg rounded hover:bg-green-700 transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookingPage;

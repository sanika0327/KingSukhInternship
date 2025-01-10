import "./App.css";
import {
  FaShieldAlt,
  FaClock,
  FaUtensils,
  FaBook,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [counterOn, setCounterOn] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Typically, you would send the data to your server here
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const images = [
    "/baranti.webp",
    "/ayodhya (1).webp",
    "/large.jpg",
    "/small.jpg",
    "/out.jpg",
    "/palash.webp",
    "/recep.jpg",
    "/mithonDam.webp"
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setDirection(1);
      }, 1500); // Change image every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  // eslint-disable-next-line react/prop-types
  const RoomCard = ({ title, description, price, imageClass }) => (
    <div className="rooms w-full md:w-[45%] lg:w-[28%] z-20 bg-white rounded-lg shadow-2xl hover:scale-105 hover:duration-300 transition-all mb-8 md:mb-0">
      <div
        className={`${imageClass} h-[300px] rounded-lg bg-cover bg-center`}
      ></div>
      <div className="px-6 md:px-10 py-5 flex flex-col items-start gap-2 w-full">
        <div className="font-semibold">{title}</div>
        <div className="opacity-50 text-sm md:text-base">{description}</div>
        <div className="py-1 font-semibold">
          <span className="opacity-50">Starting from </span>
          {price}/night
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=919007062180">
            <button className="bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-700 text-sm md:text-base">
              BOOK NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="outer overflow-hidden">
      {/* header */}
      <div data-aos="fade-down">
        <Navbar />
      </div>

      <div className="min-h-[85vh] lg:h-[85vh] w-full flex flex-col lg:flex-row justify-center items-center gap-8 px-4 py-8 lg:py-0">
        <div data-aos="fade-right" className="houseimg h-[300px] lg:h-full w-full lg:w-[45%] bg-cover bg-center"></div>
        <div data-aos="fade-left" className="h-full w-full lg:w-[50%] flex flex-col justify-center gap-6 lg:gap-10 lg:pr-10">
          <div className="text-2xl lg:text-3xl font-medium relative self-center lg:self-start">
            Simple - Unique - Friendly
            <span className="absolute left-0 -bottom-3 h-[2px] bg-gray-400 w-full"></span>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-4xl lg:text-6xl font-bold pb-3">
              Make Yourself At Home
            </div>
            <div className="text-4xl lg:text-6xl font-bold">
              <span className="font-normal text-stroke">In Our</span> Guest
              House.
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div
        id="about"
        className="min-h-screen w-full flex flex-col lg:flex-row py-10 px-4 lg:px-16"
      >
        <div data-aos="fade-right" className="w-full lg:w-[60%] flex flex-col">
          <div className="text-3xl lg:text-5xl pt-10 lg:pt-20 pb-3 lg:pb-1 relative">
            About Us
            <span className="absolute left-0 -bottom-2 lg:-bottom-4 h-1 lg:h-[4px] bg-gray-500 w-[200px] lg:w-[300px]"></span>
          </div>
          <div className="text-2xl lg:text-4xl pt-5 lg:pt-16 pb-3 lg:pb-5">
            The Best Holidays Start Here!
          </div>
          <div className="text-base lg:text-lg pb-5 lg:pb-10">
            {`Embark on a tranquil journey at our Kingsukh Guest House, enveloped
          by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.`}
          </div>
          <div className="pb-2">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </div>
          <div className="pb-4 lg:pb-6">Contact us: +91 9007062180</div>
          <div className="h-12 w-36 bg-black flex justify-center items-center rounded-lg hover:bg-gray-700">
            <a href="https://api.whatsapp.com/send?phone=919007062180">
              <button className="bg-black text-white px-5 py-2 rounded-lg font-bold hover:bg-gray-700">
                BOOK NOW
              </button>
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="w-full lg:w-[40%] flex justify-center items-center mt-10 lg:mt-0">
          <div className="upaboutimg h-[300px] lg:h-[70%] w-full lg:w-[80%]">
            <div className="aboutimg w-full h-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* services */}
      <div
        id="services"
        className="relative min-h-screen w-full overflow-hidden py-10 px-4 lg:px-24"
      >
        <div className="absolute serviceimg opacity-0 lg:opacity-100 h-full w-full"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-start lg:gap-44">
          <div data-aos="fade-right">
            <div className="relative text-3xl lg:text-5xl">
              Services
              <span className="absolute left-0 -bottom-2 lg:-bottom-5 h-1 lg:h-[4px] bg-gray-500 w-[150px] lg:w-[250px]"></span>
            </div>
            <div className="pt-5 lg:pt-10 text-4xl lg:text-6xl">
              Strive Only For
            </div>
            <div className="pt-3 lg:pt-5 text-4xl lg:text-6xl">The Best.</div>
            <div data-aos="fade-down-left " className="flex justify-center items-end gap-5 lg:gap-10 h-40 lg:h-52 text-xl lg:text-2xl lg:px-12 lg:mt-10">
              <div className="flex flex-col justify-center items-center gap-2">
                {/* Replace with actual ScrollTrigger component */}
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="text-3xl lg:text-5xl">
                    {counterOn && (
                      <CountUp start={0} end={100} duration={2} delay={0} />
                    )}{" "}
                    +
                  </div>
                </ScrollTrigger>
                <div className="px-10 lg:px-0 text-center">
                  Bookings Completed
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                {/* Replace with actual ScrollTrigger component */}
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <div className="text-3xl lg:text-5xl">
                    {counterOn && (
                      <CountUp start={0} end={150} duration={2} delay={0} />
                    )}{" "}
                    +
                  </div>
                </ScrollTrigger>
                <div className="px-10 lg:px-0 text-center">Happy Customers</div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="flex flex-col justify-end text-xl lg:text-3xl gap-4 lg:h-[560px] lg:gap-6 mt-10 lg:mt-0">
            <div className="flex items-center gap-4 lg:gap-8">
              <FaShieldAlt />
              High Class Security
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <FaClock />
              24 Hours Room Service
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <FaUtensils />
              Restaurant
            </div>
            <div className="flex items-center gap-4 lg:gap-8">
              <FaBook />
              Tourist Guide Support
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div
        id="rooms"
        className="relative bg-red-40 min-h-screen py-16 md:py-32"
      >
        <div data-aos="fade-right" className="px-6 md:px-24 flex flex-col md:flex-row justify-start md:gap-8 lg:gap-56 items-start md:items-center mb-12">
          <div className="relative text-3xl md:text-5xl mb-8 md:mb-0">
            OUR LIVING ROOM
            <span className="absolute left-0 -bottom-2 md:-bottom-4 h-1 md:h-[4px] bg-gray-500 w-full md:w-[480px]"></span>
          </div>
          <div className="text-xl md:text-3xl">
            The Most Memorable Rest Time Starts Here.
          </div>
        </div>
        <div className="absolute roomsback opacity-30 -z-10 top-0 left-0 h-full w-full"></div>
        <div className="relative w-full flex flex-col md:flex-row justify-center items-center pt-10 gap-8 md:gap-16 lg:gap-32 px-6">
          <RoomCard
            title="Cozy Haven Room"
            description="Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation."
            price="Rs. 1000"
            imageClass="room1"
          />
          <RoomCard
            title="Spacious Serenity Suite"
            description="Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance."
            price="Rs. 1500"
            imageClass="room2"
          />
        </div>
      </div>

      {/* Gallery */}
        <div className="absolute lg:pt-12 h-full w-full flex justify-center items-center">
          <div className="galleryimg h-[650px] w-[780px]  z-50"></div>
        </div>
      <div id="gallery" className="relative py-16 md:py-32 px-6 md:px-28">
        <div data-aos="fade-right" className="relative text-3xl md:text-5xl mb-16 md:mb-32">
          Gallery
          <span className="absolute left-0 md:left-0 -bottom-2 md:-bottom-4 h-1 md:h-[4px] bg-gray-500 w-[150px] md:w-[230px]"></span>
        </div>
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="overflow-hidden relative h-64 md:h-96 rounded-xl">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0"
                    : index ===
                      (currentIndex - 1 + images.length) % images.length
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
                style={{
                  transform: `translateX(${
                    (index - currentIndex) * 100 * direction
                  }%)`,
                }}
              />
            ))}
          </div>
          {/* <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 md:-left-16 lg:-left-32 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-base"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 md:-right-16 lg:-right-32 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-base"
          >
            Next
          </button>
          <button
            onClick={toggleAutoplay}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-4 py-2 rounded-xl text-sm md:text-base"
          >
            {isPlaying ? "Pause" : "Play"}
          </button> */}
        </div>
      </div>

      <div id="contact" className="relative py-20 px-4 md:px-0">
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
          {/* Contact Info Section */}
          <div className="relative lg:absolute w-full md:w-1/2 lg:w-[1150px] lg:h-[60%] bg-gray-100 rounded-xl shadow-2xl p-8 md:p-10 mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-8">Contact Info</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <FaMapMarkedAlt className="text-3xl" />
                <div>
                  <div>Beside Barshal Water Tank, Manpur,</div>
                  <div>Barhanti, West Bengal 723156</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <span>kkghosh0099@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                <span>+91 9007062180</span>
              </div>
              <div className="flex gap-10 pt-8">
                <a>
                  <FaFacebook className="h-8 w-8 cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/kingsukhguesthouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a>
                  <FaTwitter className="h-8 w-8 cursor-pointer" />
                </a>
                <a>
                  <FaLinkedin className="h-8 w-8 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full z-50 lg:translate-x-44 md:w-1/2 lg:w-[650px]">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-tl from-gray-600 to-black p-6 text-white">
                <h2 className="text-3xl font-bold text-center">Contact Us</h2>
                <p className="text-center mt-2 text-gray-300">
                  {`We'd love to hear from you`}
                </p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* First and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-gray-700 font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-black focus:ring-black rounded-md px-4 py-2"
                      placeholder="Sanika"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-gray-700 font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 focus:border-black focus:ring-black rounded-md px-4 py-2"
                      placeholder="Kulkarni"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-black focus:ring-black rounded-md px-4 py-2"
                    placeholder="sk@example.com"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-gray-700 font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-black focus:ring-black rounded-md px-4 py-2"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-black focus:ring-black rounded-md px-4 py-2"
                    rows={4}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-1/2 bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 rounded-md py-3 text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Footer Section */}
            <p className="text-center mt-6 text-gray-600">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-400 ">
        <div className="responsivemap w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.02310695636!2d86.859785!3d23.58598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1736412652829!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <footer className="bg-gray-800 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold">Kingsukh Guest House</h2>
              <p className="mt-4 text-gray-400">
                Discover a world of comfort, luxury, and adventure as you
                explore our curated selection of hotels, making every moment of
                your getaway truly extraordinary.
              </p>
              <a href="https://api.whatsapp.com/send?phone=919007062180">
                <button className="mt-6 px-6 py-2 bg-gray-100 text-black font-bold rounded-lg hover:bg-gray-400 transition">
                  BOOK NOW
                </button>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-gray-400">
                    Browse Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-400">
                    Special Offers & Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-400">
                    Room Types & Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-400">
                    Customer Reviews & Ratings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-400">
                    Travel Tips & Guides
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Concierge Assistance</li>
                <li>Flexible Booking Options</li>
                <li>Airport Transfers</li>
                <li>Wellness & Recreation</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <strong>Address:</strong> Beside Barshal Water Tank, Manpur,
                  Barhanti, West Bengal 723156
                </li>
                <li>
                  <a
                    href="mailto:kkghosh0099@gmail.com"
                    className="text-gray-400 hover:underline"
                  >
                    kkghosh0099@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919007062180"
                    className="text-gray-400 hover:underline"
                  >
                    +91 9007062180
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Kingsukh Guest House. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

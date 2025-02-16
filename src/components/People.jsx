import people from "../assets/DrinkCarosel.png"
const People = () => {
  return (
    <div className="mt-10 ">
      <h3 className="text-4xl font-bold text-center">
        See How People are Chilling On Chillsbay
      </h3>

      <div className="flex items-center justify-center p-8">
        <div className="max-w-2xl flex bg-white rounded-lg shadow-lg">
          {/* Left Image Section */}
          <div className="w-1/2">
            <img 
              src={people} 
              alt="Wizkid Tour"
              className="rounded-lg"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-1/2 p-6">
            <h2 className="text-xl font-bold">Wizkid Made in Lagos Tour</h2>
            <p className="text-gray-500 text-sm my-2">
            Get ready for an electrifying night as Wizkid takes the stage for his exclusive Made in Lagos tour. 
            Enjoy his greatest hits and experience an unforgettable show with breathtaking performances and a fantastic crowd!
            </p>

            {/* Event Details */}
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <p>
                📅 <b>Dec 12 2022</b>
              </p>
              <p>📍 TBS, Lagos</p>
              <p>⏰ 9:00 PM</p>
              <p>💰 N20,000</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-gray-200 rounded-md">
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Book Now
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex gap-3 text-blue-500">
              <a href="#">🐦 Twitter</a>
              <a href="#">📘 Facebook</a>
              <a href="#">📸 Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;

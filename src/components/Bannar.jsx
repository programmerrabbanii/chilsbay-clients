import bgimg from "../assets/hero.png";

const Bannar = () => {
  return (
    <section
      className="h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center px-5"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="w-[50%] text-5xl md:text-6xl text-white font-bold leading-tight">
          Find amazing things to do anytime, anywhere in Lagos.
        </h2>

        <div className="bg-white p-5 w-full md:w-[60%] rounded-lg shadow-lg mt-5">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <select className="border border-gray-300 p-3 rounded-md focus:outline-none">
              <option disabled selected>
                Location
              </option>
              <option>Natore</option>
              <option>Rajsahi</option>
              <option>Dakha</option>
            </select>

            <select className="border border-gray-300 p-3 rounded-md focus:outline-none">
              <option disabled selected>
                
                Date
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

            <select className="border border-gray-300 p-3 rounded-md focus:outline-none">
              <option disabled selected>
                Activities
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

            <button className="col-span-1 md:col-span-3 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bannar;

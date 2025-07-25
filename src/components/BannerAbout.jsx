const BannerAbout = () =>{
    return(
        
    <div className=" mt-8 ">
     <div
        className="h-130 bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(/images/about.jpg)` }}
      >
        <div className="text-center  p-6 rounded-lg">
        <h1 className="text-base md:text-6xl text-gray-100 mb-6 max-w-4xl animate-fade-in delay-150">
            
            Discover our story and values that make Modern Serenity Spa your perfect escape.
   
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
            <a href="/about" className="">Learn More About Us</a>
        </button> 
        </div>
      </div>
      </div>
    )
}
export default BannerAbout;
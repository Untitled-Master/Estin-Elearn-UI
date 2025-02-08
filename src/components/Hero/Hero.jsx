const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden bg-[#09090B]">
      {/* Image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://elearn.estin.dz/pluginfile.php/1/theme_klass/slide1image/1685881281/etudiants-promo-estin-bejaia-juin-2022-1-scaled.jpg"
          alt="ESTIN Students Promotion June 2022"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAFAFA] max-w-3xl">
            École Supérieure en Sciences et Technologies de l'Informatique et du Numérique
            <span className="block text-2xl md:text-3xl mt-2">ESTIN</span>
          </h1>
          
          {/* New Button */}
          <a 
            href="https://www.estin.dz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex mt-8 px-6 py-3 bg-[#FAFAFA] text-[#09090B] rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 w-fit"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
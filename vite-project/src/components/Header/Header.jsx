const Header = (props) => {
  return (
    <div className="max-w-4xl mx-auto flex gap-8 py-8 border-b border-gray-200">
      <div className="flex-none">
        <img
          src={props.img1}
          alt={props.name}
          className="w-44 h-60 object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 text-sm">
          <img src={props.img2} alt="" className="w-4 h-4" />

          <p className="uppercase tracking-widest text-gray-700">
            {props.name2}
          </p>

          <a
            href={props.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 underline hover:text-red-500 transition-colors"
          >
            View on Google Maps
          </a>
        </div>

        <h1 className="text-4xl font-bold mt-2 text-gray-900">{props.name}</h1>

        <p className="mt-5 font-semibold text-gray-800">{props.date}</p>

        <p className="mt-3 text-gray-600 leading-7">{props.Note}</p>
      </div>
    </div>
  );
};

export default Header;

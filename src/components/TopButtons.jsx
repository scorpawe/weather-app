function TopButtons({ setQuery }) {
  const cities = [
    {
      title: "Tokyo",
    },
    {
      title: "New Delhi",
    },
    {
      title: "Cape Town",
    },
    {
      title: "Washington",
    },
    {
      title: "Mexico City",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          key={index}
          className="text-white text-sm font-medium transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;

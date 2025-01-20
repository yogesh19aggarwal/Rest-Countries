import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const { cca3, name, population, flags, region, capital } = country;
  return (
    <>
      <Link to={`country/${cca3}`} className="text-inherit no-underline ">
        <div
          className="bg-white dark:bg-articleColor shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
          style={{ height: "calc(100% + 0.5rem)" }}
        >
          <img
            src={flags.png}
            alt={name.common}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-gray-900 dark:text-textColor">
            <h3 className="font-bold text-lg mb-2">{name.common}</h3>
            <h4 className="text-sm">
              Population:{" "}
              <span className="font-normal">{population.toLocaleString()}</span>
            </h4>
            <h4 className="text-sm">
              Region: <span className="font-normal">{region}</span>
            </h4>
            <h4 className="text-sm">
              Capital: <span className="font-normal">{capital}</span>
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { AxiosInstance } from "./AxiosInstance";
import Loader from "./Loader";

const CountryDetails = () => {
  const [country, setCountry] = useState({});
  const { cca3 } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AxiosInstance.get(`/alpha/${cca3}`)
      .then((res) => {
        setCountry(res.data[0]);
        setLoading(false);
        console.log(res.data[0]);
        
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, [cca3]);

  if (loading) return <Loader />;

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const currencyNames = currencies
    ? Object.values(currencies).map((currency) => currency.name).join(", ")
    : "N/A";
  const languageNames = languages
    ? Object.values(languages).join(", ")
    : "N/A";

  return (
    <section className="p-12 max-w-7xl mx-auto min-h-screen relative">
      <Link to="/" className="inline-block mb-10">
        <div className="flex items-center gap-2 bg-white dark:bg-articleColor text-gray-900 dark:text-textColor px-4 py-2 shadow-md rounded-md">
          <IoMdArrowBack className="text-lg" />
          <span>Back</span>
        </div>
      </Link>

      <article className="flex ">
        <div className="w-[50%] mr-56">
          <img
            src={flags?.png || ""}
            alt={name?.common || "Country flag"}
            className="h-full rounded-md shadow-md"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{name?.common || "N/A"}</h2>
            <h5 className="font-semibold text-lg">
              Population:{" "}
              <span className="font-light">
                {population ? population.toLocaleString() : "N/A"}
              </span>
            </h5>
            <h5 className="font-semibold text-lg">
              Region: <span className="font-light">{region || "N/A"}</span>
            </h5>
            <h5 className="font-semibold text-lg">
              Sub Region: <span className="font-light">{subregion || "N/A"}</span>
            </h5>
            <h5 className="font-semibold text-lg">
              Capital: <span className="font-light">{capital?.join(", ") || "N/A"}</span>
            </h5>
          </div>

          <div className="mt-8">
            <h5 className="font-semibold text-lg">
              Top Level Domain:{" "}
              <span className="font-light">{tld ? tld.join(", ") : "N/A"}</span>
            </h5>
            <h5 className="font-semibold text-lg">
              Currencies: <span className="font-light">{currencyNames}</span>
            </h5>
            <h5 className="font-semibold text-lg">
              Languages: <span className="font-light">{languageNames}</span>
            </h5>
          </div>
        </div>
      </article>

      <div className="mt-12">
        <h3 className="text-lg font-semibold">Border Countries:</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {borders ? (
            borders.map((border) => (
              <Link key={border} to={`/country/${border}`}>
                <button className="bg-gray-100 dark:bg-articleColor text-gray-900 dark:text-textColor px-4 py-2 rounded-md shadow-md">
                  {border}
                </button>
              </Link>
            ))
          ) : (
            <span className="text-gray-600 dark:text-gray-400">N/A</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;

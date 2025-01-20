import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { AxiosInstance } from "../api/AxiosInstance";
import Loader from "./Loader";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { cca3 } = useParams();
  const [loading, setLoading] = useState(true);
  const [filterCountry, setFilterCountry] = useState({});

  useEffect(() => {
    AxiosInstance.get(`all`)
      .then((res) => {
        setCountry(res.data);
        const selectedCountry = res.data.find((coun) => coun.cca3 === cca3);
        setFilterCountry(selectedCountry || {});
        setLoading(false);
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
  } = filterCountry;

  const currencyNames = currencies
    ? Object.values(currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";
  const languageNames = languages ? Object.values(languages).join(", ") : "N/A";

  return (
    <section className="p-12 max-w-7xl mx-auto min-h-screen relative ">
      <Link to="/" className="inline-block mb-10">
        <div className="flex items-center gap-2 bg-white dark:bg-articleColor text-gray-900 dark:text-textColor px-4 py-2 shadow-md rounded-md">
          <IoMdArrowBack className="text-lg" />
          <span>Back</span>
        </div>
      </Link>

      <article className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-20 sm:gap-y-0">
        <div className="w-[100%] mr-56">
          <img
            src={flags?.png || ""}
            alt={name?.common || "Country flag"}
            className="h-full w-full rounded-md shadow-md"
          />
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <h2 className="min-[430px]:text-2xl text-sm lg:text-2xl font-bold mb-4">
            {name?.common || "N/A"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-x-8">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Population:{" "}
                <span className="font-light">
                  {population ? population.toLocaleString() : "N/A"}
                </span>
              </h5>
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Region: <span className="font-light">{region || "N/A"}</span>
              </h5>
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Sub Region:{" "}
                <span className="font-light">{subregion || "N/A"}</span>
              </h5>
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Capital:{" "}
                <span className="font-light">
                  {capital?.join(", ") || "N/A"}
                </span>
              </h5>
            </div>

            <div className="flex mt-4 sm:mt-0 flex-col gap-2">
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Top Level Domain:{" "}
                <span className="font-light">
                  {tld ? tld.join(", ") : "N/A"}
                </span>
              </h5>
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Currencies: <span className="font-light">{currencyNames}</span>
              </h5>
              <h5 className="font-semibold text-sm min-[430px]:text-lg lg:text-1xl">
                Languages: <span className="font-light">{languageNames}</span>
              </h5>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex items-center">
            <h3 className="text-sm min-[430px]:text-lg font-semibold min-[430px]:mr-4">
              Border Countries:
            </h3>
            <div className="flex flex-wrap gap-2 mt-0">
              {borders ? (
                borders.map((border) => (
                  <Link key={border} to={`/country/${border}`}>
                    <button className="bg-gray-100 dark:bg-articleColor text-gray-900 dark:text-textColor px-4 py-2 rounded-md shadow-md">
                      {country.find((coun) => coun.cca3 === border).name.common}
                    </button>
                  </Link>
                ))
              ) : (
                <span className="text-gray-600 dark:text-gray-400">N/A</span>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CountryDetails;

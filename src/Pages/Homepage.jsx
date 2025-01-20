import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import Loader from "../components/Loader";
import { AxiosInstance } from "../api/AxiosInstance";
import Card from "../components/Card";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("none");
  const [loading, setLoading] = useState(false);
  const [countriesRegion, setCountriesRegion] = useState([]);

  useEffect(() => {
    setLoading(true);
    AxiosInstance.get("all/")
      .then((res) => {
        setCountries(res.data);
        setCountriesRegion(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setCountriesRegion(countries);
    } else {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setCountriesRegion(filteredCountries);
    }
  };

  const onRegionChange = (e) => {
    const selected = e.target.value;
    setSelectedRegion(selected);
    if (selected === "All") {
      setCountriesRegion(countries);
    } else {
      const filtered = countries.filter(
        (country) => country.region === selected
      );
      setCountriesRegion(filtered);
    }
  };

  return (
    <div className="p-10 ">
      <div className="flex flex-col w-full md:flex-row items-start md:justify-between md:items-center md:mx-[3rem]">
        <div className="flex items-center shadow-md rounded-md h-10 px-3 bg-white dark:bg-articleColor dark:text-textColor md:w-[40%] py-6 w-[80%]">
          <CiSearch className="text-gray-400 text-xl" />
          <input
            type="search"
            value={inputValue}
            id="country-search"
            name="countrySearch"
            onChange={handleInput}
            placeholder="Search for a country..."
            autoComplete="country"
            className="w-full outline-none pl-2 text-sm text-gray-600 dark:text-textColor bg-transparent"
          />
        </div>

        <div className="w-[60%] md:w-[20%] py-6 md:mr-[14%] lg:mr-[8%]">
          <select
            value={selectedRegion}
            id="region"
            name="region"
            onChange={onRegionChange}
            autoComplete="region"
            className="shadow-md appearance-none rounded-md h-10 px-3 pr-2 bg-white dark:bg-articleColor text-sm text-gray-700 dark:text-textColor w-full outline-none"
          >
            <option value="All">Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 bg-lightBg lg:grid-cols-4 gap-16 p-4 bg-white-50 dark:bg-darkBg md:mx-8 ">
        {loading ? (
          <Loader />
        ) : (
          countriesRegion.map((country, index) => (
            <Card key={index} country={country} />
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;

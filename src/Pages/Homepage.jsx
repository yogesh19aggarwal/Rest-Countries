import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";
import Loader from "../components/Loader";
import { AxiosInstance } from "../components/AxiosInstance";
import Card from "../components/Card";

const Homepage = () => {

    const [countries, setCountries] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('none')
    const [loading, setLoading] = useState(false);
    const [contriesRegion, setCountriesRegion] = useState([]);

    useEffect(()=>{
        setLoading(true);
        AxiosInstance.get('all/')
        .then((res)=>{
            setCountries(res.data);
            setCountriesRegion(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
        .finally(()=>{
            setLoading(false);
        })
    }, [])

    const handleInput = (value)=>{
        setInputValue(value);
        const filteredCountries = contriesRegion.filter((country) =>
            country.name.common.toLowerCase().includes(value.toLowerCase())
        );
        setCountriesRegion(filteredCountries);
    }

    const onRegionChange = (e) => {
        const selected = e.target.value;
        setSelectedRegion(selected);
        if (selected === "All") {
            setCountriesRegion(countries); 
        } else {
            const filtered = countries.filter((country) => country.region === selected);
            setCountriesRegion(filtered);
        }
    };
    
  return (
    <div className="p-10 ">
        <div className="flex mobile:flex-col laptop:flex-row mobile:items-start laptop:justify-between laptop:items-center">

            <div className='flex items-center shadow-md rounded-md h-10 px-3 bg-white dark:bg-articleColor dark:text-textColor laptop:w-[40%] py-6 mobile:w-[80%]'>
                <CiSearch className="text-gray-400 text-xl"/>
                <input
                type="search"
                value={inputValue}
                id="country-search"
                name="countrySearch"
                onChange={(e)=>handleInput(e.target.value)}
                placeholder="Search for a country..."
                autoComplete="country"
                className="w-full outline-none pl-2 text-sm text-gray-600 dark:text-textColor bg-transparent"
                />
            </div>

            <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row lg:items-center lg:w-1/2 py-6 mobile:w-[60%] laptop:w-[30%] laptop:mr-[6%]">
                <select
                    value={selectedRegion}
                    id="region"
                    name="region"
                    onChange={onRegionChange}
                        autoComplete="region"
                        className="shadow-md rounded-md h-10 px-3 bg-white dark:bg-articleColor text-sm text-gray-700 dark:text-textColor w-full lg:w-auto outline-none"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 bg-slate-100 lg:grid-cols-4 gap-16 p-4 bg-white-50 dark:bg-darkBg md:mx-8 ">
          {
          loading ? (
            <Loader />
          ) : (
            contriesRegion.map((country, index) => (
              <Card key={index} country={country}/>
            ))
          )}
        </div>
    </div>
  )
}

export default Homepage
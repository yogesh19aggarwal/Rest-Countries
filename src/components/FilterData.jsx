const FilterData = ({
  countryData,
  selectedRegion,
  onRegionChange,
  placeHolder,
}) => {
  return (
    <>
      <select
        value={selectedRegion}
        onChange={onRegionChange}
        className="h-7 md:h-10 bg-white dark:bg-slate-800 dark:text-white mb-2 text-xs rounded outline-none font-thin md:mt-4 md:text-sm md:size-6 md:w-auto  box-border px-2"
      >
        <option
          value=""
          className="text-xs font-light dark:bg-slate-800 rounded-sm"
        >
          {placeHolder}
        </option>
        {countryData.map((region, index) => (
          <option
            value={region}
            key={index}
            className="text-xs rounded-sm mb-2 dark:bg-slate-800 "
          >
            {region}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterData;
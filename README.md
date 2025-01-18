# Rest Countries API Project

## Description

This project is a React-based web application that fetches data from the [REST Countries API](https://restcountries.com/v3.1/all). It displays a list of countries on the homepage with the ability to filter by region and search for countries within the selected region. Clicking on a country's card navigates to a detailed page with information about the selected country.

## Features

- **Homepage:** Displays all countries with their flags and basic details.
- **Region Filter:** Dropdown menu to filter countries by region (default is "All Regions").
- **Search Bar:** Search for countries within the selected region.
- **Country Details Page:** Displays detailed information about a selected country, including:
  - Population
  - Region
  - Subregion
  - Capital
  - Top-level domain
  - Currencies
  - Languages
  - Border countries (if applicable)

## Folder Structure

```plaintext
rest-countries/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AxiosInstance.jsx
│   │   ├── Card.jsx
│   │   ├── CountryCard.jsx
│   │   └── Loader.jsx
│   ├── Pages/
│   │   ├── Homepage.jsx
│   │   ├── NotFound.jsx
│   │   └── CountryDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yogesh19aggarwal/Rest-Countries.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rest-countries
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

## API Usage

This application uses the [REST Countries API](https://restcountries.com/v3.1/all) to fetch country data.

### Example API Request

```bash
GET https://restcountries.com/v3.1/all
```

## Components

- **AxiosInstance.jsx:** Sets up an Axios instance for API requests.
- **Card.jsx:** Reusable card component for displaying basic country details.
- **CountryCard.jsx:** Displays detailed information for a selected country.
- **Loader.jsx:** Shows a loading animation during data fetch.

## Pages

- **Homepage.jsx:** Displays a list of countries and includes the search and filter functionalities.
- **NotFound.jsx:** Displays a 404 error page for invalid routes.
- **CountryDetails.jsx:** Displays detailed information for a selected country.

## Technologies Used

- React
- Axios
- JavaScript (ES6+)
- Tailwind CSS
- Vite (build tool)

## Future Enhancements

- Add pagination to the homepage for better performance with large datasets.
- Enhance the search functionality to include more filters (e.g., by population or language).

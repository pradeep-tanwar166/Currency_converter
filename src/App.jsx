import { useState } from "react";
import Input from "./Components/Input";
import Input2 from "./Components/Input2";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("aed");
  const [currency2, setCurrency2] = useState("aed");
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    try {
      const url = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json` );
      const json = await url.json();
      setData(json[currency][currency2]);
    }catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="border-2 p-5 border-black h-auto w-64 m-5 rounded-md bg-zinc-900 ">
          <h1 className="text-3xl bg-yellow-500 text-center">
            Currency Calculator
          </h1>

          <div className="m-5">
            <Input selectedCurrency={currency} onCurrencyChange={setCurrency} />
          </div>

          <div className="m-5">
            <Input2
              selectedCurrency2={currency2}
              onCurrencyChange2={setCurrency2}
            />
          </div>

          <div className="text-center my-4">
            <button
              onClick={handleFetch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Convert Now
            </button>
          </div>

          {data ? (
            <p className="text-center text-xl text-white">
              1 {currency.toUpperCase()} = {data} {currency2.toUpperCase()}
            </p>
          ) : (
            <p className="text-center text-gray-500" >
              Click the button to convert
            </p>
            
          )}
        </div>
      </div>
    </>
  );
}

export default App;  
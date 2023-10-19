import React, { useState } from 'react'
type LagngugesType = {
  lagnguges:string
  level:any
}
type LagngugesPropsType = {
  lagnguges:LagngugesType[] | undefined,
  setLagnguges:React.Dispatch<React.SetStateAction<LagngugesType[] | undefined>>
}

function Lagnguges({lagnguges,setLagnguges}:LagngugesPropsType) {

  const [lagngugesData, setLagngugesData] = useState<string>("");
  const [level, setLevel] = useState<number | null>(null);

  const handleLagngugesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLagngugesData(e.target.value);
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const levelValue = parseInt(e.target.value);
    setLevel(levelValue);
  };

  const handleAdd = () => {
    if (lagngugesData.trim() !== "" && level !== null) {
      // Update the parent component's educationForm state with the new data
      setLagnguges([
        ...(lagnguges || []), // handle skill being undefined
        {
          lagnguges: lagngugesData,
          level: level,
        },
      ]);

      setLagngugesData("");
      setLevel(null);
    }
  };

  return (
    <div>
    <div>
      <div className="w-full bg-white p-10">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
        >
          Languages
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
        >
          Add all The information About Your Languages
        </p>

        <div className="flex justify-center">
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
              Languages
              </label>
              <input
              onChange={handleLagngugesChange}
              value={lagngugesData}
                type="name"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Level
              </label>
              <input
              onChange={handleLevelChange}
              value={level === null ? "" : level} 
                type="number"
                tabIndex={0}
                aria-label="Enter a non-negative number"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                min="0"
                max='100'
              />
            </div>
          </div>
        </div>
        <br /> <br />
          <button
            onClick={handleAdd}
            type="button"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {" "}
            Add & save
          </button>
          {lagnguges?.map((item, index) => (
  <li key={index}>{item?.lagnguges}</li>
))}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
        }}
      />
    </div>
  </div>
  )
}

export default Lagnguges
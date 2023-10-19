import React, { useState } from "react";
type SkillFormType = {
  Skill: string;
  Level: any;
};
type SkillPropsType = {
  skill: SkillFormType[] | undefined;
  setSkill: React.Dispatch<React.SetStateAction<SkillFormType[] | undefined>>;
};
function Skill({ skill, setSkill }: SkillPropsType) {
  const [skillForm, setSkillForm] = useState<string>("");
  const [level, setLevel] = useState<number | null>(null);
  const [fill, setFill] = useState<boolean>(false);

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillForm(e.target.value);
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const levelValue = parseInt(e.target.value);
    setLevel(levelValue);
  };

  const handleAdd = () => {
    if (skillForm.trim() !== "" && level !== null) {
      // Update the parent component's educationForm state with the new data
      setFill(false)
      setSkill([
        ...(skill || []), // handle skill being undefined
        {
          Skill: skillForm,
          Level: level,
        },
      ]);

      setSkillForm("");
      setLevel(null);
    }else{
      setFill(true)
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
            Skills
          </h1>
          <p
            role="contentinfo"
            className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
          >
            Add all The information About Your Skills
          </p>
          <div className="flex justify-center">
            <div className="mt-8 md:flex items-center">
              <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Skill
                </label>
                <input
                  onChange={handleSkillChange}
                  value={skillForm}
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
                  value={level === null ? "" : level} // Convert level to a string or an empty string if it's null
                  type="number"
                  tabIndex={0}
                  aria-label="Enter a non-negative number"
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                  min="0"
                  max="100"
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
          </button><br />
          {fill &&( <span className="text-rose-500">please fill the form properly</span>)}
          {skill?.map((item, index) => (
  <li key={index}>{item?.Skill}</li>
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
  );
}

export default Skill;

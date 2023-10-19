import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

type PersonalSummaryProps = {
  personalSummary: string;
  setPersonalSummary: React.Dispatch<React.SetStateAction<string>>;
};

function PersonalSummary({
  personalSummary,
  setPersonalSummary,
}: PersonalSummaryProps) {
  const GRAMMARLY_CLIENT_ID = "client_SFRK8bZXHGgd3zk9VoMEdz";
  const data = {};
  const handlePersonalSummary = (
    e: React.ChangeEvent<HTMLTextAreaElement> 
  ) => {
    setPersonalSummary(e.target.value);
  };
  return (
    <div className="text-center">
      <h1
        tabIndex={0}
        role="heading"
        aria-label="profile information"
        className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
      >
        Profile Summary
      </h1>
      <span className="focus:outline-none text-sm font-light leading-tight text-gray-600 mt-4">
        <br />
        Add all information about your studies or training
      </span>
      <>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <GrammarlyEditorPlugin clientId={GRAMMARLY_CLIENT_ID}>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-1/2 h-20 mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            defaultValue={""}
            name="summary"
            value={personalSummary}
            onChange={handlePersonalSummary} 
            
            required
          />
        </GrammarlyEditorPlugin>
      </>
    </div>
  );
}

export default PersonalSummary;

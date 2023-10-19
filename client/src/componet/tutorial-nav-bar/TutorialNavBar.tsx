import React, { useState } from "react";

interface TutorialNavBarProps {
  handleChildCountChange: (newCount: number) => void;
}

function TutorialNavBar({ handleChildCountChange }: TutorialNavBarProps) {
  const [showNav, setShowNav] = useState(1);
  const handleNavbrChange = (id: number) => {
    handleChildCountChange(id);
    setShowNav(id);
  };

  return (
    <div>
      <div>
        <h1
          tabIndex={0}
          role="heading"
          aria-label="Tutorial: Boost Your Interview Confidence"
          className="focus:outline-none text-3xl font-bold text-gray-800"
        >
          Boost Your Interview Confidence!
        </h1>
      </div>
      <br />
      <br />
      <div className="flex justify-center">
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <a
                onClick={() => handleNavbrChange(1)}
                className={
                  showNav === 1
                    ? `shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600`
                    : `shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`
                }
              >
                interview tips
              </a>

              <a
                onClick={() => handleNavbrChange(2)}
                className={
                  showNav === 2
                    ? `shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600`
                    : `shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`
                }
              >
                how to write conver Letter
              </a>

              <a
                onClick={() => handleNavbrChange(3)}
                className={
                    showNav === 3
                      ? `shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600`
                      : `shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`
                  }              >
                Phone call interview tips
              </a>

              <a
                onClick={() => handleNavbrChange(4)}
                className={
                    showNav === 4
                      ? `shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600`
                      : `shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`
                  }              >
                Behavior and HR questions
              </a>
              <a
                onClick={() => handleNavbrChange(5)}
                className={
                    showNav === 5
                      ? `shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600`
                      : `shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`
                  }              >
                Acceptance,Rejection,Follow Up Letter
              </a>
              <a
                onClick={() => handleNavbrChange(6)}
                className={
                    showNav === 6
                      ? `shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600`
                      : `shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`
                  }              >
                Salary Negotiation
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialNavBar;

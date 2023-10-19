import React, { useEffect } from "react";
import Navbar from "../../componet/navBar/nav-bar";
import JobSearch from "../../componet/job-search/job-search";
import axios from "axios";
function JobSearchPage() {
  const navBarIndex  = 3
  return (
    <div>
      <Navbar navBarIndex={navBarIndex} />
      <JobSearch/>
      
    </div>
  );
}

export default JobSearchPage;

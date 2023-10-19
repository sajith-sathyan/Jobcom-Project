const puppeteer = require("puppeteer");

const puppeteerJsConnection = async (keyword) => {
  console.log("keyword",keyword)
  function generateNaukriSearchURL(keyword) {
    const baseUrl = "https://www.naukri.com/mern-stack-mern-stack-developer-jobs";
    const encodedKeyword = encodeURIComponent(keyword);
    const searchParam = `k=${encodedKeyword}`;
    return `${baseUrl}?${searchParam}`;
  }
  const searchKeyword = generateNaukriSearchURL(keyword)
  console.log("searchKeyword",searchKeyword)
  const browser = await puppeteer.launch({
    headless: "new",
    timeout: 60000,
  });
  const page = await browser.newPage();
  await page.goto(
    searchKeyword
  );
  await page.screenshot({ path: "example.png", fullPage: true });
  // const html = await page.content();
  // console.log(html);
  // const title = await page.evaluate(() => document.title);
  // console.log(title);
  // const text = await page.evaluate(() => document.body.innerText);
  // console.log(text);
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("a"), (e) => e.href)
  // );
  // console.log(links);

  const LinkdinJobDetails = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".jobs-search__results-list li"),
      (e) => {
        const titleElement = e.querySelector(
          ".base-search-card__info .base-search-card__title"
        );
        const linkElement = e.querySelector(
          ".base-search-card__info .hidden-nested-link"
        );
        const timeElement = e.querySelector(".job-search-card__listdate");
        const jobStatus = e.querySelector(
          ".base-search-card__info .base-search-card__metadata .job-search-card__benefits .result-benefits .result-benefits__text"
        );

        // Extract company name and link
        const companyName = linkElement
          ? linkElement.innerText.trim()
          : "Company name not found";
        const companyLink = linkElement
          ? linkElement.href
          : "Company link not found";
        const timeText = timeElement
          ? timeElement.innerText.trim()
          : "Time not found";

        return {
          title: titleElement
            ? titleElement.innerText.trim()
            : "Title not found",
          jobStatus: jobStatus
            ? jobStatus.innerText.trim()
            : "jobStatus not found",
          companyName,
          companyLink,
          time: timeText,
        };
      }
    )
  );
  const naukriDetails = await page.evaluate(() =>
  Array.from(document.querySelectorAll("article.jobTuple"), (element) => {
    const titleElement = element.querySelector(
      ".jobTupleHeader .info .title.ellipsis"
    );
    const companyNameElement = element.querySelector(
      ".jobTupleHeader .info .companyInfo .subTitle.ellipsis.fleft"
    );

    const experienceElement = element.querySelector(
      ".fleft.br2.placeHolderLi.experience .expwdth"
    );
    const salaryElement = element.querySelector(
      ".fleft.br2.placeHolderLi.salary .ellipsis"
    );
    const locationElement = element.querySelector(
      ".fleft.br2.placeHolderLi.location .locWdth"
    );
    const linkElement = element.querySelector(
      ".jobTupleHeader .info .title.ellipsis "
    );
    const postedDateElement = element.querySelector(".fleft.postedDate");
    const postedDate = postedDateElement
      ? postedDateElement.innerText.trim()
      : "Posted date not found";


    return {
      title: titleElement ? titleElement.innerText.trim() : "Title not found",
      companyName: companyNameElement
        ? companyNameElement.innerText.trim()
        : "Company name not found",
      experience: experienceElement
        ? experienceElement.innerText.trim()
        : "Experience not found",
      salary: salaryElement ? salaryElement.innerText.trim() : "Salary not found",
      location: locationElement
        ? locationElement.innerText.trim()
        : "Location not found",
      link: linkElement ? linkElement.getAttribute("href") : null,
      postedDate: postedDate?postedDate:"not get the postedDate", 
    };
  })
);

 
  await browser.close();

  return naukriDetails; 
};

module.exports = puppeteerJsConnection;

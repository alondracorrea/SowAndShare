import React, { useState } from "react";
import "./Accordion.css";

const dataCollection = [
  {
    question: "Hotlines",
    numbers: [
      "Shelter Line(Maricopa): 480-890-3039",
      "24-Hour Domestic Violence Hotline 800-799-7233",
      "AZ Coalition to End Sexual and Domestic Violence: 602-279-2900, 800-782-6400, 602-279-7270",
      "Domestic Violence Program Information: 602-542-4446",
    ],
  },
  {
    question: "Find Local Support",
    link: "https://www.rainn.org/get-help",
  },
  {
    question: "Self-Care After Trauma",
    answer:
      "Self-care can aid in coping with the immediate and long-term effects of trauma, such as sexual assault, regardless of when it occurred",
    link: "https://www.rainn.org/node/2216",
  },
  {
    question: "Help Someone You Love",
    answer:
      "There are various methods you can employ to support a friend or family member who has been impacted by sexual violence",
    link: "https://www.rainn.org/node/2228",
  },
];

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    setActiveAccordion((prevIndex) => (prevIndex === index ? -1 : index));
  }

  return (
    <div className="accordion-container">
      <div>
        <h1 className="title">There is no shame in help.</h1>
      </div>
      <div className="accordion__faq">
        {dataCollection.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="accordion__faq-heading"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={activeAccordion === index ? "active" : ""}>
                  {item.question}
                </h3>
                <div>
                  <span className="vertical">
                    {activeAccordion === index ? "-" : "+"}
                  </span>
                </div>
              </div>
              <div>
                {activeAccordion === index && (
                  <>
                    {item.numbers &&
                      item.numbers.map((number, i) => <p key={i}>{number}</p>)}
                    {item.answer && <p>{item.answer}</p>}
                    {item.link && (
                      <p>
                        <a className="links" href={item.link}>
                          {item.link}
                        </a>
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;

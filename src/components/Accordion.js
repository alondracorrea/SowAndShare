import React, {useState} from 'react'
import './Accordion.css'

//dictionary contains info for the accordion
    const dataCollection =[{
        question: 'Hotlines',
        number1: 'Shelter Line(Maricopa): 480-890-3039',
        number2: '24-Hour Domestic Violence Hotline 800-799-7233',
        number3: 'AZ Coalition to End Sexual and Domestic Violence: 602-279-2900, 800-782-6400, 602-279-7270',
        number4: 'Domestic Violence Program Information: 602-542-4446'
    },

    {
        question: 'Find Local Support',
        link: 'https://www.rainn.org/get-help'

    },

    {   question: 'Self-Care After Trauma',
        answer: 'Self-care can aid in coping with the immediate and long-term effects of trauma, such as sexual assault, regardless of when it occurred',
        link: 'https://www.rainn.org/node/2216',

    },

    {
        question: 'Help Someone You Love',
        answer: 'There are various methods you can employ to support a friend or family member who has been impacted by sexual violence',
        link: 'https://www.rainn.org/node/2228' 
    }

];


function Accordion() {
  //state variable
    const [accordion, setActiveAccordion] = useState(-1);
  
    function toggleAccordion(index) {
      setActiveAccordion(index);
    }
  
    //render Accordion
    return (
      <>
        <div className="full-bleed">
          <div>
            <h1 className="title">There is no shame in help.</h1>
          </div>
          <div className="accordion__faq">
            {dataCollection.map((item, index) => {
              // skips over items that do not have numbers or an answer
              if (!item.number1 && !item.answer && !item.link) {
                return null;
              }

              return (
                <div key={index} onClick={() => toggleAccordion(index)}>
                
                  <div className="accordion__faq-heading">
                    <h3 className={accordion === index ? "active" : ""}>
                      {item.question}
                    </h3>
                  </div>
                  <div>
                    {accordion === index ? (
                      <span className="vertical">-</span>
                    ) : (
                      <span className="vertical">+</span>
                    )}
                  </div>
                  <div>
                    
                    <p className={accordion === index ? "active" : "inactive"}>
                      {item.number1 && <>{item.number1}<br/></>} {/* short-circuit evaluation/condition rendering */} {/* fragments */}
                      {item.number2 && <>{item.number2}<br/></>}
                      {item.number3 && <>{item.number3}<br/></>}
                      {item.number4 && <>{item.number4}<br/></>}
                      {item.answer && <>{item.answer}<br/></>}
                      {item.link && (
                        <a className="links" href={item.link}>
                          {item.link}
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  
  export default Accordion;
  
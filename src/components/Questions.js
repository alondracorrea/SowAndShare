import React, { useState } from 'react';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './Questions.css';
import dayImage from '../assets/sun.jpg';
import nightImage from '../assets/moon.jpg';
import bothImage from '../assets/both.jpg';

//unique identifer for user
var uuid = require('uuid');

function Questions() {
  const questions = [
    {
      questionText: 'Where are you located?', // dropdown question
      //array for the survey questions and their answer options
      answerOptions: [
        [
          'Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Lousiana', 'Maine',
          'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
          'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
          'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
      ],
    },
    {
      questionText: 'When did this happen?',
      answerOptions: [
        { answerText: 'Day', imageUrl: dayImage },
        { answerText: 'Night', imageUrl: nightImage },
        { answerText: 'Anytime', imageUrl: bothImage },
        { answerText: 'Ongoing Incident' },
      ],
    },
    {
      questionText: 'Where were you?',
      answerOptions: [
        { answerText: 'At Home' },
        { answerText: 'Public Space' },
        { answerText: 'Festival' },
        { answerText: 'Walking/Running' },
        { answerText: 'At Work' },
      ],
    },
    {
      questionText: 'What happened?',
      answerOptions: [
        { answerText: 'Stealthing' },
        { answerText: 'Groping' },
        { answerText: 'Grooming' },
        { answerText: 'Flashing' },
        { answerText: 'Physical Abuse' },
        { answerText: 'Sexual Assault' },
      ],
    },
    {
      questionText: 'Did you know the perpetrator?',
      answerOptions: [
        { answerText: 'Yes' },
        { answerText: 'No' },
      ],
    },
    {
      questionText: 'What happened next?',
      answerOptions: [
        { answerText: 'I changed how I behaved' },
        { answerText: 'I told my friends and family' },
        { answerText: 'I did nothing' },
        { answerText: 'I changed how I looked and dressed' },
      ],
    },
    {
      questionText: 'Anymore detail you would like to say?',
      answerOptions: [
        { inputType: 'text' },
      ],
    }
  ];


  //state variables to manage state of survey
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showEnd, setEnd] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [textInput, setTextInput] = useState('');

  //function to handle the Next button, updates answer array
  const handleAnswerOptionClick = (answerText) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answerText;
    setAnswers(updatedAnswers);
    console.log(answerText)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      console.log("next")
      setCurrentQuestion(nextQuestion);
    } else {
      console.log("last")
      saveAnswersToDatabase();
      setEnd(true);
    }

    
  };
  
  //function to save answers to database
  const saveAnswersToDatabase = async () => {
    try {
      const responseId = uuid.v4();
      const responsesRef = collection(db, 'survey');
      const answersToSave = [...answers];
      if (questions[currentQuestion].answerOptions[0].inputType === 'text') {
        console.log("answer is" + textInput )
        answersToSave[currentQuestion] = textInput;
      }
      await addDoc(responsesRef, {
        responseId,
        answers: answersToSave,
      });
      console.log('Survey answers saved to the database.');
      console.log(answersToSave)
    } catch (error) {
      console.error('Error saving survey answers:', error);
    }
  };

  //func handles text input changes
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const [currentSelectedDropdownOption, setCurrentSelectedDropdownOption] = useState('');

  const handleDropdownChange = (event) => {
    setCurrentSelectedDropdownOption(event.target.value);
  };

  //renders QUestions
  return (
    <div className='app'>
      {showEnd ? (
        <div className='end-section'>
          Thank you for sharing.
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => {
              if (Array.isArray(answerOption)) { // dropdown
                return (
                  <div key={`location-dropdown-${currentQuestion}`}>
                  <select onChange={handleDropdownChange}>
                    <option value=''>Select an option</option>
                    {answerOption.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button className = 'nextBtn' onClick={() => handleAnswerOptionClick(currentSelectedDropdownOption)}>Next</button>
                </div>
                );
              } else if (answerOption.inputType === 'text') { // text input
                return (
                  <div key={answerOption.inputType}>
                    <input type="text" value={textInput} onChange={handleTextInputChange} />
                    <button className='nextBtn' onClick={() => handleAnswerOptionClick(textInput)}>Next</button>
                  </div>
                );
              } else if (answerOption.imageUrl) { // check for imageUrl
                return (
                  <div key={answerOption.answerText}>
                    <img src={answerOption.imageUrl} alt={answerOption.answerText} className="question-images" />
                    <button className="regularBtn" onClick={() => handleAnswerOptionClick(answerOption.answerText)}>
                      {answerOption.answerText}
                    </button>
                  </div>
                );
              } else { // regular button without an image
                return (
                  <button className="regularBtn" key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.answerText)}>
                    {answerOption.answerText}
                  </button>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;

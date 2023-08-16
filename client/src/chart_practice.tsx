import React from 'react';
import { useState } from 'react';

const ChartPractice: React.FC = () => {
    const [currentlySelectingFor, setCurrentlySelectingFor]= useState(0);
    const selectionOptions = ['Always Raise', 'Raise from Mid-Late Position', 'Raise from Late Position', 'Fold']
    const [currentAnswer, setCurrentAnswer] = useState('');
    interface AnswerData {
        correctAnswer: number;
        userAnswer: number;
        hasAnswered: boolean;
        row: number;
        correct: boolean;
    }

    interface AnswerKey {
        [key: string]: AnswerData;
    }
    
    const initialAnswerKey: AnswerKey = {
        "A-A": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "A-K": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "K-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "Q-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "J-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "T-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "9-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "8-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "7-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "6-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "5-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "4-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "3-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 0, correct: false},
        "K-K": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "A-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "K-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "Q-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "J-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "T-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "9-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "8-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "7-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "6-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "5-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "4-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 1, correct: false},
        "Q-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "A-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "K-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "Q-9": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "J-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "T-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "9-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "8-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "7-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "6-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "5-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2, correct: false},
        "J-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "A-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "K-9": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "Q-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "J-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "T-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "9-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "8-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "7-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "6-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3, correct: false},
        "T-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "A-9": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "K-8": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "Q-7": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "J-6": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "T-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "9-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "8-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "7-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4, correct: false},
        "9-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "A-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "K-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "Q-6": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "J-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "T-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "9-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "8-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5, correct: false},
        "8-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "A-7": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "K-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "Q-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "J-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "T-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "9-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6, correct: false},
        "7-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 7, correct: false},
        "A-6": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 7, correct: false},
        "K-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 7, correct: false},
        "Q-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 7, correct: false},
        "J-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 7, correct: false},
        "T-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 7, correct: false},
        "6-6": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 8, correct: false},
        "A-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 8, correct: false},
        "K-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 8, correct: false},
        "Q-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 8, correct: false},
        "J-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 8, correct: false},
        "5-5": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 9, correct: false},
        "A-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 9, correct: false},
        "K-3": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 9, correct: false},
        "Q-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 9, correct: false},
        "4-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 10, correct: false},
        "A-3": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 10, correct: false},
        "K-2": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 10, correct: false},
        "3-3": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 11, correct: false},
        "A-2": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 11, correct: false},
        "2-2": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 12, correct: false}
    };

    let testData = {
        score_percent: 0,
        score_percent_string: '',
        score_correct: 0,
        time: 0
    }

    const [answerKey, setAnswerKey] = useState<AnswerKey>(initialAnswerKey);
      
      
    const handleCurrentlySelectingForClick = (index: number) => {
        setCurrentlySelectingFor(index)
    }

    const handleChartClick = (dataIdentifier: string, event:any) => {
        setCurrentAnswer(dataIdentifier);
        setAnswerKey((prevAnswerKey) => ({
            ...prevAnswerKey,
            [dataIdentifier as keyof typeof prevAnswerKey]: {
              ...prevAnswerKey[dataIdentifier as keyof typeof prevAnswerKey],
              userAnswer: currentlySelectingFor,
              hasAnswered: true
            },
          }));

          setColoredAnswer(event);
          
          
    }

    const handleSubmitAnswers = () => {
        let correct = 0;
        let total = 0;
        Object.values(answerKey).forEach((answer: AnswerData) => {
            if (answer.correctAnswer === answer.userAnswer) {
                answer.correct = true;
                correct++;
            } else {
                answer.correct = false;
            }
            total++;
        });
        testData.score_percent_string = `${Math.round((correct / total) * 100)}%`
        testData.score_percent = correct / total;
        testData.score_correct = correct;
        console.log(testData)
    }

    const setColoredAnswer = (event:any) => {
        const colors = ['always', 'mid', 'late', 'fold'];
        let clickedElement = event.currentTarget;
        clickedElement.classList.remove('always', 'mid', 'late');
        clickedElement.classList.add(colors[currentlySelectingFor])
    }

    const [chartCleared, setChartCleared] = useState(false); // State variable

    const clearChart = () => {
      const tableCells = document.querySelectorAll('td');
      tableCells.forEach(cell => {
        cell.classList.remove('always', 'mid', 'late');
      });

      Object.values(answerKey).forEach((answer: AnswerData) => {
        answer.userAnswer = -1;
        answer.hasAnswered = false
        answer.correct = false;
      });
  
      setChartCleared(true); // Call the setter function to update state
    };



    let currentRow = -1;
    let totalRows = Math.max(...Object.values(answerKey).map((item) => item.row)) + 1;

    return (
        <>
            <h2>Pairs and Suited Hands</h2>
            <div>
                <div className="flex">
                    <h4>Selecting for: &nbsp;</h4>
                    <h4 className="text-primary">
                        {selectionOptions[currentlySelectingFor]}
                    </h4>
                </div>
                <div className="flex gap-sm">
                    <button
                        className={currentlySelectingFor === 0 ? "active" : ""}
                        id="selection-button"
                        onClick={() => handleCurrentlySelectingForClick(0)}
                    >
                        {selectionOptions[0]}
                    </button>
                    <button
                        className={currentlySelectingFor === 1 ? "active" : ""}
                        id="selection-button"
                        onClick={() => handleCurrentlySelectingForClick(1)}
                    >
                        {selectionOptions[1]}
                    </button>
                    <button
                        className={currentlySelectingFor === 2 ? "active" : ""}
                        id="selection-button"
                        onClick={() => handleCurrentlySelectingForClick(2)}
                    >
                        {selectionOptions[2]}
                    </button>
                    <button
                        className={currentlySelectingFor === 3 ? "active" : ""}
                        id="selection-button"
                        onClick={() => handleCurrentlySelectingForClick(3)}
                    >
                        {selectionOptions[3]}
                    </button>
                </div>
                <button className='btn-secondary' onClick={()=>handleSubmitAnswers()}>Submit Answers</button>
                <button onClick={()=>clearChart()}>Clear Answers</button>
            </div>
            <table>
            <tbody>
                {Array.from({ length: totalRows }, (_, rowIndex) => {
                    currentRow++;
                    return (
                        <tr key={rowIndex}>
                            {Object.keys(answerKey).map((answer) => {
                                if (answerKey[answer as keyof typeof answerKey].row === currentRow) {

                                    return (
                                        <td
                                            key={answer}
                                            data-identifier={answer}
                                            data-position={answerKey[answer].row}
                                            data-answer={answerKey[answer].correctAnswer}
                                            onClick={(event) =>
                                                handleChartClick(
                                                    event.currentTarget.getAttribute("data-identifier")!,
                                                    event
                                                )
                                            }
                                        >
                                            <p>{answer}</p>
                                        </td>
                                    );
                                } else {
                                    return null; // Skip rendering the cells for this row
                                }
                            })}
                            
                        </tr>
                    );
                })}
            </tbody>

            </table>

        </>
    );
}

export default ChartPractice;

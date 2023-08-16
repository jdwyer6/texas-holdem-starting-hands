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
    }

    interface AnswerKey {
        [key: string]: AnswerData;
      }
    
    const initialAnswerKey: AnswerKey = {
        "A-A": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "A-K": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "K-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "Q-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "J-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "T-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "9-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 0},
        "8-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0},
        "7-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0},
        "6-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0},
        "5-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 0},
        "4-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 0},
        "3-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 0},
        "K-K": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "A-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "K-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "Q-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "J-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "T-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 1},
        "9-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 1},
        "8-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 1},
        "7-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 1},
        "6-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 1},
        "5-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 1},
        "4-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 1},
        "Q-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "A-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "K-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-9": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 2},
        "J-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 2},
        "T-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 2},
        "9-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 2},
        "8-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2},
        "7-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2},
        "6-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2},
        "5-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 2},
        "J-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "A-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "K-9": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 3},
        "Q-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 3},
        "J-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 3},
        "T-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 3},
        "9-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3},
        "8-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3},
        "7-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3},
        "6-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 3},
        "T-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "A-9": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 4},
        "K-8": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 4},
        "Q-7": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4},
        "J-6": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4},
        "T-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4},
        "9-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4},
        "8-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4},
        "7-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 4},
        "9-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "A-8": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 5},
        "K-7": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 5},
        "Q-6": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5},
        "J-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5},
        "T-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5},
        "9-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5},
        "8-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 5},
        "8-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6},
        "A-7": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 6},
        "K-6": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 6},
        "Q-5": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6},
        "J-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6},
        "T-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6},
        "9-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 6},
        "7-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 7},
        "A-6": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 7},
        "K-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 7},
        "Q-4": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 7},
        "J-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 7},
        "T-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 7},
        "6-6": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 8},
        "A-5": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 8},
        "K-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 8},
        "Q-3": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 8},
        "J-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 8},
        "5-5": {correctAnswer: 1, userAnswer: -1, hasAnswered: false, row: 9},
        "A-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 9},
        "K-3": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 9},
        "Q-2": {correctAnswer: 3, userAnswer: -1, hasAnswered: false, row: 9},
        "4-4": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 10},
        "A-3": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 10},
        "K-2": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 10},
        "3-3": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 11},
        "A-2": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 11},
        "2-2": {correctAnswer: 2, userAnswer: -1, hasAnswered: false, row: 12}
    };

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

    const saveTestAnswers = () => {

    }

    const setColoredAnswer = (event:any) => {
        const colors = ['always', 'mid', 'late', 'fold'];
        let clickedElement = event.currentTarget;
        clickedElement.classList.remove('always', 'mid', 'late');
        clickedElement.classList.add(colors[currentlySelectingFor])
    }

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
            </div>
            <table>
            <tbody>
                {Array.from({ length: totalRows }, (_, rowIndex) => {
                    currentRow++;
                    return (
                        <tr key={rowIndex}>
                            {Object.keys(answerKey).map((answer) => {
                                if (answerKey[answer as keyof typeof answerKey].row === currentRow) {
                                    console.log("Rows: ", currentRow);

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

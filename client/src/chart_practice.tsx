import React from 'react';
import { useState } from 'react';

const ChartPractice: React.FC = () => {
    const [currentlySelectingFor, setCurrentlySelectingFor]= useState(0);
    const selectionOptions = ['Always Raise', 'Raise from Mid-Late Position', 'Raise from Late Position']
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
        "9-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "8-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "7-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "6-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "5-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "4-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "3-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 0},
        "K-K": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "A-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "K-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "Q-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "J-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "T-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "9-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "8-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "7-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "6-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "5-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "4-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 1},
        "Q-Q": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "Q-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 2},
        "J-J": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "J-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 3},
        "T-T": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "T-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "T-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "T-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "T-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "T-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "T-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 4},
        "9-9": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "9-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "9-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "9-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "9-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "9-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 5},
        "8-8": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6},
        "8-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6},
        "8-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6},
        "8-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6},
        "8-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 6},
        "7-7": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 7},
        "7-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 7},
        "7-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 7},
        "7-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 7},
        "6-6": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 8},
        "6-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 8},
        "6-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 8},
        "5-5": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 9},
        "5-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 9},
        "4-4": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 10},
        "3-3": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 11},
        "2-2": {correctAnswer: 0, userAnswer: -1, hasAnswered: false, row: 11},
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

    const setColoredAnswer = (event:any) => {
        const colors = ['always', 'mid', 'late'];
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
            <table>
                <tbody>
                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="A-A"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-A</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="A-K"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-K</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="K-Q"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-Q</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="Q-J"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-J</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="J-T"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-T</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="T-9"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-9</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="9-8"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-8</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="8-7"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-7</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="7-6"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>7-6</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="6-5"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>6-5</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="5-4"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>5-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="4-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>4-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="3-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>3-2</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="K-K"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-K</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="A-Q"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-Q</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="K-J"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-J</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="Q-T"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-T</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="J-9"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-9</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="T-8"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-8</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="9-7"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-7</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="8-6"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-6</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="7-5"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>7-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="6-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>6-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="5-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>5-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="4-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>4-2</p>
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="Q-Q"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-Q</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="A-J"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-J</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="K-T"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-T</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="Q-9"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-9</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="J-8"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-8</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="T-7"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-7</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="9-6"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-6</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="8-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="7-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>7-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="6-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>6-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="5-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>5-2</p>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="J-J"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-J</p>
                        </td>
                        <td
                            data-color="green-medium"
                            data-identifier="A-T"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-T</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="K-9"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-9</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="Q-8"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-8</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="J-7"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-7</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="T-6"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-6</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="9-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="8-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="7-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>7-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="6-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>6-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="T-T"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-T</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="A-9"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-9</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-8"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-8</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="Q-7"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-7</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="J-6"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-6</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="T-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="9-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="8-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="7-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>7-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="9-9"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-9</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="A-8"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-8</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-7"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-7</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="Q-6"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-6</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="J-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="T-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="9-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="8-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="8-8"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>8-8</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="A-7"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-7</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-6"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-6</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="Q-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="J-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="T-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="9-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>9-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-medium"
                            data-identifier="7-7"
                            data-position="0"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>7-7</p>
                        </td>
                        <td
                            data-color="green-light"
                            data-identifier="A-6"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-6</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-5</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="Q-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="J-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="T-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>T-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-light"
                            data-identifier="6-6"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>6-6</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="A-5"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-5</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-4</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="Q-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="J-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>J-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="green-light"
                            data-identifier="5-5"
                            data-position="1"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>5-5</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="A-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-4</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-3</p>
                        </td>
                        <td
                            data-color="red-light"
                            data-identifier="Q-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>Q-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="red-light-2"
                            data-identifier="4-4"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>4-4</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="A-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-3</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="K-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>K-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="red-light-2"
                            data-identifier="3-3"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>3-3</p>
                        </td>
                        <td
                            data-color="red-light-2"
                            data-identifier="A-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>A-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td
                            data-color="red-light-2"
                            data-identifier="2-2"
                            data-position="2"
                            onClick={(event) =>
                                handleChartClick(
                                    event.currentTarget.getAttribute(
                                        "data-identifier"
                                    )!,
                                    event
                                )
                            }
                        >
                            <p>2-2</p>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ChartPractice;

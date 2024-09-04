'use client';

import { useState } from "react";
import Question from "@/componets/Question/Question";
import ProgressIndicator from "@/componets/ProgressIndicator/ProgressIndicator";
import Score from "@/componets/Score/Score";
import styles from "./quiz.module.scss";

const Quiz = ({ questions }) => {
    const [choseAnswers, setChoseAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerClick = (answerIndex, isCorrect) => {
        if (!isSubmitted && !(currentQuestionIndex in choseAnswers)) {
            setChoseAnswers((prev) => ({
                ...prev,
                [currentQuestionIndex]: { answerIndex, isCorrect },
            }));
            if (isCorrect) {
                setScore((prev) => prev + 1);
            }
        }
    };

    const handleSubmit = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.quizBorder}>
                <div className={styles.quizContent}>
                    <Question
                        question={questions[currentQuestionIndex].question}
                        answers={questions[currentQuestionIndex].answers}
                        choseAnswers={choseAnswers}
                        currentQuestionIndex={currentQuestionIndex}
                        handleAnswerClick={handleAnswerClick}
                    />
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
                    </button>
                    <ProgressIndicator
                        questions={questions}
                        choseAnswers={choseAnswers}
                    />
                    {isSubmitted && (
                        <Score
                            score={score}
                            totalQuestions={questions.length}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;





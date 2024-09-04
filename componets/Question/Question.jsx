import styles from "../Quiz/quiz.module.scss";
import Answer from "@/componets/Answer";
const Question = ({ question, answers, choseAnswers, currentQuestionIndex, handleAnswerClick }) => (
    <div className={styles.questionBlock}>
        <h3 className={styles.questionTitle}>
            Question {currentQuestionIndex + 1} of {answers.length}
        </h3>
        <h3 className={styles.sunQuestion}>{question}</h3>
        <ul className={styles.answers}>
            {answers.map((answer, aIndex) => (
                <Answer
                    key={aIndex}
                    index={aIndex}
                    text={answer.text}
                    isSelected={choseAnswers[currentQuestionIndex]?.answerIndex === aIndex}
                    isCorrect={answer.isCorrect}
                    onClick={() => handleAnswerClick(aIndex, answer.isCorrect)}
                />
            ))}
        </ul>
    </div>
);

export default Question;

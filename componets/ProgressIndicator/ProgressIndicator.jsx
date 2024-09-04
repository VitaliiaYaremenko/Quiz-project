import styles from "../Quiz/quiz.module.scss";

const ProgressIndicator = ({ questions, choseAnswers }) => (
    <div className={styles.progressContainer}>
        {questions.map((_, index) => (
            <div
                key={index}
                className={`${styles.progressIndicator} ${
                    choseAnswers[index] !== undefined
                        ? choseAnswers[index].isCorrect
                            ? styles.correct
                            : styles.incorrect
                        : ''
                }`}
            ></div>
        ))}
    </div>
);

export default ProgressIndicator;

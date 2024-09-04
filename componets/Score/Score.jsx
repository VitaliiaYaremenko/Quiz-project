import styles from "../Quiz/quiz.module.scss";

const Score = ({ score, totalQuestions }) => (
    <div className={styles.score}>
        Your score is {score} out of {totalQuestions}
    </div>
);

export default Score;

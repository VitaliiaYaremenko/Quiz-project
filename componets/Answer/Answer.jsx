import styles from "../Quiz/quiz.module.scss";

const Answer = ({ text, isSelected, isCorrect, onClick }) => (
    <li
        className={`${styles.answer} ${
            isSelected
                ? isCorrect
                    ? styles.correctQuestion
                    : styles.incorrectAnswer
                : ""
        }`}
        onClick={onClick}
    >
        {text}
    </li>
);

export default Answer;

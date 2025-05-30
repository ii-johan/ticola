import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../styles/Test.module.css';
import { questions } from '../data/colaData';

const MBTICOLATest: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [mbtiScores, setMbtiScores] = useState<Record<string, number>>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const [colaScores, setColaScores] = useState<Record<string, number>>({
    C: 0, D: 0, O: 0, U: 0, L: 0, M: 0, A: 0, Y: 0
  });

  const answerWeights: { [key: string]: number } = {
    'Yes++': 3,
    'Yes+': 2,
    'Yes': 1,
    'Mid': 0,
    'No': -1,
    'No+': -2,
    'No++': -3,
  };

  const getOppositeInfluence = (influence: string): string => {
    switch (influence) {
      case 'E': return 'I'; case 'I': return 'E';
      case 'S': return 'N'; case 'N': return 'S';
      case 'T': return 'F'; case 'F': return 'T';
      case 'J': return 'P'; case 'P': return 'J';
      case 'C': return 'D'; case 'D': return 'C';
      case 'O': return 'U'; case 'U': return 'O';
      case 'L': return 'M'; case 'M': return 'L';
      case 'A': return 'Y'; case 'Y': return 'A';
      default: return '';
    }
  };

  const handleAnswer = (buttonValue: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const weight = answerWeights[buttonValue];

    if (currentQuestion.category === 'MBTI') {
      setMbtiScores(prevScores => {
        const newScores = { ...prevScores };
        if (weight > 0) {
          newScores[currentQuestion.typeInfluence] += weight;
        } else if (weight < 0) {
          const oppositeInfluence = getOppositeInfluence(currentQuestion.typeInfluence);
          newScores[oppositeInfluence] += Math.abs(weight);
        }
        return newScores;
      });
    } else if (currentQuestion.category === 'COLA') {
      setColaScores(prevScores => {
        const newScores = { ...prevScores };
        if (weight > 0) {
          newScores[currentQuestion.typeInfluence] += weight;
        } else if (weight < 0) {
          const oppositeInfluence = getOppositeInfluence(currentQuestion.typeInfluence);
          newScores[oppositeInfluence] += Math.abs(weight);
        }
        return newScores;
      });
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Redirect to the result page with scores as query parameters
      router.push({
        pathname: '/result',
        query: {
          mbti: JSON.stringify(mbtiScores),
          cola: JSON.stringify(colaScores),
        },
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const buttonLabels = ['Yes++', 'Yes+', 'Yes', 'Mid', 'No', 'No+', 'No++'];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MBTI COLA TEST</h1>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <p className={styles.questionNumber}>{currentQuestionIndex + 1} / {questions.length}</p>
      <div className={styles.questionBox}>
        <p className={styles.questionStatement}>{currentQuestion.statement}</p>
        <div className={styles.options}>
          {buttonLabels.map((label) => (
            <button
              key={label}
              className={`${styles.button} ${styles[`button${label.replace(/[+-]/g, '')}`]}`}
              onClick={() => handleAnswer(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MBTICOLATest;
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Result.module.css'; // Separate CSS for Result page

const ResultPage: React.FC = () => {
  const router = useRouter();
  const [mbtiScores, setMbtiScores] = useState<Record<string, number> | null>(null);
  const [colaScores, setColaScores] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    if (router.isReady) {
      const { mbti, cola } = router.query;
      if (typeof mbti === 'string' && typeof cola === 'string') {
        try {
          setMbtiScores(JSON.parse(mbti));
          setColaScores(JSON.parse(cola));
        } catch (error) {
          console.error("Failed to parse scores from URL:", error);
          // Redirect to test page or show an error
          router.push('/');
        }
      } else {
        // If no query parameters, redirect to test page
        router.push('/');
      }
    }
  }, [router.isReady, router.query, router]);

  const calculateTypeAndPercentages = (scores: Record<string, number>, typePairs: [string, string][]) => {
    let resultType = '';
    const percentages: Record<string, number> = {};

    typePairs.forEach(([type1, type2]) => {
      const score1 = scores[type1] || 0;
      const score2 = scores[type2] || 0;
      const totalScore = score1 + score2;

      if (totalScore === 0) {
        // 총점이 0인 경우, 기본값으로 첫 번째 유형을 선택하고 각각 50% 할당
        resultType += type1;
        percentages[type1] = 50;
        percentages[type2] = 50;
      } else {
        // 각 유형의 실제 점수 비율을 계산
        const percentageOfScore1 = Math.round((score1 / totalScore) * 100);
        const percentageOfScore2 = 100 - percentageOfScore1; // 합계 100%를 위해 나머지 계산

        // 점수가 높은 쪽을 결과 유형으로 결정 (동점일 경우 type1)
        if (score1 >= score2) {
          resultType += type1;
        } else {
          resultType += type2;
        }

        // 각 유형의 계산된 백분율을 정확히 할당
        percentages[type1] = percentageOfScore1;
        percentages[type2] = percentageOfScore2;
      }
    });

    return { resultType, percentages };
  };

  const mbtiTypePairs: [string, string][] = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']];
  const colaTypePairs: [string, string][] = [['C', 'D'], ['O', 'U'], ['L', 'M'], ['A', 'Y']];

  if (!mbtiScores || !colaScores) {
    return (
      <div className={styles.container}>
        <p>결과를 불러오는 중...</p>
      </div>
    );
  }

  const { resultType: mbtiResult, percentages: mbtiPercentages } = calculateTypeAndPercentages(mbtiScores, mbtiTypePairs);
  const { resultType: colaResult, percentages: colaPercentages } = calculateTypeAndPercentages(colaScores, colaTypePairs);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My MBTI-COLA Type?</h1>
      <div className={styles.topResultBox}>
        <p className={styles.finalType}>{mbtiResult}-{colaResult}</p>
      </div>

      <div className={styles.resultBox}>
        <h2>MBTI 유형 분석</h2>
        {mbtiTypePairs.map(([type1, type2]) => {
          const perc1 = mbtiPercentages[type1];
          const perc2 = mbtiPercentages[type2];
          return (
            <div key={type1 + type2} className={styles.progressBarWrapper}>
              <div className={styles.typeLabel}>{type1}</div>
              <div className={styles.percentageBarContainer}>
                <div className={styles.percentageBarLeft} style={{ width: `${perc1}%` }}></div>
                <div className={styles.percentageBarRight} style={{ width: `${perc2}%` }}></div>
              </div>
              <div className={styles.typeLabel}>{type2}</div>
              <div className={styles.percentageText}>{perc1}% vs {perc2}%</div>
            </div>
          );
        })}
      </div>

      <div className={styles.resultBox}>
        <h2>COLA 유형 분석</h2>
        {colaTypePairs.map(([type1, type2]) => {
          const perc1 = colaPercentages[type1];
          const perc2 = colaPercentages[type2];
          return (
            <div key={type1 + type2} className={styles.progressBarWrapper}>
              <div className={styles.typeLabel}>{type1}</div>
              <div className={styles.percentageBarContainer}>
                <div className={styles.percentageBarLeft} style={{ width: `${perc1}%` }}></div>
                <div className={styles.percentageBarRight} style={{ width: `${perc2}%` }}></div>
              </div>
              <div className={styles.typeLabel}>{type2}</div>
              <div className={styles.percentageText}>{perc1}% vs {perc2}%</div>
            </div>
          );
        })}
      </div>

      <button className={styles.restartButton} onClick={() => router.push('/')}>다시 테스트하기</button>
    </div>
  );
};

export default ResultPage;
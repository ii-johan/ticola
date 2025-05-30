// pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'; // 필요하다면 별도 스타일 파일 생성

const HomePage: React.FC = () => {
  const router = useRouter();

  const startTest = () => {
    router.push('/test');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MBTI COLA TEST</h1>
      <p className={styles.description}>
        MBTI는 선천적 성향이며, COLA는 후천적 습성입니다. MBTI를 통해 나를 알고 COLA를 통해 나를 개선하세요!
      </p>
      <button className={styles.startButton} onClick={startTest}>
        START 112
      </button>
    </div>
  );
};

export default HomePage;
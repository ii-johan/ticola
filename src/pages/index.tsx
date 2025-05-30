// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // 페이지가 로드되자마자 /test 경로로 리다이렉션
    router.push('/test');
  }, [router]);

  return (
    <div>
      <p>테스트 페이지로 이동 중...</p>
    </div>
  );
};

export default HomePage;
export const questions = [
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 1,
    statement: '사람들과 어울릴 때 에너지가 생긴다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 2,
    statement: '생각이 정리된 후에 대화를 시작한다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 3,
    statement: '구체적인 사례와 증거를 요구한다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 4,
    statement: '숨겨진 의미와 가능성을 중시한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 5,
    statement: '논리적인 근거에 따라 판단해야한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 6,
    statement: '사실보다 상대 입장이 더 중요하다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 7,
    statement: '계획을 세우고 체계적으로 일한다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 8,
    statement: '유연하게 즉흥적으로 잘 대처한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 9,
    statement: '사람들을 이끌어가는 리더십이 있다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 10,
    statement: '내 의견을 강하게 주장하지 못한다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Outlier) / U (Upholder)
  {
    id: 11,
    statement: '비판에 유쾌하고 능청스럽게 받아친다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 12,
    statement: '불쾌하면 표정이 얼굴에 다 드러난다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Linguist) / M (Mediator)
  {
    id: 13,
    statement: '대화할 때 티키타카를 매우 잘한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 14,
    statement: '감정을 겉으로 잘 드러내지 못한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 15,
    statement: '분위기를 위해 생각을 종종 감춘다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 16,
    statement: '지시하고 사람들이 따르는게 익숙하다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 17,
    statement: '낯선 상황에서 내가 먼저 말을 건다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 18,
    statement: '휴일을 집에서 보내게 편하다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 19,
    statement: '반복적으로 하는 일에 능숙하다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 20,
    statement: '세부사항보다 전체흐름을 잘 파악한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 21,
    statement: '일처리는 이성적으로 이뤄져야한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 22,
    statement: '비판은 조심스럽고 배려있게 한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 23,
    statement: '약속 시간에 거의 늦지 않는다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 24,
    statement: '마감시한에 쫓겨 부랴부랴 일한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 25,
    statement: '많은 이성앞에서 당당하게 지나간다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 26,
    statement: '상대의 눈을 잘 쳐다보지 못한다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 27,
    statement: '나를 농담 대상으로 삼아도 괜찮다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 28,
    statement: '실수하면 스스로에게 실망을 잘한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 29,
    statement: '대화하는게 물흐르듯 자연스럽다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 30,
    statement: '갑자기 질문하면 말문이 턱 막힌다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 31,
    statement: '새치기 당해도 그냥 양보하는 편이다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 32,
    statement: '군중에게 연설하면 희열이 솟구친다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 33,
    statement: '즉흥적인 만남도 즐겁게 나간다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 34,
    statement: '활동보다 내적집중의 시간이 편하다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 35,
    statement: '이미 입증된 방식을 더 신뢰한다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 36,
    statement: '요약적이고 상징적인 설명을 잘한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 37,
    statement: '원칙과 기준에 벗어나면 용납 안한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 38,
    statement: '관계나 맥락을 잘 파악하고 배려한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 39,
    statement: '계획표를 작성하는 일에 익숙하다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 40,
    statement: '여행일정이 갑자기 바뀌어도 즐겁다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 41,
    statement: '노래,연설로 동경의 시선을 받아봤다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 42,
    statement: '거절당할까봐 고백할 엄두도 못냈다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 43,
    statement: '분위기 전환 장난을 잘 친다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 44,
    statement: '나에게는는 쉽게 장난을 치지 못한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 45,
    statement: '말을 걸면 호의로 받아주는 편이다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 46,
    statement: '상대방과 대화가 겉돌 때가 많다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 47,
    statement: '갈등이 생기면 피하기보다 중재한다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 48,
    statement: '직장 상사도 능숙하게 다룰수 있다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 49,
    statement: '긴시간 대화를 해도 지치지 않는다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 50,
    statement: '새로운 관계를 맺는 일에 신중하다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 51,
    statement: '은유적으로 돌려 말하는걸 싫어한다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 52,
    statement: '만약에 말야 식으로 자주 말한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 53,
    statement: '조언은 되도록 솔직해야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 54,
    statement: '갈등은 공감과 대화로 풀어야한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 55,
    statement: '결정을 빠르게 내리고 바로 실행한다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 56,
    statement: '내 방은 정리되어 있지 않다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 57,
    statement: '내 말에 모두 자연스럽게 따른다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 58,
    statement: '기 세보이는 사람을 보면 위축된다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 59,
    statement: '약점을 드러내는 일이 어렵지 않다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 60,
    statement: '실수를 지적당하면 민감하게 대응한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 61,
    statement: '상대에게 반응하는 리액션이 빠르다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 62,
    statement: '말이 끊길까봐 아무 질문이나 한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 63,
    statement: '장남이 아니어도 어머니를 모시겠다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 64,
    statement: '상대의 실수를 지적해서 잘 고쳐준다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 65,
    statement: '대화하며 생각들이 저절로 정리된다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 66,
    statement: '내 본 모습을 쉽게 드러내지 않는다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 67,
    statement: '실제성과 실현 가능성이 중요하다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 68,
    statement: '나는 미래에 대한 예측이 정확하다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 69,
    statement: '돌려 말하지않고 직설적으로 말한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 70,
    statement: '정확함보다는 따뜻함이 더 중요하다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 71,
    statement: '액자가 삐뚤어져 있으면 신경쓰인다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 72,
    statement: '일의 진행과정을 보면서 결정한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 73,
    statement: '난감한 질문에 능숙하게 되돌려준다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 74,
    statement: '명령보다 지시받는게 마음이 편하다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 75,
    statement: '갈등이 생기면 피하기보다 해결한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 76,
    statement: '사람들이 나를 조심스러워 한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 77,
    statement: '상대의 말에 잘 몰입하며 대화한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 78,
    statement: '말하는 주제가 자꾸 엇갈려 충돌한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 79,
    statement: '고민상담을 원하는 사람들이 많다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 80,
    statement: '동료들의 서툰 일처리에 속에서는 열불이 난다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 81,
    statement: '내 의견을 말하는데 주저함이 없다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 82,
    statement: '새로운 친구를 사귀는게 서툴다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 83,
    statement: '사람들의 말을 잘 믿는 편이다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 84,
    statement: '직감적으로 떠오르는 아이디어가 많다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 85,
    statement: '교통신호와 법규를 어기지 않는다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 86,
    statement: '연예인들의 소식에 관심이 많다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 87,
    statement: '흐름을 예측할수 있어야 안심된다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 88,
    statement: '일단 해보며 배우는 스타일이다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 89,
    statement: '말투가 요란하거나 주책스럽지 않다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 90,
    statement: '부당한 일을 당해도 대응하지 못한다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 91,
    statement: '감정을 숨기고 능청스럽게 대처한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 92,
    statement: '상대의 말에 쉽게 상처를 받는다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 93,
    statement: '논리가 없어도 참고 잘 들어준다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 94,
    statement: '내가 말하는 비율이 30%를 못넘는다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 95,
    statement: '문제가 생기면 책임지고 해결한다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 96,
    statement: '조언을 들으면 기분이 불쾌하다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 97,
    statement: '오늘은 어떤 일이 벌어질까 신난다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 98,
    statement: '과거의 행동을 곱씹으며 후회한다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 99,
    statement: '손재주가 좋다는 말을 많이 듣는다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 100,
    statement: '숨겨진 의미와 패턴을 잘 파악한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 101,
    statement: '결정할때 개인감정은 배제해야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 102,
    statement: '지나친 냉절함은 상처가 될수 있다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 103,
    statement: '계획이 틀어지면 스트레스를 받는다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 104,
    statement: '내일의 걱정보다는 오늘에 집중한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 105,
    statement: '의견들을 취합하여 마무리를 잘한다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 106,
    statement: '모임에서 존재감 없이 조용히 있다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 107,
    statement: '되도록 낙천적으로 살려고 한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 108,
    statement: '강하고 세보인다는 소리를 들어봤다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 109,
    statement: '대화중 공감의 터치를 많이 받는다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 110,
    statement: '내가 말하면 모두 산만해진다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 111,
    statement: '팀을 위해 눈에 띄지 않아도 괜찮다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 112,
    statement: '답글이 늦으면 답답해서 화가 난다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
];
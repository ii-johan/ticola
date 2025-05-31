export const questions = [
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 1,
    statement: '여러 사람과 어울릴 때 에너지가 생긴다.',
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
    statement: '막연한 예상보다 구체적인 증거를 요구한다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 4,
    statement: '미래의 가능성과 숨겨진 의미를 파악하는것을 즐긴다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 5,
    statement: '판단은 논리적 근거에 따라 이뤄져야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 6,
    statement: '사실 여부보다 상대 입장이 더 중요할수 있다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 7,
    statement: '계획을 세우고 체계적으로 일을 처리한다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 8,
    statement: '상황에 따라 유연하게 즉흥적으로 잘 대처한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 9,
    statement: '헌신적으로 사람들을 이끌어가는 리더십이 있다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 10,
    statement: '의견을 강하게 주장하고, 일을 거침없이 추진한다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 11,
    statement: '공격이나 비판에 능청스럽게 잘 받아친다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 12,
    statement: '불쾌하면 그 표정이 얼굴에 다 드러난다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 13,
    statement: '대화할 때 티키타카를 잘한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 14,
    statement: '생각이나 감정을 겉으로 잘 드러내지 못한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 15,
    statement: '나는 말과 행동이 시끄러운 편이 아니다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 16,
    statement: '사람과 만날때 부끄럽고 낯가림이 많다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 17,
    statement: '낯선 상황에서 먼저 말을 거는 편이다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 18,
    statement: '나는 집돌이 집순이에 가깝다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 19,
    statement: '나는 반복적으로 하는 일에 능숙하다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 20,
    statement: '세부사항보다 전체 흐름을 우선적으로 본다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 21,
    statement: '일처리는 최대한 이성적으로 이루어져야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 22,
    statement: '비판은 조심스럽고 배려있게 해야 한다.',
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
    statement: '마감 시한에 쫓겨 부랴부랴 일을 마무리 한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 25,
    statement: '모임에서 방향을 정하는 역할을 자주 맡는다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 26,
    statement: '강력한 주장을 펼쳐 사람들을 잘 굴복시킨다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 27,
    statement: '나를 농담대상으로 삼아도 유쾌하게 받아들인다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 28,
    statement: '사소한 잘못에도 스스로에게 실망을 잘한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 29,
    statement: '좋은일이 있으면 그 감정이 즉각 튀어나온다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 30,
    statement: '상대가 갑자기 질문하면 말이 턱 막힌다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 31,
    statement: '노래, 연설 등을 잘해서 동경의 시선을 받아본 적이 있다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 32,
    statement: '촌스럽다는 평가가 혹시 나에게 있을까 불안하다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 33,
    statement: '예정에 없던 즉흥적인 만남도 즐겁다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 34,
    statement: '외부 활동보다 내적 집중의 시간이 더 즐겁다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 35,
    statement: '이미 입증된 방식으로 시행하는게 안심이 된다.',
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
    statement: '원칙과 기준에 벗어나면 용납이 안된다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 38,
    statement: '사람간의 관계나 맥락을 잘 파악하고 배려한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 39,
    statement: '계획표를 작성하는 일이 익숙하다.',
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
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 41,
    statement: '갈등이 생기면 피하기보다 중재하려 한다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 42,
    statement: '내 생각대로 따라오도록 사람들을 선동한 적이 있다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 43,
    statement: '진지한 분위기를 풀기 위해 일부러 장난을 친다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 44,
    statement: '사람들이 나에게 쉽게 장난을 걸지 못한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 45,
    statement: '내가 말을 걸면 상대도 호의로 받아주는 편이다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 46,
    statement: '속마음을 표현하지 못해 대화가 자주 끊긴다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 47,
    statement: '많은 사람을 상대에도 전혀 위축되지 않는다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 48,
    statement: '나에게는 주책스러운 면이 있다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 49,
    statement: '긴 시간 대화를 해도 지치지 않는다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 50,
    statement: '새로운 관계를 만드는데 신중한 편이다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 51,
    statement: '추상적, 은유적 농담이 별로 재미없다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 52,
    statement: '만약에 말야 식의 말투를 많이 사용한다.',
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
    statement: '갈등은 공감과 대화로 풀어야 한다.',
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
    statement: '내 방은 꽤 지저분하다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 57,
    statement: '내 말에 사람들이 자연스럽게 따른다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 58,
    statement: '사람들의 실수를 지적해서 즉각 고쳐준다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 59,
    statement: '내 약점을 드러내는 일이 그다지 창피하지 않다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 60,
    statement: '남들이 내 잘못을 지적하면 민감하게 반응한다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 61,
    statement: '상대의 말에 반응하는 리액션이 빠른 편이다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 62,
    statement: '대화중 말이 끊길까봐 아무 질문이나 한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 63,
    statement: '많은 이성에 둘러싸여 있어도 전혀 부끄럽지 않다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 64,
    statement: '나는 연극적인 말투를 자주 구사한다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 65,
    statement: '말을 하면서 생각이 정리된다.',
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
    statement: '실제성과 실현가능성을 중요하게 생각한다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 68,
    statement: '나는 미래에 있을 일에 대한 예측이 정확하다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 69,
    statement: '돌려서 말하지 않고 직설적으로 말하는 편이다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 70,
    statement: '정확함보다는 따뜻함이 신뢰의 바탕이다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 71,
    statement: '액자가 삐뚤어져 있으면 엄청 신경이 거슬린다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 72,
    statement: '진행되는 흐름을 보며 그때그때 일을 결정한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 73,
    statement: '사람들이 내게 상담요청을 많이 한다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 74,
    statement: '높은 위치에서 지시를 내리는 상황이 신난다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 75,
    statement: '갈등이 생기면 피하기보다 적극적으로 풀려고 한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 76,
    statement: '사람들이 나를 조심스러워 하며 예의를 갖춘다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 77,
    statement: '대화를 하면 상대의 말에 잘 몰입한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 78,
    statement: '상대와 말하는 주제가 자꾸 엇갈려 충돌한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 79,
    statement: '나의 말과 행동에는 전혀 꾸밈이 없다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 80,
    statement: '분위기에 위축되어 자주 눈치를 살핀다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 81,
    statement: '모임에서 내 의견을 말하는데 주저함이 없다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 82,
    statement: '새로운 친구를 만드는데 서툴고 부담이 된다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 83,
    statement: '사람들이 말하면 곧이곧대로 믿는 편이다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 84,
    statement: '직감적으로 떠오르는 아이디어를 신뢰한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 85,
    statement: '새로운 지식과 정보의 습득에 관심이 많다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 86,
    statement: '연예인 신변잡기에 대한 이야기에 관심이 많다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 87,
    statement: '처음부터 끝까지 흐름을 예측해야 안심이 된다.',
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
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 89,
    statement: '문제가 생기면 내가 좀 손해보더라도 책임지고 해결한다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 90,
    statement: '누가 나에게 조언을 하면 기분이 불쾌하다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 91,
    statement: '화난 감정을 얼굴에 드러내지 않으려 애쓴다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 92,
    statement: '상대의 말에 자존심의 상처를 자주 입는다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 93,
    statement: '상대가 무슨 말을 할지 미리 짐작하며 듣는다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 94,
    statement: '대화중 내가 말하는 비율이 30% 이내로 적다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 95,
    statement: '나는 센스있는 농담을 아주 잘한다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 96,
    statement: '여러명이 대화하고 있으면 잘 끼지 못한다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 97,
    statement: '오늘 하루 어떤 일이 벌어질까 신난다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 98,
    statement: '과거에 했던 나의 행동을 곱씹으며 후회한다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 99,
    statement: '손재주가 좋다는 소리를 많이 듣는다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 100,
    statement: '의미와 상징을 담아 전달하려 한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 101,
    statement: '가까운 사이라 해도 개인감정은 배제해야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 102,
    statement: '지나친 냉정함은 상처를 줄 수 있다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 103,
    statement: '계획이 중간에 지지부진하면 스트레스를 받는다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 104,
    statement: '오늘에 집중하고 내일은 걱정하지 않는다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Committed Charisma) / D (Dominant Drive)
  {
    id: 105,
    statement: '팀이 잘되면 내가 눈에 띄지 않아도 괜찮다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 106,
    statement: '동료들의 서툰 일처리에 속에서는 열불이 난다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 107,
    statement: '힘든 일이 있어도 낙천적으로 대처한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 108,
    statement: '내 태도가 무섭거나 불편하다는 말을 들어봤다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 109,
    statement: '내가 말하면 사람들이 공감의 터치를 많이 한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 110,
    statement: '내가 설명할때 상대가 딴 생각을 자주 한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Alluring Attitude) / Y (Yawning Yawn)
  {
    id: 111,
    statement: '눈앞에 이성이 백명이 서있어도 당당하게 지나간다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 112,
    statement: '말하고 있는 상대의 눈을 바라보기가 어렵다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
];
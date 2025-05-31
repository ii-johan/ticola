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
    statement: '생각이 정리된 후에 대화를 시작하는 편이다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 3,
    statement: '막연한 예상보다 구체적인 증거를 자주 요구한다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 4,
    statement: '미래의 가능성과 숨겨진 의미를 잘 파악한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 5,
    statement: '판단은 언제나 논리적인 근거를 따라 이뤄져야 한다.',
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
    statement: '나는 계획을 세우고 체계적으로 일을 처리한다.',
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
  // C (Commander) / D (Deferrer)
  {
    id: 9,
    statement: '나에게는 사람들을 이끌어가는 리더십이 있다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 10,
    statement: '많은 사람 앞에사 내 의견을 강하게 주장하지 못한다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Outlier) / U (Upholder)
  {
    id: 11,
    statement: '공격이나 비판에 유쾌하고 능청스럽게 잘 받아친다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 12,
    statement: '나는 불쾌하면 그 표정이 얼굴에 다 드러난다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Linguist) / M (Mediator)
  {
    id: 13,
    statement: '나는 대화할 때 상대방과 티키타카를 잘한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 14,
    statement: '나는 생각이나 감정을 겉으로 잘 드러내지 못한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 15,
    statement: '나는 전체 분위기를 위해 내 생각을 종종 감춘다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 16,
    statement: '내가 지시하고 사람들이 따르는게 늘 자연스럽다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 17,
    statement: '나는 낯선 상황에서 대체로 먼저 말을 거는 편이다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 18,
    statement: '나는 휴일이 되면 집에서 시간을 보내는게 즐겁다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 19,
    statement: '나는 한가지 일을 반복적으로 하는 것에 능숙하다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 20,
    statement: '세부 사항보다 전체 흐름을 잘 파악하는 편이다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 21,
    statement: '모든 일 처리는 최대한 이성적으로 이루어져야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 22,
    statement: '비판은 언제나 조심스럽고 배려있게 해야 한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 23,
    statement: '나는 약속 시간에 늦는 일이 거의 발생하지 않는다.',
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
  // C (Commander) / D (Deferrer)
  {
    id: 25,
    statement: '백명의 이성이 서있어도 당당하게 지나간다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 26,
    statement: '대화중 상대의 눈을 잘 쳐다보지 못하는 편이다.',
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
    statement: '맛있는 음식이나 경치를 보면 상대에게 먼저 표현한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 30,
    statement: '갑자기 상대가 나에게 질문하면 입이 턱 막힌다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 31,
    statement: '누가 새치기하면 바쁜일이 있겠거니 하고고 양보해준다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 32,
    statement: '나는 군중앞에 서면 긴장보다 희열이 마구 솟구친다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 33,
    statement: '나는 예정에 없던 즉흥적인 만남도 즐겁게 나간다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 34,
    statement: '외부 활동보다 내적 집중의 시간이 더 즐겁고 편하다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 35,
    statement: '이미 입증된 방식으로 시행하는게 마음에 안심이 된다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 36,
    statement: '어떤 일에 대한 요약적이고 상징적인 설명을 잘한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 37,
    statement: '형편은 이해해도 원칙과 기준에 벗어나면 용납이 안된다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 38,
    statement: '사람 사이의 관계나 맥락을 잘 파악하고 배려한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 39,
    statement: '나는 목표를 세우고 계획표를 작성하는 일에 익숙하다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 40,
    statement: '여행일정이 갑자기 바뀌어도 당황스럽기보다는 즐겁다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 41,
    statement: '노래,연설 등으로 사람들에게 동경의 시선을 받아봤다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 42,
    statement: '친구들끼리 말하고 있으면 꼭 내 얘기를 하는것 같다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 43,
    statement: '진지한 분위기를 풀기 위해 일부러 장난을 치기도 한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 44,
    statement: '나에게는 쉽게 장난을 치거나 농담을 하지 못한다.',
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
    statement: '속마음을 표현하지 못하고 대화가 겉돌 때가 자주 있다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 47,
    statement: '나는 갈등이 생기면 피하기보다 적극 중재하려 한다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 48,
    statement: '나는 어려운 직장상사라 할지라도 능숙하게 다룰수 있다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 49,
    statement: '나는 사람들과 긴 시간 대화를 해도 지치지 않는다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 50,
    statement: '나는 사람들과 새로운 관계를 만드는데 신중하다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 51,
    statement: '누가 나에게 은유적으로 돌려 말하면 엄청 답답하다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 52,
    statement: '나는 만약에 말이야 식의 말투를 많이 사용한다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 53,
    statement: '조언은 돌려서 말하기보다 되도록 솔직해야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 54,
    statement: '갈등은 옳고그름보다 공감과 대화를 통해 풀어야 한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 55,
    statement: '나는 결정을 빠르게 내리고 곧바로 실행하는 편이다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 56,
    statement: '나는 방청소는 하지만 깔끔하게 정리 해놓지는 않는다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 57,
    statement: '내 말에 사람들이 동의하고 자연스럽게 따르는 편이다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 58,
    statement: '나는 기가 세보이는 사람 앞에서 자주 위축되는 편이다.',
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
    statement: '대화중 말이 끊길까봐 아무 질문이나 하기도 한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 63,
    statement: '장남이 아니어도 홀어머니를 기꺼이 모실 수 있다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 64,
    statement: '사람들의 실수를 지적해서 그 자리에서 고쳐주곤 한다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 65,
    statement: '대화를 진행하면서 생각들이 저절로 정리되는 편이다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 66,
    statement: '나는 상대에게 내 본 모습을 쉽게 드러내지 않는다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 67,
    statement: '어떤 일의 현실적인 실현 가능성을 중요하게 생각한다.',
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
    statement: '나는 돌려서 말하지 않고 직설적으로 말하는 편이다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 70,
    statement: '일의 정확함보다는 마음의 따뜻함이 신뢰의 바탕이다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 71,
    statement: '액자가 삐뚤어져 있으면 나는 엄청 신경이 거슬린다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 72,
    statement: '진행되는 흐름을 보면서 그때그때 일을 결정하는 편이다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 73,
    statement: '나는 난감한 질문을 들으면 더 세게 돌려줄수 있다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 74,
    statement: '나는 조용히 지시를 따라주는게 마음이 편하다.',
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
    statement: '대화를 하면 상대의 말에 잘 몰입하곤 한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 78,
    statement: '상대와 말하는 주제가 자꾸 엇갈려 충돌한다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 79,
    statement: '나에게 고민 상담을 원하는 사람들이 많이 있다.',
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
    statement: '모임에서 내 의견을 말하는데 전혀 주저함이 없다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 82,
    statement: '나는 새로운 친구를 만드는데 서툴고 부담이 많다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 83,
    statement: '나는 사람들이 말하면 곧이곧대로 믿는 편이다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 84,
    statement: '나에게는 직감적으로 떠오르는 아이디어가 많다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 85,
    statement: '나는 교통신호와 법규를 어기는 일이 거의 없다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 86,
    statement: '연예인들의 일상에 대한 소식을 들으면 엄청 재미있다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 87,
    statement: '처음부터 끝까지 흐름을 예측할 수 있어야 안심이 된다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 88,
    statement: '어떤 일이든 일단 해보며 배우는 스타일이다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 89,
    statement: '말투가 요란하거나 주책스럽다는 말을 들은적이 없다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 90,
    statement: '부당한 일을 당해도 더 큰 피해가 올까봐 물러난다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 91,
    statement: '분위기를 위해 감정을 감추고 일부러 망가지기도 한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 92,
    statement: '나는 상대의 말에 자존심의 상처를 쉽게 입는 편이다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 93,
    statement: '상대의 말에 논리가 없어도 참고 잘 들어주는 편이다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 94,
    statement: '대화할 때 내가 말하는 비율이 30% 밖에 되지 않는다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 95,
    statement: '문제가 생기면 내가 좀 손해보더라도 책임지고 해결한다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 96,
    statement: '누군가 나에게 조언을 하면 일단 기분이 불쾌하다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
  // --- MBTI 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // E (외향) / I (내향)
  {
    id: 97,
    statement: '아침에 일어나면 오늘은 어떤 일이 벌어질까 신난다.',
    typeInfluence: 'E', // 여기에 강세 방향 기입 (예: 'E')
    category: 'MBTI'
  },
  {
    id: 98,
    statement: '과거에 했던 나의 행동을 곱씹으며 후회하는 경우가 많다.',
    typeInfluence: 'I', // 여기에 강세 방향 기입 (예: 'I')
    category: 'MBTI'
  },

  // S (감각) / N (직관)
  {
    id: 99,
    statement: '나는 사람들에게 손재주가 좋다는 소리를 많이 듣는다.',
    typeInfluence: 'S', // 여기에 강세 방향 기입 (예: 'S')
    category: 'MBTI'
  },
  {
    id: 100,
    statement: '어떤 일의 숨겨진 의미와 패턴을 파악하는게 내 전문이다.',
    typeInfluence: 'N', // 여기에 강세 방향 기입 (예: 'N')
    category: 'MBTI'
  },

  // T (사고) / F (감정)
  {
    id: 101,
    statement: '가까운 사이라 해도 개인 감정은 되도록 배제해야 한다.',
    typeInfluence: 'T', // 여기에 강세 방향 기입 (예: 'T')
    category: 'MBTI'
  },
  {
    id: 102,
    statement: '사람의 마음에 상처를 줄 수도 있는 냉철함을 싫어한다.',
    typeInfluence: 'F', // 여기에 강세 방향 기입 (예: 'F')
    category: 'MBTI'
  },

  // J (판단) / P (인식)
  {
    id: 103,
    statement: '계획이 중간에 지지부진하면 엄청 스트레스를 받는다.',
    typeInfluence: 'J', // 여기에 강세 방향 기입 (예: 'J')
    category: 'MBTI'
  },
  {
    id: 104,
    statement: '오늘에 집중하고 내일은 걱정하지 않으며 살고자 한다.',
    typeInfluence: 'P', // 여기에 강세 방향 기입 (예: 'P')
    category: 'MBTI'
  },

  // --- COLA 특성 지표 관련 평서문 (각 지표별 2개씩 총 8개 문항) ---
  // C (Commander) / D (Deferrer)
  {
    id: 105,
    statement: '다양한 의견의 최종 결정은 언제나 내 담당이다.',
    typeInfluence: 'C', // 여기에 강세 방향 기입 (예: 'C')
    category: 'COLA'
  },
  {
    id: 106,
    statement: '회의나 모임에서 존재감 없이 조용히 앉아있다.',
    typeInfluence: 'D', // 여기에 강세 방향 기입 (예: 'D')
    category: 'COLA'
  },

  // O (Offbeat Operator) / U (Unfunny Undertone)
  {
    id: 107,
    statement: '나는 힘든 일이 있어도 낙천적으로 대처하려고 한다.',
    typeInfluence: 'O', // 여기에 강세 방향 기입 (예: 'O')
    category: 'COLA'
  },
  {
    id: 108,
    statement: '내 태도가 강하고 세보인다는 소리를 말을 들어봤다.',
    typeInfluence: 'U', // 여기에 강세 방향 기입 (예: 'U')
    category: 'COLA'
  },

  // L (Lively Linguist) / M (Muted Mind)
  {
    id: 109,
    statement: '내가 말하면 사람들이 공감의 터치를 많이 하곤 한다.',
    typeInfluence: 'L', // 여기에 강세 방향 기입 (예: 'L')
    category: 'COLA'
  },
  {
    id: 110,
    statement: '내가 설명할때 상대가 집중하지 못하는 경우가 많다.',
    typeInfluence: 'M', // 여기에 강세 방향 기입 (예: 'M')
    category: 'COLA'
  },

  // A (Altruist) / Y (Yearner)
  {
    id: 111,
    statement: '팀이 잘된다고 한다면 내가 눈에 띄지 않아도 괜찮다.',
    typeInfluence: 'A', // 여기에 강세 방향 기입 (예: 'A')
    category: 'COLA'
  },
  {
    id: 112,
    statement: '나는 친구들의 답글이 늦으면 답답해서 화가 난다.',
    typeInfluence: 'Y', // 여기에 강세 방향 기입 (예: 'Y')
    category: 'COLA'
  },
];
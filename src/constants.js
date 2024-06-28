// YT query: https://www.youtube.com/results?search_query=

const classes = {
  Hero: '히어로',
  'Dark Knight': '다크나이트',
  Paladin: '팔라딘',
  Bishop: '비숍',
  'Fire / Poison': '불독',
  'Ice / Lightning': '썬콜',
  Shadower: '섀도어',
  'Night Lord': '나이트로드',
  'Dual Blade': '듀얼블레이드',
  Bowmaster: '보우마스터',
  Marksman: '신궁',
  Pathfinder: '패스파인더',
  Buccaneer: '바이퍼',
  Corsair: '캡틴',
  Cannoneer: '캐논슈터',
  "Dawn Warrior": "소울마스터",
  "Blaze Wizard": "플레임위자드",
  "Night Walker": "나이트워커",
  "Wind Archer": "윈드브레이커",
  "Thunder Breaker": "스트라이커",
  "Mihile": "미하일",
  "Aran": "아란",
  "Evan": "에반",
  "Mercedes": "메르세데스",
  "Luminous": "루미너스",
  "Phantom": "팬텀",
  "Shade": "은월",
  "Angelic Buster": "엔젤릭버스터",
  "Kaiser": "카이저",
  "Cadena": "카데나",
  "Kain": "카인",
  "Xenon": "제논",
  "Mechanic": "메카닉",
  "Battle Mage": "배틀메이지",
  "Wild Hunter": "와일드헌터",
  "Blaster": "블래스터",
  "Demon Avenger": "데몬 어벤저",
  "Demon Slayer": "데몬 슬레이어",
  "Adele": "아델",
  "Ark": "아크",
  "Illium": "일리움",
  "Khali": "칼리",
  "Hoyoung": "호영",
  "Lara": "라라",
  "Kinesis": "키네시스",
  "Zero": "제로"
}

const maps = {
  "":{},
  "Vanishing Journey": {
    "Rock Zone": "암석의 영토",
    "Fire Zone": "화염의 영토",
    "Below the Cave": "동굴 아래쪽",
    "Eastern Cave Path": "동굴의 동쪽길"
  },
  "Reverse City": {
    "T-Boy's Research Train": "T-boy의 연구열차",
    "Underground Train": "지하열차"
  },
  "Chu Chu Island": {
    "Torrent Zone": "격류지대",
    "Slurpy Forest Depths": "츄릅포레스트 깊은 곳"
  },
  "Yum Yum Island": {
    "Illiard Field": "일리야드 들판",
    "Fungos Forest": "펑고스 숲"
  },
  "Lachelein": {
    "Outlaw's Street": "무법자들의 거리",
    "Chicken Festival": "닭이 뛰노는 곳",
    "Revelation Place": "본색을 드러내는 곳",
    "Occupied Dance Floor": "춤추는 구두 점령지",
    "Nightmare Clocktower": "악몽의 시계탑"
  },
  "Arcana": {
    "The Forest of Earth": "흙의 숲",
    "Cavern Upper Path": "동굴 윗길",
    "Deep in the Cavern - Upper Path": "동굴 윗길 깊은 곳",
    "Cavern Lower Path": "동굴 아랫길",
    "Deep in the Cavern - Lower Path": "동굴 아랫길 깊은 곳",
    "The Deepest Part of the Cavern - Lower Path": "동굴 아랫길 깊디 깊은 곳",
    "Labyrinthine Cavern": "다섯 갈래 동굴"
  },
  "Morass": {
    "Bully Blvd.": "형님들 구역",
    "Shadowdance Hall": "그림자가 춤추는 곳",
    "Abandoned Area": "폐쇄구역",
    "That Day in Trueffet": "그날의 트뤼에페"
  },
  "Esfera": {
    "Mirror-touched Sea": "거울빛에 물든 바다",
    "Radiant Temple": "거울에 비친 빛의 신전"
  },
  "Sellas": {
    "The Final Edge of Light": "빛이 마지막으로 닿는 곳",
    "Plunging Depths": "끝없이 추락하는 심해",
    "Star-Swallowing Sea": "별이 삼켜진 심해"
  },
  "Moonbridge": {
    "Last Horizon": "사상의 경계",
    "Mysterious Fog": "미지의 안개",
    "Void Current": "공허의 파도"
  },
  "Labyrinth of Suffering": {
    "Labyrinth of Suffering Interior": "고통의 미궁 내부",
    "Labyrinth of Suffering Core": "고통의 미궁 중심부",
    "Labyrinth of Suffering Deep Core": "고통의 미궁 최심부"
  },
  "Limina": {
    "World's Sorrow": "세계의 눈물",
    "World's Sorrow Depths": "세계의 눈물 하단",
    "World's Sorrow Midpoint": "세계의 눈물 중단",
    "End of the World": "세계가 끝나는 곳",
    "Sacred Symbol": "어센틱심볼",
    "Sacred Power": "어센틱포스"
  },
  "Cernium": {
    "Western City Ramparts": "서쪽 성벽",
    "Eastern City Ramparts": "동쪽 성벽",
    "Royal Library Section": "왕립 도서관"
  },
  "Burning Cernium": {
    "Western City Ramparts in Battle": "격전의 서쪽 성벽",
    "Eastern City Ramparts in Battle": "격전의 동쪽 성벽",
    "Burning Royal Library Section": "불타는 왕립 도서관"
  },
  "Hotel Arcus": {
    "Outlaw-Infested Wastes": "무법자들이 지배하는 황야",
    "Nostalgic Drive-in Theater": "낭만이 저무는 자동차 극장",
    "Train With No Destination": "종착지 없는 횡단열차"
  },
  "Odium": {
    "Road to the Castle's Gate": "성문으로 가는 길",
    "Captured Alley": "점령당한 골목",
    "Sunny Laboratory": "볕 드는 실험실",
    "Laboratory Behind Locked Door": "잠긴 문 뒤 실험실"
  },
  "Shangri-La": {
    "Blooming Spring": "생기가 돌아오는 봄",
    "Gentle Summer": "빛이 약한 여름",
    "Drowsy Autumn": "색깔이 옅은 가을",
    "Harsh Winter": "참혹한 흔적의 겨울"
  },
  "Arteria": {
    "Northern Outskirts": "북쪽 외곽지역",
    "Western Outskirts": "서쪽 외곽지역",
    "Southern Outskirts": "남쪽 외곽지역",
    "Eastern Outskirts": "동쪽 외곽지역",
    "Outskirts Combat Zone": "외곽 전투지역",
    "Bottom Deck Passage": "최하층 통로",
    "Top Deck Passage": "최상층 통로"
  },
  "Carcion": {
    "Giant Coral Colony": "거대 산호 군락",
    "Calm Beach": "잔잔한 해안가",
    "Enfolding Forest": "휘감기는 숲",
    "Among Dark Trunks": "어둠이 내리는 나무줄기",
    "Breathtaking Cave": "숨이 멎어드는 동굴",
    "Sunken Ruins": "가라앉은 유적지"
  }
}


export { classes, maps };
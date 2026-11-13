// ===== СЛОВАРЬ (из файлов Spotlight 2, 3, 4) =====
const WORDS = {
  "Семья (2 кл)": [
    { en: "family", ru: "семья", tr: "[ˈfæmɪlɪ]" },
    { en: "mummy", ru: "мама", tr: "[ˈmʌmɪ]" },
    { en: "daddy", ru: "папа", tr: "[ˈdædɪ]" },
    { en: "grandma", ru: "бабушка", tr: "[ˈɡrændma:]" },
    { en: "grandpa", ru: "дедушка", tr: "[ˈɡrændpa:]" },
    { en: "brother", ru: "брат", tr: "[ˈbrʌðə]" },
    { en: "sister", ru: "сестра", tr: "[ˈsɪstə]" }
  ],
  "Цвета (2–3 кл)": [
    { en: "white", ru: "белый", tr: "[waɪt]" },
    { en: "red", ru: "красный", tr: "[red]" },
    { en: "blue", ru: "голубой, синий", tr: "[blu:]" },
    { en: "yellow", ru: "жёлтый", tr: "[ˈjeləʊ]" },
    { en: "green", ru: "зелёный", tr: "[ɡri:n]" },
    { en: "black", ru: "чёрный", tr: "[blæk]" },
    { en: "brown", ru: "коричневый", tr: "[braʊn]" },
    { en: "grey", ru: "серый", tr: "[ɡrei]" },
    { en: "orange", ru: "оранжевый", tr: "[ˈorindӡ]" },
    { en: "pink", ru: "розовый", tr: "[pɪnk]" }
  ],
  "Дом (2–3 кл)": [
    { en: "home", ru: "дом", tr: "[həʊm]" },
    { en: "house", ru: "дом (здание)", tr: "[haʊs]" },
    { en: "garden", ru: "сад", tr: "[ɡa:dn]" },
    { en: "bathroom", ru: "ванная комната", tr: "[ba:θrʊm]" },
    { en: "living room", ru: "гостиная", tr: "[ˈlɪvɪŋ rʊm]" },
    { en: "bedroom", ru: "спальня", tr: "[bedru:m]" },
    { en: "kitchen", ru: "кухня", tr: "[ˈkɪtʃɪn]" },
    { en: "table", ru: "стол", tr: "[teɪbl]" },
    { en: "chair", ru: "стул", tr: "[tʃeə]" },
    { en: "bed", ru: "кровать", tr: "[bed]" },
    { en: "sofa", ru: "диван", tr: "[ˈsəufə]" },
    { en: "fridge", ru: "холодильник", tr: "[fridӡ]" },
    { en: "mirror", ru: "зеркало", tr: "[ˈmirə]" },
    { en: "cupboard", ru: "буфет", tr: "[ˈkʌbəd]" }
  ],
  "Еда (2–4 кл)": [
    { en: "chocolate", ru: "шоколад", tr: "[ˈtʃoklɪt]" },
    { en: "burger", ru: "гамбургер", tr: "[bɜ:ɡə]" },
    { en: "chips", ru: "чипсы", tr: "[tʃɪps]" },
    { en: "apple", ru: "яблоко", tr: "[æpl]" },
    { en: "banana", ru: "банан", tr: "[bəˈna:nə]" },
    { en: "sandwich", ru: "бутерброд", tr: "[ˈsændwɪtʃ]" },
    { en: "biscuits", ru: "печенье", tr: "[ˈbɪskɪts]" },
    { en: "sausage", ru: "сосиска", tr: "[ˈsɔsɪdʒ]" },
    { en: "ice-cream", ru: "мороженое", tr: "[ˈaɪskri:m]" },
    { en: "pizza", ru: "пицца", tr: "[ˈpɪtsə]" },
    { en: "milk", ru: "молоко", tr: "[mɪlk]" },
    { en: "juice", ru: "сок", tr: "[dʒu:s]" },
    { en: "cake", ru: "торт", tr: "[keik]" },
    { en: "chicken", ru: "курица", tr: "[ˈtʃikin]" },
    { en: "water", ru: "вода", tr: "[ˈwɔ:tə]" },
    { en: "vegetables", ru: "овощи", tr: "[ˈvedʒitəbəlz]" },
    { en: "eggs", ru: "яйца", tr: "[eɡz]" },
    { en: "meat", ru: "мясо", tr: "[mi:t]" },
    { en: "potato", ru: "картошка", tr: "[pəˈteitəu]" },
    { en: "carrot", ru: "морковка", tr: "[ˈkærət]" },
    { en: "rice", ru: "рис", tr: "[rais]" },
    { en: "lemon", ru: "лимон", tr: "[ˈlemən]" },
    { en: "sugar", ru: "сахар", tr: "[ˈʃuɡə]" },
    { en: "salt", ru: "соль", tr: "[sɔ:lt]" },
    { en: "tomato", ru: "помидор", tr: "[təˈma:təu]" }
  ],
  "Животные (2–4 кл)": [
    { en: "animal", ru: "животное", tr: "[ˈænɪməl]" },
    { en: "fish", ru: "рыба", tr: "[fɪʃ]" },
    { en: "bird", ru: "птица", tr: "[bɜ:d]" },
    { en: "horse", ru: "лошадь", tr: "[hɔ:s]" },
    { en: "frog", ru: "лягушка", tr: "[froɡ]" },
    { en: "chimp", ru: "шимпанзе", tr: "[tʃɪmp]" },
    { en: "rabbit", ru: "кролик", tr: "[ˈræbit]" },
    { en: "tortoise", ru: "черепаха", tr: "[ˈtɔ:təs]" },
    { en: "parrot", ru: "попугай", tr: "[ˈpærət]" },
    { en: "spider", ru: "паук", tr: "[ˈspaidə]" },
    { en: "giraffe", ru: "жираф", tr: "[dʒɪˈra:f]" },
    { en: "monkey", ru: "обезьяна", tr: "[ˈmʌnki]" },
    { en: "dolphin", ru: "дельфин", tr: "[ˈdolfin]" },
    { en: "seal", ru: "тюлень", tr: "[si:l]" },
    { en: "lizard", ru: "ящерица", tr: "[ˈlizəd]" },
    { en: "whale", ru: "кит", tr: "[ˈweil]" },
    { en: "hippo", ru: "гиппопотам", tr: "[ˈhipəu]" },
    { en: "crocodile", ru: "крокодил", tr: "[ˈkrokədail]" }
  ],
  "Игрушки (2–3 кл)": [
    { en: "toys", ru: "игрушки", tr: "[tɔɪz]" },
    { en: "teddy bear", ru: "плюшевый мишка", tr: "[ˈtedɪ beə]" },
    { en: "ballerina", ru: "балерина", tr: "[bæləˈri:nə]" },
    { en: "toy soldier", ru: "игрушечный солдатик", tr: "[ˈtɔɪ souldʒə]" },
    { en: "shelf", ru: "полка", tr: "[ʃelf]" },
    { en: "toy box", ru: "коробка для игрушек", tr: "[ˈtoɪ boks]" },
    { en: "doll", ru: "кукла", tr: "[dol]" },
    { en: "ball", ru: "мячик", tr: "[bɔ:l]" },
    { en: "train", ru: "поезд", tr: "[ˈtrein]" },
    { en: "aeroplane", ru: "самолётик", tr: "[ˈeərəplein]" }
  ],
  "Части тела (2–3 кл)": [
    { en: "nose", ru: "нос", tr: "[nəʊz]" },
    { en: "eye", ru: "глаз", tr: "[aɪ]" },
    { en: "ear", ru: "ухо", tr: "[ɪə]" },
    { en: "hair", ru: "волосы", tr: "[heə]" },
    { en: "mouth", ru: "рот", tr: "[maʊθ]" },
    { en: "head", ru: "голова", tr: "[hed]" },
    { en: "legs", ru: "ноги", tr: "[leɡz]" },
    { en: "body", ru: "тело", tr: "[ˈbʌdi]" },
    { en: "tail", ru: "хвост", tr: "[teil]" }
  ],
  "Прилагательные (2–4 кл)": [
    { en: "big", ru: "большой", tr: "[bɪɡ]" },
    { en: "small", ru: "маленький", tr: "[smɔ:l]" },
    { en: "thin", ru: "тонкий", tr: "[θin]" },
    { en: "fat", ru: "толстый", tr: "[fæt]" },
    { en: "short", ru: "короткий, низкий", tr: "[ʃɔ:t]" },
    { en: "long", ru: "длинный", tr: "[loŋ]" },
    { en: "tall", ru: "высокий", tr: "[tɔ:l]" },
    { en: "plump", ru: "полный", tr: "[plʌmp]" },
    { en: "slim", ru: "стройный", tr: "[slim]" },
    { en: "funny", ru: "забавный", tr: "[ˈfʌni]" },
    { en: "kind", ru: "добрый", tr: "[kaind]" },
    { en: "friendly", ru: "дружелюбный", tr: "[ˈfrendli]" },
    { en: "strong", ru: "сильный", tr: "[stroŋ]" },
    { en: "loud", ru: "громкий", tr: "[laud]" },
    { en: "shy", ru: "скромная", tr: "[ʃai]" },
    { en: "pretty", ru: "хорошенькая", tr: "[ˈpriti]" }
  ],
  "Глаголы (2–3 кл)": [
    { en: "swim", ru: "плавать", tr: "[swɪm]" },
    { en: "sing", ru: "петь", tr: "[sɪŋ]" },
    { en: "run", ru: "бежать", tr: "[rʌn]" },
    { en: "jump", ru: "прыгать", tr: "[dʒʌmp]" },
    { en: "dance", ru: "танцевать", tr: "[da:ns]" },
    { en: "fly", ru: "летать", tr: "[flaɪ]" },
    { en: "climb", ru: "карабкаться", tr: "[klaɪm]" },
    { en: "crawl", ru: "ползать", tr: "[krɔ:l]" },
    { en: "walk", ru: "гулять, ходить", tr: "[wɔ:k]" },
    { en: "talk", ru: "говорить", tr: "[tɔ:k]" },
    { en: "drink", ru: "пить", tr: "[drink]" },
    { en: "sleep", ru: "спать", tr: "[sli:p]" }
  ],
  "Числа (2–3 кл)": [
    { en: "one", ru: "один", tr: "[wʌn]" },
    { en: "two", ru: "два", tr: "[tu:]" },
    { en: "three", ru: "три", tr: "[θri:]" },
    { en: "four", ru: "четыре", tr: "[fɔ:]" },
    { en: "five", ru: "пять", tr: "[faɪv]" },
    { en: "six", ru: "шесть", tr: "[sɪks]" },
    { en: "seven", ru: "семь", tr: "[sevn]" },
    { en: "eight", ru: "восемь", tr: "[eɪt]" },
    { en: "nine", ru: "девять", tr: "[naɪn]" },
    { en: "ten", ru: "десять", tr: "[ten]" },
    { en: "eleven", ru: "одиннадцать", tr: "[iˈlevən]" },
    { en: "twelve", ru: "двенадцать", tr: "[twelv]" },
    { en: "thirteen", ru: "тринадцать", tr: "[θɜ:ˈti:n]" },
    { en: "twenty", ru: "двадцать", tr: "[ˈtwenti]" },
    { en: "thirty", ru: "тридцать", tr: "[ˈθɜ:ti]" },
    { en: "forty", ru: "сорок", tr: "[ˈfɔ:ti]" },
    { en: "fifty", ru: "пятьдесят", tr: "[ˈfifti]" },
    { en: "hundred", ru: "сто", tr: "[ˈhʌndrid]" }
  ],
  "Школьные предметы (3 кл)": [
    { en: "English", ru: "английский", tr: "[ˈiŋɡliʃ]" },
    { en: "Maths", ru: "математика", tr: "[mæθs]" },
    { en: "Geography", ru: "география", tr: "[dʒiˈoɡrəfi]" },
    { en: "History", ru: "история", tr: "[ˈhistəri]" },
    { en: "Science", ru: "естествознание", tr: "[ˈsaiəns]" },
    { en: "Art", ru: "изо", tr: "[a:t]" },
    { en: "Music", ru: "музыка", tr: "[ˈmju:zik]" },
    { en: "pen", ru: "ручка", tr: "[pen]" },
    { en: "pencil", ru: "карандаш", tr: "[ˈpensil]" },
    { en: "ruler", ru: "линейка", tr: "[ˈru:lə]" },
    { en: "rubber", ru: "резинка", tr: "[ˈrʌbə]" },
    { en: "book", ru: "книга", tr: "[buk]" }
  ],
  "Профессии (4 кл)": [
    { en: "baker", ru: "пекарь", tr: "[ˈbeikə]" },
    { en: "greengrocer", ru: "продавец овощей", tr: "[ˈɡri:nɡrəusə]" },
    { en: "mechanic", ru: "механик", tr: "[miˈkænɪk]" },
    { en: "postman", ru: "почтальон", tr: "[ˈpəustmən]" },
    { en: "waiter", ru: "официант", tr: "[ˈweɪtə]" },
    { en: "nurse", ru: "медсестра", tr: "[nɜ:s]" },
    { en: "firefighter", ru: "пожарный", tr: "[faiəˈfaitə]" },
    { en: "taxi driver", ru: "водитель такси", tr: "[ˈtæksiˌdraivə]" },
    { en: "zoo keeper", ru: "смотритель зоопарка", tr: "[ˈzuːˌkiːpə]" },
    { en: "police officer", ru: "полицейский", tr: "[pəˈliːs oːfəsə]" },
    { en: "vet", ru: "ветеринар", tr: "[vet]" }
  ],
  "Погода и каникулы (2–4 кл)": [
    { en: "sunny", ru: "солнечно", tr: "[ˈsʌni]" },
    { en: "windy", ru: "ветрено", tr: "[ˈwindi]" },
    { en: "cloudy", ru: "облачно", tr: "[ˈklaudi]" },
    { en: "rainy", ru: "дождливо", tr: "[ˈreini]" },
    { en: "cold", ru: "холодно", tr: "[ˈkəuld]" },
    { en: "hot", ru: "жарко", tr: "[hot]" },
    { en: "jacket", ru: "куртка", tr: "[ˈdʒækɪt]" },
    { en: "coat", ru: "пальто", tr: "[ˈkəʊt]" },
    { en: "hat", ru: "шляпа", tr: "[hæt]" },
    { en: "shorts", ru: "шорты", tr: "[ʃɔ:ts]" },
    { en: "sock", ru: "носок", tr: "[sok]" },
    { en: "T-shirt", ru: "футболка", tr: "[ˈti:ʃɜ:t]" },
    { en: "jeans", ru: "джинсы", tr: "[dʒi:nz]" },
    { en: "shoes", ru: "туфли", tr: "[ʃu:z]" },
    { en: "skirt", ru: "юбка", tr: "[skɜ:t]" }
  ],
  "Времена года (2 кл)": [
    { en: "winter", ru: "зима", tr: "[ˈwɪntə]" },
    { en: "summer", ru: "лето", tr: "[ˈsʌmə]" },
    { en: "spring", ru: "весна", tr: "[sprɪŋ]" },
    { en: "autumn", ru: "осень", tr: "[ˈɔ:təm]" }
  ],
  "Дни недели (3 кл)": [
    { en: "Monday", ru: "понедельник", tr: "[ˈmʌndei]" },
    { en: "Tuesday", ru: "вторник", tr: "[ˈtju:zdei]" },
    { en: "Wednesday", ru: "среда", tr: "[ˈwenzdei]" },
    { en: "Thursday", ru: "четверг", tr: "[ˈθɜ:zdei]" },
    { en: "Friday", ru: "пятница", tr: "[ˈfraidei]" },
    { en: "Saturday", ru: "суббота", tr: "[ˈsætədei]" },
    { en: "Sunday", ru: "воскресенье", tr: "[ˈsʌndei]" }
  ],
  "Месяцы (4 кл)": [
    { en: "January", ru: "январь", tr: "[ˈdʒænjuəri]" },
    { en: "February", ru: "февраль", tr: "[ˈfebruəri]" },
    { en: "March", ru: "март", tr: "[ma:tʃ]" },
    { en: "April", ru: "апрель", tr: "[ˈeiprəl]" },
    { en: "May", ru: "май", tr: "[mei]" },
    { en: "June", ru: "июнь", tr: "[dʒu:n]" },
    { en: "July", ru: "июль", tr: "[dʒu:ˈlai]" },
    { en: "August", ru: "август", tr: "[ˈo:ɡʌst]" },
    { en: "September", ru: "сентябрь", tr: "[sepˈtembə]" },
    { en: "October", ru: "октябрь", tr: "[okˈtəubə]" },
    { en: "November", ru: "ноябрь", tr: "[nəuˈvembə]" },
    { en: "December", ru: "декабрь", tr: "[diˈsembə]" }
  ],
  "Эмоции (4 кл)": [
    { en: "sad", ru: "печальный", tr: "[sæd]" },
    { en: "bored", ru: "скучающий", tr: "[bo:d]" },
    { en: "angry", ru: "злой", tr: "[ˈæŋɡri]" },
    { en: "scared", ru: "испуганный", tr: "[ˈskeəd]" },
    { en: "tired", ru: "уставший", tr: "[ˈtaiəd]" },
    { en: "hungry", ru: "голодный", tr: "[ˈhʌŋɡri]" },
    { en: "happy", ru: "счастливый", tr: "[ˈhæpi]" }
  ],
  "Страны (4 кл)": [
    { en: "Greece", ru: "Греция", tr: "[ɡri:s]" },
    { en: "Italy", ru: "Италия", tr: "[ˈitəli]" },
    { en: "Portugal", ru: "Португалия", tr: "[ˈpotjuɡəl]" },
    { en: "Russia", ru: "Россия", tr: "[ˈrʌʃə]" },
    { en: "Mexico", ru: "Мексика", tr: "[ˈmeksikəu]" },
    { en: "Poland", ru: "Польша", tr: "[ˈpəulʌnd]" },
    { en: "Spain", ru: "Испания", tr: "[ˈspein]" },
    { en: "Turkey", ru: "Турция", tr: "[ˈtɜ:ki]" },
    { en: "Japan", ru: "Япония", tr: "[dʒəˈpæn]" }
  ],
  "Предлоги (2–4 кл)": [
    { en: "in", ru: "в", tr: "[in]" },
    { en: "on", ru: "на", tr: "[on]" },
    { en: "under", ru: "под", tr: "[ˈʌndə]" },
    { en: "next to", ru: "рядом с", tr: "[nekst tu]" },
    { en: "in front of", ru: "перед", tr: "[in frʌnt of]" },
    { en: "behind", ru: "позади", tr: "[biˈhaind]" }
  ],
  "Музыкальные инструменты (4 кл)": [
    { en: "piano", ru: "пианино", tr: "[piˈænəu]" },
    { en: "trumpet", ru: "труба", tr: "[ˈtrʌmpit]" },
    { en: "drums", ru: "барабаны", tr: "[drʌmz]" },
    { en: "violin", ru: "скрипка", tr: "[vaiəˈlin]" },
    { en: "guitar", ru: "гитара", tr: "[ɡiˈta:]" }
  ]
};

// ===== ЛОГИКА ТРЕНАЖЁРА =====
const QUESTIONS_PER_ROUND = 20;

const themeSelect = document.getElementById('themeSelect');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const quizArea = document.getElementById('quizArea');
const finishArea = document.getElementById('finishArea');
const wordEl = document.getElementById('wordEl');
const transEl = document.getElementById('transEl');
const optionsEl = document.getElementById('optionsEl');
const messageEl = document.getElementById('messageEl');
const scoreEl = document.getElementById('score');
const qNumEl = document.getElementById('qNum');
const qTotalEl = document.getElementById('qTotal');
const progressFill = document.getElementById('progressFill');
const finalScoreEl = document.getElementById('finalScore');
const finalTotalEl = document.getElementById('finalTotal');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let continueBtn = null; // кнопка «Продолжить» для неправильного ответа
let autoNextTimer = null; // таймер автоперехода при правильном ответе

// Заполняем выпадающий список темами
Object.keys(WORDS).forEach(theme => {
  const opt = document.createElement('option');
  opt.value = theme;
  opt.textContent = theme;
  themeSelect.appendChild(opt);
});

// Перемешивание массива (Fisher–Yates)
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Собираем пул слов по выбранной теме
function getWordPool(theme) {
  if (theme === 'all') {
    return Object.values(WORDS).flat();
  }
  return WORDS[theme];
}

// Генерируем вопросы: слово -> 4 варианта перевода
function buildQuestions(pool, count) {
  const shuffledPool = shuffle(pool);
  const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  return selected.map(word => {
    const wrongPool = pool.filter(w => w.ru !== word.ru);
    const wrongs = shuffle(wrongPool).slice(0, 3).map(w => w.ru);
    const options = shuffle([word.ru, ...wrongs]);
    return { word, options };
  });
}

// Убираем кнопку «Продолжить» и таймер, если остались
function clearContinueAndTimer() {
  if (continueBtn) {
    continueBtn.remove();
    continueBtn = null;
  }
  if (autoNextTimer) {
    clearTimeout(autoNextTimer);
    autoNextTimer = null;
  }
}

// Переход к следующему вопросу / финишу
function goToNext() {
  clearContinueAndTimer();
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function startQuiz() {
  clearContinueAndTimer();
  const theme = themeSelect.value;
  const pool = getWordPool(theme);
  currentQuestions = buildQuestions(pool, QUESTIONS_PER_ROUND);
  currentIndex = 0;
  score = 0;
  answered = false;

  quizArea.style.display = 'block';
  finishArea.style.display = 'none';
  qTotalEl.textContent = currentQuestions.length;
  scoreEl.textContent = '0';

  showQuestion();
}

function showQuestion() {
  answered = false;
  messageEl.textContent = '';
  messageEl.className = 'message';
  clearContinueAndTimer();

  const q = currentQuestions[currentIndex];
  wordEl.textContent = q.word.en;
  transEl.textContent = q.word.tr;
  qNumEl.textContent = currentIndex + 1;

  const progress = (currentIndex / currentQuestions.length) * 100;
  progressFill.style.width = progress + '%';

  optionsEl.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(btn, opt, q.word.ru));
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(btn, chosen, correct) {
  if (answered) return;
  answered = true;

  // Подсвечиваем правильный вариант всегда
  const allOptions = optionsEl.querySelectorAll('.option');
  allOptions.forEach(o => {
    if (o.textContent === correct) o.classList.add('correct');
    o.disabled = true; // блокируем повторные клики
  });

  if (chosen === correct) {
    // Правильно — автопереход через 1.2 сек
    score++;
    scoreEl.textContent = score;
    messageEl.textContent = '✅ Правильно!';
    messageEl.className = 'message good';
    autoNextTimer = setTimeout(goToNext, 1200);
  } else {
    // Неправильно — подсвечиваем ошибку и показываем кнопку «Продолжить»
    btn.classList.add('wrong');
    messageEl.textContent = '❌ Правильный ответ: ' + correct;
    messageEl.className = 'message bad';

    continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Продолжить →';
    continueBtn.addEventListener('click', goToNext);
    // Вставляем кнопку после блока с вариантами
    optionsEl.insertAdjacentElement('afterend', continueBtn);
  }
}

function finishQuiz() {
  progressFill.style.width = '100%';
  quizArea.style.display = 'none';
  finishArea.style.display = 'block';
  finalScoreEl.textContent = score;
  finalTotalEl.textContent = currentQuestions.length;

  const percent = score / currentQuestions.length;
  const h2 = finishArea.querySelector('h2');
  if (percent === 1) {
    h2.textContent = '🏆 Отлично! Все правильно!';
  } else if (percent >= 0.7) {
    h2.textContent = '🎉 Хорошо получилось!';
  } else if (percent >= 0.4) {
    h2.textContent = '👍 Неплохо, продолжай тренироваться!';
  } else {
    h2.textContent = '💪 Ещё потренируемся!';
  }
}

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', () => {
  finishArea.style.display = 'none';
  startQuiz();
});

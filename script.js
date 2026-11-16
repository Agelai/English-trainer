// ===== СЛОВАРЬ (из файлов Spotlight 2, 3, 4, 5) =====
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
    { en: "pink", ru: "розовый", tr: "[pɪnk]" },
    { en: "purple", ru: "фиолетовый", tr: "[ˈpɜ:pl]" }
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
  ],

   // ===== НОВЫЕ ТЕМЫ ИЗ SPOTLIGHT 5 =====
  "Частые глаголы (5 кл)": [
    { en: "draw", ru: "рисовать", tr: "[drɔ:]" },
    { en: "eat", ru: "есть", tr: "[i:t]" },
    { en: "look", ru: "смотреть", tr: "[lʊk]" },
    { en: "count", ru: "считать", tr: "[kaʊnt]" },
    { en: "read", ru: "читать", tr: "[ri:d]" },
    { en: "speak", ru: "говорить", tr: "[spi:k]" },
    { en: "write", ru: "писать", tr: "[raɪt]" }
  ],
  "Школьные принадлежности (5 кл)": [
    { en: "pencil case", ru: "пенал", tr: "[ˈpensəl keɪs]" },
    { en: "pencil sharpener", ru: "точилка", tr: "[ˈpensəl ˈʃa:pənə]" },
    { en: "eraser", ru: "ластик", tr: "[ɪˈreɪzə]" },
    { en: "notebook", ru: "блокнот, тетрадь", tr: "[ˈnəʊtbʊk]" },
    { en: "notepad", ru: "блокнотик", tr: "[ˈnəʊtpæd]" },
    { en: "school bag", ru: "школьная сумка", tr: "[sku:l bæɡ]" },
    { en: "blackboard", ru: "школьная доска", tr: "[ˈblækbɔ:d]" },
    { en: "atlas", ru: "атлас", tr: "[ˈætləs]" },
    { en: "timetable", ru: "расписание", tr: "[ˈtaɪmteɪbl]" },
    { en: "desk", ru: "парта, письменный стол", tr: "[desk]" },
    { en: "glue", ru: "клей", tr: "[ɡlu:]" },
    { en: "paper clips", ru: "канцелярские скрепки", tr: "[ˈpeɪpə klɪps]" },
    { en: "crayons", ru: "восковые мелки", tr: "[ˈkreɪənz]" }
  ],
  "Работаем вместе (5 кл)": [
    { en: "along", ru: "самостоятельно", tr: "[əˈlɒŋ]" },
    { en: "in pairs", ru: "в парах", tr: "[ɪn ˈpɛəz]" },
    { en: "in groups", ru: "в группах", tr: "[ɪn ɡru:ps]" },
    { en: "to look at", ru: "смотреть на", tr: "[tu: lʊk æt]" },
    { en: "to listen to", ru: "слушать", tr: "[tu: lɪsn tu]" },
    { en: "to say", ru: "сказать, говорить", tr: "[tu: seɪ]" },
    { en: "to smile", ru: "улыбаться", tr: "[tu: smaɪl]" },
    { en: "to share", ru: "делиться", tr: "[tu: ʃeə]" },
    { en: "to think", ru: "думать", tr: "[tu: θɪŋk]" },
    { en: "to ask", ru: "спрашивать", tr: "[tu: a:sk]" }
  ],
  "Я из… (5 кл)": [
    { en: "The UK (British)", ru: "Соединённое Королевство (британец)", tr: "[ðə ju:ˈkeɪ]" },
    { en: "The USA (American)", ru: "США (американец)", tr: "[ðə ju:ˈesˈeɪ]" },
    { en: "Canada (Canadian)", ru: "Канада (канадец)", tr: "[ˈkænədə]" },
    { en: "Australia (Australian)", ru: "Австралия (австралиец)", tr: "[ɒstˈreɪlɪə]" },
    { en: "New Zealand (New Zealander)", ru: "Новая Зеландия (новозеландец)", tr: "[nju:ˈzi:lənd]" },
    { en: "France (French)", ru: "Франция (француз)", tr: "[fra:ns]" },
    { en: "Japan (Japanese)", ru: "Япония (японец)", tr: "[dʒʌˈpæn]" }
  ],
  "Изумительный человек-паук (5 кл)": [
    { en: "quiet", ru: "тихий, спокойный", tr: "[ˈkwaɪət]" },
    { en: "next door", ru: "по соседству", tr: "[nekst dɔ:]" },
    { en: "to bite", ru: "кусать", tr: "[tu: baɪt]" },
    { en: "powers", ru: "силы", tr: "[paʊəz]" },
    { en: "fast", ru: "быстрый", tr: "[fa:st]" },
    { en: "walls", ru: "стены", tr: "[wɔ:lz]" },
    { en: "enemy", ru: "враг", tr: "[ˈenəmɪ]" },
    { en: "to watch", ru: "смотреть", tr: "[tu: wɒtʃ]" }
  ],
  "Личные вещи (5 кл)": [
    { en: "cap", ru: "кепка", tr: "[kæp]" },
    { en: "scarf", ru: "шарф", tr: "[ska:f]" },
    { en: "digital camera", ru: "цифровой фотоаппарат", tr: "[ˈdɪdʒɪtəl ˈkæmərə]" },
    { en: "helmet", ru: "шлем", tr: "[ˈhelmɪt]" },
    { en: "skateboard", ru: "скейтборд", tr: "[ˈskeɪtbɔ:d]" },
    { en: "gloves", ru: "перчатки", tr: "[ɡlʌvz]" },
    { en: "bicycle", ru: "велосипед", tr: "[ˈbaɪsɪkəl]" },
    { en: "trainers", ru: "кроссовки", tr: "[ˈtreɪnəz]" },
    { en: "handbag", ru: "дамская сумочка", tr: "[ˈhændbæɡ]" },
    { en: "watch", ru: "часы (наручные)", tr: "[wɒtʃ]" },
    { en: "basketball", ru: "баскетбольный мяч", tr: "[ˈba:skɪtbɔ:l]" },
    { en: "this", ru: "этот, эта", tr: "[ðɪs]" },
    { en: "these", ru: "эти", tr: "[ði:z]" },
    { en: "that", ru: "тот, та", tr: "[ðæt]" },
    { en: "those", ru: "те", tr: "[ðəʊz]" }
  ],
  "Моя коллекция (5 кл)": [
    { en: "stamps", ru: "марки", tr: "[stæmps]" },
    { en: "hats", ru: "шапки", tr: "[hæts]" },
    { en: "books", ru: "книги", tr: "[bʊks]" },
    { en: "coins", ru: "монеты", tr: "[ˈkɔɪnz]" }
  ],
  "Сувениры (5 кл)": [
    { en: "mug", ru: "кружка", tr: "[mʌɡ]" },
    { en: "a tartan scarf", ru: "клетчатый шарфик", tr: "[ə ˈta:tən ska:f]" },
    { en: "staffed toy", ru: "мягкая игрушка", tr: "[stʌft tɔɪ]" },
    { en: "toy buses", ru: "игрушечные автобусы", tr: "[tɔɪ ˈbʌsɪz]" },
    { en: "pin", ru: "значок", tr: "[pɪn]" }
  ],
  "Части Соединённого Королевства (5 кл)": [
    { en: "The UK - British", ru: "Соединённое Королевство — британец", tr: "[ðə ju:ˈkeɪ] [ˈbrɪtɪʃ]" },
    { en: "England - English", ru: "Англия — англичанин", tr: "[ˈɪŋɡlənd] [ˈɪŋɡlɪʃ]" },
    { en: "Scotland - Scottish", ru: "Шотландия — шотландец", tr: "[ˈskɒtlənd] [ˈskɒtɪʃ]" },
    { en: "Wales - Welsh", ru: "Уэльс — валлиец", tr: "[ˈweɪlz] [welʃ]" },
    { en: "Northern Ireland - Northern Irish", ru: "Северная Ирландия — ирландец", tr: "[ˈnɔ:ðən ˈaɪlənd] [ˈnɔ:ðən ˈaɪrɪʃ]" }
  ],
  "Покупаем сувенир (5 кл)": [
    { en: "key ring", ru: "брелок для ключей", tr: "[ki: rɪŋ]" },
    { en: "umbrella", ru: "зонт", tr: "[ʌmˈbrelə]" },
    { en: "thermos flask", ru: "термос", tr: "[ˈθɜ:mɒs fla:sk]" },
    { en: "bell", ru: "колокольчик", tr: "[bel]" }
  ],
  "Англоговорящие страны (5 кл)": [
    { en: "Canada (Ottawa)", ru: "Канада (Оттава)", tr: "[ˈkænədə ˈɒtəwə]" },
    { en: "The UK (London)", ru: "Соединённое Королевство (Лондон)", tr: "[ði: ju: keɪ ˈlʌndən]" },
    { en: "The USA (Washington DC)", ru: "США (Вашингтон)", tr: "[ðə ju: es eɪ ˈwɒʃɪŋtən di:si:]" },
    { en: "Australia (Canberra)", ru: "Австралия (Канберра)", tr: "[ɒˈstreɪlɪə ˈkænbərə]" },
    { en: "New Zealand (Wellington)", ru: "Новая Зеландия (Веллингтон)", tr: "[nju: ˈzi:lənd ˈwelɪŋtən]" }
  ],
  "Комнаты (5 кл)": [
    { en: "hall", ru: "прихожая", tr: "[hɔ:l]" },
    { en: "dining room", ru: "столовая", tr: "[ˈdaɪnɪŋ ru:m]" },
    { en: "garage", ru: "гараж", tr: "[ˈɡærɑ:ʒ]" }
  ],
  "Живи на высоте! (5 кл)": [
    { en: "architect", ru: "архитектор", tr: "[ˈa:kɪtekt]" },
    { en: "unusual", ru: "необычный", tr: "[ʌnˈju:ʒuəl]" },
    { en: "water tower", ru: "водонапорная башня", tr: "[ˈwɔ:tə ˈtaʊə]" },
    { en: "tower", ru: "башня", tr: "[ˈtaʊə]" },
    { en: "reception room", ru: "приёмная комната", tr: "[rɪˈsepʃən ru:m]" },
    { en: "on the ground floor", ru: "на первом этаже", tr: "[ɒn ðə ɡraʊnd flɔ:]" },
    { en: "14 steps", ru: "14 ступенек", tr: "[fɔ:ˈti:n steps]" },
    { en: "keep fit", ru: "сохранять форму", tr: "[ki:p fɪt]" },
    { en: "roof", ru: "крыша", tr: "[ru:f]" },
    { en: "lift", ru: "лифт", tr: "[lɪft]" },
    { en: "price", ru: "цена", tr: "[praɪs]" }
  ],
  "Моя спальня (5 кл)": [
    { en: "wardrobe", ru: "шкаф для одежды", tr: "[ˈwɔ:drəʊb]" },
    { en: "bookcase", ru: "книжный шкаф", tr: "[ˈbʊk keɪs]" },
    { en: "carpet", ru: "ковёр", tr: "[ˈka:pɪt]" },
    { en: "washbasin", ru: "раковина (в ванной)", tr: "[ˈwɒʃbeɪsɪn]" },
    { en: "toilet", ru: "унитаз", tr: "[ˈtɔɪlɪt]" },
    { en: "sink", ru: "раковина (на кухне)", tr: "[sɪŋk]" },
    { en: "cooker", ru: "плитка (кухонная)", tr: "[ˈkʊkə]" },
    { en: "painting", ru: "картина", tr: "[ˈpeɪntɪŋ]" },
    { en: "window", ru: "окно", tr: "[ˈwɪndəʊ]" },
    { en: "coffee table", ru: "журнальный столик", tr: "[ˈkɒfɪ ˈteɪbl]" },
    { en: "armchair", ru: "кресло", tr: "[ˈa:mtʃeə]" },
    { en: "tub", ru: "ванна", tr: "[tʌb]" }
  ],
  "Дом на две семьи (5 кл)": [
    { en: "downstairs", ru: "внизу (в доме)", tr: "[ˈdaʊnsteəz]" },
    { en: "upstairs", ru: "наверху (в доме)", tr: "[ˈʌpsteəz]" },
    { en: "bricks", ru: "кирпичи", tr: "[brɪks]" },
    { en: "central heating", ru: "центральное отопление", tr: "[ˈsentrəl ˈhi:tɪŋ]" },
    { en: "outside", ru: "снаружи", tr: "[aʊtˈsaɪd]" },
    { en: "inside", ru: "внутри", tr: "[ɪnˈsaɪd]" },
    { en: "special features", ru: "особые черты", tr: "[ˈspeʃl ˈfi:tʃəz]" },
    { en: "front garden", ru: "передний сад", tr: "[frʌnt ɡa:dn]" },
    { en: "back garden", ru: "задний сад", tr: "[bæk ɡa:dn]" }
  ],
  "Тадж-Махал (5 кл)": [
    { en: "dome", ru: "купол", tr: "[dəʊm]" },
    { en: "wall", ru: "стена", tr: "[wɔ:l]" },
    { en: "minaret", ru: "минарет", tr: "[mɪnəˈret]" },
    { en: "pool", ru: "бассейн", tr: "[pu:l]" },
    { en: "marble", ru: "мрамор", tr: "[ma:bl]" },
    { en: "glass", ru: "стекло", tr: "[ɡla:s]" },
    { en: "a brick", ru: "кирпич", tr: "[ə brɪk]" },
    { en: "stones", ru: "камни", tr: "[stəʊnz]" },
    { en: "precious", ru: "драгоценный, ценный", tr: "[ˈpreʃəs]" },
    { en: "a pearl", ru: "жемчужина", tr: "[ə pɜ:l]" },
    { en: "to shine", ru: "светить, блестеть", tr: "[tu: ʃaɪn]" },
    { en: "corner", ru: "угол", tr: "[ˈkɔ:nə]" }
  ],
  "Характер (5 кл)": [
    { en: "cool", ru: "классный", tr: "[ku:l]" },
    { en: "sweet", ru: "сладкий, милый", tr: "[swi:t]" },
    { en: "clever", ru: "умный", tr: "[ˈklevə]" },
    { en: "noisy", ru: "шумный", tr: "[ˈnɔɪzɪ]" },
    { en: "naughty", ru: "непослушный", tr: "[ˈnɔ:tɪ]" },
    { en: "caring", ru: "заботливый, внимательный", tr: "[ˈkeərɪŋ]" }
  ],
  "Кто есть кто? (5 кл)": [
    { en: "facial features", ru: "черты лица", tr: "[ˈfeɪʃl ˈfi:tʃəz]" },
    { en: "big mouth", ru: "большой рот", tr: "[bɪɡ maʊθ]" },
    { en: "big nose", ru: "большой нос", tr: "[bɪɡ nəʊz]" },
    { en: "red moustache", ru: "красные усы", tr: "[red mʌsˈta:ʃ]" },
    { en: "big eyes", ru: "большие глаза", tr: "[bɪɡ aɪz]" },
    { en: "small nose", ru: "маленький нос", tr: "[smɔ:l nəʊz]" },
    { en: "small mouth", ru: "маленький рот", tr: "[smɔ:l maʊθ]" },
    { en: "long ears", ru: "длинные уши", tr: "[lɒŋ ɪəz]" },
    { en: "height", ru: "рост", tr: "[haɪt]" },
    { en: "average", ru: "средний", tr: "[ˈævərɪdʒ]" },
    { en: "red hair", ru: "рыжие волосы", tr: "[red heə]" },
    { en: "fair hair", ru: "светлые волосы", tr: "[feə heə]" },
    { en: "brown hair", ru: "каштановые волосы", tr: "[braʊn heə]" },
    { en: "curly hair", ru: "кучерявые волосы", tr: "[ˈkɜ:lɪ heə]" },
    { en: "wavy hair", ru: "волнистые волосы", tr: "[ˈweɪvɪ heə]" },
    { en: "build", ru: "строение тела", tr: "[bi:ld]" }
  ],
  "Сравнения (5 кл)": [
    { en: "as playful as a kitten", ru: "игривый, как котёнок", tr: "[əz ˈpleɪfʊl əz ə ˈkɪtn]" },
    { en: "as proud as a peacock", ru: "гордый, как павлин", tr: "[əz praʊd əz ə ˈpi:kɒk]" },
    { en: "as quiet as a mouse", ru: "тихий, как мышка", tr: "[əz ˈkwaɪət əz ə maʊs]" },
    { en: "as wise as an owl", ru: "мудрый, как сова", tr: "[əz waɪz əz ən aʊl]" },
    { en: "as gentle as a lamb", ru: "нежный, как ягнёнок", tr: "[əz ˈdʒentl əz ə læm]" },
    { en: "as strong as an ox", ru: "сильный, как бык", tr: "[əz strɒŋ əz ən ɒks]" },
    { en: "as busy as a bee", ru: "трудолюбивый, как пчела", tr: "[əz ˈbɪzɪ əz ə bi:]" },
    { en: "as stubborn as a mule", ru: "упрямый, как мул", tr: "[əz ˈstʌbən əz ə mju:l]" },
    { en: "as slow as a snail", ru: "медлительный, как улитка", tr: "[əz sləʊ əz ə sneɪl]" }
  ],
  "Изумительные создания (5 кл)": [
    { en: "lion", ru: "лев", tr: "[ˈlaɪən]" },
    { en: "camel", ru: "верблюд", tr: "[ˈkæməl]" },
    { en: "elephant", ru: "слон", tr: "[ˈelɪfənt]" },
    { en: "cobra", ru: "кобра", tr: "[ˈkəʊbrə]" },
    { en: "deer", ru: "олень", tr: "[dɪə]" },
    { en: "rhino", ru: "носорог", tr: "[ˈraɪnəʊ]" },
    { en: "leopard", ru: "леопард", tr: "[ˈlepəd]" },
    { en: "tiger", ru: "тигр", tr: "[ˈtaɪɡə]" }
  ],
  "Животные Индии (5 кл)": [
    { en: "stripes", ru: "полоски", tr: "[straɪps]" },
    { en: "to hide", ru: "прятать(ся)", tr: "[tu: haɪd]" },
    { en: "to hunt", ru: "охотиться", tr: "[tu: hʌnt]" },
    { en: "dangerous", ru: "опасный", tr: "[ˈdeɪndʒərəs]" },
    { en: "heavy", ru: "тяжёлый", tr: "[ˈhevɪ]" },
    { en: "trunk", ru: "хобот", tr: "[trʌnk]" },
    { en: "horn", ru: "рог", tr: "[hɔ:n]" },
    { en: "alone", ru: "один", tr: "[əˈləʊn]" },
    { en: "mud", ru: "грязь", tr: "[mʌd]" }
  ],
  "В зоопарке (5 кл)": [
    { en: "bear", ru: "медведь", tr: "[beə]" },
    { en: "peacock", ru: "павлин", tr: "[ˈpi:kɒk]" },
    { en: "tusks", ru: "бивни", tr: "[tʌsks]" },
    { en: "fur", ru: "мех", tr: "[fɜ:]" },
    { en: "beak", ru: "клюв", tr: "[bi:k]" },
    { en: "wings", ru: "крылья", tr: "[wɪŋz]" },
    { en: "feathers", ru: "перья", tr: "[ˈfeðəz]" },
    { en: "paws", ru: "лапы", tr: "[pɔ:z]" },
    { en: "neck", ru: "шея", tr: "[nek]" },
    { en: "mane", ru: "грива", tr: "[meɪn]" }
  ],
  "Мой питомец (5 кл)": [
    { en: "dog", ru: "собака", tr: "[dɒɡ]" },
    { en: "duck", ru: "утка", tr: "[dʌk]" },
    { en: "goose", ru: "гусь", tr: "[ɡu:z]" },
    { en: "hen", ru: "курица", tr: "[hen]" },
    { en: "goldfish", ru: "золотая рыбка", tr: "[ˈɡəʊldfɪʃ]" },
    { en: "cow", ru: "корова", tr: "[kaʊ]" },
    { en: "budgie", ru: "волнистый попугайчик", tr: "[ˈbʌdʒɪ]" },
    { en: "sheep", ru: "овца", tr: "[ʃi:p]" },
    { en: "goat", ru: "козёл", tr: "[ɡəʊt]" },
    { en: "cat", ru: "кот", tr: "[kæt]" },
    { en: "guinea pig", ru: "морская свинка", tr: "[ˈɡɪnɪ pɪɡ]" }
  ],
  "Питомцы и здоровье (5 кл)": [
    { en: "fleas", ru: "блохи", tr: "[fli:z]" },
    { en: "broken wing", ru: "сломанное крыло", tr: "[ˈbrəʊkn wɪŋ]" },
    { en: "toothache", ru: "зубная боль", tr: "[ˈtu:θeɪk]" },
    { en: "earache", ru: "боль в ухе", tr: "[ˈɪəreɪk]" },
    { en: "hamster", ru: "хомяк", tr: "[ˈhæmstə]" }
  ],
  "Насекомые (5 кл)": [
    { en: "mosquito", ru: "комар", tr: "[mɒsˈki:təʊ]" },
    { en: "wasps", ru: "осы", tr: "[wɒsps]" },
    { en: "butterfly", ru: "бабочка", tr: "[ˈbʌtəflaɪ]" },
    { en: "dragonfly", ru: "стрекоза", tr: "[ˈdræɡnflaɪ]" },
    { en: "beetle", ru: "жук", tr: "[bi:tl]" },
    { en: "fly", ru: "муха", tr: "[flaɪ]" },
    { en: "bee", ru: "пчела", tr: "[bi:]" },
    { en: "ladybirds", ru: "божьи коровки", tr: "[ˈleɪdɪbɜ:dz]" },
    { en: "grasshopper", ru: "кузнечик", tr: "[ˈɡrɑ:shɒpə]" },
    { en: "ant", ru: "муравей", tr: "[ænt]" },
    { en: "antennae", ru: "усики (у насекомых)", tr: "[ænˈteni:]" }
  ],
  "Просыпайся! (5 кл)": [
    { en: "in the morning", ru: "утром", tr: "[ɪn ðə ˈmɔ:nɪŋ]" },
    { en: "get up", ru: "вставать", tr: "[ɡet ʌp]" },
    { en: "go jogging", ru: "идти на пробежку", tr: "[ɡəʊ ˈdʒɒɡɪŋ]" },
    { en: "go to school", ru: "идти в школу", tr: "[ɡəʊ tu: sku:l]" },
    { en: "have breakfast", ru: "завтракать", tr: "[hæv ˈbrekfəst]" },
    { en: "in the afternoon", ru: "в полдень", tr: "[ɪn ði: a:ftəˈnu:n]" },
    { en: "have lunch", ru: "обедать", tr: "[hæv lʌntʃ]" },
    { en: "do homework", ru: "делать домашнюю работу", tr: "[du: ˈhəʊmwɜ:k]" },
    { en: "have a cup of tea", ru: "выпить чашечку чая", tr: "[hæv ə kʌp əv ti:]" },
    { en: "work on computer", ru: "работать на компьютере", tr: "[wɜ:k ɒn kəmˈpju:tə]" },
    { en: "in the evening", ru: "вечером", tr: "[ɪn ði: ˈi:vnɪŋ]" },
    { en: "go to bed", ru: "идти спать", tr: "[ɡəʊ tu: bed]" },
    { en: "eat dinner", ru: "есть ужин", tr: "[i:t ˈdɪnə]" },
    { en: "do the shopping", ru: "делать покупки", tr: "[du: ðə ˈʃɒpɪŋ]" },
    { en: "watch a DVD", ru: "смотреть DVD", tr: "[wɒtʃ ə di:vi:di:]" }
  ],
  "Профессии (5 кл)": [
    { en: "painter", ru: "художник, маляр", tr: "[ˈpeɪntə]" },
    { en: "doctor", ru: "доктор", tr: "[ˈdɒktə]" },
    { en: "teacher", ru: "учитель", tr: "[ˈti:tʃə]" }
  ],
  "На работе (5 кл)": [
    { en: "to read a book", ru: "читать книгу", tr: "[tu: ri:d ə bʊk]" },
    { en: "to talk", ru: "разговаривать", tr: "[tu: tɔ:k]" },
    { en: "to say goodbye to the children", ru: "прощаться с детьми", tr: "[tu: seɪ ɡʊdˈbaɪ tu: ðə ˈtʃɪldrən]" },
    { en: "to paint a hospital", ru: "красить больницу", tr: "[tu: peɪnt ə ˈhɒspɪtəl]" },
    { en: "to look at the postman", ru: "смотреть на почтальона", tr: "[tu: lʊk æt ðə ˈpəʊstmən]" },
    { en: "to repair a car", ru: "чинить машину", tr: "[tu: rɪˈpeə ə ka:]" },
    { en: "to wait for the ambulance", ru: "ждать скорую помощь", tr: "[tu: weɪt fɔ: ði: ˈæmbjuləns]" },
    { en: "to deliver a letter", ru: "доставлять письмо", tr: "[tu: dɪˈlɪvə ə ˈletə]" },
    { en: "to drive a taxi", ru: "водить такси", tr: "[tu: draɪv ə ˈtæksɪ]" },
    { en: "to serve drinks", ru: "обслуживать напитками", tr: "[tu: sɜ:v drɪŋks]" }
  ],
  "Выходные (5 кл)": [
    { en: "to write an email", ru: "написать электронное письмо", tr: "[tu: raɪt ən ˈi:meɪl]" },
    { en: "to wash the dog", ru: "помыть собаку", tr: "[tu: wɒʃ ðə dɒɡ]" },
    { en: "to play with a friend", ru: "играть с другом", tr: "[tu: pleɪ wɪð ə frend]" },
    { en: "to make a phone call", ru: "сделать телефонный звонок", tr: "[tu: meɪk ə fəʊn kɔ:l]" },
    { en: "to work in the garden", ru: "работать в саду", tr: "[tu: wɜ:k ɪn ðə ɡa:dn]" },
    { en: "to plant flowers", ru: "сажать цветы", tr: "[tu: pla:nt flaʊəz]" },
    { en: "to drink coffee", ru: "пить кофе", tr: "[tu: drɪŋk ˈkɒfɪ]" }
  ],
  "Достопримечательности (5 кл)": [
    { en: "belfry", ru: "колокольня", tr: "[ˈbelfri:]" },
    { en: "clockface", ru: "циферблат", tr: "[ˈklɒkfeɪs]" },
    { en: "long (minute) hand", ru: "минутная стрелка", tr: "[lɒŋ hænd]" },
    { en: "short (hour) hand", ru: "часовая стрелка", tr: "[ʃɔ:t hænd]" },
    { en: "commissioner", ru: "заказчик", tr: "[kəˈmɪʃənə]" },
    { en: "huge", ru: "огромный", tr: "[hju:dʒ]" },
    { en: "high", ru: "высота", tr: "[haɪ]" },
    { en: "wide", ru: "ширина", tr: "[waɪd]" }
  ],
  "С солнечным светом (5 кл)": [
    { en: "sundial", ru: "солнечные часы", tr: "[ˈsʌndaɪəl]" },
    { en: "shadow", ru: "тень", tr: "[ˈʃædəʊ]" },
    { en: "straw", ru: "соломинка", tr: "[strɔ:]" },
    { en: "compass", ru: "компас", tr: "[ˈkʌmpəs]" },
    { en: "plastic cup", ru: "пластиковый стаканчик", tr: "[ˈplæstɪk kʌp]" },
    { en: "adhesive tape", ru: "клейкая лента (скотч)", tr: "[ədˈhi:sɪv teɪp]" },
    { en: "plastic lid", ru: "пластиковая крышка", tr: "[ˈplæstɪk lɪd]" }
  ],
  "Год за годом (5 кл)": [
    { en: "Winter", ru: "зима", tr: "[ˈwɪntə]" },
    { en: "December", ru: "декабрь", tr: "[dɪˈsembə]" },
    { en: "January", ru: "январь", tr: "[ˈdʒænjuəri]" },
    { en: "February", ru: "февраль", tr: "[ˈfebrʊəri]" },
    { en: "Spring", ru: "весна", tr: "[sprɪŋ]" },
    { en: "March", ru: "март", tr: "[ma:tʃ]" },
    { en: "April", ru: "апрель", tr: "[ˈeɪprəl]" },
    { en: "May", ru: "май", tr: "[meɪ]" },
    { en: "Summer", ru: "лето", tr: "[ˈsʌmə]" },
    { en: "June", ru: "июнь", tr: "[dʒu:n]" },
    { en: "July", ru: "июль", tr: "[dʒu:ˈlaɪ]" },
    { en: "August", ru: "август", tr: "[ˈɔ:ɡəst]" },
    { en: "Autumn", ru: "осень", tr: "[ˈɔ:təm]" },
    { en: "September", ru: "сентябрь", tr: "[sepˈtembə]" },
    { en: "October", ru: "октябрь", tr: "[ɒkˈtəʊbə]" },
    { en: "November", ru: "ноябрь", tr: "[nəʊˈvembə]" }
  ],
  "Занятия (5 кл)": [
    { en: "to pick flowers", ru: "собирать цветы", tr: "[tu: pɪk ˈflaʊəz]" },
    { en: "to rake leaves", ru: "сгребать листья", tr: "[tu: reɪk li:vz]" },
    { en: "to play in the snow", ru: "играть со снегом", tr: "[tu: pleɪ ɪn ðə snəʊ]" },
    { en: "to go swimming", ru: "идти поплавать", tr: "[tu: ɡəʊ ˈswɪmɪŋ]" }
  ],
  "О погоде (5 кл)": [
    { en: "It's awful!", ru: "Ужасно!", tr: "[ɪts ˈɔ:fəl]" },
    { en: "It's terrible!", ru: "Ужасно!", tr: "[ɪts ˈterəbl]" },
    { en: "It's freezing!", ru: "Морозно!", tr: "[ɪts ˈfri:zɪŋ]" },
    { en: "It's cold!", ru: "Холодно!", tr: "[ɪts kəʊld]" },
    { en: "It's a lovely day!", ru: "Очаровательный день!", tr: "[ɪts ə ˈlʌvlɪ deɪ]" },
    { en: "It's a beautiful day!", ru: "Красивый день!", tr: "[ɪts ə ˈbju:tɪfʊl deɪ]" },
    { en: "It's warm!", ru: "Тепло!", tr: "[ɪts wɔ:m]" },
    { en: "It's very hot!", ru: "Очень жарко!", tr: "[ɪts ˈverɪ hɒt]" },
    { en: "It's fabulous!", ru: "Потрясающе!", tr: "[ɪts ˈfæbjʊləs]" }
  ],
  "Оденься правильно! (5 кл)": [
    { en: "blouse", ru: "блузка", tr: "[blaʊz]" },
    { en: "high heels", ru: "высокие каблуки", tr: "[haɪ hi:lz]" },
    { en: "trousers", ru: "брюки", tr: "[ˈtraʊzəz]" },
    { en: "shirt", ru: "рубашка", tr: "[ʃɜ:t]" },
    { en: "tie", ru: "галстук", tr: "[taɪ]" },
    { en: "raincoat", ru: "плащ", tr: "[ˈreɪnkəʊt]" },
    { en: "jumper", ru: "джемпер", tr: "[ˈdʒʌmpə]" },
    { en: "suit", ru: "костюм", tr: "[su:t]" },
    { en: "dress", ru: "платье", tr: "[dres]" },
    { en: "bag", ru: "сумка", tr: "[bæɡ]" },
    { en: "wear", ru: "носить, быть одетым", tr: "[weə]" },
    { en: "put on", ru: "одевать", tr: "[pʊt ɒn]" },
    { en: "tight", ru: "тесный, узкий", tr: "[taɪt]" },
    { en: "light", ru: "лёгкий", tr: "[laɪt]" },
    { en: "loose", ru: "свободный (об одежде)", tr: "[lu:s]" }
  ],
  "Это весело! (5 кл)": [
    { en: "go skiing", ru: "кататься на лыжах", tr: "[ɡəʊ ˈski:ɪŋ]" },
    { en: "watch TV", ru: "смотреть телевизор", tr: "[wɒtʃ ti:ˈvi:]" },
    { en: "read a book", ru: "читать книгу", tr: "[ri:d ə bʊk]" },
    { en: "have a picnic", ru: "устроить пикник", tr: "[hæv ə ˈpɪknɪk]" },
    { en: "go camping", ru: "ходить в поход", tr: "[ɡəʊ ˈkæmpɪŋ]" }
  ],
  "Литература (5 кл)": [
    { en: "sky", ru: "небо", tr: "[skaɪ]" },
    { en: "wind", ru: "ветер", tr: "[wɪnd]" },
    { en: "leaves", ru: "листья", tr: "[li:vz]" },
    { en: "branches", ru: "ветки", tr: "[ˈbra:ntʃɪz]" }
  ],
  "Праздники (5 кл)": [
    { en: "set off fireworks", ru: "запускать фейерверки", tr: "[set ɒf ˈfaɪəwɜ:ks]" },
    { en: "dress up", ru: "наряжаться", tr: "[dres ʌp]" },
    { en: "have street parades", ru: "устраивать уличные парады", tr: "[hæv stri:t pəˈreɪdz]" },
    { en: "light bonfires", ru: "зажигать костры", tr: "[laɪt ˈbɒnfaɪəz]" },
    { en: "decorate the house", ru: "украшать дом", tr: "[ˈdekəreɪt ðə haʊs]" },
    { en: "exchange gifts", ru: "обмениваться подарками", tr: "[ɪksˈtʃeɪndʒ ɡɪfts]" },
    { en: "have a family dinner", ru: "устроить семейный ужин", tr: "[hæv ə ˈfæmɪlɪ ˈdɪnə]" },
    { en: "cook special food", ru: "готовить особую еду", tr: "[kʊk ˈspeʃl fu:d]" }
  ],
  "Урожай (5 кл)": [
    { en: "cranberry sauce", ru: "клюквенный соус", tr: "[ˈkrænbərɪ sɔ:s]" },
    { en: "dessert", ru: "десерт", tr: "[dɪˈzɜ:t]" },
    { en: "varieties", ru: "разнообразие", tr: "[vəˈraɪətɪz]" },
    { en: "cookery competition", ru: "кулинарный конкурс", tr: "[ˈkʊkərɪ kəmˈpɪtɪʃn]" },
    { en: "wheat", ru: "пшеница", tr: "[wi:t]" },
    { en: "run free", ru: "бежать свободно", tr: "[rʌn fri:]" }
  ],
  "Шеф-повар (5 кл)": [
    { en: "olive oil", ru: "оливковое масло", tr: "[ˈɒlɪv ɔɪl]" },
    { en: "jam", ru: "джем, варенье", tr: "[dʒæm]" },
    { en: "butter", ru: "сливочное масло", tr: "[ˈbʌtə]" },
    { en: "cheese", ru: "сыр", tr: "[tʃi:z]" },
    { en: "egg", ru: "яйцо", tr: "[eɡ]" },
    { en: "sausages", ru: "сосиски", tr: "[ˈsɒsɪdʒɪz]" },
    { en: "pineapple", ru: "ананас", tr: "[ˈpaɪnæpl]" },
    { en: "cabbage", ru: "капуста", tr: "[ˈkæbɪdʒ]" },
    { en: "garlic", ru: "чеснок", tr: "[ˈɡa:lɪk]" },
    { en: "orange juice", ru: "апельсиновый сок", tr: "[ˈɒrɪndʒ dʒu:s]" },
    { en: "strawberries", ru: "земляника", tr: "[ˈstrɔ:bərɪz]" },
    { en: "pasta", ru: "макароны", tr: "[ˈpa:stə]" },
    { en: "bread", ru: "хлеб", tr: "[bred]" },
    { en: "cereal", ru: "хлопья", tr: "[ˈsɪərɪəl]" },
    { en: "cherries", ru: "вишни", tr: "[ˈtʃerɪz]" },
    { en: "grapes", ru: "виноград", tr: "[ɡreɪps]" },
    { en: "lemons", ru: "лимоны", tr: "[ˈlemənz]" },
    { en: "onion", ru: "лук", tr: "[ˈʌnjən]" },
    { en: "tomatoes", ru: "помидоры", tr: "[təˈma:təʊz]" }
  ],
  "Идём за покупками (5 кл)": [
    { en: "bakery", ru: "булочная", tr: "[ˈbeɪkərɪ]" },
    { en: "florist's", ru: "цветочный магазин", tr: "[ˈflɒrɪsts]" },
    { en: "café", ru: "кафе", tr: "[ˈkæfeɪ]" },
    { en: "shoe shop", ru: "обувной магазин", tr: "[ʃu: ʃɒp]" },
    { en: "newsagent's", ru: "газетный киоск", tr: "[ˈnju:zeɪdʒənts]" },
    { en: "greengrosser's", ru: "магазин фруктов и овощей", tr: "[ˈɡri:nɡrəʊsəz]" },
    { en: "toy shop", ru: "магазин игрушек", tr: "[tɔɪ ʃɒp]" },
    { en: "bookshop", ru: "книжный магазин", tr: "[ˈbʊkʃɒp]" },
    { en: "chemist's", ru: "аптека", tr: "[ˈkemɪsts]" },
    { en: "record shop", ru: "музыкальный магазин", tr: "[ˈrekɔ:d ʃɒp]" },
    { en: "fast food restaurant", ru: "ресторан быстрой еды", tr: "[fɑ:st fu:d ˈrestrɒnt]" },
    { en: "clothes shop", ru: "магазин одежды", tr: "[kləʊðz ʃɒp]" },
    { en: "jeweller's", ru: "ювелирный магазин", tr: "[ˈdʒu:ələz]" },
    { en: "butcher's", ru: "мясная лавка", tr: "[ˈbʊtʃəz]" }
  ],
  "Это было здорово! (5 кл)": [
    { en: "a zoo", ru: "зоопарк", tr: "[ə zu:]" },
    { en: "an art gallery", ru: "художественная галерея", tr: "[æn a:t ˈɡælərɪ]" },
    { en: "a theatre", ru: "театр", tr: "[ə ˈθɪətə]" },
    { en: "an adventure park", ru: "парк аттракционов", tr: "[æn ədˈventʃə pa:k]" },
    { en: "a concert hall", ru: "концертный зал", tr: "[ə ˈkɒnsət hɔ:l]" },
    { en: "choose", ru: "выбирать", tr: "[tʃu:z]" },
    { en: "queue", ru: "очередь", tr: "[kju:]" },
    { en: "candyfloss", ru: "сахарная вата", tr: "[ˈkændɪflɒs]" }
  ],
  "Не пропусти это! (5 кл)": [
    { en: "horror", ru: "фильм ужасов", tr: "[ˈhɒrə]" },
    { en: "comedy", ru: "комедия", tr: "[ˈkɒmədɪ]" },
    { en: "animated", ru: "анимационный", tr: "[ˈænɪmeɪtɪd]" },
    { en: "romance", ru: "романс", tr: "[rəʊˈmæns]" },
    { en: "action", ru: "боевик", tr: "[ˈækʃn]" },
    { en: "fantasy", ru: "фантастика", tr: "[ˈfæntəzɪ]" }
  ],
  "Путешествие и отдых (5 кл)": [
    { en: "beach holiday", ru: "пляжные каникулы", tr: "[bi:tʃ ˈhɒlədeɪ]" },
    { en: "cruise", ru: "круиз", tr: "[kru:z]" },
    { en: "safari", ru: "сафари", tr: "[səˈfɑ:rɪ]" },
    { en: "sightseeing tour", ru: "тур по достопримечательностям", tr: "[ˈsaɪtsi:ɪŋ tʊə]" },
    { en: "activity holiday", ru: "активные каникулы", tr: "[ækˈtɪvətɪ ˈhɒlədeɪ]" }
  ],
  "Как ты любишь путешествовать? (5 кл)": [
    { en: "by coach", ru: "междугородним автобусом", tr: "[baɪ kəʊtʃ]" },
    { en: "by motorbike", ru: "мотоциклом", tr: "[baɪ ˈməʊtəbaɪk]" },
    { en: "by train", ru: "поездом", tr: "[baɪ treɪn]" },
    { en: "by car", ru: "машиной", tr: "[baɪ ka:]" },
    { en: "by ship", ru: "кораблём", tr: "[baɪ ʃɪp]" },
    { en: "by bike", ru: "велосипедом", tr: "[baɪ baɪk]" },
    { en: "by plane", ru: "самолётом", tr: "[baɪ pleɪn]" },
    { en: "by air", ru: "воздухом", tr: "[baɪ eə]" },
    { en: "on foot", ru: "пешком", tr: "[ɒn fʊt]" }
  ],
  "Летние каникулы (5 кл)": [
    { en: "hiking", ru: "пешеходный туризм", tr: "[ˈhaɪkɪŋ]" },
    { en: "sunbathing", ru: "принятие солнечных ванн", tr: "[ˈsʌnba:θɪŋ]" },
    { en: "swimming", ru: "плавание", tr: "[ˈswɪmɪŋ]" },
    { en: "fishing", ru: "рыбалка", tr: "[ˈfɪʃɪŋ]" },
    { en: "windsurfing", ru: "виндсёрфинг", tr: "[ˈwɪndsɜ:fɪŋ]" },
    { en: "jet skiing", ru: "катание на водном мотоцикле", tr: "[dʒet ˈski:ɪŋ]" },
    { en: "white water rafting", ru: "сплав на плотах", tr: "[waɪt ˈwɔ:tə ˈra:ftɪŋ]" },
    { en: "scuba diving", ru: "подводное плавание (с аквалангом)", tr: "[ˈsku:bə ˈdaɪvɪŋ]" }
  ],
  "Какие бывают занятия? (5 кл)": [
    { en: "tiring", ru: "утомительный", tr: "[ˈtaɪərɪŋ]" },
    { en: "relaxing", ru: "расслабляющий", tr: "[rɪˈlæksɪŋ]" },
    { en: "boring", ru: "скучный", tr: "[ˈbɔ:rɪŋ]" },
    { en: "exciting", ru: "волнующий", tr: "[ɪkˈsaɪtɪŋ]" },
    { en: "fun", ru: "забавный", tr: "[fʌn]" },
    { en: "dangerous", ru: "опасный", tr: "[ˈdeɪndʒərəs]" },
    { en: "enjoyable", ru: "приятный", tr: "[ɪnˈdʒɔɪəbl]" }
  ],
  "Просто записка (5 кл)": [
    { en: "toothache", ru: "зубная боль", tr: "[ˈtu:θeɪk]" },
    { en: "stomachache", ru: "боль в животе", tr: "[ˈstʌməkeɪk]" },
    { en: "a headache", ru: "головная боль", tr: "[ə ˈhedeɪk]" },
    { en: "a temperature", ru: "температура", tr: "[ə ˈtemprətʃə]" },
    { en: "a sunburn", ru: "солнечный ожог", tr: "[ə ˈsʌnbɜ:n]" },
    { en: "see a doctor", ru: "посетить доктора", tr: "[si: ə ˈdɒktə]" },
    { en: "see a dentist", ru: "посетить дантиста", tr: "[si: ə ˈdentɪst]" },
    { en: "take an aspirin", ru: "принять аспирин", tr: "[teɪk ən ˈæsprɪn]" },
    { en: "put lotion on", ru: "нанести лосьон", tr: "[pʊt ˈləʊʃn ɒn]" }
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

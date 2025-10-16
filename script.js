const translations = {
  ru: {
    getSignal: 'Получить сигнал',
    signalTitleForex: 'Получение сигнала Форекс',
    signalTitleOtx: 'Получение сигнала OTC',
    forexClosed: 'Форекс недоступен по выходным',
    analyzing: 'Анализирую рынок...',
    analyzingData: 'Анализ рыночных данных...',
    nextSignal: 'Следующий сигнал доступен через',
    timeLabel: 'Время',
    pairLabel: 'Пара',
    actionLabel: 'Действие',
    marketBlocked: '⚠️ Переход между рынками временно недоступен',
    expiryLabel: 'Экспирация',
    confidenceLabel: 'Уверенность',
    reasonLabel: 'Причина',
    buy: 'Покупка',
    sell: 'Продажа',
    buyReasons: [
      'Золотой крест — сигнал начала восходящего тренда.',
      'Пробой сопротивления с объёмом — возможное начало роста.'
    ],
    sellReasons: [
      'Пробой поддержки — возможное дальнейшее снижение.',
      'Медвежье расхождение — сигнал ослабления тренда.',
      'Фигура "голова и плечи" — предвестник падения.'
    ]
  },
  en: {
    getSignal: 'Get Signal',
    signalTitleForex: 'Getting Forex Signal',
    signalTitleOtx: 'Getting OTC Signal',
    forexClosed: 'Forex is closed on weekends',
    analyzing: 'Analyzing market...',
    marketBlocked: '⚠️ Market switching is temporarily disabled',
    analyzingData: 'Analyzing market data...',
    nextSignal: 'Next signal available in',
    timeLabel: 'Time',
    pairLabel: 'Pair',
    actionLabel: 'Action',
    expiryLabel: 'Expiry',
    confidenceLabel: 'Confidence',
    reasonLabel: 'Reason',
    buy: 'Buy',
    sell: 'Sell',
    buyReasons: [
      'Golden cross — signal of an upward trend.',
      'Resistance breakout with volume — possible start of growth.'
    ],
    sellReasons: [
      'Support breakout — possible further decline.',
      'Bearish divergence — trend weakening signal.',
      '"Head and shoulders" pattern — precursor to a drop.'
    ]
  },
  in: {
    getSignal: 'सिग्नल प्राप्त करें',
    signalTitleForex: 'फॉरेक्स सिग्नल प्राप्त कर रहे हैं',
    signalTitleOtx: 'OTC सिग्नल प्राप्त कर रहे हैं',
    forexClosed: 'फॉरेक्स सप्ताहांत में बंद रहता है',
    analyzing: 'बाजार का विश्लेषण कर रहे हैं...',
    analyzingData: 'बाजार डेटा का विश्लेषण...',
    marketBlocked: '⚠️ मार्केट स्विचिंग अस्थायी रूप से बंद है',
    nextSignal: 'अगला सिग्नल उपलब्ध है',
    timeLabel: 'समय',
    pairLabel: 'पेयर',
    actionLabel: 'क्रिया',
    expiryLabel: 'समाप्ति',
    confidenceLabel: 'विश्वास स्तर',
    reasonLabel: 'कारण',
    buy: 'खरीदें',
    sell: 'बेचें',
    buyReasons: [
      'गोल्डन क्रॉस — ऊपर की प्रवृत्ति का संकेत।',
      'वॉल्यूम के साथ प्रतिरोध ब्रेकआउट — संभावित वृद्धि की शुरुआत।'
    ],
    sellReasons: [
      'समर्थन ब्रेकआउट — संभावित गिरावट।',
      'बेयरिश डाइवर्जेंस — प्रवृत्ति कमजोर हो रही है।',
      '"हेड एंड शोल्डर" पैटर्न — गिरावट का संकेत।'
    ]
  },
  uz: {
    getSignal: 'Signalni olish',
    signalTitleForex: 'Forex signali olinmoqda',
    signalTitleOtx: 'OTC signali olinmoqda',
    forexClosed: 'Forex dam olish kunlari yopiq',
    analyzing: 'Bozor tahlil qilinmoqda...',
    analyzingData: 'Bozor maʼlumotlari tahlil qilinmoqda...',
    marketBlocked: '⚠️ Bozorni almashtirish vaqtincha bloklangan',
    nextSignal: 'Keyingi signal mavjud:',
    timeLabel: 'Vaqt',
    pairLabel: 'Juftlik',
    actionLabel: 'Harakat',
    expiryLabel: 'Muddati',
    confidenceLabel: 'Ishonch darajasi',
    reasonLabel: 'Sabab',
    buy: 'Sotib olish',
    sell: 'Sotish',
    buyReasons: [
      'Oltin kesish — o‘suvchi trend belgisi.',
      'Hajm bilan qarshilik buzilishi — o‘sish boshlanishi mumkin.'
    ],
    sellReasons: [
      'Qo‘llab-quvvatlash buzilishi — pasayish davom etishi mumkin.',
      'Ayvon divergentsiyasi — trend zaiflashmoqda.',
      '"Bosh va yelkalar" shakli — pasayish belgisi.'
    ]
  }
};


const app = document.getElementById('app');
const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');
let isGeneratingSignal = false;
let currentLang = 'ru';
let lastSignal = {
  actionKey: null,
  reasonIndex: null,
  marketType: null
};



lightBtn.addEventListener('click', () => {
  app.classList.remove('theme-dark');
  app.classList.add('theme-light');
});

darkBtn.addEventListener('click', () => {
  app.classList.remove('theme-light');
  app.classList.add('theme-dark');
});

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  console.log('Выбран язык:', lang);
});


const selected = document.getElementById('selected-language');
const options = document.getElementById('language-options');

// 🔄 Открытие/закрытие списка
selected.addEventListener('click', () => {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

// 🎯 Выбор языка
document.querySelectorAll('.language-option').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    currentLang = lang;

    const imgSrc = option.querySelector('img').src;
    const text = option.querySelector('span').textContent;
    selected.innerHTML = `<img src="${imgSrc}" alt="${text}" /><span>${text}</span>`;
    options.style.display = 'none';

    console.log('Выбран язык:', lang);
    updateInterfaceLanguage();
  });
});


// ✅ По умолчанию выбран русский (уже отображён в HTML)


const forexBtn = document.getElementById('forex-btn');
const forexWarning = document.getElementById('forex-warning');
const signalTitle = document.getElementById('signal-title');

// 🔄 Проверка дня недели
const today = new Date();
const day = today.getDay(); // 0 = Sunday, 6 = Saturday

forexBtn.addEventListener('click', () => {
  if (isGeneratingSignal) {
    showMarketWarning();
    return;
  }

  lastSignal.marketType = 'forex'; // ✅ сохраняем тип рынка

  const day = new Date().getDay();
  if (day === 0 || day === 6) {
    forexWarning.style.display = 'block';
    signalTitle.textContent = translations[currentLang]['forexClosed'];
  } else {
    forexWarning.style.display = 'none';
    signalTitle.textContent = translations[currentLang]['signalTitleForex']; // ✅ заголовок Форекс
  }

  updateExpiryOptions('forex'); // если используешь разные экспирации
});


document.getElementById('otx-btn').addEventListener('click', () => {
  if (isGeneratingSignal) {
    showMarketWarning();
    return;
  }

  // ✅ Устанавливаем тип рынка
  lastSignal.marketType = 'otx';

  // ✅ Скрываем предупреждение о Форексе
  document.getElementById('forex-warning').style.display = 'none';

  // ✅ Переводим заголовок
  document.getElementById('signal-title').textContent = translations[currentLang]['signalTitleOtx'];

  // ✅ Обновляем экспирации (если используется)
  updateExpiryOptions?.('otx');
});


window.onload = () => {
  document.getElementById('otx-btn').click(); // запускаем OTX по умолчанию
};


document.getElementById('get-signal-btn').addEventListener('click', () => {
  isGeneratingSignal = true;

  const getSignalBtn = document.getElementById('get-signal-btn');
  const loadingBlock = document.getElementById('signal-loading');
  const loadingText = document.getElementById('loading-text');
  const resultBlock = document.getElementById('signal-result');
  const countdownText = document.getElementById('countdown-text');
  const signalTitle = document.getElementById('signal-title');
  const t = translations[currentLang];

  resultBlock.style.display = 'none';
  loadingBlock.style.display = 'block';
  loadingText.textContent = t.analyzing;

  setTimeout(() => {
    loadingText.textContent = t.analyzingData;
  }, 1500);

  setTimeout(() => {
    loadingBlock.style.display = 'none';
    resultBlock.style.display = 'block';
    isGeneratingSignal = false;

    const pair = document.getElementById('pair-select').value;
    const expiry = document.getElementById('expiry-select').value;
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    const actions = ['buy', 'sell'];
    const actionKey = actions[Math.floor(Math.random() * actions.length)];
    const reasonIndex = Math.floor(Math.random() * t[actionKey + 'Reasons'].length);

    lastSignal.actionKey = actionKey;
    lastSignal.reasonIndex = reasonIndex;

    const actionText = t[actionKey];
    const reason = t[actionKey + 'Reasons'][reasonIndex];
    const confidence = Math.floor(70 + Math.random() * 20) + '%';

    const iconSrc = actionKey === 'buy' ? 'IMG/up.png' : 'IMG/down.png';
    const actionClass = actionKey;

    // 🔄 Перевод меток
    document.getElementById('label-time').textContent = t.timeLabel;
    document.getElementById('label-pair').textContent = t.pairLabel;
    document.getElementById('label-action').textContent = t.actionLabel;
    document.getElementById('label-expiry').textContent = t.expiryLabel;
    document.getElementById('label-confidence').textContent = t.confidenceLabel;
    document.getElementById('label-reason').textContent = t.reasonLabel;

    // 🧾 Заполнение данных
    document.getElementById('signal-time').textContent = time;
    document.getElementById('signal-pair').textContent = pair;
    document.getElementById('signal-action').innerHTML = `
      <img src="${iconSrc}" alt="${actionText}" class="action-icon" />
      <span class="${actionClass}">${actionText}</span>
      <img src="${iconSrc}" alt="${actionText}" class="action-icon" />
    `;
    document.getElementById('signal-expiry').textContent = expiry;
    document.getElementById('signal-confidence').textContent = confidence;
    document.getElementById('signal-reason-text').textContent = reason;

    // ⏱️ Определяем тип рынка и время блокировки
    const marketType = signalTitle.textContent.includes(t.signalTitleOtx) ? 'otx' : 'forex';
    let countdown = marketType === 'otx' ? 15 : 30;

    getSignalBtn.disabled = true;
    getSignalBtn.classList.add('disabled');
    countdownText.textContent = `${t.nextSignal} ${countdown}`;

    const countdownInterval = setInterval(() => {
      countdown--;
      countdownText.textContent = `${t.nextSignal} ${countdown} сек`;
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownText.textContent = '';
        getSignalBtn.disabled = false;
        getSignalBtn.classList.remove('disabled');
      }
    }, 1000);
  }, 3000);
});



const expiryOptions = {
  otx: ['5 сек', '15 сек', '30 сек', '1 минута', '3 минуты', '5 минут', '30 минут'],
  forex: ['1 минута', '3 минуты', '5 минут', '30 минут']
};



function updateExpiryOptions(marketType) {
  const expirySelect = document.getElementById('expiry-select');
  expirySelect.innerHTML = ''; // очищаем

  expiryOptions[marketType].forEach(label => {
    const option = document.createElement('option');
    option.value = label;
    option.textContent = label;
    expirySelect.appendChild(option);
  });
}


function updateInterfaceLanguage() {
  const t = translations[currentLang];

  // 🔘 Кнопка и заголовок
  document.getElementById('get-signal-btn').textContent = t.getSignal;
  document.getElementById('signal-title').textContent =
    lastSignal.marketType === 'otx' ? t.signalTitleOtx : t.signalTitleForex;

  // 🏷️ Метки формы
  document.getElementById('label-pair').textContent = t.pairLabel;
  document.getElementById('label-expiry').textContent = t.expiryLabel;

  // 🏷️ Метки результата
  document.getElementById('label-time').textContent = t.timeLabel;
  document.getElementById('label-pair-result').textContent = t.pairLabel + ':';
  document.getElementById('label-action').textContent = t.actionLabel + ':';
  document.getElementById('label-expiry-result').textContent = t.expiryLabel + ':';
  document.getElementById('label-confidence').textContent = t.confidenceLabel + ':';
  document.getElementById('label-reason').textContent = t.reasonLabel;

  // ⚠️ Предупреждения
  document.getElementById('forex-warning-text').textContent = t.forexClosed;
  document.getElementById('market-warning-text').textContent = t.marketBlocked;


  // 🔁 Перевод действия и причины, если сигнал уже был
  if (lastSignal.actionKey !== null && lastSignal.reasonIndex !== null) {
    const actionText = t[lastSignal.actionKey];
    const reason = t[lastSignal.actionKey + 'Reasons'][lastSignal.reasonIndex];
    const iconSrc = lastSignal.actionKey === 'buy' ? 'IMG/up.png' : 'IMG/down.png';
    const actionClass = lastSignal.actionKey;

    document.getElementById('signal-action').innerHTML = `
      <img src="${iconSrc}" alt="${actionText}" class="action-icon" />
      <span class="${actionClass}">${actionText}</span>
      <img src="${iconSrc}" alt="${actionText}" class="action-icon" />
    `;
    document.getElementById('signal-reason-text').textContent = reason;
  }
}


// ================= 语言数据定义 =================
let currentLang = 'zh';
const translations = {
    zh: {
        'main-title': '星座 · 血型 · MBTI 综合匹配',
        'main-desc': '输入星座、血型、MBTI信息，获得专业的综合匹配评分。缺失项自动优化计算。',
        'input-title': '输入参数',
        'female-legend': '女方',
        'male-legend': '男方',
        'zodiac-label': '星座',
        'blood-label': '血型',
        'mbti-label': 'MBTI',
        'mbti2-label': 'MBTI 2',
        'birthdate-label': '出生年月',
        'birthtime-label': '出生时间',
        'birthcountry-label': '出生国家',
        'birthcity-label': '出生城市',
        'birthdate-label2': '出生年月',
        'birthtime-label2': '出生时间',
        'birthcountry-label2': '出生国家',
        'birthcity-label2': '出生城市',
        'select-zodiac-option': '选择星座',
        'select-country-option': '选择国家',
        'select-country-option2': '选择国家',
        'select-city-option': '选择城市',
        'select-city-option2': '选择城市',
        'optional-option': '(可选)',
        'calcBtn': '计算',
        'randomBtn': '随机示例',
        'clearBtn': '清空',
        'rating-title': '评分等级',
        'rating-90-text': '极佳 / 天生一对',
        'rating-80-text': '很好 / 稳定向上',
        'rating-70-text': '中上 / 需沟通巩固',
        'rating-60-text': '尚可 / 可试试看',
        'rating-0-text': '需努力 / 差异较大',
        'disclaimer': '本工具仅供娱乐参考，不代表真实关系走向。实际相处请以尊重、沟通、成长为核心。',
        'footer-text': '星座血型MBTI匹配计算器 · 前端本地计算',
        'waiting-input': '等待输入',
        'calculating': '计算中',
        'calc-failed': '计算失败',
        'waiting-zodiac': '等待星座',
        'please-select-zodiac': '请至少选择双方星座',
        'missing-items': '缺少可用项',
        'not-participated': '未参与',
        'partial-missing': '部分缺失：已按有效权重归一',
        'complete-calc': '完整计算',
        'effective-weight-sum': '有效权重总和：',
        'female-zodiac': '女方星座：',
        'male-zodiac': '男方星座：',
        'female-blood': '女血型：',
        'male-blood': '男血型：',
        'female-mbti': '女MBTI：',
        'male-mbti': '男MBTI：',
        'synastry-long': '长期契合度：',
        'synastry-short': '短期吸引力：',
        // 评分等级
        'excellent': '极佳',
        'very-good': '很好',
        'good': '中上',
        'try': '可尝试',
        'need-effort': '需努力',
        'page-title': '星座 + 血型 + MBTI 综合匹配计算器'
    },
    en: {
        'main-title': 'Zodiac · Blood Type · MBTI Compatibility',
        'main-desc': 'Enter zodiac, blood type, and MBTI information to get professional comprehensive compatibility scores. Missing items are automatically optimized for calculation.',
        'input-title': 'Input Parameters',
        'female-legend': 'Female',
        'male-legend': 'Male',
        'zodiac-label': 'Zodiac',
        'blood-label': 'Blood Type',
        'mbti-label': 'MBTI',
        'mbti2-label': 'MBTI 2',
        'birthdate-label': 'Birth Date',
        'birthtime-label': 'Birth Time',
        'birthcountry-label': 'Birth Country',
        'birthcity-label': 'Birth City',
        'birthdate-label2': 'Birth Date',
        'birthtime-label2': 'Birth Time',
        'birthcountry-label2': 'Birth Country',
        'birthcity-label2': 'Birth City',
        'select-zodiac-option': 'Select Zodiac',
        'select-country-option': 'Select Country',
        'select-country-option2': 'Select Country',
        'select-city-option': 'Select City',
        'select-city-option2': 'Select City',
        'optional-option': '(Optional)',
        'calcBtn': 'Calculate',
        'randomBtn': 'Random Example',
        'clearBtn': 'Clear',
        'rating-title': 'Rating Levels',
        'rating-90-text': 'Excellent / Perfect Match',
        'rating-80-text': 'Very Good / Stable Growth',
        'rating-70-text': 'Good / Need Communication',
        'rating-60-text': 'Fair / Worth Trying',
        'rating-0-text': 'Need Effort / Significant Differences',
        'disclaimer': 'This tool is for entertainment reference only and does not represent actual relationship outcomes. Please prioritize respect, communication, and growth in real relationships.',
        'footer-text': 'Zodiac Blood Type MBTI Compatibility Calculator · Frontend Local Calculation',
        'waiting-input': 'Waiting for input',
        'calculating': 'Calculating',
        'calc-failed': 'Calculation failed',
        'waiting-zodiac': 'Waiting for zodiac',
        'please-select-zodiac': 'Please select at least both zodiac signs',
        'missing-items': 'Missing available items',
        'not-participated': 'Not participated',
        'partial-missing': 'Partial missing: normalized by effective weight',
        'complete-calc': 'Complete calculation',
        'effective-weight-sum': 'Effective weight sum: ',
        'female-zodiac': 'Female Zodiac: ',
        'male-zodiac': 'Male Zodiac: ',
        'female-blood': 'Female Blood: ',
        'male-blood': 'Male Blood: ',
        'female-mbti': 'Female MBTI: ',
        'male-mbti': 'Male MBTI: ',
        'synastry-long': 'Long-term: ',
        'synastry-short': 'Short-term: ',
        // 评分等级
        'excellent': 'Excellent',
        'very-good': 'Very Good',
        'good': 'Good',
        'try': 'Try',
        'need-effort': 'Need Effort',
        'page-title': 'Zodiac + Blood Type + MBTI Compatibility Calculator'
    }
};

const zodiacTranslations = {
    zh: {
        '白羊': '白羊座', '金牛': '金牛座', '双子': '双子座', '巨蟹': '巨蟹座',
        '狮子': '狮子座', '处女': '处女座', '天秤': '天秤座', '天蝎': '天蝎座',
        '射手': '射手座', '摩羯': '摩羯座', '水瓶': '水瓶座', '双鱼': '双鱼座'
    },
    en: {
        '白羊': 'Aries', '金牛': 'Taurus', '双子': 'Gemini', '巨蟹': 'Cancer',
        '狮子': 'Leo', '处女': 'Virgo', '天秤': 'Libra', '天蝎': 'Scorpio',
        '射手': 'Sagittarius', '摩羯': 'Capricorn', '水瓶': 'Aquarius', '双鱼': 'Pisces'
    }
};

const mbtiLabelTranslations = {
    zh: {
        '天生一对': '天生一对',
        '还不错': '还不错',
        '还可以': '还可以',
        '可以试试看': '可以试试看',
        '要多努力': '要多努力'
    },
    en: {
        '天生一对': 'Perfect Match',
        '还不错': 'Pretty Good',
        '还可以': 'Okay',
        '可以试试看': 'Worth Trying',
        '要多努力': 'Need More Effort'
    }
};


function t(key) {
    return translations[currentLang][key] || key;
}

async function updateLanguage() {
    // 更新HTML lang属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    // 更新所有带ID的文本元素
    Object.keys(translations[currentLang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = translations[currentLang][key];
            } else if (element.tagName === 'BUTTON') {
                element.textContent = translations[currentLang][key];
            } else if (element.tagName === 'TITLE') {
                element.textContent = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang' + (currentLang === 'zh' ? 'CN' : 'EN')).classList.add('active');

    // 更新语言按钮样式
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.classList.contains('active')) {
            btn.style.background = 'var(--accent)';
            btn.style.color = 'white';
        } else {
            btn.style.background = 'var(--panel-alt)';
            btn.style.color = 'var(--muted)';
        }
    });

    // 重新填充选择器选项
    await setBirthPlaceData();
    fillSelectOptions();

    // 重新渲染结果
    renderResult();
}

// ================= 数据定义 =================
const zodiacNames = Object.keys(zodiacTranslations.zh);
const mbtiTypes = ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP', 'ENTP', 'ISFP', 'ESFP', 'ISTP', 'ESTP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'];
let birthPlaceData = [];
let countryDataCache = null;

async function loadCountryData() {
    if (countryDataCache) return countryDataCache;
    try {
        const [zhResponse, enResponse] = await Promise.all([
            fetch('countryDataOfZH.json'),
            fetch('countryDataOfEN.json')
        ]);
        const [zh, en] = await Promise.all([
            zhResponse.ok ? zhResponse.json() : [],
            enResponse.ok ? enResponse.json() : []
        ]);
        countryDataCache = { zh, en };
    } catch (error) {
        countryDataCache = { zh: [], en: [] };
    }
    return countryDataCache;
}

async function setBirthPlaceData() {
    const data = await loadCountryData();
    birthPlaceData = data[currentLang] || data.zh || data.en || [];
}


// ================== UI 构建 ==================
const form = document.getElementById('form');
const femaleSignSelect = form.elements['femaleSign'];
const maleSignSelect = form.elements['maleSign'];
const femaleBloodSelect = form.elements['femaleBlood'];
const maleBloodSelect = form.elements['maleBlood'];
const femaleMBTISelect = form.elements['femaleMBTI'];
const maleMBTISelect = form.elements['maleMBTI'];
const femaleMBTI2Select = form.elements['femaleMBTI2'];
const maleMBTI2Select = form.elements['maleMBTI2'];
const femaleBirthCountrySelect = form.elements['femaleBirthCountry'];
const maleBirthCountrySelect = form.elements['maleBirthCountry'];
const femaleBirthCitySelect = form.elements['femaleBirthCity'];
const maleBirthCitySelect = form.elements['maleBirthCity'];
const birthCountrySelects = [femaleBirthCountrySelect, maleBirthCountrySelect];
const birthCitySelects = [femaleBirthCitySelect, maleBirthCitySelect];

function getCountryLabel(country) {
    return country.countryName || country.countryCode || '';
}

function getCityLabel(city) {
    return city.city || city.cityCode || '';
}


function resetSelect(select, placeholderText) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = placeholderText;
    select.appendChild(placeholder);
}

function populateCountryOptions(select, selectedValue) {
    resetSelect(select, t('select-country-option'));
    birthPlaceData.forEach(country => {
        const opt = document.createElement('option');
        opt.value = country.countryCode || country.countryName;
        opt.textContent = getCountryLabel(country);
        select.appendChild(opt);
    });
    if (selectedValue) {
        select.value = selectedValue;
    }
}

function populateCityOptions(select, countryValue, selectedValue) {
    resetSelect(select, t('select-city-option'));
    if (!countryValue) return;
    const country = birthPlaceData.find(item => item.countryCode === countryValue || item.countryName === countryValue);
    if (!country) return;
    (country.cities || []).forEach(city => {
        const opt = document.createElement('option');
        opt.value = city.cityCode || city.city;
        opt.textContent = getCityLabel(city);
        select.appendChild(opt);
    });
    if (selectedValue) {
        select.value = selectedValue;
    }
}

function refreshBirthPlaceOptions() {
    birthCountrySelects.forEach((select, index) => {
        const selectedCountry = select.value;
        populateCountryOptions(select, selectedCountry);
        const citySelect = birthCitySelects[index];
        const selectedCity = citySelect.value;
        populateCityOptions(citySelect, select.value, selectedCity);
    });
}

function fillSelectOptions() {
    // 清空现有选项（除了第一个默认选项）
    [femaleSignSelect, maleSignSelect].forEach(select => {
        while (select.children.length > 1) {
            select.removeChild(select.lastChild);
        }
        select.children[0].textContent = t('select-zodiac-option');
    });

    [femaleBloodSelect, maleBloodSelect, femaleMBTISelect, maleMBTISelect, femaleMBTI2Select, maleMBTI2Select].forEach(select => {
        if (select.children.length > 0) {
            select.children[0].textContent = t('optional-option');
        }
    });

    zodiacNames.forEach(z => {
        const optF = document.createElement('option');
        optF.value = z;
        optF.textContent = zodiacTranslations[currentLang][z];
        femaleSignSelect.appendChild(optF);
        const optM = document.createElement('option');
        optM.value = z;
        optM.textContent = zodiacTranslations[currentLang][z];
        maleSignSelect.appendChild(optM);
    });
    mbtiTypes.forEach(t => {
        const of = document.createElement('option');
        of.value = t;
        of.textContent = t;
        femaleMBTISelect.appendChild(of);
        const om = document.createElement('option');
        om.value = t;
        om.textContent = t;
        maleMBTISelect.appendChild(om);

        // 为第二个MBTI选择器添加选项
        const of2 = document.createElement('option');
        of2.value = t;
        of2.textContent = t;
        femaleMBTI2Select.appendChild(of2);
        const om2 = document.createElement('option');
        om2.value = t;
        om2.textContent = t;
        maleMBTI2Select.appendChild(om2);
    });

    refreshBirthPlaceOptions();
}
async function init() {
    await setBirthPlaceData();
    fillSelectOptions();
    renderResult();
}
init();

const scoreValueEl = document.getElementById('scoreValue');
const scoreBadgeEl = document.getElementById('scoreBadge');
const pairDisplay = document.getElementById('pairDisplay');
let lastSynastry = null;

function updateScoreUI(score) {
    scoreValueEl.textContent = score != null ? score : '--';
    const cls = classify(score);
    scoreBadgeEl.className = 'badge ' + (cls.cls || '');
    scoreBadgeEl.textContent = cls.text;
}

function getSelectedCity(countryValue, cityValue) {
    if (!countryValue || !cityValue) return null;
    const country = birthPlaceData.find(item => item.countryCode === countryValue || item.countryName === countryValue);
    if (!country || !country.cities) return null;
    return country.cities.find(city => city.cityCode === cityValue || city.city === cityValue) || null;
}

function normalizeTime(timeValue) {
    if (!timeValue) return null;
    if (timeValue.length === 5) return `${timeValue}:00`;
    return timeValue;
}

function buildUserPayload(isFemale) {
    const prefix = isFemale ? 'female' : 'male';
    const signValue = form.elements[`${prefix}Sign`].value;
    const constellation = zodiacTranslations.en[signValue] || signValue || null;
    const mbti = form.elements[`${prefix}MBTI`].value || null;
    const secondMbti = form.elements[`${prefix}MBTI2`].value || null;
    const bloodType = form.elements[`${prefix}Blood`].value || null;
    const birthDate = form.elements[`${prefix}BirthDate`].value || null;
    const birthTime = normalizeTime(form.elements[`${prefix}BirthTime`].value);
    const birthCountry = form.elements[`${prefix}BirthCountry`].value || null;
    const birthCity = form.elements[`${prefix}BirthCity`].value || null;
    const cityInfo = getSelectedCity(birthCountry, birthCity);

    const payload = {
        userId: 0,
        gender: isFemale ? 'GENDER_WOMAN' : 'GENDER_MAN',
        constellation,
        mbti,
        secondMbti,
        bloodType
    };

    if (birthDate) payload.birthDate = birthDate;
    if (birthTime) payload.birthTime = birthTime;
    if (cityInfo && cityInfo.latitude != null && cityInfo.longitude != null) {
        payload.birthLatitude = cityInfo.latitude;
        payload.birthLongitude = cityInfo.longitude;
    }

    return payload;
}

async function calculateAndRender() {
    const femaleSign = femaleSignSelect.value;
    const maleSign = maleSignSelect.value;

    if (!femaleSign || !maleSign) {
        scoreValueEl.textContent = '--';
        scoreBadgeEl.className = 'badge';
        scoreBadgeEl.textContent = t('waiting-zodiac');
        pairDisplay.innerHTML = '';
        return;
    }

    lastSynastry = null;
    renderResult(null);
    scoreValueEl.textContent = '--';
    scoreBadgeEl.className = 'badge';
    scoreBadgeEl.textContent = t('calculating');

    const payload = {
        fromUser: buildUserPayload(true),
        toUser: buildUserPayload(false)
    };

    try {
        const response = await fetch('https://test-api.mingming.ai/api/mm-personalize/match-scores/calculate-single', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Request failed');
        const data = await response.json();
        if(data.code!=200) throw new Error(data.message);
        const result = data.data;
        console.log(result);
        lastSynastry =result.usedSynastry && (result.synastryLongTermScore != null || result.synastryShortTermScore!= null)
            ? { longTerm: result.synastryLongTermScore, shortTerm: result.synastryShortTermScore }
            : null;
        updateScoreUI(result.totalScore);
        renderResult(result.totalScore);
    } catch (error) {
        scoreValueEl.textContent = '--';
        scoreBadgeEl.className = 'badge poor';
        scoreBadgeEl.textContent = t('calc-failed');
    }
}

function classify(score) {
    if (score == null) return { cls: '', text: t('waiting-input') };
    if (score >= 90) return { cls: 'good', text: t('excellent') };
    if (score >= 80) return { cls: 'good', text: t('very-good') };
    if (score >= 70) return { cls: 'ok', text: t('good') };
    if (score >= 60) return { cls: 'warn', text: t('try') };
    return { cls: 'poor', text: t('need-effort') };
}


function renderResult(scoreOverride) {
    const femaleSign = femaleSignSelect.value;
    const maleSign = maleSignSelect.value;
    const femaleBlood = form.elements['femaleBlood'].value;
    const maleBlood = form.elements['maleBlood'].value;
    const femaleMBTI = form.elements['femaleMBTI'].value;
    const maleMBTI = form.elements['maleMBTI'].value;
    const femaleMBTI2 = form.elements['femaleMBTI2'].value;
    const maleMBTI2 = form.elements['maleMBTI2'].value;

    if (!femaleSign || !maleSign) {
        scoreValueEl.textContent = '--';
        scoreBadgeEl.className = 'badge';
        scoreBadgeEl.textContent = t('waiting-zodiac');
        pairDisplay.innerHTML = '';
        lastSynastry = null;
        return;
    }

    updateScoreUI(scoreOverride);

    // 配对概览
    pairDisplay.innerHTML = '';
    const fragments = [];
    const femaleZodiacText = zodiacTranslations[currentLang][femaleSign];
    const maleZodiacText = zodiacTranslations[currentLang][maleSign];

    fragments.push(`<span>${t('female-zodiac')}<b class="highlight">${femaleZodiacText}</b></span>`);
    fragments.push(`<span>${t('male-zodiac')}<b class="highlight">${maleZodiacText}</b></span>`);
    if (femaleBlood) fragments.push(`<span>${t('female-blood')}${femaleBlood}</span>`);
    if (maleBlood) fragments.push(`<span>${t('male-blood')}${maleBlood}</span>`);
    if (femaleMBTI) {
        const femaleDisplay = femaleMBTI2 ? `${femaleMBTI}+${femaleMBTI2}` : femaleMBTI;
        fragments.push(`<span>${t('female-mbti')}${femaleDisplay}</span>`);
    }
    if (maleMBTI) {
        const maleDisplay = maleMBTI2 ? `${maleMBTI}+${maleMBTI2}` : maleMBTI;
        fragments.push(`<span>${t('male-mbti')}${maleDisplay}</span>`);
    }
    console.log(lastSynastry);
    if (lastSynastry && lastSynastry.longTerm != null) {
        fragments.push(`<span>${t('synastry-long')}${lastSynastry.longTerm}</span>`);
    }
    if (lastSynastry && lastSynastry.shortTerm != null) {
        fragments.push(`<span>${t('synastry-short')}${lastSynastry.shortTerm}</span>`);
    }
    pairDisplay.innerHTML = fragments.join('');
}

// ============ 交互 ===============
const calcBtn = document.getElementById('calcBtn');
const randomBtn = document.getElementById('randomBtn');
const clearBtn = document.getElementById('clearBtn');

birthCountrySelects.forEach((select, index) => {
    select.addEventListener('change', () => {
        const citySelect = birthCitySelects[index];
        populateCityOptions(citySelect, select.value, '');
    });
});

calcBtn.addEventListener('click', () => {
    calculateAndRender();
});


randomBtn.addEventListener('click', () => {
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    femaleSignSelect.value = pick(zodiacNames);
    maleSignSelect.value = pick(zodiacNames);
    if (Math.random() < 0.8) {
        form.elements['femaleBlood'].value = pick(['A', 'B', 'O', 'AB']);
        form.elements['maleBlood'].value = pick(['A', 'B', 'O', 'AB']);
    } else {
        form.elements['femaleBlood'].value = '';
        form.elements['maleBlood'].value = '';
    }
    if (Math.random() < 0.85) {
        form.elements['femaleMBTI'].value = pick(mbtiTypes);
        form.elements['maleMBTI'].value = pick(mbtiTypes);
        // 有30%概率添加第二个MBTI
        if (Math.random() < 0.3) {
            form.elements['femaleMBTI2'].value = pick(mbtiTypes);
            form.elements['maleMBTI2'].value = pick(mbtiTypes);
        } else {
            form.elements['femaleMBTI2'].value = '';
            form.elements['maleMBTI2'].value = '';
        }
    } else {
        form.elements['femaleMBTI'].value = '';
        form.elements['maleMBTI'].value = '';
        form.elements['femaleMBTI2'].value = '';
        form.elements['maleMBTI2'].value = '';
    }
    calculateAndRender();
});

clearBtn.addEventListener('click', () => {
    form.reset();
    femaleSignSelect.value = '';
    maleSignSelect.value = '';
    renderResult(null);
});

// 语言切换
document.getElementById('langCN').addEventListener('click', () => {
    currentLang = 'zh';
    updateLanguage();
});

document.getElementById('langEN').addEventListener('click', () => {
    currentLang = 'en';
    updateLanguage();
});
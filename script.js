// 多语言数据
const translations = {
    zh: {
        subtitle: "依恋关系测评",
        "welcome-title": "发现你的依恋风格",
        "welcome-subtitle": "基于科学的ECR-R量表，帮你了解在亲密关系中的真实自己",
        "feature1-title": "科学专业",
        "feature1-desc": "基于国际认可的ECR-R量表",
        "feature2-title": "深度分析", 
        "feature2-desc": "准确识别你的依恋风格",
        "feature3-title": "精准匹配",
        "feature3-desc": "为你找到最合适的伴侣",
        "test-info-title": "测评说明",
        "test-info-1": "测评包含36个问题，基于科学的ECR-R量表，大约需要8-10分钟",
        "test-info-2": "请根据你在亲密关系中的一般体验回答，而不仅仅是当前关系",
        "test-info-3": "请诚实回答你的真实感受，没有对错之分",
        "test-info-4": "所有信息严格保密，仅用于科学研究目的",
        "name-input-title": "参与者信息",
        "name-label": "姓名：",
        "name-hint": "*必填项，用于结果记录和数据分析",
        "start-btn": "开始测评",
        "prev-btn": "上一页",
        "next-btn": "下一页",
        "view-results": "查看结果",
        "result-title": "你的依恋风格",
        "anxiety-label": "依恋焦虑",
        "avoidance-label": "依恋回避",
        "share-btn": "分享结果",
        "retake-btn": "重新测评",
        optionLabels: [
            "强烈不同意",
            "不同意", 
            "有些不同意",
            "既不同意也不反对",
            "有些同意",
            "同意",
            "强烈同意"
        ],
        attachmentStyles: {
            secure: {
                type: '安全型依恋',
                description: {
                    title: '安全型依恋 (Secure Attachment)',
                    content: `
                        <p>恭喜你！你展现出了安全型依恋的特征。这是最健康的依恋风格，约有50%的成年人具有这种依恋模式。</p>
                        
                        <h4>你的特征：</h4>
                        <p>• 对自己和他人都持积极看法<br>
                        • 相信自己值得被爱，同时信任他人<br>
                        • 能够有效沟通情感需求<br>
                        • 在亲密与独立之间保持健康平衡<br>
                        • 善于处理关系中的冲突</p>
                        
                        <h4>在恋爱关系中：</h4>
                        <p>你通常能建立稳定、满意的关系。你既能享受亲密，也能给予伴侣空间。你的沟通能力和情感稳定性使你成为理想的伴侣。</p>
                        
                        <h4>建议：</h4>
                        <p>继续保持这种健康的关系模式，同时保持对伴侣不同依恋风格的理解和包容。</p>
                    `
                }
            },
            anxious: {
                type: '焦虑型依恋',
                description: {
                    title: '焦虑型依恋 (Anxious Attachment)',
                    content: `
                        <p>你的依恋风格显示出焦虑型的特征。这意味着你在关系中可能会体验到较多的不安全感，但同时你也是一个非常投入和关爱的伴侣。</p>
                        
                        <h4>你的特征：</h4>
                        <p>• 强烈渴望亲密关系<br>
                        • 对被抛弃有深度恐惧<br>
                        • 需要频繁的确认和安慰<br>
                        • 对伴侣的行为高度敏感<br>
                        • 容易将中性信号解释为拒绝</p>
                        
                        <h4>在恋爱关系中：</h4>
                        <p>你可能会过度担心关系的稳定性，需要伴侣的经常确认。你的深情和投入是优势，但有时可能会让伴侣感到压力。</p>
                        
                        <h4>建议：</h4>
                        <p>• 学习自我安抚技巧<br>
                        • 练习直接而冷静的沟通<br>
                        • 培养独立的兴趣和友谊<br>
                        • 寻找能提供稳定性的伴侣</p>
                    `
                }
            },
            avoidant: {
                type: '回避型依恋',
                description: {
                    title: '回避型依恋 (Avoidant Attachment)',
                    content: `
                        <p>你展现出回避型依恋的特征。你重视独立性和自主性，在关系中倾向于保持一定的情感距离。</p>
                        
                        <h4>你的特征：</h4>
                        <p>• 强调自我依赖和独立性<br>
                        • 在关系中保持情感距离<br>
                        • 避免过度的亲密<br>
                        • 难以表达情感需求<br>
                        • 通过其他活动避免深度情感投入</p>
                        
                        <h4>在恋爱关系中：</h4>
                        <p>你可能会觉得过度的亲密令人不适，倾向于通过工作或兴趣爱好来维持独立感。你的自立能力是优势，但有时可能让伴侣感到被拒绝。</p>
                        
                        <h4>建议：</h4>
                        <p>• 练习识别和表达情感<br>
                        • 逐步增加情感分享<br>
                        • 理解亲密不等于失去自我<br>
                        • 寻找尊重你独立性的伴侣</p>
                    `
                }
            },
            disorganized: {
                type: '混乱型依恋',
                description: {
                    title: '混乱型依恋 (Disorganized/Fearful-Avoidant)',
                    content: `
                        <p>你的依恋风格显示出混乱型的特征。这种风格结合了焦虑和回避的元素，你既渴望亲密关系又恐惧被伤害。</p>
                        
                        <h4>你的特征：</h4>
                        <p>• 对自己和他人都持消极看法<br>
                        • 既渴望亲密又恐惧被伤害<br>
                        • 在关系中表现出矛盾行为<br>
                        • 在寻求和逃避亲密之间摇摆<br>
                        • 难以预测自己的情感反应</p>
                        
                        <h4>在恋爱关系中：</h4>
                        <p>你可能会体验到复杂和矛盾的情感。一方面渴望深度连接，另一方面又害怕被伤害而保持距离。这可能导致关系中的不稳定模式。</p>
                        
                        <h4>建议：</h4>
                        <p>• 考虑寻求专业心理咨询<br>
                        • 学习情绪调节技巧<br>
                        • 培养自我认知和反思能力<br>
                        • 在关系中保持耐心和理解<br>
                        • 寻找能提供稳定支持的伴侣</p>
                    `
                }
            }
        }
    },
    en: {
        subtitle: "Attachment Style Assessment",
        "welcome-title": "Discover Your Attachment Style",
        "welcome-subtitle": "Based on the scientific ECR-R scale, helping you understand your true self in intimate relationships",
        "feature1-title": "Scientific & Professional",
        "feature1-desc": "Based on the internationally recognized ECR-R scale",
        "feature2-title": "In-depth Analysis", 
        "feature2-desc": "Accurately identify your attachment style",
        "feature3-title": "Precise Matching",
        "feature3-desc": "Find the most suitable partner for you",
        "test-info-title": "Assessment Instructions",
        "test-info-1": "The assessment contains 36 questions based on the scientific ECR-R scale, takes about 8-10 minutes",
        "test-info-2": "Please respond based on your general experience in romantic relationships, not just current relationship",
        "test-info-3": "Answer honestly based on your true feelings, there are no right or wrong answers",
        "test-info-4": "All information is strictly confidential and used only for scientific research purposes",
        "name-input-title": "Participant Information",
        "name-label": "Name:",
        "name-hint": "*Required field for result recording and data analysis",
        "start-btn": "Start Assessment",
        "prev-btn": "Previous",
        "next-btn": "Next",
        "view-results": "View Results",
        "result-title": "Your Attachment Style",
        "anxiety-label": "Attachment Anxiety",
        "avoidance-label": "Attachment Avoidance",
        "share-btn": "Share Results",
        "retake-btn": "Retake Assessment",
        optionLabels: [
            "Strongly Disagree",
            "Disagree", 
            "Somewhat Disagree",
            "Neither Agree nor Disagree",
            "Somewhat Agree",
            "Agree",
            "Strongly Agree"
        ],
        attachmentStyles: {
            secure: {
                type: 'Secure Attachment',
                description: {
                    title: 'Secure Attachment',
                    content: `
                        <p>Congratulations! You display characteristics of secure attachment. This is the healthiest attachment style, found in about 50% of adults.</p>
                        
                        <h4>Your characteristics:</h4>
                        <p>• Hold positive views of both self and others<br>
                        • Believe you are worthy of love and trust others<br>
                        • Communicate emotional needs effectively<br>
                        • Maintain healthy balance between intimacy and independence<br>
                        • Handle relationship conflicts well</p>
                        
                        <h4>In romantic relationships:</h4>
                        <p>You typically build stable, satisfying relationships. You can enjoy intimacy while giving your partner space. Your communication skills and emotional stability make you an ideal partner.</p>
                        
                        <h4>Suggestions:</h4>
                        <p>Continue maintaining this healthy relationship pattern while staying understanding and tolerant of partners with different attachment styles.</p>
                    `
                }
            },
            anxious: {
                type: 'Anxious Attachment',
                description: {
                    title: 'Anxious Attachment',
                    content: `
                        <p>Your attachment style shows anxious characteristics. This means you may experience more insecurity in relationships, but you are also a very devoted and caring partner.</p>
                        
                        <h4>Your characteristics:</h4>
                        <p>• Strong desire for intimate relationships<br>
                        • Deep fear of abandonment<br>
                        • Need frequent reassurance and comfort<br>
                        • Highly sensitive to partner's behavior<br>
                        • Tend to interpret neutral signals as rejection</p>
                        
                        <h4>In romantic relationships:</h4>
                        <p>You may worry excessively about relationship stability and need frequent confirmation from your partner. Your deep affection and commitment are strengths, but sometimes may pressure your partner.</p>
                        
                        <h4>Suggestions:</h4>
                        <p>• Learn self-soothing techniques<br>
                        • Practice direct and calm communication<br>
                        • Develop independent interests and friendships<br>
                        • Seek partners who can provide stability</p>
                    `
                }
            },
            avoidant: {
                type: 'Avoidant Attachment',
                description: {
                    title: 'Avoidant Attachment',
                    content: `
                        <p>You display avoidant attachment characteristics. You value independence and autonomy, and tend to maintain emotional distance in relationships.</p>
                        
                        <h4>Your characteristics:</h4>
                        <p>• Emphasize self-reliance and independence<br>
                        • Maintain emotional distance in relationships<br>
                        • Avoid excessive intimacy<br>
                        • Difficulty expressing emotional needs<br>
                        • Use other activities to avoid deep emotional investment</p>
                        
                        <h4>In romantic relationships:</h4>
                        <p>You may find excessive intimacy uncomfortable and tend to maintain independence through work or hobbies. Your self-reliance is a strength, but sometimes may make your partner feel rejected.</p>
                        
                        <h4>Suggestions:</h4>
                        <p>• Practice identifying and expressing emotions<br>
                        • Gradually increase emotional sharing<br>
                        • Understand that intimacy doesn't equal losing yourself<br>
                        • Seek partners who respect your independence</p>
                    `
                }
            },
            disorganized: {
                type: 'Disorganized/Fearful-Avoidant Attachment',
                description: {
                    title: 'Disorganized/Fearful-Avoidant Attachment',
                    content: `
                        <p>Your attachment style shows disorganized characteristics. This style combines elements of both anxiety and avoidance - you both crave intimate relationships and fear being hurt.</p>
                        
                        <h4>Your characteristics:</h4>
                        <p>• Hold negative views of both self and others<br>
                        • Both desire intimacy and fear being hurt<br>
                        • Display contradictory behaviors in relationships<br>
                        • Fluctuate between seeking and avoiding intimacy<br>
                        • Difficulty predicting your own emotional reactions</p>
                        
                        <h4>In romantic relationships:</h4>
                        <p>You may experience complex and contradictory emotions. On one hand, you crave deep connection, but on the other, you fear being hurt and maintain distance. This can lead to unstable relationship patterns.</p>
                        
                        <h4>Suggestions:</h4>
                        <p>• Consider seeking professional counseling<br>
                        • Learn emotion regulation techniques<br>
                        • Develop self-awareness and reflection skills<br>
                        • Maintain patience and understanding in relationships<br>
                        • Seek partners who can provide stable support</p>
                    `
                }
            }
        }
    }
};

// 当前语言
let currentLanguage = 'zh';

// 问卷数据 - 基于标准ECR-R量表优化
const questionnaire = {
    zh: {
        anxiety: [
            "我害怕会失去伴侣的爱。", // 1
            "我经常担心伴侣不想和我在一起。", // 2
            "我经常担心伴侣并不真正爱我。", // 3
            "我担心恋爱伴侣不会像我关心他们那样关心我。", // 4
            "我经常希望伴侣对我的感情能像我对他们的感情一样强烈。", // 5
            "我很担心我的恋爱关系。", // 6
            "当伴侣不在身边时，我担心他们可能会对别人感兴趣。", // 7
            "当我向恋爱伴侣表达感情时，我害怕他们对我没有同样的感觉。", // 8
            "我很少担心伴侣会离开我。", // 9 反向题
            "我的恋爱伴侣让我怀疑自己。", // 10
            "我不经常担心被抛弃。", // 11 反向题
            "我发现伴侣不想像我希望的那样亲近。", // 12
            "有时恋爱伴侣会无缘无故地改变对我的感情。", // 13
            "我想要非常亲近的愿望有时会吓跑别人。", // 14
            "我害怕一旦恋爱伴侣了解真正的我，就不会喜欢我了。", // 15
            "我没有从伴侣那里得到所需的关爱和支持，这让我很生气。", // 16
            "我担心自己比不上别人。", // 17
            "我的伴侣似乎只有在我生气时才注意到我。" // 18
        ],
        avoidance: [
            "我不愿意向伴侣展示我内心深处的感受。", // 19
            "我很乐意与伴侣分享我的私人想法和感受。", // 20 反向题
            "我发现很难让自己依赖恋爱伴侣。", // 21
            "我很乐意与恋爱伴侣亲近。", // 22 反向题
            "我不愿意向恋爱伴侣敞开心扉。", // 23
            "我不愿意与恋爱伴侣太过亲近。", // 24
            "当恋爱伴侣想要非常亲近时，我会感到不舒服。", // 25
            "我发现与伴侣亲近相对容易。", // 26 反向题
            "对我来说与伴侣亲近并不困难。", // 27 反向题
            "我通常会与伴侣讨论我的问题和担忧。", // 28 反向题
            "在需要时向恋爱伴侣求助是有帮助的。", // 29 反向题
            "我几乎告诉伴侣所有事情。", // 30 反向题
            "我会与伴侣商量事情。", // 31 反向题
            "当伴侣与我太过亲近时我会紧张。", // 32
            "我很乐意依赖恋爱伴侣。", // 33 反向题
            "我发现依赖恋爱伴侣很容易。", // 34 反向题
            "对我来说与伴侣表达爱意很容易。", // 35 反向题
            "我的伴侣真正理解我和我的需求。" // 36 反向题
        ]
    },
    en: {
        anxiety: [
            "I'm afraid that I will lose my partner's love.", // 1
            "I often worry that my partner will not want to stay with me.", // 2
            "I often worry that my partner doesn't really love me.", // 3
            "I worry that romantic partners won't care about me as much as I care about them.", // 4
            "I often wish that my partner's feelings for me were as strong as my feelings for him or her.", // 5
            "I worry a lot about my relationships.", // 6
            "When my partner is out of sight, I worry that he or she might become interested in someone else.", // 7
            "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.", // 8
            "I rarely worry about my partner leaving me.", // 9 reverse
            "My romantic partner makes me doubt myself.", // 10
            "I do not often worry about being abandoned.", // 11 reverse
            "I find that my partner(s) don't want to get as close as I would like.", // 12
            "Sometimes romantic partners change their feelings about me for no apparent reason.", // 13
            "My desire to be very close sometimes scares people away.", // 14
            "I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am.", // 15
            "It makes me mad that I don't get the affection and support I need from my partner.", // 16
            "I worry that I won't measure up to other people.", // 17
            "My partner only seems to notice me when I'm angry." // 18
        ],
        avoidance: [
            "I prefer not to show a partner how I feel deep down.", // 19
            "I feel comfortable sharing my private thoughts and feelings with my partner.", // 20 reverse
            "I find it difficult to allow myself to depend on romantic partners.", // 21
            "I am very comfortable being close to romantic partners.", // 22 reverse
            "I don't feel comfortable opening up to romantic partners.", // 23
            "I prefer not to be too close to romantic partners.", // 24
            "I get uncomfortable when a romantic partner wants to be very close.", // 25
            "I find it relatively easy to get close to my partner.", // 26 reverse
            "It's not difficult for me to get close to my partner.", // 27 reverse
            "I usually discuss my problems and concerns with my partner.", // 28 reverse
            "It helps to turn to my romantic partner in times of need.", // 29 reverse
            "I tell my partner just about everything.", // 30 reverse
            "I talk things over with my partner.", // 31 reverse
            "I am nervous when partners get too close to me.", // 32
            "I feel comfortable depending on romantic partners.", // 33 reverse
            "I find it easy to depend on romantic partners.", // 34 reverse
            "It's easy for me to be affectionate with my partner.", // 35 reverse
            "My partner really understands me and my needs." // 36 reverse
        ]
    },
    reverseItems: {
        anxiety: [8, 10], // 对应索引 8 和 10 (A9, A11)
        avoidance: [1, 3, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17] // 对应索引 1, 3, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17 (B20, B22, B26, B27, B28, B29, B30, B31, B33, B34, B35, B36)
    }
};

// 语言切换函数
function setLanguage(lang) {
    currentLanguage = lang;
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // 更新页面文本
    updatePageText();
    
    // 如果在问卷页面，重新显示当前页
    if (document.getElementById('questionnaire-page').classList.contains('active')) {
        displayCurrentPage();
    }
}

// 更新页面文本
function updatePageText() {
    const currentLang = translations[currentLanguage];
    
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (currentLang[key]) {
            element.textContent = currentLang[key];
        }
    });
}

// 全局变量
let currentPage = 0;
let responses = {};
let currentQuestions = [];
let participantName = '';

// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyD80klA2NrRTh1EjEyAIqhvi9ONhlsMGus",
    authDomain: "mingming-yilian.firebaseapp.com",
    projectId: "mingming-yilian",
    storageBucket: "mingming-yilian.firebasestorage.app",
    messagingSenderId: "570864629829",
    appId: "1:570864629829:web:35445b16a505bc69588b2c",
    measurementId: "G-EHCF8JV14R"
  };

// 初始化 Firebase
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// 验证姓名输入并启用按钮
function validateNameInput() {
    const nameInput = document.getElementById('participant-name');
    const startBtn = document.getElementById('start-test-btn');
    
    if (nameInput && startBtn) {
        if (nameInput.value.trim().length >= 2) {
            startBtn.disabled = false;
            startBtn.style.opacity = '1';
            startBtn.style.cursor = 'pointer';
        } else {
            startBtn.disabled = true;
            startBtn.style.opacity = '0.6';
            startBtn.style.cursor = 'not-allowed';
        }
    }
}

// 初始化问卷
function initializeQuestionnaire() {
    // 混合焦虑和回避题目
    currentQuestions = [];
    
    const currentQuestionnaire = questionnaire[currentLanguage];
    
    // 创建包含题目、类型和原始索引的对象数组
    for (let i = 0; i < 18; i++) {
        currentQuestions.push({
            text: currentQuestionnaire.anxiety[i],
            type: 'anxiety',
            originalIndex: i,
            id: `A${i + 1}`
        });
        currentQuestions.push({
            text: currentQuestionnaire.avoidance[i],
            type: 'avoidance', 
            originalIndex: i,
            id: `B${i + 1}`
        });
    }
    
    // 改进的随机化算法 - 确保维度混合且避免聚集
    shuffleWithBalance(currentQuestions);
}

// 改进的洗牌函数，确保不同维度问题的均匀分布
function shuffleWithBalance(array) {
    // 分离焦虑和回避问题
    const anxietyQuestions = array.filter(q => q.type === 'anxiety');
    const avoidanceQuestions = array.filter(q => q.type === 'avoidance');
    
    // 分别打乱两个维度的问题
    shuffleArray(anxietyQuestions);
    shuffleArray(avoidanceQuestions);
    
    // 重新组合，确保维度混合
    currentQuestions = [];
    for (let i = 0; i < 18; i++) {
        // 交替添加两个维度的问题，但引入一些随机性
        if (Math.random() < 0.5) {
            currentQuestions.push(anxietyQuestions[i]);
            currentQuestions.push(avoidanceQuestions[i]);
        } else {
            currentQuestions.push(avoidanceQuestions[i]);
            currentQuestions.push(anxietyQuestions[i]);
        }
    }
}

// 数组洗牌函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 开始测试
function startTest() {
    const nameInput = document.getElementById('participant-name');
    participantName = nameInput ? nameInput.value.trim() : '';
    
    if (participantName.length < 2) {
        showNotification(
            currentLanguage === 'zh' ? '请输入您的姓名（至少2个字符）' : 'Please enter your name (at least 2 characters)',
            'warning'
        );
        return;
    }
    
    document.getElementById('welcome-page').classList.remove('active');
    document.getElementById('questionnaire-page').classList.add('active');
    
    initializeQuestionnaire();
    currentPage = 0;
    responses = {};
    
    displayCurrentPage();
}

// 显示当前页面的问题
function displayCurrentPage() {
    const startIndex = currentPage * 6;
    const endIndex = Math.min(startIndex + 6, currentQuestions.length);
    const pageQuestions = currentQuestions.slice(startIndex, endIndex);
    
    let html = '';
    
    pageQuestions.forEach((question, index) => {
        const questionNumber = startIndex + index + 1;
        const isReverse = (question.type === 'anxiety' && questionnaire.reverseItems.anxiety.includes(question.originalIndex)) ||
                         (question.type === 'avoidance' && questionnaire.reverseItems.avoidance.includes(question.originalIndex));
        
        html += `
            <div class="question-group">
                <div class="question-text">
                    <span class="question-number">${questionNumber}/36</span>
                    ${question.text}
                    ${isReverse ? '<span class="reverse-indicator" title="反向计分题目">⟲</span>' : ''}
                </div>
                <div class="options-container">
        `;
        
        for (let i = 0; i < 7; i++) {
            const isSelected = responses[question.id] === (i + 1);
            const currentOptionLabels = translations[currentLanguage].optionLabels;
            html += `
                <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption('${question.id}', ${i + 1})">
                    <input type="radio" name="${question.id}" value="${i + 1}" ${isSelected ? 'checked' : ''}>
                    <span class="option-number">${i + 1}</span>
                    <label class="option-label">${currentOptionLabels[i]}</label>
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
    });
    
    document.getElementById('question-section').innerHTML = html;
    updateProgressBar();
    updateNavigationButtons();
}

// 选择选项
function selectOption(questionId, value) {
    responses[questionId] = value;
    
    // 更新UI
    const options = document.querySelectorAll(`input[name="${questionId}"]`);
    options.forEach((option, index) => {
        const optionItem = option.closest('.option-item');
        if (index + 1 === value) {
            optionItem.classList.add('selected');
            option.checked = true;
        } else {
            optionItem.classList.remove('selected');
            option.checked = false;
        }
    });
    
    updateNavigationButtons();
}

// 更新进度条
function updateProgressBar() {
    const totalQuestions = currentQuestions.length;
    const answeredQuestions = Object.keys(responses).length;
    const currentQuestionStart = currentPage * 6 + 1;
    const currentQuestionEnd = Math.min((currentPage + 1) * 6, totalQuestions);
    
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    
    document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    document.getElementById('progress-text').textContent = `题目 ${currentQuestionStart}-${currentQuestionEnd} / ${totalQuestions} (已完成 ${answeredQuestions})`;
}

// 更新导航按钮
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // 上一页按钮
    prevBtn.disabled = currentPage === 0;
    
    // 下一页按钮
    const startIndex = currentPage * 6;
    const endIndex = Math.min(startIndex + 6, currentQuestions.length);
    const pageQuestions = currentQuestions.slice(startIndex, endIndex);
    
    const allAnswered = pageQuestions.every(q => responses[q.id] !== undefined);
    nextBtn.disabled = !allAnswered;
    
    // 检查是否是最后一页
    const totalPages = Math.ceil(currentQuestions.length / 6);
    if (currentPage === totalPages - 1) {
        nextBtn.textContent = translations[currentLanguage]['view-results'];
        nextBtn.onclick = calculateResults;
    } else {
        nextBtn.textContent = translations[currentLanguage]['next-btn'];
        nextBtn.onclick = nextPage;
    }
}

// 下一页
function nextPage() {
    const totalPages = Math.ceil(currentQuestions.length / 6);
    if (currentPage < totalPages - 1) {
        currentPage++;
        displayCurrentPage();
    }
}

// 上一页
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayCurrentPage();
    }
}

// 计算结果
function calculateResults() {
    // 分离焦虑和回避分数
    let anxietyScores = [];
    let avoidanceScores = [];
    
    currentQuestions.forEach(question => {
        const response = responses[question.id];
        if (response !== undefined) {
            let score = response;
            
            // 处理反向题
            if (question.type === 'anxiety' && questionnaire.reverseItems.anxiety.includes(question.originalIndex)) {
                score = 8 - response;
            } else if (question.type === 'avoidance' && questionnaire.reverseItems.avoidance.includes(question.originalIndex)) {
                score = 8 - response;
            }
            
            if (question.type === 'anxiety') {
                anxietyScores.push(score);
            } else {
                avoidanceScores.push(score);
            }
        }
    });
    
    // 计算平均分
    const anxietyAverage = anxietyScores.reduce((a, b) => a + b, 0) / anxietyScores.length;
    const avoidanceAverage = avoidanceScores.reduce((a, b) => a + b, 0) / avoidanceScores.length;
    
    // 确定依恋风格
    const attachmentStyle = determineAttachmentStyle(anxietyAverage, avoidanceAverage);
    
    // 显示结果
    showResults(anxietyAverage, avoidanceAverage, attachmentStyle);
}

// 确定依恋风格 - 使用ECR-R标准阈值
function determineAttachmentStyle(anxiety, avoidance) {
    const styles = translations[currentLanguage].attachmentStyles;
    
    const threshold = 4;
    
    if (anxiety < threshold && avoidance < threshold) {
        return styles.secure;
    } else if (anxiety >= threshold && avoidance < threshold) {
        return styles.anxious;
    } else if (anxiety < threshold && avoidance >= threshold) {
        return styles.avoidant;
    } else {
        return styles.disorganized;
    }
}

// 显示结果
function showResults(anxiety, avoidance, attachmentStyle) {
    document.getElementById('questionnaire-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');
    
    // 设置依恋类型
    document.getElementById('attachment-type').textContent = attachmentStyle.type;
    
    // 设置分数和进度条
    const anxietyPercentage = ((anxiety - 1) / 6) * 100;
    const avoidancePercentage = ((avoidance - 1) / 6) * 100;
    
    setTimeout(() => {
        document.getElementById('anxiety-score-bar').style.width = `${anxietyPercentage}%`;
        document.getElementById('avoidance-score-bar').style.width = `${avoidancePercentage}%`;
    }, 500);
    
    document.getElementById('anxiety-score-value').textContent = anxiety.toFixed(2);
    document.getElementById('avoidance-score-value').textContent = avoidance.toFixed(2);
    
    // 设置结果描述
    document.getElementById('result-description').innerHTML = `
        <h3>${attachmentStyle.description.title}</h3>
        ${attachmentStyle.description.content}
    `;
    
    // 准备保存到云端的数据
    const resultData = {
        timestamp: new Date().toISOString(),
        participant_name: participantName,
        anxiety_score: parseFloat(anxiety.toFixed(2)),
        avoidance_score: parseFloat(avoidance.toFixed(2)),
        attachment_style: attachmentStyle.type,
        style_description: attachmentStyle.description.title,
        language: currentLanguage,
        responses: responses,
        created_at: new Date().toLocaleString('zh-CN', {
            timeZone: 'Asia/Shanghai'
        })
    };
    
    // 保存测评数据到云端
    saveTestData(resultData).then(success => {
        if (success) {
            showNotification(
                currentLanguage === 'zh' ? '测评结果已保存到云端' : 'Test results saved to cloud',
                'success'
            );
        } else {
            showNotification(
                currentLanguage === 'zh' ? '云端保存失败，数据已保存到本地' : 'Cloud save failed, data saved locally',
                'warning'
            );
        }
    });
}

// 分享结果
function shareResult() {
    const attachmentType = document.getElementById('attachment-type').textContent;
    const anxietyScore = document.getElementById('anxiety-score-value').textContent;
    const avoidanceScore = document.getElementById('avoidance-score-value').textContent;
    
    let shareText, title, copyMessage, errorMessage;
    if (currentLanguage === 'zh') {
        shareText = `我刚完成了mingming依恋关系测评！\n我的依恋风格是：${attachmentType}\n依恋焦虑：${anxietyScore}\n依恋回避：${avoidanceScore}\n\n来测测你的依恋风格吧！`;
        title = 'mingming 依恋关系测评结果';
        copyMessage = '结果已复制到剪贴板！';
        errorMessage = '分享功能暂不可用，请手动复制结果。';
    } else {
        shareText = `I just completed the mingming Attachment Style Assessment!\nMy attachment style is: ${attachmentType}\nAttachment Anxiety: ${anxietyScore}\nAttachment Avoidance: ${avoidanceScore}\n\nTake the test to discover your attachment style!`;
        title = 'mingming Attachment Style Assessment Results';
        copyMessage = 'Results copied to clipboard!';
        errorMessage = 'Share feature not available, please copy the results manually.';
    }
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: shareText,
            url: window.location.href
        });
    } else {
        // 降级处理：复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            alert(copyMessage);
        }).catch(() => {
            alert(errorMessage);
        });
    }
}

// 重新测试
function retakeTest() {
    // 重置所有状态
    currentPage = 0;
    responses = {};
    currentQuestions = [];
    
    // 显示欢迎页面
    document.getElementById('result-page').classList.remove('active');
    document.getElementById('welcome-page').classList.add('active');
}

// 云存储功能
async function saveTestData(data) {
    // 总是先保存到本地作为备份
    saveToLocalStorage(data);
    
    // 尝试保存到 Firebase
    try {
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
            const db = firebase.firestore();
            await db.collection('attachment_test_results').add(data);
            console.log('数据成功保存到 Firebase');
            return true;
        } else {
            console.warn('Firebase 未初始化，使用本地存储');
            return false;
        }
    } catch (error) {
        console.error('Firebase 保存失败:', error);
        return false;
    }
}

// 本地存储作为备份
function saveToLocalStorage(data) {
    try {
        const existingData = JSON.parse(localStorage.getItem('attachmentTestResults') || '[]');
        
        existingData.push({
            ...data,
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            local_timestamp: new Date().toISOString(),
            saved_at: new Date().toLocaleString('zh-CN')
        });
        
        localStorage.setItem('attachmentTestResults', JSON.stringify(existingData));
        console.log('数据已保存到本地存储');
        return true;
    } catch (error) {
        console.error('本地存储失败:', error);
        return false;
    }
}

// 显示通知提示
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">
            ${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}
        </span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 3秒后自动消失
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// 显示版权信息
function showCopyright() {
    const copyrightText = currentLanguage === 'zh' 
        ? '本测评基于 Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000) 发表的ECR-R量表。\n参考文献：An item response theory analysis of self-report measures of adult attachment. Journal of Personality and Social Psychology, 78(2), 350-365.'
        : 'This assessment is based on the ECR-R scale published by Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000).\nReference: An item response theory analysis of self-report measures of adult attachment. Journal of Personality and Social Psychology, 78(2), 350-365.';
    
    alert(copyrightText);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保欢迎页面是活动的
    document.getElementById('welcome-page').classList.add('active');
    
    // 初始化语言设置
    updatePageText();
    
    // 添加版权信息链接
    const footer = document.createElement('div');
    footer.className = 'copyright-footer';
    footer.innerHTML = `<a href="#" onclick="showCopyright()" class="copyright-link">科学依据 / Scientific Basis</a>`;
    document.querySelector('.container').appendChild(footer);
});

// 问卷数据
const questionnaire = {
    anxiety: [
        "我经常担心我的伴侣并不像我爱他们那样爱我。",
        "我害怕一旦别人真正了解我，就不会喜欢我了。",
        "我担心被独自留下。",
        "我经常担心我的伴侣会离开我。",
        "我经常希望我的伴侣对我的感情能像我对他们的感情一样强烈。",
        "我担心我不能像其他人那样吸引浪漫伴侣。",
        "当我的伴侣不在身边时，我担心他们可能会对别人产生兴趣。",
        "当我表现出我的感情时，我害怕伴侣不会有同样的感受。",
        "我很少担心我的伴侣会离开我。", // 反向题
        "我的浪漫伴侣让我怀疑自己。",
        "我不经常担心被抛弃。", // 反向题
        "我发现别人不愿意像我希望的那样亲近。",
        "有时我觉得我强迫伴侣表现出更多的感情和承诺。",
        "我担心当我需要某人时，没有人会在那里。",
        "当伴侣不赞成我做的某件事时，我感觉很糟糕。",
        "我害怕我的伴侣对我的感情没有我对他们的感情那么深。",
        "当我的伴侣不在时，我会想很多关于我们关系的事情。",
        "我的渴望被亲近有时会把人吓跑。"
    ],
    avoidance: [
        "我更愿意不向浪漫伴侣表达我的感受。",
        "我发现很难依赖浪漫伴侣。",
        "我不喜欢向浪漫伴侣敞开心扉。",
        "我更愿意不表现出我对浪漫伴侣的感受。",
        "我发现很难让自己依赖浪漫伴侣。",
        "我不经常担心被抛弃。",
        "当浪漫伴侣想要与我非常亲近时，我会感到有些不舒服。",
        "我告诉我的伴侣几乎所有事情。", // 反向题
        "我发现向浪漫伴侣敞开心扉相对容易。", // 反向题
        "当我需要某人时，我经常担心没有人会在那里。",
        "我想要与浪漫伴侣非常亲近，但我发现自己会退缩。",
        "我不介意向浪漫伴侣寻求安慰、建议或帮助。", // 反向题
        "当浪漫伴侣太依赖我时，我会感到不舒服。",
        "我向我的伴侣表达我的需求和感受。", // 反向题
        "我发现很容易依赖浪漫伴侣。", // 反向题
        "我发现很难接受来自浪漫伴侣的帮助。",
        "我的伴侣只在我想要的时候才真正了解我。",
        "我告诉我的伴侣我对他们的需要。" // 反向题
    ],
    reverseItems: {
        anxiety: [8, 10], // 对应索引 8 和 10 (A9, A11)
        avoidance: [7, 8, 11, 13, 14, 17] // 对应索引 7, 8, 11, 13, 14, 17 (B8, B9, B12, B14, B15, B18)
    }
};

// 选项标签
const optionLabels = [
    "强烈不同意",
    "不同意", 
    "有些不同意",
    "既不同意也不反对",
    "有些同意",
    "同意",
    "强烈同意"
];

// 全局变量
let currentPage = 0;
let responses = {};
let currentQuestions = [];

// 初始化问卷
function initializeQuestionnaire() {
    // 混合焦虑和回避题目
    currentQuestions = [];
    
    // 创建包含题目、类型和原始索引的对象数组
    for (let i = 0; i < 18; i++) {
        currentQuestions.push({
            text: questionnaire.anxiety[i],
            type: 'anxiety',
            originalIndex: i,
            id: `A${i + 1}`
        });
        currentQuestions.push({
            text: questionnaire.avoidance[i],
            type: 'avoidance', 
            originalIndex: i,
            id: `B${i + 1}`
        });
    }
    
    // 轻度随机化 - 保持一定的逻辑顺序
    shuffleArray(currentQuestions);
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
        html += `
            <div class="question-group">
                <div class="question-text">
                    ${questionNumber}. ${question.text}
                </div>
                <div class="options-container">
        `;
        
        for (let i = 0; i < 7; i++) {
            const isSelected = responses[question.id] === (i + 1);
            html += `
                <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectOption('${question.id}', ${i + 1})">
                    <input type="radio" name="${question.id}" value="${i + 1}" ${isSelected ? 'checked' : ''}>
                    <label class="option-label">${optionLabels[i]}</label>
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
    const totalPages = Math.ceil(currentQuestions.length / 6);
    const progress = ((currentPage + 1) / totalPages) * 100;
    
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${currentPage + 1} / ${totalPages}`;
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
        nextBtn.textContent = '查看结果';
        nextBtn.onclick = calculateResults;
    } else {
        nextBtn.textContent = '下一页';
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

// 确定依恋风格
function determineAttachmentStyle(anxiety, avoidance) {
    if (anxiety < 4.0 && avoidance < 4.0) {
        return {
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
        };
    } else if (anxiety >= 4.0 && avoidance < 4.0) {
        return {
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
        };
    } else if (anxiety < 4.0 && avoidance >= 4.0) {
        return {
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
        };
    } else {
        return {
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
        };
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
}

// 分享结果
function shareResult() {
    const attachmentType = document.getElementById('attachment-type').textContent;
    const anxietyScore = document.getElementById('anxiety-score-value').textContent;
    const avoidanceScore = document.getElementById('avoidance-score-value').textContent;
    
    const shareText = `我刚完成了mingming依恋关系测评！\n我的依恋风格是：${attachmentType}\n依恋焦虑：${anxietyScore}\n依恋回避：${avoidanceScore}\n\n来测测你的依恋风格吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: 'mingming 依恋关系测评结果',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 降级处理：复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            alert('结果已复制到剪贴板！');
        }).catch(() => {
            alert('分享功能暂不可用，请手动复制结果。');
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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保欢迎页面是活动的
    document.getElementById('welcome-page').classList.add('active');
});

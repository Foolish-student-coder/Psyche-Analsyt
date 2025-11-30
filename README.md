# 🧠 Psyche Analyst Website

> *A psychology-inspired digital sanctuary where mind, art, and data unite for emotional self-discovery and wellness.*

---

## 📋 Table of Contents

1. [About](#about)
2. [What is Psyche Analyst?](#what-is-psyche-analyst)
3. [Current Features](#current-features)
4. [Website Pages & Routes](#website-pages--routes)
5. [Project Structure](#project-structure)
6. [Technology Stack](#technology-stack)
7. [Quick Start Guide](#quick-start-guide)
8. [Screenshots & Visual Guide](#screenshots--visual-guide)
9. [Keyboard Shortcuts & Accessibility](#keyboard-shortcuts--accessibility)
10. [Troubleshooting](#troubleshooting)
11. [Future Implementations](#future-implementations)
12. [Development Guide](#development-guide)
13. [Privacy & Security](#privacy--security)
14. [Feedback & Analysis](#feedback--analysis)
15. [Design Philosophy](#design-philosophy)
16. [Resources & Credits](#resources--credits)
17. [Disclaimer](#disclaimer)

---

## 📖 About

**Psyche Analyst** is an interactive, psychology-inspired wellness platform designed to help users explore their emotions, express themselves through art, and gain meaningful insights into their psychological state.

### Mission
To create a supportive, accessible digital sanctuary where mental wellness and self-discovery are not luxuries, but essentials available to everyone.

### Vision
To build a bridge between psychology, technology, and art — transforming self-reflection into a journey of healing, creativity, and understanding.

---

## 🎯 What is Psyche Analyst?

A blend of:
- **Google Forms-style Surveys** 📜 — Anonymous emotion tracking
- **Calm App Aesthetics** 🎨 — Soft, calming, healing visuals
- **Data Analytics** 📊 — Visual representation of emotional patterns
- **Creative Expression Gallery** 🖼️ — Space for artistic submissions
- **Community Insights** 🌱 — See collective emotional patterns

### Core Purpose
Not a medical tool, but a **safe space** where users can:
- ✅ Share feelings anonymously
- ✅ Reflect on their psyche
- ✅ See collective emotional patterns
- ✅ Engage with psychology in a friendly, approachable format

---

## ✨ Current Features

### 1. **Survey & Emotion Tracking** 📜
- Quick 5-emotion selection (Happy, Neutral, Sad, Anxious, Angry)
- Worry/concern input field
- Satisfaction rating slider (1-10)
- Instant reflection messages based on mood
- Anonymous responses stored in browser localStorage

### 2. **Results Dashboard** 📈
- Visual representation of survey responses
- Emotional pattern insights
- Categorized results by emotion type
- Data visualization showing frequency of emotions
- Personal emotional analytics

### 3. **Creative Gallery** 🎨
- Upload artwork, drawings, or symbolic images
- JPG, PNG, PDF file support
- Secure file submission via Formspree/Cloudinary
- View community submissions
- Gallery showcasing collective emotional expressions

### 4. **Daily Wellness Content** 🌟
- Psychology tips for mental well-being
- Inspirational quotes
- Reflective insights
- Calming affirmations

### 5. **Contact & Feedback** 📞
- Contact form with emotion check-in
- File upload capability for sharing art/surveys
- Email notifications via Formspree
- Direct communication with creator

### 6. **FAQ Section** ❓
- Frequently asked questions
- Safety & privacy information
- How-to guides
- Tips for using the platform

### 7. **Responsive Design** 📱
- Mobile-friendly interface
- Tablet optimization
- Desktop-optimized layouts
- Accessibility compliance

---

## 📍 Website Pages & Routes

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `index.html` | Landing page, quick survey, benefits overview |
| **Survey** | `survey.html` | Full survey experience with emotion tracking |
| **Results** | `results.html` | View survey results & emotional analytics |
| **Happy Results** | `happy-result.html` | Detailed insights for "Happy" emotion |
| **Sad Results** | `sad-result.html` | Detailed insights for "Sad" emotion |
| **Angry Results** | `angry-result.html` | Detailed insights for "Angry" emotion |
| **Anxious Results** | `anxious-result.html` | Detailed insights for "Anxious" emotion |
| **Neutral Results** | `neutral-result.html` | Detailed insights for "Neutral" emotion |
| **Emotion Results** | `emotion-result.html` | General emotion analysis page |
| **Media Gallery** | `media-graphic.html` | Community art gallery & submissions |
| **Contact** | `contact.html` | Contact form with file upload |
| **FAQ** | `Faq.html` | Frequently asked questions |
| **Thank You** | `thank-you.html` | Confirmation after submission |

---

## 📁 Project Structure

```
Cursor Psyche Analystn Website/
│
├── index.html                    # Home page with quick survey
├── survey.html                   # Full survey page
├── results.html                  # Results dashboard
├── happy-result.html             # Happy emotion insights
├── sad-result.html               # Sad emotion insights
├── angry-result.html             # Angry emotion insights
├── anxious-result.html           # Anxious emotion insights
├── neutral-result.html           # Neutral emotion insights
├── emotion-result.html           # General emotion page
├── media-graphic.html            # Gallery & submissions
├── contact.html                  # Contact form
├── Faq.html                      # FAQ section
├── thank-you.html                # Thank you page
│
├── styles/
│   ├── styles.css                # Main stylesheet
│   ├── animated.css              # Animation effects
│   └── bootstrap-5.0.0-beta1.min.css
│
├── js/
│   ├── bootstrap-5.0.0-beta1.min.js
│   └── (custom scripts in HTML files)
│
├── images/
│   ├── android-chrome-192x192.png
│   ├── favicon_io/
│   │   ├── favicon-32x32.png
│   │   └── site.webmanifest
│   └── (other images)
│
├── assets/
│   ├── Header Image head.webp
│   ├── Feeling.webp
│   ├── SymbolismBenefits.webp
│   ├── Gallery.webp
│   ├── Emotion.webp
│   ├── Community.webp
│   └── (other assets)
│
└── README.md                     # This file
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup & structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (Vanilla)** | Interactivity, localStorage, event handling |
| **Bootstrap 5** | Responsive grid system |
| **Formspree** | Email form submissions |
| **localStorage API** | Client-side data persistence |
| **Cloudinary** (Planned) | Secure image upload & storage |
| **Firebase** (Planned) | Real-time database & authentication |

---

## 🚀 Quick Start Guide

### Step 1: Clone or Download
```bash
git clone https://github.com/yourusername/psyche-analyst.git
cd psyche-analyst
```

### Step 2: Open in Browser
```bash
# Simply open index.html in your browser
open index.html
# or
start index.html
```

### Step 3: Navigate the Website

**Main Navigation Flow:**
```
Home (index.html)
  ├── Take Quick Survey
  │   └── View Results (results.html)
  │       ├── Happy Details (happy-result.html)
  │       ├── Sad Details (sad-result.html)
  │       ├── Anxious Details (anxious-result.html)
  │       ├── Angry Details (angry-result.html)
  │       └── Neutral Details (neutral-result.html)
  │
  ├── Take Full Survey (survey.html)
  │   └── View Results
  │
  ├── View Gallery (media-graphic.html)
  │   └── Upload Art/Submissions
  │
  ├── Contact Us (contact.html)
  │   └── Submit Feedback
  │
  └── Learn More (Faq.html)
```

### Step 4: Interact with Features
- **Survey**: Select emotion → Describe worry → See instant reflection
- **Gallery**: Browse submissions → Upload your own art
- **Results**: View personal analytics → Understand emotional patterns
- **Contact**: Share thoughts → Provide feedback

---

## 🖼️ Screenshots & Visual Guide

### Homepage
```
[SCREENSHOT PLACEHOLDER: index.html main hero section]
- Logo and welcome message
- Quick survey form
- Inspirational quote
- Benefits grid (5 sections)
```

### Survey Page
```
[SCREENSHOT PLACEHOLDER: survey.html full form]
- Emotion dropdown
- Worry textarea
- Satisfaction slider
- Submit/Clear buttons
```

### Results Dashboard
```
[SCREENSHOT PLACEHOLDER: results.html analytics]
- Emotion distribution chart
- Pattern analysis
- Historical data
- Detailed insights by emotion
```

### Gallery
```
[SCREENSHOT PLACEHOLDER: media-graphic.html gallery grid]
- Community artwork submissions
- Upload new art
- Filter by emotion
- View details & comments
```

### Contact Form
```
[SCREENSHOT PLACEHOLDER: contact.html form]
- Name/Email input
- Message textarea
- File upload for art
- Emotion check-in
- Submit button
```

---

## ⌨️ Keyboard Shortcuts & Accessibility

### Navigation
| Key | Action |
|-----|--------|
| `Tab` | Move to next interactive element |
| `Shift + Tab` | Move to previous interactive element |
| `Enter` | Activate button or submit form |
| `Escape` | Close modals/dialogs |
| `Alt + H` | Go to Home |
| `Alt + S` | Go to Survey |
| `Alt + C` | Go to Contact |

### Accessibility Features
✅ **Screen Reader Support**
- Semantic HTML5 elements
- ARIA labels on forms
- `role="contentinfo"` on footer
- `aria-labelledby` on sections
- `aria-describedby` on form inputs

✅ **Keyboard Navigation**
- All buttons & links fully keyboard accessible
- Logical tab order
- Focus indicators on interactive elements
- Skip-to-main-content links

✅ **Visual Accessibility**
- High contrast text colors
- Readable font sizes (minimum 16px)
- Color-blind friendly palette
- Animated elements can be reduced with `prefers-reduced-motion`

✅ **Mobile Accessibility**
- Touch-friendly button sizes (48px minimum)
- Responsive viewport
- Readable on zoom up to 200%

### Screen Reader Instructions
1. Use `Ctrl + Alt + R` (NVDA) or `VO + U` (VoiceOver)
2. Navigate by heading: `H` key
3. Read full page: `Insert + Down Arrow`
4. Jump to form: `F` key

---

## 🐛 Troubleshooting

### Issue 1: Survey Data Not Saving
**Problem**: Data disappears after page reload
```
✓ Solution: Check if localStorage is enabled
  - Open DevTools (F12)
  - Go to Application > Local Storage
  - Verify 'surveys' key exists
  - Check browser privacy settings
```

### Issue 2: File Upload Not Working
**Problem**: Upload button doesn't respond
```
✓ Solution: 
  - Verify Formspree account is active
  - Check file size (max 5MB)
  - Allowed types: JPG, PNG, PDF only
  - Check browser console for errors (F12)
```

### Issue 3: Styling Issues
**Problem**: CSS not loading, page looks broken
```
✓ Solution:
  - Hard refresh: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
  - Clear browser cache
  - Check that all CSS files are in /styles folder
  - Verify Bootstrap CDN link is active
```

### Issue 4: Reflection Button Not Working
**Problem**: "Analyze My Mood" button doesn't show message
```
✓ Solution:
  - Select an emotion from dropdown first
  - Check browser console for JavaScript errors
  - Try in different browser
  - Clear localStorage: console.clear()
```

### Issue 5: Results Page Shows No Data
**Problem**: Results page is empty
```
✓ Solution:
  - Complete a survey on index.html or survey.html first
  - Check localStorage has 'surveys' key
  - In console: JSON.parse(localStorage.getItem('surveys'))
  - Verify at least one emotion was selected
```

### Debug Mode
```javascript
// Open browser console (F12) and run:
console.log('All surveys:', JSON.parse(localStorage.getItem('surveys')));
console.log('Page URL:', window.location.href);
console.log('Browser:', navigator.userAgent);
```

### Contact Support
- 📧 Email: cjayag80@gmail.com
- 📝 Fill contact form: contact.html
- 💬 Describe issue in detail
- 📎 Include screenshot if possible

---

## 🔮 Future Implementations

### Phase 1: Enhanced Analytics (Q1 2025)

#### 🤖 AI Mood Predictor
- **Machine Learning Model**: Train on historical survey data
- **Predictive Analytics**: Forecast user's mood based on past patterns
- **Recommendation Engine**: Suggest activities based on mood trends
- **Implementation**: TensorFlow.js or ML5.js
- **Feature**: "What might your mood be tomorrow?"
- **Data Used**: Historical emotions, time of day, patterns

```javascript
// Example future implementation
const moodPredictor = new AIPredictor(historicalData);
const predictedMood = moodPredictor.predict('tomorrow');
// Output: { mood: 'anxious', confidence: 0.85, recommendation: 'Try meditation' }
```

#### 📊 Advanced Feedback System
- **User Feedback Form**: Rate platform experience
- **Feature Requests**: Suggest new features
- **Bug Reports**: Report issues with screenshots
- **Sentiment Analysis**: Analyze feedback sentiment
- **Analytics Dashboard**: View aggregate feedback

#### 🎯 Analysis Function
- **Emotional Pattern Recognition**: Identify recurring patterns
- **Mood Cycle Detection**: Discover cyclical emotional patterns
- **Trigger Analysis**: Identify what emotions trigger worry
- **Progress Tracking**: Show improvement over time
- **Comparative Analytics**: Compare with community averages

```javascript
// Example output
{
  moodCycle: { pattern: 'Anxious on Mondays', confidence: 0.78 },
  commonTriggers: ['Work stress', 'Sleep deprivation', 'Social events'],
  emotionalProgression: 'Trending toward more neutral/happy',
  personalInsights: ['You recover faster from sadness', 'Anxiety peaks mid-week']
}
```

---

### Phase 2: Blockchain Integration (Q2 2025)

#### 🔐 Immutable Survey Records
- **Blockchain**: Store survey hashes for data integrity
- **Proof of Authenticity**: Verify survey genuineness
- **Timestamp Authority**: Cryptographic timestamps
- **Implementation**: Ethereum or Solana smart contracts
- **Benefit**: Users verify their own data history

#### 💰 Wellness Tokens (Optional)
- **Gamification**: Earn tokens for completing surveys
- **Reward System**: Redeem for features or donations
- **Smart Contracts**: Automatic token distribution
- **Transparent Ledger**: See all transactions

#### 🌐 Decentralized Gallery
- **IPFS Storage**: Store art on decentralized network
- **NFT Submissions**: Artists can mint artwork as NFTs
- **Smart Contracts**: Enforce usage rights
- **Censorship Resistant**: No central authority deletion

```solidity
// Example smart contract
contract PsycheAnalystRecord {
  mapping(address => bytes32[]) userRecords;
  
  function recordSurvey(bytes32 hash) public {
    userRecords[msg.sender].push(hash);
  }
  
  function verifySurvey(address user, bytes32 hash) public view returns (bool) {
    return contains(userRecords[user], hash);
  }
}
```

---

### Phase 3: AI Advanced Features (Q3 2025)

#### 🧠 AI Therapist Assistant
- **Conversational AI**: Chat-based emotional support
- **GPT Integration**: OpenAI/Anthropic Claude API
- **24/7 Support**: Always available assistant
- **Privacy**: On-device processing option
- **Not Medical**: Clearly marked as supportive tool

#### 🎨 AI Art Generation
- **Visual Mood Representation**: Generate art from mood/description
- **DALL-E Integration**: Create visual representations
- **Style Options**: Choose artistic styles
- **Gallery Export**: Save and share AI-generated art

#### 📝 Smart Reflection Generator
- **Context-Aware Messages**: More personalized reflections
- **Psychological Frameworks**: Use actual psychology theories
- **CBT Integration**: Cognitive behavioral therapy insights
- **Journaling Assistant**: AI-powered journal prompts

```javascript
// Example AI reflection
{
  emotion: 'anxious',
  aiReflection: 'Your anxiety may be linked to anticipation. Try grounding techniques.',
  cbthInsight: 'Consider challenging anxious thoughts with evidence.',
  prompts: [
    'What evidence contradicts your worry?',
    'What would you tell a friend in this situation?'
  ]
}
```

---

### Phase 4: Community & Social (Q4 2025)

#### 👥 User Profiles
- **Personal Dashboard**: View all submissions & analytics
- **Privacy Settings**: Control visibility
- **Preferences**: Customize experience
- **Achievements**: Badges for milestones

#### 💬 Peer Support Groups
- **Moderated Communities**: Groups by emotion/topic
- **Supportive Discussions**: Share experiences
- **Resources**: Curated mental health resources
- **Mentorship**: Connect with experienced users

#### 🌍 Global Emotion Map
- **Real-Time Visualization**: See global emotional state
- **Regional Insights**: Emotions by location
- **Trend Analysis**: What emotions are trending?
- **Cultural Patterns**: Emotional differences by culture

#### 📱 Mobile App
- **React Native**: Cross-platform app
- **Offline Support**: Work without internet
- **Push Notifications**: Mood check-in reminders
- **Native Features**: Camera for art submission

---

### Phase 5: Professional Tools (2026)

#### 👨‍⚕️ Researcher Dashboard
- **Anonymized Data Export**: For psychology research
- **Statistical Analysis**: Pre-computed correlations
- **Filtering Options**: Custom research queries
- **Ethics Compliance**: IRB-approved access

#### 🎓 Educational Module
- **Psychology Lessons**: Learn psychology concepts
- **Video Tutorials**: Guided meditations & exercises
- **Certification**: Track learning progress
- **Integration with Universities**: Academic partnerships

#### 🏥 Healthcare Integration
- **Medical Referral**: Connect with therapists
- **EHR Integration**: Share data with doctors (with consent)
- **Appointment Scheduling**: Book therapy sessions
- **Medical Consent**: HIPAA-compliant data sharing

---

## 📋 Development Guide

### For Contributors

#### Setting Up Development Environment
```bash
# 1. Clone repository
git clone https://github.com/yourusername/psyche-analyst.git

# 2. Navigate to project
cd psyche-analyst

# 3. Install dependencies (if using Node.js)
npm install

# 4. Start local server
npm start
# or
python -m http.server 8000
```

#### Code Organization
```
src/
├── components/     # Reusable components
├── pages/          # Individual page logic
├── styles/         # CSS modules
├── js/             # JavaScript utilities
└── assets/         # Images & media
```

#### HTML Standards
```html
<!-- Use semantic HTML5 -->
<main>
  <article>
    <section id="unique-id">
      <h2>Section Title</h2>
    </section>
  </article>
</main>

<!-- Include ARIA labels -->
<button aria-label="Submit form">Send</button>
```

#### CSS Guidelines
```css
/* Use CSS custom properties */
:root {
  --primary-color: #6366f1;
  --text-color: #1f2937;
}

/* Mobile-first responsive design */
@media (min-width: 768px) {
  .container { max-width: 1200px; }
}
```

#### JavaScript Best Practices
```javascript
// Use const/let, avoid var
const analyzeEmotions = () => {
  // Arrow functions
};

// Use async/await for async operations
async function fetchUserData() {
  try {
    const data = await fetch('/api/user');
    return data.json();
  } catch (err) {
    console.error('Error:', err);
  }
}
```

#### Git Workflow
```bash
# Create feature branch
git checkout -b feature/ai-predictor

# Commit with descriptive messages
git commit -m "feat: add mood prediction using ML5.js"

# Push to remote
git push origin feature/ai-predictor

# Create pull request on GitHub
```

#### Testing Checklist
- [ ] All links functional
- [ ] Forms submit correctly
- [ ] Data persists in localStorage
- [ ] Mobile responsive (320px-1920px)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No console errors
- [ ] CSS animations smooth
- [ ] Images optimized
- [ ] Page loads in < 3 seconds

#### Browser Compatibility
| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| IE 11 | ⚠️ Basic support only |

#### Performance Optimization
```javascript
// Lazy load images
<img src="image.webp" loading="lazy" alt="description">

// Minify CSS/JS
// Compress images to WebP format
// Use CDN for static assets
// Implement caching headers
```

#### Adding New Features
1. Create feature branch
2. Update HTML structure
3. Add CSS styles
4. Implement JavaScript logic
5. Test accessibility
6. Update documentation
7. Create pull request

---

## 🔒 Privacy & Security

### Data Privacy
✅ **What We Store**
- Survey responses (localStorage only)
- Email address (contact form only)
- Uploaded art/files (Cloudinary/Firebase)
- Usage analytics (optional)

✅ **What We DON'T Store**
- Personal identification beyond email
- Medical history
- Location data
- Browsing behavior

### Security Measures
🔐 **HTTPS Encryption**: All data in transit encrypted
🔐 **No Passwords**: No account system = no password breaches
🔐 **Anonymous Surveys**: No tracking of individual users
🔐 **GDPR Compliant**: Right to data access/deletion
🔐 **Privacy Policy**: Full disclosure of data practices

### Data Deletion
```javascript
// Users can delete their data anytime:
// In browser console:
localStorage.removeItem('surveys');
// OR contact: cjayag80@gmail.com
```

---

## 💬 Feedback & Analysis

### Feedback Collection Methods

#### 1. **Contact Form Feedback**
- Built-in contact form on contact.html
- Users submit suggestions directly
- Emotion check-in included
- File attachments supported

#### 2. **Survey Data Analysis**
```javascript
// Analyze feedback patterns
const analyzeFeedback = () => {
  const surveys = JSON.parse(localStorage.getItem('surveys'));
  return {
    totalResponses: surveys.length,
    emotionDistribution: countEmotions(surveys),
    commonWorries: extractKeywords(surveys),
    averageSatisfaction: calculateAverage(surveys)
  };
};
```

#### 3. **Usage Analytics**
- Page visit tracking
- Feature usage statistics
- Error logging
- Performance monitoring

#### 4. **Community Insights**
- Aggregate emotional trends
- Popular art submissions
- Common themes in worries
- Seasonal patterns

### Feedback Analysis Function
```javascript
const feedbackAnalyzer = {
  // Sentiment analysis
  analyzeSentiment(text) {
    // Classify as positive/neutral/negative
  },
  
  // Keyword extraction
  extractKeywords(texts) {
    // Find common themes
  },
  
  // Trend detection
  detectTrends(historicalData) {
    // Identify patterns
  },
  
  // Recommendations
  generateRecommendations(data) {
    // Suggest improvements
  }
};
```

---

## 🎨 Design Philosophy

### Core Principles
1. **Simplicity**: Clean, intuitive interface
2. **Accessibility**: Everyone can use it
3. **Empathy**: Designed for emotional well-being
4. **Safety**: Non-judgmental, anonymous space
5. **Authenticity**: Real psychology, real art

### Visual Design
- **Color Palette**: Soft, calming colors (blues, purples, greens)
- **Typography**: Readable, friendly fonts
- **Spacing**: Generous whitespace
- **Animations**: Smooth, purposeful movements
- **Imagery**: Diverse, inclusive representations

### User Experience
- **Fast Loading**: Optimized performance
- **Responsive**: Works on all devices
- **Intuitive**: No learning curve
- **Accessible**: WCAG 2.1 AA compliant
- **Engaging**: Encourages interaction

---

## 📚 Resources & Credits

### Psychology Resources
- [American Psychological Association](https://www.apa.org/)
- [Psychology Today](https://www.psychologytoday.com/)
- [Mind Foundation](https://www.mind.org.uk/)
- [Mental Health America](https://www.mhanational.org/)

### Technology
- [MDN Web Docs](https://developer.mozilla.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

### Inspiration
- **Calm App**: UI/UX design inspiration
- **Headspace**: Mental wellness approach
- **Miro**: Collaborative brainstorming
- **Behance**: Design inspiration

### Credits
- **Creator**: Carl James M. Ayag
- **Font**: [Google Fonts](https://fonts.google.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/) / Emoji
- **Images**: [Unsplash](https://unsplash.com/), Custom artwork
- **Framework**: Bootstrap 5

---

## ⚖️ Disclaimer

### Important Notice

⚠️ **NOT A MEDICAL TOOL**
- Psyche Analyst is **NOT** a substitute for professional mental health treatment
- Do **NOT** use this instead of consulting a therapist or psychiatrist
- **NOT** intended to diagnose or treat mental health conditions
- **NOT** FDA-approved or regulated

### When to Seek Professional Help
If you're experiencing:
- Suicidal thoughts
- Self-harm urges
- Severe depression or anxiety
- Substance abuse
- Trauma or PTSD

**PLEASE CONTACT:**
- 🚨 **National Suicide Prevention Lifeline**: 988 (US)
- 🚨 **Crisis Text Line**: Text HOME to 741741
- 🚨 **International Association for Suicide Prevention**: https://www.iasp.info/resources/Crisis_Centres/
- 👨‍⚕️ **Your local mental health professional**

### Data Accuracy
- Information provided is for educational purposes only
- No guarantees about accuracy or completeness
- User assumes all responsibility for decisions made based on this platform
- No liability for outcomes or consequences

### Terms of Use
- Free to use, non-commercial platform
- Respect others' submissions and privacy
- No harassment or inappropriate content
- Follow community guidelines

---

## 📞 Contact & Support

- **Email**: cjayag80@gmail.com
- **Website**: https://yourwebsite.com
- **GitHub**: https://github.com/yourusername/psyche-analyst
- **Feedback Form**: contact.html
- **Report Bugs**: Create GitHub issue

---

## 📄 License

This project is licensed under the **MIT License** — see LICENSE file for details.

### You are free to:
✅ Use for personal projects
✅ Modify and adapt
✅ Share and distribute
✅ Use commercially

### You must:
📋 Include original license
📋 Credit the creator
📋 Disclose changes

---

## 🌟 Acknowledgments

Special thanks to:
- Everyone who shares their emotions
- Art contributors
- Beta testers & feedback providers
- Psychology community
- Open-source projects

---

**Made with ❤️ by Carl James M. Ayag**

*"Every emotion is a message — art, reflection, and data are simply ways to listen."*

---

**Last Updated**: November 15, 2025

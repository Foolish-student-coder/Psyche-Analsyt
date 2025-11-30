(function(){
  // Minimal JS port to avoid PyScript dependency
  var QUESTIONS = [
    { q: "When you wake up in the morning, you usually feel:", options:[
      "1) Excited about the day ahead","2) Content and peaceful","3) Overwhelmed by responsibilities","4) Irritated by minor inconveniences","5) Numb or indifferent"], scoring:{happy:[1,2], anxious:[3], angry:[4], neutral:[5]} },
    { q: "Your ideal weekend activity would be:", options:[
      "1) Spending time with loved ones","2) Trying something new","3) Staying in bed all day","4) Debating/arguing online","5) Nothing in particular"], scoring:{happy:[1,2], sad:[3], angry:[4], neutral:[5]} },
    { q: "When someone compliments you, you typically:", options:[
      "1) Feel happy and grateful","2) Brush it off modestly","3) Feel uncomfortable/suspicious","4) Get defensive","5) Don’t care either way"], scoring:{happy:[1,2], anxious:[3], angry:[4], neutral:[5]} },
    { q: "Your favorite type of music is:", options:[
      "1) Upbeat pop","2) Calming instrumental","3) Heavy rock","4) Aggressive rap","5) Silence/background"], scoring:{happy:[1], neutral:[2], angry:[3,4], sad:[5]} },
    { q: "When faced with a challenge, you usually:", options:[
      "1) Feel excited to overcome it","2) Approach it methodically","3) Feel overwhelmed","4) Blame others","5) Avoid it"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "How do you typically handle disappointment?", options:[
      "1) Bounce back quickly","2) Feel it but move on","3) Dwell on it","4) Lash out","5) Suppress it"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "Your social media feed makes you feel:", options:[
      "1) Inspired and connected","2) Nostalgic","3) Envious","4) Angry at injustice","5) Disconnected"], scoring:{happy:[1], sad:[2,3], angry:[4], neutral:[5]} },
    { q: "When you think about your future, you feel:", options:[
      "1) Excited and hopeful","2) Uncertain but okay","3) Hopeless","4) Angry about missed chances","5) Indifferent"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Your favorite season is:", options:[
      "1) Spring","2) Summer","3) Autumn","4) Winter","5) All feel the same"], scoring:{happy:[1,2], sad:[3,4], neutral:[5]} },
    { q: "When someone cancels plans with you, you feel:", options:[
      "1) Understanding","2) Disappointed but okay","3) Deeply hurt","4) Betrayed and angry","5) Relieved"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Before an important event, you feel:", options:[
      "1) Confident","2) Nervous but prepared","3) Panicked","4) Angry at the situation","5) Detached"], scoring:{happy:[1], anxious:[2,3], angry:[4], neutral:[5]} },
    { q: "Your relationship with uncertainty is:", options:[
      "1) Embrace it","2) Manage with planning","3) Terrifies me","4) Infuriates me","5) Ignore it"], scoring:{happy:[1], neutral:[2,5], anxious:[3], angry:[4]} },
    { q: "When you have a lot on your plate, you:", options:[
      "1) Feel energized","2) Organize it","3) Feel overwhelmed","4) Get angry","5) Procrastinate"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "Your sleep quality is usually:", options:[
      "1) Excellent","2) Good","3) Poor (worry)","4) Terrible (anger)","5) Very low"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "When meeting new people, you feel:", options:[
      "1) Excited","2) Confident and curious","3) Very anxious","4) Suspicious","5) Indifferent"], scoring:{happy:[1,2], anxious:[3], angry:[4], neutral:[5]} },
    { q: "When someone cuts you off in traffic, you:", options:[
      "1) Let it go","2) Annoyed then forget","3) Stay angry","4) Honk and yell","5) Don’t care"], scoring:{happy:[1], neutral:[2,5], angry:[3,4]} },
    { q: "Your response to unfairness is:", options:[
      "1) Fix it constructively","2) Accept and move forward","3) Feel hurt","4) Confront angrily","5) Ignore it"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "When criticized, you typically:", options:[
      "1) Learn from it","2) Slightly defensive","3) Worthless","4) Extremely angry","5) Don’t care"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Free time preference:", options:[
      "1) Creative hobbies","2) Relaxing activities","3) Isolate","4) Competitive games","5) Nothing specific"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "When things don’t go your way, you:", options:[
      "1) Adapt","2) Accept gracefully","3) Feel defeated","4) Blame others","5) Don’t react"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Your daily routine is:", options:[
      "1) Varied and exciting","2) Structured","3) Chaotic","4) Conflict-filled","5) Non-existent"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "Decision-making style:", options:[
      "1) Trust gut","2) Weigh pros/cons","3) Paralyzed by indecision","4) Angry at choosing","5) Don’t care"], scoring:{happy:[1], neutral:[2,5], anxious:[3], angry:[4]} },
    { q: "Social energy level:", options:[
      "1) High","2) Moderate","3) Low","4) Negative","5) Zero"], scoring:{happy:[1], neutral:[2], sad:[3,4,5], angry:[4]} },
    { q: "At day’s end you feel:", options:[
      "1) Grateful","2) Balanced","3) Regretful","4) Frustrated","5) Nothing"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Approach to problems:", options:[
      "1) Creative & optimistic","2) Practical","3) Avoid/withdraw","4) Aggressive","5) Indifferent"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Favorite weather:", options:[
      "1) Sunny","2) Cool","3) Stormy","4) Hot & intense","5) Don’t notice"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "When you receive bad news, you:", options:[
      "1) Silver lining","2) Process calmly","3) Devastated","4) Blame others","5) Shut down"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "Energy across the day:", options:[
      "1) High positive","2) Steady","3) Fluctuates","4) Aggressive","5) Low"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "When someone disagrees with you:", options:[
      "1) Opportunity to learn","2) Respectful discussion","3) Personally attacked","4) Defensive and angry","5) Don’t engage"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Your relationship with change:", options:[
      "1) Embrace it","2) Adapt gradually","3) Terrified","4) Furious","5) Resist completely"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "Typical response to stress:", options:[
      "1) Productive action","2) Manage systematically","3) Paralyzed","4) Lash out","5) Withdraw"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "When you look in the mirror, you see:", options:[
      "1) Potential","2) Capable","3) Failure","4) Someone to be angry at","5) Nothing noteworthy"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Favorite type of movie:", options:[
      "1) Feel-good","2) Thought-provoking","3) Tragedy","4) Action-packed","5) Don’t watch"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Free time preference 2:", options:[
      "1) Fun activities","2) Meaningful hobbies","3) Rest & recover","4) Compete","5) Do nothing"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Attitude toward helping others:", options:[
      "1) Love it","2) Help when I can","3) Too drained","4) Angry when asked","5) Doesn’t matter"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "When you accomplish something, you feel:", options:[
      "1) Proud","2) Satisfied","3) Never enough","4) Angry at the effort","5) Nothing special"], scoring:{happy:[1], neutral:[2,5], anxious:[3], angry:[4]} },
    { q: "Relationship with technology:", options:[
      "1) Love new tech","2) Use when needed","3) Overwhelming","4) Frustrating","5) Avoid it"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "Planning for the future makes you feel:", options:[
      "1) Excited","2) Confident","3) Anxious","4) Angry","5) Indifferent"], scoring:{happy:[1], neutral:[2,5], anxious:[3], angry:[4]} },
    { q: "Favorite way to exercise:", options:[
      "1) Group activities","2) Solo workouts","3) Avoid exercise","4) Competitive sports","5) Don’t exercise"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "When you make a mistake, you:", options:[
      "1) Learn & grow","2) Move on","3) Beat yourself up","4) Blame others","5) Deny it"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "Ideal vacation:", options:[
      "1) Adventure","2) Relaxation","3) Isolation","4) Competitive activities","5) Stay home"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "Receiving feedback:", options:[
      "1) Appreciate it","2) Consider thoughtfully","3) Crushed by criticism","4) Defensive & angry","5) Ignore it"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Relationship with money:", options:[
      "1) Enjoy managing it","2) Handle responsibly","3) Constant worry","4) Angry about finances","5) Don’t think about it"], scoring:{happy:[1], neutral:[2,5], anxious:[3], angry:[4]} },
    { q: "Thinking about childhood makes you feel:", options:[
      "1) Nostalgic & happy","2) Generally positive","3) Sad","4) Angry","5) Nothing in particular"], scoring:{happy:[1,2], sad:[3], angry:[4], neutral:[5]} },
    { q: "Learning new things is:", options:[
      "1) Exciting","2) Interesting","3) Stressful","4) Annoying","5) Not worth it"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} },
    { q: "When you lose something important, you:", options:[
      "1) Stay positive","2) Accept & move on","3) Devastated","4) Furious","5) Numb"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "Favorite type of book:", options:[
      "1) Inspirational","2) Mystery/thriller","3) Heartbreaking drama","4) Action/adventure","5) Don’t read"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "Waiting in line, you:", options:[
      "1) Use time productively","2) Patient & relaxed","3) Extremely anxious","4) Angry about delay","5) Zone out"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], neutral:[5]} },
    { q: "Relationship with food:", options:[
      "1) Enjoy cooking/eating","2) Eat for nourishment","3) Eating issues","4) Angry about choices","5) Food doesn’t matter"], scoring:{happy:[1], neutral:[2], sad:[3], angry:[4], neutral:[5]} },
    { q: "Typical response to compliments:", options:[
      "1) Appreciate & feel good","2) Thank politely","3) Uncomfortable/unworthy","4) Suspicious","5) Don’t care"], scoring:{happy:[1,2], sad:[3], anxious:[3], angry:[4], neutral:[5]} },
    { q: "Public speaking makes you feel:", options:[
      "1) Excited","2) Prepared","3) Terrified","4) Angry about it","5) Indifferent"], scoring:{happy:[1], neutral:[2,5], anxious:[3], angry:[4]} },
    { q: "Relationship with social media:", options:[
      "1) Positive & connecting","2) Balanced","3) Inadequate","4) Angry at others","5) Don’t use it"], scoring:{happy:[1], neutral:[2,5], sad:[3], angry:[4]} },
    { q: "When in physical pain, you:", options:[
      "1) Seek solutions","2) Manage calmly","3) Feel depressed","4) Angry about pain","5) Ignore it"], scoring:{happy:[1], neutral:[2], sad:[3,5], angry:[4]} },
    { q: "Attitude toward personal growth:", options:[
      "1) Excited about improvement","2) Gradual progress","3) Overwhelmed","4) Resistant/angry","5) Not interested"], scoring:{happy:[1], neutral:[2], anxious:[3], angry:[4], sad:[5]} }
  ];

  function sample(arr, n){
    var a = arr.slice();
    for (var i=a.length-1; i>0; i--) { var j = Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; }
    return a.slice(0, Math.min(n, a.length));
  }

  function renderQuiz(questions){
    var html = ['<div class="quiz">'];
    questions.forEach(function(q, idx){
      html.push('<div class="quiz-card">');
      html.push('<p class="q"><strong>Q'+(idx+1)+'.</strong> '+q.q+'</p>');
      for (var v=1; v<=5; v++) {
        var label = q.options[v-1] || (''+v);
        html.push('<label class="opt"><input type="radio" name="q'+idx+'" value="'+v+'" required> '+label+'</label>');
      }
      html.push('</div>');
    });
    html.push('<button id="submit-quiz" class="btn primary">Submit Quiz</button>');
    html.push('</div>');
    html.push('<div id="quiz-result"></div>');
    return html.join('');
  }

  function score(questions, answers){
    var s = { happy:0, sad:0, anxious:0, angry:0, neutral:0 };
    for (var i=0; i<answers.length && i<questions.length; i++){
      var q = questions[i];
      var choice = answers[i];
      Object.keys(q.scoring).forEach(function(em){
        if (q.scoring[em].indexOf(choice) !== -1) s[em] += 1;
      });
    }
    return s;
  }

  function primaryEmotion(scores){
    var max = -1, ties = [];
    Object.keys(scores).forEach(function(em){
      if (scores[em] > max){ max = scores[em]; ties = [em]; }
      else if (scores[em] === max){ ties.push(em); }
    });
    if (ties.length === 1) return ties[0];
    if (ties.indexOf('happy') !== -1 && ties.indexOf('neutral') !== -1) return 'happy';
    if (ties.indexOf('sad') !== -1 && ties.indexOf('anxious') !== -1) return 'anxious';
    return ties[0] || 'neutral';
  }

  function renderResult(primary, scores, total){
    function row(em){
      var pct = total ? ((scores[em]/total)*100).toFixed(1) : '0.0';
      return '<tr><td>'+em.charAt(0).toUpperCase()+em.slice(1)+'</td><td>'+scores[em]+'/'+total+'</td><td>'+pct+'%</td></tr>';
    }
    var html = [
      '<div class="quiz-result">',
      '<div class="result-header"><h3>Your Emotion Analysis Results</h3><div class="emotion-result">'+primary.toUpperCase()+'</div></div>',
      '<table class="scores-table"><thead><tr><th>Emotion</th><th>Score</th><th>%</th></tr></thead><tbody>',
      row('happy'), row('sad'), row('anxious'), row('angry'), row('neutral'),
      '</tbody></table>',
      '<div class="action-buttons">',
      '<a class="btn primary" href="'+primary+'.html">Visit '+primary.charAt(0).toUpperCase()+primary.slice(1)+' Resources →</a>',
      '<a class="btn" href="survey.html">Take Another Survey</a>',
      '<a class="btn" href="results.html">View All Results</a>',
      '</div>',
      '</div>'
    ];
    return html.join('');
  }

  // Mount
  var quizRoot = document.getElementById('quiz');
  if (!quizRoot) return;
  var qs = sample(QUESTIONS, 20);
  quizRoot.innerHTML = renderQuiz(qs);
  var submit = document.getElementById('submit-quiz');
  if (submit){
    submit.addEventListener('click', function(){
      var answers = [];
      for (var i=0;i<20;i++){
        var sel = document.querySelector('input[name="q'+i+'"]:checked');
        if (!sel) { return; }
        answers.push(parseInt(sel.value, 10));
      }
      var scores = score(qs, answers);
      var primary = primaryEmotion(scores);
      var total = answers.length;
      try {
        // Persist full context for the result page
        localStorage.setItem('emotion_result', JSON.stringify({
          primary: primary,
          scores: scores,
          total: total,
          questions: qs.map(function(q){ return { q: q.q, options: q.options }; }),
          answers: answers
        }));
      } catch (e) {}
      window.location.href = 'emotion-result.html';
    });
  }
})();



(function(){
  function byId(id){ return document.getElementById(id); }

  var data;
  try { data = JSON.parse(localStorage.getItem('emotion_result') || 'null'); } catch(e){ data = null; }
  if (!data || !data.primary || !data.scores){
    // No data: show message and exit
    var badge = byId('emotion-badge');
    if (badge) badge.textContent = 'No recent result found';
    return;
  }

  var primary = data.primary;
  var scores = data.scores;
  var total = data.total || (scores.happy + scores.sad + scores.anxious + scores.angry + scores.neutral) || 1;

  var EMO = {
    happy: { name: 'Happy', emoji: '😊', color: '#FFD700',
      scientific: ['Likely higher dopamine/serotonin activity','Positive reinforcement and reward pathways'],
      descriptive: ['Optimism and gratitude present','Tends to reframe events positively'],
      logical: ['Choices reflect approach orientation','Low threat appraisal','Low manipulation susceptibility via guilt'],
      coping: ['Keep gratitude journaling','Maintain social connections','Set meaningful goals'] },
    sad: { name: 'Sad', emoji: '😢', color: '#B0C4DE',
      scientific: ['Lower serotonin; possible elevated cortisol','Withdrawal motivation patterns'],
      descriptive: ['Low mood and energy','Rumination on losses or regrets'],
      logical: ['Threat appraisal moderate','Vulnerable to negative framing','Needs structured routine'],
      coping: ['Talk to trusted people','Light exercise','Professional support if persistent'] },
    anxious: { name: 'Anxious', emoji: '😰', color: '#FF6B6B',
      scientific: ['Amygdala hyper-reactivity','Stress hormone imbalance'],
      descriptive: ['Future-focused worry','Avoidance and safety behaviors'],
      logical: ['High threat appraisal','Vulnerable to urgency-based manipulation','Benefit from CBT techniques'],
      coping: ['Breathing exercises','Mindfulness','Break tasks into small steps'] },
    angry: { name: 'Angry', emoji: '😠', color: '#FF8E53',
      scientific: ['Elevated adrenaline','Approach motivation with hostility'],
      descriptive: ['Irritability and blame focus','Low tolerance for obstacles'],
      logical: ['High control/assertion drive','Vulnerable to provocation cues','Needs de-escalation tools'],
      coping: ['Time-outs','Nonviolent communication','Channel energy constructively'] },
    neutral: { name: 'Neutral', emoji: '😌', color: '#88D8C0',
      scientific: ['Balanced autonomic activity','Regulated emotional responses'],
      descriptive: ['Even-keeled mood','Flexible coping repertoire'],
      logical: ['Low threat appraisal','Low manipulation susceptibility overall'],
      coping: ['Maintain routines','Mindfulness','Support others when possible'] }
  };

  var meta = EMO[primary] || EMO.neutral;

  // Header badge
  var badge = byId('emotion-badge');
  if (badge){
    badge.style.color = meta.color;
    badge.textContent = meta.emoji + ' ' + meta.name;
  }

  // Scores table
  var tbl = byId('scores-table');
  if (tbl){
    var rows = ['<thead><tr><th>Emotion</th><th>Score</th><th>%</th></tr></thead><tbody>'];
    function row(key){
      var pct = ((scores[key]||0)/total*100).toFixed(1);
      var label = key.charAt(0).toUpperCase()+key.slice(1);
      return '<tr><td>'+label+'</td><td>'+(scores[key]||0)+'/'+total+'</td><td>'+pct+'%</td></tr>';
    }
    ['happy','sad','anxious','angry','neutral'].forEach(function(k){ rows.push(row(k)); });
    rows.push('</tbody>');
    tbl.innerHTML = rows.join('');
  }

  function fillList(id, list){
    var el = byId(id);
    if (!el) return;
    el.innerHTML = list.map(function(item){ return '<li>'+item+'</li>'; }).join('');
  }

  fillList('scientific-list', meta.scientific);
  fillList('descriptive-list', meta.descriptive);
  fillList('logical-list', meta.logical);
  fillList('coping-list', meta.coping);

  var goto = byId('goto-emotion');
  if (goto){ goto.href = (primary || 'neutral') + '.html'; }

  // Per-question summary (20 asked from the 50 bank)
  var qs = (data.questions || []);
  var ans = (data.answers || []);
  var list = byId('question-summary');
  if (list && qs.length && ans.length){
    var items = [];
    for (var i=0; i<qs.length && i<ans.length; i++){
      var q = qs[i];
      var picked = ans[i];
      var label = (q.options && q.options[picked-1]) ? q.options[picked-1] : ('Choice '+picked);
      items.push('<li><div><strong>Q'+(i+1)+':</strong> '+q.q+'</div><div class="chip">Selected: '+label+'</div></li>');
    }
    list.innerHTML = items.join('');
  }
})();



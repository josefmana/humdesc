// Select the language (CZE or ENG):
var tongue = 'CZE';

// Prepare language-specific variables:
var cbar_txt, prev_txt, next_txt, excl_txt, cont_txt, micro_txt, choose_txt, rec_txt,
repeat_txt, accept_txt, check_txt, start_txt, finish_txt, sex_drop, instruct, rec_secs,
max_dur, countdown_secs

// Maximal duration of answer recording in seconds:
rec_secs = 120;

// Maximal duration of the experiment:
max_dur = 30; // in minutes

// Time in seconds that will show countdown:
countdown_secs = 15;

// Depending on the language, assign values:
if (tongue === 'CZE') {
  // Czech language settings:
  cbar_txt = 'Splněno';
  prev_txt = 'Předchozí';
  next_txt = 'Další';
  excl_txt = '<p>Tento experiment je možné spustit pouze na počítači.</p>';
  safari_txt = '<p>Tento experiment nelze spustit na Safari.</br>Zvolte prosím jiný prohlížeč (např. Mozilla Firefox, Google Chrome či Opera).</p>';
  cont_txt = 'Pokračovat';
  choose_txt = 'Použít tento mikrofon.';
  begin_txt = 'Zahájit nahrávání';
  rec_txt = 'Ukončit nahrávání';
  repeat_txt = 'Nahrát znovu';
  accept_txt = 'Pokračovat';
  check_txt = ['Ukončit experiment', 'Pokračovat'];
  start_txt = 'Zahájit experiment';
  finish_txt = 'KONEC EXPERIMENTU';

  sex_drop = `
  <select style="height:22px; font-size: 18px" name="sex">
    <option value="female">žena</option>
    <option value="male">muž</option>
    <option value="other">jiné</option>
  </select>`;

  instruct = [
    'instruct/welcome_CZ.png',
    'instruct/consent_CZ.png',
    'instruct/demography_CZ.png',
    'instruct/gender_CZ.png',
    'instruct/age_CZ.png',
    'instruct/introduction_CZ.png',
    'instruct/microphone_CZ.png',
    'instruct/check_CZ.png',
    'instruct/start_CZ.png',
    'instruct/begin_CZ.png',
    'instruct/trial_CZ.png',
    'instruct/finish_CZ.png',
    'instruct/termination_CZ.png'
  ];

} else if (tongue === 'ENG') {
  // English language settings:
  cbar_txt = 'Completion progress';
  prev_txt = 'Previous';
  next_txt = 'Next';
  excl_txt = '<p>You must use a desktop/laptop computer to participate in this experiment.</p>';
  safari_txt = '<p>This experiments does not work in Safari!</br>Please, use a different browser (e.g., Mozilla Firefox, Google Chrome or Opera).</p>';
  cont_txt = 'Next';
  choose_txt = 'Use this microphone.';
  begin_txt = 'Initate recording';
  rec_txt = 'Finish recording';
  repeat_txt = 'Try again';
  accept_txt = 'Continue';
  check_txt = ['Terminate experiment', 'Continue'];
  start_txt = 'Begin experiment';
  finish_txt = 'FINISH!';

  sex_drop = `
  <select style="height:22px; font-size: 18px" name = "sex">
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="other">other</option>
  </select>`;

  instruct = [
    'instruct/welcome_ENG.png',
    'instruct/consent_ENG.png',
    'instruct/demography_ENG.png',
    'instruct/gender_ENG.png',
    'instruct/age_ENG.png',
    'instruct/introduction_ENG.png',
    'instruct/microphone_ENG.png',
    'instruct/check_ENG.png',
    'instruct/start_ENG.png',
    'instruct/trial_ENG.png',
    'instruct/finish_ENG.png',
    'instruct/termination_ENG.png'
  ];

};

// Dropdown for Age (same structure regardless of language)
const age_drop = `<select style="height:22px; font-size: 16px" name="age">
  ${Array.from({ length: 82 }, (_, i) => `<option value="${i + 18}">${i + 18}</option>`).join('')}
</select>`;

// Instruction texts (the same structure regardless of language)
const imgStyle0 = "style='height: 100%; width: 100%; object-fit: contain'";
const imgStyle1 = "style='height: 75%; width: 75%; object-fit: contain'";
const imgStyle2 = "style='height: 60%; width: 60%; object-fit: contain'";
const imgStyle3 = "style='height: 50%; width: 50%; object-fit: contain'";
const imgStyle4 = "style='height: 44%; width: 44%; object-fit: contain'";

var welc_img = `<p><img src="${instruct[0]}" ${imgStyle1}/></p>`;
var cons_img = `<p><img src="${instruct[1]}" ${imgStyle0}/></p>`;
var demo_img = `<p><img src="${instruct[2]}" ${imgStyle2}/></p>`;
var sex_img  = `<p><img src="${instruct[3]}" ${imgStyle3}"/><br/>${sex_drop}</p>`;
var age_img  = `<p><img src="${instruct[4]}" ${imgStyle3}"/><br/>${age_drop}</p>`;
var info_img = `<p><img src="${instruct[5]}" ${imgStyle1}/></p>`;
var micr_img = `<p><img src="${instruct[6]}" ${imgStyle3}/></p>`;
var chec_img = `<p><img src="${instruct[7]}" ${imgStyle1}/></p>`;
var star_img = `<p><img src="${instruct[8]}" ${imgStyle3}"/></p>`;
var begi_img = `<p><img src="${instruct[9]}" ${imgStyle4}"/></p>`;
var tria_img = `<p><img src="${instruct[10]}" ${imgStyle4}/></p>`;
var fini_img = `<p><img src="${instruct[11]}" ${imgStyle3}"/></p>`;
var term_img = `<p><img src="${instruct[12]}" ${imgStyle0}/></p>`;

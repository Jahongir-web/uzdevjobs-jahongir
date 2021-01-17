
var $_ = function(selector, node = document){
  return node.querySelector(selector);
};

var $$_ = function(selector, node = document){
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text){
  var element = document.createElement(tagName);
  element.setAttribute(`class`, className);

  if (text) {
    element.textContent = text;
  }

  return element;

};



console.log($_(`.job-form`));

var elJobForm = $_(`.job-form`);
var elJobTemplate = $_(`.template-job`).content;
var elResultList = $_(`.jobs-list`);
var elThemeBtn = $_(`.theme-btn`);

// Sayt temasini o'zgartirish

var theme = localStorage.getItem(`theme`) || `light`;

if(theme === `dark`){
  document.body.classList.add(`body-dark`);
  elThemeBtn.textContent = `Kunduzgi rejim`;
} else if (theme === `light`){
  document.body.classList.remove(`body-dark`);
}

elThemeBtn.addEventListener(`click`, function(){
  if(theme ===`dark`){
    theme = `light`;
    document.body.classList.remove(`body-dark`);
    elThemeBtn.textContent = `Tungi rejim`;
    localStorage.setItem(`theme`, theme);
  }
  else if (theme === `light`){
    theme = `dark`;
    document.body.classList.add(`body-dark`);
    elThemeBtn.textContent = `Kunduzgi rejim`;
    localStorage.setItem(`theme`, theme);
  }
});

if (elJobForm) {
  var elHeadingInput = $_(`.heading-input`, elJobForm);
  var elNameCompanyInput = $_(`.company-name-input`, elJobForm);
  var elTechnologyInput = $_(`.technology-input`, elJobForm);
  var elTelegramInput= $_(`.telegram-input`, elJobForm);
  var elPhoneInput = $_(`.tel-input`, elJobForm);
  var elZoneSelect = $_(`.zone-select`, elJobForm);
  var elAnswerableInput = $_(`.answerable-input`, elJobForm);
  var elWorkTimeSelect = $_(`.work-time-select`, elJobForm);
  var elSolaryInput = $_(`.solary-input`, elJobForm);
  var elTextarea = $_(`.textarea-form`, elJobForm);
  var elAddedButton = $_(`.added-btn`, elJobForm);

  var elJobFragment = document.createDocumentFragment();



  var elonlar = JSON.parse(localStorage.getItem(`oxirgiElonlar`)) || [];



  var elon = {};

  elResultList.innerHTML = ``;


  elonlar.forEach (function (elon){

    var elElonItem = elJobTemplate.cloneNode(true);

    $_(`.heading-job`,elElonItem).textContent = elon.heading;
    $_(`.company-name-job`,elElonItem).textContent = `Company: ${elon.nameCompany}`;
    $_(`.technalogy-job`,elElonItem).textContent = `Texnologiyalar: ${elon.technology}`;
    $_(`.telegram-link-job`,elElonItem).setAttribute(`href`,`https://tme.to/${elon.telegram}`);
    $_(`.telegram-link-job`,elElonItem).textContent = `Telegram: ${elon.telegram}`;
    $_(`.phone-job`,elElonItem).setAttribute(`href`,`tel:${elon.phone}`);
    $_(`.phone-job`,elElonItem).textContent = `Telefon: ${elon.phone}`;
    $_(`.zone-job`, elElonItem).textContent = `Hudud: ${elon.zone}`;
    $_(`.answerable-job`, elElonItem).textContent = `Mas'ul: ${elon.answerable}`;
    $_(`.work-time-job`, elElonItem).textContent = `Ish vaqti: ${elon.workTime}`;
    $_(`.solary-job`, elElonItem).textContent = `Maosh: ${elon.solary}`;
    // $_(`.`)
    elJobFragment.appendChild(elElonItem);


  });
  elResultList.appendChild(elJobFragment);



  elJobForm.addEventListener(`submit`, function(evt){
    evt.preventDefault();


    elonlar.push({
      heading: elHeadingInput.value,
      nameCompany: elNameCompanyInput.value,
      technology: [elTechnologyInput.value.split(`,`)],
      telegram: elTelegramInput.value,
      phone: elPhoneInput.value,
      zone: elZoneSelect.value,
      answerable: elAnswerableInput.value,
      workTime: elWorkTimeSelect.value,
      solary: elSolaryInput.value,
      jobsMore: elTextarea.value,
    });

    console.log(elonlar);

    localStorage.setItem(`oxirgiElonlar`, JSON.stringify(elonlar));


    elResultList.innerHTML = ``;


    elonlar.forEach (function (elon){

      var elElonItem = elJobTemplate.cloneNode(true);

      $_(`.heading-job`,elElonItem).textContent = elon.heading;
      $_(`.company-name-job`,elElonItem).textContent = `Company: ${elon.nameCompany}`;
      $_(`.technalogy-job`,elElonItem).textContent = `Texnologiyalar: ${elon.technology}`;
      $_(`.telegram-link-job`,elElonItem).setAttribute(`href`,`https://tme.to/${elon.telegram}`);
      $_(`.telegram-link-job`,elElonItem).textContent = `Telegram: ${elon.telegram}`;
      $_(`.phone-job`,elElonItem).setAttribute(`href`,`tel:${elon.phone}`);
      $_(`.phone-job`,elElonItem).textContent = `Telefon: ${elon.phone}`;
      $_(`.zone-job`, elElonItem).textContent = `Hudud: ${elon.zone}`;
      $_(`.answerable-job`, elElonItem).textContent = `Mas'ul: ${elon.answerable}`;
      $_(`.work-time-job`, elElonItem).textContent = `Ish vaqti: ${elon.workTime}`;
      $_(`.solary-job`, elElonItem).textContent = `Maosh: ${elon.solary}`;
      // $_(`.`)
      elJobFragment.appendChild(elElonItem);


    });
    elResultList.appendChild(elJobFragment);

    elJobForm.reset();

  })





};
{/* <li class="jobs-item col-6 card-body">
<h4 class="heading-job">Xodim kerak</h4>
<h4 class="company-name-job">Najot ta'lim</h4>
<p class="technalogy-job">HTML,CSS,JS,REACTJS</p>
<a href="t.me/jahongir_mh" class="telegram-link-job d-block text-reset">@jahongir_mh</a>
<a href="tel:+998975008749" class="phone-job d-block text-reset">+99897 500 87 49</a>
<span class="zone-job d-block">Toshkent</span>
<span class="answerable-job d-block">Jahongir</span>
<span class="work-time-job d-block">To'liq bandlik</span>
<span class="solary-job d-block">500</span> */}

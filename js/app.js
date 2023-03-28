"use strict"
$(window).ready(function(){
function applePie() {
  return ( navigator.userAgent.match(/(iPhone|iPod|iPad)/i) );
}
$("[data-fancybox]").fancybox({
  touch : {
    vertical : false, // Allow vertical swipe
  },
});
$("[data-fancybox]").click(function() {
  if(document.querySelectorAll('.fancybox-active').length) {
    disableScroll()
  } else {
    
  }
})


  function support_format_webp()
  {
   var elem = document.createElement('canvas');
  
   if (!!(elem.getContext && elem.getContext('2d')))
   {
    // was able or not to get WebP representation
    document.querySelector('body').classList.add('webp')
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
   }
   else
   {
    // very old browser like IE 8, canvas not supported
    return false;
   }
  }
  support_format_webp()
  $(".anim").addClass('anim-start');
function fixedBlock() {
  var topPos = $('.open__info').offset().top;
  $(window).scroll(function() {
  var top = $(document).scrollTop(),
      pip = $('.career').offset().top,
      height = $('.open__info').outerHeight();
  if (top > topPos && top < pip - height) {$('.open__info').addClass('fixed').removeAttr("style");console.log('test')}
  else if (top > pip - height) {$('.open__info').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
  else {$('.open__info').removeClass('fixed');}
  });
}

if(document.querySelectorAll('.preview__title').length) {
  document.querySelector('.preview__title').style.textTransform = 'uppercase'
}
});

function changerActive(list) {
    for(let i = 0; i < list.length; i++) {
        list[i].classList.remove('active')
    }
    list = 0
}

//Accordion 
class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        if(window.innerWidth < 540) {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
              return;
            }
            if (!this._config.alwaysOpen) {
              const elOpenItem = this._el.querySelector('.accordion__item_show');
              if (elOpenItem) {
                elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
              }
            }
            this.toggle(elHeader.parentElement);
        }
      });
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      const height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      el.classList.add('active');
      elBody.classList.add('collapsing');
      el.classList.add('accordion__item_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        el.classList.remove('accordion__item_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('accordion__item_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      el.classList.remove('active');
      elBody.classList.remove('collapse');
      el.classList.remove('accordion__item_show');
      elBody.classList.add('collapsing');
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
  }
  new ItcAccordion(document.querySelector('.header-menu'), {
    alwaysOpen: true
  });
//body lock scroll
  let body = document.body
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  let disableScroll = function () {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
    document.body.style.paddingRight = lockPaddingValue
    if(document.querySelectorAll('.fancybox-button--close').length) {
      document.querySelector('.fancybox-button--close').addEventListener("touchstart",
      function(event) {
        event = event || window.event;
        enableScroll()
      }
    )
    }
  }
  let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
    document.body.style.paddingRight = '0px'
  }
  document.addEventListener("click",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('fancybox-slide')) {
    enableScroll()
    }
}
)

document.addEventListener("touchstart",
function(event) {
  event = event || window.event;
  let target = event.target
  if(target.classList.contains('fancybox-slide')) {
    enableScroll()
  }
}
)
//fancybox close  btn
$.fancybox.defaults.closeExisting = true;
let closeFancybox = document.querySelectorAll('[data-fancybox-close')
for(let i=0 ; i < closeFancybox.length ; i++) {
  closeFancybox[i].addEventListener("click",
  function() {
    enableScroll()
  })
}
//header menu open close
let menuOpen = document.querySelector('.menu-open')
let menuClose = document.querySelector('.menu-close')
function is_touch_device() {
  return ('ontouchstart' in window);
}

function bodyFixed() { //scroll - false
  if(is_touch_device()) {
    document.body.classList.add('fixed')
  } else {
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }
}

function bodyNotFixed() { // scroll - true
  if(is_touch_device()) {
    document.body.classList.remove('fixed')
  } else {
    window.onscroll=function(){window.scrollTo()};

  }
}
menuOpen.onclick = function() {
    openMenu()
    menuOpenCoordinate()
}

menuClose.onclick = function() {
    closeMenu()
}

menuClose.addEventListener("mouseenter",
function() {
    animClose()
})

function menuOpenCoordinate() {
    let coordinate = menuOpen.getBoundingClientRect()
    menuClose.style.top = coordinate.top - 10 + 'px' 
    menuClose.style.left = coordinate.left + 'px'
}

function openMenu() {
    let headerMenu = document.querySelector('.header-menu-w')
    let headerW = document.querySelector('.header-w')
    headerMenu.classList.add('active')
    menuOpen.classList.add('active')
    headerW.style.position = "fixed"
    headerW.style.width = "100%"
    disableScroll()

}

function closeMenu() {
    let headerMenu = document.querySelector('.header-menu-w')
    let headerW = document.querySelector('.header-w')
    let header = document.querySelector('.header')
    headerMenu.classList.remove('active')
    enableScroll()
    document.querySelector('.wrapper').classList.remove('disable-scroll_menu')
    // document.getElementsByTagName( 'html' )[0].classList.remove('disable-scroll_menu')
    // document.body.classList.remove('disable-scroll_menu')
    headerW.style.position = "fixed"
    headerW.style.width = "100%"
}
//sticky header
let header_w = document.querySelector('.header-w')
let header = document.querySelector('.header')
function stickyHeader() {
  if(window.pageYOffset >78) {
    header_w.classList.add('sticky')
  }else {
    header_w.classList.remove('sticky')
  }
  if(window.pageYOffset >0) {
    header_w.classList.add('opacity')
  }else {
    header_w.classList.remove('opacity')
  }
}
if(window.pageYOffset >78) {
  header_w.classList.add('sticky')
}else {
  header_w.classList.remove('sticky')
}
if(window.pageYOffset >0) {
  header_w.classList.add('opacity')
}else {
  header_w.classList.remove('opacity')
}
let wrapper = document.querySelector('.wrapper')
function wrapperPadding() {
  if(!wrapper.classList.contains('not-padding')) {
    wrapper.style.paddingTop = header_w.clientHeight+'px'
  }
}
wrapperPadding()

// Size-control
window.addEventListener('resize', function(event){
    //close mobile menu
      if(window.innerWidth > 539) {
        closeAccordion()
      }
      if(menuOpen.classList.contains('active')) {
        menuOpenCoordinate()
      }
      // romance titles
      if(document.querySelectorAll('.romance__title_left').length) {
        scrollTitles()
      }
      //history scroll orange line
      if (document.querySelectorAll('.history__list').length) {
        scrollHistory()
      }
      //scroll gallery list
      if (document.querySelectorAll('.service__gallery-list').length) {
        scrollGallery()
      }
      //scroll map-bg
      if(document.querySelectorAll('.map').length) {
        scrollBgMap()
      }
      //scroll preview helicopter index
      if(document.querySelectorAll('.preview__helicopter').length) {
        scrollHelicopterPreview()
        rotatePreviewHelicopter()
      }
      //scroll orange helicopter anim
      if(document.querySelectorAll('.knowledge__col_orange-helicopter').length) {
        scrollHelicopterOrange()
      }
      stickyHeader()
      //scroll knowledgeCloud
      if(document.querySelectorAll('.knowledge-cloud').length) {
        scrollKnowledgeCloud()
      }
      //changePlaceholders
      changePlaceholder()
      wrapperPadding()
})


let accordionItem = document.querySelectorAll('.accordion__item')
function closeAccordion() {
    for(let i=0 ; i < accordionItem.length ; i++) {
        accordionItem[i].classList.remove('accordion__item_show')
        accordionItem[i].classList.remove('active')
    }
}
//close animation 360
let x = 0
function animClose() {
    x = x + 180
    menuClose.style.transform = 'rotate(' + x + 'deg)'
}

//lang
let langRu = document.querySelectorAll('.ru')
let langEn = document.querySelectorAll('.en')
let langItem = document.querySelectorAll('.lang-item')

for(let i=0 ; i < langItem.length ; i++) {
    langItem[i].addEventListener("click",
    function() {
        changeLang(langItem[i])
    })
}


function changeLang(lang) {
    changerActive(langItem)
    let id = 'en'
    if(lang.classList.contains('ru')) {
        id = 'ru'
    } else [
        id = 'en'
    ]
    for(let i=0 ; i < langItem.length ; i++) {
        if(langItem[i].classList.contains(id))
            langItem[i].classList.add('active')
    }
}


// fleet__slider
$('.fleet__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.fleet__slider-for',
  focusOnSelect: true,
  infinite: false,
  speed: 500,
  accessibility: false,
  prevArrow: $('.fleet__slider-prev'),
  nextArrow: $('.fleet__slider-next'),
  variableWidth: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
  ]
});

$('.fleet__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  fade: true,
  asNavFor: '.fleet__slider',
});

//romance change blocks
let romanceNavItem = document.querySelectorAll('.romance__nav-item')

for(let i=0 ; i < romanceNavItem.length ; i++) {
  romanceNavItem[i].addEventListener("click",
  function() {
    let index = romanceNavItem[i].getAttribute('romance-nav-id')
    let subtitle = romanceNavItem[i].innerHTML
    changerActive(romanceNavItem)
    romanceNavItem[i].classList.add('active')
    changeRomanceBlock(index,subtitle)
  })
}

function changeRomanceBlock(id, newsubtitle) {
  let romanceBlock = document.querySelector('[romance-block-id="'+id+'"]')
  let img = romanceBlock.querySelector('.romance__item-pic').innerHTML
  let text = romanceBlock.querySelector('.romance__info').innerHTML

  let previewBlockPic = document.querySelector('.romance__pic')
  let previewBlockInfo = document.querySelector('.romance__info-preview')
  previewBlockPic.innerHTML = img
  previewBlockInfo.innerHTML = text
  let subtitle = previewBlockInfo.querySelector('.romance__info-subtitle')
  subtitle.innerHTML = newsubtitle
}


//карты
let mapPoint = document.querySelectorAll('.marker')
let mapCity = document.querySelectorAll('.geography__nav-item')

for(let i=0 ; i < mapPoint.length ; i++) {
  mapPoint[i].addEventListener("click",
  function() {
    mapPointAction(i)
  })
}
for(let i=0 ; i < mapPoint.length ; i++) {
  mapPoint[i].addEventListener("mouseover",
  function() {
    mapPointAction(i)
  })
}
for(let i=0 ; i < mapPoint.length ; i++) {
  mapPoint[i].addEventListener("mouseout",
  function() {
    mapPointLeave(i)
  })
}
for(let i=0 ; i < mapCity.length ; i++) {
  mapCity[i].addEventListener("click",
  function() {
    mapCityAction(i)
  })
}
for(let i=0 ; i < mapCity.length ; i++) {
  mapCity[i].addEventListener("mouseover",
  function() {
    mapCityAction(i)
  })
}
for(let i=0 ; i < mapCity.length ; i++) {
  mapCity[i].addEventListener("mouseout",
  function() {
    mapCityLeave(i)
  })
}

function mapPointAction(id) {
  let index = mapPoint[id].getAttribute('map-point')
  document.querySelector('[map-city="'+index+'"]').classList.add('active')
}
function mapPointLeave(id) {
  let index = mapPoint[id].getAttribute('map-point')
  document.querySelector('[map-city="'+index+'"]').classList.remove('active')
}
function mapCityAction(id) {
  let index = mapCity[id].getAttribute('map-city')
  document.querySelector('[map-point="'+index+'"]').classList.add('active')
}
function mapCityLeave(id) {
  let index = mapCity[id].getAttribute('map-city')
  document.querySelector('[map-point="'+index+'"]').classList.remove('active')
}


// news__slider
$('.news__slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  speed: 800,
  prevArrow: $('.news__slider-prev'),
  nextArrow: $('.news__slider-next'),
  variableWidth: true,
  responsive: [
    {
      breakpoint: 618,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    },
  ]
});




//scroll up
function toTop() {
  $('body,html').animate({scrollTop:0},800);
}

$(function() {
  $('.to-top').on('click', toTop);
})



window.onscroll=function(){
  //romance titles
  if(document.querySelectorAll('.romance__title_left').length) {
    scrollTitles()
  }
  //scroll map-bg
  if(document.querySelectorAll('.map').length) {
    scrollBgMap()
  }
  //scroll gallery
  if (document.querySelectorAll('.service__gallery-list').length) {
    scrollGallery()
  }
  //scroll preview helicopter
  if(document.querySelectorAll('.preview__helicopter').length) {
    scrollHelicopterPreview()
    rotatePreviewHelicopter()
  }
  //scroll orange helicopter anim
  if(document.querySelectorAll('.knowledge__col_orange-helicopter').length) {
    scrollHelicopterOrange()
  }
  stickyHeader()
  //scroll knowledgeCloud
  if(document.querySelectorAll('.knowledge-cloud').length) {
    scrollKnowledgeCloud()
  }
  // change date and img history block
  if(document.querySelectorAll('.history__preview').length) {
    changeHistoryBlock(true)
  };
  if (document.querySelectorAll('.history__list').length) {
    scrollHistory()
  }
  //anim counter numbers
  counterNumbers()
};

let romanceTitleLeft = document.querySelector('.romance__title_left')
let romanceTitleRight = document.querySelector('.romance__title_right')
let left, right = 0
function scrollTitles() {
  let a = 800

  if((window.innerWidth <= 1100) && (window.innerWidth >= 800)){
    a = 100
  }
  if((window.innerWidth <= 799) && (window.innerWidth >= 539)){
    a = 0
  }
  if((window.innerWidth <= 538)){
    a = 100
  }
  left = document.querySelector(".romance__title_left").getBoundingClientRect().y*3 - 1200;
  right = document.querySelector(".romance__title_right").getBoundingClientRect().y - a;
  romanceTitleLeft.style.transform = 'translateX('+left+'px)'
  romanceTitleRight.style.transform = 'translateX('+-right+'px)'
}

// gallery sscroll
let galleryListLeft = document.querySelector('.transform_left')
let galleryListRight = document.querySelector('.transform_right')
if (document.querySelectorAll('.service__gallery-list').length) {
  scrollGallery()
}
function scrollGallery() {
  let left, right = 0

  left = document.querySelector(".transform_left").getBoundingClientRect().y - 500;
  right = document.querySelector(".transform_right").getBoundingClientRect().y + 800;
  galleryListLeft.style.transform = 'translateX('+left+'px)'
  galleryListRight.style.transform = 'translateX('+-right+'px)'
}


//about slider

$('.about__slider').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  speed: 800,
  autoplay:true,
  autoplaySpeed:3000,
});

//about paralax
let paralaxY = document.querySelectorAll(".paralaxY");
let paralaxImg
/* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */
let moveCoef = 0.3;

window.addEventListener("scroll", scroll);
window.addEventListener("resize", scroll);
scroll();

function scroll() {
  for(let i=0 ; i < paralaxY.length ; i++) {
      /* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
  paralaxImg = paralaxY[i].querySelector('img')
  let r = paralaxY[i].getBoundingClientRect();
  let top = paralaxImg.getBoundingClientRect().y
  let bot = paralaxImg.getBoundingClientRect().y + paralaxImg.clientHeight
  let paralaxYCenter = r.y + r.height / 2;
  let scrollYCenter = window.innerHeight / 2;
  let max = (paralaxImg.clientHeight - paralaxY[i].clientHeight)/2
  let move = (paralaxYCenter - scrollYCenter) * moveCoef;
  if((max<=move) || (-max>=move)) {
  } else {
      paralaxImg.style.transform = 'translateY('+move+'px)'
  }
  }
}


//history slider

$('.history__slider').slick({
  arrows: false,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  infinite: false,
  speed: 800,
  responsive: [
    {
      breakpoint: 618,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});



// $.fancybox.defaults.closeExisting = true;

// let openFancybox = document.querySelectorAll('[data-fancybox]')
// $.fancybox.defaults.hideScrollbar = false;
// for(let i=0 ; i < openFancybox.length ; i++) {
//   openFancybox[i].addEventListener("click",
//   function() {
//     if(openFancybox[i].getAttribute('href') == "#thanks-request") {
//       $.fancybox.close(); return false;
//     }
//     // bodyFixed()
//     // 
//   })
// }
// $.fancybox.defaults.hideScrollbar = true;
// document.addEventListener("click",
// function(event) {
//   event = event || window.event;
//   let target = event.target
//   if(target.classList.contains('fancybox-slide')) {
//     bodyNotFixed()
//   }
// }
// )

//scroll to block id
let scrollItem = document.querySelectorAll('.item-scroll')
for (let anchor of scrollItem) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')

    let toBlock = document.getElementById(blockID)
    $('body,html').animate({
      scrollTop: $(toBlock).offset().top + 100
    },1000);
    if(anchor.classList.contains('preview__mouse')) {
      anchor.style.opacity = '0'
      anchor.style.zIndex = '-5'
    }
  })
}

//service__customers-slider

$('.service__customers-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  speed: 500,
  prevArrow: $('.service__slider-prev'),
  nextArrow: $('.service__slider-next'),
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// создаем service__example-content слайдер если экран меньше 991 и удаляем если больше 991
let slickGreen = false;
    function greenSlider(){    
        if($(window).width() < 991){
            if(!slickGreen){
                $(".service__example-content").slick({
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
                slickGreen = true;
            }
        } else if($(window).width() > 992){
            if(slickGreen){
                $('.service__example-content').slick('unslick');
                slickGreen = false;
            }
        }
    };

    $(document).ready(function(){
        greenSlider();
    });
    $(window).on('resize', function(){
         greenSlider();
    });

// service-gallery-slider

$('.service__gallery-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  variableWidth: false,
});

//aviapark__other-item active

let aviaparkOtherItem = document.querySelectorAll('.aviapark__other-item')

for(let i=0 ; i < aviaparkOtherItem.length ; i++) {
  aviaparkOtherItem[i].addEventListener("click",
  function() {
    changerActive(aviaparkOtherItem)
    aviaparkOtherItem[i].classList.add('active')
  })
}


// years mediacenter

let yearTitle = document.querySelector('.mediacenter__year-title')
let yearList = document.querySelector('.mediacenter__content-year')
let yearItem = document.querySelectorAll('.mediacenter__year-item')
if(document.querySelectorAll('.mediacenter__year-item').length) {
  yearTitle.onclick = function() {
    yearList.classList.toggle('active')
  }
  for(let i=0 ; i < yearItem.length ; i++) {
    yearItem[i].addEventListener("click",
    function() {
      changeYear(yearItem[i])
      yearList.classList.remove('active')
    })
  }
}


function changeYear(item) {
  let year = item.innerHTML
  yearTitle.innerHTML = year
}

//docs nav 
let docsNavItem = document.querySelectorAll('.docs__nav-item')
let docsBlocks = document.querySelectorAll('.docs__block')
for(let i=0 ; i < docsNavItem.length ; i++) {
  docsNavItem[i].addEventListener("click",
  function() {
    changerActive(docsNavItem)
    changerActive(docsBlocks)
    changeDocsBlock(docsNavItem[i])
  })
}

function changeDocsBlock(item) {
  let index = item.getAttribute('data-docs-nav')
  document.querySelector('[data-docs-block="'+index+'"]').classList.add('active')
  item.classList.add('active')
}

//questionnaire popup form 
let questionnaireListJob = document.querySelector('.questionnaire__list-job') // блок Выбранная вакансия
let questionnaireSelectList = document.querySelector('.questionnaire__select-list') // скрытый список вакансий
let questionnaireSelect = document.querySelector('.questionnaire__select') //input для ввода выбранной вакансии
let questionnaireSelectItem = document.querySelectorAll('.questionnaire__select-item') //вакансия 


if(document.querySelectorAll('.questionnaire__list-job').length) {
  questionnaireListJob.onclick = function() {
    questionnaireListJob.classList.toggle('active')
    $(questionnaireListJob).find('.questionnaire__select-list').slideToggle(1000)
  }
  for(let i=0 ; i < questionnaireSelectItem.length ; i++) {
    questionnaireSelectItem[i].addEventListener("click",
    function() {
      questionnaireSelect.value = questionnaireSelectItem[i].innerHTML
    })
  }
}


let contactsFormItemType = document.querySelectorAll('.contacts__form-item-type-w') // блок выбранный  вид




if(document.querySelectorAll('.contacts__form-item-type-w').length) {
  for(let i=0 ; i < contactsFormItemType.length ; i++) {
    contactsFormItemType[i].addEventListener("click",
    function() {
      contactsFormItemType[i].classList.toggle('active')
      $(contactsFormItemType[i]).find('.questionnaire__select-list').slideToggle(1000)
    })
  }
  for(let i=0 ; i < questionnaireSelectItem.length ; i++) {
    questionnaireSelectItem[i].addEventListener("click",
    function() {
      let container = questionnaireSelectItem[i].closest('.contacts__form-item-type-w')
      let formInputType = container.querySelector('.form-input_type')
      formInputType.value = questionnaireSelectItem[i].innerHTML
    })
  }
}


let formField = document.querySelectorAll('.form-field') // все поля для ввода в формах
for(let i=0 ; i < formField.length ; i++) {
  formField[i].addEventListener("input",
  function() {
    validateField(formField[i])
  })
}
function validateField(field) {
  if(field.value.length > 0 ) {
    field.closest('.questionnaire__list-item-w').classList.add('correctly')
    field.classList.remove('error')
  } else
    field.closest('.questionnaire__list-item-w').classList.remove('correctly')
}

//кнопка отправить проверка заполненности обязательных полей
if(document.querySelectorAll('.submit').length) {
  let submitBtn = document.querySelectorAll('.submit') // все поля для ввода в формах

  for(let i=0 ; i < submitBtn.length ; i++) {
    submitBtn[i].addEventListener("click",
    function(e) {
      if(!checkField(submitBtn[i])) {

      } else {
        e.preventDefault();
      }
    })
  }
}


function checkField(item) { // функция проверки заполенния обязательных полей
  let errors = 0
  let form = item.closest('.form')
  let obligatory = form.querySelectorAll('.obligatory')
  for(let i=0 ; i < obligatory.length ; i++) {
    if(obligatory[i].value.length == 0) {
      obligatory[i].classList.add('error')
      errors++
    } else {
      obligatory[i].classList.remove('error')
    }
  }
  return(errors)
}

//sliders с переключением на кнопки и за ползунок
function sliderSwitching(swiperContainer) {
  let slider = swiperContainer.querySelector('.slider')
  let checkRange = true
  let fleetNext = swiperContainer.querySelector('.swiper-range__next')
  let fleetPrev = swiperContainer.querySelector('.swiper-range__prev')
  let fleetSlideRange = swiperContainer.querySelector('.fleet__slider-range')
  let fleetSliderItem = slider.querySelectorAll('.slider-range__item')
  let max = fleetSliderItem.length
  $(swiperContainer).on('afterChange', function(event, slick, currentSlide, nextSlide){
    if(checkRange) {
      fleetSlideRange.value = currentSlide
      checkRange = true
    }
    rotatePicSlide('stop')
  });

  let direc = left
  fleetNext.onclick = function() {
    checkRange = true
  }
  fleetPrev.onclick = function() {
    checkRange = true
  }
  $(slider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if ((currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1)) || (currentSlide === 0 && nextSlide === slick.slideCount - 1)) {
      rotatePicSlide('left')
  }
  else {
      rotatePicSlide('right')
  }
    if(Math.trunc(fleetSlideRange.value)==max) {
      checkRange = false
    } else 
      checkRange = true
  });

  $(fleetSlideRange).on('input',function(){
    checkRange = false
    let  currentSlide = $(slider).slick('slickCurrentSlide');
    if(Math.trunc(fleetSlideRange.value) - 1 != currentSlide) {

      $(slider).slick('slickGoTo',Math.trunc(fleetSlideRange.value) - 1);
    }
      currentSlide = Math.trunc(fleetSlideRange.value)
  });

  $(fleetSlideRange).attr('max',max);
  let fleetPics = document.querySelectorAll('.fleet__slider-helicopter')
  function rotatePicSlide(direction) {
    if(document.querySelectorAll('.fleet__slider-item').length) {
      if(direction == 'right') {
        for(let i=0 ; i < fleetPics.length ; i++) {
          fleetPics[i].classList.add('rotateRight')
          fleetPics[i].classList.remove('rotateLeft')
        }
      }
      if(direction == 'left') {
        for(let i=0 ; i < fleetPics.length ; i++) {
          fleetPics[i].classList.add('rotateLeft')
          fleetPics[i].classList.remove('rotateRight')
        }
      }
      if(direction=="stop") {
        for(let i=0 ; i < fleetPics.length ; i++) {
          fleetPics[i].classList.remove('rotateLeft')
          fleetPics[i].classList.remove('rotateRight')
        }
      }
    }
  }
}

// все свайперы с ползунком
if(document.querySelectorAll('.slider-range').length) {
  let swipers = document.querySelectorAll('.slider-range')
  for(let i=0 ; i < swipers.length ; i++) {
    sliderSwitching(swipers[i])
  }
}


let historyBlocks = document.querySelectorAll('[history-data]') //блоки с датой и фото
let historyPreview = document.querySelector('.history__preview') //липкий блок с датой и фото
let activehistoryBlock
let containerHistory = document.querySelector('.history__content')
let testA
let testB
let moveToHistory = 0
function changeHistoryBlock(time) {
  let topBlock
  let bottomBlock 
  let validHistoryBlocks = []
  for(let i=0 ; i < historyBlocks.length ; i++) {
    if(historyBlocks[i].classList.contains('active')) {
      activehistoryBlock = historyBlocks[i]
      testA = i 
    }
  }

  for(let i=0 ; i < historyBlocks.length ; i++) {
    topBlock = historyBlocks[i].getBoundingClientRect().y
    bottomBlock = historyBlocks[i].getBoundingClientRect().y + historyBlocks[i].clientHeight
    if(topBlock < 600) {
      validHistoryBlocks.push(historyBlocks[i])
    }
  }
  
  if(validHistoryBlocks.length !=0) {
    changerActive(historyBlocks)
    validHistoryBlocks[validHistoryBlocks.length-1].classList.add('active')

  } else {
    document.querySelectorAll('.history__list-item')[0].classList.add('active')
  }
  for(let i=0 ; i < historyBlocks.length ; i++) {
    if(historyBlocks[i].classList.contains('active'))
      testB = i 
  }
  let pic = document.querySelector('.history__list').querySelector('.active').querySelector('.hidden-pic').getAttribute('src')
  if(testB!=testA) {
    if(!time) {
      if(testB > testA) {
        moveToHistory = -testB*152
        animateHistoryBlock(moveToHistory)
      } 
      if(testB < testA){
        moveToHistory = testB*152
        animateHistoryBlock(moveToHistory)
      }
    } else {
      if(testB > testA) {
        moveToHistory = moveToHistory - 152
        animateHistoryBlock(moveToHistory)

      } 
      if(testB < testA){
        moveToHistory = moveToHistory + 152
        animateHistoryBlock(moveToHistory)
      }
    }
    let previewPic = historyPreview.querySelector('.history__preview-pic') // картинка в либпком блоке
    previewPic.querySelector('img').setAttribute('src',pic)
    previewPic.classList.add('animate')
    setTimeout(animateHistoryPic, 100);
  }
  validHistoryBlocks = [];
}
let historyDates = document.querySelectorAll('.history__preview-date-item')
function animateHistoryBlock(move) {
  for(let i=0 ; i < historyDates.length ; i++) {
    historyDates[i].style.transform = 'translateY('+move+'px)'
  }
}
function animateHistoryPic() {
  let previewPic = historyPreview.querySelector('.history__preview-pic') // картинка в либпком блоке
  previewPic.classList.remove('animate')
}
if(document.querySelectorAll('.history__preview').length) {
  changeHistoryBlock(false)
};




//history scroll orange line
let orangeLine = document.querySelector('.history__orange-line')
let topHeight = 0
if (document.querySelectorAll('.history__list').length) {
  scrollHistory()
}
function scrollHistory() {
  topHeight = orangeLine.getBoundingClientRect().y;
  if(topHeight<=400) {
    orangeLine.style.height = -topHeight + 600 + 'px'
  }
}


//about anim nav items
$(function() {
  $.each($('.nav-item-anim'), function(i, el) {
    setTimeout(function() {
      $(el).addClass("animate");
    }, 1500 + (i * 150));

  });
});

//scroll bg-map
let bgmap = document.querySelector('.translate-bg-map')
let map = document.querySelector('.geography__map')
function scrollBgMap() {
  let a = 673
  let top = map.getBoundingClientRect().y / 5 - a;
  bgmap.style.transform = 'translate(-673px,'+top+'px)'
}
if(document.querySelectorAll('.map').length) {
  scrollBgMap()
}


//scroll helicopter index page
let b = 0
let helicopterPreview = document.querySelector('.preview__helicopter')
function scrollHelicopterPreview() {
  let a = 0
  let box = helicopterPreview.getBoundingClientRect();
  let top = box.top + window.pageYOffset;
  if(helicopterPreview.classList.contains('stop-anim')) {
    let right = (helicopterPreview.getBoundingClientRect().y - top);
    if(window.innerWidth <=1199 && window.innerWidth > 991) {
      right += 300
    }
    if(window.innerWidth <=991 && window.innerWidth > 539) {
      a = '-100px'
    }
    if(window.innerWidth <=540) {
      a = '-58px'
    }
    if(window.innerWidth <=767) {
      right += 0
    }
    if(right>=b) {
      helicopterPreview.style.transform = 'translate('+-right+'px,'+a+') rotate(-14deg)'
    } else {
      helicopterPreview.style.transform = 'translate('+-right+'px,'+a+') rotate(14deg)'
    }
    b = right
  }
}
if(document.querySelectorAll('.preview__helicopter').length) {
  scrollHelicopterPreview()
}


//анимация иноки вертолета на странице services 
let animBlock = document.querySelectorAll('.services__content-item')
for(let i=0 ; i < animBlock.length ; i++) {
  animBlock[i].addEventListener("mouseover",
  function() {
    let helicopter = animBlock[i].querySelector('.services__item-helicopter')
    helicopter.classList.add('anim1')
    helicopter.classList.remove('anim2')
  })
}
for(let i=0 ; i < animBlock.length ; i++) {
  animBlock[i].addEventListener("mouseout",
  function() {
    let helicopter = animBlock[i].querySelector('.services__item-helicopter')
    helicopter.classList.remove('anim1')
    helicopter.classList.add('anim2')
  })
}
//даем блоку с вылетающим вертолетом overflow hidden после анимации
function addOverflowPreivew() {
  if(document.querySelectorAll('.preview').length) {
    let previewBlock = document.querySelector('.preview')
    previewBlock.classList.add('overflow')
    helicopterPreview.classList.add('stop-anim')
  }
}

setTimeout(addOverflowPreivew, 2000);


//покачивание гивки
function rotatePreviewHelicopter() {
  let left
  let center
  let deg = 0
  let pic = helicopterPreview.querySelector('img')
  document.onmousemove = function(event) {
    event = event || window.event; // кроссбраузерность
    left = helicopterPreview.getBoundingClientRect().x
    center = left + (helicopterPreview.clientWidth/2)
    if(center >= event.screenX) {
      deg = 8
    } else {
      deg = -8
    }
    pic.style.transform = 'rotate('+-deg+'deg)'
  }
}
if(document.querySelectorAll('.preview__helicopter').length) {
  rotatePreviewHelicopter()
}

//scroll orange helicopter index page
function scrollHelicopterOrange() {
  let orangeHelicopter = document.querySelector('.knowledge__col_orange-helicopter')
  let container = document.querySelector('.knowledge')
  let containerTop = container.getBoundingClientRect().y
  let orangeBlock = document.querySelector('.knowledge__block_orange')
  let orangeBlockTop = orangeBlock.getBoundingClientRect().y - orangeBlock.clientHeight
  let box = orangeHelicopter.getBoundingClientRect();
  let top = box.top + window.pageYOffset;
  let stopHeight = 470
  if(innerWidth >=992) {
    orangeHelicopter.style.transform = 'translate(0px,0px)'
    if(containerTop<350 && (orangeBlock.getBoundingClientRect().y + orangeBlock.clientHeight/2)>= +500) {
      orangeHelicopter.style.top = -containerTop + 500 +'px'
    }
    //anim1
    if(containerTop<350) {
      orangeHelicopter.classList.add('anim1')
    } else {
      orangeHelicopter.classList.remove('anim1')
    }
    //anim2
    if(orangeBlockTop<= stopHeight) {
      orangeHelicopter.classList.add('anim2')
    } else {
      orangeHelicopter.classList.remove('anim2')
    }
  } else {
      let right = -orangeHelicopter.getBoundingClientRect().y + 150
      orangeHelicopter.style.transform = 'translate('+-right+'px,0px)'
  }

}
if(document.querySelectorAll('.knowledge__col_orange-helicopter').length) {
  scrollHelicopterOrange()
  // если экран ниже блока
  let orangeHelicopter = document.querySelector('.knowledge__col_orange-helicopter')
  let container = document.querySelector('.knowledge')
  let containerTop = container.getBoundingClientRect().y
  let orangeBlock = document.querySelector('.knowledge__block_orange')
  let orangeBlockTop = orangeBlock.getBoundingClientRect().y - orangeBlock.clientHeight
  let box = orangeHelicopter.getBoundingClientRect();
  let top = box.top + window.pageYOffset;
  if(containerTop + container.clientHeight < 1000) {
    orangeHelicopter.style.top = -(containerTop -  (orangeBlock.getBoundingClientRect().y + orangeBlock.clientHeight/2) -50) + 'px'
    orangeHelicopter.classList.add('anim1')
    orangeHelicopter.classList.add('anim2')
  }
}

let mediacenterNav = document.querySelectorAll('.mediacenter__nav-item')
let mediacenterBlocks = document.querySelectorAll('.mediacenter__content-list')
for (let anchor of mediacenterNav) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')

    let toBlock = document.getElementById(blockID)
    changerActive(mediacenterNav)
    changerActive(mediacenterBlocks)
    toBlock.classList.add('active')
    anchor.classList.add('active')
  })
}

//hiddent hand touch page services
if(document.querySelectorAll('.services__nav-list').length) {
  let handList = document.querySelector('.services__nav-list')
  handList.addEventListener('click', function () {
    handList.classList.add('hand-hidden')
  })
  handList.addEventListener('touchstart', function () {
    handList.classList.add('hand-hidden')
  })
}



//scroll helicopter cloud index page
let knowledgeCloud = document.querySelector('.knowledge-cloud')
function scrollKnowledgeCloud() {
  let right = knowledgeCloud.getBoundingClientRect().y/5
  knowledgeCloud.style.transform = 'translate('+-right+'0px)'
}
if(document.querySelectorAll('.knowledge-cloud').length) {
  scrollKnowledgeCloud()
}

function changePlaceholder() {
  let contacts = document.querySelectorAll('.contacts-input')
  let type = document.querySelectorAll('.form-input_type')
  if(innerWidth<=767) {
    for(let i=0 ; i < contacts.length ; i++) {
      contacts[i].placeholder = 'Контакты для связи *'
    }
  } else {
    for(let i=0 ; i < contacts.length ; i++) {
      contacts[i].placeholder = 'Контакты для связи (телефон или электронная почта) *'
    }
  }
  if(innerWidth<=767) {
    for(let i=0 ; i < contacts.length ; i++) {
      type[i].placeholder = 'Вид авиационных услуг *'
    }
  } else {
    for(let i=0 ; i < contacts.length ; i++) {
      type[i].placeholder = 'Выберите вид авиационных услуг *'
    }
  }
}
changePlaceholder()

// animation lines
const animItems = document.querySelectorAll('.anim-line')

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index <animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if(!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active')
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTol;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll()
}

//анимация счетчика 
let  time = 5,
cc = 1;
function counterNumbers() {

  $('.counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 500) {
      if (cc < 2) {
        $(".number-anim").addClass("viz");
        $('.number-anim').each(function() {
          let
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {

              console.log(step)
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              if(step<1) {
                i = i + 14;
              } else {
                i++;
              }
              if(i===14995) {
                i = i+5
              }
            }, step);
        });
      }
    }
  });
}
counterNumbers()

try {

} catch(err) {
  
}
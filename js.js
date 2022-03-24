const engBtn = document.querySelector('.eng');
const ruBtn = document.querySelector('.ru');
const gitBtn =document.querySelector('.git-hub');
const api1Btn = document.querySelector('.api1');
const api2Btn = document.querySelector('.api2');
const body = document.querySelector('body');
const arrow = document.querySelectorAll('.slider-icon');
const slideNext = document.querySelector('.slide-next ');
const slidePrev = document.querySelector('.slide-prev ');
const time = document.querySelector('.time');
const dataTag = document.querySelector('.date');
const greating = document.querySelector('.greeting');
const greetingContainer = document.querySelector('.greeting-container ')
const nameTag = document.querySelector('.name');
const timeBtn = document.querySelector('#time');
const dataBtn = document.querySelector('#date');
const greetingBtn = document.querySelector('#greeting');
const quoteBtn = document.querySelector('#quote');
const weatherBtn = document.querySelector('#weather');
const playerBtn = document.querySelector('#player');
const quote = document.querySelector('.quote');
const quoteContainer = document.querySelector('.quote-container')
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const weatherContainer = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const errorBlock = document.querySelector('.weather-error');
let cityTag = document.querySelector('.city');
const playerContainer = document.querySelector('.player')
const playPrevBtn = document.querySelector('.play-prev');
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playListTag = document.querySelector('.play-list');
const progressAudio = document.querySelector('.progress-audio');
const progressVolume = document.querySelector('.progress-volume');
const volumeBtn = document.querySelector('.volume');
const progress = document.querySelectorAll('.progress');
const audioTitle = document.querySelector('.audio-title');
const settings = document.querySelector('.settings');
const labels=document.querySelectorAll('label');
const burger = document.querySelector('.burger');


let language ='en' 
const state = {
  photoSource: 'github'
}

function changeNameInput(){
  if(language ==='ru'){
    labels.forEach(label=>{
      if( label.textContent === 'time'){
        label.textContent='время' 
      }else if(label.textContent === 'date'){
        label.textContent ='дата'
      }else if(label.textContent === 'greeting'){
        label.textContent='приветсвие'
      } else if(label.textContent === 'quote'){
        label.textContent='цитаты'
      } else if(label.textContent === 'weather'){
        label.textContent ='погода'
      } else if(label.textContent === 'player'){
        label.textContent ='аудио плеер'
      }
    })
  }
  if(language==='en'){
    labels.forEach(label=>{
      if( label.textContent === 'время'){
        label.textContent='time' 
      }else if(label.textContent === 'дата'){
        label.textContent ='date'
      }else if(label.textContent === 'приветсвие'){
        label.textContent='greeting'
      } else if(label.textContent === 'цитаты'){
        label.textContent='quote'
      } else if(label.textContent === 'погода'){
        label.textContent ='weather'
      } else if(label.textContent === 'аудио плеер'){
        label.textContent ='player'
      }
    })
  }
}
changeNameInput()
let checkedTime = true;
timeBtn.addEventListener('change', (e)=>{
 checkedTime = e.target.checked;
 if(checkedTime === false){
   time.classList.add('hidden');
 }else{
  time.classList.remove('hidden');
 }
});

let checkedData = true;
dataBtn.addEventListener('change', (e)=>{
  checkedData = e.target.checked;
  if(checkedData === false){
    dataTag.classList.add('hidden');
  }else{
    dataTag.classList.remove('hidden');
  }
 });

 let checkedGreeting = true;
 greetingBtn.addEventListener('change', (e)=>{
   checkedGreeting = e.target.checked;
   if(checkedGreeting === false){
    greetingContainer.classList.add('hidden');
   }else{
    greetingContainer.classList.remove('hidden');
   }
  });

  let checkedQuote = true;
 quoteBtn.addEventListener('change', (e)=>{
   checkedQuote = e.target.checked;
   if(checkedQuote === false){
    quoteContainer.classList.add('hidden');
    changeQuote.classList.add('hidden');
   }else{
    quoteContainer.classList.remove('hidden');
    changeQuote.classList.remove('hidden');
   }
  });

  let checkedWether = true;
  weatherBtn.addEventListener('change', (e)=>{
    checkedWether = e.target.checked;
    if(checkedWether === false){
     weatherContainer.classList.add('hidden');
    }else{
     weatherContainer.classList.remove('hidden');
    }
  });

  let checkedPlayer = true;
  playerBtn.addEventListener('change', (e)=>{
    checkedPlayer = e.target.checked;
    if(checkedPlayer === false){
     playerContainer.classList.add('hidden');
    }else{
     playerContainer.classList.remove('hidden');
    }
  });


//switching Api
gitBtn.addEventListener('click', ()=>{
  state.photoSource ='github'
  getGitHubApi()
});
api1Btn.addEventListener('click', ()=>{
  state.photoSource = 'apiUnsplash'
  getUnplashApi()
});
api2Btn.addEventListener('click', ()=>{
  state.photoSource='apiFlickr'
  getFlickerApi()
});

if(state.photoSource === 'github'){
  getGitHubApi()
}
if(state.photoSource === 'apiUnsplash'){
  getUnplashApi()
}
if(state.photoSource === 'apiFlickr'){
  getFlickerApi()
}


// time
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime
    setTimeout(showTime, 1000);
    showDate();
    getTimeOfDay();
  }
  showTime();

function showDate() {
    const date = new Date();
    const dayEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayRussin = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const monthsEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthRus = ['Января' , 'Февраля' , 'Марта' , 'Апреля' , 'Мая' , 'Июня' , 'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря'];
    let day
    let month
    if(language ==='en'){
        day = dayEnglish[date.getDay()]
        month = monthsEng[date.getMonth()]
    } else if(language ==='ru') {
      day = dayRussin[date.getDay()]
       month = monthRus[date.getMonth()]
    }
    const dayNumber = date.getDate();
    let currentDay = `${day}, ${month} ${dayNumber}`;
    language==='ru' ? currentDay = `${dayNumber} ${month}, ${day}` : currentDay;  
    dataTag.textContent= currentDay;   
}
  
function getTimeOfDay(){
    const date = new Date();
    const hours = date.getHours()
    let message = ''
    if (hours >= 0 && hours < 6) {
       language ==='ru' ?  message = 'Доброй ночи': message = 'Good night';
      }
    if (hours >= 6 && hours < 12) {
       language === 'ru'? message='Доброе утро' : message = 'Good morning';
      }
    if (hours >= 12 && hours < 18) {
       language==='ru' ? message='Добрый день' :  message = 'Good day';
      }
     if(hours >= 18 && hours < 24) {
       language==='ru'? message='Добрый вечер': message = 'Good evening';
      }
      greating.textContent = message 
}

if(localStorage.getItem('name')){
    nameValue = JSON.parse(localStorage.getItem('name')); 
    nameTag.value = nameValue 
}else{
 language==='ru' ? nameTag.placeholder="[ваше имя]" : nameTag.placeholder = "[Enter Name]"
}

nameTag.addEventListener('change', (e)=>{
    let nameValue = ''
    nameValue = e.target.value
   nameTag.textContent = nameValue
   localStorage.setItem("name", JSON.stringify(nameValue))
})


//imgSlider Github
function getGitHubApi(){
  let currentTimeOfDay = ''
  const getCurrentTimeOfDay = ()=>{
    const date = new Date();
    const hours = date.getHours()
      if (hours >= 6 && hours < 12 ) currentTimeOfDay = 'morning';
      if (hours >= 12 && hours < 18 ) currentTimeOfDay = 'afternoon';
      if (hours >= 18 && hours < 24 ) currentTimeOfDay = 'evening';
      if (hours >= 0 && hours < 6 ) currentTimeOfDay = 'night';
  };
  getCurrentTimeOfDay()
  const minSliderIndex = 1;
  const maxSliderIndex = 20;
  let randomSlideIndex = Math.floor(Math.random() * (maxSliderIndex-minSliderIndex) + minSliderIndex);

  function setBg() {  
   const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${currentTimeOfDay}/${randomSlideIndex < 10 ? `0${randomSlideIndex}` : randomSlideIndex}.jpg`;
      img.onload = () => {      
      body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${currentTimeOfDay}/${randomSlideIndex < 10 ? `0${randomSlideIndex}` : randomSlideIndex}.jpg)`;
    }; 
  }

  slidePrev.addEventListener('click', () => {
    if(state.photoSource==='github'){
      randomSlideIndex = randomSlideIndex - 1;
      if (randomSlideIndex < minSliderIndex){
        randomSlideIndex = maxSliderIndex; 
      } 
      setBg();
    }
  })

  slideNext.addEventListener('click', () => {
    if(state.photoSource==='github'){ 
      randomSlideIndex = randomSlideIndex + 1; 
      if (randomSlideIndex > maxSliderIndex) {
        randomSlideIndex = minSliderIndex;
      }
    setBg();
    }
  })
  setBg()
}


// imgSlider Unsplash API
function getUnplashApi(){
  let currentTimeOfDay = ''
  let imageSrc =''
  const getCurrentTimeOfDay = ()=>{
    const date = new Date();
    const hours = date.getHours()
      if (hours >= 6 && hours < 12 ) currentTimeOfDay = 'morning';
      if (hours >= 12 && hours < 18 ) currentTimeOfDay = 'afternoon';
      if (hours >= 18 && hours < 24 ) currentTimeOfDay = 'evening';
      if (hours >= 0 && hours < 6 ) currentTimeOfDay = 'night';
  };
  getCurrentTimeOfDay()
  if(currentTimeOfDay ==='afternoon'){
    imageSrc = `url(https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjc5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzQ4MjYxMjI&ixlib=rb-1.2.1&q=80&w=1080)`;
  }else if(currentTimeOfDay === 'evening'){
    imageSrc = `url(https://images.unsplash.com/photo-1500964757637-c85e8a162699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjc5NzZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzQ5MjUzMjI&ixlib=rb-1.2.1&q=80&w=1080)`
  }else if(currentTimeOfDay ==='night'){

  }else if(currentTimeOfDay ==='morning'){

  }
 
  async function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature,${currentTimeOfDay}&client_id=sRattzc6jAzXBw5zP85KGsul2mibPsBSzJMcyAM51Y8`;
    try{
        const response = await fetch(url)  
        const json =  await response.json() 
        const data = json.urls.regular
        imageSrc =`url(${data})`
        console.log(imageSrc)
      } catch(e){
        console.log(e.name)
    }  
  }

  function setBg(src){
    body.style.backgroundImage=src
  }  

  slideNext.addEventListener('click', ()=>{
    if(state.photoSource==='apiUnsplash'){
      getLinkToImage()
      setBg(imageSrc)
    }  
  })

  slidePrev.addEventListener('click', ()=>{
    if(state.photoSource==='apiUnsplash'){
      getLinkToImage()
      setBg(imageSrc)
    }
  })
  setBg(imageSrc)
}


//Flickr API
function getFlickerApi (){
  let currentTimeOfDay = ''
  let imageSrc = ''
  const getCurrentTimeOfDay = ()=>{
    const date = new Date();
    const hours = date.getHours()
      if (hours >= 6 && hours < 12 ) currentTimeOfDay = 'morning';
      if (hours >= 12 && hours < 18 ) currentTimeOfDay = 'afternoon';
      if (hours >= 18 && hours < 24 ) currentTimeOfDay = 'evening';
      if (hours >= 0 && hours < 6 ) currentTimeOfDay = 'night';
  };
  getCurrentTimeOfDay()

  if(currentTimeOfDay==='afternoon'){
    imageSrc='url(https://live.staticflickr.com/65535/51614260888_409692ce13_b.jpg)'
  } else if(currentTimeOfDay ==='evening'){
    imageSrc='url(https://live.staticflickr.com/65535/51618416961_9d122c381e_b.jpg)'
  }else if(currentTimeOfDay ==='night'){

  }else if(currentTimeOfDay ==='morning'){

  }
 


  async function getLinkToImage() {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b9579d525ad5afe02ba47eb2ad89a90e&tags=nature,${currentTimeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    try{
        const response = await fetch(url) 
        
        const json =  await response.json() 
        
        i = Math.floor(Math.random() * (100-1) + 1)
        const data = json.photos.photo[i].url_l
       
       imageSrc =`url(${data})` 
       console.log(imageSrc)
    } catch(e){
        console.log(e)
    }  
  }

  function setBg(src){
    body.style.backgroundImage=src
  }  
  slideNext.addEventListener('click', ()=>{
    if(state.photoSource === 'apiFlickr'){
      getLinkToImage()
      setBg(imageSrc)
    }
  })

  slidePrev.addEventListener('click', ()=>{
    if(state.photoSource === 'apiFlickr'){
      getLinkToImage()
      setBg(imageSrc)
    }
  })
  setBg(imageSrc);
}


// quotes
const getQuotes = async () => {
  let response
  if(language === 'ru'){
         response = await fetch ('data.json')
  }if(language ==='en'){
    response = await fetch ('dataEng.json')
  }

  const quotes = await response.json();
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  let index = quotes.findIndex(i => i=== random);
  quote.textContent = `“${random.text}”`;
  quote.style.transition = '2s'
  author.textContent = random.author;
};

let rotateDeg = 0
const switchQuote =()=>{
    rotateDeg += 180;
    changeQuote.style.transform = `rotate(${rotateDeg}deg)`;
    changeQuote.style.transition = '2s';
    getQuotes();  
}
changeQuote.addEventListener('click', switchQuote)
window.addEventListener('load', getQuotes)


// Weather
async function getWeather(city='Minsk') {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=417cc88adbc0a177ddc5af01986db8d6&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
    if (res.status == 200) {
        addWeather();
        errorBlock.textContent = ``;
    } else if (res.status == 404) {
        errorBlock.textContent = `Error! City not found for "${city}"`;
        clearWeather();
    } else if(res.status == 400) {
        errorBlock.textContent = `Error! Nothing to geocode for`;
        clearWeather();
    } else errorBlock.textContent = ``;

    function clearWeather() {
        weatherIcon.className = '';
        temperature.textContent = ``;
        weatherDescription.textContent = '';
        wind.textContent = ``;
        humidity.textContent = ``;
    }

    function addWeather() {
      if(localStorage.getItem('city')){
        cityValue = JSON.parse(localStorage.getItem('city')); 
        cityTag.value = cityValue 
      } else {
        language === 'ru' ? cityTag.placeholder ="Минск [ваш город]" : cityTag.placeholder="Minsk [Enter city]"
      }
        weatherIcon.style.display = 'block';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`, 'weather-icon', 'owf');
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        if(language==='en'){
          wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
          humidity.textContent = `Humidity: ${data.main.humidity}%`;
        }
        if(language==='ru'){
          wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} m/s`;
          humidity.textContent = `Влажность: ${data.main.humidity}%`;
        }
    }
}

window.onload = () => {
  getWeather();
}

cityTag.addEventListener('change', (e)=>{
  let cityValue = ''
  cityValue = e.target.value
  cityTag.textContent = cityValue
  localStorage.setItem("city", JSON.stringify(cityValue))
  getWeather(cityValue)
})


function changePlaceholder(){
  language === 'ru' ? cityTag.placeholder ="Минск[ваш город]" : cityTag.placeholder="Minsk [Enter city]" ;
  language ==='ru' ? nameTag.placeholder="[ваше имя]" : nameTag.placeholder = "[Enter Name]"
}


// audio player
const playList = [
  {     
    title: "Aqua Caelestis",
    src: "./assets/sounds/assets_sounds_Aqua Caelestis.mp3",
  },  
  {      
    title: "Ennio Morricone",
    src: "./assets/sounds/assets_sounds_Ennio Morricone.mp3",
  },
  {
  title: "River Flows In You",
  src: "./assets/sounds/assets_sounds_River Flows In You.mp3",
  },
  {
  title: "Summer Wind",
  src: "./assets/sounds/assets_sounds_Summer Wind.mp3",
  },
]
  const audio = new Audio();

  let isPlay = false;
  let playNum = 0;

  function createElement(el, i) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.setAttribute('data-num', i)
    li.textContent = el.title;
    playListTag.append(li);
  }

  playList.forEach((el, i) => {
    createElement(el, i);
    setSource(i);
  });

  function playAudio() {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    setTimeout(()=>{
    audioTitle.textContent = playList[playNum].title 
    audioTitle.style.opacity = 0.8
    }, 300)
    setInterval(updateProgressValue, 500)
  }

  function pauseAudio() {
    audio.pause();
    isPlay = false;
  }

  function toggleAudio(n) {
    setSource(n);
    isPlay ? pauseAudio() : playAudio();
    toggleBtnClass()
    changeActiveClassVideo()
  
  }

  function playCurrentAudio(n) {
    setSource(n);
    playAudio();
    playBtn.classList.add('pause');
    changeActiveClassVideo()
    
  }

  function toggleBtnClass() {
    playBtn.classList.toggle('pause');
  }

  function changeActiveClassVideo() {
    playItems.forEach((el, i) => {
      el.classList.remove('item-active');
      el.classList.remove('clicked');   
      if (isPlay) {
        if (i === playNum) {
          el.classList.add('item-active'); 
          el.classList.add('clicked')
        }
      }
    })
  }

  function playItem(el) {
    playNum = +el.dataset.num;
  
    if (!el.classList.contains('clicked')) {
      playCurrentAudio(playNum);
    } else {
      toggleAudio(playNum);
    }
  
    playItems.forEach(item => item.classList.remove('clicked'))
    el.classList.add('clicked');
  }
  
  function playPrev() {
    playNum--;
    if (playNum < 0) playNum = playList.length - 1;
    playCurrentAudio(playNum);
  }
  
  function playNext() {
    playNum++;
    if (playNum > playList.length - 1) playNum = 0;
    playCurrentAudio(playNum);
  }
   
  function setSource(n) {
    audio.src = playList[n].src;
  }
  
  const playItems = document.querySelectorAll('.play-item');
  const btnItems = document.querySelectorAll('.btn-item')
  playPrevBtn.addEventListener('click', playPrev);
  playNextBtn.addEventListener('click', playNext);
  playBtn.addEventListener('click', () => toggleAudio(playNum));
  audio.addEventListener('ended', () => {
    if (isPlay) {
      playNext()
    }
  });
  playItems.forEach(el => {
    el.addEventListener('click', () => playItem(el))
  });
  let volumeValue = 40 ;
  progressVolume.value = volumeValue;

  function audioVolume(){
    if (progressVolume.value === 0) {
      audio.volume = 0;
    }
    audio.volume = progressVolume.value / 100;  
  }
  audio.addEventListener('timeupdate', audioVolume);

  progressVolume.addEventListener('input', function(){
    const value = this.value
    this.style.background = `linear-gradient(to right, #C5B358 0%, #C5B358 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    if(value==0){
      volumeBtn.classList.add('mute')
      volumeBtn.classList.remove('volume')
    } else{
      volumeBtn.classList.add('volume')
      volumeBtn.classList.remove('mute') 
    }
  })
  
  function audioMute() {
  
    if (progressVolume.value > 0) {
      volumeValue = progressVolume.value;
      volumeBtn.classList.add('mute')
      volumeBtn.classList.remove('volume')
      progressVolume.value=0
      progressVolume.style.background = `linear-gradient(to right, #C5B358 0%, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 100%)`
      progressVolume.transition = '0.25s ease-in-out'
      
    } else if(progressVolume.value == 0 && volumeValue > 0){
      volumeBtn.classList.remove('mute');
      volumeBtn.classList.add('volume'); 
      progressVolume.value = volumeValue;
      progressVolume.style.background = `linear-gradient(to right, #C5B358 0%, #C5B358  ${volumeValue}%, #C4C4C4 ${volumeValue}%, #C4C4C4 100%)`  
    } else{
      volumeValue = 40;
      volumeBtn.classList.remove('mute'); 
      volumeBtn.classList.add('volume');
      progressVolume.value = volumeValue;
      progressVolume.style.background = `linear-gradient(to right, #C5B358 0%, #C5B358 ${volumeValue}%, #C4C4C4 ${volumeValue}%, #C4C4C4 100%)`  
    }
  }
  volumeBtn.addEventListener('click', audioMute);

  function audioPprogress() {
    
    const audioValue= (audio.currentTime / audio.duration) * 100;
    progressAudio.value=audioValue
    progressAudio.style.background = `linear-gradient(to right, #c5b358 0%, #c5b358 ${audioValue}%, #C4C4C4 ${audioValue}%, #C4C4C4)`;
    if (audio.ended) {
        audio.currentTime = 0;
    }
};

function changeProgressBar(e) {
  const time = (e.offsetX / progressAudio.offsetWidth) * audio.duration
  audio.currentTime = time;
    if (audio.ended) {
        audio.currentTime = 0;
    }
};

function updateProgressValue() {
  document.querySelector('.current-time').innerHTML = (formatTime(Math.floor(audio.currentTime)));
  if (document.querySelector('.duration-time').innerHTML === "NaN:NaN") {
      document.querySelector('.duration-time').innerHTML = "0:00";
  } else {
      document.querySelector('.duration-time').innerHTML = (formatTime(Math.floor(audio.duration)));
  }
};
function formatTime(seconds) {
  let min = Math.floor((seconds / 60));
  let sec = Math.floor(seconds - (min * 60));
  if (sec < 10){ 
      sec  = `0${sec}`;
  };
  return `${min}:${sec}`;
};


progressAudio.addEventListener('click', changeProgressBar);
audio.addEventListener('timeupdate', audioPprogress);


//change language
ruBtn.addEventListener('click', ()=>{
  language = 'ru'
  getQuotes()
  getWeather()
  changePlaceholder()
  changeNameInput()
})

engBtn.addEventListener('click', ()=>{
  language = 'en'
  getQuotes()
  getWeather()
  changePlaceholder()
  changeNameInput()
})

//settings



burger.addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active')
  settings.classList.toggle('animate')
})




'use strict'

/*= {
  "кот": "cat",
  "объект": "object",
  "форма": "form",
  "код": "code"
}*/
let requestURL = 'vocabulary.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
  var myVocabularyText = request.response; // get the string from the response
  console.log(myVocabularyText)
  var myVocabulary1 = JSON.parse(myVocabularyText); // convert it to an object
  console.log(myVocabulary1+"ddd")
}
const myVocabulary = 'myVocabulary1'
const myKeys = Object.keys(myVocabulary)
const ruAns = 'word not found'
const engAns = 'слово не найдено'
let trCount = 0
const ruButton = document.getElementById('ru')
const engButton = document.getElementById('eng')
const engField = document.getElementById('engtext')
const ruField = document.getElementById('rutext')
const addButton = document.getElementById('addword')
const newRuWord = document.getElementById('ruinp')
const newEngWord = document.getElementById('enginp')
const myVocCount = document.getElementById('statvar')
const myTransCount = document.getElementById('statcol')
const myTime = document.getElementById('stattime')

function ruToEng (text) {
  let ans = ruAns
  for (let key in myVocabulary) {
    if (text === key) {
      ans = myVocabulary[key]
      break
    }
  }
  return ans
}

function engToRu (text) {
  let ans = engAns
  for (let i = 0; i < myKeys.length; i++) {
    if (myVocabulary[myKeys[i]] === text) {
      ans = myKeys[i]
      break
    }
  }
  return ans
}
function addNewWord (key1,
  text2) {
  const keyUsed = ruToEng(key1)
  const textUsed = engToRu(text2)
  if (key1 !== '' && text2 !== '') {
    // не портить существующее
    if (keyUsed === ruAns && textUsed === engAns) {
      myVocabulary[key1] = text2
      myKeys.push(key1)
    } else {
      alert('Слово уже добавлено в словарь!!!')
    }
  } else {
    alert('Вы не ввели одно из слов!!!')
  }
  console.log(ocabulary, myKeys)
}

engButton.onclick = function () {
  engField.value = ruToEng(ruField.value)
  engField.classList.add('activeText')
  ruField.classList.remove('activeText')
  setVocabularyCount()
  setTranslationCount()
  setTime()
}

ruButton.onclick = function () {
  ruField.value = engToRu(engField.value)
  ruField.classList.add('activeText')
  engField.classList.remove('activeText')
  setVocabularyCount()
  setTranslationCount()
  setTime()
}
addButton.onclick = function () {
  addNewWord(newRuWord.value.replace(/[\s]+/g, ''),
    newEngWord.value.replace(/[\s]+/g, ''))
  setVocabularyCount()
  // setTranslationCount()
  setTime()
}

function setVocabularyCount () {
  myVocCount.innerHTML = myKeys.length
}
function setTranslationCount () {
  myTransCount.innerHTML = ++trCount
}
function setTime () {
  const timeNow = new Date().toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
  myTime.innerHTML = timeNow.replace(' г.', '')
}

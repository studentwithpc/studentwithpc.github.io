'use strict'

const vocabulary = {
  'кот': 'cat',
  'объект': 'object',
  'форма': 'form',
  'код': 'code'
// ... end demo
}
const myKeys = Object.keys(vocabulary)
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
  for (let key in vocabulary) {
    if (text === key) {
      ans = vocabulary[key]
      break
    }
  }
  return ans
}

function engToRu (text) {
  let ans = engAns
  for (let i = 0; i < myKeys.length; i++) {
    if (vocabulary[myKeys[i]] === text) {
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
      vocabulary[key1] = text2
      myKeys.push(key1)
    } else {
      alert('Слово уже добавлено в словарь!!!')
    }
  } else {
    alert('Вы не ввели одно из слов!!!')
  }
  console.log(vocabulary, myKeys)
}

engButton.onclick = function () {
  engField.value = ruToEng(ruField.value)
  engField.style.border = '2px solid blue'
  ruField.style.border = '1px solid black'
  setVocabularyCount()
  setTranslationCount()
  setTime()
}

ruButton.onclick = function () {
  ruField.value = engToRu(engField.value)
  ruField.style.border = '2px solid blue'
  engField.style.border = '1px solid black'
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
  myTime.innerHTML = new Date()
}

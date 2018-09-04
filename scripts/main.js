'use strict'

const vocabulary = {
  'кот': 'cat',
  'объект': 'object',
  'форма': 'form',
  'код': 'code'
// ... end demo
}
const mykeys = Object.keys(vocabulary)
let trcount = 0
let ruButton = document.getElementById('ru')
let engButton = document.getElementById('eng')
let engField = document.getElementById('engtext')
let ruField = document.getElementById('rutext')
let addButton = document.getElementById('addword')
let newRuWord = document.getElementById('ruinp')
let newEngWord = document.getElementById('enginp')
let myVocCount = document.getElementById('statvar')
let myTransCount = document.getElementById('statcol')
let myTime = document.getElementById('stattime')

function RuToEngF (text) {
  let ans = 'word not found'
  for (let key in vocabulary) {
    if (text === key) {
      ans = vocabulary[key]
    }
  }
  return ans
}

function EngToRuF (text) {
  let ans = 'слово не найдено'
  for (let i = 0; i < mykeys.length; i++) {
    if (vocabulary[mykeys[i]] === text) {
      ans = mykeys[i]
    }
  }
  return ans
}
function AddNewWord (key1,
  text2) {
  let keyUsed = RuToEngF(key1)
  let textUsed = EngToRuF(text2)
  if (key1 !== '' && text2 !== '') {
    // не портить существующее
    if (keyUsed === 'word not found' && textUsed === 'слово не найдено') {
      vocabulary[key1] = text2
      mykeys.push(key1)
    } else {
      alert('Слово уже добавлено в словарь!!!')
    }
  } else {
    alert('Вы не ввели одно из слов!!!')
  }
  console.log(vocabulary, mykeys)
}

engButton.onclick = function () {
  engField.value = RuToEngF(ruField.value)
  engField.style.border = '2px solid blue'
  ruField.style.border = '1px solid black'
  SetVocabularyCount()
  SetTranslationCount()
  SetTime()
}

ruButton.onclick = function () {
  ruField.value = EngToRuF(engField.value)
  ruField.style.border = '2px solid blue'
  engField.style.border = '1px solid black'
  SetVocabularyCount()
  SetTranslationCount()
  SetTime()
}
addButton.onclick = function () {
  AddNewWord(newRuWord.value.replace(/[\s]+/g, ''),
    newEngWord.value.replace(/[\s]+/g, ''))
  SetVocabularyCount()
  // SetTranslationCount()
  SetTime()
}

function SetVocabularyCount () {
  let count = mykeys.length
  myVocCount.innerHTML = count
}
function SetTranslationCount () {
  trcount++
  myTransCount.innerHTML = trcount
}
function SetTime () {
  myTime.innerHTML = new Date()
}

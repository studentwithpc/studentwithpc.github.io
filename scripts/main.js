'use strict'
// не работает в IE
const vocabulary = {
  'кот': 'cat',
  'объект': 'object',
  'форма': 'form',
  'код': 'code'
// ... end demo
}
const mykeys = Object.keys(vocabulary)
let ruButton = document.getElementById('ru')
let engButton = document.getElementById('eng')
let engField = document.getElementById('engtext')
let ruField = document.getElementById('rutext')

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

engButton.onclick = function () {
  engField.value = RuToEngF(ruField.value)
  engField.style.border = '2px solid blue'
  ruField.style.border = '1px solid black'
}

ruButton.onclick = function () {
  ruField.value = EngToRuF(engField.value)
  ruField.style.border = '2px solid blue'
  engField.style.border = '1px solid black'
}

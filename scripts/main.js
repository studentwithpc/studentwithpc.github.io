
vocabulary = {"кот":"cat",
"объект":"object",
"форма":"form",
"код":"code",
// ... end demo
};
mykeys = Object.keys(vocabulary); 
var ruButton = document.getElementById('ru'),
engButton = document.getElementById('eng'),
engField = document.getElementById('engtext'),
ruField = document.getElementById('rutext');

RuToEng_f = function(text)
{ var ans = 'слово не найдено';
for(key in vocabulary)
{
	if(text === key)
	{ans = vocabulary[key];}
}
	return ans;}

EngToRu_f = function(text)
{ var ans = 'word not found';
	for(var i =0; i<mykeys.length; i++)
	{
		if(vocabulary[mykeys[i]] === text) 
		{ans = mykeys[i]}
	}
	return ans;
}

engButton.onclick = function() {
	engField.value=RuToEng_f(ruField.value);
 engField.style.border  = '2px solid blue';
	ruField.style.border  = '1px solid black';
	
}

ruButton.onclick = function() {

	ruField.value =EngToRu_f(engField.value);
	ruField.style.border  = '2px solid blue';
	engField.style.border  = '1px solid black';

}

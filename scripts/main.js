
vocabulary = {"кот":"cat",
"объект":"object",
"форма":"form",
"код":"code",
// ... end demo
};
mykeys = Object.keys(vocabulary); 
var ruButton = document.getElementById('ru'),
engButton = document.getElementById('eng');

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
	var ruKey = document.getElementById("rutext").value;
	document.getElementById("engtext").value=RuToEng_f(ruKey);

}

ruButton.onclick = function() {

	var engKey = document.getElementById("engtext").value;
	document.getElementById("rutext").value =EngToRu_f(engKey);

}
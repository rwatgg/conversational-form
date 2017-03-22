(function(){
	var script = document.createElement('script');
	script.onload = function(){
		var standardForms = document.getElementsByTagName("form");
		for(var i = 0; i < standardForms.length; i++){
			var form = standardForms[i];
			if(!form.hasAttribute("cf-form")){
				new cf.ConversationalForm({
					formEl: form,
					context: form.parentNode
				});
			}
		}
	}
	script.type = 'text/javascript';
	script.crossorigin = 'crossorigin';
	script.src = '../dist/conversational-form.min.js';
	// script.src = 'https://conversational-form-092-0iznjsw.stackpathdns.com/conversational-form.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);

	console.log('bookmarklet running. ....')
})()
(function(){

	// TODO: move logic to ConversationalForm
	var script = document.createElement('script');
	script.onload = function(){
		document.body.classList.add("cf-bookmarklet-added");
		var standardForms = document.getElementsByTagName("form");
		if(standardForms.length == 1){
			// only one added
			document.body.classList.add("cf-bookmarklet-single");
		}

		for(var i = 0; i < standardForms.length; i++){
			var form = standardForms[i];
			if(!form.hasAttribute("cf-form")){
				// make sure cf-form is not already se

				var context = form.parentNode;
				if(context.offsetWidth < 200 || context.offsetHeight < 200){
					context = document.body;
				}

				window.cf.ConversationalForm.startTheConversation({
					formEl: form,
					context: context
				});
			}
		}
	}

	script.type = 'text/javascript';
	script.crossorigin = 'crossorigin';
	
	var cache = new Date().getTime(); // <-- cache buster
	
	script.id = "conversational-form-development"; // <-- development mode

	if(window.location.href.indexOf("http://localhost:8888/rwatgg-conversational-form") !== -1){
		script.src = '../dist/conversational-form.min.js?cache='+cache;
	}else{
		script.src = 'https://rawgit.com/rwatgg/conversational-form/workshop-iam/dist/conversational-form.min.js?cache='+cache;
	}

	// script.src = 'https://conversational-form-093-0iznjsw.stackpathdns.com/conversational-form.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);

	var style = document.createElement('link');
	style.type = 'text/css';
	style.rel = "stylesheet";

	if(window.location.href.indexOf("http://localhost:8888/rwatgg-conversational-form") !== -1){
		style.href = '../dist/conversational-form.min.css?cache='+cache;
	}else{
		style.href = 'https://rawgit.com/rwatgg/conversational-form/workshop-iam/dist/conversational-form.min.css?cache='+cache;
	}

	style.appendChild(document.createTextNode(""));
	document.getElementsByTagName('head')[0].appendChild(style);
})();

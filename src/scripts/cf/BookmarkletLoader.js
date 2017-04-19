var loaderLoadJS = function(u){
	var e = document.createElement("script");
	
	e.setAttribute("language","javascript");
	e.setAttribute("type", "text/javascript");
	e.setAttribute("crossorigin", "crossorigin");
	e.setAttribute("src",u);
	document.body.appendChild(e);
};

if(window.location.href.indexOf("http://localhost:8888") !== -1){
	loaderLoadJS("../build/cf/ConversationalBookmarklet.js?cache="+String(new Date().getTime()));
}else{
	// TODO: move to cdn that can be changed.
	loaderLoadJS("https://rawgit.com/rwatgg/conversational-form/workshop-iam/dist/ConversationalBookmarklet.js?cache="+String(new Date().getTime()));
}
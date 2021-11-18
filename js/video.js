var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var slider_value = document.querySelector("#slider").value;
	var vol_ume = document.querySelector("#volume");
	vol_ume.innterHTML = (slider_value + "%");
});

document.querySelector("#pause").addEventListener("clicl", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	// tbd
});
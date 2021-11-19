var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	var volume = document.querySelector("#volume");
	console.log("Play Video");
	document.querySelector("#slider").value = 100;
	volume.innerHTML = (document.querySelector("#slider").value + "%");
	video.volume = (document.querySelector("#slider").value/100);
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	var rate = (video.playbackRate * 0.05);
	video.playbackRate -= rate;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	if (video.playbackRate >= 1) {
		var rate = (video.playbackRate * 0.05);
		video.playbackRate += rate;
	}
	else if(video.playbackRate == 0.95) {
		video.playbackRate = 1;
	}
	else if(video.playbackRate == 0.9025) {
		video.playbackRate = 0.95;
	}
	else if(video.playbackRate == 0.857375) {
		video.playbackRate = 0.9025;
	}
	else if(video.playbackRate == 0.8145075) {
		video.playbackRate = 0.857375;
	}
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		console.log("Go back to beginning");
		video.currentTime = 0;
	}
	console.log("New location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var volume = document.querySelector("#volume");
	volume.innerHTML = (this.value + "%");
	video.volume = (this.value/100);
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
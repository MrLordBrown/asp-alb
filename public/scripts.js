let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt)
    deferredPrompt.userChoice.then(function(choiceResult){

      if (choiceResult.outcome === 'accepted') {
      console.log('Your PWA has been installed');
    } else {
      console.log('User chose to not install your PWA');
    }

    deferredPrompt = null;

    });


  }
}

document.getElementById("ff").addEventListener("click", next);
document.getElementById("rw").addEventListener("click", previous);
document.getElementById("mute").addEventListener("click", muteIt);
document.getElementById("audio").addEventListener("ended", next);
document.getElementById("pause").addEventListener("click", pauseIt);
document.getElementById("unmute").addEventListener("click",muteIt);

var sound = document.getElementById("audio");

sound.onloadstart = function() {
    document.getElementById("bb").innerHtml = "Audio Loading";
    console.log("Audio Loading");
}

sound.ondurationchange = function() {
    var dur = sound.duration;
    document.getElementById("bb").innerHtml = "Length: "+dur;
    console.log(dur);
}

sound.onprogress=function() {
 document.getElementById("bb").innerHtml = "Audio Downloading";
    console.log("progress");
}

sound.oncanplay=function() {
    document.getElementById("bb").innerHtml = "Audio Ready";
    console.log("Audio Ready");
}

sound.oncanplaythrough=function() {
    document.getElementById("bb").innerHtml = "Audio Download Complete";
    console.log("done");
}
var music = document.getElementById("audio");

music.ontimeupdate = function() {
    var duration = music.duration;
    var currentTime = music.currentTime;
    var secs = Math.floor(currentTime);
    document.getElementById("prog").setAttribute("max",duration);
    document.getElementById("prog").setAttribute("value",currentTime);
    if (secs < 10) {
	document.getElementById("sub").innerHTML = "0:0"+secs;
    } else if (secs < 60) {
	document.getElementById("sub").innerHTML = "0:"+secs;
    } else {
	if (secs%60<10) {
	    document.getElementById("sub").innerHTML = Math.floor(secs/60)+":0"+Math.floor(secs%60);
	} else {
	    document.getElementById("sub").innerHTML = Math.floor(secs/60)+":"+Math.floor(secs%60);
	}
    }
    console.log(currentTime);
    return currentTime;
}
/*var bLazy = new Blazy({
    container: ".parallax",
    breakpoints: [
	{
	    width: 512,
	    src: "data-src-small"
	},
	{
	    width: 1024,
	    src: "data-src-mid"
	},
	{
	    width: 1536,
	    src: "data-src-med"for 
	}
});
*/

var items = [
    "01-Stabalize.mp3",
    "02-Asterix.mp3",
    "03-Aloha.mp3",
    "04-QueenOfTheSky.mp3",
    "05-QueenOfTheMoon.mp3",
    "06-SonOfTheEarth.mp3",
    "07-Asphalt.mp3",
    "08-GardenWitch.mp3",
    "09-AbnormalListeningBehavior.mp3"
];

var names = [
    "01 - Stabalize",
    "02 - Asterix",
    "03 - Aloha",
    "04 - Johnny Undertow Part 1: Queen of the Sky",
    "05 - Johnny Undertow Part 2: Queen of the Moon",
    "06 - Johnny Undertow Part 3: Son of the Earth",
    "07 - Asphalt",
    "08 - Garden Witch",
    "09 - Abnormal Listening Behavior"
];

/*
self.addEventListener("install", function (event) {
  console.log("[Workbox] Install Event processing");

  console.log("[Workbox] Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[Workbox] Caching pages during install");
      return cache.addAll(precacheFiles);
    })
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function (event) {
  console.log("[PWA Builder] Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) { 
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function (response) {
        // The response was found in the cache so we responde with it and update the entry

        // This is where we call the server to get the newest version of the
        // file to use the next time we show view
        event.waitUntil(
          fetch(event.request).then(function (response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function () {
        // The response was not found in the cache so we look for it on the server
        return fetch(event.request)
          .then(function (response) {
            // If request was success, add or update it in the cache
            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function (error) {
            console.log("[PWA Builder] Network request failed and no cache." + error);
          });
      }
    )
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}
*/

/*
document.getElementById("contact").addEventListener("mouseover", contact);
document.getElementById("emailCont").addEventListener("mouseout", close);
document.getElementById("copy").addEventListener("click", copy);

function contact() {
    document.getElementById("emailCont").style.display="block";
    document.getElementById("contact").style.display="none";
    document.getElementById("copy").style.display="block";
}

function close() {
    document.getElementById("emailCont").style.display="none";
    document.getElementById("contact").style.display="block";
    document.getElementById("copy").style.display="none";
}

function copy() {
    var toCopy = document.getElementById("email");;
    toCopy.select();
    document.execCommand("copy");
    alert("Email Copied to Clipboard");
}
*/
var current = 0;

var playlistPlayer = document.querySelector("#audio");
var paused;
document.getElementById("play").addEventListener("click", playIt);
document.getElementById("replay").addEventListener("click", replayIt);

function next() {
    if (current === items.length - 1) {
	current = 0;
    } else {
	current ++
    }
    playlistPlayer.src = items[current];
    playlistPlayer.play();
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("title").innerHTML = names[current];
    document.getElementById("pause").style.visibility = "visible";
    cover();
}

function cover() {
    var f = current + 1;
    document.getElementById("cover").setAttribute("src",f+".png");
}

/*function next2() {
    if (current === items.length - 1) {
	current = 0;
    } else {
	current ++
    }
    playlistPlayer.src = items[current];
    playlistPlayer.play();
    document.getElementById("nowPlaying").innerHTML = items[current];
    document.getElementById("nowPlaying").classList.remove("typewriter");
    void document.getElementById("nowPlaying").offsetWidth;
    document.getElementById("nowPlaying").classList.add("typewriter");    
    document.getElementById("playz").innerHTML = "PAUSE";
    document.getElementById("playz").style.visibility = "hidden";
    document.getElementById("pauze").style.visibility = "visible";
    jump();
};

function jump() {
    var jumpTo = items.indexOf(items[current]);
    window.location.href = "#i"+jumpTo;
}*/

function previous() {
    if (current === 0) {
	current = items.length-1;
    } else {
	current --;
    }
    playlistPlayer.src = items[current];
    playlistPlayer.play();
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("title").innerHTML = names[current];
    document.getElementById("pause").style.visibility = "visible";
    cover();
}

/*function previous2() {
    if (current === 0) {
	current = items.length-1;
    } else {
	current --;
    }
    playlistPlayer.src = items[current];
    playlistPlayer.play();
    document.getElementById("nowPlaying").innerHTML = items[current];
    document.getElementById("nowPlaying").classList.remove("typewriter");
    void document.getElementById("nowPlaying").offsetWidth;
    document.getElementById("nowPlaying").classList.add("typewriter");
    document.getElementById("playz").innerHTML = "PAUSE";
    document.getElementById("playz").style.visibility = "hidden";
    document.getElementById("pauze").style.visibility = "visible";
       jump();
};
*/
function muteIt() {
    if(playlistPlayer.muted === true) {
	playlistPlayer.muted = false;
	document.getElementById("mute").style.visibility = "visible";
	document.getElementById("unmute").style.visibility = "hidden";
 } else {
	playlistPlayer.muted = true;
	document.getElementById("mute").style.visibility = "hidden";
	document.getElementById("unmute").style.visibility = "visible";
    }
}

/*function muteIt2() {
    if(playlistPlayer.muted === true) {
	playlistPlayer.muted = false;
	document.getElementById("mutez").innerHTML = "MUTE";
    } else {
	playlistPlayer.muted = true;
	document.getElementById("mutez").innerHTML = "UNMUTE";
    }
};
*/
function playIt() {
    playlistPlayer.src = items[current];
    playlistPlayer.play();
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("title").innerHTML = names[current];
    document.getElementById("pause").style.visibility = "visible";
    cover();
}

function replayIt() {
    playlistPlayer.play();
    document.getElementById("replay").style.visibility = "hidden";
    document.getElementById("title").innerHTML = names[current];
    document.getElementById("pause").style.visibility = "visible";
    cover();
}

/*function playIt2() {
    playlistPlayer.src = items[current];
    playlistPlayer.play();
    document.getElementById("nowPlaying").innerHTML = items[current];
    document.getElementById("playz").innerHTM L = "PAUSE";
    document.getElementById("nowPlaying").classList.remove("typewriter");
    void document.getElementById("nowPlaying").offsetWidth;
    document.getElementById("nowPlaying").classList.add("typewriter"); 
    document.getElementById("playz").style.visibility = "hidden";
    document.getElementById("pauze").style.visibility = "visible";
    jump();
}
*/

function pauseIt() {
    playlistPlayer.pause();
    document.getElementById("replay").style.visibility = "visible";
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("pause").style.visibility = "hidden";
}
/*
function pauseIt2() {
    playlistPlayer.pause();
    document.getElementById("nowPlaying").classList.remove("typewriter");
    void document.getElementById("nowPlaying").offsetWidth;
    document.getElementById("nowPlaying").classList.add("typewriter");
    document.getElementById("nowPlaying").innerHTML = "PAUSED";
    document.getElementById("playz").innerHTML = "PLAY";
    document.getElementById("playz").style.visibility = "visible";
    document.getElementById("pauze").style.visibility = "hidden";
}
*/

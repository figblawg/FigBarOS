function autoplayvideo() {
    this.video = document.createElement('video');
    this.video.src = 'assets/images/index.mp4';
    this.video.loop = true;
    this.video.volume = 0.3;
    this.video.muted = false;
    this.video.autoplay = false;
    this.video.playsInline = true;
    this.video.setAttribute('id', 'background-video');
    document.body.appendChild(this.video);

    this.playing = false;
    this.started = false;

    const start = () => {
        if (!this.started) {
            this.video.play()
                .then(() => {
                    this.playing = true;
                    this.started = true;
                })
                .catch(e => {
                    console.error('Video Failed to Play:', e);
                });
        }
    };

    document.addEventListener('click', start, { once: true });
}

autoplayvideo();


function autoplaymusic() {
	this.audio = new Audio('assets/music/index.mp3');
	this.audio.loop = true;
	this.audio.volume = 0.3;
	this.playing = false;
	this.started = false;

	const startaudio = () => {
    	if (!this.started) {
        	this.audio.play()
            	.then(() => {
                	this.playing = true;
                	this.started = true;
            	})
            	.catch(e => {
                	console.error('Music Failed to Play:', e);
            	});
    	}
	};
	document.addEventListener('click', startaudio, { once: true });
}

autoplaymusic();

const content_area = document.getElementById('content-area');

function show_home() {
  content_area.innerHTML = `
    <div class="profile-section">
      <div class="profile-pic" style="background-image: url('assets/images/bdbg.png');"></div>
      <div class="tagline">Bdbg</div>
    </div>
  `;
}

function show_about() {
  content_area.innerHTML = `
    <div class="about-box">
      <p style="text-align:center;">* Bio *</p>
      <p>
          I love making edits, sleeping, and playing games.<br> My favorite food is chicken alfredo.
      </p>
      <p style="text-align:center;">* Socials *</p>
      <p>
          Youtube: @d1_jj1
      </p>
    </div>
  `;
}

show_home();

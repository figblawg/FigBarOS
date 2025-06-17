const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Bubble {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = 5 + Math.random() * 10; 
    this.speed = 0.5 + Math.random() * 1.5;
    this.opacity = 0.2 + Math.random() * 0.4;
  }

  update() {
    this.y -= this.speed;
    if (this.y < -this.size) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(173, 216, 230, ${this.opacity})`; 
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity + 0.2})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

for (let i = 0; i < 100; i++) {
  particles.push(new Bubble());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

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

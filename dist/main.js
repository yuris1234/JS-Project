!function(){"use strict";var t,s,e,i;t=class{constructor(t,s,e){this.canvasWidth=t,this.canvasHeight=s,this.pos=this.canvasWidth/2,this.velocity=0,this.keys={right:{pressed:!1},left:{pressed:!1}},this.ctx=e;let i=this.handleArrowKeyDown.bind(this),h=this.handleArrowKeyUp.bind(this);document.addEventListener("keydown",(t=>{i(t)})),document.addEventListener("keyup",(t=>{h(t)}))}draw(){let t=new Image;t.src="src/media/book.png",t.onload=()=>{this.ctx.fillStyle="beige",this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.ctx.drawImage(t,this.pos,this.canvasHeight-75,75,75)}}update(){this.draw(),this.velocity=0,this.keys.right.pressed&&this.pos<=this.canvasWidth-100?this.velocity=3:this.keys.left.pressed&&this.pos>=0&&(this.velocity=-3),this.pos+=this.velocity}handleArrowKeyDown(t){switch(t.key){case"ArrowRight":this.keys.right.pressed=!0;break;case"ArrowLeft":this.keys.left.pressed=!0}}handleArrowKeyUp(t){switch(t.key){case"ArrowRight":this.keys.right.pressed=!1;break;case"ArrowLeft":this.keys.left.pressed=!1}}},s=class{constructor(t,s,e){this.velocity=this.getRandomArbitrary(1,3),this.pos={x:this.getRandomArbitrary(10,t.width-10),y:0},this.audioCtx=e,this.ctx=s,this.canvas=t,this.appear=!0,this.collision=!1,this.beat=this.getRandomInt(1,5),this.alpha=this.getRandomAlpha(),this.sound=this.createAudio()}createAudio(){const t=new Audio;switch(t.crossOrigin="anonymous",this.alpha){case"A":t.src="src/media/a.mp3";break;case"B":t.src="src/media/b.mp3";break;case"C":t.src="src/media/c.mp3";break;case"D":t.src="src/media/d.mp3";break;case"E":t.src="src/media/e.mp3";break;case"F":t.src="src/media/f.mp3";break;case"G":t.src="src/media/g.mp3"}return this.audioCtx.createMediaElementSource(t).connect(this.audioCtx.destination),t}draw(){let t=new Image;t.src="src/media/music_note.png",t.onload=()=>{this.ctx.fillStyle="red",this.ctx.font="20px serif",this.ctx.drawImage(t,this.pos.x,this.pos.y,50,50),this.ctx.fillText(this.alpha,this.pos.x+20,this.pos.y)}}update(){this.pos.y>=this.canvas.height-50||this.collision?this.appear=!1:(this.draw(),this.pos.y+=this.velocity)}getRandomArbitrary(t,s){return Math.random()*(s-t)+t}getRandomInt(t,s){return t=Math.ceil(t),s=Math.floor(s),Math.floor(Math.random()*(s-t)+t)}getRandomAlpha(){return["A","B","C","D","E","F","G"][this.getRandomInt(0,7)]}playTone(){this.sound.play()}checkCollision(t){return this.pos.x<=t.pos+37.5&&this.pos.y>=this.canvas.height-75&&this.pos.x>=t.pos-37.5&&(this.collision=!0,this.appear=!1),this.collision}},e=class{constructor(t,s){this.canvas=t,this.ctx=s,this.sequence=[],this.pos=25}draw(){let t=new Image;t.src="src/media/music_note.png",t.onload=()=>{this.sequence.forEach((s=>{this.ctx.fillStyle="black",this.ctx.font="20px serif",this.ctx.drawImage(t,this.pos,50,50,50),this.ctx.fillText(s.alpha,this.pos+10,60),this.pos+=50}))}}update(t){this.sequence.push(t),this.pos=25,this.draw()}},i=class{constructor(s,i,h,a,n){this.bucket=new t(s.width,s.height,i),this.notes=[],this.collectedNotes=[],this.ctx=i,this.audioCtx=h,this.canvas=s,this.sequence=new e(a,n),this.requestId="",this.newNotes(),this.animate()}run(){this.animate()}newNotes(){for(let t=0;t<10;t++){let t=new s(this.canvas,this.ctx,this.audioCtx);this.notes.push(t)}}animate(){let t=!1;this.bucket.update();let e=[];if(this.notes.forEach((s=>{s.checkCollision(this.bucket)&&(s.playTone(),this.collectedNotes.push(s),this.sequence.update(s)),s.appear&&e.push(s),s.update(),10===this.collectedNotes.length&&(this.stopAnimation(),t=!0)})),!0===t)return;for(this.notes=e;this.notes.length<10;){let t=new s(this.canvas,this.ctx,this.audioCtx);this.notes.push(t)}let i=this.animate.bind(this);window.requestAnimationFrame(i)}stopAnimation(){let t=1;this.collectedNotes.forEach((s=>{setTimeout((()=>{s.playTone()}),500*t++)}))}},document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("game-canvas"),s=t.getContext("2d");t.width=window.innerWidth-window.innerWidth/3,t.height=window.innerHeight-window.innerHeight/4;const e=document.getElementById("sequence-canvas"),h=e.getContext("2d");e.width=window.innerWidth-window.innerWidth/3,e.height=window.innerHeight/5,document.addEventListener("click",(()=>{let a=new AudioContext;new i(t,s,a,e,h).run()}))}))}();
//# sourceMappingURL=main.js.map
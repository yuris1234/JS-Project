!function(){"use strict";!function(){var t=class{constructor(t,s,e){this.canvasWidth=t,this.canvasHeight=s,this.pos=this.canvasWidth/2,this.velocity=0,this.keys={right:{pressed:!1},left:{pressed:!1}},this.ctx=e;let i=this.handleArrowKeyDown.bind(this),h=this.handleArrowKeyUp.bind(this);document.addEventListener("keydown",(t=>{i(t)})),document.addEventListener("keyup",(t=>{h(t)}))}draw(){let t=new Image;t.src="src/scripts/half-sphere.png",t.onload=()=>{this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.ctx.drawImage(t,this.pos,this.canvasHeight-100,100,100)}}update(){this.draw(),this.velocity=0,this.keys.right.pressed&&this.pos<=this.canvasWidth-100?this.velocity=3:this.keys.left.pressed&&this.pos>=0&&(this.velocity=-3),this.pos+=this.velocity}handleArrowKeyDown(t){switch(t.key){case"ArrowRight":this.keys.right.pressed=!0;break;case"ArrowLeft":this.keys.left.pressed=!0}}handleArrowKeyUp(t){switch(t.key){case"ArrowRight":this.keys.right.pressed=!1;break;case"ArrowLeft":this.keys.left.pressed=!1}}};const s=[];s[0]=[],s[1]=[],s[0].C=261.6,s[0].D=277.2,s[0].E=329.6,s[0].F=349.2,s[0].G=392,s[0].A=440,s[0].B=493.9,s[1].C=523.3;var e=s,i=class{constructor(t,s,i){this.velocity=this.getRandomArbitrary(1,3),this.pos={x:this.getRandomArbitrary(100,t.width),y:0},this.audioCtx=i,this.ctx=s,this.canvas=t,this.appear=!0,this.collision=!1,this.freq=e[this.getRandomInt(0,1)][this.getRandomAlpha()]}draw(){let t=new Image;t.src="src/scripts/music_note.png",t.onload=()=>{this.ctx.drawImage(t,this.pos.x,this.pos.y,100,100)}}update(){this.pos.y>=this.canvas.height-100?(this.appear=!1,this.playTone()):(this.draw(),this.pos.y+=this.velocity)}getRandomArbitrary(t,s){return Math.random()*(s-t)+t}getRandomInt(t,s){return t=Math.ceil(t),s=Math.floor(s),Math.floor(Math.random()*(s-t)+t)}getRandomAlpha(){return["A","B","C","D","E","F","G"][this.getRandomInt(0,6)]}playTone(){const t=this.audioCtx.createOscillator();t.type="sawtooth",t.frequency.value=this.freq,t.connect(this.audioCtx.destination),t.start(),t.stop(this.audioCtx.currentTime+.1)}},h=class{constructor(s,e,i){this.bucket=new t(s.width,s.height,e),this.notes=[],this.ctx=e,this.audioCtx=i,this.canvas=s,this.newNotes(),this.animate()}run(){this.animate()}newNotes(){for(let t=0;t<10;t++){let t=new i(this.canvas,this.ctx,this.audioCtx);this.notes.push(t)}}animate(){this.bucket.update();let t=[];for(this.notes.forEach((s=>{s.appear&&t.push(s),s.checkCollision(this.bucket),s.update()})),this.notes=t;this.notes.length<10;){let t=new i(this.canvas,this.ctx,this.audioCtx);this.notes.push(t)}let s=this.animate.bind(this);window.requestAnimationFrame(s)}};document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("game-canvas"),s=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;let e="";document.addEventListener("click",(()=>{e=new AudioContext,new h(t,s,e).run()}))}))}()}();
//# sourceMappingURL=main.js.map
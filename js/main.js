$(function(){

	/*$(document).off('click.bs.dropdown.data-api');
	$(document).off('click.bs.dropdown.data-api');*/
	$(".dropdown").mouseover(function(){
		$(this).addClass("open");
	})
	$(".dropdown").mouseout(function(){
		$(this).removeClass("open");
	});
	var ul=document.getElementById("parents");
	var list=ul.getElementsByTagName("li");
		for(var i=0;i<list.length;i++){
			list[i].onclick=function(){
				alert($(this).index());//显示索引值
			}
		}
	//var c=document.getElementById("myCanvas");
	//var ctx=c.getContext("2d");
	//ctx.fillStyle="#FF0000";
	//ctx.fillRect(0,0,50,50);
	//ctx.moveTo(0,0);
	//ctx.lineTo(100,100);
	//ctx.beginPath();
	//ctx.arc(50,50,25,0,2*Math.PI)
	//ctx.stroke();
	/*var grd=ctx.createLinearGradient(0,0,100,100);
	grd.addColorStop(0,'red');
	grd.addColorStop(1,'white');

	ctx.fillStyle=grd;
	ctx.fillRect(10,10,80,80);*/
		var canvas = document.querySelector('canvas');
		var context = canvas.getContext('2d');

		var store = {};

		var Ball=function(){
			this.x = Math.random() * canvas.width;
			this.movex=0.1 *Math.random();
			this.r=  1*Math.random();
			this.y=Math.random() * canvas.height;

			this.draw=function(){
				context.beginPath();
				context.fillStyle='#fff';
				context.arc(this.x,this.y,this.r,0,2 * Math.PI);
				context.closePath();
				context.fill();
			};
		}

		for(var indexBall=0; indexBall<500; indexBall++){
			store[indexBall] = new Ball();
		}

		var draw=function(){
			for(var index in store){
				store[index].x += store[index].movex;
				if(store[index].x > canvas.width){
					store[index].x= -2 * store[index].r;
				}
				store[index].draw();
			}
		}
		var render=function(){
			//清楚画布
			context.clearRect(0,0,canvas.width,canvas.height);
			//绘制
			draw();

			//继续渲染
			requestAnimationFrame(render);

		}
		render();
})
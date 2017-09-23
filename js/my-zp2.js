
//留言发表
function ly(){
	var mg=$(".nb6-f textarea").val();
	if(mg===""){
		return false;
	}
}





$(function(){
	
	//大翻页特效
	var up="";
	var left_l=$(".bg .left p").length;
	var i=0;
	$(".bg .foot .foot-2").click(function(){
		up=setInterval(function(){
			$(window).scrollTop($(window).scrollTop()-10);
			if($(window).scrollTop()<=0){
				clearInterval(up);
			}
		},1)
		
		i++;
		if(i>=left_l){
			i=0;
		}
	    $(".bg .left p").eq(i).addClass("left-1").siblings("p").removeClass("left-1");
		$(".bg .min li").eq(i).addClass("min-1").siblings("li").removeClass("min-1");
		$(".bg .nb").eq(i).show().siblings(".nb").hide();
	})
	
	
	
	//日志翻页特效
	var y=0
	var rz_l=$(".nb2 .nb2-m .nb2-m-h div").length;
	$(".nb2 .nb2-m .nb2-m-f .a2").click(function(){
		$(".nb2 .nb2-m .nb2-m-h div").eq(y).slideUp(1000);
		if(y<rz_l-2){
			y++;
		}
	})
	$(".nb2 .nb2-m .nb2-m-f .a1").click(function(){
		$(".nb2 .nb2-m .nb2-m-h div").eq(y).slideDown(1000);
		y--;
		if(y<=0){
			y=0;
		}
	})
	
	
	//日志发表
	$(".nb2 .nb2-m .nb2-m-m img").click(function(){
		$(".nb2 .nb2-m-tx").show();
	})
	
	$(".nb2 .nb2-m-tx img").click(function(){
		$(".nb2 .nb2-m-tx").hide();
	})
	
	
	
	//相册特效
	var t=0;
	$(".nb3 .nb3-m-l p").mouseover(function(){
		$(this).addClass("tb").siblings(".nb3 .nb3-m-l p").removeClass("tb");
		   t=$(this).index()-2;
		 $(".nb3 .bn").eq(t).show().siblings(".bn").hide();
	})
	 
	  
	
	//相册大图展开
	var p="";
	var New=Array()
	$(".tpn .tpn-t img").click(function(){
		p=$(this).index();
		New=$(".nb3-tx .min").eq(t).children("img");
		$(".nb3 .nb3-m-r .nb3-tx").eq(t).show().siblings(".nb3-tx").hide();
		$(New).eq(p).show().siblings().hide();
                return New_l=$(".nb3-tx .min").eq(t).children("img").length;
	})
	
	//相册大图左右切换
	
	$(".nb3 .nb3-tx .right").click(function(){
		p++;
		if(p==New_l){
			p=0;
		}
		$(New).eq(p).show().siblings().hide();
	})
	$(".nb3 .nb3-tx .left").click(function(){
		p--;
		if(p<0){
			p=New_l;
		}
		$(New).eq(p).show().siblings().hide();
	})
	//相册大图关闭
	$(".nb3 .nb3-m-r .bn .nb3-tx .bg").click(function(){
		$(".nb3 .nb3-m-r .bn .nb3-tx").hide();
	})
	
	
	
	//访客留言翻页
	var f=0;
	var fk=$(".nb6-m .nb6-m-l .header ul").length-2;
	$(".nb6-m .nb6-m-l .footer .dw").click(function(){
		$(".nb6-m .nb6-m-l .header ul").eq(f).slideUp(1000);
		if(f<fk){
			f++;
		}
	})
	$(".nb6-m .nb6-m-l .footer .top").click(function(){
		$(".nb6-m .nb6-m-l .header ul").eq(f).slideDown(1000);
		 f--;
		if(f<0){
			f=0;
		}
	})
	
	
	
	
	
})

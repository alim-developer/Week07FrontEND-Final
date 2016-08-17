function preloader(){
	$(window).on('load', function(){
		$("#preloader").css({
			position: "fixed",
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			backgroundColor: "white",
			width: "100%"
		});
		$("#preloader div").css({
			width: "40px",
			height: "40px",
			borderTop: "3px solid #1AC6FF",
			borderRadius: "50%",
		})
		$("#preloader").fadeOut();
	});
}


function homeExtra(){
	$(".drop ul").hide();
	$(".extra").mouseenter(function(){
		$(this).css({
			backgroundColor: "#000"
			
		});
	});
	$(".extra").mouseleave(function(){
		$(this).css({
			backgroundColor: "transparent"
			
		});
	});
	$(".drop").mouseenter(function() {
		$(".drop ul").slideDown();	
	});
	$(".drop").mouseleave(function() {
		$(".drop ul").slideUp();	
	});
}
homeExtra();



function logos(){
	
	var imageArray = ['assets/images/logo-4.png', 'assets/images/logo-4.png', 'assets/images/logo-4.png', 'assets/images/logo-4.png', 'assets/images/logo-4.png'];

	for(i=0; i<5; i++){
		$("#about .logo div").append("<img>");
		$("#about .logo div img").attr("src",imageArray[i]);
		$("#about .logo div img").hide();
		
		if(i % 2==0){
			$("#about .logo div img").eq(i).fadeIn(2000);

		}
		else{
			$("#about .logo div img").eq(i).fadeOut(2000);
		}
	}
}
logos();



function tabShow(){
	$("#about .tabs button").eq(0).css({
		backgroundColor: '#1AC6FF',
		color: '#fff'
	});
	$("#about .tabs button").eq(0).click(function(){
		$(this).css({
			backgroundColor: '#1AC6FF',
			color: '#fff'
		});
		$("#about .tabs button").eq(1).css({
			backgroundColor: '',
			color: ''
		});
		$("#about .tabs button").eq(2).css({
			backgroundColor: '',
			color: ''
		});
	});
	$("#about .tabs button").eq(1).click(function(){
		$(this).css({
			backgroundColor: '#1AC6FF',
			color: '#fff'
		});
		$("#about .tabs button").eq(0).css({
			backgroundColor: '',
			color: ''
		});
		$("#about .tabs button").eq(2).css({
			backgroundColor: '',
			color: ''
		});
	});
	$("#about .tabs button").eq(2).click(function(){
		$(this).css({
			backgroundColor: '#1AC6FF',
			color: '#fff'
		});
		$("#about .tabs button").eq(0).css({
			backgroundColor: '',
			color: ''
		});
		$("#about .tabs button").eq(1).css({
			backgroundColor: '',
			color: ''
		});
	});
	$("#about .secondTab").hide();
	$("#about .thirdTab").hide();
	$("#about .tabs button").eq(0).on("click",function(){
		$("#about .firstTab").show();
		$("#about .secondTab").hide();
		$("#about .thirdTab").hide();
	});
	$("#about .tabs button").eq(1).on("click", function(){
		$("#about .firstTab").hide();
		$("#about .secondTab").show();
		$("#about .thirdTab").hide();
	});
	$("#about .tabs button").eq(2).on("click", function(){
		$("#about .firstTab").hide();
		$("#about .secondTab").hide();
		$("#about .thirdTab").show();
	});
}
tabShow();

	
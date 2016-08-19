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
	var i=0;
	var a = setInterval (function time(){
		$("#about, #pricesTwo .logo div").append("<img>");
		$("#about, #pricesTwo .logo div img").attr("src",imageArray[i]);
		//$("#about .logo div img").show();
		i++;
		 
	},2000 )

	clearInterval (a, 10000)

	// for(i=0; i<5; i++){
	// 	if(i % 2==0){
	// 		$("#about .logo div img").eq(i).show(2000);
			
	// 	}
	// 	else{
	// 		$("#about .logo div img").eq(i).hide();
	// 	}
	// }
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


function features(){
	$("#features img").eq(1).hide();
	$("#features img").eq(2).hide();
	$("#features .button").eq(0).children().css("color","#fff");

	$("#features .button").eq(0).css({
			backgroundColor: "#1AC6FF",
			cursor: "pointer"
		}).click(function(){
		$("#features img").eq(0).show();
		$("#features img").eq(1).hide();
		$("#features img").eq(2).hide();
		$("#features .button").eq(0).css("background-color", "#1AC6FF");
		$("#features .button").eq(1).css("background-color", "");
		$("#features .button").eq(2).css("background-color", "");
		$("#features .button").eq(0).children().css("color","#fff");
		$("#features .button").eq(1).children().css("color","");
		$("#features .button").eq(2).children().css("color","");
	});
	$("#features .button").eq(1).css({
			cursor: "pointer"
		}).click(function(){
		$("#features img").eq(0).hide();
		$("#features img").eq(1).show();
		$("#features img").eq(2).hide();
		$("#features .button").eq(0).css("background-color", "");
		$("#features .button").eq(1).css("background-color", "#1AC6FF");
		$("#features .button").eq(2).css("background-color", "");
		$("#features .button").eq(0).children().css("color","");
		$("#features .button").eq(1).children().css("color","#fff");
		$("#features .button").eq(2).children().css("color","");
	});
	$("#features .button").eq(2).css({
			cursor: "pointer"
		}).click(function(){
		$("#features img").eq(0).hide();
		$("#features img").eq(1).hide();
		$("#features img").eq(2).show();
		$("#features .button").eq(0).css("background-color", "");
		$("#features .button").eq(1).css("background-color", "");
		$("#features .button").eq(2).css("background-color", "#1AC6FF");
		$("#features .button").eq(0).children().css("color","");
		$("#features .button").eq(1).children().css("color","");
		$("#features .button").eq(2).children().css("color","#fff");
	});
}
features();



function profile(){
	$("#team p").eq(0).hide();
	$("#team p").eq(1).show();
	$("#team p").eq(2).hide();
	$("#profile .profilDate").eq(1).css({
		"opacity": "1"
	});
	$("#profile .profilDate h5").eq(1).css({
		color: "#1AC6FF"
	});
	$("#profile .profilDate span").eq(1).css({
		color: "#1AC6FF"
	});

	//ilkin click olunacaq butonlarin alt xetleri
	$("#profile .profilDate").eq(0).css({
		borderBottom: "1px solid #DDDDDD"
	});
	$("#profile .profilDate").eq(1).css({
		borderBottom: "1px solid #DDDDDD"
	});
	$("#profile .profilDate").eq(2).css({
		borderBottom: "1px solid #DDDDDD"
	});

	//click olunma prosesi
	$("#profile .profilDate").eq(0).click(function(){
		//Textlerin gorsenmesi ucun
		$("#team p").eq(0).show();
		$("#team p").eq(1).hide();
		$("#team p").eq(2).hide();
		//uzerlerine click edilende aktiv olmasi ucun ve icinde olan h5 ve spanin rengini deyismesi ucun
		$("#profile .profilDate").eq(0).css({
			"opacity": "1"
		});
		$("#profile .profilDate h5").eq(0).css({
			color: "#1AC6FF"
		});
		$("#profile .profilDate span").eq(0).css({
			color: "#1AC6FF"
		});

		$("#profile .profilDate").eq(1).css({
			"opacity": ""
		});
		$("#profile .profilDate h5").eq(1).css({
			color: ""
		});
		$("#profile .profilDate span").eq(1).css({
			color: ""
		});

		$("#profile .profilDate").eq(2).css({
			"opacity": ""
		});
		$("#profile .profilDate h5").eq(2).css({
			color: ""
		});
		$("#profile .profilDate span").eq(2).css({
			color: ""
		});
		//altindaki xettin aktiv olmasi ucun
		$("#profile .profilDate").eq(0).css({
			borderBottom: "1px solid #1AC6FF"
		});
		$("#profile .profilDate").eq(1).css({
			borderBottom: "1px solid #DDDDDD"
		});
		$("#profile .profilDate").eq(2).css({
			borderBottom: "1px solid #DDDDDD"
		});
	});
	$("#profile .profilDate").eq(1).click(function(){
		//Textlerin gorsenmesi ucun
		$("#team p").eq(0).hide();
		$("#team p").eq(1).show();
		$("#team p").eq(2).hide();
		//uzerlerine click edilende aktiv olmasi ucun ve icinde olan h5 ve spanin rengini deyismesi ucun
		$("#profile .profilDate").eq(0).css({
			"opacity": ""
		});
		$("#profile .profilDate h5").eq(0).css({
			color: ""
		});
		$("#profile .profilDate span").eq(0).css({
			color: ""
		});

		$("#profile .profilDate").eq(1).css({
			"opacity": "1"
		});
		$("#profile .profilDate h5").eq(1).css({
			color: "#1AC6FF"
		});
		$("#profile .profilDate span").eq(1).css({
			color: "#1AC6FF"
		});
		
		$("#profile .profilDate").eq(2).css({
			"opacity": ""
		});
		$("#profile .profilDate h5").eq(2).css({
			color: ""
		});
		$("#profile .profilDate span").eq(2).css({
			color: ""
		});
		//altindaki xettin aktiv olmasi ucun
		$("#profile .profilDate").eq(0).css({
			borderBottom: "1px solid #DDDDDD"
		});
		$("#profile .profilDate").eq(1).css({
			borderBottom: "1px solid #1AC6FF"
		});
		$("#profile .profilDate").eq(2).css({
			borderBottom: "1px solid #DDDDDD"
		});
	});
	$("#profile .profilDate").eq(2).click(function(){
		$("#team p").eq(0).hide();
		$("#team p").eq(1).hide();
		$("#team p").eq(2).show();
		$("#profile .profilDate").eq(0).css({
			"opacity": ""
		});
		$("#profile .profilDate h5").eq(0).css({
			color: ""
		});
		$("#profile .profilDate span").eq(0).css({
			color: ""
		});

		$("#profile .profilDate").eq(1).css({
			"opacity": ""
		});
		$("#profile .profilDate h5").eq(1).css({
			color: ""
		});
		$("#profile .profilDate span").eq(1).css({
			color: ""
		});
		
		$("#profile .profilDate").eq(2).css({
			"opacity": "1"
		});
		$("#profile .profilDate h5").eq(2).css({
			color: "#1AC6FF"
		});
		$("#profile .profilDate span").eq(2).css({
			color: "#1AC6FF"
		});
		//altindaki xettin aktiv olmasi ucun
		$("#profile .profilDate").eq(0).css({
			borderBottom: "1px solid #DDDDDD"
		});
		$("#profile .profilDate").eq(1).css({
			borderBottom: "1px solid #DDDDDD"
		});
		$("#profile .profilDate").eq(2).css({
			borderBottom: "1px solid #1AC6FF"
		});
	});
	//click olunma prosesi
}
profile();
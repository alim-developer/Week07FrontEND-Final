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


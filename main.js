console.log("main.js!!");


/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/



$(document).ready(()=>{
	console.log("ready");
	let zei = 0;
	$("#btn").click(()=>{
		console.log("クリックしたよ");

		const sintyou = $("#shintyou").val();
		const sintyou_int_cm = parseInt(sintyou);
		const sintyou_int = sintyou_int_cm / 100;
		const sintyou_int2 = sintyou_int ** 2;
		console.log("sintyou_int2:", sintyou_int2);

		const taiju = $("#taijuu").val();
		const taiju_int = parseInt(taiju);
		console.log("taiju_int:", taiju_int);

		const result = taiju_int / sintyou_int2;
		console.log("result:",result);
		const result2 = result * 10
		const result3 = Math.round(result2);
		const result4 = result3 / 10
		console.log("result4:",result4);

		if(result4>=40){
			$("#himando").text("肥満4度");
		}else if(result4>=35 & result4<40){
			$("#himando").text("肥満3度");
		}else if(result4>=30 & result4<35){
			$("#himando").text("肥満2度");
		}else if(result4>=25 & result4<30){
			$("#himando").text("肥満1度");
		}else if(result4>=18.5 & result4<25){
			$("#himando").text("普通");
		}else if(result4<18.5){
			$("#himando").text("痩せ");
		}



		$("#BMI").text(result4);
		
	
	});
});

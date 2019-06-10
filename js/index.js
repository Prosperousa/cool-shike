/*
* @Author: Dell
* @Date:   2019-06-08 22:30:15
* @Last Modified by:   Dell
* @Last Modified time: 2019-06-08 22:59:40
*/
$(function(){
	// 顶部
	
	let sh=$(".fenlei .sanheng");
	let cha=$(".fenlei .guanbi");
	// console.log(sh,cha);
	
	sh.click(function() {
		sh.css("display","none");
		cha.css("display","block");
		// $(".xiala").slideDown('slow');
		// $("body").css("overflow","hidden");
		// $(".gouwu").css("color","#333333");
	});
	// cha.click(function() {
	// 	sh.css("display","block");
	// 	cha.css("display","none");
	// 	// $(".xiala").slideUp('slow');
	// 	// $("body").css("overflow","scroll");
	// 	// $(".gouwu").css("color","#fff");
	// });


})


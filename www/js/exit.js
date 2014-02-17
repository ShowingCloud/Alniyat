function exitApp() {
	navigator.app.exitApp();
}
$(document).ready(function(){
	$('#exit').click(function (event){
		event.preventDefault(); //阻止默认事件操作
		$("#user").removeClass("ui-btn-active");
		$("#admin").removeClass("ui-btn-active");
		$("#setup").removeClass("ui-btn-active");
		navigator.notification.confirm("是否退出NFC门禁", confirmMsg, "退出程序", "确认,取消"); //退出程序
	});

	function confirmMsg(button){  
		if(button == 1){
			exitApp();
		}
	}
});
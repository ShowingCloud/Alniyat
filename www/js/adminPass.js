$(document).ready(function(){
	$('#admin').click(function(e){
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "userInfo.html");
		//$.mobile.changePage("userInfo.html"); 
	});
	//密码检测,通讯后为发送密码到门锁
	$('#ok').click(function(){
		//本地测试用管理员密码为确定在本地为admin
		if ('admin' == $('#pass').val()){
			$('#pass').val('');
			$('#admin_fade').css({'display': 'none'});
			$('#admin_light').css({'display': 'none'});
			$(this).prop('href', "admin.html");
		}else{
			$('#pass').val('');
			$('#admin_fade').css({'display': 'none'});
			$('#admin_light').css({'display': 'none'});
			$("#admin").removeClass("ui-btn-active");
			notifyUser('管理员密码不正确');
		}
	});
	//取消输入密码
	$('#cancel').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		$('#pass').val('');
		$('#admin_fade').css({'display': 'none'});
		$('#admin_light').css({'display': 'none'});
		$("#admin").removeClass("ui-btn-active");
	});
});
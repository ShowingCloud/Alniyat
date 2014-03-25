$(document).ready(function(){
	var pass = getData('login');
	if ( pass == null){
		pass = "123456";
	}
	$('#init').click(function(e){
		//$(this).simpledialog2(dialogOpts);
		e.preventDefault();
		$('#login_fade').css({'display': 'block'});
		$('#login_light').css({'display': 'block'});
		$('#pass').val('');
	});
	$('#login').click(function(e){
		var password = $('#pass').val();
		if (password === pass){
			$(this).prop('href', 'user.html');
			$('#fade').css({'display': 'none'});
			$('#light').css({'display': 'none'});
		}else if(password === ""){
			$('#pass').val('');
			notifyUser("请输入密码！");
		}else{
			$('#pass').val('');
			notifyUser("密码错误请重新输入！");
		}
	});
	$('#cancel').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		$('#login_fade').css({'display': 'none'});
		$('#login_light').css({'display': 'none'});
	});
});

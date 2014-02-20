$(document).ready(function(){
	var adminPass = '';
	$('#userInfo').click(function(e){
		adminPass = 'a';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "userInfo.html");
		//$.mobile.changePage("userInfo.html"); 
	});
	$('#lockInfo').click(function(e){
		adminPass = 'b';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "lockInfo.html");
		//$.mobile.changePage("lockInfo.html");
	});
	$('#unlockRecords').click(function(e){
		adminPass = 'c';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "unlockRecords.html");
		//$.mobile.changePage("unlockRecords.html");
	});
	$('#illegalRecords').click(function(e){
		adminPass = 'd';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "illegalRecords.html");
		//$.mobile.changePage("illegalRecords.html");
	});
	$('#modifyInfo').click(function(e){
		adminPass = 'e';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "modifyInfo.html");
		//$.mobile.changePage("modifyInfo.html");
	});
	$('#addUser').click(function(e){
		adminPass = 'f';
		//阻止默认事件行为的触发
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "addUser.html");
		//$.mobile.changePage("addUser.html");
	});
	$('#deleteUser').click(function(e){
		adminPass = 'g';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "deleteUser.html");
		//$.mobile.changePage("deleteUser.html");
	});
	$('#otherSetup').click(function(e){
		adminPass = 'h';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "otherSetup.html");
		//$.mobile.changePage("otherSetup.html");
	});
	$('#more').click(function(e){
		adminPass = 'i';
		e.preventDefault();
		$('#admin_fade').css({'display': 'block'});
		$('#admin_light').css({'display': 'block'});
		//$(this).prop('href', "more.html");
		//$.mobile.changePage("more.html");
	});
	//密码检测,通讯后为发送密码到门锁
	$('#ok').click(function(){
		//本地测试用管理员密码为确定在本地为admin
		if ('admin' == $('#pass').val()){
			$('#pass').val('');
			$('#admin_fade').css({'display': 'none'});
			$('#admin_light').css({'display': 'none'});
			switch(adminPass){
				case 'a':
					$(this).prop('href', "userInfo.html");
					break;
				case 'b':
					$(this).prop('href', "lockInfo.html");
					break;
				case 'c':
					$(this).prop('href', "unlockRecords.html");
					break;
				case 'd':
					$(this).prop('href', "illegalRecords.html");
					break;
				case 'e':
					$(this).prop('href', "modifyInfo.html");
					break;
				case 'f':
					$(this).prop('href', "addUser.html");
					break;
				case 'g':
					$(this).prop('href', "deleteUser.html");
					break;
				case 'h':
					$(this).prop('href', "otherSetup.html");
					break;
				case 'i':
					$(this).prop('href', "more.html");
					break;
			}	
		}else{
			$('#pass').val('');
			$('#admin_fade').css({'display': 'none'});
			$('#admin_light').css({'display': 'none'});
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
	});
});
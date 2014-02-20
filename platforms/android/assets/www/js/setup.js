function checkOldPass(id){
	var oldPass = $("#" + id).val();
	var errmsg = null;
	var ret = false;
	var pass = getData('login');
	if ( pass == null){
		pass = "123456";
	}
	if (oldPass !== pass){
		errmsg = "输入的原始密码不正确。";
		notifyUser(errmsg);
	}else {
		ret = true;
	}
	return ret;
}

function checkNewPass1(id){
	var pass1 = $("#" + id).val();
	var len = pass1.length;
	var errmsg = null;
	var ret = false;
	if (len == 0){
		errmsg = "新密码不能为空。";
		notifyUser(errmsg);
	} else if (len < 6){
		errmsg = "新密码不能小于六个字符！";
		notifyUser(errmsg);
	}else {
		ret = true;
	}
	return ret;
}

function checkNewPass2(id, pass){
	var pass2 = $("#" + id).val();
	var len = pass2.length;
	var errmsg = null;
	var ret = false;
	if (len == 0){
		errmsg = "新密码不能为空。";
		notifyUser(errmsg);
	} else if (len < 6){
		errmsg = "新密码不能小于六个字符！";
		notifyUser(errmsg);
	} else if (pass2 != pass){
		errmsg = "两次输入的新密码不相符请重新输入！";
		notifyUser(errmsg);
	}else {
		ret = true;
	}
	return ret;
}

function clear(){
	
	$('#oldPass').prop('value', '');
	$('#newPass1').prop('value', '');
	$('#newPass2').prop('value', '');
}

$(document).ready(function(){
	
	$('#submit').click(function () {
		var newPass = $('#newPass1').val();
		if (!checkOldPass('oldPass')){
			return false;
		}
		if (!checkNewPass1('newPass1')){
			return false;
		}
		if (!checkNewPass2('newPass2', newPass)){
			return false;
		}
		setData('login', newPass);
		notifyUser("设置密码成功！");
		clear();
		//alert(content);
		return false;
	});
	$('#reset').click(function () {
		clear();
		return false;
	});
	
});
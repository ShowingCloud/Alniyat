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
		//清楚所有的传输数据
		deleteData();
		//把密码发送到门锁进行匹配
		makeMessage($('#pass').val());
		//To.Do 匹配成功之后返回一个信息密码正确为1：密码不正确为0：
		//var respond = getData('pass');
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

function makeMessage(pass) {
	//添加对象的操作数，内容为密码。
	data["admin"] = pass;
	// Put together the pieces for the NDEF message:
	var tnf = ndef.TNF_MIME_MEDIA,            // NDEF Type Name Format
	 recordType = 'text/pg',
	 payload = data,     // content
	 record,                   // NDEF record object
	 message = [];             // NDEF Message to pass to writeTag()
	// create the actual NDEF record:
	record = ndef.record(tnf, recordType, [], payload);
	// put the record in the message array:
	message.push(record);
	//write the message:
	shareTag(message);
}
/*
   writes NDEF message @message to a tag:
*/
function shareTag(message) {
	// write the record to the tag:
	nfc.share(
		message,                 // write the record itself to the tag
		function () {            // when complete, run this callback function:
			notifyUser("Wrote data to tag.");     // notify the user in message div
			navigator.notification.vibrate(100);   // vibrate the device as well
			//清楚所有的传输数据
			deleteData();
		},
		function (reason) {     // this function runs if the write command fails
			navigator.notification.alert(reason, function() {}, "There was a problem");
		}
	);
}
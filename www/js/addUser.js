var addList = new Array();
$(document).ready(function(){
	//清楚所有的传输数据
	deleteData();
	//显示出添加的对话框
	$('#plus').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		$('#fade').css({'display': 'block'});
		$('#light').css({'display': 'block'});
	});
	$('#add').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		var element = $('#addUserTable tr').eq(1);
		var newRow = element.clone(true);
		//获取行数的第一个值，
		//var seq = $('#addUserTable tr:last').find('td:eq(0)').text();
		//获取所有行数(包括表头)
		var row = $('#addUserTable tr').length;
		//newRow.find('td:eq(0)').text(parseInt(seq) + 1);
		newRow.find('td:eq(0)').text(row);
		newRow.find('td:eq(1)').text('XXX');
		newRow.find('td:eq(2)').text($('#cardNum').val());
		$("#addUserTable tr:last").after(newRow);
		//添加新增用户的卡号到增加列表里面。
		addList.push($('#cardNum').val());
		//输入行的值重置
		$('#cardNum').val('');
		$('#fade').css({'display': 'none'});
		$('#light').css({'display': 'none'});
	});
	//当选择添加类型的时候，密码用户时，输入的为密码。
	$('#type').change(function(){
		var value = $(this).children('option:selected').val();
		if(value === 'pass'){
			$('#contentLabel').text('密码');
			$('#cardNum').prop('type', 'password');
		}else{
			$('#contentLabel').text('卡号');
			$('#cardNum').prop('type', 'text');
		}
	});
	$('#cancel').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		$('#fade').css({'display': 'none'});
		$('#light').css({'display': 'none'});
	});
	//保存到门锁中
	$('#saveAdd').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面
		if (addList.length == 0){
			return false;
		}else{
			makeMessage(addList);
		}
	
	});
});

function makeMessage(addList) {
	//写入的数组第一个为操作数
	//addList.unshift("add")
	data["add"] = addList;
	// Put together the pieces for the NDEF message:
	var tnf = ndef.TNF_MIME_MEDIA;            // NDEF Type Name Format
	var recordType = 'text/pg';
	var payload = data;     // content
	var record;                   // NDEF record object
	var message = [];             // NDEF Message to pass to writeTag()
	// create the actual NDEF record:
	record = ndef.record(tnf, recordType, [], payload);
	// put the record in the message array:
	message.push(record);
	//write the message:
	shareTag(message);
}
//分享添加的用户卡号到门锁
function shareTag(message) {
	// write the record to the tag:
	nfc.share(
		message,                 // write the record itself to the tag
		function () {            // when complete, run this callback function:
			notifyUser("Wrote data to tag.");     // notify the user in message div
			navigator.notification.vibrate(100);   // vibrate the device as well
			//清空数组
			addList.splice(0,addList.length); 
			//清楚所有的传输数据
			deleteData();
		},
		function (reason) {     // this function runs if the write command fails
			navigator.notification.alert(reason, function() {}, "There was a problem");
		}
	);
}
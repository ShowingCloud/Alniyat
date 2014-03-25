/**
* 全选
* 
* allCkb 全选复选框的id
* items 复选框的name
*/
var deleteList = new Array();
function allCheck(allCkb, items){
	$("#"+allCkb).click(function(){
		$('[name='+items+']:checkbox').attr("checked", this.checked );
	});
}

//删除选中的行
function delTr(ckb){
	//获取选中的复选框，然后循环遍历删除
    var ckbs=$("input[name="+ckb+"]:checked");
    if(ckbs.size()==0){
		notifyUser("要删除指定行，需选中要删除的行！");
        return;
    }
	ckbs.each(function(){
		//欲删除的门卡的卡号
		deleteList.push($(this).parent().parent().parent().find('td').eq(2).text());
		$(this).parent().parent().parent().remove();
	});
}
$(document).ready(function(){
	//清楚所有的传输数据
	deleteData();
	//全选
	//allCheck('allCkb', 'ckb');
	//保存到门锁中
	$('#delete').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面
		delTr('ckb');
		//表中删除了，接下来删除门禁里面的数据
	});
	
	//保存到门锁中
	$('#saveAdd').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面
		if (deleteList.length == 0){
			return false;
		}else{
			makeMessage(deleteList);
		}
	});
});

function makeMessage(deleteList) {
	//写入的数组第一个为操作数
	//deleteList.unshift("delete")
	data["delete"] = deleteList;
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
			deleteList.splice(0,addList.length); 
			//清楚所有的传输数据
			deleteData();
		},
		function (reason) {     // this function runs if the write command fails
			navigator.notification.alert(reason, function() {}, "There was a problem");
		}
	);
}
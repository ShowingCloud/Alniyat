
$(document).ready(function(){
	//清楚所有的传输数据
	deleteData();
	var td_text;
	var new_text;
	var modifyList = {};
	$("#modifyTable tr td:nth-child(2)").click(function(){
		var td=$(this);
		if(td.children('input').length>0)
			return false;
		td_text=td.html();// 把原来单元格的值赋给一个变量 ;
		//清空对应单元格的内容
		td.html("");
		var input=$("<input type='text'>");
		input.width(td.width());
		input.css({"border":"none"}).val(td_text).appendTo(td);
		// 在向单元格中加入文本框后,就获得焦点并选择;
		input.trigger("focus").trigger("select");
		// 对input 的单击事件 不再触发单元格的单击事件 ;
		input.click(function(){
			return false;
		})
		// 响应键盘事件 ;
		input.keyup(my_keyup=function(e){
			var keyCode=e.which;
			if(keyCode==27){	//取消键
				input.val(td_text);
				td.html(td_text);
			}else if(keyCode==13){	//回车键
			var new_val=input.val();
			td.html(new_val);
			}
		});// keyup end
		input.blur(function(){
			new_text = input.val();
			if($.trim($(this).val())==""){
				td.html(td_text);
			}else{
				td.html($(this).val());
			}
			if (new_text != td_text){
				/*
				var flag = true;
				if (modifyList.length != 0){
					for (var i = 0; i< modifyList.length ; i++){
						if (modifyList[i] == td.parent().find('td').eq(2).text()){
							flag = false;
							break;
						}
					}
					if (flag){
						modifyList.push(td.parent().find('td').eq(2).text());
					}
				}else{
					modifyList.push(td.parent().find('td').eq(2).text());
				}
				*/
				modifyList[td.parent().find('td').eq(2).text()] = new_text;
			}
		});
	});
	$('#saveModify').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面
		makeMessage(modifyList);
	});
});

function makeMessage(modifyList) {
	//写入的数组第一个为操作数
	//modifyList.unshift("modify");
	data["modify"] = modifyList;
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
			//清空json对象
			for (var key in modifyList){
				delete modifyList[key];
			}
			deleteData();
		},
		function (reason) {     // this function runs if the write command fails
			navigator.notification.alert(reason, function() {}, "There was a problem");
		}
	);
}
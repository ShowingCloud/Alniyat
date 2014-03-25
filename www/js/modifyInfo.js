
$(document).ready(function(){
	//������еĴ�������
	deleteData();
	var td_text;
	var new_text;
	var modifyList = {};
	$("#modifyTable tr td:nth-child(2)").click(function(){
		var td=$(this);
		if(td.children('input').length>0)
			return false;
		td_text=td.html();// ��ԭ����Ԫ���ֵ����һ������ ;
		//��ն�Ӧ��Ԫ�������
		td.html("");
		var input=$("<input type='text'>");
		input.width(td.width());
		input.css({"border":"none"}).val(td_text).appendTo(td);
		// ����Ԫ���м����ı����,�ͻ�ý��㲢ѡ��;
		input.trigger("focus").trigger("select");
		// ��input �ĵ����¼� ���ٴ�����Ԫ��ĵ����¼� ;
		input.click(function(){
			return false;
		})
		// ��Ӧ�����¼� ;
		input.keyup(my_keyup=function(e){
			var keyCode=e.which;
			if(keyCode==27){	//ȡ����
				input.val(td_text);
				td.html(td_text);
			}else if(keyCode==13){	//�س���
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
		//��ֹĬ���¼���Ϊ�Ĵ���
		e.preventDefault();
		//�Ѹ��ĺ����������ͨ��NFC���±��浽��������
		makeMessage(modifyList);
	});
});

function makeMessage(modifyList) {
	//д��������һ��Ϊ������
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
//������ӵ��û����ŵ�����
function shareTag(message) {
	// write the record to the tag:
	nfc.share(
		message,                 // write the record itself to the tag
		function () {            // when complete, run this callback function:
			notifyUser("Wrote data to tag.");     // notify the user in message div
			navigator.notification.vibrate(100);   // vibrate the device as well
			//���json����
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
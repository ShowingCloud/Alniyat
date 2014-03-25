document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
	//ע��NDEF tag
	nfc.addNdefListener( onNfc, function(status) {
		//�ɹ���ʾ�񶯺ͷ���
		//navigator.notification.vibrate(1000);
		//navigator.notification.beep(3);
		//notifyUser("Listening for NDEF tags.");
		//notifyUser(status);
		console.log("Listening for NDEF tags.");
	}, fail);
	//ndef-mime
	nfc.addMimeTypeListener('text/pg', onNfc, function(status) {
		//alert("Listening for NDEF tags.");
		//navigator.notification.vibrate(1000);
		//navigator.notification.beep(3);
		//notifyUser("Listening for NDEF mime tags with type text/pg.");
		//notifyUser(status);
		console.log("Listening for NDEF mime tags with type text/pg.");
	}, fail);
	//ע��NdefFormatable tag
	nfc.addNdefFormatableListener( onNfc, function(status) {
		//alert("Listening for NDEF tags.");
		//�ɹ�����ʾ
		//navigator.notification.vibrate(1000);
		//navigator.notification.beep(3);
		//notifyUser("Listening for unformatted tags.");
		//notifyUser(status);
		console.log("Listening for unformatted tags.");
	}, fail);
}

function onNfc(nfcEvent){
	var tag = nfcEvent.tag; 
	notifyUser(JSON.stringify(tag)); 
	var message = tag.ndefMessage;
	parseMessage(message);
}

function fail(error){
	notifyUser(JSON.stringify(error));
}
//�ֽ�NDEFmessage
function parseMessage(message){
	for (var i=0; i < message.length; i++) {
		// get the next record in the message array:
		var record = message[i];
		decodePayload(record);          // show it
	}
}
//����NDEFrecord
function decodePayload(record){
	var content;
	// if the payload is a Smart Poster, it's an NDEF message.
	// read it and display it (recursion is your friend here):
	if (nfc.bytesToString(record.type) === "Sp") {
		var ndefMessage = ndef.decodeMessage(record.payload);
		parseMessage(ndefMessage);

	// if the payload's not a Smart Poster, display it:
	} else if (nfc.bytesToString(record.type) === "text/pg"){
		//�Զ����͵�record
		content = nfc.bytesToString(record.payload);
	} else if (nfc.bytesToString(record.type) === "T"){	
		//����textrecord (ȫ����Ӣ�ĵ�ǰ����)
		/*
		var langCodeLength = record.payload[0] & 0x3f;
		var languageCode = record.payload.slice(1, langCodeLength + 1);
		var utf8 = (record.payload[0] & 0x80) === 0; // assuming UTF-16BE
		var text = record.payload.slice((1 + langCodeLength), record.payload.length);
		app.display("Payload: " + nfc.bytesToString(text));
		*/
		content = ndef.textHelper.decodePayload(record.payload);
	} else if (nfc.bytesToString(record.type) === "U"){
		//����urirecord
		content = ndef.uriHelper.decodePayload(record.payload);
		//payload = "<a href='" + uri + "'>" + uri + "<\/a>";
	}else {
		content = nfc.bytesToString(record.payload));
	}


}


$(document).ready(function(){
	$('#unlock').click(function(){
		//����
		
	});
	function makeMessage() {
		// Put together the pieces for the NDEF message:
		var tnf = ndef.TNF_MIME_MEDIA,            // NDEF Type Name Format
		 recordType = 'text/pg',
		 payload = 'Unlock the NFC Door!',     // content
		 record,                   // NDEF record object
		 message = [];             // NDEF Message to pass to writeTag()
		// create the actual NDEF record:
		record = ndef.record(tnf, recordType, [], payload);
		// put the record in the message array:
		message.push(record);
		//write the message:
		writeTag(message);
	}
	/*
	   writes NDEF message @message to a tag:
	*/
	function writeTag(message) {
		// write the record to the tag:
		nfc.write(
			message,                 // write the record itself to the tag
			function () {            // when complete, run this callback function:
				notifyUser("Wrote data to tag.");     // notify the user in message div
				navigator.notification.vibrate(100);   // vibrate the device as well
			},
			function (reason) {     // this function runs if the write command fails
				navigator.notification.alert(reason, function() {}, "There was a problem");
			}
		);
	}
});
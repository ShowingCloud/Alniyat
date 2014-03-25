
$(document).ready(function(){
	var element = $('#detectionTable tr').eq(1);
	/*
	if (info.length == 0) {
		return false;	
	}
	for (var i = 0; i < info.length; i++){
		if (i == 0){
			element.find('td:eq(0)').text(info[i]);
			element.find('td:eq(1)').text('22:00');
		}else {
			var newRow = element.clone(true);
			newRow.find('td:eq(0)').text(info[i]);
			newRow.find('td:eq(1)').text('22:00');
			element.before(newRow);
		}
	}
	*/
	//测试
	element.find('td:eq(0)').text("10度");
	element.find('td:eq(1)').text('15伏特');
});
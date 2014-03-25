
$(document).ready(function(){
	$("#illegalRecordsTable tr:gt(0):not(:eq(0))").remove();
	var element = $('#illegalRecordsTable tr').eq(1);
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
	var newRow = element.clone(true);
	newRow.find('td:eq(0)').text("786a4ef");
	newRow.find('td:eq(1)').text('2014-03-18 08:00:30');
	element.after(newRow);
});
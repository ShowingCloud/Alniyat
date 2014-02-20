
$(document).ready(function(){
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
		var element = $('#userTable tr').eq(1);
		var newRow = element.clone(true);
		//获取行数的第一个值，
		//var seq = $('#userTable tr:last').find('td:eq(0)').text();
		//获取所有行数(包括表头)
		var row = $('#userTable tr').length;
		//newRow.find('td:eq(0)').text(parseInt(seq) + 1);
		newRow.find('td:eq(0)').text(row);
		newRow.find('td:eq(1)').text('XXX');
		newRow.find('td:eq(2)').text($('#cardNum').val());
		$("#userTable tr:last").after(newRow);
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

	
	});
});
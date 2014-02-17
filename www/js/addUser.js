
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

$(document).ready(function(){
	$("#modifyTable tr td:nth-child(2)").click(function(){
		var td=$(this);
		if(td.children('input').length>0)
			return false;
		var td_text=td.html();// 把原来单元格的值赋给一个变量 ;
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
			if(keyCode==27){
				input.val(td_text);
				td.html(td_text);
			}else if(keyCode==13){
			var new_val=input.val();
			td.html(new_val);
			}
		});// keyup end
		input.blur(function(){
			if($.trim($(this).val())==""){
			td.html(td_text);
		 
			}else{
				td.html($(this).val());
			}
		});
	});
	$('#saveModify').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面

	
	});
});
/**
* 全选
* 
* allCkb 全选复选框的id
* items 复选框的name
*/
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
		$(this).parent().parent().parent().remove();
		
	});
}
$(document).ready(function(){
	//全选
	//allCheck('allCkb', 'ckb');
	//保存到门锁中
	$('#delete').click(function(e){
		//阻止默认事件行为的触发
		e.preventDefault();
		//把更改后的数据重新通过NFC重新保存到门锁里面
		delTr('ckb');
	
	});
});
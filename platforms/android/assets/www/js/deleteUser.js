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
		
		}
	});
});
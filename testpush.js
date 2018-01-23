// JavaScript Document
//ajax代码示例
var html=new StringBuffer();
html.append("<img src='");
html.append(getRelativePath());
html.append("http/images/waiting-small.gif'/>&nbsp;正在获取数据");

$.ajax({
	type:POST,
	url:ajaxURL,
	dataType:"json",
	async:true,
	data:params,
	
	success: function(data){
		parent.innerHTML="";
		
		if(data){
		  if(data.code==0){
			  //自定义操作
			  if(typeof(customOperation=="function")){
				  //默认输入框
				  customOperation(data,parent);
				}else{
					  //自定义输入框
				 defaultOperation(data,parent);
				}
			  }else{
				  var error=new stringBuffer();
				  error.append("<font color='red'>");
				  error.append(data.code);
				  error.append(" - ");
				  error.append(stringTOHTML(data.message));
				  error.append("</font>");
				  showReadMessage(error.toString(),parent);
				  }
			}else{
				showReadMessage("<font color='red'>操作失败  [data=null]</font>",parent);
				}
		},
		error:function(data){
			var error=new stringBuffer();
			error.append("<font color='red'>");
			error.append("操作失败！");
			error.append(request.status);
			error.append(" - ");
			error.append(request.response);
			error.append("]");
			error.append("</font>");
			showReadMessage(error.toString(),parent);
			}
	
})
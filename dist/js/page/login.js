define(["jquery"],function(e){e("#btn").on("click",function(){var n="",t=e.trim(e(".name").val()),a=e.trim(e(".pwd").val());""===t?n="请输入账号":""===a&&(n="请输入密码"),n?e(".tip").html(n):e.ajax({url:"/loginname",type:"post",dataType:"json",data:{name:t,pwd:a},success:function(n){"登录成功"===n.result?history.go(-1):console.log(n.result)}})})});
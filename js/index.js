// //
// need(["biz.provincecityselector"],function(pcs){
// 	pcs.show({
// 		provinceId : "p",
// 		cityId : "c",
// 		provinceChange : function(a){
// 			//console.log(a);
// 		},
// 		cityChange : function(city){
// 			//console.log(city.v);
// 			//console.log(city.t);
// 		}
	
// 	})
// });

// /* ��ҳ��ʼ */
// function prePages(){
// 	var currentPage = $("#currentPage").html();	
// 	if(parseInt(currentPage) == 1){
// 		alert("�Ѿ��ǵ�һҳ�ˣ�");
// 		return;
// 	}
// 	getContent(parseInt(currentPage) - 1);
// }
// function nextPages(){
// 	var currentPage = $("#currentPage").html();	
// 	var totalPage = $("#totalPage").html();
// 	if(parseInt(currentPage) == parseInt(totalPage)){
// 		alert("�Ѿ������һҳ�ˣ�");
// 		return;
// 	}
// 	getContent(parseInt(currentPage) + 1);
// }
// function goPages(){
// 	var totalPage = $("#totalPage").html();
// 	var goPage = $("#goPage").val();
// 	if(isNaN(parseInt(goPage))){
// 		Fail(-1, "ҳ�����Ϊ���֣�");
// 		return;
// 	}
// 	if(parseInt(goPage) > parseInt(totalPage)){
// 		Fail(-1, "ҳ�벻�ܴ�����ҳ����");
// 		return;
// 	}
// 	if(parseInt(goPage) < 1){
// 		Fail(-1, "ҳ��������0��");
// 		return;
// 	}
// 	$("#goPage").value = "";
// 	getContent(goPage);
// }

// /**
//  * ��ҳʱ�������̨����
//  */
// function getContent(currentPage){
// 	var totalPage = $("#totalPage").html();
//     var sUrl = "http://apps.game.qq.com/fifa/a20150414championship/getAddressList.php?actId=20150826&p="+gProvince+"&c="+gCity+"&totalPage="+totalPage+"&curPage="+currentPage+"&rid=" + Math.random();
//     FloadJS(sUrl, getAddressListSucc, Fail);
// }

// function Fail(errorCode, errorMsg){
//     if(errorCode < 0){
//         alert(errorMsg); 
//      }else if('undefined' != typeof(JSON_) && JSON_.iRet < 0){
//         return;
//      }else{
//         alert("��������ԭ�����ʧ�ܣ����Ժ����ԣ�");
//     }
//     return;
// }

// /**
//  * ��ҳʱ����̨�������ݳɹ�
//  */
// function getAddressListSucc(){
// 	if ('undefined' != typeof(JSON_getAddressList) && (null != JSON_getAddressList)){
// 		if( null != JSON_getAddressList.iRet && 0 == JSON_getAddressList.iRet ){//���سɹ����������ݼ�
// 			var lt = "";
// 			$("#totalPage").html(JSON_getAddressList.iTotalPage);
// 			$("#currentPage").html(JSON_getAddressList.iCurrentPage);
// 			if (typeof(JSON_getAddressList.list) != "undefined" && JSON_getAddressList.list.length > 0) {
//                 for (var i=0; i < JSON_getAddressList.list.length; i++) {
//                 	lt+='<tr>';
//                 	lt+='<td bgcolor="#FFFFFF">'+JSON_getAddressList.list[i].sProvinceName+'</td>';
//                 	lt+='<td bgcolor="#FFFFFF" align="center">'+JSON_getAddressList.list[i].sCityName+'</td>';
//                 	lt+='<td bgcolor="#FFFFFF" align="center">'+JSON_getAddressList.list[i].sMatchTime+'</td>';
//                 	lt+='<td bgcolor="#FFFFFF" align="center">'+JSON_getAddressList.list[i].sMatchAddress+'</td>';
//                 	lt+='<td bgcolor="#FFFFFF" align="center">'+JSON_getAddressList.list[i].sContactPerson+'<br/>'+JSON_getAddressList.list[i].sMobile+'</td>';
//                 	lt+='<td bgcolor="#FFFFFF" align="center">'+JSON_getAddressList.list[i].sGroup+'</td>';
//                     lt +='</tr>';
//                 }
// 			}
// 			$("#_wrapper").html(lt);
// 		}else if(null != JSON_getAddressList.iRet && 1 == JSON_getAddressList.iRet){//��������Ϊ��ʱ
//             $("#totalPage").html(1);
// 		}else{
// 			Fail(JSON_getAddressList.iRet, JSON_getAddressList.sMsg);
// 		}
// 	}else{
// 		Fail();
// 	}
// }

// function showAddressFirstPageInfo(){
// 	$("#currentPage").html(1);
//     var totalPage = 0;
//     if($("#totalPage").html() != 0){
//        totalPage = $("#totalPage").html();	
//     }
//     var currentPage = $("#currentPage").html();
//     var sUrl = "http://apps.game.qq.com/fifa/a20150414championship/getAddressList.php?actId=20150826&p="+gProvince+"&c="+gCity+"&totalPage="+totalPage+"&curPage="+currentPage+"&rid=" + Math.random();
//     FloadJS(sUrl, getAddressListSucc, Fail); 
// }

// gProvince = 0;
// gCity = 0;
// //ҵ�����
// $(function(){
// 	showAddressFirstPageInfo();
	
// 	$("#query").click(function(){
// 		//gProvince = $("#p").val();
//                 gProvince = $("#p").find("option:selected").text();
//                 gCity = $("#c").find("option:selected").text();
// 		//gCity = $("#c").val();
// 		showAddressFirstPageInfo();
// 	});
	
// });
// /*  |xGv00|425b671525e9dcde656db81f2d8ed34e */
$(function(){
	var res ={
		"clinic_info":{
        	"first_tag_info":{
	            "id":"267707",
	            "name":"青春痘"
       		},
        	"clinic_no":"4"
   		},
	    "free_problem_count":33,
	    "vendor":"chunyu",
	    "service_list":[

	    ],
	 	"show_download_bar":true,
	    "app":"0",
	    "popular_diseases":[
	        {
	            "id":"237446",
	            "name":"感冒"
	        },
	        {
	            "id":"264890",
	            "name":"过敏"
	        },
	        {
	            "id":"243779",
	            "name":"湿疹"
	        },
	        {
	            "id":"246581",
	            "name":"痤疮"
	        },
	        {
	            "id":"273362",
	            "name":"阴道炎"
	        },
	        {
	            "id":"273218",
	            "name":"痔疮"
	        },
	        {
	            "id":"222110",
	            "name":"包皮"
	        },
	        {
	            "id":"273242",
	            "name":"糖尿病"
	        },
	        {
	            "id":"229808",
	            "name":"宫颈糜烂"
	        },
	        {
	            "id":"273383",
	            "name":"高血压"
	        },
	        {
	            "id":"273296",
	            "name":"肺炎"
	        },
	        {
	            "id":"271667",
	            "name":"鼻炎"
	        },
	        {
	            "id":"229727",
	            "name":"宫外孕"
	        },
	        {
	            "id":"216869",
	            "name":"乙肝"
	        },
	        {
	            "id":"273341",
	            "name":"艾滋病"
	        },
	        {
	            "id":"268796",
	            "name":"颈椎病"
	        },
	        {
	            "id":"273236",
	            "name":"盆腔炎"
	        },
	        {
	            "id":"233339",
	            "name":"尖锐湿疣"
	        }
    	]
    }
    if(window.location.search.split("=")[1]){
    	var str = "";
    	for(var i=0;i<res.popular_diseases.length;i++){
    		str='<p class="tip">'+res.popular_diseases[i].name+'</p><p class="content"><span>口腔溃疡俗称“口疮”，是一种常见的发生于口腔黏膜的溃疡性损伤病症，多见于唇内侧、舌头、舌腹、颊黏膜、前庭沟、软腭等部位，这些部位的黏膜缺乏角质化层或角化较差舌头溃...</span></p><p class="tip-bottom"><span>|</span><span class="notice">就诊科室</span><span>|</span><span class="notice">术前注意事项</span><span>|</span><span class="notice">术后护理</span><span>|</span></p>';
    	}
    	$(".top-bar").html(str);
    }
})
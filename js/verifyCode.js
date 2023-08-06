var show_num = [];
var timeout_flag = false;
var cache = {};//timeout cache
$(function(){	
    draw(show_num);
    $("#login-verify-code-canvas").on('click',function(){
        draw(show_num);
    });
});

function draw(show_num) {
    var canvas_width=$('#login-verify-code-canvas').width(),
    	canvas_height=$('#login-verify-code-canvas').height(),
    	canvas = document.getElementById("login-verify-code-canvas"),//鑾峰彇鍒癱anvas鐨勫璞★紝婕斿憳
    	context = canvas.getContext("2d"),//鑾峰彇鍒癱anvas鐢诲浘鐨勭幆澧冿紝婕斿憳琛ㄦ紨鐨勮垶鍙�
    	sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0",
    	aCode = sCode.split(","),
    	aLength = aCode.length;//鑾峰彇鍒版暟缁勭殑闀垮害
    
    canvas.width = canvas_width;
    canvas.height = canvas_height;   
    for (var i = 0; i <= 3; i++) {//4浣嶉獙璇佺爜
        var j = Math.floor(Math.random() * aLength),//鑾峰彇鍒伴殢鏈虹殑绱㈠紩鍊�
        	deg = Math.random() * 30 * Math.PI / 180,//浜х敓0~30涔嬮棿鐨勯殢鏈哄姬搴�
        	txt = Math.floor(Math.random() * 2) == 1?aCode[j]:aCode[j].toLowerCase(),//寰楀埌闅忔満鐨勪竴涓唴瀹�         	
        	x = 10 + i * 20,//鏂囧瓧鍦╟anvas涓婄殑x鍧愭爣
        	y = 20 + Math.random() * 8;//鏂囧瓧鍦╟anvas涓婄殑y鍧愭爣
        
        show_num[i] = txt.toLowerCase();
        context.font = "bold 23px 寰蒋闆呴粦";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //楠岃瘉鐮佷笂鏄剧ず绾挎潯
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //楠岃瘉鐮佷笂鏄剧ず灏忕偣
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
    //璁剧疆楠岃瘉鐮佹湁鏁堟椂闂存槸60s
    timeout_flag = false;
    clearTimeout(cache["Timeout"]);
    var t = setTimeout(function(){
    	timeout_flag = true;
    },60000);
    cache["Timeout"] = t;
}

function randomColor() {//寰楀埌闅忔満鐨勯鑹插€�
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
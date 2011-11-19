/*
 * glassbox-min.js
 * compressed glassbox.js
 * version: 2.0.0
 * last modification: 2009/02/23
 * copyright: 2007-2009 (c) uli preuss
 * url: http://www.glassbox-js.com
*/
 
var path_to_glassbox="javascripts/glassbox/";
var path_to_background_images="images/backgrounds/";
var path_to_root_dir="";
var mypath_to_background_images="";
if(typeof(GlassBox)=="undefined"){
    var GlassBox=function(){
        THIS=this,this.version="2.0.0",this.version_comment="Modified: open/close glassbox, Fixed: IE7 PNG Bug and a lot more ..",this.last_mod="2009/02/23",this.bb_hor="",this.bb_ver="",this.skin_path=path_to_root_dir+path_to_glassbox+"skins/",this.skin_default="default",this.gb_path=path_to_root_dir+path_to_glassbox,this.img_bg_path=mypath_to_background_images!=""?mypath_to_background_images:path_to_root_dir+path_to_background_images,this.multicontent_arr=new Array(),this.exists=false,this.is_false=true,this.dblclick=true,this.isvscreen=false;
        this.is_IE=/MSIE (5\.5|6|7)/.test(navigator.userAgent),this.is_Opera=/Opera/.test(navigator.userAgent),this.init=function(a,b,n,f,o,d,g,c){
            this.id=a;
            if($(this.id+"_contentBoxBg")!=null){
                this.remove()
                }
                if(this.exists==false){
                this.width=b;
                this.height=n;
                this.overflow=f;
                if(d!=null&&d!=""){
                    if(d==false){
                        this.resize=false
                        }else{
                        if(d==true){
                            this.resize=true
                            }
                        }
                }
            if(g==false){
            this.dblclick=false
            }else{
            if(g==true){
                this.dblclick=true
                }
            }
        if(o!=null&&o!=""){
        this.skinfolder=this.skin_path+o
        }else{
        this.skinfolder=this.skin_path+this.skin_default
        }
        if(this.bb_hor==""||this.bb_ver==""){
        if(o=="facebookstyle"){
            this.bb_hor="25px";
            this.bb_ver="25px"
            }else{
            if(o=="greyline"){
                this.bb_hor="25px";
                this.bb_ver="27px"
                }else{
                this.bb_hor="25px";
                this.bb_ver="21px"
                }
            }
    }
this.glassbox=$(this.id);
if(c!=null){
    if(this.is_false==true){
        var e=new Array();
        var l="glassbox_mc";
        var m=document.getElementsByTagName("div");
        var k=new RegExp("\\b"+l+"\\b");
        for(i=0,j=0;i<m.length;i++){
            if(k.test(m[i].className)){
                e[j]=m[i];
                j++
            }
        }
        this.header="<h1>"+e[0].getElementsByTagName("h1")[0].innerHTML+"</h1>";
    for(i=0;i<e.length;i++){
        this.multicontent_arr[i]=e[i].innerHTML
        }
        this.glassboxContent=this.multicontent_arr[0];
    this.is_false=false
    }else{
    if(c==1){
        this.glassboxContent=this.multicontent_arr[c-1]
        }else{
        this.glassboxContent=this.header+this.multicontent_arr[c-1]
        }
    }
}else{
    if(typeof this.glassboxContent=="undefined"){
        this.glassboxContent=this.glassbox.innerHTML
        }
    }
if(this.glassbox!=null){
    this.glassbox.innerHTML=""
    }
    this.glassboxWidth=parseInt(this.width);
this.boxborder_lr1=parseInt(this.bb_hor);
if(isNaN(this.glassboxWidth)){
    this.content_width="auto";
    this.glassboxWidth="auto"
    }else{
    this.content_width=this.glassboxWidth-(2*this.boxborder_lr1)+"px"
    }
    this.glassboxHeight=parseInt(this.height);
this.boxborder_tb1=parseInt(this.bb_ver);
if(isNaN(this.glassboxHeight)){
    this.content_height="auto";
    this.glassboxHeight="auto"
    }else{
    this.content_height=this.glassboxHeight-(2*this.boxborder_tb1)+"px"
    }
    var h=getScreenDimensions();
this.screenWidth=h.screenWidth;
this.screenHeight=h.screenHeight
}
},this.vscreen=function(b,a){
    this.isvscreen=true;
    this.glassboxHeight=this.screenHeight-(parseInt(a)*2);
    this.boxborder_tb1=parseInt(this.bb_ver);
    this.content_height=this.glassboxHeight-(2*this.boxborder_tb1)+"px";
    this.glassbox.style.position="absolute";
    this.glassbox.style.left=b;
    this.glassbox.style.top=parseInt(a)+"px";
    this.createGlassbox()
    },this.ipos=function(){
    this.createGlassbox()
    },this.apos=function(b,a){
    this.glassbox.style.position="absolute";
    this.glassbox.style.left=b;
    this.glassbox.style.top=a;
    this.createGlassbox()
    },this.lbo=function(f,d){
    if(this.exists!=true){
        if(d){
            this.overlay=document.createElement("div");
            this.overlay.setAttribute("id",this.id+"_overlay");
            this.overlay.style.position="absolute";
            this.overlay.style.backgroundColor="#000000";
            this.overlay.style.left="0px";
            this.overlay.style.top="0px";
            this.overlay.style.width=this.screenWidth+"px";
            this.overlay.style.height=this.screenHeight+"px";
            this.overlay.style.opacity=d;
            this.overlay.style.filter="alpha( opacity="+d*100+" )";
            this.overlay.style.zIndex=999;
            this.overlay.style.display="block";
            var b=document.getElementsByTagName("body")[0];
            b.appendChild(this.overlay)
            }
            if(f!=false){
            var a=document.createElement("div");
            a.setAttribute("id","exitButton");
            a.style.position="absolute";
            a.style.left=this.glassboxWidth-39+"px";
            a.style.top=23+"px";
            a.style.zIndex=1001;
            a.title="close";
            this.glassbox.appendChild(a);
            var e=document.createElement("a");
            e.href="javascript:THIS.fade();";
            a.appendChild(e);
            var c=document.createElement("img");
            c.setAttribute("id","exitImage");
            c.style.border=0;
            c.src=this.skin_path+"exitButton.png";
            e.appendChild(c);
            if(typeof Effect!="undefined"){
                new Effect.Appear("exitButton")
                }else{
                $("exitButton").style.display="block"
                }
            }
        this.glassbox.style.position="absolute";
    this.glassbox.style.left=Math.round((this.screenWidth-this.glassboxWidth)/2)+"px";
    this.glassbox.style.top=Math.round((this.screenHeight-this.glassboxHeight)/2)+"px";
    this.glassbox.style.zIndex=1000;
    this.glassbox.style.minWidth=this.glassboxWidth+"px";
    this.createGlassbox();
    this.exists=true
    }else{
    $(this.id+"_overlay").style.display="block"
    }
    this.appear()
},this.appear=function(a){
    if(typeof Effect!="undefined"){
        this.glassbox.style.display="none";
        new Effect.Appear(this.id)
        }else{
        this.glassbox.style.display="block"
        }
        this.glassbox.ondblclick=function(){
        if(THIS.dblclick==true){
            THIS.fade()
            }
        };
    
if(a){
    setTimeout("THIS.fade()",a)
    }
},this.fade=function(){
    if(typeof Effect!="undefined"){
        new Effect.Fade(THIS.id,{
            afterFinish:function(){
                THIS.remove()
                }
            });
    if($(THIS.id+"_overlay")){
        new Effect.Fade(THIS.id+"_overlay",{
            afterFinish:function(){
                this.overlay=$(THIS.id+"_overlay");
                this.overlay.parentNode.removeChild(this.overlay)
                }
            })
    }
}else{
    $(THIS.id).style.display="none";
    if($(THIS.id+"_overlay")){
        $(THIS.id+"_overlay").style.display="none"
        }
        this.remove()
    }
},this.remove=function(){
    $(this.id).innerHTML=$(this.id+"_content").innerHTML
    },this.draggable=function(b){
    try{
        new Draggable(this.id);
        this.glassbox.title=b
        }catch(a){}
},this.zindex=function(a){
    this.glassbox.style.zIndex=a
    },this.noro=function(b){
    if(b==null){
        b=0
        }
        var a=this.screenWidth-(parseInt(this.glassbox.style.left)+parseInt(this.glassboxWidth));
    if(a<0){
        this.glassbox.style.left=(parseInt(this.glassbox.style.left)+a+b+14)+"px"
        }
    },this.createGlassbox=function(){
    var m=document.createElement("div");
    m.setAttribute("id",this.id+"_toprow");
    m.style.width=this.glassboxWidth;
    m.style.minWidth=this.glassboxWidth+"px";
    this.glassbox.appendChild(m);
    var f=document.createElement("div");
    f.setAttribute("id",this.id+"_topleft");
    f.style.width=this.bb_hor;
    f.style.height=this.bb_ver;
    f.style.cssFloat="left";
    f.style.styleFloat="left";
    f.style.backgroundImage="url( "+this.skinfolder+"/topleft.png )";
    if(this.is_IE){
        f.style.filter=this.iepngfix(this.skinfolder+"/topleft.png");
        f.style.backgroundImage="none"
        }
        m.appendChild(f);
    var n=document.createElement("div");
    n.setAttribute("id",this.id+"_top");
    n.style.width=this.content_width;
    n.style.height=this.bb_ver;
    n.style.cssFloat="left";
    n.style.styleFloat="left";
    n.style.backgroundImage="url( "+this.skinfolder+"/top.png )";
    if(this.is_IE){
        n.style.filter=this.iepngfix(this.skinfolder+"/top.png");
        n.style.backgroundImage="none"
        }
        m.appendChild(n);
    var k=document.createElement("div");
    k.setAttribute("id",this.id+"_topright");
    k.style.width=this.bb_hor;
    k.style.height=this.bb_ver;
    k.style.cssFloat="left";
    k.style.styleFloat="left";
    k.style.backgroundImage="url( "+this.skinfolder+"/topright.png )";
    if(this.is_IE){
        k.style.filter=this.iepngfix(this.skinfolder+"/topright.png");
        k.style.backgroundImage="none"
        }
        m.appendChild(k);
    var e=document.createElement("div");
    e.style.clear="both";
    this.glassbox.appendChild(e);
    var g=document.createElement("div");
    g.setAttribute("id",this.id+"_middlerow");
    g.style.width=this.glassboxWidth;
    this.glassbox.appendChild(g);
    var c=document.createElement("div");
    c.setAttribute("id",this.id+"_left");
    c.style.width=this.bb_hor;
    c.style.height=this.content_height;
    c.style.cssFloat="left";
    c.style.styleFloat="left";
    c.style.backgroundImage="url( "+this.skinfolder+"/left.png )";
    if(this.is_IE){
        c.style.filter=this.iepngfix(this.skinfolder+"/left.png");
        c.style.backgroundImage="none"
        }
        g.appendChild(c);
    var l=document.createElement("div");
    l.setAttribute("id",this.id+"_contentBox");
    l.style.width=this.content_width;
    l.style.height=this.content_height;
    l.style.cssFloat="left";
    l.style.styleFloat="left";
    g.appendChild(l);
    var b=document.createElement("div");
    b.setAttribute("id",this.id+"_contentBoxBg");
    b.style.width="100%";
    b.style.height="100%";
    b.style.overflow=this.overflow;
    b.style.backgroundColor="#ffffff";
    l.appendChild(b);
    this.contentBoxBg=b;
    var h=document.createElement("div");
    h.setAttribute("id",this.id+"_content");
    h.innerHTML=this.glassboxContent;
    b.appendChild(h);
    this.content=h;
    var p=document.createElement("div");
    p.style.width=this.bb_hor;
    p.style.height=this.content_height;
    p.style.cssFloat="left";
    p.style.styleFloat="left";
    p.setAttribute("class","boxmiddle");
    p.setAttribute("id",this.id+"_right");
    p.style.backgroundImage="url( "+this.skinfolder+"/right.png )";
    if(this.is_IE){
        p.style.filter=this.iepngfix(this.skinfolder+"/right.png");
        p.style.backgroundImage="none"
        }
        g.appendChild(p);
    var e=document.createElement("div");
    e.style.clear="both";
    this.glassbox.appendChild(e);
    var q=document.createElement("div");
    q.setAttribute("id",this.id+"_bottomrow");
    q.style.width=this.glassboxWidth;
    this.glassbox.appendChild(q);
    var d=document.createElement("div");
    d.setAttribute("id",this.id+"_bottomleft");
    d.style.width=this.bb_hor;
    d.style.height=this.bb_ver;
    d.style.cssFloat="left";
    d.style.styleFloat="left";
    d.style.backgroundImage="url( "+this.skinfolder+"/bottomleft.png )";
    if(this.is_IE){
        d.style.filter=this.iepngfix(this.skinfolder+"/bottomleft.png");
        d.style.backgroundImage="none"
        }
        q.appendChild(d);
    var a=document.createElement("div");
    a.setAttribute("id",this.id+"_bottom");
    a.style.width=this.content_width;
    a.style.height=this.bb_ver;
    a.style.cssFloat="left";
    a.style.styleFloat="left";
    a.style.backgroundImage="url( "+this.skinfolder+"/bottom.png )";
    if(this.is_IE){
        a.style.filter=this.iepngfix(this.skinfolder+"/bottom.png");
        a.style.backgroundImage="none"
        }
        q.appendChild(a);
    var o=document.createElement("div");
    o.setAttribute("id",this.id+"_bottomright");
    o.style.width=this.bb_hor;
    o.style.height=this.bb_ver;
    o.style.cssFloat="left";
    o.style.styleFloat="left";
    o.style.backgroundImage="url( "+this.skinfolder+"/bottomright.png )";
    if(this.is_IE){
        o.style.filter=this.iepngfix(this.skinfolder+"/bottomright.png");
        o.style.backgroundImage="none"
        }
        q.appendChild(o);
    var e=document.createElement("div");
    e.style.clear="both";
    this.glassbox.appendChild(e);
    if(this.isvscreen==false){
        this.adjustBoxBorder()
        }
    },this.adjustBoxBorder=function(){
    var l=$(this.id+"_top");
    var b=$(this.id+"_bottom");
    var g=$(this.id+"_left");
    var n=$(this.id+"_right");
    var k=$(this.id+"_content");
    var c=parseFloat(getElementProperty(k,"width"));
    var m=parseFloat(getElementProperty(k,"height"));
    var a=parseInt(this.bb_ver);
    var h=parseInt(this.bb_hor);
    var o=parseFloat(getElementProperty(k,"padding-top"));
    var e=parseFloat(getElementProperty(k,"padding-right"));
    var d=parseFloat(getElementProperty(k,"padding-bottom"));
    var f=parseFloat(getElementProperty(k,"padding-left"));
    if(this.is_IE){
        if(this.width=="auto"||this.width==""){
            l.style.width=b.style.width=c-a+"px";
            contentBox.style.width=c-a+"px"
            }
            if(this.height=="auto"||this.height==""){
            g.style.height=n.style.height=m-parseInt(this.bb_hor)+"px";
            contentBox.style.height=m-parseInt(this.bb_hor)+"px"
            }
        }else{
    if(this.is_Opera){
        if(parseFloat(navigator.appVersion)<9.5){
            if(this.width=="auto"||this.width==""){
                l.style.width=b.style.width=c+"px"
                }
                if(this.height=="auto"||this.height==""){
                g.style.height=n.style.height=m+"px"
                }
            }else{
        if(parseFloat(navigator.appVersion)>=9.5){
            if(this.width=="auto"||this.width==""){
                l.style.width=b.style.width=c+f+e+"px"
                }
                if(this.height=="auto"||this.height==""){
                g.style.height=n.style.height=m+o+f+"px"
                }
            }
    }
}else{
    if(this.width=="auto"||this.width==""){
        l.style.width=b.style.width=c+f+e+"px"
        }
        if(this.height=="auto"||this.height==""){
        g.style.height=n.style.height=m+o+f+"px"
        }
    }
}
},this.iepngfix=function(a){
    return'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale")'
    },this.backgroundImage=function(a){
    try{
        var b=document.getElementsByTagName("body")[0];
        b.style.background="url( "+this.img_bg_path+"bg"+a+".jpg )"
        }catch(c){}
},window.onresize=function(){
    if(THIS.resize==true){
        var a=getScreenDimensions();
        THIS.glassbox.style.left=Math.round((a.screenWidth-THIS.glassboxWidth)/2)+"px";
        THIS.glassbox.style.top=Math.round((a.screenHeight-THIS.glassboxHeight)/2)+"px";
        if(THIS.overlay!=undefined){
            THIS.overlay.style.width=a.screenWidth+"px";
            THIS.overlay.style.height=a.screenHeight+"px"
            }
        }
}
}
}
function GETrequest(a,c,b){
    try{
        req=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP")
        }catch(d){}
    req.onreadystatechange=function(){
        if((req.readyState==4)&&(req.status==200)){
            if(c&&$(c)){
                $(c).innerHTML=req.responseText
                }
                if(b){
                GETrequest_callbackHandler(b)
                }
            }
    };

req.open("GET",a);
req.send(null)
}
function getScreenDimensions(){
    if(window.innerHeight){
        screenWidth=window.innerWidth;
        screenHeight=window.innerHeight
        }else{
        if(document.documentElement.clientHeight){
            screenWidth=document.documentElement.clientWidth;
            screenHeight=document.documentElement.clientHeight
            }else{
            if(document.body.clientHeight){
                screenWidth=document.body.clientWidth;
                screenHeight=document.body.clientHeight
                }
            }
    }
return{
    screenWidth:screenWidth,
    screenHeight:screenHeight
}
}
function getElementProperty(b,a){
    if(/MSIE (5\.5|6\.)/.test(navigator.userAgent)){
        b=$(b)
        }
        var c=b.style[toCamelCase(a)];
    if(!c){
        if(document.defaultView){
            c=document.defaultView.getComputedStyle(b,"").getPropertyValue(a)
            }else{
            if(b.currentStyle){
                c=IE_computedStyle.get(b,toCamelCase(a))
                }
            }
        return c
    }
}
function toCamelCase(a){
    for(var b=toCamelCase.exp;b.test(a);a=a.replace(b,RegExp.$1.toUpperCase())){}
    return a
    }
    toCamelCase.exp=/-([a-z])/;
var IE_computedStyle=function(){
    var d;
    var b=function(f){
        return c(d.currentStyle["padding"+f])+"px"
        };
        
    var a=function(){
        var f=d.offsetWidth;
        f-=parseInt(b("Right"));
        f-=parseInt(b("Left"));
        return f+"px"
        };
        
    var e=function(){
        var f=d.offsetHeight;
        f-=parseInt(b("Top"));
        f-=parseInt(b("Bottom"));
        return f+"px"
        };
        
    var c=function(g){
        var f=document.createElement("DIV");
        f.style.width=g;
        d.parentNode.appendChild(f);
        g=Math.round(f.offsetWidth);
        d.parentNode.removeChild(f);
        return g
        };
        
    return{
        get:function(h,g){
            var f;
            d=(typeof(h)==="string")?$(h):h;
            var g=(typeof(g)==="string")?g.toLowerCase():"";
            g=g.replace(/\-/g,"");
            switch(g){
                case"width":
                    f=a();
                    break;
                case"height":
                    f=e();
                    break
                    }
                    return f
            }
        }
}();
if(typeof($)=="undefined"){
    $=function(a){
        return document.getElementById(a)
        }
    };
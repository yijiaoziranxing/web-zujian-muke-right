/**
 * 内容管理对象
 */
   var jdata=[];   // ajax    好像并没什么卵用


var H5=function(){
    this.id=('h5_'+Math.random()).replace('.','_');
    this.el=$('<div class="h5" id=" '+this.id+' "> ').hide();
    this.page=[];
    $('body').append(this.el);
      /* 新增一个页
      *
      * */
    this.addPage=function(name,text){
        jdata.push({isPage:true,name:name, text:text});//ajax    好像并没什么卵用


        var page=$('<div class="h5_page section">');

        if(name !=undefined){
            page.addClass('h5_page_'+name);
        }
        if(text !=undefined){
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page);

        if(typeof  this.whenAddPage==='function'){
            this.whenAddPage();//执行
        }

        return this;//链式调用需要
    };
    /*新增一个组件*/
    this.addComponent=function(name,cfg){
        jdata.push({isPage:false,name:name, cfg:cfg});//ajax  好像并没什么卵用

        var cfg=cfg ||{};  //cfg没传就cfg={}
        cfg= $.extend({   //cfg没传或者传的cfg中没type参数.就默认extend一个type:base
            type:'base'
        },cfg);

        var component;  //定义个变量 存储组件元素
        var page=this.page.slice(-1)[0];//！！写法是重点。拿到标准jquery page dom对象

        switch(cfg.type){
            case 'base':
                component=new  H5ComponentBase(name,cfg);
                break;
            case 'polyline':
                component=new  H5ComponentPolyline(name,cfg);
                break;
            case 'pie':
                component=new  H5ComponentPie(name,cfg);
                break;
            case 'bar':
                component=new  H5ComponentBar(name,cfg);
                break;
            case 'point':
                component=new  H5ComponentPoint(name,cfg);
                break;
            default:
        }
        page.append(component);
        return this;
    }
    /***h5对象呈现********/
    this.loader=function(firstPage){ //下面的放进了h5_loading.js
        //this.el.fullpage({
        //    onLeave:function(index,nextIndex,direction){
        //        //$(this).find('.h5_component').trigger('onLeave')//触发onleave方法
        //        $('.h5').find('.h5_component').trigger('onLeave')//触发onleave方法
        //    },
        //    afterLoad:function(anchorLink,index){
        //        //$(this).find('.h5_component').trigger('onLoad')
        //        $('.h5').find('.h5_component').trigger('onLoad')
        //    }
        //});
        //this.page[0].find('.h5_component').trigger('onLoad');
        //this.el.show();
        //
        ///*************/
        //if(firstPage){
        //    $.fn.fullpage.moveTo(firstPage);
        //}
    }
this.loader=typeof H5_loading=='function'? H5_loading:this.loader;

    return this;
}
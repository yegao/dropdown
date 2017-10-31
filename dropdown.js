/*!
 * https://github.com/yegao/dropdown
 *
 * Copyright 2017, yegaogao
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
;
$.fn.extend({
    dropdown:function(o){
        var list = o.list||[],
            it = this,id=o.id,
            $now = $(it).find('.dropdown-now').eq(0),
            $now_box = $(it).find('.dropdown-now-box').eq(0),
            $menu = $(it).find('.dropdown-menu'),
            text=o.text||'',
            extra = o.extra || '',
            callback=o.callback||function(){
                    $now.data('id',$(this).data('id')).text($(this).text());
                    $(it).removeClass('active');
                };
        $(this).removeClass('active');
        $now.data('id',null).text($now.data('defaultText')||$now.text()||'');
        // you can add this if you want to load mCustomScrollbar
        // $menu.empty().removeClass('mCustomScrollbar _mCS_2 _mCS_1 mCS_no_scrollbar');
        if(o.edit){
            $(it).find('.dropdown-edit').remove();
        }
        if(o.top){
            $(it).find('.dropdown-top').remove();
        }
        if(o.bottom){
            $(it).find('.dropdown-bottom').remove();
        }
        if(o.edit){
            $now_box.find('i').eq(0).off().on('click',function(){
                $(it).toggleClass('active');
            });
            if(o.edit.xml){
                var $edit = $(o.edit.xml);
                $edit.addClass('dropdown-edit');
                $now_box.append($edit);
                $now.off().on('click',function(){
                    $edit.addClass('block');
                    if(o.edit.callback){
                        o.edit.callback($edit);
                    }
                });
            }
        }
        else{
            $now_box.off().on('click',function(){
                $(it).toggleClass('active');
            });
        }
        if(o.top && o.top.xml){
            $menu.css('border-radius',0);
            var $top = $(o.top.xml);
            $top.addClass('dropdown-top');
            $menu.before($top);
            if(o.top.callback){
                o.top.callback($top);
            }
        }
        var i = 0,len = list.length;
        for(;i<len;i++){
            var $li = $('<li class="dropdown-item" '+(id && 'data-id="'+(list[i])[id]+'"' || '')+'><span>'+(list[i])[text]+'</span>'+extra+'</li>');
            $menu.append($li);
            $li.off().on('click',callback);
        }
        // you can add this if you want to load mCustomScrollbar
        // if(0<$menu.length){
        //     $menu.mCustomScrollbar({
        //         mouseWheel:true,
        //         theme:"dark"
        //     });
        // }
        if(o.auto && typeof o.auto == 'function'){
            o.auto();
        }
        if(o.bottom && o.bottom.xml){
            $menu.css('border-radius',0);
            var $bottom = $(o.bottom.xml);
            $bottom.addClass('dropdown-bottom');
            $(it).append($bottom);
            if(o.bottom.callback){
                o.bottom.callback($bottom);
            }
        }
        $(document).on('click',function(event) {
            if($(it).hasClass('active')){
                var flag = true;
                var $target = $(event.target);
                if(flag && !$target.closest($(it)).length) {
                    $(it).removeClass('active');
                }
            }
        });
    }
})
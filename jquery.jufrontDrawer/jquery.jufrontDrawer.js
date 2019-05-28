/**
 * jquery抽屉插件
 */
(function ($) {
    $.fn.jufrontDrawer = function (options) {
        let that = this
        let id = that.attr('id')
        let switch_btn = $(`[data-drawer="#${id}"]`)

        // 关闭事件
        function close() {
            that.addClass('ready-hide')
            setTimeout(function () {
                that.removeClass('ready-hide').removeClass('active')
            }, 200)
        }

        // 显示
        function open() {
            // 即将显示
            that.addClass('ready-show')
            //延迟
            setTimeout(function () {
                that.removeClass('ready-show').addClass('active');
                if (!that.is(':hidden') && options.success && typeof options.success === 'function') {
                    options.success();
                }
            }, 200);
        }

        that.append(`<a href="javascript:void(0);" class="bg" title="点击背景关闭"></a>`);
        console.log('33333', typeof options.maskColor)
        if (typeof options.maskColor === 'string') {
            this.children('.bg').css('background-color', `rgba(${options.maskColor})`);
        }
        if (switch_btn.length > 0) {
            $('body').on('click', `[data-drawer="#${id}"]`, function (e) {
                open();
            });
        }
        // 点击背景关闭
        if (options.mask === false) {
            let bg = that.children('.bg')
            bg.attr('title', '无法点击背景关闭');
            bg.css('cursor', 'default');
        } else {
            that.on('click', '.bg', function (e) {
                close()
            });
        }
        // 查找关闭的标签，如果存在
        if ($(`[data-close="#${id}"]`).length > 0) {
            that.on('click', `[data-close="#${id}"]`, function (e) {
                close();
            });
        }
        return that;
    }

})(jQuery)
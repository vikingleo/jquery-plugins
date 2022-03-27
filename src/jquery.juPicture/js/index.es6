(function ($) {
    $.fn.juPicture = function (options = {}) {
        var that = this
        var icon = {
            edit: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMAv9ZVqvsqLDLu5dwv9FHiSz/x3yLnQgvZTjj4xzu3EulGHfaVZjUYzLt5646h0bF/BnFfmayF1lRGDwAABfxJREFUeNrt3Ql22jAUheEbpjBDKEOZ5xAIZICkb/87a9Oe1rUiIcsCWXL0LyAnXyybZx3HwOfz+Xw+n8/HNl3cjhdwu8L6LUO/m21X2R4crftMocpvTTjY/YE+NzrBtdbEb1uHU72QsHeXzpUMnenJnWsYna9WhRuRtDu4EFE6JHlKh+SXIw2S11+ONEg+HGmQfDjSIOE7KrtsAYNjzh0J37Ha4E+njiMSriOfxb+qWyckfEd41s05IOE6hn3AMUlvyBsOm4BjEq6j1QQck3AdpTkQTWLN/Qnf0QUiSlpTWFFvyXHMAodcMnmFBXEdnTtAQZJD8nEd5TGgJMlCMTOOxgBQk4xgPrnj2z2gKjki0aY13rhbBJQljSnMJnd8rwIxJCcYTe7I3CJaW2suXHxHARGrdsID5iuMFzi0JCc7rsCBI+7awjv93x4GkzuCs13ezoKTZNoi0pZ0k/9MZBxqnyRB4fEMRgsc+pIChYIso45gSpGXTRiyCRx6kp15iNyhPgFjUTENkTsyPMkY51tRkpBNiecoZNTvrrIU7gmSDDhuwZV0xgoOWkGcMQcEkjuJw/CsJXeIJLOu3GF+dytwsPOIWPLYjep4g7EWYodYUupGc1ARgsw5JJK5xGH6gCweBQ6ZpDUXO+QHxIyjEjjOSZpyxxr8DDmKQBRJrSlzvECUeYdcInZkwM+0Qy5Z9s85CIZazCQOuWRYt8DRnknvN+SSfF3kyINf4g7gli9xziGSJOzoCBzqEgcdkSVDGCpwsHfjckk6HB+SdDgiSJYwVLsscUglFjvKgUNTUgM/Q44xoCRJ3lHQcgSSdDg+JOlwCCQtCDLi6MRxFJJ1NHgOB48H13F3KUcJgow4Zl/ZUf2epOM2zY7H7qUcjxDkHfyq3y7mqPBWKPiZcZTiOIppdnTAzzsEFbmO+Rd23PN+UhmCjDhaDjoq3hHB0YAgex0D+xy1ZhxHwzusd3yDIO+QTNvajnHZOsfyYo4KBJlx9L3DJsfwSzs69LnvEGSv4868Q/50wld2zFSeW/KOazu6aXE8JukoJOcovj2Qeq3JfhrVQdlLOZ4gbk5xKxfxqdHFHCVFx5E06oGpnZijSzqtwHSiy0jmqg6sSKs2wh1IQ6LjwIi0qiNchTQkOg6QXi8INSa6gGTeos89ANc8Ik2E2pGGRMOhf45sEGpCGhINh/ZV64hQ0yVpS5oxHPqfIwhXJ9KVNGuKjqBxhmI2AdOeNCS6DqB32t+o97yrgy00s81ySpLAkfx7ZgrMywl4EhccWDP/2MSVOODAgZleFCX9pSUOdJiJQiCx3nHHvIhEKLHcwcwnfShJ+kNrHNgSBeV7kEjkjhsk0ob+bwsoSOoWOZh/1tpBQVLPW+Rg5ugBJBJrHcgwj1XIJLY6bpn5RC6x0/F5PpFLrHTgnZlPIkqyPMdW9tEb7I3qN1tlgaDXGjOfRJNkKYbjjS7cQ1t0y7xHNEksx4guX0/w3SZ9RJPEcdTpCq34f6ZhD7ElE519H/0t00W0Xyan78CIrlFdNp+wEm0H6Cq9cC8kA6hKAofhI8JumTYiP9aWkzrMnyPBlmmR/u8AiUTHgT5doSN3u3KNWJJnhT2OS8ffvG7jXL1+TssBrEkv8VLoRd7hHOy20uMhb7DP3fDT3DKdR3qRa3ud6xAJHTa0Z65kvPW0fyIiyx3hm8Nlj7Oe8kQOOM7NJ+31oUxETjhwYueTYD09UITeYUnhy+n93/U0GRI55UCJfTy6fTo0iMg1xyA8nzR/rycHHczNYY3OZeVXalxgrt7a5OhRvDI/7mFVdVKvdLDwe2PfSLHtegMb+0YKPdm2noIKFLXyoQ+lTqv3G4U0x/gjRWn4rL6eVmSqCfMpImr0o6gxLxhJDqms+ojVgUx2PAtp5eJfn9pkto1wJ+BmV4RGTTJbE+CMiJl9U3+AM9sLUKRQncNpij+5dETCb3XNT45VhHPlHGkH6+DhRxfcXLhqrXC1FiUyWA/Xq78lU5WLuGrr3He6fq3J3pIv4/T5fD6fz+fz+Xw+nxX9BDmWwtsCTvAiAAAAAElFTkSuQmCC',
            preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADICAMAAAApzna2AAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAZ7m/rIHNjkXK8XifShCy69rRhccN+uCZTz4p9V6lbOXiiWFCOTEtI5LVtls0cX0UBlRXGRvEHQoqfajzAAAHM0lEQVR42uza6XKiUBAF4AOCIooIgntc45KMRpOZJHPe/8Xm10zNwtKXCxNTxfcCeoqmuy+AWq1Wq9VqtVqtVqvVarVarVar1UrSO3jGoNuImo/Buu8OOXT76+CxGTW6A8M79PCZHU4D/9FlNvfRH5wO+Gxir7MIqSJcdLwYn8Ozt2mzmLfL/TNu3LTzZU4drvW0w81yWgHLELQc3KDpJmR5ws0UN+VsN1m2pn3GjXg++ayGf7qFxnMYBKxOMDjgY71YrJr1go9jtPk/tA2IfNZ80oyfOZ8k42fP998zOiY/gung/3h/4Ed5eMd/sBzx44yW+NfNFOi8vw7CdqMdBuv+/FZLNW5R2cjs2oa3v+JP171n2F1zRGWtGJXxmlQxj8bLaQ/ZetPlOJpTRdNDNZ43lHPNzhly+yffpdzmGRW4f6PQ0LQdqJtezCGF3u5ROpsyo+7dK4p6veuOKGOjXMcvlGgPHOhyBm1KfDmiRE5AAWuCckwsCgQOSmMMmWu92aM8+82auYYGSrJhrsjooVw9I2KuDcrwajGP+RVV+Goyj/UKbfuQORYequItmCPcQdP9mtnGO1RpN2a2vmb9TJjNmkIqdr4u7bHV6A6Wk/0VYlOL2Z6g4cRM5gQyz86myT8Mg8byHTITs7J+02GW5hZCYyaLOnuIbJvM0kVBC2Zp9SB1z1RN2RbUazGLj0JMZmhOoMBnhugFApOQGUwU4AsuoNQLMy3O2pfRL7dEwwkURcw0HFx1L+MCisZMt/im0bNSBAbyfVsw3RhKWkx3gbqvzGVKSvXCdC0oGDDV+gUF7JhvNZHc0WumGpRSU+YMRfQoYSDfzGSqJYS24kqQ61PC1mwR9xDxmGqLoiKKPGg+Mtpr3jI7FPZIGUtzXT4i13HNFKMeiptTqAGB1z5TPOZOsl4k+Gl1V4p1INFgCvM7slmVBMSecme9iFbBOdGAliXlhrFexE6hY04DekwqsCDSKDAz4nZFAa9DqujoRWzHSPPAZBE03VHNC0TeBFNV9D9W0OVTzeoAkYDJ7pBotmKi+RWaPKp6gEjsMtFqpjQoHOjyqco9QuTAZJZKQzegy6M6GzIT+TFj1pf1NXVxRHWjGDJPTNSfSWu0BW0LFrGEUEtYpwYT+dDWYiFtSPmiu+u4YpLwveyAcicIvYdMsjrid10mcafQZbIoE1JTN/9Z/1Y0ONXN2ixuprsybfFLHOp+0HFMOpV9u6yo4U73U5gwxk8X7XV7G3Ze/85nr6jlAXINJrlkj8LhDnJdst864JfeadGnpjbkdsPMoTgWjHrRCjxqdO2TY9jdBssQa782GGcde79ABavgQMGXjMOwzwTuGQpmrIINBWc3dWO5K+H1v8EqmFDxlNqQI/0axZhVcKGkkdKuzkwyhZI3VqKMQ9o0eW8cQI3LSkBNN3mqtpPKI4aaOSsBNb15YpmOythHV6wEAO1mM8I8KbaqgJWAqib/Mf/R3tktpw3EUHgp2FD/AK3BNIUQZiABbLchwEX0/i9WOlNz1Th2jhTbrL4XyGjGYVero3NYKsw/9WZWiH+l1y6w9gr/+5Xy/NL0KKeBvzQsp0VAOQ08LR45Tvw9SbDiOPE3PLc2hyRIOW5tTDfvI0ngcNy8mbqnM0lwx9A9FXXA9R/5O4YOmO0VIyB+ZgZ/xUBeouRb4BHfS5R5hlvsX8SPw/eaaKYJ/CdWxM4RPa2SKeer/oi4+fYKv+pDkxn5M9+BJzPgdK1YS4cTz+HpGvOENCJeAnhCyj3l3nnESohOufmVCn3ipGtQpQK/2mS+IEY6qNoEUwzJN4mzKagYElF9bWNi4wFVfWHKPfnpxdKAyj0h9eU5IR5mO1B9KaagvSMeTqiCVk4F7RAHe1QFLalkTwnnK6pkl91GWBHMANxGEN4omROKg26USG8FrQnDNyU4A1tB2GYXXuJvfLNLfjtvi91l8O08+Q3LwwS7b+MblvJbsntMjYhvycpvOvtUnfGJcdNZflt9PaaKBHPWbXV5x4FdtU7DPbI7Dsi7RgxSKkvsvMKuEbU4f6wTKkVPyvlD3r1lGC3oPeLRulRn5gIyRkkHnie/0O5xEWRnaQceeRelQ/aG3eP4R/jC46JUvxOWefK7yZiueG4vWv809TthcbmZ5Rzmm+PDc/Z4MKYpbmbGbFY37khngatgKWfIVMgZMpV2hszpN9bds68Oreqya5FTsgVu1xcGjXIsH5ic1rjO9+p3nbcgOcCG9AeGBI9Jd9LoBA8bUlhsSNKxIA3pLx2XPhu3Ywppe41l6mtzjWXra2uNQH04p09IeDyZD6EpnRV4uRdLWr1vQtKqDWm5ViQeW5FanSePf7nl5PFrerx7w+nx/xiG/vJ7tX+8pR9OTdvYZtEo8agYLxlFWRMOvY8z3IadKOhO3OTS23sxxd6l10/cSTeIOuF2aBRFURRFURRFURRFURRFURSFhz9Bw+JbaPj0jwAAAABJRU5ErkJggg==',
            remove: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMAQL8/f4DNdmvB2584aZoU4ZBLyHAt+KuViWRZJxkO61WjYEgeBdVdQ/G8s1IjejDlEZkfVQsAAANmSURBVHja7d2JbtpAFIXhAyU0MbbZ952wZW/P+z9ck6ZpxkQyJswMBp3vAZB/bCwkLr44xmq0XVxlUMogarQnOIXlsLemZUG8GcGvUY+OdEP4M+7f0Z36GJ6EazoVNODFls4N4EGLHjxj13l2kLdwbEhPQjjV/kVPgjZcqtCbChwq0KMC3OnSoy6cueU+Z3Ln6vOLadGSGr+ow5U1d0QjWDN+3G0J4EibSc3fsGvOpBe4ccWEDqx7YEIJblSYcA3rnu5oiuHGPU1lODCn6R5uBO7vKSWa1nCjQ9MjHGjQ1IEbHr5BFJiAdwpRiEIUohCFKOSVQhSiEEshw0qZZ6scD/BPnWfuHn9NefaCizgfb1pAlRehipAXoYABL0J0OSEXc2ldzIcdMS/AM17xAuDNyy+euWmId/2AZyzo4VO1cLaqEBERERGxZbmoxLMlsqgO+9dtZNK+7s9+Zz2A4dLe5HUde40qfHPTwF6PTb6Jn7DXtslXzY21iaAp9hjwQ5x98GuTeYxybm1Eq45US35aIFXE/zpVpIot/YNhQMMQaXo0IBUN/ezzuaGt4b8HpFjR1ECKGTM392zNmJdpuMs+21xHipiZ3+ciDTUvvxr+pKmIFE2aIqS4o+nFf0gNKabZZ1WZ8MN/yA1SlBWiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQ6yFTpOicUUgTKda5DhnSVMm+UaiRs5AxTYvsGxUnOQvBQ/LosjZ3kbeQW37qI/OTHMLchSDmh2CFVJMaP9SRv5D/135vgj2qFb6LkMcQrAbdWvP5CRmMSs2guwDyGXIwhShEIQpRiEJMClGIQtIpRCEKSacQhSgkXX5DOjQ14NmECSG+bUrTT3hWYMLY1kb2OTy7trbkvExTJ4RfRZoCa6/EMrzqMaGI74uYVIdHcya18H1P3FFujOHF+LHGHSMc4YZf1Ioe1PhFE8e4Ym6UcIxqbnaOBVUcpcWcaOE4q5ysDi6vcKQhc2GGo/1kDsxgQYknt8GrCzgnJVgy4yHy23HikggWhRWeSCWEXdsuT6C7hX3taF6jR0G8GcGVSbsRXR2sdLCo0Z7gIH8AcN5NNF3hKvsAAAAASUVORK5CYII=',
            select: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMAL7+mW4qA2LGPhWFSQzrt5ODcy8UzHw4J9KuTe3dsVikkFhL71NC2mZZOS0c/BPjooZ1wZ7oa8XI3m34gNcQAAARPSURBVHja7dwJUiJBEAXQbEBA9lX2Tdl3RED997/XTGg4yky2A1LdXUnkO4ARP1Toqp+dpJRSSimllFJKKaWUUkpZpJJuxl+3M5IuUsCbkEOiNfBHlAQL4wvBv5Mxvho8kFC3OHZLMiXwlyKJ1MQ/RP5tbfGvMsmTBKNC4kTAiJE4U7wR/6mVroERuydhMllwIiSMkwcnQcL0BtfxD7IvgjMmYSohcMIkzHIETpykqYOzE/eVvgGnJO4LZALO8I6EuQEn1iVhouDkXkiYFjjZNAnTBmcl7mYuCVaHhOmAlSRhZmC1SZhFDZwWCfOyxifBl73dAjg3JMzdEJwJCXNfAmdDwlRD4NRJmjg4oyoJEwYnJO62+hGcorgDSAOcgbgDSAKcvLjyoAnOOkPCPINTm5MwT2ClSJgIruPGPQXWEwkz74OzJWEWB3CaJEw5dx1NTjd2HU2Oy0HqlYR5KF1Hk1PdgRNfkjDxK2lywlfS5IzBGfZImFtwCuKGFRNX3eQc0nS29HYSarRnFIw2OP3pz49kowydw7omp4QP/Sj5LmKsyRkGemM/NdbktAJ9ZE6vTDU51RwCTJLJGmtynCB7FCdvrslJIbgkvZjBJieKwJLsiyabnFRgh8uK2SbHQUBJliOzTU61AE6DvFY33eR0EEh3ujHf5NwEkWTixShZHb4P1N540+SE4fOFUhSc7ILImySP5I0WOKs5XW7jZ5K2l03OBr7NSyS9bXIe4dOFZce1yZGVZAbWM5nz6keSRc2HJmcMz+dxymu3A4gvSZZkSNevB7uJt0nuBr59yDfAilfJgPviN/+EgpJUQ742ObdgjSoeNTmhCr0TkyQMTnFPnrkBa/fgwfft4KjJkZCkAU7eIYbnSUL3Bn6iv6NkCcNJmuDU0sTwJ8ne4EgcpuSDKFilnyR5MnAAMZ/kzusmx9okqcDfyWmCVeydORIX/Ds5JpJkDjaMkrVw6WCFk7NjlMwtSZdO0yvYshTgGZdM2++H9oySuSVxThqJs2kpwBas2P+TLHfg7Kp0EnuSxG0bJWuDVSjTt8L2LQX4UZIxOIUuBekJrPzLuQfmXJlMMJ8kc94x4LAgI8wnyWXOebjp27AUIOmSZEGMrc1LAVySrJkkSbuXArglSdNfIoEfQM496fFrPaYI/gDywyTz45E4AUsBXJIcviTJZEUsBeiAVZt9HqSELAVwSzL9GIkTsxQg1QdnNX1vcgQtBXBLknIdiRtZ+k7OdAVOP7UcCVsKMK3xSepuTY61ZjWcLGb1OzmnJ8lb/k7O/ICTZK1fCjDP4gQrAUsB0sdJBC8FOEoieinAYo0PwpcCfCaRvhQgk8Mb+UsB3pPY0ORc6iUPXoOEcUnySOKUC7Y0OZcnsaXJuZQTw7GQuKUAf5LY0uRcyhng00DcdrUvug18GEvO8VskL+h591tVpxPtlK29Z1BKKaWUUkoppZRSSimllLo6vwBOFwLOEijCEwAAAABJRU5ErkJggg=='
        }
        var config = $.extend(true, {
            readonly: false, //整个组件只做展示用，没有任何操作，只能通过初始值展示
            fixed: [],    //固定的图片，元素为图片索引，设置该值后，这些索引的图片，将不能操作删除
            urls: [],   // 预设图片，多张，单张也要用数组，
            border: 'dashed',    // 边框，默认实线，虚线：dashed
            count: 3,  //总数，默认无限，比如设置3，上传3张后，新增按钮消失
            addIcon: 'icon-plus',  // 添加图片的icon
            addIconPrefix: 'basic-icon',
            gutter: '10px',
            width: '100px',
            height: '100px',
            singleSelect: true, //单选还是多选
            selected: [],   //已选择的索引
            ajax: {
                type: 'POST',
                data: {},
                url: '/tool/image.html',
                header: {}
            }
        }, options)
        var gutter = config.gutter.substr(0, config.gutter.indexOf('px')) / 2 + 'px'
        that.css('padding', gutter)

        // 返回当前对象，以供连式操作
        return this.each(function () {
            // 基本dom


            // 动态添加已存在的图片，初始化
            function initContainer() {
                var style = 'width:' + config.width + ';height:' + config.height

                var dom = ''
                if (config.urls.length) {
                    that.html('')
                    $.each(config.urls, function (index, item) {
                        dom +=
                            '<div style="padding:' + gutter + ';">' +
                            '<div class="u-p u-p-normal u-p-border-' + config.border + ' " style="' + style + '">'
                        //如果有默认选择
                        console.log(config.selected, index, config.selected.indexOf(index), config.selected.indexOf(index) === +index)
                        if (config.selected.indexOf(index) > -1) {
                            dom += '<div class="u-p-select-mark" style="background-image:url(' + icon.select + ');"></div>'
                        }
                        dom += '<div class="u-p-img"><img data-index="' + index + '" src="' + item + '" alt=""></div>'
                        if (!config.readonly) {
                            dom += '<div class="u-p-control">'
                            if (config.fixed.indexOf(index) <= -1) {
                                dom += '<button  type="button" class="u-p-remove u-p-control-icon" data-src="' + item + '" data-index="' + index + '"  style="background-image:url(' + icon.remove + ');" ></button>'
                            }
                            //预览
                            dom += '<button  type="button" class="u-p-preview u-p-control-icon" data-src="' + item + '" data-index="' + index + '"  style="background-image:url(' + icon.preview + ');" ></button>'
                            //选择
                            if (config.count !== 1 || config.fixed.length !== 0) {
                                dom += '<button  type="button" class="u-p-select-btn u-p-control-icon" data-src="' + item + '" data-index="' + index + '"  style="background-image:url(' + icon.select + ');"></button>'
                            }
                            dom += '</div>'
                        }
                        dom += '</div></div>'
                    })
                }
                $.when().done(function () {
                    if ((config.count === -1 || config.urls.length < config.count) && !config.readonly) {
                        dom += '<div style="padding:' + gutter + ';"><div class="u-p u-p-add-btn enable-feedback u-p-normal u-p-border-' + config.border + ' "  style="' + style + '">' +
                            '<input type="file" accept="image/gif,image/jpeg,image/png" multiple class="u-p-input-file">' +
                            '<div class="u-p-tip"><i class="' + config.addIconPrefix + ' ' + config.addIcon + '"></i></div>' +
                            '</div>' +
                            '</div>'

                    }
                    dom = '<div style="margin:-' + config.gutter + ';display:flex;align-items:center;">' + dom + '</div>'

                    that.append(dom)
                })
            }

            initContainer()

            var upload_ok_count = 0

            // @TODO AJAX上传事件，新增图片后上传
            function ajax(formData, fileCount) {
                $.ajax({
                    url: config.ajax.url,
                    type: config.ajax.type,
                    processData: false,
                    cache: false,
                    contentType: false,
                    data: formData,
                    header: config.ajax.header,
                    success: function (res) {
                        config.urls.push(res.data.url)
                        upload_ok_count++
                        if (config.singleSelect) {
                            config.selected = JSON.parse(JSON.stringify([ config.urls.length - 1 ]))
                        }
                        if (upload_ok_count === fileCount) {
                            initContainer()
                            upload_ok_count = 0
                            if (typeof config.ajax.success === 'function') {
                                config.ajax.success({currentUrl: res.data.url, urls: config.urls, selected: config.singleSelect ? config.selected[ 0 ] : config.selected})
                            }
                        }
                    },
                    error: function (err) {
                        if (typeof config.ajax.error === 'function') {
                            config.ajax.error(err)
                        }
                        throw new Error(err)
                    }
                })

            }

            //预览事件，关闭预览事件
            $('.u-p-preview').on('click', function () {
                var box = $('.u-p-preview-box')
                if (box.length) {
                    box.remove()
                }
                var previewDom = '<div class="u-p-preview-box"><div><img src="' + $(this).attr('data-src') + '" alt="">' + '</div></div>'
                $('body').append(previewDom)
                setTimeout(function () {
                    $('.u-p-preview-box').addClass('active')
                    if (typeof config.preview === 'function') {
                        config.preview($(this).attr('data-src'))
                    }
                }, 100)
            })
            // 关闭预览
            .on('click', function (e) {
                var e1 = e || window.event
                if ($(e1.target).hasClass('u-p-preview-box')) {
                    $(e1.target).removeClass('active')
                    setTimeout(function () {
                        $(e1.target).remove()
                        if (typeof config.cancelPreview === 'function') {
                            config.cancelPreview($(this).attr('data-src'))
                        }
                    }, 200)
                }
            })
            // 选择图片，取消选择事件
            $('.u-p-select-btn').on('click', function () {
                var parent = $(this).parents('.u-p')
                var index = +$(this).attr('data-index')
                var select_dom = '<div class="u-p-select-mark" style="background-image:url(' + icon.select + ');"></div>'
                if (config.singleSelect) {
                    var find_mark = that.find('.u-p-select-mark')
                    if (find_mark.length) {
                        find_mark.remove()
                    }
                    config.selected = JSON.parse(JSON.stringify([ index ]))
                    parent.append(select_dom)
                } else {
                    if (config.selected.indexOf(index) < 0) {
                        config.selected.push(index)
                        parent.append(select_dom)
                    } else {
                        config.selected.splice(config.selected.indexOf(index), 1)
                        parent.find('.u-p-select-mark').remove()
                    }
                }
                $.when().then(function () {
                    if (typeof config.selectedOk === 'function') {
                        config.selectedOk({urls: config.urls, selected: config.singleSelect ? config.selected[ 0 ] : config.selected})
                    }
                })
            })

            // @TODO 新增图片
            $('.u-p-input-file').on('change', function (e) {
                var or_files = $(this)[ 0 ].files
                var amount = config.count - config.urls.length
                var files = []
                console.log(or_files)

                //当前超出数量
                function file_get_val() {
                    if (config.count > 0 && or_files.length > amount) {
                        console.log('选择的图片已超出限定数量，只按顺序保留限定数量内的图片')
                        for (var i = 0; i < +amount; i++) {
                            files.push(or_files[ i ])
                        }
                    } else {
                        for (var i = 0; i < or_files.length; i++) {
                            files.push(or_files[ i ])
                        }
                    }
                }

                $.when(file_get_val()).then(function () {
                    console.log(files)
                    config.ajax.data = JSON.parse(JSON.stringify(files))
                    $.each(files, function (index, item) {
                        var formData = new FormData()
                        formData.set('uploadFile', item)
                        console.log(formData)
                        ajax(formData, files.length)
                    })
                })
            })
            //点击删除
            $('.u-p-remove').on('click', function () {
                var parent = $(this).parents('.u-p-control')
                var all_o_control_btn = parent.find('.u-p-control-icon')
                all_o_control_btn.hide()
                var new_dom = '<div class="u-p-remove-modal"><p class="r-m-content">确认删除？</p><p><button type="button" class="r-m-btn r-m-btn-cancel">取消</button><button  type="button"class="r-m-btn r-m-btn-confirm">删除</button></p></div>'
                parent.append(new_dom)
            }).on('click', '.r-m-btn-cancel', function () {
                var parent = $(this).parents('.u-p-control')
                var modal_parent = $(this).parents('.u-p-remove-modal')
                var all_o_control_btn = parent.find('.u-p-control-icon')
                all_o_control_btn.show()
                modal_parent.remove()
            }).on('click', '.r-m-btn-confirm', function () {
                var parent = $(this).parents('.u-p')
                var index = parent.find('.u-p-img>img').attr('data-index')
                var urls = JSON.parse(JSON.stringify(config.urls))
                urls.splice(index, 1)
                config.urls = JSON.parse(JSON.stringify(urls))
                setTimeout(function () {
                    initContainer()
                    if (typeof config.remove === 'function') {
                        config.remove({removeIndex: index, selected: config.selected, urls: config.urls})
                    }
                }, 0)
            })
        })
    }
})(jQuery)

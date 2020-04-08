/// <reference path="../../../@types/jquery/jQuery.d.ts"/>
/// <reference path="../../../@types/jquery/jQueryStatic.d.ts"/>

import '../css/style.scss';

// 边框
enum Border {
    Soild = 'solid',   // 实线
    Dashed = 'dashed'    // 虚线
}

// ajax.type可选
enum AjaxType {
    GET,
    POST,
    DELETE,
    PUT
}

// 预设图标
enum IconData {
    preview = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADICAMAAAApzna2AAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAZ7m/rIHNjkXK8XifShCy69rRhccN+uCZTz4p9V6lbOXiiWFCOTEtI5LVtls0cX0UBlRXGRvEHQoqfajzAAAHM0lEQVR42uza6XKiUBAF4AOCIooIgntc45KMRpOZJHPe/8Xm10zNwtKXCxNTxfcCeoqmuy+AWq1Wq9VqtVqtVqvVarVarVar1UrSO3jGoNuImo/Buu8OOXT76+CxGTW6A8M79PCZHU4D/9FlNvfRH5wO+Gxir7MIqSJcdLwYn8Ozt2mzmLfL/TNu3LTzZU4drvW0w81yWgHLELQc3KDpJmR5ws0UN+VsN1m2pn3GjXg++ayGf7qFxnMYBKxOMDjgY71YrJr1go9jtPk/tA2IfNZ80oyfOZ8k42fP998zOiY/gung/3h/4Ed5eMd/sBzx44yW+NfNFOi8vw7CdqMdBuv+/FZLNW5R2cjs2oa3v+JP171n2F1zRGWtGJXxmlQxj8bLaQ/ZetPlOJpTRdNDNZ43lHPNzhly+yffpdzmGRW4f6PQ0LQdqJtezCGF3u5ROpsyo+7dK4p6veuOKGOjXMcvlGgPHOhyBm1KfDmiRE5AAWuCckwsCgQOSmMMmWu92aM8+82auYYGSrJhrsjooVw9I2KuDcrwajGP+RVV+Goyj/UKbfuQORYequItmCPcQdP9mtnGO1RpN2a2vmb9TJjNmkIqdr4u7bHV6A6Wk/0VYlOL2Z6g4cRM5gQyz86myT8Mg8byHTITs7J+02GW5hZCYyaLOnuIbJvM0kVBC2Zp9SB1z1RN2RbUazGLj0JMZmhOoMBnhugFApOQGUwU4AsuoNQLMy3O2pfRL7dEwwkURcw0HFx1L+MCisZMt/im0bNSBAbyfVsw3RhKWkx3gbqvzGVKSvXCdC0oGDDV+gUF7JhvNZHc0WumGpRSU+YMRfQoYSDfzGSqJYS24kqQ61PC1mwR9xDxmGqLoiKKPGg+Mtpr3jI7FPZIGUtzXT4i13HNFKMeiptTqAGB1z5TPOZOsl4k+Gl1V4p1INFgCvM7slmVBMSecme9iFbBOdGAliXlhrFexE6hY04DekwqsCDSKDAz4nZFAa9DqujoRWzHSPPAZBE03VHNC0TeBFNV9D9W0OVTzeoAkYDJ7pBotmKi+RWaPKp6gEjsMtFqpjQoHOjyqco9QuTAZJZKQzegy6M6GzIT+TFj1pf1NXVxRHWjGDJPTNSfSWu0BW0LFrGEUEtYpwYT+dDWYiFtSPmiu+u4YpLwveyAcicIvYdMsjrid10mcafQZbIoE1JTN/9Z/1Y0ONXN2ixuprsybfFLHOp+0HFMOpV9u6yo4U73U5gwxk8X7XV7G3Ze/85nr6jlAXINJrlkj8LhDnJdst864JfeadGnpjbkdsPMoTgWjHrRCjxqdO2TY9jdBssQa782GGcde79ABavgQMGXjMOwzwTuGQpmrIINBWc3dWO5K+H1v8EqmFDxlNqQI/0axZhVcKGkkdKuzkwyhZI3VqKMQ9o0eW8cQI3LSkBNN3mqtpPKI4aaOSsBNb15YpmOythHV6wEAO1mM8I8KbaqgJWAqib/Mf/R3tktpw3EUHgp2FD/AK3BNIUQZiABbLchwEX0/i9WOlNz1Th2jhTbrL4XyGjGYVero3NYKsw/9WZWiH+l1y6w9gr/+5Xy/NL0KKeBvzQsp0VAOQ08LR45Tvw9SbDiOPE3PLc2hyRIOW5tTDfvI0ngcNy8mbqnM0lwx9A9FXXA9R/5O4YOmO0VIyB+ZgZ/xUBeouRb4BHfS5R5hlvsX8SPw/eaaKYJ/CdWxM4RPa2SKeer/oi4+fYKv+pDkxn5M9+BJzPgdK1YS4cTz+HpGvOENCJeAnhCyj3l3nnESohOufmVCn3ipGtQpQK/2mS+IEY6qNoEUwzJN4mzKagYElF9bWNi4wFVfWHKPfnpxdKAyj0h9eU5IR5mO1B9KaagvSMeTqiCVk4F7RAHe1QFLalkTwnnK6pkl91GWBHMANxGEN4omROKg26USG8FrQnDNyU4A1tB2GYXXuJvfLNLfjtvi91l8O08+Q3LwwS7b+MblvJbsntMjYhvycpvOvtUnfGJcdNZflt9PaaKBHPWbXV5x4FdtU7DPbI7Dsi7RgxSKkvsvMKuEbU4f6wTKkVPyvlD3r1lGC3oPeLRulRn5gIyRkkHnie/0O5xEWRnaQceeRelQ/aG3eP4R/jC46JUvxOWefK7yZiueG4vWv809TthcbmZ5Rzmm+PDc/Z4MKYpbmbGbFY37khngatgKWfIVMgZMpV2hszpN9bds68Oreqya5FTsgVu1xcGjXIsH5ic1rjO9+p3nbcgOcCG9AeGBI9Jd9LoBA8bUlhsSNKxIA3pLx2XPhu3Ywppe41l6mtzjWXra2uNQH04p09IeDyZD6EpnRV4uRdLWr1vQtKqDWm5ViQeW5FanSePf7nl5PFrerx7w+nx/xiG/vJ7tX+8pR9OTdvYZtEo8agYLxlFWRMOvY8z3IadKOhO3OTS23sxxd6l10/cSTeIOuF2aBRFURRFURRFURRFURRFURSFhz9Bw+JbaPj0jwAAAABJRU5ErkJggg==',
    remove = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMAQL8/f4DNdmvB2584aZoU4ZBLyHAt+KuViWRZJxkO61WjYEgeBdVdQ/G8s1IjejDlEZkfVQsAAANmSURBVHja7d2JbtpAFIXhAyU0MbbZ952wZW/P+z9ck6ZpxkQyJswMBp3vAZB/bCwkLr44xmq0XVxlUMogarQnOIXlsLemZUG8GcGvUY+OdEP4M+7f0Z36GJ6EazoVNODFls4N4EGLHjxj13l2kLdwbEhPQjjV/kVPgjZcqtCbChwq0KMC3OnSoy6cueU+Z3Ln6vOLadGSGr+ow5U1d0QjWDN+3G0J4EibSc3fsGvOpBe4ccWEDqx7YEIJblSYcA3rnu5oiuHGPU1lODCn6R5uBO7vKSWa1nCjQ9MjHGjQ1IEbHr5BFJiAdwpRiEIUohCFKOSVQhSiEEshw0qZZ6scD/BPnWfuHn9NefaCizgfb1pAlRehipAXoYABL0J0OSEXc2ldzIcdMS/AM17xAuDNyy+euWmId/2AZyzo4VO1cLaqEBERERGxZbmoxLMlsqgO+9dtZNK+7s9+Zz2A4dLe5HUde40qfHPTwF6PTb6Jn7DXtslXzY21iaAp9hjwQ5x98GuTeYxybm1Eq45US35aIFXE/zpVpIot/YNhQMMQaXo0IBUN/ezzuaGt4b8HpFjR1ECKGTM392zNmJdpuMs+21xHipiZ3+ciDTUvvxr+pKmIFE2aIqS4o+nFf0gNKabZZ1WZ8MN/yA1SlBWiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhShEIQpRiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQ6yFTpOicUUgTKda5DhnSVMm+UaiRs5AxTYvsGxUnOQvBQ/LosjZ3kbeQW37qI/OTHMLchSDmh2CFVJMaP9SRv5D/135vgj2qFb6LkMcQrAbdWvP5CRmMSs2guwDyGXIwhShEIQpRiEJMClGIQtIpRCEKSacQhSgkXX5DOjQ14NmECSG+bUrTT3hWYMLY1kb2OTy7trbkvExTJ4RfRZoCa6/EMrzqMaGI74uYVIdHcya18H1P3FFujOHF+LHGHSMc4YZf1Ioe1PhFE8e4Ym6UcIxqbnaOBVUcpcWcaOE4q5ysDi6vcKQhc2GGo/1kDsxgQYknt8GrCzgnJVgy4yHy23HikggWhRWeSCWEXdsuT6C7hX3taF6jR0G8GcGVSbsRXR2sdLCo0Z7gIH8AcN5NNF3hKvsAAAAASUVORK5CYII=',
    select = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMAL7+mW4qA2LGPhWFSQzrt5ODcy8UzHw4J9KuTe3dsVikkFhL71NC2mZZOS0c/BPjooZ1wZ7oa8XI3m34gNcQAAARPSURBVHja7dwJUiJBEAXQbEBA9lX2Tdl3RED997/XTGg4yky2A1LdXUnkO4ARP1Toqp+dpJRSSimllFJKKaWUUkpZpJJuxl+3M5IuUsCbkEOiNfBHlAQL4wvBv5Mxvho8kFC3OHZLMiXwlyKJ1MQ/RP5tbfGvMsmTBKNC4kTAiJE4U7wR/6mVroERuydhMllwIiSMkwcnQcL0BtfxD7IvgjMmYSohcMIkzHIETpykqYOzE/eVvgGnJO4LZALO8I6EuQEn1iVhouDkXkiYFjjZNAnTBmcl7mYuCVaHhOmAlSRhZmC1SZhFDZwWCfOyxifBl73dAjg3JMzdEJwJCXNfAmdDwlRD4NRJmjg4oyoJEwYnJO62+hGcorgDSAOcgbgDSAKcvLjyoAnOOkPCPINTm5MwT2ClSJgIruPGPQXWEwkz74OzJWEWB3CaJEw5dx1NTjd2HU2Oy0HqlYR5KF1Hk1PdgRNfkjDxK2lywlfS5IzBGfZImFtwCuKGFRNX3eQc0nS29HYSarRnFIw2OP3pz49kowydw7omp4QP/Sj5LmKsyRkGemM/NdbktAJ9ZE6vTDU51RwCTJLJGmtynCB7FCdvrslJIbgkvZjBJieKwJLsiyabnFRgh8uK2SbHQUBJliOzTU61AE6DvFY33eR0EEh3ujHf5NwEkWTixShZHb4P1N540+SE4fOFUhSc7ILImySP5I0WOKs5XW7jZ5K2l03OBr7NSyS9bXIe4dOFZce1yZGVZAbWM5nz6keSRc2HJmcMz+dxymu3A4gvSZZkSNevB7uJt0nuBr59yDfAilfJgPviN/+EgpJUQ742ObdgjSoeNTmhCr0TkyQMTnFPnrkBa/fgwfft4KjJkZCkAU7eIYbnSUL3Bn6iv6NkCcNJmuDU0sTwJ8ne4EgcpuSDKFilnyR5MnAAMZ/kzusmx9okqcDfyWmCVeydORIX/Ds5JpJkDjaMkrVw6WCFk7NjlMwtSZdO0yvYshTgGZdM2++H9oySuSVxThqJs2kpwBas2P+TLHfg7Kp0EnuSxG0bJWuDVSjTt8L2LQX4UZIxOIUuBekJrPzLuQfmXJlMMJ8kc94x4LAgI8wnyWXOebjp27AUIOmSZEGMrc1LAVySrJkkSbuXArglSdNfIoEfQM496fFrPaYI/gDywyTz45E4AUsBXJIcviTJZEUsBeiAVZt9HqSELAVwSzL9GIkTsxQg1QdnNX1vcgQtBXBLknIdiRtZ+k7OdAVOP7UcCVsKMK3xSepuTY61ZjWcLGb1OzmnJ8lb/k7O/ICTZK1fCjDP4gQrAUsB0sdJBC8FOEoieinAYo0PwpcCfCaRvhQgk8Mb+UsB3pPY0ORc6iUPXoOEcUnySOKUC7Y0OZcnsaXJuZQTw7GQuKUAf5LY0uRcyhng00DcdrUvug18GEvO8VskL+h591tVpxPtlK29Z1BKKaWUUkoppZRSSimllLo6vwBOFwLOEijCEwAAAABJRU5ErkJggg==',
}

// ajax的配置
interface AjaxOptions {
    url: string;
    type: AjaxType;
    data: object;
    header: object;

    success(): void;

    error(): void;
}

// 全配置
interface Options {
    readonly?: boolean; //整个组件只做展示用，没有任何操作，只能通过初始值展示
    fixed?: number[];    //固定的图片，元素为图片索引，设置该值后，这些索引的图片，将不能操作删除
    urls?: string[];   // 预设图片，多张，单张也要用数组，
    border?: Border;    // 边框，默认实线，虚线：dashed
    count?: number;  //总数，默认无限，比如设置3，上传3张后，新增按钮消失
    addIcon?: string;  // 添加图片的icon
    addIconPrefix?: string;
    gutter?: string;
    width?: string;
    height?: string;
    singleSelect?: boolean; //单选还是多选
    selected?: number[];   //已选择的索引
    ajax?: AjaxOptions;  //ajax参数
}

// ;(function ($) {
//     jQuery.vkUploadImage = function () {
//
//     }
// })(jQuery);

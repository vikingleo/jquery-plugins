# 右出抽屉式弹层

## 说明

本插件实现点击按钮右侧出现抽屉式弹出层

## 调用示例

```js
$('#id').jufrontDrawer({
    mask:false,
    maskColor:'0,0,0,.5',
    success:function(){

    }
});
```

```html
<!-- 控制显示 -->
<button data-drawer="#drawer">点击打开</button>
    <!-- 弹出层主体 -->
<div id="drawer" class="drawer" data-mask="0,0,0,.5">
    <div class="drawer-container">
        <!-- 如果要在内部点击按钮关闭 -->
        <button data-close="#drawer"></button>
    </div>
</div>
```

## 参数说明

**`mask`**

说明 : 遮罩层是否可点击

类型 : `Boolean`

默认值 : `true`

**`maskColor`**

说明 : 背景颜色设置，使用`rgba`颜色值设置

类型 : `String`

默认值 : '255,255,255,.5'

**`success`**

类型 : `Function`

说明：点击打开后的回调


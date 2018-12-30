#### "コンポーネント(部品)"を組み合わせて作る

#### 再利用性の高いJavaScriptのSPAフレームワーク

```html

<div id="components-demo">
  <!-- 手軽に独自のHTMLタグを作ることができる -->
  <component-button>コンポーネントボタン</component-button>
</div>
```
<br>
<button class="square_btn">コンポーネントボタン</button>

<style>
.square_btn{
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
}
.square_btn:active {/*ボタンを押したとき*/
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);/*下に動く*/
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
    border-bottom: none;
}
</style>
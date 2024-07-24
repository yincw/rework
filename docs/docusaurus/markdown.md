
# Markdown 特性

### 标题

Markdown 语法 | HTML 标签 | 说明
---|---|---
 `#` | h1 | 标题 1
 `##` | h2 | 标题 2
 `###` | h3 | 标题 3
 `####` | h4 | 标题 4
 `#####` | h5 | 标题 5
 `######` | h6 | 标题 6

- https://commonmark.org/help/

### 段落

正文内容 *Italic*、**Bold**、\
换行

```js
// p、em、strong、br
// 正文内容 *Italic*、**Bold**、\
// 换行
```


### 链接

- https://docusaurus.io/zh-CN/docs/markdown-features/links

[Link](http://a.com)

```js
// a
// [Link](http://a.com)
```

### 图片

- https://docusaurus.io/zh-CN/docs/markdown-features/assets

![Image](/img/docusaurus.png)

```js
// img
// ![Image](/img/docusaurus.png)
```

### 引用

> Blockquote
> 
> > Nested Blockquote
> 
> — Docusaurus

```js
// blockquote
// > Blockquote
// > 
// > > Nested Blockquote
// >
// > — Docusaurus
```

### 分割线

---

```js
// hr
// ---
```

### 代码

- https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks

#### 内联代码

`code`

```js
// code
// `code`
```

#### 代码块

- `title` 显示文件路径及名称
- `showLineNumbers` 显示行号
- `{1,4-6}` 高亮行
- `// highlight-next-line` 高亮下一行
- `// highlight-start` 高亮行开始
- `// highlight-end ` 高亮行结束
- `live` 可交互的代码编辑器（实时显示在结果的预览区域）
  - `noInline` 命令式渲染 `render()`

```js  title="/src/components/HelloCodeTitle.js" showLineNumbers {1}
console.log("Markdown features including the code block are available");
```

```js
// pre
// ```js
// console.log("Markdown features including the code block are available");
// ```
```

```jsx live
// live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

```jsx live noInline
// live noInline
const project = "Docusaurus";

const Greeting = () => (
  <p>Hello {project}!</p>
);

// render()
render(
  <Greeting />
);
```

### 列表

#### 无序列表

- List Item
- List Item

```js
// ul > li
// - List Item
// - List Item
```

#### 有序列表

1. List Item
2. List Item

```js
// ol > li
// 1. List Item
// 2. List Item
```  

#### 嵌套列表

1. List Item
   - List Item
   - List Item
2. List Item
   - List Item
   - List Item

```js
// ol > li
// 1. List Item
//    - List Item
//    - List Item
// 2. List Item
//    - List Item
//    - List Item
```  

### 表格

表头1 | 表头2
---|---
单元格1 | 单元格2

```js
// table > thead、tbody > tr > th、td
// 表头1 | 表头2
// ---|---
// 单元格1 | 单元格2
```  

## 告示

- https://docusaurus.io/zh-CN/docs/markdown-features/tabs

:::note

Some **content** with _Markdown_ `syntax`. 

:::

:::tip

Some **content** with _Markdown_ `syntax`. 

:::

:::info

Some **content** with _Markdown_ `syntax`. 

:::

:::warning

Some **content** with _Markdown_ `syntax`. 

:::

:::danger

Some **content** with _Markdown_ `syntax`. 

:::

## HTML details

<details>
    <summary>Toggle me!</summary>
  
    This is the detailed content

    ```js
    console.log("Markdown features including the code block are available");
    ```

    You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)

    <details>
        <summary>Nested toggle! Some surprise inside...</summary>

        😲😲😲😲😲
    </details>
</details>


```js
// details > summary
// <details>
//   <summary>Toggle me!</summary>
// ...
// <details>
``` 
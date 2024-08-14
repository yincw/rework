
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
- https://docusaurus.io/zh-CN/docs/markdown-features/toc

### 段落

正文内容 *Italic*、**Bold**、\
换行

```js
// p、em、strong、br
// 正文内容 *Italic*、**Bold**、\
// 换行
```


### 链接

[Link](http://a.com)

```js
// a
// [Link](http://a.com)
```

- https://docusaurus.io/zh-CN/docs/markdown-features/links

### 图片

![Image](/img/docusaurus.png)

```js
// img
// ![Image](/img/docusaurus.png)
```

- https://docusaurus.io/zh-CN/docs/markdown-features/assets

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

#### 内联代码

`code`

```js
// code
// `code`
```

#### 代码块

[代码](./code)


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
单元格1 | 单元格2

```js
// table > thead、tbody > tr > th、td
// 表头1 | 表头2
// ---|---
// 单元格1 | 单元格2
```

## 依赖

- prod
  - @docusaurus/preset-classic
    - @docusaurus/core
    - @docusaurus/plugin-content-docs
    - @mdx-js/react
    - clsx
    - prism-react-renderer
    - react
    - react-dom
  - @docusaurus/theme-live-codeblock
- dev
  - @docusaurus/tsconfig
  - @docusaurus/types
  - @docusaurus/module-type-aliases
  - @easyops-cn/docusaurus-search-local
  - typescript
  - typedoc
    - typedoc-plugin-markdown
      - docusaurus-plugin-typedoc

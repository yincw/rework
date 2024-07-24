---
title: Front Matter
# hide_title: true
# hide_table_of_contents: true
# pagination_prev: null
# pagination_next: null
custom_edit_url: null
---

- 标题
- 侧边栏
- 文档目录
- 下一篇/下一篇
- 编辑
- 标签
- 最后更新时间

## 模式

- 文档模式
- 博客模式
- 页面模式

## 通用

{/* docs & blog & pages */}
参数 | 类型 | 默认值 | 描述
---|---|---|---
 `title` | `string` | Markdown 标题 | 博文的标题、文档使用的文本标题。 用于页面元数据和多个地方的备用值（侧边栏、下篇/上篇按钮……）。 如果 Markdown 内容没有标题，它会被自动添加到你的文档顶部。
 `description` | `string` | Markdown 正文的第一行 | -
 `keywords` | `string[]` | `undefined` | -
 `image` | `string` | `undefined` | -
 `draft` | `boolean` | false | Draft（草稿）页面只在开发过程中可用。
 `unlisted` | `boolean` | false | 未列出的页面在开发过程中和生产端上都可用。
 `hide_table_of_contents` | `boolean` | false | 是否隐藏右侧的文档目录。

### docs & blog

 {/* docs & blog */}
参数 | 类型 | 默认值 | 描述
---|---|---|---
 `toc_min_heading_level` | `number` | 2 | 目录中显示的最小标题层级。 必须介于 2 到 6 之间，并且小于等于最大值。
 `toc_max_heading_level` | `number` | 3 | 目录中显示的最大标题层级。 必须介于 2 和 6。
 `tags` | `Tag[]` | undefined | A list of strings or objects of two string fields label and permalink to tag to your docs. Strings can be a reference to keys of a tags file (usually tags.yml)
 `last_update` | `FrontMatterLastUpdate` | undefined | 最后更新时间
 `slug` | `string` | 文件路径 | 目录中显示的最大标题层级。 必须介于 2 和 6。

## Docs

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `id` | `string` | 文件路径（包括文件夹，不含扩展名） | 文档的唯一 ID。
 `hide_title` | `boolean` | false | 是否隐藏文档顶部显示的标题。
 `sidebar_label` | `string` | title | 这篇文档在侧边栏中显示的文本
 `sidebar_position` | `number` | 默认排序 | -
 `sidebar_class_name` | `string` | undefined | 在使用自动生成侧边栏时，给相应的侧边栏标签一个特殊类名。
 `sidebar_custom_props` | `object` | undefined | -
 `displayed_sidebar` | `string` | undefined | 浏览当前文档时强制显示给定的侧边栏
 `pagination_label` | `string` | sidebar_label or title | 这篇文档在上一篇/下一篇按钮中显示的文本
 `pagination_prev` | `string/null` | 侧边栏的上一个文档 |「上篇文档」按钮链接到的文档 ID。为 null 时不显示该模块
 `pagination_next` | `string/null` | 侧边栏的下一个文档 |「下篇文档」按钮链接到的文档 ID。为 null 时不显示该模块 
 `custom_edit_url` | `string/null` | editUrl plugin option | 编辑此文档时要跳转到的 URL。为 null 时不显示该模块
 `parse_number_prefixes` | `boolean` | numberPrefixParser plugin option | 	是否禁用本文档的数字前缀解析。


- https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter

## Blog

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `date` | `string` | 文件名或文件创建时间 | 博文的**创建时间**。
 `authors` | `Authors` | undefined | 博文**作者**列表（或者唯一作者）。

- https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter

## Pages

参数 | 类型 | 默认值 | 描述
---|---|---|---
 `wrapperClassName` | `string` | - | 为特定页面内容的包裹元素添加的类名。

- https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-pages#markdown-front-matter
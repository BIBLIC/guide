---
title: Notion Element Tests
sidebar_position: 13
slug: /0f32b693-740d-4601-a781-7ac6ef9b8455
---

import ReactPlayer from "react-player";

:::tip

This is a normal Notion Callout

:::




## Columns {#5a1922f9550c43399bf8857f9132f158}


There should be text on the left, and an apple on the right.


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.375)'}}>

A paragraph on the left.

Another paragraph.

</div><div className='notion-spacer' />

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.625)'}}>

![](./1528015832.png)



</div><div className='notion-spacer' />
</div>


## Embedded YouTube: {#6267aa3661f94149b69f3ec73bd8776f}


<ReactPlayer controls url="https://www.youtube.com/watch?v=VjINuQX4hbM" />


## Heading Links {#e6557b1f540a48bb8f376e666b577906}


Though Docusaurus doesn’t allow linking to heading 1 within their system (see [linking to a heading 1](/oranges) still works through docu-notion if we just code it up the same way as the others.

- Link to a [heading 2](/oranges).
- Link to a [heading 3](/oranges).

## Tables {#dc18b2a498884d83b92c53590d33ad31}


| head 1        | head 2 |
| ------------- | ------ |
| who           | this   |
| what<br/>yeah | that   |


---
title: "test"
date: 2022-10-22T19:55:12Z
lastmod: 2024-10-22T19:55:12Z
draft: false
description: ''
categories:
  - Uncategories
tags:
  - test
slug: "test"
keywords:
  - 
build:
  list: never
  publishResources: true
  render: always
---
<section class="photoset">
  <div class="photoset-row">
    <figure class="photoset-item single feature-" data-pswp-uid="1">
        <a href="#"><img data-ratio="1.4477" src="/images/1311.webp" data-webp="true" style="height: 691px; width: 1000.36px;" data-loaded="true"></a>
    </figure>
  </div>
  <div class="caption">A USB-C f YubiKey 5C security key plugged into my ThinkPad X1 Carbon</div>
</section>

<p class="double">This text has a wavy red line beneath it.</p>


![screen reader text](/snip/1122.png "caption")

[![Bookmark Style Card](https://svg.bookmark.style/api?url=https://bookmark.style)](https://bookmark.style)

{% callout type="check" %}
Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.
{% /callout %}


```python
# Example of code highlighting
input_string_var = input("Enter some data: ")
print("You entered: {}".format(input_string_var))
```

```html
<pre><code class="language-html">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

<!-- and it's easy to individually load additional languages -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"></script>

<script>hljs.highlightAll();</script>
</code></pre>
```

{{< audio "audio/bg.mp3" "A custom comment" >}}

{{< video "video/View_From_A_Blue_Moon_Trailer-576p.mp4" "A custom caption" >}}

{{< box info >}}
  Incididunt labore eiusmod culpa eu nostrud tempor laborum consequat eiusmod excepteur.
{{< /box >}}



<p class="has-dropcap">
<span aria-labelledby="word--first" role="text">
 <span aria-hidden="true">
  <span class="dropcap">我</span>
 </span>
</span>
became enthralled about this when I was planning for my 2013 trip to Japan. I came back with thousands of photos and spent months figuring out a way to best share the story of the trip on this site. I designed and developed the first version of my photoset collections then.
</p>

<div class="content-module yellow">
  <div class="header">
    <h4 class="toc" id="updates">Updates</h4>
    <p class="metasub">Jan 2020</p>

  </div>
    <p>There have been quite a few updates—really good updates—in the security key world since I published this article in October 2019. I have updated the respective sections throughout this article, but also wanted to note them in one place here:</p>
    <h6 class="top-2">Jun 2019</h6>
<ul>
      <li>
        <p><strong><a href="https://s#" title="#">Google has added WebAuthn support on iOS!</a></strong> 这是个真实的. The <a href="https://#/" title="#">Yubico post</a> has additional context.</p>
      </li>
    </ul>
    <h6 class="top-2">Jun 2018</h6>
<ul>
      <li>
        <p><strong><a href="https://#" title="#">Google has added WebAuthn support on iOS!</a></strong> 这是个真实的. The <a href="https://#/" title="#">Yubico post</a> has additional context.</p>
      </li>
    </ul>

</div>

<p>The only print books I have are basically just travel and coffee table books that serve more as decoration. <strong>If I read 24+ books a year and have no intention of reading them again, do I really want those books taking up space?</strong> If you really loved a particular book, then by all means purchase a print copy to display on your bookshelf. But not for me. <sup><a rel="footnote" href="#footnote-2" id="r2">2</a></sup></p>

<p>短消息发布<sup><a rel="footnote" href="#footnote-1" id="r1">1</a></sup></p>

Caramels tootsie roll I love macaroon jujubes. I love icing bonbon. Topping ice cream muffin marzipan lemon drops sugar plum biscuit. Chocolate cupcake powder macaroon bear claw I love cupcake icing. Jelly bear claw caramels jelly beans jelly-o soufflé. Powder cheesecake pastry lemon drops oat cake bonbon gummi bears. Jelly-o I love cake cupcake. I love halvah gummi bears caramels. Gummies I love gummies fruitcake cake marzipan. Oat cake donut cake brownie.

Powder cotton candy chocolate bar chupa chups I love cookie. Apple pie cotton candy ice cream jelly-o biscuit danish I love. Croissant dessert gingerbread cupcake tootsie roll. Powder jelly-o I love apple pie pie I love I love donut bear claw. Sesame snaps croissant cheesecake macaroon. Jujubes tiramisu cotton candy. Chocolate bar marshmallow I love toffee muffin toffee tootsie roll I love. Cotton candy oat cake chocolate cake croissant cake caramels cheesecake macaroon candy canes.

Fruitcake caramels macaroon. Jelly beans wafer caramels. Jelly beans chocolate bar liquorice jelly-o. Gingerbread brownie powder lemon drops sweet oat cake I love. Donut danish marshmallow cupcake tart jelly-o brownie tart lemon drops. Donut powder caramels muffin ice cream cheesecake cookie tart. Dragée I love topping.

<section name="footnotes" id="footnotes">
<h6 class="toc toc-hidden" id="fn">Footnotes</h6>
<p id="footnote-1"><a href="#r1">1</a> 当然这是验证</p>

<p id="footnote-2"><a href="#r2">2</a> And yes you can <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=200549320" title="Lend or Borrow Kindle Books">lend Kindle books to friends</a>. Amazon Prime members can also <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=200757120" title="Borrow Books from the Kindle Owners' Lending Library">borrow Kindle books directly from Amazon</a> (up to one per month) without needing to purchase them.</p>
</section>


<code>
  <ul>
  {{ range (first 25 (where .Site.RegularPages "Type" "post")) }}
    <li>
      <a href="{{ .RelPermalink}}">{{ .Title }}</a> 
      {{range (first 3 (.Params.tags))}}
        {{ $tagColor := substr (md5 .) 0 6}}
        <!-- hex code attach opacity to end of code, 1A is 10% opacity  -->
        <!-- to add link here, you'd need to search Taxonomies for url, but it doesn't have chinese tag -->
        <div class="tag" style="--tag-color: #{{$tagColor}}1A" >{{ . }}</div>
      {{end }}
      <div class="archive">- {{.Date.Format "2006-01-02"}}</div>
    </li>
  {{ end }}
</ul>
</code>

https://blog.douchi.space/static-blog-one-year-in-hugo-decoration-3/#gsc.tab=0
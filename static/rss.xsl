<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">

      <body>

            <main id="main" class="site-main">

                <article class="page post-full inner">


                    <header class="post-header">
                        <h1 class="post-title underline"><xsl:value-of select="/rss/channel/title"/></h1>
                    </header><!-- .post-header -->

                    <div class="post-content">

                    <p>
                    <strong>This is an RSS feed</strong>. Subscribe by copying
                    the URL from the address bar into your newsreader. Visit <a
                    href="https://aboutfeeds.com">About Feeds</a> to learn more and get started.
                    </p>

                    <p>
                    <a>
                    <xsl:attribute name="href">
                        <xsl:value-of select="/atom:feed/atom:link[2]/@href"/>
                    </xsl:attribute>
                    Visit Website &#x2192;
                    </a>
                    </p>

                    <h2>Recent blog posts</h2>
                    <xsl:for-each select="/rss/channel/item">
                        <p>
                        <a>
                            <xsl:attribute name="href">
                             <xsl:value-of select="title"/>
                            </xsl:attribute>
                            <xsl:value-of select="atom:title"/>
                        </a>

                        Published on <xsl:value-of select="description"/>
                        </p>
                    </xsl:for-each>

                    </div>

                </article>

            </main>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

{{ if .IsHome }}
  {{ $sitemap_xsl_template := resources.Get "sitemap.xsl" }}
  {{ $sitemap_xsl := $sitemap_xsl_template | resources.ExecuteAsTemplate "sitemap.xsl" . }}
  <!-- Generate the permalink -->
  <link rel="stylesheet" type="text/xsl" href="{{ $sitemap_xsl.Permalink }}" />
{{ end }}
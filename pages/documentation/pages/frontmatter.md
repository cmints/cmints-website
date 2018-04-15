---
title: Front Matter
navTitle: Front Matter
showDocNav: true
---

# Front Matter

Front Matter is a powerful tool that allows pages to define metadata in the YAML
format, metadata defined in page can be used by the theme and accessed through
`page` variable. Considering metadata defined below:

```yaml
---
title: Front Matter
navTitle: Front Matter
showDocNav: true
---
```

You can now use page metadata to adjust theme and page accordingly:

```
<html>
<head>
...
<title><%= site.title %></title>
...
</head>
<body>
...
<h1><%= site.title %></h1>
<%if (page.showDocNav) { %>
  <% include partials/docNav %>
<% } %>
...
```
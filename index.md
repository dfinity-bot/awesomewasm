---
layout: landing
---

<div class="home">
  

  {% include hero.html %}

  <div class="tag-list">
  {%- for tag in site.data.tags -%}
    <span class="tag-list-item-container">
      {%- if tag.icon -%}
        <img src="{{tag.icon}}" srcset="{{tag.icon}} 1x, {{tag.icon2x}} 2x" alt="{{tag.fullName}} icon">
      {%- endif -%}

      <a class="tag-list-item" href="/tags/{{tag.urlName}}">
        {{ tag.fullName }}
      </a>
    </span>
  {%- endfor -%}
  </div>

  <div class="post-list">
    <h2 style="display: none" class="result-header">Posts:</h2>
    {% assign hide=true%}
    {%- for post in site.data.content -%}
      {%- include post.html -%}
    {%- endfor -%}

    <div class="post-list-no-result" style="display: none;">No posts found</div>
  </div>

  <div class="no-results">
      No results found
  </div>

  <script src="/assets/search.js"></script>  

</div>
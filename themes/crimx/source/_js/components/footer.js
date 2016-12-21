'use strict'
/* global $ */

/* ------------------------------------ *\
     Generates 4 recent posts
\* ------------------------------------ */
var $newArticles = $('.new-articles')
if ($newArticles.length > 0) {
  $.getJSON('/recent-posts.json', function (posts) {
    var articles = $.map(posts, function (post, i) {
      if (i >= 4) { return }
      //  <li class="new-articles__item">
      //    <a class="new-articles__link" href="[url]">
      //      <div class="new-articles__cover" style="background:no-repeat url([cover]) [position]/cover">
      //      </div>
      //      <h1 class="new-articles__title">[title]</h1>
      //    </a>
      //  </li>
      var $title = $('<h1>', {
        class: 'new-articles__title',
        text: post.title
      })

      var $cover = $('<div>', {
        class: 'new-articles__cover',
        css: {
          background: 'no-repeat url(' + post.cover + ') ' + post.position + '/cover'
        }
      })

      var $link = $('<a>', {
        class: 'new-articles__link',
        href: post.url
      })
      .append([$cover, $title])

      return $('<li>', {
        class: 'new-articles__item'
      }).append($link)
    })

    $newArticles.empty().append(articles)
    $newArticles.addClass('new-articles--added')
  })
}

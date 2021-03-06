/*
  Safari doesn't support CSS `scroll-behavior: smooth`,
  so here is a compatible solution for all browser to smooth scrolling

  See: <https://css-tricks.com/snippets/jquery/smooth-scrolling/>

  Warning: It must be called after all `<a>` tags (e.g., the dynamic TOC) are ready.
*/

$(function() {
  const $topbarTitle = $("#topbar-title");
<<<<<<< HEAD
  const topbarHeight = $("#topbar-wrapper").outerHeight();
  const SCROLL_MARK = "scroll-focus";
=======
  const REM = 16; // in pixels
  const ATTR_SCROLL_FOCUS = "scroll-focus";
>>>>>>> 2cef6313 (Hide topbar when mobile orientation in landscape mode (resolve #459))

  $("a[href*='#']")
    .not("[href='#']")
    .not("[href='#0']")
    .click(function(event) {
<<<<<<< HEAD
<<<<<<< HEAD

      if (this.pathname.replace(/^\//, "") === location.pathname.replace(/^\//, "")) {
        if (location.hostname === this.hostname) {

          const REM = 16; /* 16px */

          const hash = decodeURI(this.hash);
          let isFnRef = RegExp(/^#fnref:/).test(hash);
          let isFn = isFnRef? false : RegExp(/^#fn:/).test(hash);
          let selector = hash.includes(":") ? hash.replace(/\:/g, "\\:") : hash;
          let target = $(selector);

          if (target.length) {
            event.preventDefault();
=======

      if (this.pathname.replace(/^\//, "") !== location.pathname.replace(/^\//, "")) {
=======
      if (this.pathname.replace(/^\//, "") !==
            location.pathname.replace(/^\//, "")) {
>>>>>>> 2cef6313 (Hide topbar when mobile orientation in landscape mode (resolve #459))
        return;
      }

      if (location.hostname !== this.hostname) {
        return;
      }
>>>>>>> e7b377cf (Prevent the top bar from covering the heading when scrolling down (in mobile views))

      const hash = decodeURI(this.hash);
      let toFootnoteRef = RegExp(/^#fnref:/).test(hash);
      let toFootnote = toFootnoteRef ? false : RegExp(/^#fn:/).test(hash);
      let selector = hash.includes(":") ? hash.replace(/\:/g, "\\:") : hash;
      let $target = $(selector);

<<<<<<< HEAD
<<<<<<< HEAD
            let curOffset = isAnchor? $(this).offset().top : $(window).scrollTop();
            let destOffset = $target.offset().top;

            if (destOffset < curOffset) { // scroll up
              if (!isAnchor && !toFootnote && $topbarTitle.is(":hidden")) { // the ToC item
                destOffset -= topbarHeight;
              }
            }

            $("html,body").animate({
              scrollTop: destOffset

            }, 800, () => {
              $target.focus();

              const SCROLL_MARK = "scroll-focus";

              /* clean up old scroll mark */
              if ($(`[${SCROLL_MARK}=true]`).length) {
                $(`[${SCROLL_MARK}=true]`).attr(SCROLL_MARK, false);
              }

              /* Clean :target links */
              if ($(":target").length) { /* element that visited by the URL with hash */
                $(":target").attr(SCROLL_MARK, false);
              }

              /* set scroll mark to footnotes */
              if (isFn || isFnRef) {
                $target.attr(SCROLL_MARK, true);
              }

              if ($target.is(":focus")) { /* Checking if the target was focused */
                return false;
              } else {
                $target.attr("tabindex", "-1"); /* Adding tabindex for elements not focusable */
                $target.focus(); /* Set focus again */
              }
            });
=======
      let parent = $(this).parent().prop("tagName");
      let isAnchor = RegExp(/^H\d/).test(parent);
      let isMobileViews = !$topbarTitle.is(":hidden");
=======
      let isMobileViews = $topbarTitle.is(":visible");
      let isPortrait = $(window).width() < $(window).height();
>>>>>>> 2cef6313 (Hide topbar when mobile orientation in landscape mode (resolve #459))

      if (typeof $target === "undefined") {
        return;
      }

      event.preventDefault();

      if (history.pushState) { /* add hash to URL */
        history.pushState(null, null, hash);
      }

      let curOffset = $(window).scrollTop();
      let destOffset = $target.offset().top -= REM / 2;

      if (destOffset < curOffset) { // scroll up
<<<<<<< HEAD
        if (!isAnchor && !toFootnote) { // trigger by ToC item
          if (!isMobileViews) { // on desktop/tablet screens
            $topbarWrapper.removeClass("topbar-down").addClass("topbar-up");
            // Send message to `${JS_ROOT}/commons/topbar-switch.js`
            $topbarWrapper.attr(ATTR_TOC_SCROLLING, true);
            tocScrollUpCount += 1;
>>>>>>> e7b377cf (Prevent the top bar from covering the heading when scrolling down (in mobile views))
          }
=======
        ScrollHelper.hideTopbar();
        ScrollHelper.addScrollUpTask();

        if (isMobileViews && isPortrait) {
          destOffset -= ScrollHelper.getTopbarHeight();
>>>>>>> 2cef6313 (Hide topbar when mobile orientation in landscape mode (resolve #459))
        }

      } else { // scroll down
        if (isMobileViews && isPortrait) {
          destOffset -= ScrollHelper.getTopbarHeight();
        }
      }

      $("html").animate({
        scrollTop: destOffset
      }, 500, () => {
        $target.focus();

        /* clean up old scroll mark */
        if ($(`[${ATTR_SCROLL_FOCUS}=true]`).length) {
          $(`[${ATTR_SCROLL_FOCUS}=true]`).attr(ATTR_SCROLL_FOCUS, false);
        }

        /* Clean :target links */
        if ($(":target").length) { /* element that visited by the URL with hash */
          $(":target").attr(ATTR_SCROLL_FOCUS, false);
        }

        /* set scroll mark to footnotes */
        if (toFootnote || toFootnoteRef) {
          $target.attr(ATTR_SCROLL_FOCUS, true);
        }

        if ($target.is(":focus")) { /* Checking if the target was focused */
          return false;
        } else {
          $target.attr("tabindex", "-1"); /* Adding tabindex for elements not focusable */
          $target.focus(); /* Set focus again */
        }

        if (ScrollHelper.hasScrollUpTask()) {
          ScrollHelper.popScrollUpTask();
        }
      });
    }); /* click() */
});

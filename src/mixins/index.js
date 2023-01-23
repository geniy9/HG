export const scrollAnimate = {
  data() {
    return {
      isScrolling: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.throttleScroll, false)
    document.addEventListener('DOMContentLoaded', this.scrolling, false)
  },
  methods: {
    throttleScroll (e) {
      if (this.isScrolling === false) {
        window.requestAnimationFrame(() => {
          this.scrolling(e)
          this.isScrolling = false
        })
      }
      this.isScrolling = true
    },
    scrolling (e) {
      const elem = document.querySelectorAll('.animate');
      const elemFull = document.querySelectorAll('.animate_full');
      for (let i = 0; i < elem.length; i++) {
        const listItem = elem[i]
        if (this.isPartiallyVisible(listItem)) {
          listItem.classList.add('active')
        } else {
          listItem.classList.remove('active')
        }
      }
      for (let i = 0; i < elemFull.length; i++) {
        const listItem = elemFull[i]
        if (this.isFullyVisible(listItem)) {
          listItem.classList.add('active_full')
        } else {
          listItem.classList.remove('active_full')
        }
      }
    },
    throttleScroll(e) {
      if (this.isScrolling == false) {
        window.requestAnimationFrame(() => { this.scrolling(e); this.isScrolling = false; });
      }
      this.isScrolling = true;
    },
    isPartiallyVisible (el) {
      const elementBoundary = el.getBoundingClientRect()
      const top = elementBoundary.top
      const bottom = elementBoundary.bottom
      const height = elementBoundary.height
      return ((top + height >= 0) && (height + window.innerHeight >= bottom))
    },
    isFullyVisible (el) {
      const elementBoundary = el.getBoundingClientRect()
      const top = elementBoundary.top
      const bottom = elementBoundary.bottom
      return ((top >= 0) && (bottom <= window.innerHeight))
    }
  }
}
export const scrollParallax = {
  mounted() {
    window.addEventListener('scroll', () => this.scrollParallax('.parallax'));
  },
  methods: {
    scrollParallax(selector) {
      const scrollElement = document.querySelector(selector)
      const scrolled = scrollElement.getBoundingClientRect().top
      scrollElement.style.transform = `translateX(${0 - (scrolled * .25) + 'px'})`
    }
  }
}
export const cursorParallax = {
  mounted() {
    window.addEventListener('mousemove', (e) => this.cursorParallax('.cursor_parallax', 50, e));
    window.addEventListener('mousemove', (e) => this.cursorParallax('.cursor_parallax_slow', 10, e));
  },
  methods: {
    cursorParallax(selector, blending, e) {
      const cursorElement = document.querySelectorAll(selector);
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      for(let i = 0; i < cursorElement.length; i++) {
        cursorElement[i].style.transform = `translate(+${x * blending}px, +${y * blending}px)`;
      }
    }
  }
}
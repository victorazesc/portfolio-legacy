<template>
  <section id="contact" style="background-color:#000;">
     <Navbar :scrolled="scrolled"></Navbar>
    <Contact class="section-p" style="padding-bottom: 0px !important; overflow: hidden;"></Contact>
    <Footer></Footer>
  </section>
</template>

<script>
import Navbar from './template/navbar'
import Footer from './template/footer'
import Contact from './template/contact-form'

export default {
  name: 'Concact',
  components: {
    Contact,
    Navbar,
    Footer
  },
   data () {
    return {
      scrolled: false,
      palette: []
    }
  },
    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY > 50) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },
  }
}
</script>

<style>
</style>
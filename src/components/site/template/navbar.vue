<template>
  <section id="menu" data-spy="affix" data-offset-top="197">
    <!-- As a heading -->
    <b-navbar toggleable="lg" :type="scrolled ? 'light' : 'dark'" class="sticky-top" fixed="scrolled" :style="scrolled ? 'background: #fff; box-shadow: rgba(0, 0, 0, 0.25) 0px -6px 20px;' : ''" style="z-index: 99; position: fixed; left: 0px; right: 0px" top="0">
      <div class="container">

        <b-navbar-brand tag="h1" class="mb-0" to="/">
          <svg width="70" height="39.63" viewBox="0 0 51 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9395 24.6623L26.0081 22.3167L27.8618 25.562H21.9395V24.6623Z" fill="url(#paint0_linear)" />
            <path d="M22.8448 15.3872L14.4104 0L0 28.8072L50.8855 5.3266L22.8448 15.3872ZM9.91229 19.6535L14.6466 8.38976L18.4111 16.3618L9.91229 19.6535Z" fill="url(#paint1_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="24.9006" y1="22.3167" x2="24.9006" y2="25.562" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EB00FF" />
                <stop offset="1" stop-color="#6C0075" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="25.4427" y1="0" x2="25.4427" y2="28.8072" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EB00FF" />
                <stop offset="1" stop-color="#6C0075" />
              </linearGradient>
            </defs>
          </svg>

        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto" :style="$resize && $mq.below(768) && !scrolled ? 'background: #000000ba; backdrop-filter: blur(5px); padding: 17px;' : ''">
            <!-- <b-nav-item-dropdown text="Soluções" disabled>
              <b-dropdown-item href="#">DESENVOLVIMENTO DE APLICATIVOS</b-dropdown-item>
              <b-dropdown-item href="#">SOFTWARES PERSONALIZADOS</b-dropdown-item>
              <b-dropdown-item href="#">PROGRAMA SPRINT ZERO</b-dropdown-item>
              <b-dropdown-item href="#">ALOCAÇÃO DE PROFISSIONAIS & OUTSOURCING</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <b-nav-item to="/">Início</b-nav-item>
            <b-nav-item to="portfolio">Portfólio</b-nav-item>
            <!-- <b-nav-item to="blog">Blog</b-nav-item> -->
            <!-- <b-nav-item href="#" disabled>Sobre</b-nav-item> -->
            <b-nav-item to="contato">Contato</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </div>
    </b-navbar>
  </section>
</template>

<script>
export default {
  props: [
    'scrolled',
  ],
  name: 'navbar',
};
</script>

<style scoped>
</style>

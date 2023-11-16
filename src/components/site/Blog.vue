<template>
  <section>
    <Navbar :scrolled="true"></Navbar>
    <section style="padding-top: 120px;" class="container" id="blog-header">
      <div class="row" style="align-items: baseline;">
        <div class="col-md-3">
          <h2>
            Blog
          </h2>
        </div>
        <div class="col-md-6">
          <div class="pesquisa">
            <span class="icone">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.1001 2.10001C5.24239 2.10001 2.1001 5.24231 2.1001 9.10001C2.1001 12.9577 5.2424 16.1 9.1001 16.1C10.7777 16.1 12.3183 15.5043 13.5257 14.5154L17.7052 18.6949C17.8807 18.8778 18.1415 18.9515 18.3868 18.8875C18.6321 18.8236 18.8237 18.632 18.8876 18.3867C18.9516 18.1414 18.8779 17.8807 18.695 17.7051L14.5155 13.5256C15.5044 12.3182 16.1001 10.7776 16.1001 9.10001C16.1001 5.2423 12.9578 2.10001 9.1001 2.10001L9.1001 2.10001ZM9.1001 3.50001C12.2012 3.50001 14.7001 5.99892 14.7001 9.10001C14.7001 12.2011 12.2012 14.7 9.1001 14.7C5.99901 14.7 3.5001 12.2011 3.5001 9.10001C3.5001 5.99892 5.99901 3.50001 9.1001 3.50001V3.50001Z" fill="black" />
              </svg>
            </span>
            <input type="text" placeholder="O que Você Procura ?" class="form-control">
          </div>
        </div>
        <div class="col-md-3" style="border-left: 1px solid rgb(229 229 229);">
          <p><b>50 Notícias </b>Publicadas</p>
        </div>
      </div>
      <hr>
    </section>
    <section class="section-p-30 container">
      <h2>Destaques</h2>
      <div>
        <div class="row">
          <div class="col-md-8">
            <b-card img-src="https://i.picsum.photos/id/924/600/400.jpg?hmac=Hfb7YBk-BA3W7v7gLxvH2SspirC0hWfOhkATGSWJBs4" img-alt="Image" img-top tag="article" class="mb-2">
              <b-card-text>
                <small><b>Tipos de Testes de Software: quais devo fazer?</b></small>
                <br>
              </b-card-text>
              <small style="position: absolute; bottom: 10px;">Por <b>Victor Azevedo - Programação</b></small>
              <b-button href="#" variant="outline-primary" style="position: absolute; bottom: 15px; right: 15px;">Ver</b-button>
            </b-card>
          </div>
          <div class="col-md-4">
            <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" class="mb-2">
              <b-card-text>
                <small><b>Tipos de Testes de Software: quais devo fazer?</b></small>
                <br>
              </b-card-text>
              <small style="position: absolute; bottom: 10px;">Por <b>Victor Azevedo - Programação</b></small>
              <b-button href="#" variant="outline-primary" style="position: absolute; bottom: 15px; right: 15px;">Ver</b-button>
            </b-card>
            <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" class="mb-2">
              <b-card-text>
                <small><b>Tipos de Testes de Software: quais devo fazer?</b></small>
                <br>
              </b-card-text>
              <small style="position: absolute; bottom: 10px;">Por <b>Victor Azevedo - Programação</b></small>
              <b-button href="#" variant="outline-primary" style="position: absolute; bottom: 15px; right: 15px;">Ver</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </section>
    <section class="section-p-30 container">
      <div class="row">
        <div class="col-md-8">
          <b-card tag="article" class="mb-2">
            <b-card-text>
              <p>Mostrando 15 de 50 Notícias</p>
              <hr>
            </b-card-text>
            <div v-for="(post, index) in posts" :key="index">
              <b-card no-body class="overflow-hidden">
                <b-row no-gutters>
                  <b-col md="4">
                    <b-card-img src="https://i.picsum.photos/id/55/100/50.jpg?hmac=x0XAJQTO-HvG9n-1jAbKnhBBgw-viZh2VeTScmbhop4" alt="Image" class="rounded-0"></b-card-img>
                  </b-col>
                  <b-col md="8">
                    <b-card-body>
                      <b-card-text>
                        <b>Tipos de Testes de Software: quais devo fazer?</b>
                      </b-card-text>
                      <small style="position: absolute; bottom: 10px;">Por <b>Victor Azevedo - Programação</b></small>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
              <br>
            </div>
            <div class="text-center">
              <b-button href="#" variant="outline-primary">Ver Mais Notícias</b-button>
            </div>
          </b-card>
        </div>
        <div class="col-md-4">
           <b-card tag="article" class="mb-2">
            <b-card-text>
              <p>Marcadores</p>
              <hr>
            </b-card-text>
            <div>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
              <button class="btn-sm btn btn-outline-dark" style="margin-bottom: 5px;">Marcador</button>
            </div>
            <hr>
            
            <b-img src="https://i.picsum.photos/id/34/500/400.jpg?hmac=PWkeCNtMhqcS4q_SkUkMD9JZzc16QRFgI7-W3eeYO7I" fluid alt="Responsive image"></b-img>
           </b-card>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Navbar from './template/navbar'
import Footer from './template/footer'
export default {
  name: 'Blog',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      posts: [
        { dia: 1, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 2, titulo: '7 coisas que você precisa saber sobre o desenvolvimento mobile' },
        { dia: 3, titulo: 'Firebase: o que é e quando usar no desenvolvimento mobile?' },
        { dia: 4, titulo: 'Guia de WordPress para Iniciantes: Aplicando um Tema e Instalando o WooCommerce' },
        { dia: 5, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 6, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 7, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 8, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 9, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
        { dia: 10, titulo: 'Conheça o Laravel, o Framework que você estava buscando para web' },
      ]
    }
  }
}
</script>

<style>
.pesquisa {
  border: 1px solid #9c27b0;
  border-radius: 10px;
  display: flex;
}

.pesquisa .form-control {
  border: none !important;
  background-color: transparent;
}

.pesquisa .icone {
  padding: 5px 10px !important;
}

#blog-header p {
  margin-top: revert !important;
}

#blog-header hr {
  margin-top: 5px !important;
}
</style>
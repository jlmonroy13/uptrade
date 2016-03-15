$(function(){
  $(document).scroll(function () { 
    var y = $(this).scrollTop();
      if (y > 102) {
        $('header').addClass('fixed-header');
    }else if (y < 103) {
      $('header').removeClass('fixed-header');
    }
  });
  $('.navbar-toggle').on('click', function(){
    $('.navbar').toggleClass('navbar-collap');
  });
  $('.product-list').on('mouseenter', '.img-container',function(){
    $(this).children('.opacity-color').show();
    $(this).children('.product-more').show();
  });
  $('.product-list').on('mouseleave', '.img-container',function(){
    $(this).children('.opacity-color').hide();
    $(this).children('.product-more').hide();
  });

  $('.js-expand-nav').click(function(event){
    $('.js-nav-expanded').addClass('nav-list--expanded');
    $('.js-retract-nav').addClass('overlay--visible');
    event.preventDefault();
  }) 
  $('.js-retract-nav').click(function(){
    $('.js-nav-expanded').removeClass('nav-list--expanded');
    $('.js-retract-nav').removeClass('overlay--visible');
  })

  var productos = [
    {
      nombre: "NSG - Nivel de Servicio de Góndola",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-nsg.jpg",
      href: "productos-nsg.html",
      select: true
    },
    {
      nombre: "Precios",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-precios.jpg",
      href: "productos-precios.html",
      select: true
    },
    {
      nombre: "Facing",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-facing.jpg",
      href: "productos-facing.html",
      select: true
    },
    {
      nombre: "Planograma",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-plano.jpg",
      href: "productos-planograma.html",
      select: true
    },
    {
      nombre: "Exhibiciones - Acuerdos Comerciales",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-exhibi.jpg",
      href: "productos-exhibiciones.html",
      select: true
    },
    {
      nombre: "Actividad Promocional",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-actividad.jpg",
      href: "productos-actividad.html",
      select: true
    },
    {
      nombre: "Árbol de Perdida",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-arbol.jpg",
      href: "productos-arbol.html",
      select: true
    },
    {
      nombre: "PDV - Normas Visuales",
      tipo: "Producto Cualitativo",
      src: "img/bckg/producto-catalogo-pdv.jpg",
      href: "productos-pdv.html",
      select: true
    },
    {
      nombre: "Mystery Shopper",
      tipo: "Producto Cualitativo",
      src: "img/bckg/producto-catalogo-mystery.jpg",
      href: "productos-mystery.html",
      select: true
    },
    {
      nombre: "Self Audit",
      tipo: "Producto Sistémicos TI",
      src: "img/bckg/producto-catalogo-self.jpg",
      href: "productos-self.html",
      select: true
    },
    {
      nombre: "Bussiness Intelligence",
      tipo: "Producto Sistémicos TI",
      src: "img/bckg/producto-catalogo-bsines.jpg",
      href: "productos-bussiness.html",
      select: true
    },
    {
      nombre: "B2B",
      tipo: "Producto Cuantitativo",
      src: "img/bckg/producto-catalogo-b2b.jpg",
      href: "productos-b2b.html",
      select: true
    }
  ];

  Handlebars.registerHelper('if_eq', function(a, b) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
  });
  var productosTemplate = Handlebars.compile($('#productos-template').html());
  $('.js-productos').html(productosTemplate(productos));

  $('.js-productos-todos').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      productos[i].select = true;
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  $('.js-productos-cuantitativos').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i].tipo == "Producto Cuantitativo") {
        productos[i].select = true;
      } else {
        productos[i].select = false;
      } 
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  $('.js-productos-cualitativos').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i].tipo == "Producto Cualitativo") {
        productos[i].select = true;
      } else {
        productos[i].select = false;
      } 
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });

  $('.js-productos-sisTI').click(function(event){
    for (var i = productos.length - 1; i >= 0; i--) {
      if (productos[i].tipo == "Producto Sistémicos TI") {
        productos[i].select = true;
      } else {
        productos[i].select = false;
      } 
    }
    event.preventDefault();
    $('.js-productos').html(productosTemplate(productos));
  });
  
});
  
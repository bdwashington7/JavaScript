// external js: isotope.pkgd.js

$( document ).ready( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'ul li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'ul li', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'ul li', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
  
	/* click function for li*/
	$(".all").click(function(){
		$(this).css('background-color','red');
		$(this).css('color','#fff');
		$("body").css('background-color','red');
		$(".web, .gp, .mb, .car").css('background-color','#000');
		$(".web, .gp, .mb, .car").css('color','#657481');
	});
	$(".web").click(function(){
		$(this).css('background-color','purple');
		$(this).css('color','#fff');
		$("body").css('background-color','purple');
		$(".all, .gp, .mb, .car").css('background-color','#000');
		$(".all, .gp, .mb, .car").css('color','#657481');
	});
	$(".gp").click(function(){
		$(this).css('background-color','yellow');
		$(this).css('color','#000');
		$("body").css('background-color','yellow');
		$(".all, .web, .mb, .car").css('background-color','#000');
		$(".all, .web, .mb, .car").css('color','#657481');
	});
	$(".mb").click(function(){
		$(this).css('background-color','blue');
		$(this).css('color','#fff');
		$("body").css('background-color','blue');
		$(".all, .gp, .web, .car").css('background-color','#000');
		$(".all, .gp, .web, .car").css('color','#657481');
	});
	$(".car").click(function(){
		$(this).css('background-color','green');
		$(this).css('color','#fff');
		$("body").css('background-color','green');
		$(".all, .gp, .mb, .web").css('background-color','#000');
		$(".all, .gp, .mb, .web").css('color','#657481');
	});
	
	
	
	
	/*==================color changer====================*/
	$(".red").click(function(){
		$("body").css('background-color','red');
	});
	$(".purple").click(function(){
		$("body").css('background-color','purple');
	});
	$(".white").click(function(){
		$("body").css('background-color','white');
	});
	$(".yellow").click(function(){
		$("body").css('background-color','yellow');
	});
	$(".blue").click(function(){
		$("body").css('background-color','blue');
	});
	$(".deeppink").click(function(){
		$("body").css('background-color','deeppink');
	});
});















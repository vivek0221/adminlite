$(function($){
 
   $(document).ready(function(){
   	  // $('.menu-list li').on('click',function(e){
   	  // 	 $(this).find('.fa-angle-down').toggleClass('angle-up');
   	  // 	 $(this).find('.nav-slide').slideToggle(500);
   	  // 	 $('.active').removeClass('active');
   	  //    $(this).addClass('active');
   	  //    e.preventDefault();
   	  // });
       
       $('[data-toggle="ui-nav"]').on('click', function(e){
            e.preventDefault();
            $('#ui').toggleClass('ui-aside-compact');
       });

   	 $('[ui-nav]').on('click', 'li', function(e){
         // locate href
         //if there is no submenu
         var href = $(this).attr('href');
         if (href) {
            window.location.href = href;
         }

         //Open submenu
         var $this = $(e.target), $active;
         $(this).is('a') || ($this = $this.closest('a'));
         
         $active = $this.parent().siblings( ".active" );
         $active && $active.toggleClass('active').find('> ul:visible').stop().slideUp(200);

         ($this.parent().hasClass('active') && $this.next().stop().slideUp(200)) || $this.next().stop().slideDown(200);
         $this.parent().toggleClass('active');

         $this.next().is('ul') && e.preventDefault();
       });

     // niceScroll
        $(".niceScroll").niceScroll({
            cursorcolor : "#000000",
            cursoropacitymax : 0.3,
            cursorwidth : "8px",
            cursorborder : "2px solid transparent",
            cursordragontouch : true, // drag cursor in touch / touchbehavior mode also
            zindex : "10", // change z-index for scrollbar div
            cursorborderradius: "10px",
        });
   })
   

   /* typography */
    // for minimising the panel
    $('.panel-minimize').on("click",function(e){
        e.preventDefault();
        var $target = $(this).parent().parent().parent().next('.panel-body');
        if($target.is(':visible')) { $('i',$(this)).removeClass('ti-angle-up').addClass('ti-angle-down'); }
        else { $('i',$(this)).removeClass('ti-angle-down').addClass('ti-angle-up'); }
        $target.slideToggle();
    });
    
    // for panel loading
     $('.panel-refresh').on('click', function(br) {
        br.preventDefault();
        $("<div class='refresh-block'><span class='refresh-loader'><i class='fa fa-spinner fa-spin'></i></span></div>").appendTo($(this).parents('.panel-options').parents('.panel-heading').parents('.panel'));
        setTimeout(function() { 
          $('.refresh-block').remove();
        }, 500);
    });

    // for panel close
    $('.panel-close').click(function(e){
        e.preventDefault();
        $(this).parent().parent().parent().parent().fadeOut();
    });

    // For Area chart

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["7 Jan", "11 Jan", "15 Jan", "21 Jan", "25 Jan", "29 Jan"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [10, 5, 2, 20, 30, 45],
                //data: [100, 500, 1000],
            }]
        },

        // Configuration options go here
        options: {
          scales: {
            yAxes: [{
              ticks: {
                
              }
            }]
          }
        }
    });
});
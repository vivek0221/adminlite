$(function($){
 
  $(document).ready(function(){
    /*jqv map*/
    jQuery('#vmap').vectorMap({ map: 'world_en' });
    jQuery('.usa-vmap').vectorMap({ map: 'usa_en' });
    jQuery('.europe-vmap').vectorMap({ map: 'europe_en' });
    jQuery('.germany-vmap').vectorMap({ map: 'germany_en' });
    jQuery('.asia-vmap').vectorMap({ map: 'asia_en' });
    jQuery('.africa-vmap').vectorMap({ map: 'africa_en' });
    jQuery('.australia-vmap').vectorMap({ map: 'australia_en' });
  });

})
$( document ).ready(function() {
    
    $("#siteName").fitText(1, { minFontSize: '20px', maxFontSize: '100px' });
    
    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });

    $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

            // Save a reference to the element
            var $this = $(this);

            // Set up Scroll Handler
            $(document).scroll(function(){

                var scrollTop = $(window).scrollTop();
                var offset = $this.offset().top;
                var height = $this.outerHeight();

                // Check if above or below viewport
                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                    return;
                }

                var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');
            
            });
        });
    };
    
    $('.image-container').parallax({
        speed :	0.25
    });
    
});

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
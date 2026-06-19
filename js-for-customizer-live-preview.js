// customizer live preview

;(function($){
    // selector customizer setting name
    wp.customize('select_color', function(value){   // example setting name [select_color]
        value.bind(function(newValue){
            $("body").css("background", newValue);
      
    // select and change psedu element value
    $(".s-pageheader").append(
        ` <style>
            .s-pageheader::before {
                background: ${newValue}
            }
          </style>
        `
        );
    })
})
})(jQuery);
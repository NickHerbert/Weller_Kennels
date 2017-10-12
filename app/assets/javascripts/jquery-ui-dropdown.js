/**
 * Created by melissataylor on 6/28/16.
 */
$(function() {
    $( "#ms-year" ).selectmenu({
        change: function() {
            if($(this).val() != '') {
                window.location = $(this).val();
            }
        }
    });

});

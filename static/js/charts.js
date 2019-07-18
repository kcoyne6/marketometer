
$(document).ready(function(){
    $(".stocks").click(function(e){
        e.preventDefault();
        $(this).tab('show');
        alert ("Test");
    });
});
//$('#myTab a[href="#profile"]').tab('show'); // show tab targeted by the selector
//$("#myTab a:first").tab('show'); // show first tab
//$("#myTab a:last").tab('show'); // show last tab
//$("#myTab li:eq(2) a").tab('show'); // show third tab (0-indexed, like an array)
$(document).ready(function(){
    $(".influencers").click(function(e){
        e.preventDefault();
        $(this).tab('show');
        alert ("Test");
    });
});
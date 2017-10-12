/**
 * Created by melissataylor on 3/16/17.
 */
$( function() {
  // run the currently selected effect
  function runEffect() {


    // // Most effect types need no options passed by default
    // var options = {};
    // // some effects have required parameters
    // if ( selectedEffect === "scale" ) {
    //     options = { percent: 50 };
    // } else if ( selectedEffect === "size" ) {
    //     options = { to: { width: 200, height: 60 } };
    // }

    // Run the effect
    $( "#threat_map_faq" ).toggle( "drop", {direction: "up"}, 500 );
  };

  // Set effect from select menu value
  $( "#faq-trigger" ).on( "click", function() {
    runEffect();
  });
} );
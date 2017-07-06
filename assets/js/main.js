$(function() {

    var images = ['240', '260', '250', '123', '200'];
    var max = images.length;
 
    // Get current image src
    var curSrc = $('#imageswap').attr('src');

    // Find ID in image src
    var curID = curSrc.replace(/.*\/(.*?)\.jpg/i, '$1');

    var curIdx = 0;

    // Search image list for index of current ID
    while (curIdx < max) {
        if (images[curIdx] == curID) {
            break;
        }
        curIdx++;
    }

    // For convenience
    var imgSrcBase = 'http://placehold.it/';
    
    // Next image on button (and image) click
    $('#swapnextimg,#imageswap').click( function() {
        curIdx = (curIdx+1) % max;
        $("#imageswap").attr('src', imgSrcBase+images[curIdx]+'.jpg');
    });
    
    // Prev image on button click
    $('#swapprevsimg').click( function() {
        curIdx = (curIdx+max-1) % max;
        $("#imageswap").attr('src', imgSrcBase+images[curIdx]+'.jpg');
    });


});
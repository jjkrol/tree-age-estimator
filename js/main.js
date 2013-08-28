function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.each(function() { $(this).height(tallest); });
}
$(document).ready(function() {
    equalHeight($(".thumbnail-container"));
    $('a[rel="lightbox"]').lightBox({
        imageLoading : 'img/loading.gif',
        imageBtnClose : 'img/close.gif',
        imageBtnPrev : 'img/prev.gif',
        imageBtnNext : 'img/next.gif',
        txtImage : 'Zdjęcie',
        txtOf : 'z',
        maxHeight : 600,
        maxWidth : 800
    });
});
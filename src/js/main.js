import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    var elms = document.getElementsByClassName('splide');

    for (var i = 0; i < elms.length; i++) {

        var splideElement = elms[i];

        var splideOptions = {
            type   : 'loop',
            perPage: 3,
            perMove: 1,
            arrowPath: 'M0.7,17.6v4.9H30L16.6,35.9l3.5,3.5L39.4,20L20,0.6l-3.5,3.5L30,17.6H0.7z',
        };

        var splide = new Splide( splideElement, splideOptions );

        splide.mount();
    }
});
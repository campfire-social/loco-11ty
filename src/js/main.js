import Splide from '@splidejs/splide';
import MicroModal from 'micromodal';  

document.addEventListener('DOMContentLoaded', function () {
    MicroModal.init();
});


document.addEventListener('DOMContentLoaded', function () {
    var elms = document.getElementsByClassName('splide');

    for (var i = 0; i < elms.length; i++) {

        var splideElement = elms[i];

        var splideOptions = {
        
            arrows: true,
            arrowPath: 'M0.7,17.6v4.9H30L16.6,35.9l3.5,3.5L39.4,20L20,0.6l-3.5,3.5L30,17.6H0.7z',
            pagination: false,
            perPage: 3,
            perMove: 1,
            mediaQuery: 'max',
            breakpoints: {
                980: {
                    type   : 'loop',
                    
                    
                   perPage: 1
                }
            }
        };

        var splide = new Splide( splideElement, splideOptions );

        splide.mount();
    }
});
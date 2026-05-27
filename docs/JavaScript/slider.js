
const swiper = new Swiper('.swiper', {
            effect: 'coverflow',

           
           
            
            centeredSlides: true,

            slidesPerView: '3',

            speed: 1500,

            autoplay: {
                delay: 3000,
            },
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },

            });
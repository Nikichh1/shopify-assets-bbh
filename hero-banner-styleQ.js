        // Preloader Text 
        window.addEventListener('load', function () {
            const preloader = document.getElementById('preloader');
            const firstText = document.getElementById('first-text');
            const secondText = document.getElementById('second-text');
            // Show the first text
            firstText.style.opacity = '1';
            // loading animation
            setTimeout(function () {
                firstText.style.opacity = '0';
                secondText.style.opacity = '1';
            }, 1000);
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 4000);
        });


        // Loader Video 
        window.addEventListener('load', function () {
            document.body.classList.add('overflow-hidden'); // body - overflow hidden
            document.documentElement.classList.add('overflow-hidden'); // html - overflow hidden
            setTimeout(function () {
                const loaderVideo = document.getElementById('loaderVideo');
                loaderVideo.style.width = '90%';
                loaderVideo.style.height = '90%';
                loaderVideo.style.transform = 'translate(-50%, -50%)';
                loaderVideo.style.top = '50%';
                loaderVideo.style.left = '50%';
                loaderVideo.style.position = 'fixed';
                loaderVideo.style.borderRadius = '12px';

            }, 2000);
            setTimeout(() => {
                if (window.matchMedia('(max-width: 576px)').matches) {
                    loaderVideo.style.width = '180px';
                    loaderVideo.style.height = '180px';
                    loaderVideo.style.top = '25%';
                    loaderVideo.style.left = 'auto';
                    loaderVideo.style.right = '24px';
                    loaderVideo.style.transform = 'translate(0%, -25%)';
                } else if (window.matchMedia('(max-width: 767px)').matches) {
                    loaderVideo.style.width = '180px';
                    loaderVideo.style.height = '180px';
                    loaderVideo.style.left = '40px';
                    loaderVideo.style.right = 'auto';
                    loaderVideo.style.transform = 'translate(0%, -50%)';
                } else if (window.matchMedia('(max-width: 991px)').matches) {
                    loaderVideo.style.width = '180px';
                    loaderVideo.style.height = '180px';
                    loaderVideo.style.left = 'auto';
                    loaderVideo.style.right = '40px';
                    loaderVideo.style.transform = 'translate(0%, -50%)';
                } else if (window.matchMedia('(max-width: 1399px)').matches) {
                    loaderVideo.style.width = '200px';
                    loaderVideo.style.height = '200px';
                    loaderVideo.style.left = 'auto';
                    loaderVideo.style.right = '60px';
                    loaderVideo.style.transform = 'translate(0%, -50%)';
                } else if (window.matchMedia('(max-width: 1600px)').matches) {
                    loaderVideo.style.width = '250px';
                    loaderVideo.style.height = '250px';
                    loaderVideo.style.left = 'auto';
                    loaderVideo.style.right = '63px';
                    loaderVideo.style.transform = 'translate(0%, -50%)';
                } else {
                    loaderVideo.style.width = '350px';
                    loaderVideo.style.height = '350px';
                    loaderVideo.style.top = '50%';
                    loaderVideo.style.left = 'auto';
                    loaderVideo.style.right = '100px';
                    loaderVideo.style.transform = 'translate(0%, -50%)';
                    loaderVideo.style.position = 'absolute';
                }
                document.body.classList.remove('overflow-hidden'); // body - overflow visible
                document.documentElement.classList.remove('overflow-hidden'); // html - overflow visible
            }, 3000); // Adjust the time as needed
        });


        // ScrollMagic
        var controller = new ScrollMagic.Controller({ loglevel: 3 });
        new ScrollMagic.Scene({
            triggerElement: "#section2",
            triggerHook: "onEnter",
            duration: "100%"
        }).setPin("#section1 .pinWrapper", {
            pushFollowers: false
        }).addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: "#section2",
            triggerHook: "onEnter",
            duration: "200%"
        }).setPin("#section2 .pinWrapper", {
            pushFollowers: false
        }).addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: "#section3",
            triggerHook: "onEnter",
            duration: "200%"
        }).setPin("#section3 .pinWrapper", {
            pushFollowers: false
        }).addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: "#section4",
            triggerHook: "onEnter",
            duration: "100%"
        }).setPin("#section4 .pinWrapper", {
            pushFollowers: false
        }).addTo(controller);



const techniquesButton = document.querySelector('.techniques');
const comportementalesButton = document.querySelector('.comportementales');

const ContentTechniques = document.querySelector('.content-techniques');
const ContentComportementales = document.querySelector('.content-comportementales');

function defaultActive(){
    ContentTechniques.classList.add('active-technique')
}

defaultActive();

techniquesButton.addEventListener('click', ()=>{

    ContentTechniques.classList.add('active-technique')
    ContentComportementales.classList.remove('active-comportementales')
    

});



comportementalesButton.addEventListener('click', ()=>{

    ContentTechniques.classList.remove('active-technique')
    ContentComportementales.classList.add('active-comportementales')
    

});

// const mouse = document.querySelector('.mouse-cursor');
// window.addEventListener('mousemove', cursormoving);


// function cursormoving(e){

//     mouse.style.top = e.pageY + "px";
//     mouse.style.left = e.pageX  + "px";


    

// }


const navlink = document.querySelectorAll('.link h1');
const navlink2 = document.querySelectorAll('.link img')
const cursorGrow = document.querySelector('.cursor-grow');
const cursorsmall = document.querySelector('.mouse-cursor')

navlink.forEach(link=>{


        link.addEventListener('mouseover', ()=>{

            cursorsmall.classList.add('cursor-grow');
        });


        
        link.addEventListener('mouseleave', ()=>{

            cursorsmall.classList.remove('cursor-grow');
        });

});

navlink2.forEach(link=>{


    link.addEventListener('mouseover', ()=>{

        cursorsmall.classList.add('cursor-grow');
    });


    
    link.addEventListener('mouseleave', ()=>{

        cursorsmall.classList.remove('cursor-grow');
    });

});



var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.text-hello',
    reverse: false


})

    .setClassToggle('.text-hello', 'fade-in')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);


var scene = new ScrollMagic.Scene({

    triggerElement: '.text-interet-1',
    reverse: false

})

    .setClassToggle('.text-interet-1', 'fade-in-text')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

    
var scene = new ScrollMagic.Scene({

    triggerElement: '.text-interet-2',
    reverse: false

})

    .setClassToggle('.text-interet-2', 'fade-in-text')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

        
var scene = new ScrollMagic.Scene({

    triggerElement: '.text-interet-3',
    reverse: false

})

    .setClassToggle('.text-interet-3', 'fade-in-text')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

        
var scene = new ScrollMagic.Scene({

    triggerElement: '.text-interet-4',
    reverse: false

})

    .setClassToggle('.text-interet-4', 'fade-in-text')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

            
var scene = new ScrollMagic.Scene({

    triggerElement: '.container-right',
    reverse: false

})

    .setClassToggle('.container-right', 'fade-in-container-right')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

    
                
var scene = new ScrollMagic.Scene({

    triggerElement: '.card1',
    reverse: false

})

    .setClassToggle('.card1', 'fade-in-card1')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

    

                
var scene = new ScrollMagic.Scene({

    triggerElement: '.card2',
    reverse: false

})

    .setClassToggle('.card2', 'fade-in-card2')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

    
    
                
var scene = new ScrollMagic.Scene({

    triggerElement: '.box-parcourt-right-img1',
    reverse: false

})

    .setClassToggle('.box-parcourt-right-img1', 'imgOfParcourtFadeIn')
    // .addIndicators({
    //     name: 'INDICATIONS',
    //     indent: 200,
    //     colorStart: '#fff'
    // })
    .addTo(controller);

                    
    var scene = new ScrollMagic.Scene({

        triggerElement: '.box-parcourt-right-img2',
        reverse: false
    
    })
    
        .setClassToggle('.box-parcourt-right-img2', 'imgOfParcourtFadeIn')
        // .addIndicators({
        //     name: 'INDICATIONS',
        //     indent: 200,
        //     colorStart: '#fff'
        // })
        .addTo(controller);
    
                        
    
        var scene = new ScrollMagic.Scene({

            triggerElement: '.box-parcourt-right-img3',
            reverse: false
        
        })
        
            .setClassToggle('.box-parcourt-right-img3', 'imgOfParcourtFadeIn')
            // .addIndicators({
            //     name: 'INDICATIONS',
            //     indent: 200,
            //     colorStart: '#fff'
            // })
            .addTo(controller);
        
                            
        
            
            var scene = new ScrollMagic.Scene({

                triggerElement: '.box-parcourt-right-img4',
                reverse: false
            
            })
            
                .setClassToggle('.box-parcourt-right-img4', 'imgOfParcourtFadeIn')
                // .addIndicators({
                //     name: 'INDICATIONS',
                //     indent: 200,
                //     colorStart: '#fff'
                // })
                .addTo(controller);
            
                                
    
                
            var scene = new ScrollMagic.Scene({

                triggerElement: '.box-parcourt-right-img5',
                reverse: false
            
            })
            
                .setClassToggle('.box-parcourt-right-img5', 'imgOfParcourtFadeIn')
                // .addIndicators({
                //     name: 'INDICATIONS',
                //     indent: 200,
                //     colorStart: '#fff'
                // })
                .addTo(controller);
            
                                
    
    
    



function parrallax(element, position, speed){

    const item = document.querySelector(element);
    item.style.transform =`translateY(${position * speed}px)`;

    
}



window.addEventListener('scroll', ()=>{

   
    parrallax('.profil-picture', window.scrollY, 0.7);
   
  

});


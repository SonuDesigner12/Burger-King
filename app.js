// menu

let tabs = document.querySelectorAll(".tabs-wrap ul li");

//target item
let all = document.querySelectorAll(".item_wrap");
let food = document.querySelectorAll(".food");
let snack = document.querySelectorAll(".snack");
let beverage = document.querySelectorAll(".beverage");

tabs.forEach(tab => {
    // click btn to active
    tab.addEventListener("click" ,() => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        //show item
        let tabVal = tab.getAttribute('data-tabs')
        //console.log(tabVal)
        
        all.forEach(item => {
            item.style.display='none';
        });

        if(tabVal == 'food') {
            food.forEach(item => {
                item.style.display='block';
            })
        }
        else if (tabVal == 'snack') {
            snack.forEach(item => {
                item.style.display='block';
            })
        }
        else if (tabVal == 'beverage') {
            beverage.forEach(item => {
                item.style.display='block';
            })
        }
        else {
            all.forEach(item => {
                item.style.display='block';
            })

        }
            
        
        


    
    
    
    
    })

})


// gsap 

// home page animate
let homePageAnimation = () => {
    let tl = gsap.timeline();

tl.from(".navbar .logo" , {
    opacity:0,
    y:-90,
    duration:0.5,
    delay:0.4
})
tl.from(".navbar-end ul li" , {
    opacity:0,
    y:-90,
    stagger:0.22
})
tl.from(".card figure img" , {
    opacity:0,
    x:-300,
    duration:0.3
})
tl.from(".card-body h1, .card-body p, .card-body .line, .card-body .icon, .card-body button" , {
    opacity:0,
    x:300,
    duration:0.2,
    stagger:0.22
})

}

// homePageAnimation()

//service section animate

let servicePageAnimation = () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger:".serciceSection",
            scroller:"body",
            start:"top 60%",
            end:'top 0',
            scrub:1
    
        }
    });

    //service section

    tl2.from(".serciceSection .service .one", {
        opacity:0,
        x:-300,
        duration:0.3
    })
    tl2.from(".serciceSection .service .three", {
        opacity:0,
        x:300,
        duration:0.3
    })
    tl2.from(".serciceSection .service .two", {
        opacity:0,
        duration:0.3
    })

    // discount section

    tl2.from(".discount .discountProduct1", {
        opacity:0,
        x:-300,
        duration:0.3
    })
    tl2.from(".discount .discountProduct2", {
        opacity:0,
        x:300,
        duration:0.3
    })
    
}
// servicePageAnimation()


// menu section

let heroSectionAnimate = () => {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger:".hero",
            scroller:"body",
            // markers: true,
            start:"top 70%",
            end:'top 0',
            scrub:1
    
        }
    });
    
    tl3.from(".hero .hero-content img", {
        opacity:0,
        x:-300,
        duration:0.3
    })
    tl3.from(".hero h1 , .hero p , .hero button", {
        opacity:0,
        x:300,
        duration:0.3,
        stagger:0.1
    })

    //menu

    tl3.from(".menu h1, .menu p" , {
        opacity:0,
        y:-200,
        duration:1
        
    })
    tl3.from(".tabs ul .left" , {
        opacity:0,
        x:-400,
        duration:1
        
    })
    tl3.from(".tabs ul .right" , {
        opacity:0,
        x:400,
        duration:1
        
    })
    
}
// heroSectionAnimate()


let productSectionAnimate = () => {
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger:".listItem",
            scroller:"body",
            // markers: true,
            start:"top 40%",
            end:'bottom 90%',
            scrub:1
    
        }
    });
    tl4.from(".listItem .leftAnimate1", {
        opacity:0,
        x:-300,
        stagger:0.1
    
    })
    tl4.from(".listItem .leftAnimate2", {
        opacity:0,
       
        stagger:0.1
    
    })
    tl4.from(".listItem .leftAnimate3", {
        opacity:0,
    
        stagger:0.1
    
    })
    tl4.from(".listItem .leftAnimate4", {
        opacity:0,
    
        stagger:0.1
    
    })
    tl4.from(".listItem .leftAnimate5", {
        opacity:0,
    
        stagger:0.1
    
    })
    tl4.from(".listItem .leftAnimate6", {
        opacity:0,
        duration:0.3,
        stagger:0.1
    
    })
    

}

// productSectionAnimate()


//footer animation

let footerAnimate = () => {
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger:".leftAnimate6",
            scroller:"body",
            // markers: true,
            start:"bottom 90%",
            end:"bottom 67%",
            
            scrub:1
    
        }
    });
    tl5.from("footer" , {
        opacity:0,
        y:200
    })
    
}


homePageAnimation()
servicePageAnimation()
heroSectionAnimate()
// productSectionAnimate()
// footerAnimate()





//scroll up btn show when you want

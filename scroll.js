let sceneCount = 0;
let opening = 0;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  d3fourlevels();
  updatefourlevels(75);
  // d3bands();
  d3bands2();
  bands_function();

  let scene_000 = new ScrollMagic.Scene({
    triggerElement: '#scene_000'
  })
  .setClassToggle('#scene_000', 'fade-in')
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'white',
  //   colorStart: '#FFF7AE'
  // })
  .on('start', () => {
    if (sceneCount == 0) {
      sceneCount = 0.555;
      opening = 0;

  
      // constant_temperature = 400;
      // temp = 400


      for ( var i = 0; i < point_count; i++ ) {
        array_plot[i] = []; 
        array_positive_y[i] = []; 
       array_negative_y[i] = []; 
      }

/////////////////



      constant_temperature = 400;
      temp = 400
      setTemperature_real(200)
      

////////////


      
      d3bands_0();
    } else {
      sceneCount = 0;
    }
  })
  .addTo(controller);
  
  let scene_00 = new ScrollMagic.Scene({
    triggerElement: '#scene_00'
  })
  .setClassToggle('#scene_00', 'fade-in')
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'white',
  //   colorStart: '#FFF7AE'
  // })
  .on('start', () => {
    if (sceneCount == 0.555) {
      sceneCount = 0.55;
      opening = 0;

      reset_scroll();
      document.getElementById("slider_4").value=50
      setConcentration(50)
      document.getElementById("slider_5").value=2
      setTemperature_real(200)
      reset_scene1()
      document.getElementById("switch_eh_2").checked = false

      // setTemperature_real(200)
      // constant_temperature = 400;
      // temp = 400


      for ( var i = 0; i < point_count; i++ ) {
        array_plot[i] = []; 
        array_positive_y[i] = []; 
       array_negative_y[i] = []; 
      }


      
      d3bands_0();
    } else {
      sceneCount = 0.555;

      reset_scroll();
      document.getElementById("slider_1").value=50
      setConcentration(50)
      document.getElementById("slider_2").value=2
      setVelocity(2)
      document.getElementById("slider_3").value=1
      document.getElementById("switch_eh_1").checked = false
      setScattering(1)
      reset_scene1()

    }
  })
  .addTo(controller);

  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.55) {
      

        reset_scroll();
        document.getElementById("slider_6").value=50
        setConcentration(50)
        document.getElementById("slider_7").value=1
        setVelocity(1)
        document.getElementById("slider_8").value=1
        setScattering(1)

        reset_scene1()
        document.getElementById("switch_eh_3").checked = false

        document.getElementById("nn").checked = false
        document.getElementById("nn_live").checked = true

        nn_live.checked = true  
        sceneCount = 0.5;
        opening = 0;

        constant_temperature = 400;
        temp = 400

        
        scattering_count =1
        scattering_velocity=1
        reset_scene1()
        array_positive_y_0 = []
        array_negative_y_0 = []
        array_plot_0 = []
        for ( var i = 0; i < point_count; i++ ) {
          array_plot[i] = []; 
          array_positive_y[i] = []; 
         array_negative_y[i] = []; 
        }


        
        d3bands_0();
      } else {
        sceneCount = 0.55;
        setTemperature_real(200)
    
        reset_scroll();
        document.getElementById("slider_4").value=50
        setConcentration(50)
        document.getElementById("slider_5").value=2
        setTemperature_real(200)
        reset_scene1()
        document.getElementById("switch_eh_2").checked = false
  

      }
    })
    .addTo(controller);


    let scene_0_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_0_5'
    })
    .setClassToggle('#scene_0_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {
        sceneCount = 0.7;
        opening = 1;
        reset_scene1()
        setTemperature_real(200)
        
        d3bands_0_5();

        reset_scroll();
        document.getElementById("slider_9").value=50
        setConcentration(50)
        document.getElementById("slider_10").value=1
        setVelocity(1)
        document.getElementById("slider_11").value=1
        setScattering(1)

        reset_scene1()
        document.getElementById("switch_eh_4").checked = false

        document.getElementById("nn_1").checked = false
        document.getElementById("nn_live_1").checked = true




      } else {
        sceneCount = 0.5;
        opening = 0;
        reset_scene1()
        nn_live.checked = true  

        reset_scroll();
        document.getElementById("slider_6").value=50
        setConcentration(50)
        document.getElementById("slider_7").value=1
        setVelocity(1)
        document.getElementById("slider_8").value=1
        setScattering(1)

        reset_scene1()
        document.getElementById("switch_eh_3").checked = false

        document.getElementById("nn").checked = false
        document.getElementById("nn_live").checked = true

      }
    })
    .addTo(controller);



    let scene_0_7 = new ScrollMagic.Scene({
      triggerElement: '#scene_0_7'
    })
    .setClassToggle('#scene_0_7', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.7) {
        sceneCount = 0.71;
        opening = 1
        reset_scene1()
        setTemperature_real(200)
        
        d3bands_0_5();


        reset_scroll();
        document.getElementById("slider_12").value=50
        setConcentration(50)
        document.getElementById("slider_13").value=200
        setTemperature_real(200)

        reset_scene1()
        document.getElementById("switch_eh_5").checked = false
        document.getElementById("nn_2").checked = false
        document.getElementById("nn_live_2").checked = true


      } else {
        sceneCount = 0.7;
        reset_scene1()
        // nn_live.checked = true  


        reset_scroll();
        document.getElementById("slider_9").value=50
        setConcentration(50)
        document.getElementById("slider_10").value=1
        setVelocity(1)
        document.getElementById("slider_11").value=1
        setScattering(1)

        reset_scene1()
        document.getElementById("switch_eh_4").checked = false

        document.getElementById("nn_1").checked = false
        document.getElementById("nn_live_1").checked = true


      }
    })
    .addTo(controller);

    // let scene_1 = new ScrollMagic.Scene({
    //   triggerElement: '#scene_1'
    // })
    // .setClassToggle('#scene_1', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 0.71) {

    //     switch_re.checked = true
        
    //     sceneCount = 1;
    //     reset_scene1()

    //     // constant_temperature=400

    //     switch_1 = 2//both

    //     array_positive_y_0 = []
    //     array_negative_y_0 = []
    //     array_plot_0 = []

    //     array_positive_y_0_e = []
    //     array_negative_y_0_e = []
    //     array_plot_e_0 = []

    //     array_positive_y_0_h = []
    //     array_negative_y_0_h = []
    //     array_plot_h_0 = []

    //     for ( var i = 0; i < point_count; i++ ) {
    //       array_plot[i] = []; 
    //       array_positive_y[i] = []; 
    //      array_negative_y[i] = []; 

    //      array_plot_e[i] = []; 
    //       array_positive_y_e[i] = []; 
    //      array_negative_y_e[i] = []; 

    //      array_plot_h[i] = []; 
    //       array_positive_y_h[i] = []; 
    //      array_negative_y_h[i] = []; 
    //     }
    //     // constant_fermi = Math.round(1000*-0.28*0.026)/1000
    //     // console.log(constant_fermi) 
    //     // console.log(constant_temperature)
    //     constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    //     // $('#zoom1').anythingZoomer({
    //     //   smallArea: 'small',
    //     //   clone: true,
    //     //   edge: 0,
    //     //   switchEvent: 'none'
    //     // });

    //     d3bands();
    //     reset_d3bands()
    //     d3bands();
    //   } else {
    //     sceneCount = 0.71;
    //     switch_1 = 0
    //     reset_scene1()
    //   }
    // })
    // .addTo(controller);


  

  // let scene_2 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_2'
  //   })
  //   .setClassToggle('#scene_2', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 1) {
  //       sceneCount = 2;

  //       // add_e("130");
  //       temp=270
  //       // constant_fermi = Math.round(1000*-0.28*0.026)/1000
  //       constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
  //       d3bands();
  //       reset_d3bands()
  //       d3bands();

  //       d3bands_2();

  //         add_e(130);
        
  //     } else {
  //       sceneCount = 1;
  //       constant_fermi = -0.28*0.026
  //       reset_d3bands_2();
  //       d3bands_2();

  //     }
  //   })
  //   .addTo(controller);

  // let scene_3 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_3'
  //   })
  //   .setClassToggle('#scene_3', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 2) {
  //       sceneCount = 3;
  //       d3bands_3();

        
       
  //       electron_add=0
  //       hole_add=0
  //       appearArray_s1 = []
  //       whiteArray_e=[]
  //       blackArray_h=[]
  //       add_h(130);
  //       temp =270
    
  //     } else {
  //       constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
  //       d3bands();
  //       reset_d3bands()
  //       d3bands();

  //       sceneCount = 2;
  //       appearArray_s1 = []
  //       electron_add=0
  //       hole_add=0
  //       whiteArray_e=[]
  //       blackArray_h=[]

  //       add_e(130);
  //     }
  //   })
  //   .addTo(controller);



    // let scene_3_end = new ScrollMagic.Scene({
    //   triggerElement: '#scene_3_end'
    // })
    // .setClassToggle('#scene_3_end', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 3) {
    //     sceneCount = 3.1;
    //     constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    //     d3bands();
    //     reset_d3bands()
    //     d3bands();

    //     d3bands_3_1();

    //     setTemperature(20); 
      

    //     electron_add=0
    //     hole_add=0
    //     appearArray_s1 = []
    //     whiteArray_e=[]
    //     blackArray_h=[]
    //     add_e(130);
    //     temp =20
       
        
    //   } else {
    //     sceneCount = 3;
    //     appearArray_s1 = []
    //     electron_add=0
    //     hole_add=0
    //     whiteArray_e=[]
    //     blackArray_h=[]
    //     add_h(130);
    //     temp =270
    //   }
    // })
    // .addTo(controller);

  // let scene_4 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_4'
  //   })
  //   .setClassToggle('#scene_4', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 3) {
  //       sceneCount = 4;
  //     } else {
  //       sceneCount = 3;
  //     }
  //   })
  //   .addTo(controller);

    // let scene_5 = new ScrollMagic.Scene({
    //   triggerElement: '#scene_5'
    // })
    // .setClassToggle('#scene_5', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 4) {
    //     sceneCount = 5;
    //   } else {
    //     sceneCount = 4;
    //   }
    // })
    // .addTo(controller);

    // let scene_6 = new ScrollMagic.Scene({
    //   triggerElement: '#scene_6'
    // })
    // .setClassToggle('#scene_6', 'fade-in')
    // // .addIndicators({
    // //   name: 'fade scene',
    // //   colorTrigger: 'white',
    // //   colorStart: '#FFF7AE'
    // // })
    // .on('start', () => {
    //   if (sceneCount == 5) {
    //     sceneCount = 6;
    //   } else {
    //     sceneCount = 5;
    //   }
    // })
    // .addTo(controller);

  // let scene_7 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_7'
  //   })
  //   .setClassToggle('#scene_7', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 6) {
  //       sceneCount = 7;
  //     } else {
  //       sceneCount = 6;
  //     }
  //   })
  //   .addTo(controller);

  // let scene_8 = new ScrollMagic.Scene({
  //     triggerElement: '#scene_8'
  //   })
  //   .setClassToggle('#scene_8', 'fade-in')
  //   // .addIndicators({
  //   //   name: 'fade scene',
  //   //   colorTrigger: 'white',
  //   //   colorStart: '#FFF7AE'
  //   // })
  //   .on('start', () => {
  //     if (sceneCount == 7) {
  //       d3fourlevels();
  //       sceneCount = 8;
  //     } else {
  //       sceneCount = 7;
  //     }
  //   })
  //   .addTo(controller);
}
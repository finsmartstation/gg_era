(function () {
    window.onload = () => {
        const c = document.querySelector("canvas#c");
        console.log("Console ~ c", c);
        var animateButton = function (e) {
            e.preventDefault;
            //reset animation
            e.target.classList.remove("animate");

            e.target.classList.add("animate");
            setTimeout(function () {
                e.target.classList.remove("animate");
            }, 700);
        };

        var bubblyButtons = document.getElementsByClassName("bubbly-button");

        for (var i = 0; i < bubblyButtons.length; i++) {
            bubblyButtons[i].addEventListener("click", animateButton, false);
        }

        var w = (c.width = window.innerWidth),
            h = (c.height = window.innerHeight),
            ctx = c.getContext("2d"),
            // 39, 100%, 50%
            // color: 'hsl(16, 88%, 54%)',
            // full color
            // color: 'hsl(hue,100%,light%)'

            opts = {
                len: 25,
                count: 50,
                baseTime: 1,
                addedTime: 20,
                dieChance: 0.05,
                spawnChance: 1,
                sparkChance: 0.1,
                sparkDist: 10,
                sparkSize: 2,

                color: "hsl(hue,100%,light%)",
                baseLight: 50,
                addedLight: 10, // [50-10,50+10]
                shadowToTimePropMult: 6,
                baseLightInputMultiplier: 0.01,
                addedLightInputMultiplier: 0.02,

                cx: w / 2,
                cy: h / 2,
                repaintAlpha: 0.04,
                hueChange: 0.1,
            },
            tick = 0,
            lines = [],
            dieX = w / 2 / opts.len,
            dieY = h / 2 / opts.len,
            baseRad = (Math.PI * 2) / 6;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, w, h);

        function loop() {
            window.requestAnimationFrame(loop);

            ++tick;

            ctx.globalCompositeOperation = "source-over";
            ctx.shadowBlur = 0;
            ctx.fillStyle = "rgba(0,0,0,alp)".replace("alp", opts.repaintAlpha);
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = "lighter";

            if (lines.length < opts.count && Math.random() < opts.spawnChance)
                lines.push(new Line());

            lines.map(function (line) {
                line.step();
            });
        }
        function Line() {
            this.reset();
        }
        Line.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
            this.addedX = 0;
            this.addedY = 0;

            this.rad = 0;

            this.lightInputMultiplier =
                opts.baseLightInputMultiplier +
                opts.addedLightInputMultiplier * Math.random();

            this.color = opts.color.replace("hue", tick * opts.hueChange);
            this.cumulativeTime = 0;

            this.beginPhase();
        };
        Line.prototype.beginPhase = function () {
            this.x += this.addedX;
            this.y += this.addedY;

            this.time = 0;
            this.targetTime =
                (opts.baseTime + opts.addedTime * Math.random()) | 0;

            this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1);
            this.addedX = Math.cos(this.rad);
            this.addedY = Math.sin(this.rad);

            if (
                Math.random() < opts.dieChance ||
                this.x > dieX ||
                this.x < -dieX ||
                this.y > dieY ||
                this.y < -dieY
            )
                this.reset();
        };
        Line.prototype.step = function () {
            ++this.time;
            ++this.cumulativeTime;

            if (this.time >= this.targetTime) this.beginPhase();

            var prop = this.time / this.targetTime,
                wave = Math.sin((prop * Math.PI) / 2),
                x = this.addedX * wave,
                y = this.addedY * wave;

            ctx.shadowBlur = prop * opts.shadowToTimePropMult;
            ctx.fillStyle = ctx.shadowColor = this.color.replace(
                "light",
                opts.baseLight +
                    opts.addedLight *
                        Math.sin(
                            this.cumulativeTime * this.lightInputMultiplier
                        )
            );
            ctx.fillRect(
                opts.cx + (this.x + x) * opts.len,
                opts.cy + (this.y + y) * opts.len,
                2,
                2
            );

            if (Math.random() < opts.sparkChance)
                ctx.fillRect(
                    opts.cx +
                        (this.x + x) * opts.len +
                        Math.random() *
                            opts.sparkDist *
                            (Math.random() < 0.5 ? 1 : -1) -
                        opts.sparkSize / 2,
                    opts.cy +
                        (this.y + y) * opts.len +
                        Math.random() *
                            opts.sparkDist *
                            (Math.random() < 0.5 ? 1 : -1) -
                        opts.sparkSize / 2,
                    opts.sparkSize,
                    opts.sparkSize
                );
        };
        loop();

        window.addEventListener("resize", function () {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, w, h);

            opts.cx = w / 2;
            opts.cy = h / 2;

            dieX = w / 2 / opts.len;
            dieY = h / 2 / opts.len;
        });
    };
})();
(function myFunction() {
    $('input').on('change', function() {
  localStorage.input = $(this).is(':checked');
  console.log($(this).is(':checked'));
});
    const onpageLoad = localStorage.getItem("lang") || "";
    console.log("hi");

  if (onpageLoad === "fr_lang"){
    $('.fr_lang').addClass("active-lang"); 
          localStorage.setItem('lang', 'fr_lang');
          $('.en_lang').removeClass("active-lang") ;
          $(function(){
  var test = localStorage.input === 'true'? true: false;
  $('input').prop('checked', test || false);
});
       
  }else{
    $('.en_lang').addClass("active-lang");
          localStorage.removeItem('lang','fr_lang');
          localStorage.setItem('lang', 'en_lang');
           // Disable French
          $('.fr_lang').removeClass("active-lang")
  }
  })

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    
   
    
    $('.en_lang').addClass("active-lang");
    $('#lang-switch .en').addClass("active-flag");
    checkbox.addEventListener('change', function () {
        
      if (checkbox.checked) {
        // do this
       
        // disable english 
        $('.fr_lang').addClass("active-lang"); 
        localStorage.setItem('lang', 'fr_lang');
        $('.en_lang').removeClass("active-lang") ;

         console.log('Checked');
   
   

      } else {
        // do that
        console.log('Not checked' );
        $('.en_lang').addClass("active-lang");
        localStorage.removeItem('lang','fr_lang');
        localStorage.setItem('lang', 'en_lang');
         // Disable French
        $('.fr_lang').removeClass("active-lang")

      }
    });
  });

  $(this).classList.add('active-lang')
  if(onpageLoad != null && onpageLoad  == 'fr_lang'){
   tSwitcher.checked = true;
   console.log("engg")
} 
$(this).classList.add(onpageLoad);


// rough 

window.onscroll = function() {myFunction1()};

var navbar = document.getElementById("navbar1");
var navbar2 = document.getElementById("navbar2");
var sticky = navbar.offsetTop;

function myFunction1() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky" , "border1")
  } else {
    navbar.classList.remove("sticky" , "border1");
  }
  if (window.pageYOffset <= sticky){
    navbar.classList.remove("sticky" , "border1");
  }
  if (window.pageYOffset >= sticky) {
    navbar2.classList.add("imgnone")
  } else {
    navbar2.classList.remove("imgnone");
  }
  if (window.pageYOffset <= sticky){
    navbar2.classList.remove("imgnone");
  }
}

// sticky navbar 
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
 
  
  $('.en_lang').addClass("active-lang");
  $('#lang-switch .en').addClass("active-flag");
  checkbox.addEventListener('change', function () {
      
    if (checkbox.checked) {
      // do this
     
      // disable english 
      $('.fr_lang').addClass("active-lang"); 
      localStorage.setItem('lang', 'fr_lang');
      $('.en_lang').removeClass("active-lang") ;

       console.log('Checked');
 
 

    } else {
      // do that
      console.log('Not checked' );
      $('.en_lang').addClass("active-lang");
      localStorage.removeItem('lang','fr_lang');
      localStorage.setItem('lang', 'en_lang');
       // Disable French
      $('.fr_lang').removeClass("active-lang")

    }
  });
});

$(this).classList.add('active-lang')
if(onpageLoad != null && onpageLoad  == 'fr_lang'){
 tSwitcher.checked = true;
 console.log("engg")
} 
$(this).classList.add(onpageLoad);
  
  AOS.init({
    duration: 1200,
  })


  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
   
    
    $('.en_lang').addClass("active-lang");
    $('#lang-switch .en').addClass("active-flag");
    checkbox.addEventListener('change', function () {
        
      if (checkbox.checked) {
        // do this
       
        // disable english 
        $('.fr_lang').addClass("active-lang"); 
        localStorage.setItem('lang', 'fr_lang');
        $('.en_lang').removeClass("active-lang") ;

         console.log('Checked');
   
   

      } else {
        // do that
        console.log('Not checked' );
        $('.en_lang').addClass("active-lang");
        localStorage.removeItem('lang','fr_lang');
        localStorage.setItem('lang', 'en_lang');
         // Disable French
        $('.fr_lang').removeClass("active-lang")

      }
    });
  });

  $(this).classList.add('active-lang')
  if(onpageLoad != null && onpageLoad  == 'fr_lang'){
   tSwitcher.checked = true;
   console.log("engg")
} 
$(this).classList.add(onpageLoad);
  
//   var tSwitcher = document.getElementById('lang-switch');
// let element = document.body;

// let onpageLoad = localStorage.getItem("lang") || "";
// if(onpageLoad != null && onpageLoad  == 'en_lang'){
//   tSwitcher.checked = true;
// } 
// element.classList.add(onpageLoad);


// function themeToggle(){
//   console.log("checkkkkkkkkkkkkkkkk");
//   if(tSwitcher.checked){
//       localStorage.setItem('lang', 'en_lang');
//         element.classList.add('active-lang');
//     } else {
//       localStorage.setItem('lang', '');
//         element.classList.remove('active-lang');
//     }
// }

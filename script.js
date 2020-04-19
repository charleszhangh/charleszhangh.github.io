var radius = 8;
TweenMax.staggerFromTo('.blob', 8 ,{
    cycle: {
        attr:function(i) {
            var r = i*90;
            return {
                transform:'rotate('+r+') translate('+radius+',0.02) rotate('+(-r)+')'
            }      
        }
    }  
},{
    cycle: {
        attr:function(i) {
            var r = i*160+360;
            return {
                transform:'rotate('+r+') translate('+radius+',0.05) rotate('+(-r)+')'
            }      
        }
    },
    ease:Linear.easeNone,
    repeat:-1
});


var json = {"images":[{"points":[{"x":28,"y":54},{"x":14,"y":530},{"x":446,"y":218},{"x":97,"y":33},{"x":385,"y":7},{"x":253.60000610351562,"y":573},{"x":412.6000061035156,"y":44},{"x":437,"y":259},{"x":24,"y":303},{"x":447.8000030517578,"y":243},{"x":407.8000030517578,"y":544},{"x":31,"y":224},{"x":389.6000061035156,"y":509},{"x":238.60000610351562,"y":582},{"x":120.5999984741211,"y":40},{"x":235.80000114440918,"y":561},{"x":70.80000114440918,"y":474},{"x":299.8000030517578,"y":22}],"src":"static/normal.png","x":0,"y":0},{"points":[{"x":23,"y":44},{"x":6,"y":556},{"x":456,"y":250},{"x":94,"y":6},{"x":438,"y":38},{"x":217,"y":575},{"x":442,"y":78},{"x":440,"y":314},{"x":47,"y":240},{"x":451,"y":290},{"x":368,"y":554},{"x":36,"y":160},{"x":360.2948605771303,"y":549.5599688696971},{"x":200.95637747318196,"y":579.828914414291},{"x":77,"y":127},{"x":200.75444649400853,"y":557.093979426022},{"x":64.89363465738596,"y":467.8038614644414},{"x":305.27216734365044,"y":26.34989212603874}],"src":"static/wink.png","x":0,"y":0},{"points":[{"x":22,"y":84},{"x":4,"y":553},{"x":444,"y":257},{"x":62,"y":29},{"x":354,"y":11},{"x":166,"y":577},{"x":393,"y":26},{"x":436,"y":291},{"x":25,"y":229},{"x":442,"y":234},{"x":379,"y":589},{"x":36.014777056488505,"y":167.39644959904797},{"x":376,"y":538},{"x":142.7027195877604,"y":578.6062764815072},{"x":134.2066961197327,"y":41.17019332322528},{"x":136.12875771942612,"y":552.2611315828807},{"x":42.047574799533386,"y":462.1180704490344},{"x":286.094822083065,"y":21.16994971987741}],"src":"static/surprise.png","x":0,"y":0},{"points":[{"x":12,"y":91},{"x":14,"y":553},{"x":429,"y":224},{"x":46,"y":27},{"x":333,"y":21},{"x":235,"y":578},{"x":362,"y":33},{"x":412,"y":233},{"x":27,"y":321},{"x":422.2765228701757,"y":214.95379229698727},{"x":420,"y":521},{"x":12,"y":236},{"x":411,"y":503},{"x":277,"y":589},{"x":51,"y":84},{"x":273,"y":588},{"x":78.23558487429948,"y":498.9991953424835},{"x":230.09935275623246,"y":10.823446108972597}],"src":"static/tongue.png","x":0,"y":0},{"points":[{"x":21,"y":68},{"x":12,"y":566},{"x":440,"y":244},{"x":55,"y":19},{"x":398,"y":25},{"x":247,"y":583},{"x":394,"y":75},{"x":427,"y":266},{"x":26,"y":293},{"x":437.542092676326,"y":249.9921095087033},{"x":416,"y":566},{"x":19,"y":209},{"x":393.7483445478116,"y":527.1739676334909},{"x":230.96913943776843,"y":589},{"x":43,"y":59},{"x":226.1701989134251,"y":566.3372277517087},{"x":68.06218900218222,"y":489.65723539414057},{"x":259.1903235237695,"y":9.255779472941416}],"src":"static/grumpy.png","x":0,"y":0}],"triangles":[[2,0,1],[3,4,5],[8,6,7],[10,9,11],[13,14,12],[15,16,17]]}
                      
var memoji = document.getElementById("memoji");
var morpher = new Morpher(json);        
/*var morpher = new Morpher(json);*/
/*document.body.appendChild(morpher.canvas);*/
memoji.appendChild(morpher.canvas).className = "childdd";

/*morpher.set([1, 0]);
morpher.animate([0, 1], 1000);*/
morpher.set([1,0,0,0,0]);
var speed = 250;

var normcolor = "2b2d2f";
var mutedcolor = "2b2d2f";


function showMe() {
  var me = document.getElementById("me");
  var current = document.getElementById("current");
  var past = document.getElementById("past");
  var reading = document.getElementById("reading");
  var follow = document.getElementById("follow");
    
  me.className += " highlight";
  current.classList.remove('highlight');
  past.classList.remove('highlight');
  reading.classList.remove('highlight');
  follow.classList.remove('highlight');


  var meInfo = document.getElementById("meInfo");
  var currentInfo = document.getElementById("currentInfo");
  var pastInfo = document.getElementById("pastInfo");
  var readingInfo = document.getElementById("readingInfo");
  var followInfo = document.getElementById("followInfo");

  if (window.getComputedStyle(meInfo).display === "none") {
    meInfo.style.display = "block";
    currentInfo.style.display = "none";
    pastInfo.style.display = "none";
    readingInfo.style.display="none";
    followInfo.style.display="none";
    morpher.animate([0,1,0,0,0],speed);
    me.style.color=normcolor;

    current.style.color=mutedcolor;
    past.style.color=mutedcolor;


  } else {
    meInfo.style.display = "none";
    me.classList.remove('highlight');
    morpher.animate([1,0,0,0,0],speed);

    current.style.color=normcolor;
    past.style.color=normcolor;

  }
}

function showCurrent() {
  var me = document.getElementById("me");
  var current = document.getElementById("current");
  var past = document.getElementById("past");
  var reading = document.getElementById("reading");
  var follow = document.getElementById("follow");

  current.className += " highlight";
  me.classList.remove('highlight');
  past.classList.remove('highlight');
  reading.classList.remove('highlight');
  follow.classList.remove('highlight');
    
  var meInfo = document.getElementById("meInfo");
  var currentInfo = document.getElementById("currentInfo");
  var pastInfo = document.getElementById("pastInfo");
  var readingInfo = document.getElementById("readingInfo");
  var followInfo = document.getElementById("followInfo");

  if (window.getComputedStyle(currentInfo).display === "none") {
    currentInfo.style.display = "block";
    meInfo.style.display = "none";
    pastInfo.style.display = "none";
    readingInfo.style.display="none";
    followInfo.style.display="none";
    morpher.animate([0,0,0,1,0],speed);
    console.log("222");

  } else {
    currentInfo.style.display = "none";
    current.classList.remove('highlight');
    morpher.animate([1,0,0,0,0],speed);


  }

}



function showPast() {
  var me = document.getElementById("me");
  var current = document.getElementById("current");
  var past = document.getElementById("past");
  var reading = document.getElementById("reading");
  var follow = document.getElementById("follow");

  past.className += " highlight";
  current.classList.remove('highlight');
  me.classList.remove('highlight');
  reading.classList.remove('highlight');
  follow.classList.remove('highlight');
    
  var meInfo = document.getElementById("meInfo");
  var currentInfo = document.getElementById("currentInfo");
  var pastInfo = document.getElementById("pastInfo");
  var readingInfo = document.getElementById("readingInfo");
  var followInfo = document.getElementById("followInfo");

  if (window.getComputedStyle(pastInfo).display === "none") {
    pastInfo.style.display = "block";
    currentInfo.style.display = "none";
    meInfo.style.display = "none";
    readingInfo.style.display="none";
    followInfo.style.display="none";
    morpher.animate([0,0,0,0,1],speed);
  } else {
    pastInfo.style.display = "none";
    past.classList.remove('highlight');
    morpher.animate([1,0,0,0,0],speed);
  }
}

function showReading() {
  var me = document.getElementById("me");
  var current = document.getElementById("current");
  var past = document.getElementById("past");
  var reading = document.getElementById("reading");
  var follow = document.getElementById("follow");

  reading.className += " highlight";
  current.classList.remove('highlight');
  me.classList.remove('highlight');
  past.classList.remove('highlight');
  follow.classList.remove('highlight');
    
  var meInfo = document.getElementById("meInfo");
  var currentInfo = document.getElementById("currentInfo");
  var pastInfo = document.getElementById("pastInfo");
  var readingInfo = document.getElementById("readingInfo");
  var followInfo = document.getElementById("followInfo");

  if (window.getComputedStyle(readingInfo).display === "none") {
    readingInfo.style.display = "block";
    currentInfo.style.display = "none";
    meInfo.style.display = "none";
    pastInfo.style.display="none";
    followInfo.style.display="none";
    morpher.animate([0,0,1,0,0],speed);
    console.log("111");
  } else {
    readingInfo.style.display = "none";
    reading.classList.remove('highlight');
    morpher.animate([1,0,0,0,0],speed);
  }
}

function showFollow() {
  var me = document.getElementById("me");
  var current = document.getElementById("current");
  var past = document.getElementById("past");
  var reading = document.getElementById("reading");
  var follow = document.getElementById("follow");

  follow.className += " highlight";
  current.classList.remove('highlight');
  me.classList.remove('highlight');
  reading.classList.remove('highlight');
  past.classList.remove('highlight');
    
  var meInfo = document.getElementById("meInfo");
  var currentInfo = document.getElementById("currentInfo");
  var pastInfo = document.getElementById("pastInfo");
  var readingInfo = document.getElementById("readingInfo");
  var followInfo = document.getElementById("followInfo");

  if (window.getComputedStyle(followInfo).display === "none") {
    followInfo.style.display = "block";
    currentInfo.style.display = "none";
    meInfo.style.display = "none";
    readingInfo.style.display="none";
    pastInfo.style.display="none";
    morpher.animate([1,0,0,0,0],speed);
  } else {
    followInfo.style.display = "none";
    follow.classList.remove('highlight');
    morpher.animate([1,0,0,0,0],speed);
  }
}





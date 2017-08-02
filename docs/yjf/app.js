$(function(){
  var $slide = $(".slide")
  $slide.addClass('active')
  TweenMax.from($('.ball1'), 0.5, {
    bezier:[
      {x:20, y:-5, scale:0.8},
      {x:-500, y:110, scale:0.4}
    ],
    ease:Power1.easeInOut
  })
  TweenMax.from($('.ball2'), 0.5, {
    bezier:[
      {x:20, y:-5, scale:0.8},
      {x:-50, y:-200, scale:0.4}
    ],
    ease:Power1.easeInOut
  })
  TweenMax.from($('.ball3'), 0.5, {
    bezier:[
      {x:-380, y:300, scale:0.8},
      {x:200, y:420, scale:0.4}
    ],
    ease:Power1.easeInOut
  })
  TweenMax.from($('.ball4'), 0.5, {
    bezier:[
      {x:300, y:-250, scale:0.8},
      {x:-150, y:-350, scale:0.4}
    ],
    ease:Power1.easeInOut
  })
  TweenMax.from($('.ball5'), 0.5, {
    bezier:[
      {x:150, y:20, scale:0.8},
      {x:500, y:-40, scale:0.4}
    ],
    ease:Power1.easeInOut
  })

  TweenMax.from($('.wx'), 20, {
    bezier:[
      {x:0, y:0, scale: 1},
      {x:0, y:-60, scale: 0.75},
      {x:400, y:-120, scale: 0},
      {x:1000, y:0, scale: 0.75},
      {x:0, y:0, scale: 1},
    ],
    ease:Power1.easeInOut,
    repeat: -1
  })
  TweenMax.from($('.xq'), 30, {
    bezier:[
      {x:0, y:0, scale: 1},
      {x:0, y:-60, scale: 0.75},
      {x:400, y:-120, scale: 0},
      {x:1000, y:0, scale: 0.75},
      {x:0, y:0, scale: 1},
    ],
    ease:Power1.easeInOut,
    repeat: -1
  })
  +(function(){
    function splitText($el) {
        var prevLetter, sentence,
            sentence = $el.text().split("");
            $el.html('')
        $.each(sentence, function(index, val) {
            if(val === " "){
                val = "&nbsp;";
            }
            var letter = $("<div/>", {id : "txt" + index})
              .addClass('txt').html(val).appendTo($el);
            if(prevLetter) {
                $(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
            };
            prevLetter = letter;
        });
        return $el
    }
    TweenMax.staggerFrom(splitText($('.title')).children(), 0.4, {rotationY:"-270deg", opacity: 0, top:80, transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.06);
    var text = splitText($('.text')).children()
    var tl = new TimelineMax()
    tl.staggerFrom(text, 0.4, {alpha:0}, 0.06);
    tl.staggerTo(text, 0.6, {rotationX:"360deg", color:"#737fc3", transformOrigin:"50% 50% 10"}, 0.02);
  })()

  +(function(){
    var maxWidth = $(window).width()
    var maxHeight = $(window).height()
    function add(){
      var $line = $('<img class="line" src="./images/line.png">')
      $slide.append($line.css({left:_.random(300,maxWidth+200),top:_.random(300,maxHeight+200)}))
      var x = _.random(-300,300);
      var k = 2.589
      TweenMax.set($line, {scale: Math.random()+0.5})
      TweenMax.fromTo($line, Math.random()+1, {x:x,y:x*k}, {x:2*x,y:2*x*k})
    }
    window.add = add
    add()
  })()

})
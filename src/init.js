const arr = []

$(document).ready(function() {
  window.dancers = [];
  $('#addBlinky').on('click', function(event) {

    // make a blinky dancer with a random position
    var dancer = new MakeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    arr.push(dancer.$node)
  });

  $('#addSlow').on('click', function(event) {
  
    // make a slow dancer with a random position
    var dancer = new MakeSlowDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    arr.push(dancer.$node)
  });
  $('#addMezwed').on('click', function() {
    
    // make a mezwed dancer with a random position
    var dancer = new MakeMezwedDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    arr.push(dancer.$node)
  });

  $('#line').on('click', (event) => {
    for(let i in arr) {
      const dot = arr[i]
      $(dot[0]).attr("id",i)
      var styleSettings = {
        top: '350px'
      }
      $(`#${i}`).css(styleSettings)
    }
    })

  $('.dancer').mouseover(() => {
    $('.dancer').css('border-color', 'white')
  })
  
  $('.dancer').mouseout(() => {
    $('.dancer').css('border-color', 'white')
  })

})
  
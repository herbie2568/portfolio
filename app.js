/////JQUERY/////
$(() => {
////HEADER/////
// const $h1 = $('<div>').appendTo
$('<h1>').text('LILY CHEN').appendTo('header').addClass('header').attr('id', 'header-name')
// $('<div>').text('Web Developer | ').appendTo('header').addClass('header').attr('id', 'header-description')

/////CAROUSEL IMAGES/////
const $imgBar = $('<div>').appendTo('body').addClass('imgbar').addClass('carousel-images')

$('<div>').appendTo('.carousel-images').addClass('carousel-button').addClass('previous')
$(`<img src = 'lilypics/left_arrow.png'>`).appendTo('.previous')
$('<div>').addClass('carousel-container').appendTo($imgBar).addClass('lilypics-div')

///central park pic//
$(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo('.lilypics-div').addClass('carousel-images')
// //bear mountain//
$(`<img src ='lilypics/IMG_5255.jpg'>`).appendTo('.lilypics-div').addClass('carousel-images')
//aquarium//
$(`<img src ='lilypics/IMG_7627.HEIC.jpg'>`).appendTo('.lilypics-div').addClass('carousel-images')
//roxie CT//
$(`<img src ='lilypics/IMG_8047.HEIC.jpg'>`).appendTo('.lilypics-div').addClass('carousel-images')
//holland tunnel vent//
$(`<img src ='lilypics/IMG_8509.HEIC.jpg'>`).appendTo('.lilypics-div').addClass('carousel-images')
//madison sq park//
$(`<img src ='lilypics/IMG_8826.HEIC.jpg'>`).appendTo('.lilypics-div').addClass('carousel-images')
$('<div>').appendTo('.carousel-images').addClass('carousel-button').addClass('next')
$(`<img src = 'lilypics/right_arrow.png'>`).appendTo('.next')

////CAROUSEL JQUERY////
currentImgIndex = 0
  numOfImages= $('.carousel-images').children().length - 1
  $('.next').on('click', ()=> {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex < numOfImages) {
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex > 0) {
        currentImgIndex--
    } else {
        currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

////NAV BAR/////
const $navBar = $('<div>').addClass('navbar-div').appendTo('.imgbar')
$('<ul>').appendTo($navBar).addClass('nav-bar')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'home-li')
$('<a href= #home>').appendTo('#home-li').text('home').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'about-li')
$('<a href= #about>').appendTo('#about-li').text('about').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'resume-li')
$('<a href= #resume>').appendTo('#resume-li').text('resume').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'projects-li')
$('<a href= #projects>').appendTo('#projects-li').text('projects').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'links-li')
$('<a href= #links>').appendTo('#links-li').text('links').addClass('nav-anchor')

//////SECTIONS//////
$('<div>').addClass('stuff').appendTo('body')
$('<section>').attr('id', 'about').appendTo('.stuff')
$('<section>').attr('id', 'resume').appendTo('.stuff')
$('<section>').attr('id', 'projects').appendTo('.stuff')
$('<section>').attr('id', 'links').appendTo('.stuff')

//////about///////
$('<p>').appendTo('#about').text('Hi, I\'m Lily! I\'m a software engineer based in Brooklyn, NY. Feel free to check out my stuff in the links!').addClass('about-text')

})

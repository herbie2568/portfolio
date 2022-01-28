/////JQUERY/////
$(() => {
////HEADER/////
// const $h1 = $('<div>').appendTo
$('<div>').text('LILY CHEN').appendTo('header').addClass('header').attr('id', 'header-name')
$('<div>').text('full stack web developer').appendTo('header').addClass('header-description')
// $('<div>').text('Web Developer | ').appendTo('header').addClass('header').attr('id', 'header-description')

/////CAROUSEL IMAGES/////
const $imgBar = $('<div>').appendTo('body').addClass('imgbar').addClass('carousel-images')
$('<div>').addClass('arrow-img').appendTo($imgBar)
// $('<div>').appendTo('.carousel-images').addClass('carousel-button').addClass('previous')
// $(`<img src = 'lilypics/left_arrow.png'>`).appendTo('.previous')
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
// $('<div>').appendTo('.carousel-images').addClass('carousel-button').addClass('next')
// $(`<img src = 'lilypics/right_arrow.png'>`).appendTo('.next')

////CAROUSEL JQUERY////
const $carousel = () => {
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

}

////NAV BAR/////
const $navBar = $('<div>').addClass('navbar-div').appendTo('.imgbar')
$('<ul>').appendTo($navBar).addClass('nav-bar')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'home-li')
$('<a href= #header-name>').appendTo('#home-li').text('home').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'about-li')
$('<a href= #about>').appendTo('#about-li').text('about').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'resume-li')
$('<a href= #resume>').appendTo('#resume-li').text('resume').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'projects-li')
$('<a href= #projects>').appendTo('#projects-li').text('projects').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'gallery-li')
$('<a href= #gallery>').appendTo('#gallery-li').text('gallery').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'links-li')
$('<a href= #links>').appendTo('#links-li').text('links').addClass('nav-anchor')

//////SECTIONS//////
$('<div>').addClass('stuff').appendTo('body')
$('<section>').attr('id', 'about').appendTo('.stuff')
$('<section>').attr('id', 'resume').appendTo('.stuff')
$('<section>').attr('id', 'projects').appendTo('.stuff')
$('<section>').attr('id', 'gallery').appendTo('.stuff')
$('<section>').attr('id', 'links').appendTo('.stuff')



//////about///////
$('<h2>').appendTo('#about').text('about')
$('<p>').appendTo('#about').text('Hi, I\'m Lily! I\'m a software engineer based in Brooklyn, NY. I enjoy doing front end and back end development. You will usually find me biking, swimming, playing the piano/cello, solving Rubik\'s cubes, or walking my dog Roxie. I\'m also a bit of a Jeopardy nerd and do watch it religiously. I love learning new things and am constantly honing my current skills. Feel free to check out my random stuff in the links!').addClass('about-text')


////resume//////
$('<h2>').appendTo('#resume').text('resume')
$('<p>').appendTo('#resume').text('Experience').addClass('resume-text')
$('<p>').appendTo('#resume').text('Education').addClass('resume-text')
$('<p>').appendTo('#resume').text('Skills').addClass('resume-text')
$('<p>').appendTo('#resume').text('Awards and Honors').addClass('resume-text')


///projects////
$('<h2>').appendTo('#projects').text('projects')
/////LEGEND OF ZELDA////
$('<div>').appendTo('#projects').addClass('zelda-div')
$(`<a href = 'https://lilysbotwgame.netlify.app/' target = '/blank' >`).appendTo('.zelda-div').text('The Legend of Zelda Game').addClass('projects-text')




////gallery////
$('<h2>').appendTo('#gallery').text('gallery')
// $('<p>').appendTo('#gallery').text('Here are some pictures of me').addClass('gallery-text')

////links////
$('<h2>').appendTo('#links').text('links')
///GITHUB////
$('<div>').appendTo('#links').addClass('github-div')
$(`<a href = 'https://github.com/herbie2568' target = '/blank'>`).appendTo('.github-div').text('github').addClass('links-text')
// $('<div>').appendTo('.github-div').addClass('github-image-div')
// $(`<img src ='lilypics/github_icon.png'>`).appendTo('.github-div').addClass('link-images')
///LINKEDIN////
$('<div>').appendTo('#links').addClass('linkedin-div')
$(`<a href = 'https://www.linkedin.com/in/lilychen910/' target = '/blank'>`).appendTo('.linkedin-div').text('linkedin').addClass('links-text')
////FACEBOOK////
$('<div>').appendTo('#links').addClass('facebook-div')
$(`<a href = 'https://www.facebook.com/lilyp4d/' target = '/blank'>`).appendTo('.facebook-div').text('facebook').addClass('links-text')
////INSTAGRAM////
$('<div>').appendTo('#links').addClass('instagram-div')
$(`<a href = 'https://www.instagram.com/sugarsmaster/' target = '/blank'>`).appendTo('.instagram-div').text('instagram').addClass('links-text')
////TWITTER////
$('<div>').appendTo('#links').addClass('reddit-div')
$(`<a href = 'https://www.reddit.com/user/herbie2568' target = '/blank'>`).appendTo('.reddit-div').text('reddit').addClass('links-text')



})

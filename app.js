/////JQUERY/////
$(() => {
////HEADER/////
// const $h1 = $('<div>').appendTo

$('<header>').appendTo('body')
$('<div>').text('LILY CHEN').appendTo('header').addClass('header').attr('id', 'header-name')
$('<div>').text('full stack web developer').appendTo('header').addClass('header-description')
// $('<div>').text('Web Developer | ').appendTo('header').addClass('header').attr('id', 'header-description')

/////MAIN IMAGE/////
const $imgBar = $('<div>').appendTo('body').addClass('imgbar')

$('<div>').appendTo($imgBar).addClass('lilypics-div')

///central park pic//
$(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo('.lilypics-div').addClass('main-pic')


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
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'contact-li')
$('<a href= #contact>').appendTo('#contact-li').text('contact').addClass('nav-anchor')

//////SECTIONS//////
$('<div>').addClass('stuff').appendTo('body')
$('<section>').attr('id', 'about').appendTo('.stuff')
$('<section>').attr('id', 'resume').appendTo('.stuff')
$('<section>').attr('id', 'projects').appendTo('.stuff')
$('<section>').attr('id', 'gallery').appendTo('.stuff')
$('<section>').attr('id', 'links').appendTo('.stuff')
$('<section>').attr('id', 'contact').appendTo('.stuff')



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

$('<div>').appendTo('#gallery').addClass('carousel-container')
////previous arrow////
$('<div>').appendTo('.carousel-container').addClass('carousel-button').addClass('previous')
$(`<img src = 'lilypics/left_arrow.png'>`).appendTo('.previous')

////carousel images////
$('<div>').appendTo('.carousel-container').addClass('carousel-images')
//bear mountain//
$(`<img src ='lilypics/IMG_5463.HEIC.jpg'>`).appendTo('.carousel-images')
//aquarium//
$(`<img src ='lilypics/IMG_7627.HEIC.jpg'>`).appendTo('.carousel-images')
//roxie CT//
$(`<img src ='lilypics/IMG_8047.HEIC.jpg'>`).appendTo('.carousel-images')
//holland tunnel vent//
$(`<img src ='lilypics/IMG_8509.HEIC.jpg'>`).appendTo('.carousel-images')
//madison sq park//
$(`<img src ='lilypics/IMG_8826.HEIC.jpg'>`).appendTo('.carousel-images')
//roxie south st seaport//
$(`<img src ='lilypics/IMG_6193.HEIC.jpg'>`).appendTo('.carousel-images')
//citibike//
$(`<img src ='lilypics/IMG_6934.HEIC.jpg'>`).appendTo('.carousel-images')
//bday pic//
$(`<img src ='lilypics/IMG_8551 2.HEIC.jpg'>`).appendTo('.carousel-images')


/////next arrow////
$('<div>').appendTo('.carousel-container').addClass('carousel-button').addClass('next')
$(`<img src = 'lilypics/right_arrow.png'>`).appendTo('.next')

////CAROUSEL JQUERY//////
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



////links////
$('<h2>').appendTo('#links').text('links')
///GITHUB////
$('<div>').appendTo('#links').addClass('github-div')

$(`<a href = 'https://github.com/herbie2568' target = '/blank'>`).appendTo('.github-div').text('github').addClass('links-text')
// $(`<img src='lilypics/github_icon.png'>`).appendTo('.github-div').addClass('github-logo')



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

////CONTACT////
$('<h2>').appendTo('#contact').text('contact')
$('<div>').appendTo('#contact').addClass('contact-div')
$(`<form action="action_page.php">`).appendTo('.contact-div').addClass('form')
$(`<label for="fname">`).appendTo('.form').text('First Name')
$(`<input type="text" id="fname" name="firstname" placeholder="Your first name..">`).appendTo('.form')

$(`<label for="lname">`).appendTo('.form').text('Last Name')
$(`<input type="text" id="lname" name="lastname" placeholder="Your last name..">`).appendTo('.form')

$(`<label for="email">`).appendTo('.form').text('Email')
$(`<input type="email" id="email" name="email" placeholder="Your email..">`).appendTo('.form')

$(`<label for="phone">`).appendTo('.form').text('Phone Number')
$(`<input type="tel" id="phone" name="phone" placeholder= "ex. (888) 888-8888">`).appendTo('.form')

$(`<label for="subject">`).appendTo('.form')
$(`<textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>`).appendTo('.form')

////CAPTCHA/////
$(`<div class="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ">`).appendTo('.form')

$(`<input type="submit" value="Submit">`).appendTo('.form')


/////FOOTER////
$('<footer>').appendTo('body').addClass('footer')
///SKYLINE PIC/////
$('<div>').appendTo('footer').addClass('skyline-div')
$(`<img src ='lilypics/skyline-bw.webp'>`).appendTo('.skyline-div').addClass('skyline-image')


$(`<img src='lilypics/github_icon.png'>`).appendTo('.footer').addClass('github-logo')

})

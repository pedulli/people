# ISTE 240 Homepage

This website is for ISTE 240. Written by me.

## Exercises

1. ### [ISTE-240 Course Homepage](https://people.rit.edu/~tgp5235/iste-240)

    The homepage is where you can find links to things I am doing in the course. I overengineered this page and made it into a creative project because I have gotten tired of making pages that are visually uninspired, or overinspired. After I decided on the space theme, I ended up adding planets around the screen to pay homage to my [aunt's early 2000s website](http://supermelf.com) that served as partial inspiration in concept.

    #### Part One: The Star Background

    I started the project with the idea that I wanted to make a an interesting background without using images. I used a trick I learned a long time ago for my original personal website, which is to use a radial gradient with a repeating background to create a dot matrix. I originally made two of them using pseudo elements on body, to mask one with a transformed one, to get a more random assortment of dots. After not getting results that I was happy with, I looked into how to use noise in css, originally to mask psuedo elements, but it ended up being used as a filter because I noticed that it looked like stars if I applied it to my dot matricies. The second matrix is used for depth as it was still transformed in a way that made it less uniform which is what I was looking for. This is how I got the idea to do the space theme. I found an interesting browser inconsistency in this project, which is that filters on firefox will not be applied if the element is hidden, so you need to place it offscreen for it to take effect.

    #### Part Two: The Planets

    The planets themselves were not too hard to draw using a basic vector editor but the hard part was learning how to do curved text, because I wanted to make the description text to not only wrap around the planets, but also be selectable and separate from the planet as I wanted to make the text spin on hover. I went through a lot of search results until I found a [method of doing curved text](https://dev.to/jh3y/circular-text-with-css-57jf) that would work for my use case. I would still need to hack it into my project so I fiddled with the svg's attributes for a while. After a long time I finally got it in a state that I was happy with.

    #### Part Three: Semantic CSS Routing

    This part was fun, because routing with css is actually quite easy, but keeping everything semantically correct is quite difficult. The css :target selector is applied to elements who's id is equal to the [fragment identifier in the url](https://en.wikipedia.org/wiki/URI_fragment), so the css could show and hide elements based on the url. You can check to see if the url is fragmentless by checking weather or not the body has a :target inside of it. This kind of routing is called [hash routing](https://developer.mozilla.org/en-US/docs/Glossary/Hash_routing) although it is not commonly used anymore. By default, the homepage is actually just a navigation element because that is what the page is for. After the navigation is the main element which ironically looks like very standard HTML. A lot of the magic of the site is located within the css file, which I made the descision to omit from the print page function which can be used to save the page as a pdf as well as printing it. When I did that, as well as some intentionally overridden inline styles, the print screen displays a totally different, well formatted and nice looking page with the contents of the site. I also wanted the page to look good if the user is unable to load the css file, and this convieniently did that for me.

    #### Part Four: Accessability

    I normally make fairly accessable websites, because many are very basic. This project was interesting because it served as a way for me to challenge my limited accessibility (a11y) knowledge and learn how to make my convoluted website usable. Firstly, I used a font I am quite fond of called [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/) by the Braille Institute, because, as the name suggests, it is very easy to read (I use it personally now). I then looked at the a11y tree menu in the chrome dev tools and added aria tags to hide any decorative elements, as well as ensuring everything is labelled correctly. After getting the tree looking resonable to navigate, I decided to figure out how to use my computers screen reader to see how the actual experience was. I fixed a few things and things mostly worked, but there was an issue that I thought would be an easy fix. It was not an easy fix. In order to ensure that the links in hidden sections are not tabable, they need to be hidden in a certain way, whereas I was just shoving them offscreen. You aren't able to transition an element's opacity and actually hide it at the end using normal means so I needed to put a custom animation on the sections that served the sole purpose of hiding the element after the transition played out. After fixing that using black magic, I had to fix a bunch of transition issues that occurred when the user had their preferences set to "reduced motion" because I wanted to support user preferences. For people who prefer reduced transparency and reduced data usage, that wasn't too hard, but for reduced motion that took soem time to ensure that everything ended up where it should in between screens. in the end I learned a lot about a11y which was fun.

    #### Part Five: Responsive Nightmare

    Making a responsive website normally isn't too hard, for standard projects. Unfortunately this was not a standard project and this was a nightmare. Okay, so it wasn't that bad but it was quite difficult and the final result was rushed and only accounts for width and not height. My personal screen is quite zoomed out and the aspect ratio and my browser choice lends to a reasonable amount of screen realestate. I normally design mobile first, but for this project I went backwards because I can't imagine many people would want to visit this website on their phones, although if they wanted to, it does work and the navigation snaps to the bottom of the screen for your hand to reach.

    #### Conclusion

    The logo was fun to make I don't normally do that. I had fun making this project and for the most part it worked out. I look forwards to doing more passion projects like this one some time in the future because they can be good for learning how to yolo a project and forse your creativity to figure out any bumps in the road.

2. ### [CSS Practice](https://people.rit.edu/~tgp5235/iste-240/e2)

    In this assignment, I made a webpage that recreated the image in the instructions. I used buttons for the cards because there wasn't enough context on what the cards did and hover transitions are usually placed on interactive elements such as buttons.

    Due to my using of buttons, I thought it would made sense to make them do something when you click them, so I added an alert if you click on them.

    I attempted to make the buttons transition in a better looking color space however that proved too much added complexity.

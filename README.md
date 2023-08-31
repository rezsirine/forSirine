
# Subclass Dance Party

_An exploration in polymorphism and inheritance._

## High Level Goals of this Sprint
* Master subclassing in JavaScript
* Use JavaScript, jQuery, and CSS to add unique effects to your application
* Be focused and deadline oriented around design choices

## What is polymorphism?

When constructing applications, it is often the case that you will need to construct objects that share common methods or traits. Dancers, for example, all display individual unique traits, however they also share the ability to dance, to stop dancing, and to line up. By creating dancers that are _subclasses_ of a `Dancer` class, you can exhibit individuality while allowing your dancers to _inherit_ useful methods from their _superclass_. This ability of the `Dancer` class to manifest in various _subclass_ forms is _polymorphism_.

## Important Files

* `dancefloor.html` a dancer-indiscriminate stage.
* `src` contains `dancer.js` and `blinkyDancer.js` with some code that you'll refactor and then extend with new types of dancers.
* `spec` contains a few tests--you'll be adding more.
* `SpecRunner.html` runs the tests.

## Understand

* How `dancefloor.html`, `src/init.js`, `src/dancer.js`, and `src/blinkyDancer.js` relate.
* Which CSS statements  in `styles.css`  make the dancers circular.
* How to make an kick-ass [dance party](http://giphy.com/gifdanceparty/).

## Bare Minimum Requirements

Complete all the bare minimum requirements before moving on to the advanced content. This sprint gives you a substantial amount of creative freedom. We recommend that you read through all the requirements and hold a short planning session with your pair to discuss what your final product will be.

* [ ] Read the  README. Then fork the repo github org (which you'll have recently been given access to on github) and complete the exercises described within so that all of the specs pass.

* [ ] Refactor the `Dancer` class and its subclass `BlinkyDancer` from functional inheritance to pseudoclassical.
  * Feel free to Refer to the lecture slides on Code Sharing Patterns

* [ ] Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).
  * Add a link in the top bar of `dancefloor.html` to create a dancer of each new type you create
  * Write tests for new types. Use `spec/blinkyDancerSpec.js` as a template for new test files, and make sure to include them in `SpecRunner.html`.

* Having trouble coming up ideas? Here are some example hierarchies:
    * [Dancer] > [PopDancer] > [RickAstleyDancer]
    * [Dancer] > [FightingDancer] > [ZangiefDancer]
    * [Dancer] > [BouncyDancer]
    * [Dancer] > [SuperHeroDancer] > [BatmanDancer]

* [ ] Make your dancers visually distinct and adorable with CSS and JS! Don't skimp on the CSS here. It is a core tool everyone can benefit from additional experience with.Getting CSS questions in interviews and knowledge requirements for your primarily JavaScript oriented jobs.
  * Changing colors!
  * Moving around the page!
  * Growing or shrinking in size!
  * Other shapes besides circles!
  * Rotation!

* [ ] Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in `src/init.js`) so you can loop through that array and tell each object to `lineUp`.  You'll need to add a `lineUp` method to each of your dancer types - they don't all have to do exactly the same thing.

* [ ] Use an image (`<img>` tag or CSS `background-image`) instead of plain-jane RGB to add some pizazz!

* [ ] Make dancers that interact with other dancers. For example, by iterating across the array `window.dancers` and using the Pythagorean Theorem to calculate your distance from each other dancer, you can have a dancer find its `n` closest neighbors and do something based on their positions.

* [ ] Make a dancer that reacts to the mouse (use jQuery to add a `mouseover` handler).
* [ ] Do any remaining work to make your dance party a presentable product. Take a screencast of it and post it on Slack.

### Tests

- [ ] Go back and add at least two additional unit tests. If possible, try to add tests that will require you improve your implementation in order to make them pass.

## Example:

![Project Demo Image](https://cloud.githubusercontent.com/assets/15180/5589562/52781e56-90d6-11e4-97df-1ecc35c9b63c.gif)

## Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer.

### Refactor with ES6 classes

Classes? In **JavaScript**? What the...

The next version of JavaScript, implemented from the EMCAScript 6 specification, is here! It is often referred to as ES6 or ES2015. ES6 brings [a lot of exciting new features](https://ponyfoo.com/articles/es6) to the JavaScript language. It's important to know that ES6 is just the *specification* of the language, or simply a list of rules. It's still up to various engines (V8 - Chrome/Node, SpiderMonkey - Firefox) to *implement* these rules. Engine maintainers are working hard to implement these new features as fast as they can, but it will take some time before every environment supports the entire ES6 spec.

One exciting feature is the inclusion of a `class` keyword! This is a big change for engineers who write object-oriented code because it makes JavaScript look and feel more like a traditional class based language even though it's really just syntactic sugar on top of the pseudoclassical instantiation pattern you are familiar with. ES6 makes subclassing much easier as well with the introduction of the `extends` keyword.

**Your goal is to refactor any classes you've written to use this new syntax!**

- [ ] Visit `chrome://help` in Chrome and ensure that you are using version 49 or above. Once you're up to date with the latest version, Chrome will accept and run many new ES6 features, including classes
- [ ] Visit [the ES6 compatibility table](http://kangax.github.io/compat-table/es6/) and look at the "Current browser" column if you're curious what other features you unlocked
- [ ] Optionally, practice the new syntax by completing [the ES6 version of beesbeesbees]

**HINT:** The way `init.js` dynamically selects which constructor function to use will require you to make your class available on the global `window` object. In order to do this, you will need to define your classes as *expressions* with the `var` keyword instead of *declarations*. [Read this](http://www.2ality.com/2015/02/es6-scoping.html) for more details on ES6 scoping.

### Other Challenges

Finish the refactor? You're a rockstar! Here are some more challenges for you. Feel free to experiment with other ES6 features while tackling these:

- [ ] Use at least 2 different CSS3 transitions to do cool special effects with your dancers
- [ ] Create a new dance floor with its own unique properties for the dancers to inherit. Polymorph all the things!
- [ ] Make your dancers break out in a moving conga line after having them line up
- [ ] Trig class was a waste of time, right? WRONG! Use polar coordinates to trace out some [sweet paths](http://en.wikipedia.org/wiki/Lissajous_curve) for your dancers to follow across the floor. Implement at least one of these paths
- [ ] Use HTML5 `<audio>` tags to add some hot beats for your dancers to move and groove to
- [ ] Allow users to control the dancers with the trackpad or keyboard
- [ ] Allow users of the the site create their own dancers on the fly by picking dancing behaviors from a list and uploading their own dancer image
- [ ] Implement a [particle system][particleSystem]

## Relevant Documentation:

* [jQuery](http://api.jquery.com/) is a library used extensively in this project to easily create and modify HTML DOM nodes in the web page.
* [jQuery CSS](http://api.jquery.com/css/)
* [jQuery effects](http://api.jquery.com/category/effects/)
* [CSS reference](https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference)
* [CSS tutorial](http://www.w3schools.com/css/default.asp)
* [Polymorphism on Wikipedia](https://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29)


[Dancer]: https://en.wikipedia.org/wiki/Interpretive_dance
[PopDancer]: https://en.wikipedia.org/wiki/Pop_dance
[RickAstleyDancer]: https://en.wikipedia.org/wiki/Rick_Astley
[FightingDancer]: https://en.wikipedia.org/wiki/Capoeira
[ZangiefDancer]: https://en.wikipedia.org/wiki/Zangief
[BouncyDancer]: https://en.wikipedia.org/wiki/Deflection_(physics)
[SuperHeroDancer]: https://en.wikipedia.org/wiki/Super_hero
[BatmanDancer]: https://en.wikipedia.org/wiki/Batman
[particleSystem]: https://en.wikipedia.org/wiki/Particle_system

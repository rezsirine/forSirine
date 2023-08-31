class MakeDancer {
  constructor(top, left, t) {
    this.timeBetweenSteps = t
    this.$node = $('<span class="dancer"></span>');
    this.step()
    this.setPosition(top, left)
  }

  step() {
    setTimeout(() => {
      this.step()
    }, this.timeBetweenSteps)
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    }
    this.$node.css(styleSettings)
  }
}
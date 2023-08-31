class MakeMezwedDancer extends MakeDancer {
    constructor(top, left, timeBetweenSteps) {
      super(top, left, timeBetweenSteps)
    }
  
    step() {
      super.step()
      this.$node.toggle()
      this.$node.addClass("mezwed")
    }
  }
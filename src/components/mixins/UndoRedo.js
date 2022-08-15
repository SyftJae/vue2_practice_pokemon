export default {
  data: () => ({
    history: [],
    position: 0
  }),
  methods: {
    addToHistory: function(obj) {
      let self = this

      let temp = [ ...self.history.slice(0, self.position) ]
      temp.push(obj)

      self.history = [...temp]
      self.position = self.history.length
    },

    undoHistory: function() {
      let self = this

      if (self.position === 0) {
        return null
      }

      self.position -= 1
      return self.history[self.position]
    },

    redoHistory: function() {
      let self = this

      if (self.position === self.history.length) {
        return null
      }

      self.position += 1
      return self.history[self.position - 1]
    }
  }
}
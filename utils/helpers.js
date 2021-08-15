export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeckKey (title) {
  return title.replace(/(\w+)(?:\s+|$)/g, function (_, word) {
    // uppercase first letter and add rest unchanged
    return word.charAt(0).toUpperCase() + word.substr(1);
  })
}
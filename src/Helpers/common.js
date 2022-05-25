const generateIdbyName = (text) => {
    const slug = text.split(" ").join("_")
    const date = new Date()

    return slug + date.getTime()

  };

module.exports = {
    generateIdbyName
}
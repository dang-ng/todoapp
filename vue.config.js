module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/todoapp/'  // This is whatever your path from the root is
        : '/'
}
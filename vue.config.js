module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Blog/'
      : '/',
  lintOnSave: false
}

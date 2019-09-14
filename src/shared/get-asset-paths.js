module.exports = function getAssetPaths () {
  /**
   * Set up asset paths
   * - assetPath: public assets in this repo
   * - speakerAssetPath: private assets for yet to be revealed speakers!
   */
  let env = process.env.NODE_ENV
  let isLocal = env === 'testing' || process.env.ARC_LOCAL || !env
  let assetPath = isLocal
    ? `http://localhost:${process.env.PORT || '3333'}/_static`
    : process.env.BEGIN_STATIC_ORIGIN
  // Speaker asssets will 404 when working locally without access to the private speaker repo
  // TODO maybe use dummy image(s) in this case?
  let speakerAssetPath = isLocal
    ? 'http://localhost:4444/_static/2019'
    : process.env.SPEAKER_ASSETS + '/2019'
  let paths = {
    assetPath,
    speakerAssetPath
  }
  return paths
}
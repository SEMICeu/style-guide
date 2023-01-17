;(function (globalScope) {
  function initSearch (lunr, data) {
    console.log('Initializating search...')
  }
  globalScope.initSearch = initSearch
})(typeof globalThis !== 'undefined' ? globalThis : window)

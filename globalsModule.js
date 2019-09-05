var HtmlReporter = require('nightwatch-html-reporter');

var reporter = new HtmlReporter({
    openBrowser: false,
    uniqueFilename: true,
    reportsDirectory: __dirname + '/reports'
});

module.exports = {

  reporter: reporter.fn,


  // reporter : function(results, cb) {
  //   // console.log('-- -- --');
  //   // console.log(results);
  //   cb();
  // }

};
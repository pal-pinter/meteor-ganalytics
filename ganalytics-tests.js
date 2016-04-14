// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ganalytics.js.
import { name as packageName } from "meteor/ganalytics";

// Write your tests here!
// Here is an example.
Tinytest.add('ganalytics - example', function (test) {
  test.equal(packageName, "ganalytics");
});

'use strict';

exports.announcementsGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "reward" : "aeiou",
  "image" : "aeiou",
  "visibility" : "aeiou",
  "author" : "aeiou",
  "created" : "2000-01-23T04:56:07.000+0000",
  "opponents" : [ "" ],
  "latitude" : 1.3579000000000001069366817318950779736042022705078125,
  "completed" : true,
  "longditude" : 1.3579000000000001069366817318950779736042022705078125,
  "tags" : [ "aeiou" ],
  "upated" : "2000-01-23T04:56:07.000+0000",
  "winner" : "",
  "vitnesses" : [ {
    "signed" : "aeiou",
    "user" : {
      "upated" : "2000-01-23T04:56:07.000+0000",
      "created" : "2000-01-23T04:56:07.000+0000",
      "name" : "aeiou",
      "email" : "aeiou",
      "picture" : "aeiou",
      "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
    }
  } ],
  "paid" : true,
  "announcement_id" : "aeiou",
  "location" : "aeiou",
  "headline" : "aeiou",
  "announcement" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.announcementsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Announcement)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "reward" : "aeiou",
  "image" : "aeiou",
  "visibility" : "aeiou",
  "author" : "aeiou",
  "created" : "2000-01-23T04:56:07.000+0000",
  "opponents" : [ "" ],
  "latitude" : 1.3579000000000001069366817318950779736042022705078125,
  "completed" : true,
  "longditude" : 1.3579000000000001069366817318950779736042022705078125,
  "tags" : [ "aeiou" ],
  "upated" : "2000-01-23T04:56:07.000+0000",
  "winner" : "",
  "vitnesses" : [ {
    "signed" : "aeiou",
    "user" : {
      "upated" : "2000-01-23T04:56:07.000+0000",
      "created" : "2000-01-23T04:56:07.000+0000",
      "name" : "aeiou",
      "email" : "aeiou",
      "picture" : "aeiou",
      "friends" : [ "046b6c7f-0b8a-43b9-b35d-6489e6daee91" ]
    }
  } ],
  "paid" : true,
  "announcement_id" : "aeiou",
  "location" : "aeiou",
  "headline" : "aeiou",
  "announcement" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


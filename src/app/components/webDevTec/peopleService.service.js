(function () {
  'use strict';

  angular
    .module('universalPhone')
    .service('peopleService', peopleService);

  /** @ngInject */
  function peopleService() {
    var data = [
      {
        "id": 1,
        "first_name": "Aaron",
        "last_name": "Crawford",
        "SkypeID": "acrawford0",
        "Phone": "31-(345)663-5575"
      },
      {
        "id": 2,
        "first_name": "Ruby",
        "last_name": "Fuller",
        "SkypeID": "rfuller1",
        "Phone": "95-(708)344-8218"
      },
      {
        "id": 3,
        "first_name": "Carol",
        "last_name": "Watkins",
        "SkypeID": "cwatkins2",
        "Phone": "226-(657)240-0479"
      },
      {
        "id": 4,
        "first_name": "Louise",
        "last_name": "Day",
        "SkypeID": "lday3",
        "Phone": "56-(442)586-3978"
      },
      {
        "id": 5,
        "first_name": "Jacqueline",
        "last_name": "Fuller",
        "SkypeID": "jfuller4",
        "Phone": "352-(956)732-1313"
      },
      {
        "id": 6,
        "first_name": "Helen",
        "last_name": "Stephens",
        "SkypeID": "hstephens5",
        "Phone": "256-(617)623-4941"
      },
      {
        "id": 7,
        "first_name": "Ryan",
        "last_name": "Simmons",
        "SkypeID": "rsimmons6",
        "Phone": "63-(526)751-1712"
      },
      {
        "id": 8,
        "first_name": "Susan",
        "last_name": "Bowman",
        "SkypeID": "sbowman7",
        "Phone": "56-(652)399-0706"
      },
      {
        "id": 9,
        "first_name": "Jean",
        "last_name": "Hayes",
        "SkypeID": "jhayes8",
        "Phone": "63-(655)763-1573"
      },
      {
        "id": 10,
        "first_name": "Juan",
        "last_name": "Stephens",
        "SkypeID": "jstephens9",
        "Phone": "590-(615)921-4915"
      },
      {
        "id": 11,
        "first_name": "Timothy",
        "last_name": "Wells",
        "SkypeID": "twellsa",
        "Phone": "62-(110)236-3484"
      },
      {
        "id": 12,
        "first_name": "Teresa",
        "last_name": "Bowman",
        "SkypeID": "tbowmanb",
        "Phone": "52-(278)721-0585"
      },
      {
        "id": 13,
        "first_name": "Tammy",
        "last_name": "Murphy",
        "SkypeID": "tmurphyc",
        "Phone": "374-(969)751-5133"
      },
      {
        "id": 14,
        "first_name": "Chris",
        "last_name": "Armstrong",
        "SkypeID": "carmstrongd",
        "Phone": "86-(129)992-8444"
      },
      {
        "id": 15,
        "first_name": "Clarence",
        "last_name": "Martin",
        "SkypeID": "cmartine",
        "Phone": "62-(131)323-0292"
      },
      {
        "id": 16,
        "first_name": "Barbara",
        "last_name": "Wilson",
        "SkypeID": "bwilsonf",
        "Phone": "57-(264)236-3481"
      },
      {
        "id": 17,
        "first_name": "Emily",
        "last_name": "Ortiz",
        "SkypeID": "eortizg",
        "Phone": "86-(395)655-0632"
      },
      {
        "id": 18,
        "first_name": "Michelle",
        "last_name": "Schmidt",
        "SkypeID": "mschmidth",
        "Phone": "81-(268)519-1821"
      },
      {
        "id": 19,
        "first_name": "Samuel",
        "last_name": "Taylor",
        "SkypeID": "staylori",
        "Phone": "420-(517)933-7924"
      },
      {
        "id": 20,
        "first_name": "Frank",
        "last_name": "Hart",
        "SkypeID": "fhartj",
        "Phone": "234-(686)639-5882"
      },
      {
        "id": 21,
        "first_name": "Jose",
        "last_name": "Sanchez",
        "SkypeID": "jsanchezk",
        "Phone": "81-(548)162-2141"
      },
      {
        "id": 22,
        "first_name": "Betty",
        "last_name": "Green",
        "SkypeID": "bgreenl",
        "Phone": "970-(592)474-9562"
      },
      {
        "id": 23,
        "first_name": "Dennis",
        "last_name": "Clark",
        "SkypeID": "dclarkm",
        "Phone": "54-(757)472-5720"
      }
    ];

    this.getPeople = getPeople;

    function getPeople() {
      return data;
    }
  }

})();

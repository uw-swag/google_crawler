/**
 * Created by angshumanghosh on 20/11/17.
 */


var gplay = require('google-play-scraper');

var MongoClient = require('mongodb').MongoClient;

gplay.app({appId:'com.facebook.katana'}).then(function (data){
    console.log(data);
    MongoClient.connect("mongodb://scspc593.cs.uwaterloo.ca:27017/google_play", function(err, db) {
        if(!err) {
            console.log("We are connected");
            var collection = db.collection("app_details");
            collection.insert(data, function(err, result){
                if (!err) console.log("inserted facebook");
                else console.log("failed");
            });
        }
        else {
            console.log(err)
        }
    });

});

// for (i=0; i<25; i++){
//     gplay.reviews({
//         appId: 'com.facebook.katana',
//         page: i,
//         sort: gplay.sort.NEWEST
//     }).then(function (data) {
//         for (i=0; i<data.length;i++) {
//             console.log(data[i].id);
//             stream.write(data[i].id.toString()+"\n");
//         }
//     });
//
// }


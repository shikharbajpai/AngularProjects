var express = require('express');
var router = express.Router();

var Video = require('../models/video.model');

//GET REQUEST For All Videos
router.get('/videos', (req, res) => {
    console.log('Get request for all videos');

    Video.find({}).exec(function (err, videos) {
        if (err) {
            console.log("Error retrieving videos")
        }
        else {
            res.json(videos);
        }
    })
});

//GET REQUEST For Single Video
router.get('/videos/:id', (req, res) => {
    console.log('Get request for a single video ');
    Video.findById(req.params.id).exec(function (err, video) {
        if (err) {
            console.log("Error retrieving single video")
        }
        else {
            res.json(video);
        }
    })
});

//POST REQUEST
router.post('/video', (req, res) => {
    console.log('Post a video');

    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function (err, insertedVideo) {
        if (err) {
            console.log("Error in saving video")
        }
        else {
            res.json(insertedVideo);
        }
    })

});

//PUT REQUEST
router.put('/video/:id', function (req, res) {
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
        {
            $set: {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description
            }
        },
        {
            new: true
        },
        function (err, updatedVideo) {
            if (err) {
                res.send("Error updating video");
            } else {
                res.json(updatedVideo);
            }
        }

    );
});

//DELETE REQUEST
router.delete('/video/:id', function (req, res) {
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
        if (err) {
            res.send("Error deleting video");
        } else {
            res.json(deletedVideo);
        }
    });
});


module.exports = router;
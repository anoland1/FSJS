// src/routes/index.js
const router = require('express').Router();
const mongoose = require('mongoose');

const FILES = [
  {id: 'a', title: 'cutecat1.jpg', price: '3.14'},
  {id: 'b', title: 'uglycat1.jpg', price: '1.59'},
  {id: 'c', title: 'total_recall_poster.jpg', price: '2.65'},
  {id: 'd', title: 'louisville_coffee.txt', price: '4.54'},
];

router.put('/file/:fileId', function(req, res, next) {
const File = mongoose.model('File');
const fileId = req.params.fileId;

File.findById(fileId, function(err, file) {
  if (err) {
    console.log(err);
    return res.status(500).json(err);
  }
  if (!file) {
    return res.status(404).json({message: "File not found"});
  }

  file.title = req.body.title;
  file.price = req.body.price;

  file.save(function(err, savedFile) {
    res.json(savedFile);
  })

})
});

router.use('/doc', function(req, res, next) {
  res.end(`Documentation http://expressjs.com/`);
});

router.get('/file', function(req, res, next) {
  mongoose.model('File').find({deleted: {$ne: true}}, function(err, files) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(files);
  });
});

router.delete('/file/:fileId', function(req, res, next) {
  const File = mongoose.model('File');
  const fileId = req.params.fileId;

  File.findById(fileId, function(err, file) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    if (!file) {
      return res.status(404).json({message: "File not found"});
    }

    file.deleted = true;

    file.save(function(err, doomedFile) {
      res.json(doomedFile);
    })

  })
});


router.post('/file', function(req, res, next) {
  const File = mongoose.model('File');
  const fileData = {
    title: req.body.title,
    price: req.body.price,
  };

  File.create(fileData, function(err, newFile) {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(newFile);
  });
});

router.put('/file/:fileId', function(req, res, next) {
  const {fileId} = req.params;
  const file = FILES.find(entry => entry.id === fileId);
  if (!file) {
    return res.status(404).end(`Could not find file '${fileId}'`);
  }

  file.title = req.body.title;
  file.price = req.body.price;
  res.json(file);
});

router.delete('/file/:fileId', function(req, res, next) {
  res.end(`Deleting file '${req.params.fileId}'`);
});

router.get('/file/:fileId', function(req, res, next) {
  const {fileId} = req.params;
  // same as 'const fileId = req.params.fileId'

  const file = FILES.find(entry => entry.id === fileId);
  if (!file) {
    return res.status(404).end(`Could not find file '${fileId}'`);
  }

  res.json(file);
});

module.exports = router;

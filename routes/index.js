var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/api/sinhviens',db.sinhviens);
router.get('/api/sinhviens/:id',db.sinhvien);
router.post('/api/sinhviens',db.createSinhVien);
router.put('/api/sinhviens/:id',db.editSinhvien);
router.delete('/api/sinhviens/:id',db.deleteSinhvien);

module.exports = router;

var promise = require('bluebird');
var options = {
    promiseLib: promise
}
var pgp = require('pg-promise')(options);
var connectString = 'postgres://postgres:buianhtu@localhost:5432/quanlysv';
var db = pgp(connectString);
function sinhviens(req,res,next){
    db.any("select * from sinhvien")
        .then(function(data){
            res.status(200)
            .json({
                status : 'success',
                data:data,
                message:'retrieved all students'
            });
        })
        .catch(function(err){
            return next(err);
        });
}
function sinhvien(req,res,next){
    db.any("select * from sinhvien where id='"+req.params.id+"'")
        .then(function(data){
            res.status(200)
            .json({
                status:'success',
                data:data,
                message:'retrieved a student'
            });
        })
        .catch(function(err){
            return next(err);
        });
}
function createSinhVien(req,res,next){
    db.none('insert into sinhvien(hoten,email) values(${hoten},${email})',req.body)
    .then(()=>{
        res.status(200)
        .json({
            status : 'success',
            message:'retrieved add a student'
        });
    })
    .catch((err)=>{
        console.log(err);
        return next(err);
    });
}
function editSinhvien(req,res,next){
    db.none("update sinhvien set hoten=${hoten},email=${email} where id = '"+req.params.id+"'",req.body)
    .then(()=>{
        res.status(200)
        .json({
            status:'success',
            message:'edit success student'
        });
    })
    .catch((err)=>{
        return next(err);
    })
}
function deleteSinhvien(req,res,next){
    db.none("delete from sinhvien where id = '"+req.params.id+"'")
    .then(()=>{
        res.status(200)
        .json({
            status:'success',
            message:'delete success student'
        });
    })
    .catch((err)=>{
        return next(err);
    })
}

module.exports = {
    sinhviens : sinhviens,
    sinhvien : sinhvien,
    editSinhvien: editSinhvien,
    deleteSinhvien: deleteSinhvien,
    createSinhVien: createSinhVien
};
var target = require('../../service'),
    repoHelper = require('../repository_helper'),
    mongoose = require('../../repositories/mongoose'),
    config = require('../../config'),
    errors = require('../../configs/errors'),
    dbUri = config.get('database').uri,
    clearDB  = require('mocha-mongoose')(dbUri),
    moment = require('moment'),
    chai = require("chai"),
    should = chai.should();


describe('Task Service Integration Specs', function(){
  beforeEach(function(done) {
    if (mongoose.connection.db) return done();

    mongoose.connect(dbURI, done);
  });

  describe('get', function(){
    it('should filter tasks by id', function(done){
      // arrange
      repoHelper.create(function(err, task1){
        if(err) return done(err);

        repoHelper.create(function(err, task2){
          if(err) return done(err);

          var payload = { id: task2._id.toString() };

          // act
          target.get(payload, null, function(err, data){
            if(err) return done(err);

            // assert
            should.exist(data);
            data.should.be.eql({
              id: payload.id,
              title: "this is a test task",
              completed: true,
              userId: "pjanuario",
              createdAt: moment(task2.createdAt).toISOString(),
              updatedAt: moment(task2.updatedAt).toISOString()
            });
            done();
          });

        });
      });
    });

    it('should return 404 when not found', function(done){
      // arrange
      var payload = { id: "566fdecba81e436c1256a674" };

      // act
      target.get(payload, null, function(err, data){
        // assert
        should.exist(err);
        err.should.be.eql(errors["404"].body);
        done();
      });
    });
  });
});

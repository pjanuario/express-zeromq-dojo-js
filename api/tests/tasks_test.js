var request = require('supertest'),
    Logger = require('../logger'),
    app = require('../index'),
    chai = require("chai"),
    sinon = require("sinon"),
    Q = require('q'),
    sinonAsPromised = require('sinon-as-promised'),
    sinonChai = require("sinon-chai"),
    client = require('../repositories/task_client');

sinonAsPromised(Q.promise);
chai.should();
chai.use(sinonChai);

describe('Tasks Endpoints', function(){
  var model;

  beforeEach(function(){
    // avoid logging in test environments
    Logger.clearPlugins();

    model = {
      id: 1,
      createdAt: '2015-12-14T14:51:06.157Z',
      updatedAt: '2015-12-14T14:52:06.157Z',
      title: 'As a good developer I should do TDD properly!',
      completed: true,
      userId: 'pjanuario'
    };
  });

  describe('GET /tasks/:id', function(){
    it('return a model resource', function(done){
      var stub = sinon.stub().resolves({ payload: model });
      sinon.stub(client, 'get').returns(stub());

      request(app)
        .get('/tasks/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(model)
        .end(function(){
          done();
        });

    });
  });

});

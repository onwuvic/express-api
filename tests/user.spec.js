import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import { User } from '../src/api/models/User';

chai.use(chaiHttp);

describe("User", () => {

  beforeEach((done) => {
    User.remove({}, (error) => {
      done();
    });
  });

  describe("user endpoints", () => {

    describe("GET /users", () => {
      it("should GET all users", (done) => {
        chai.request(app)
          .get('/users')
          .end((error, res) => {
            if (error) done(error);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(0);
            done();
          });
      });
    });

    describe("GET /user/:id", () => {
      const newUser = {username: 'johnny', password: 'password1234'};

      it("should GET only ONE user by id ", (done) => {
        const user = new User(newUser);
        user.save((error, user) => {
          chai.request(app)
          .get(`/user/${user._id}`)
          .end((error, res) => {
            if (error) done(error);

            // console.log(res);
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.have.property('username').to.equal(user.username);
            expect(res.body).to.have.property('_id').eql(user.id);
            done();
          });
        });
      });
    });

    describe("POST /user", () => {
      it("should not CREATE a user without username", (done) => {
        const newUser = {password: 'password1234'};
        chai.request(app)
        .post('/user')
        .send(newUser)
        .end((error, res) => {
          if(error) done(error);

          expect(res).to.have.status(500);
          expect(res.error.text).to.equal('There was a problem creating the user to the database.');
          done();
        })
      });

      it("should CREATE a new user", (done) => {
        const newUser = {username: 'johnny', password: 'password1234'};
        chai.request(app)
          .post('/user')
          .send(newUser)
          .end((error, res) => {
            if (error) done(error);

            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.body).to.have.property('username').eql('johnny');
            expect(res.body).to.have.property('password').eql('password1234');
            done();
          });
      });
    });

    describe("PUT /user/:id", () => {
      const newUser = {username: 'johnny', password: 'password1234'};
      const updatedUser = {username: 'johnny', password: 'password12'}
      it("should UPDATE a user given the id", (done) => {
        const user = new User(newUser);
        user.save((error, user) => {
          chai.request(app)
          .put(`/user/${user._id}`)
          .send(updatedUser)
          .end((error, res) => {
            if(error) done(error);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('password').to.equal('password12');
            done();
          });
        });
      });
    });

    describe("DELETE /user/:id", () => {
      const newUser = {username: 'johnny', password: 'password1234'};
      it("should DELETE a user given the id", (done) => {
        const user = new User(newUser);
        user.save((error, user) => {
          chai.request(app)
          .delete(`/user/${user._id}`)
          .end((error, res) => {
            if(error) done(error);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res).to.have.property('ok').eql(true);
            done();
          })
        })
      })
    })

  });

});

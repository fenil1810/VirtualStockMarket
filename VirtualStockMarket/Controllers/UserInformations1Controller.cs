using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using VirtualStockMarket;

namespace VirtualStockMarket.Controllers
{
    [RoutePrefix("api/Info")]
    public class UserInformations1Controller : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/UserInformations1
        public IQueryable<UserInformation> GetUserInformations()
        {
            return db.UserInformations;
        }

        // GET: api/UserInformations1/5
        [ResponseType(typeof(UserInformation))]
        public IHttpActionResult GetUserInformation(int id)
        {
            UserInformation userInformation = db.UserInformations.Find(id);
            if (userInformation == null)
            {
                return NotFound();
            }

            return Ok(userInformation);
        }

        // PUT: api/UserInformations1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserInformation(int id, UserInformation userInformation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userInformation.UserId)
            {
                return BadRequest();
            }

            db.Entry(userInformation).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInformationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserInformations1
        [Route("CreateUser")]
        public IHttpActionResult PostUserInformation(UserInformation userInformation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            /*UserInformation userInformation = new UserInformation();
            userInformation.FirstName = regi.FirstName;
            userInformation.LastName = regi.LastName;
            userInformation.HouseNo = regi.HouseNo;
            userInformation.Society = regi.Society;
            userInformation.Landmark = regi.Landmark;
            userInformation.Area = regi.Area;
            userInformation.City = regi.City;
            userInformation.State = regi.State;
            userInformation.Zipcode = regi.Zipcode;
            userInformation.Mobile = regi.Mobile;
            userInformation.Email = regi.Email;
            userInformation.Gender = regi.Gender;

            UserLogin userLogin = new UserLogin();
            userLogin.UserName = regi.UserName;
            userLogin.Password = regi.Password;
            if (ModelState.IsValid)
            {
                db.UserInformations.Add(userInformation);
                db.SaveChanges();
                db.UserLogins.Add(userLogin);
                db.SaveChanges();
            }*/
            db.UserInformations.Add(userInformation);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userInformation.UserId }, userInformation);
        }

        // DELETE: api/UserInformations1/5
        [ResponseType(typeof(UserInformation))]
        public IHttpActionResult DeleteUserInformation(int id)
        {
            UserInformation userInformation = db.UserInformations.Find(id);
            if (userInformation == null)
            {
                return NotFound();
            }

            db.UserInformations.Remove(userInformation);
            db.SaveChanges();

            return Ok(userInformation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserInformationExists(int id)
        {
            return db.UserInformations.Count(e => e.UserId == id) > 0;
        }
    }
}
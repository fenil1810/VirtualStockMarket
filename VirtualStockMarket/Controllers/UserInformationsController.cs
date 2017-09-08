using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using VirtualStockMarket;

namespace VirtualStockMarket.Controllers
{
    public class UserInformationsController : Controller
    {
        private Model1 db = new Model1();

        // GET: UserInformations
        public ActionResult Index()
        {
            return View(db.UserInformations.ToList());
        }

        // GET: UserInformations/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UserInformation userInformation = db.UserInformations.Find(id);
            if (userInformation == null)
            {
                return HttpNotFound();
            }
            return View(userInformation);
        }

        // GET: UserInformations/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: UserInformations/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Register regi)
        {
            UserInformation userInformation = new UserInformation();
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
                return RedirectToAction("Index");
            }
            
            return View(userInformation);
        }

        // GET: UserInformations/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UserInformation userInformation = db.UserInformations.Find(id);
            if (userInformation == null)
            {
                return HttpNotFound();
            }
            return View(userInformation);
        }

        // POST: UserInformations/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "UserId,FirstName,LastName,HouseNo,Society,Landmark,Area,City,State,Zipcode,Mobile,Email,Gender,Category")] UserInformation userInformation)
        {
            if (ModelState.IsValid)
            {
                db.Entry(userInformation).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(userInformation);
        }

        // GET: UserInformations/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UserInformation userInformation = db.UserInformations.Find(id);
            if (userInformation == null)
            {
                return HttpNotFound();
            }
            return View(userInformation);
        }

        // POST: UserInformations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            UserInformation userInformation = db.UserInformations.Find(id);
            db.UserInformations.Remove(userInformation);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

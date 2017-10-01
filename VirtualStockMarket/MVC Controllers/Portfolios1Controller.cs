using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using VirtualStockMarket;

namespace VirtualStockMarket.MVC_Controllers
{
    public class Portfolios1Controller : Controller
    {
        private Model1 db = new Model1();

        // GET: Portfolios1
        public ActionResult Index()
        {
            var portfolios = db.Portfolios.Include(p => p.UserInformation);
            return View(portfolios.ToList());
        }

        // GET: Portfolios1/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Portfolio portfolio = db.Portfolios.Find(id);
            if (portfolio == null)
            {
                return HttpNotFound();
            }
            return View(portfolio);
        }

        // GET: Portfolios1/Create
        public ActionResult Create()
        {
            ViewBag.UserId = new SelectList(db.UserInformations, "UserId", "FirstName");
            return View();
        }

        // POST: Portfolios1/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "PortfolioId,UserId,StockName,ShareQuantity,TotalProfit,BidPrice")] Portfolio portfolio)
        {
            if (ModelState.IsValid)
            {
                db.Portfolios.Add(portfolio);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.UserId = new SelectList(db.UserInformations, "UserId", "FirstName", portfolio.UserId);
            return View(portfolio);
        }

        // GET: Portfolios1/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Portfolio portfolio = db.Portfolios.Find(id);
            if (portfolio == null)
            {
                return HttpNotFound();
            }
            ViewBag.UserId = new SelectList(db.UserInformations, "UserId", "FirstName", portfolio.UserId);
            return View(portfolio);
        }

        // POST: Portfolios1/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PortfolioId,UserId,StockName,ShareQuantity,TotalProfit,BidPrice")] Portfolio portfolio)
        {
            if (ModelState.IsValid)
            {
                db.Entry(portfolio).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.UserId = new SelectList(db.UserInformations, "UserId", "FirstName", portfolio.UserId);
            return View(portfolio);
        }

        // GET: Portfolios1/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Portfolio portfolio = db.Portfolios.Find(id);
            if (portfolio == null)
            {
                return HttpNotFound();
            }
            return View(portfolio);
        }

        // POST: Portfolios1/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Portfolio portfolio = db.Portfolios.Find(id);
            db.Portfolios.Remove(portfolio);
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

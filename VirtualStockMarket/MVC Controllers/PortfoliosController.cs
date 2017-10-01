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
    public class PortfoliosController : Controller
    {
        private Model1 db = new Model1();
        
        // GET: Portfolios/Details/5
        public ActionResult Details(int? id)
        {
            try
            {
                if (id == null)
                {
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                }
                return View(db.Portfolios.Where(x=>x.UserId==id).ToList());
            }
            catch
            {
                return HttpNotFound();
                
            }
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
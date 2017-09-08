using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using VirtualStockMarket;

namespace VirtualStockMarket.Controllers
{
    public class UserLoginsController : Controller
    {
        private Model1 db = new Model1();
        public ActionResult Login()
        {
            return View();
        }
        [System.Web.Mvc.HttpPost]
        public ActionResult Login(UserLogin login)
        {
            if (!ModelState.IsValid)
            {
                return View("UserInformations/Index");
            }
            else if (db.UserLogins.Where(x => x.UserName == login.UserName).ToList().Count() == 0)
            {
                return View("UserInformations/Index");
            }
            else if (db.UserLogins.Where(x => x.UserName == login.UserName && x.Password == login.Password).ToList().Count() == 0)
            {
                return View("UserInformations/Index");
            }
            else
            {
                return View("UserInformations/Create");
            }

        }
    }
}

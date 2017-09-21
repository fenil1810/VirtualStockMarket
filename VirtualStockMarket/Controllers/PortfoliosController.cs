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
    public class PortfoliosController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/Portfolios
        [Route("Portfolio")]
        public IQueryable<Portfolio> GetPortfolios()
        {
            return db.Portfolios;
        }

        // GET: api/Portfolios/5
        [ResponseType(typeof(Portfolio))]
        public IHttpActionResult GetPortfolio(int id)
        {
            Portfolio portfolio = db.Portfolios.Find(id);
            if (portfolio == null)
            {
                return NotFound();
            }

            return Ok(portfolio);
        }

       
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PortfolioExists(int id)
        {
            return db.Portfolios.Count(e => e.PortfolioId == id) > 0;
        }
    }
}
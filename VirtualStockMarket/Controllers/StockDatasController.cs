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
    public class StockDatasController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/StockDatas
        [Route("StockData")]
        public IQueryable<StockData> GetStockDatas()
        {
            return db.StockDatas;
        }

        // GET: api/StockDatas/5
        [ResponseType(typeof(StockData))]
        public IHttpActionResult GetStockData(string id)
        {
            StockData stockData = db.StockDatas.Find(id);
            if (stockData == null)
            {
                return NotFound();
            }

            return Ok(stockData);
        }
        

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StockDataExists(string id)
        {
            return db.StockDatas.Count(e => e.StockName == id) > 0;
        }
    }
}
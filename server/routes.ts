import { Router } from "express";
import { IStorage } from "./storage";

export function createRouter(storage: IStorage): Router {
  const router = Router();

  // Get portfolio data
  router.get("/api/portfolio", async (req, res) => {
    try {
      const portfolioData = await storage.getPortfolioData();
      res.json(portfolioData);
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });

  return router;
}
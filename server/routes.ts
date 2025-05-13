import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "Please provide all required fields: name, email, subject, and message" 
        });
      }

      // Email validation - simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Please provide a valid email address" });
      }

      // In a real application, you would store the message and/or send an email
      // For now, we'll just simulate success
      res.status(200).json({ 
        message: "Message received successfully", 
        data: { name, email, subject }
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

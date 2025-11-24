import { nanoid } from "nanoid";
import { URL } from "../models/url.js";

export async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = nanoid(8); // used ro create short url links

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy : req.user._id, // coming from auth middleware 
  });

  console.log(req.user._id);

  return res.json({
     id: shortID,
     longURL : body.url,
     createdBy : req.user._id,
    });
}


export async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}


//==========GETTING ORGINAL LINK===============

export async function handleGetSearch(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectURL);
}

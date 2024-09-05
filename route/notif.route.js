const { Router } = require("express");
const middleware = require("../middleware/auth.middleware");
const route = Router();

/**
 * @openapi
 *  /api/send-notification:
 *   post:
 *     tags: [Notification]
 *     responses:
 *       200:
 *         description: success
 */
route.post("/send-notification", middleware.authJwtMiddleware, (req, res) => {
  res.json({
    code: 0,
    message: "success",
    data: null,
  });
});

module.exports = route;

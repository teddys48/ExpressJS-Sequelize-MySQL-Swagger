const { Router } = require("express");
const controller = require("../controller/user.controller");
const route = Router();

/**
 * @openapi
 *  /api/login:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: admin
 *               password:
 *                 type: string
 *                 default: admin123
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: success
 */
route.post("/login", controller.login);

module.exports = route;

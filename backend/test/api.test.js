// Tests sans base de données : on pointe vers un port fermé pour vérifier
// la validation, l'authentification et le healthcheck en mode « base absente ».
process.env.JWT_SECRET = "secret-de-test";
process.env.DB_HOST = "127.0.0.1";
process.env.DB_PORT = "1";

const { test, before, after } = require("node:test");
const assert = require("node:assert/strict");
const jwt = require("jsonwebtoken");
const app = require("../app");
const db = require("../db");

let server;
let base;

before(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once("listening", resolve));
    base = `http://127.0.0.1:${server.address().port}/api`;
});

after(() => {
    server.close();
    db.end();
});

const post = (path, body, headers = {}) => fetch(base + path, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
});

const token = jwt.sign({ id: 1, role: "user" }, "secret-de-test");
const auth = { Authorization: `Bearer ${token}` };

test("inscription refusée si un champ manque", async () => {
    const res = await post("/auth/register", { email: "a@b.fr" });
    assert.equal(res.status, 400);
});

test("inscription refusée si l'email est invalide", async () => {
    const res = await post("/auth/register", { nom: "A", email: "pas-un-email", password: "motdepasse" });
    assert.equal(res.status, 400);
});

test("inscription refusée si le mot de passe est trop court", async () => {
    const res = await post("/auth/register", { nom: "A", email: "a@b.fr", password: "court" });
    assert.equal(res.status, 400);
});

test("connexion refusée si un champ manque", async () => {
    const res = await post("/auth/login", { email: "a@b.fr" });
    assert.equal(res.status, 400);
});

test("liste des membres interdite sans jeton", async () => {
    const res = await fetch(base + "/users");
    assert.equal(res.status, 401);
});

test("jeton signé avec un autre secret refusé", async () => {
    const faux = jwt.sign({ id: 1 }, "autre-secret");
    const res = await fetch(base + "/messages/2", { headers: { Authorization: `Bearer ${faux}` } });
    assert.equal(res.status, 401);
});

test("message vide refusé", async () => {
    const res = await post("/messages", { receiverId: 2, content: "   " }, auth);
    assert.equal(res.status, 400);
});

test("message trop long refusé", async () => {
    const res = await post("/messages", { receiverId: 2, content: "x".repeat(1001) }, auth);
    assert.equal(res.status, 400);
});

test("healthcheck en erreur quand la base est absente", async () => {
    const res = await fetch(base + "/health");
    assert.equal(res.status, 503);
});

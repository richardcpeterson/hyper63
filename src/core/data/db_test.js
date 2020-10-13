const test = require("tape");
const db = require("./db");
const { Resolved } = require("crocks/Async");

const mockDb = {
  createDatabase(name) {
    return Resolved({ ok: true });
  },
  removeDatabase(name) {
    return Resolved({ ok: true });
  },
};

const fork = (m) => (t) => {
  t.plan(1);
  return m.fork(
    () => t.ok(false),
    () => t.ok(true)
  );
};

test("create database", fork(db.create("foo").runWith(mockDb)));
test("remove database", fork(db.remove("foo").runWith(mockDb)));
//test("query database");
//test("index database");
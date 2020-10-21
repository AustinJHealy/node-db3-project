const db = require("../data/config");

function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes").where({ id }).first();
}
function findSteps(id) {
  return db("steps").where("steps.scheme_id", id).orderBy("steps.step_number");
}
function update(changes, id) {
  return db("schemes").where({ id }).update(changes);
}
function remove(id) {
  return db("schemes").where({ id }).del();
}

module.exports = {
  find,
  findById,
  findSteps,
  update,
  remove,
};


const mongoose = require("mongoose");

class mongooseFunctions {

  static addRecord = async (tableName, data) => {
  const Table = mongoose.model(`${tableName}`);
  const info = new Table(data);
  return await info.save();
};

static getRecord = async (tableName, condition) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.find(condition);
};

static getLimitedAndSortedRecord = async (tableName, condition, sort, limit) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.find(condition).sort(sort).limit(limit);
};

static getRecordAndSort = async (tableName, condition, sort) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.find(condition).sort(sort);
};

static getRecordAggregate = async (tableName, aggregateArray) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.aggregate(aggregateArray);
};

static getRecordWithProject = async (tableName, condition, project) => {
  const Table = mongoose.model(`${tableName}`);
  const aggregate = [
    {
      $match: condition,
    },
    {
      $project: project,
    },
  ];
  return await Table.aggregate(aggregate);
};

static deleteRecord = async (tableName, condition) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.deleteMany(condition);
};

static findAndModifyRecord = async (tableName, condition, update) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.findOneAndUpdate(condition, update, {
    upsert: true,
    returnNewDocument: true,
    new: true,
  });
};

static findAndUpdateManyRecord = async (tableName, condition, update) => {
  const Table = mongoose.model(`${tableName}`);
  return Table.updateMany(condition, update, {
    returnNewDocument: true,
    new: true,
  });
};

static findOneAndReplaceRecord = async (tableName, condition, update) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.findOneAndReplace(condition, update, {
    upsert: true,
    returnNewDocument: true,
    new: true,
  });
};
static deleteRecord = async (tableName, condition) => {
  const Table = mongoose.model(`${tableName}`);
  return await Table.deleteMany(condition);
};

}

module.exports = mongooseFunctions;

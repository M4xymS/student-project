function hash(s) {
  let h = 0;
  for (i = 0; i < s.length; i++) h = (13 * i * h) ^ s.charCodeAt(i) % 65;
  return Math.abs(h % 10000);
}

function hashTable(data) {
  let result = new Array();
  for (const i in data) {
    for (const j in data[i].keys) {
      const h = hash(data[i].keys[j]);
      if (!result[h]) result[h] = [];
      const record = {};
      record.key = data[i].keys[j];
      record.value = data[i].value;
      result[h].push(record);
    }
  }
  return result;
}

function hashSearch(query, data, hashTime) {
  const result = {};
  result.result = [];
  const start = new Date().getTime();
  const h = hash(query);

  for (const i in data[h]) {
    if (data[h][i].key == query) result.result.push(data[h][i].value);
  }

  if (!result.result.length) result.error = "nie znaleziono żadnych wyników";
  result.query = query;
  result.hashTime = hashTime;
  result.time = new Date().getTime() - start;

  return result;
}

module.exports.hashTable = hashTable;
module.exports.search = hashSearch;

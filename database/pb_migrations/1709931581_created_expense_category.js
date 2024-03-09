/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5nwhj8lbkomrs8z",
    "created": "2024-03-08 20:59:41.154Z",
    "updated": "2024-03-08 20:59:41.154Z",
    "name": "expense_category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "trpwc43s",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "r7cjthlo",
        "name": "color",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^#(?:[0-9a-fA-F]{3}){1,2}$"
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5nwhj8lbkomrs8z");

  return dao.deleteCollection(collection);
})

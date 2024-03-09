/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x479lr1tcan5393",
    "created": "2024-03-08 20:55:14.374Z",
    "updated": "2024-03-08 20:55:14.374Z",
    "name": "bank_account",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dgkdpdew",
        "name": "name",
        "type": "text",
        "required": false,
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
        "id": "dfbwcg6e",
        "name": "account_number",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("x479lr1tcan5393");

  return dao.deleteCollection(collection);
})

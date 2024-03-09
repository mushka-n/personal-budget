/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x479lr1tcan5393")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lladghka",
    "name": "number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x479lr1tcan5393")

  // remove
  collection.schema.removeField("lladghka")

  return dao.saveCollection(collection)
})

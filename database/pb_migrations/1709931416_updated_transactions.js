/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlo3j09hyogw3ac")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ngwdab2i",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "x479lr1tcan5393",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlo3j09hyogw3ac")

  // remove
  collection.schema.removeField("ngwdab2i")

  return dao.saveCollection(collection)
})

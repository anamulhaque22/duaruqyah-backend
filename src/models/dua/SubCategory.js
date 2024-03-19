const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "SubCategory",
  tableName: "sub_category",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    cat_id: {
      type: "int",
    },
    subcat_id: {
      type: "int",
    },
    subcat_name_bn: {
      type: "varchar",
    },
    subcat_name_en: {
      type: "varchar",
    },
    no_of_dua: {
      type: "int",
    },
  },
});
// "id": 1,
// "cat_id": 1,
// "subcat_id": 1,
// "subcat_name": "The servant is dependent on his Lord",
// "no_of_dua": 3

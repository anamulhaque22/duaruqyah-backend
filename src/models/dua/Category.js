const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Category",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    cat_id: {
      type: "int",
    },
    cat_name_bn: {
      type: "varchar",
    },
    cat_name_en: {
      type: "varchar",
    },
    no_of_subcat: {
      type: "int",
    },
    no_of_dua: {
      type: "int",
    },
    cat_icon: {
      type: "varchar",
    },
  },
});

// "id": 1,
// "cat_id": 1,
// "cat_name": "Dua's Importance",
// "no_of_subcat": 7,
// "no_of_dua": 21,
// "cat_icon": "duar_gurutto"

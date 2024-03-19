const { EntitySchema } = require("typeorm");
module.exports = new EntitySchema(
  {
    name: "Dua",
    tableName: "dua",
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
      dua_id: {
        type: "int",
      },
      dua_name_bn: {
        type: "varchar",
      },
      dua_name_en: {
        type: "varchar",
      },
      top_bn: {
        type: "varchar",
      },
      top_en: {
        type: "varchar",
      },
      dua_arabic: {
        type: "varchar",
      },
      dua_indopak: {
        type: "varchar",
      },
      clean_arabic: {
        type: "varchar",
      },
      transliteration_bn: {
        type: "varchar",
      },
      transliteration_en: {
        type: "varchar",
      },
      translation_bn: {
        type: "varchar",
      },
      translation_en: {
        type: "varchar",
      },
      bottom_bn: {
        type: "varchar",
      },
      bottom_en: {
        type: "varchar",
      },
      refference_bn: {
        type: "varchar",
      },
      refference_en: {
        type: "varchar",
      },
      audio: {
        type: "varchar",
      },
    },
  }
  //   id: number

  //   cat_id: number

  //   subcat_id: number

  //   dua_id: number

  //   dua_name_bn: string

  //   dua_name_en: string

  //   top_bn: string

  //   top_en: string

  //   dua_arabic: string

  //   dua_indopak: string

  //   clean_arabic: string

  //   transliteration_bn: string

  //   transliteration_en: string

  //   translation_bn: string

  //   translation_en: string

  //   bottom_bn: string

  //   bottom_en: string

  //   refference_bn: string

  //   refference_en: string

  //   audio: string
);

// "id": 1,
// "cat_id": 1,
// "subcat_id": 1,
// "dua_id": 1,
// "dua_name": "বান্দা তার রবের মুখাপেক্ষী #১",
// "top": "সকল মানুষ নিজেদের দ্বীন-দুনিয়ার বিভিন্ন বিষয়ে নিজেদের কল্যাণ-সাধন ও অনিষ্ট প্রতিরোধের ক্ষেত্রে আল্লাহ্‌ তা'আলার মুখাপেক্ষী। আল্লাহ্‌ তা'আলা বলেন -\n\n“হে মানুষ, তোমরা আল্লাহ্‌র প্রতি মুখাপেক্ষী আর আল্লাহ্‌ অমুখাপেক্ষী ও প্রশংসিত।”",
// "dua_arabic": null,
// "dua_indopak": null,
// "transliteration": null,
// "translation": null,
// "bottom": null,
// "refference": "সূরা আল-ফাতিরঃ ৩৫:১৫",
// "audio": null

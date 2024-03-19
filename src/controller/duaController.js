const dataSource = require("../db/db");

const getAllDuaCateogry = async (req, res) => {
  console.log("cat");
  const cateogryRepo = dataSource.getRepository("Category");
  const { lang } = req.params;

  let languageSpecificFields;
  let propertyMapping;

  if (lang === "en") {
    languageSpecificFields = [
      "id",
      "cat_id",
      "cat_name_en",
      "no_of_subcat",
      "no_of_dua",
      "cat_icon",
    ];
    propertyMapping = {
      cat_name_en: "cat_name",
    };
  } else if (lang === "bn") {
    languageSpecificFields = [
      "id",
      "cat_id",
      "cat_name_bn",
      "no_of_subcat",
      "no_of_dua",
      "cat_icon",
    ];
    propertyMapping = {
      cat_name_bn: "cat_name",
    };
  } else {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid language" });
  }
  try {
    const category = await cateogryRepo.find({
      select: languageSpecificFields,
    });
    const transformedCats = category.map((cat) => {
      const transformedCat = {};
      for (const property in cat) {
        transformedCat[propertyMapping[property] || property] = cat[property];
      }
      return transformedCat;
    });

    res.json({ status: "success", data: transformedCats });
  } catch (error) {
    res.status(500).json({ status: "error", data: error.message });
  }
};

const getAllSubCategory = async (req, res) => {
  const subCategoryRepo = dataSource.getRepository("SubCategory");
  const { lang, cat_id } = req.params;

  let languageSpecificFields;
  let propertyMapping;

  if (lang === "en") {
    languageSpecificFields = [
      "id",
      "cat_id",
      "subcat_id",
      "subcat_name_en",
      "no_of_dua",
    ];
    propertyMapping = {
      subcat_name_en: "subcat_name",
    };
  } else if (lang === "bn") {
    languageSpecificFields = [
      "id",
      "cat_id",
      "subcat_id",
      "subcat_name_bn",
      "no_of_dua",
    ];
    propertyMapping = {
      subcat_name_bn: "subcat_name",
    };
  } else {
    return res
      .status(400)
      .json({ status: "error", message: "Invalid language" });
  }

  try {
    const subCategories = await subCategoryRepo.find({
      select: languageSpecificFields,
      where: { cat_id },
    });
    const transformedSubCats = subCategories.map((subcat) => {
      const transformedSubCat = {};
      for (const property in subcat) {
        transformedSubCat[propertyMapping[property] || property] =
          subcat[property];
      }
      return transformedSubCat;
    });
    res.status(200).json({ status: "success", data: transformedSubCats });
  } catch (error) {
    res.status(500).json({ status: "error", data: error.message });
  }
};

const getAllDua = async (req, res) => {
  const duaRepo = dataSource.getRepository("Dua");
  const { cat_id, lang } = req.params;

  if (!cat_id || !lang) {
    return res.status(400).json({ status: "error", message: "No data found" });
  }

  let languageSpecificFields;
  let propertyMapping;

  if (lang === "en") {
    languageSpecificFields = [
      "id",
      "cat_id",
      "subcat_id",
      "dua_id",
      "dua_name_en",
      "top_en",
      "dua_arabic",
      "dua_indopak",
      "transliteration_en",
      "translation_en",
      "bottom_en",
      "refference_en",
      "audio",
    ];
    propertyMapping = {
      top_en: "top",
      dua_name_en: "dua_name",
      transliteration_en: "transliteration",
      refference_en: "refference",
      translation_en: "translation",
      bottom_en: "bottom",
      // Add other mappings as needed
    };
  } else if (lang === "bn") {
    languageSpecificFields = [
      "id",
      "cat_id",
      "subcat_id",
      "dua_id",
      "dua_name_bn",
      "top_bn",
      "dua_arabic",
      "dua_indopak",
      "transliteration_bn",
      "translation_bn",
      "bottom_bn",
      "refference_bn",
      "audio",
    ];
    propertyMapping = {
      transliteration_bn: "transliteration",
      refference_bn: "refference",
      dua_name_bn: "dua_name",
      top_bn: "top",
      translation_bn: "translation",
      bottom_bn: "bottom",
    };
  } else {
    return res
      .status(404)
      .json({ status: "error", message: "Invalid language" });
  }

  try {
    const duas = await duaRepo.find({
      where: { cat_id },
      select: languageSpecificFields,
    });

    // Map the properties dynamically
    const transformedDuas = duas.map((dua) => {
      const transformedDua = {};
      for (const property in dua) {
        transformedDua[propertyMapping[property] || property] = dua[property];
      }
      return transformedDua;
    });

    res.status(200).json({ status: "success", data: transformedDuas });
  } catch (error) {
    res.status(500).json({ status: "error", data: error });
  }
};

module.exports = {
  getAllDuaCateogry,
  getAllSubCategory,
  getAllDua,
};

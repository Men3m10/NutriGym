const regionsAndCities = [
  {
    region: "عمان",
    cities: [
      { id: 1, name: "عمان" },
      { id: 2, name: "الصويفية" },
      { id: 3, name: "جبل الحسين" },
      { id: 4, name: "العبدلي" },
      { id: 5, name: "الدوار الأول" },
      { id: 6, name: "الدوار الثاني" },
      { id: 7, name: "الدوار الثالث" },
      { id: 8, name: "الدوار الرابع" },
      { id: 9, name: "الدوار الخامس" },
      { id: 10, name: "الدوار السادس" },
      { id: 11, name: "الدوار السابع" },
      { id: 12, name: "الدوار الثامن" },
      { id: 13, name: "الدوار التاسع" },
      { id: 14, name: "الدوار العاشر" },
      { id: 15, name: "الدوار الحادي عشر" },
      { id: 16, name: "الجاردنز" },
      { id: 17, name: "الشميساني" },
      { id: 18, name: "عبدون" },
      { id: 19, name: "الياسمين" },
      { id: 20, name: "تلاع العلي" },
      { id: 21, name: "خلدا" },
      { id: 22, name: "الجويدة" },
      { id: 23, name: "شفابدران" },
      { id: 24, name: "النصر" },
      { id: 25, name: "الأردن الجديدة" },
      { id: 26, name: "مرج الحمام" },
      { id: 27, name: "القويسمة" },
      { id: 28, name: "ناعور" },
      { id: 29, name: "المدينة الرياضية" },
      { id: 30, name: "أبو نصير" },
      { id: 31, name: "بيادر وادي السير" },
      { id: 32, name: "بيت راس" },
      { id: 33, name: "ماركا" },
      { id: 34, name: "البيادر" },
      { id: 35, name: "التاج" },
      { id: 36, name: "ضاحية الأمير حسن" },
      { id: 37, name: "ضاحية الرشيد" },
      { id: 38, name: "ضاحية الياسمين" },
      { id: 39, name: "ضاحية المرج" },
      { id: 40, name: "ضاحية الحاج حسن" },
      { id: 41, name: "ضاحية الأمير علي" },
      { id: 42, name: "ضاحية النزهة" },
      { id: 43, name: "ضاحية الأرسال" },
    ],
  },
  {
    region: "الزرقاء",
    cities: [
      { id: 1, name: "الزرقاء" },
      { id: 2, name: "الخالدية" },
      { id: 3, name: "المدينة الصناعية" },
      { id: 4, name: "سوق الزرقاء" },
      { id: 5, name: "الرصيفة" },
      { id: 6, name: "الزرقاء الجديدة" },
      { id: 7, name: "حي نزال" },
      { id: 8, name: "حي الثنية" },
      { id: 9, name: "المزار الشمالي" },
      { id: 10, name: "المزار الجنوبي" },
      { id: 11, name: "الغويرية" },
      { id: 12, name: "الرزاز" },
      { id: 13, name: "بيرين" },
      { id: 14, name: "أبو علندا" },
      { id: 15, name: "عوجان" },
      { id: 16, name: "حي الجامعة" },
      { id: 17, name: "حي معصوم" },
      { id: 18, name: "السلالم" },
      { id: 19, name: "النزهة" },
      { id: 20, name: "المصانع" },
    ],
  },
  {
    region: "إربد",
    cities: [
      { id: 1, name: "اربد" },
      { id: 2, name: "حي الحسين" },
      { id: 3, name: "حي اليرموك" },
      { id: 4, name: "حي الحسن" },
      { id: 5, name: "حي الحسن الرياضي" },
      { id: 6, name: "حي الشهيد راغب الحريري" },
      { id: 7, name: "حي الشهيد معاذ الكساسبة" },
      { id: 8, name: "حي النزهة" },
      { id: 9, name: "حي المعراج" },
      { id: 10, name: "حي العتبة" },
      { id: 11, name: "حي البالوع" },
      { id: 12, name: "حي الثنية" },
      { id: 13, name: "حي البيت الأبيض" },
      { id: 14, name: "حي البارحة" },
      { id: 15, name: "حي الراية" },
      { id: 16, name: "حي الأرسال" },
      { id: 17, name: "حي الكلية التقنية" },
      { id: 18, name: "حي الشهيد معروف الدومي" },
      { id: 19, name: "حي النزهة الشرقية" },
      { id: 20, name: "حي الرقة" },
    ],
  },
  {
    region: "العقبة",
    cities: [
      { id: 1, name: "العقبة" },
      { id: 2, name: "الريحان" },
      { id: 3, name: "الحسينية" },
      { id: 4, name: "رأس النقب" },
      { id: 5, name: "وادي اليتم" },
      { id: 6, name: "القويرة" },
      { id: 7, name: "الحجيرة" },
      { id: 8, name: "المنطقة الحرة" },
      { id: 9, name: "الشعاب" },
      { id: 10, name: "القطارة" },
    ],
  },
  {
    region: "السلط",
    cities: [
      { id: 1, name: "السلط" },
      { id: 2, name: "المدينة الرياضية" },
      { id: 3, name: "جامعة البلقاء التطبيقية" },
      { id: 4, name: "دير علا" },
      { id: 5, name: "البحيرة" },
      { id: 6, name: "الطف" },
      { id: 7, name: "الرابية" },
      { id: 8, name: "عين جنا" },
      { id: 9, name: "الصمان" },
      { id: 10, name: "المغاريب" },
    ],
  },
  {
    region: "مأدبا",
    cities: [
      { id: 1, name: "مأدبا" },
      { id: 2, name: "المدينة الرياضية" },
      { id: 3, name: "جرين هيلز" },
      { id: 4, name: "ماعين" },
      { id: 5, name: "المزار الجنوبي" },
      { id: 6, name: "المزار الشمالي" },
      { id: 7, name: "النشيدات" },
      { id: 8, name: "أبو حمور" },
      { id: 9, name: "فيصل" },
      { id: 10, name: "البويضة" },
      { id: 11, name: "الفيصلية" },
      { id: 12, name: "اليزيدية" },
      { id: 13, name: "المحطة" },
      { id: 14, name: "دير علا" },
      { id: 15, name: "الصريح" },
      { id: 16, name: "شطنا" },
      { id: 17, name: "المغير" },
      { id: 18, name: "الشوبك" },
      { id: 19, name: "مؤتة" },
      { id: 20, name: "الراجف" },
      { id: 21, name: "الشعيبة" },
      { id: 22, name: "الطفيلة" },
      { id: 23, name: "البقعة" },
      { id: 24, name: "عيرا" },
      { id: 25, name: "الكرامة" },
      { id: 26, name: "المغاربة" },
      { id: 27, name: "الدوار الأول" },
      { id: 28, name: "الدوار الثاني" },
      { id: 29, name: "الدوار الثالث" },
      { id: 30, name: "الدوار الرابع" },
      { id: 31, name: "الدوار الخامس" },
      { id: 32, name: "الدوار السادس" },
      { id: 33, name: "الدوار السابع" },
      { id: 34, name: "الدوار الثامن" },
      { id: 35, name: "الدوار التاسع" },
      { id: 36, name: "الدوار العاشر" },
      { id: 37, name: "الدوار الحادي عشر" },
      { id: 38, name: "الدوار الثاني عشر" },
      { id: 39, name: "الدوار الثالث عشر" },
      { id: 40, name: "الدوار الرابع عشر" },
      { id: 41, name: "الدوار الخامس عشر" },
      { id: 42, name: "الدوار السادس عشر" },
      { id: 43, name: "الدوار السابع عشر" },
      { id: 44, name: "الدوار الثامن عشر" },
      { id: 45, name: "الدوار التاسع عشر" },
      { id: 46, name: "الدوار العشرون" },
    ],
  },
  {
    region: "الكرك",
    cities: [
      { id: 1, name: "الكرك" },
      { id: 2, name: "المزار الجنوبي" },
      { id: 3, name: "المزار الشمالي" },
      { id: 4, name: "القصر" },
      { id: 5, name: "الكرك الجديدة" },
      { id: 6, name: "الربة" },
      { id: 7, name: "المشتل" },
      { id: 8, name: "المنشية" },
      { id: 9, name: "القطرانة" },
      { id: 10, name: "المزار الجنوبي الشرقي" },
      { id: 11, name: "المزار الجنوبي الغربي" },
      { id: 12, name: "المزار الشمالي الغربي" },
      { id: 13, name: "المزار الشمالي الشرقي" },
      { id: 14, name: "الحمايدة" },
      { id: 15, name: "العدنانية" },
      { id: 16, name: "الدير" },
      { id: 17, name: "المغير" },
      { id: 18, name: "العيص" },
      { id: 19, name: "الشوبك" },
      { id: 20, name: "القطرانة الجنوبية" },
    ],
  },
  {
    region: "الطفيلة",
    cities: [
      { id: 1, name: "الطفيلة" },
      { id: 2, name: "السرحان" },
      { id: 3, name: "القادسية" },
      { id: 4, name: "العيص" },
      { id: 5, name: "العين البيضاء" },
      { id: 6, name: "الحسينية" },
      { id: 7, name: "الكورة" },
      { id: 8, name: "الحسا" },
      { id: 9, name: "الشوبك" },
      { id: 10, name: "الطرة" },
    ],
  },
  {
    region: "معان",
    cities: [
      { id: 1, name: "معان" },
      { id: 2, name: "الشوبك" },
      { id: 3, name: "البتراء" },
      { id: 4, name: "الراجف" },
      { id: 5, name: "الشوباني" },
      { id: 6, name: "الطيبة" },
      { id: 7, name: "المُلكية" },
      { id: 8, name: "رأس النقب" },
      { id: 9, name: "أم القطين" },
      { id: 10, name: "المغير" },
    ],
  },
  {
    region: "جرش",
    cities: [
      { id: 1, name: "جرش" },
      { id: 2, name: "سوف" },
      { id: 3, name: "الراجف" },
      { id: 4, name: "عمان الشمالية" },
      { id: 5, name: "دبين" },
      { id: 6, name: "كفر خل" },
      { id: 7, name: "المشارع" },
      { id: 8, name: "حوفا" },
      { id: 9, name: "خربة سوف" },
      { id: 10, name: "الرميثة" },
    ],
  },
  {
    region: "عجلون",
    cities: [
      { id: 1, name: "عجلون" },
      { id: 2, name: "رغدان" },
      { id: 3, name: "عين جنا" },
    ],
  },

  {
    region: "البلقاء",
    cities: [
      { id: 1, name: "البلقاء" },
      { id: 2, name: "السلط" },
      { id: 3, name: "المدينة الرياضية" },
      { id: 4, name: "الدير" },
      { id: 5, name: "النشيفات" },
      { id: 6, name: "عين الباشا" },
      { id: 7, name: "الفحيص" },
      { id: 8, name: "دير علا" },
      { id: 9, name: "ماحص" },
      { id: 10, name: "عين الكرم" },
    ],
  },

  {
    region: "المفرق",
    cities: [
      { id: 1, name: "المفرق" },
      { id: 2, name: "رحابا" },
      { id: 3, name: "الصفاوي" },
      { id: 4, name: "الأزرق" },
      { id: 5, name: "مثلث الشدادي" },
      { id: 6, name: "سواقة" },
      { id: 7, name: "المشارع" },
      { id: 8, name: "حوشا" },
      { id: 9, name: "الجديدة" },
      { id: 10, name: "مغير السرحان" },
      { id: 11, name: "المحمودية" },
      { id: 12, name: "مغير الريش" },
      { id: 13, name: "المزار الجنوبي" },
      { id: 14, name: "المزار الشمالي" },
      { id: 15, name: "الحمراء" },
      { id: 16, name: "العزيزية" },
      { id: 17, name: "العطاطرة" },
      { id: 18, name: "المنشية" },
      { id: 19, name: "الكرامة" },
      { id: 20, name: "البادية" },
    ],
  },

  {
    region: "مادبا",
    cities: [
      { id: 1, name: "مادبا" },
      { id: 2, name: "المدينة الرياضية" },
      { id: 3, name: "الفيصلية" },
      { id: 4, name: "عين الباشا" },
      { id: 5, name: "العارضة" },
      { id: 6, name: "أم الرصاص" },
      { id: 7, name: "الماضون" },
      { id: 8, name: "النشيفات" },
      { id: 9, name: "مؤتة" },
      { id: 10, name: "الجريدة" },
    ],
  },
];

export default regionsAndCities;

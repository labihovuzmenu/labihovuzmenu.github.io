"use strict";

const translations = {
  uz: {
    subtitle: "Restoran menyusi", welcome: "Xush kelibsiz", intro: "Mazali taomlarimiz bilan tanishing", categories: "Kategoriyalar", swipeHint: "Surib ko‘ring",
    hours: "Har kuni: 09:00–23:00", addressLabel: "Manzil:", address: "Restoran manzili", phoneLabel: "Telefon:", service: "Xizmat haqi: 10%", backToTop: "Tepaga qaytish", bonAppetit: "Yoqimli ishtaha!"
  },
  ru: {
    subtitle: "Меню ресторана", welcome: "Добро пожаловать", intro: "Познакомьтесь с нашими вкусными блюдами", categories: "Категории", swipeHint: "Листайте",
    hours: "Ежедневно: 09:00–23:00", addressLabel: "Адрес:", address: "Адрес ресторана", phoneLabel: "Телефон:", service: "Обслуживание: 10%", backToTop: "Наверх", bonAppetit: "Приятного аппетита!"
  },
  en: {
    subtitle: "Restaurant menu", welcome: "Welcome", intro: "Discover our delicious dishes", categories: "Categories", swipeHint: "Swipe",
    hours: "Daily: 09:00–23:00", addressLabel: "Address:", address: "Restaurant address", phoneLabel: "Phone:", service: "Service charge: 10%", backToTop: "Back to top", bonAppetit: "Enjoy your meal!"
  },
  zh: {
    subtitle: "餐厅菜单", welcome: "欢迎光临", intro: "探索我们的美味佳肴", categories: "菜品分类", swipeHint: "滑动浏览",
    hours: "每日：09:00–23:00", addressLabel: "地址：", address: "餐厅地址", phoneLabel: "电话：", service: "服务费：10%", backToTop: "返回顶部", bonAppetit: "祝您用餐愉快！"
  },
  ko: {
    subtitle: "레스토랑 메뉴", welcome: "환영합니다", intro: "맛있는 요리를 만나보세요", categories: "카테고리", swipeHint: "옆으로 밀기",
    hours: "매일: 09:00–23:00", addressLabel: "주소:", address: "레스토랑 주소", phoneLabel: "전화:", service: "서비스 요금: 10%", backToTop: "맨 위로", bonAppetit: "맛있게 드세요!"
  }
};

const menu = [
  { id: "birinchi", name: { uz: "Birinchi taomlar", ru: "Первые блюда" }, items: [
    ["Qozon kabob sho‘rva", "Казан-кебаб шурпа", "42 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Moxora", "Мохора", "39 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Balaza", "Балаза", "39 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Qaynatma sho‘rva", "Кайнатма шурпа", "39 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Mastava", "Мастава", "39 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Dumg‘aza sho‘rva", "Думгаза шурпа", "42 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Ko‘za sho‘rva", "Куза шурпа", "50 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Pelmen", "Пельмени", "39 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Tushonka sho‘rva", "Тушонка шурпа", "45 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Lag‘mon", "Лагман", "35 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"],
    ["Qozoqcha go‘sht", "Мясо по-казахски", "35 000 so‘m", "Tayyorlanish vaqti: 15 daqiqa", "Время приготовления: 15 минут"],
    ["Kuch sho‘rva", "Куч шурпа", "42 000 so‘m", "Tayyorlanish vaqti: 10 daqiqa", "Время приготовления: 10 минут"]
  ]},
  { id: "ikkinchi", name: { uz: "Ikkinchi taomlar", ru: "Вторые блюда" }, items: [
    ["Qozon kabob", "Казан-кебаб", "62 000 so‘m", "1 porsiya · 1 kg — 310 000 so‘m", "1 порция · 1 кг — 310 000 сум"],
    ["Mol go‘shtli qozon kabob", "Казан-кебаб из говядины", "62 000 so‘m", "1 porsiya · 1 kg — 310 000 so‘m", "1 порция · 1 кг — 310 000 сум"],
    ["Qo‘y go‘shtli bulg‘ur", "Булгур с бараниной", "280 000 so‘m", "1 kg · tayyorlanish: 20 daqiqa", "1 кг · приготовление: 20 минут"],
    ["Jiz", "Жиз", "78 000 so‘m", "1 porsiya · 1 kg — 310 000 so‘m", "1 порция · 1 кг — 310 000 сум"],
    ["Mol go‘shtli jiz", "Жиз из говядины", "78 000 so‘m", "1 porsiya · 1 kg — 310 000 so‘m", "1 порция · 1 кг — 310 000 сум"],
    ["Til-tuyoq", "Тил-туёк", "60 000 so‘m", "1 porsiya", "1 порция"],
    ["Baliq filesi", "Рыбное филе", "200 000 so‘m", "1 kg · tayyorlanish: 20 daqiqa", "1 кг · приготовление: 20 минут"],
    ["Sazan", "Сазан", "180 000 so‘m", "1 kg · tayyorlanish: 20 daqiqa", "1 кг · приготовление: 20 минут"],
    ["Norin", "Норин", "38 000 so‘m", "1 porsiya · 1 kg — 125 000 so‘m", "1 порция · 1 кг — 125 000 сум"],
    ["Beshbarmoq", "Бешбармак", "38 000 so‘m", "1 porsiya · tayyorlanish: 15 daqiqa", "1 порция · приготовление: 15 минут"],
    ["Xolodets", "Холодец", "20 000 so‘m", "1 dona", "1 штука"],
    ["Manti", "Манты", "9 000 so‘m", "1 dona · tayyorlanish: 15 daqiqa", "1 штука · приготовление: 15 минут"]
  ]},
  { id: "yevropa", name: { uz: "Yevropa taomlari", ru: "Европейские блюда" }, items: [
    ["Uycha go‘sht", "Мясо по-домашнему", "45 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Bifshteks", "Бифштекс", "38 000 so‘m", "1 porsiya · 10 daqiqa", "1 порция · 10 минут"],
    ["Murakkab garnir", "Сложный гарнир", "20 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Gulyash", "Гуляш", "40 000 so‘m", "1 porsiya · 10 daqiqa", "1 порция · 10 минут"],
    ["Brizol", "Бризоль", "35 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Gul osh", "Гул ош", "42 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Dumba-jigar", "Думба-жигар", "38 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Qo‘ziqorinli go‘sht", "Мясо с грибами", "45 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Garnirli trio", "Трио с гарниром", "45 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Sabzavotli go‘sht", "Мясо с овощами", "60 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Sabzavotli tovuq", "Курица с овощами", "40 000 so‘m", "1 porsiya · 15 daqiqa", "1 порция · 15 минут"],
    ["Tovuq", "Курица", "60 000 so‘m", "300 g · 1 kg — 200 000 so‘m", "300 г · 1 кг — 200 000 сум"]
  ]},
  { id: "kabob", name: { uz: "Kaboblar", ru: "Шашлыки" }, items: [
    ["Baliq kabob", "Рыба", "22 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Qo‘y qovurg‘asi", "Корейка баранина", "35 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Qiyma kabob", "Молотый", "24 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Pomidorli kuskovoy", "Кусковой с помидором", "26 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Qo‘y go‘shti", "Баранина", "27 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Pishloqli qiyma", "Молотый с сыром", "24 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Dumbali qiyma", "Молотый с думбой", "24 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Jigar kabob", "Печень", "22 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Dumbali rulet", "Рулет с думбой", "30 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Medoviy kabob", "Медовый", "30 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Tovuq kabob", "Куриный", "21 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Tovuq filesi", "Куриное филе", "21 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Qanotcha", "Крылышки", "21 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Sabzavotli kabob", "Овощной", "12 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"]
  ]},
  { id: "garnir", name: { uz: "Garnirlar", ru: "Гарниры" }, items: [
    ["Fri", "Фри", "12 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Pyure", "Пюре", "12 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Guruch", "Рис", "12 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Kotlet", "Котлет", "16 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"]
  ]},
  { id: "ichimlik", name: { uz: "Ichimliklar", ru: "Напитки" }, items: [
    ["Oddiy choy", "Чай простой", "3 000 so‘m", "Choynakda tortiladi", "Подаётся в чайнике"],
    ["Shirin choy", "Чай сладкий", "5 000 so‘m", "Choynakda tortiladi", "Подаётся в чайнике"],
    ["Limonli choy", "Чай с лимоном", "8 000 so‘m", "Choynakda tortiladi", "Подаётся в чайнике"],
    ["Cola", "Кола", "8 000–18 000 so‘m", "0,5 L — 8 000 · 1 L — 15 000 · 1,5 L — 18 000", "0,5 л — 8 000 · 1 л — 15 000 · 1,5 л — 18 000"],
    ["Mineral suv", "Минеральная вода", "5 000–7 000 so‘m", "0,5 L — 5 000 · 1 L — 6 000 · 1,5 L — 7 000", "0,5 л — 5 000 · 1 л — 6 000 · 1,5 л — 7 000"],
    ["Sharbat", "Сок", "18 000 so‘m", "", ""],
    ["Nortok", "Норток", "15 000 so‘m", "0,5 L", "0,5 л"]
  ]},
  { id: "non", name: { uz: "Non", ru: "Хлеб" }, items: [
    ["Lepyoshka", "Лепёшка", "6 000 so‘m", "", ""],
    ["Patir", "Патир", "15 000 so‘m", "", ""]
  ]},
  { id: "desert", name: { uz: "Desertlar", ru: "Десерты" }, items: [
    ["Pirojniy", "Пирожное", "25 000 so‘m", "", ""]
  ]},
  { id: "salat", name: { uz: "Salatlar", ru: "Салаты" }, items: [
    ["Mevali desert", "Фруктовый десерт", "115 000 so‘m", "Mevalar assortisi · 15 daqiqa", "Ассорти фруктов · 15 минут"],
    ["Go‘shtli desert", "Мясной десерт", "125 000 so‘m", "Go‘shtli assorti · 10 daqiqa", "Мясное ассорти · 10 минут"],
    ["Ko‘katli brinza", "Брынза с зеленью", "20 000 so‘m", "Brinza, ko‘kat va zaytun · 15 daqiqa", "Брынза, зелень и маслины · 15 минут"],
    ["Ko‘katlar assortisi", "Зелень ассорти", "15 000 so‘m", "Mavsumiy ko‘katlar · 10 daqiqa", "Ассорти зелени · 10 минут"],
    ["Suzma", "Сюзьма", "15 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Achchiq-chuchuk", "Ачи-чук", "15 000 so‘m", "Pomidor, piyoz va achchiq qalampir · 10 daqiqa", "Помидор, лук и острый перец · 10 минут"],
    ["Chiroqchi", "Чирокчи", "25 000 so‘m", "Pomidor, piyoz va baqlajon · 10 daqiqa", "Помидор, лук и баклажан · 10 минут"],
    ["Tuzlama assorti", "Солёное ассорти", "14 000 so‘m", "Bodring va karam · 10 daqiqa", "Огурцы и капуста · 10 минут"],
    ["Yangi salat", "Свежий", "16 000 so‘m", "Pomidor, bodring va ko‘katlar · 10 daqiqa", "Помидор, огурцы и зелень · 10 минут"],
    ["Olivye", "Оливье", "35 000 so‘m", "Klassik retsept · 15 daqiqa", "Классический рецепт · 15 минут"],
    ["Sezar", "Цезарь", "42 000 so‘m", "Tovuq filesi, salat, pomidor va pishloq · 15 daqiqa", "Куриное филе, салат, помидор и сыр · 15 минут"],
    ["Fransuzcha", "Французский", "35 000 so‘m", "Lavlagi, karam, bodring va go‘sht · 15 daqiqa", "Свёкла, капуста, огурцы и мясо · 15 минут"],
    ["Kakku uyasi", "Гнездо кукушки", "42 000 so‘m", "Tovuq, tuxum va kartoshka · 15 daqiqa", "Курица, яйцо и картофель · 15 минут"],
    ["Buxoro go‘zali", "Бухарская красавица", "40 000 so‘m", "Pomidor, bodring va go‘sht · 15 daqiqa", "Помидор, огурцы и мясо · 15 минут"],
    ["Nazokat", "Нежность", "38 000 so‘m", "Bodring, go‘sht, tuxum va mayonez · 15 daqiqa", "Огурец, мясо, яйцо и майонез · 15 минут"],
    ["Erkaklar kaprizi", "Мужской каприз", "42 000 so‘m", "Kolbasa, pishloq va bodring · 15 daqiqa", "Колбаса, сыр и огурец · 15 минут"],
    ["Smak", "Смак", "36 000 so‘m", "Pishloq, pomidor va suxarik · 15 daqiqa", "Сыр, помидор и сухарики · 15 минут"],
    ["Krab salati", "Крабовый", "34 000 so‘m", "Krab tayoqchalari, kartoshka va makkajo‘xori · 15 daqiqa", "Крабовые палочки, картофель и кукуруза · 15 минут"],
    ["Grekcha", "Греческий", "40 000 so‘m", "Pomidor, bodring, brinza va zaytun · 15 daqiqa", "Помидор, огурец, брынза и маслины · 15 минут"],
    ["Yaponcha", "Японский", "42 000 so‘m", "Bodring, pomidor, go‘sht va ko‘kat · 15 daqiqa", "Огурец, помидор, мясо и зелень · 15 минут"],
    ["Rassvet", "Рассвет", "45 000 so‘m", "Go‘sht, tuxum, bodring va pishloq · 15 daqiqa", "Мясо, яйцо, огурец и сыр · 15 минут"],
    ["Gruzincha", "Грузинский", "42 000 so‘m", "Go‘sht, bodring, pomidor va ko‘kat · 15 daqiqa", "Мясо, огурец, помидор и зелень · 15 минут"],
    ["Go‘shtli xe", "Хе с мясом", "45 000 so‘m", "Go‘sht, karam, bodring va sarimsoq · 15 daqiqa", "Мясо, капуста, огурец и чеснок · 15 минут"],
    ["Go‘shtli bodring", "Огурцы с мясом", "42 000 so‘m", "Tayyorlanish: 15 daqiqa", "Приготовление: 15 минут"],
    ["Aroq uchun", "Под водочку", "42 000 so‘m", "Tuzlangan bodring, qo‘ziqorin va piyoz · 15 daqiqa", "Солёный огурец, грибы и лук · 15 минут"],
    ["Altay", "Алтай", "35 000 so‘m", "Salat, bodring va tuxum · 15 daqiqa", "Салат, огурец и яйцо · 15 минут"],
    ["Yarim shuba", "Полушуба", "40 000 so‘m", "Selyodka, kartoshka va lavlagi · 15 daqiqa", "Селёдка, картофель и свёкла · 15 минут"],
    ["Karabas", "Карабас (овощной)", "25 000 so‘m", "Sabzavotli salat · 15 daqiqa", "Овощной салат · 15 минут"],
    ["Okroshka", "Окрошка", "20 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Ruscha okroshka", "Окрошка (русская)", "35 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Bahor salati", "Бахор салат", "20 000 so‘m", "Tayyorlanish: 10 daqiqa", "Приготовление: 10 минут"],
    ["Qatiq", "Катык", "6 000 so‘m", "", ""],
    ["Qaymoq", "Каймак", "8 000 so‘m", "", ""]
  ]},
];
/* Previous sample menu kept below for reference and can be removed when no longer needed.
  { id: "milliy", name: { uz: "Milliy taomlar", ru: "Национальные блюда" }, items: [
    ["Osh", "Плов", "45 000 so‘m", "Mol go‘shti, guruch, sabzi va ziravorlar", "Говядина, рис, морковь и специи"],
    ["Manti", "Манты", "38 000 so‘m", "Go‘sht va piyoz bilan tayyorlangan bug‘lama xamir", "Тесто на пару с мясом и луком"],
    ["Qozon kabob", "Казан-кебаб", "68 000 so‘m", "Mol go‘shti, kartoshka va maxsus ziravorlar", "Говядина, картофель и фирменные специи"],
    ["Norin", "Нарын", "42 000 so‘m", "Mayin xamir, go‘sht va xushbo‘y ziravorlar", "Тонкое тесто, мясо и ароматные специи"]
  ]},
  { id: "suyuq", name: { uz: "Suyuq taomlar", ru: "Супы" }, items: [
    ["Mastava", "Мастава", "30 000 so‘m", "Guruch, go‘sht va sabzavotlardan tayyorlangan sho‘rva", "Суп с рисом, мясом и овощами"],
    ["Chuchvara sho‘rva", "Суп с чучварой", "32 000 so‘m", "Qo‘lda tugilgan chuchvara va mazali bulyon", "Домашние пельмени ручной лепки в ароматном бульоне"],
    ["Sho‘rva", "Шурпа", "35 000 so‘m", "Mol go‘shti, kartoshka, sabzi va ko‘katlar", "Говядина, картофель, морковь и зелень"],
    ["Lag‘mon", "Лагман", "40 000 so‘m", "Qo‘lda cho‘zilgan xamir, go‘sht va sabzavotlar", "Домашняя лапша, мясо и овощи"]
  ]},
  { id: "kabob", name: { uz: "Kaboblar", ru: "Шашлыки" }, items: [
    ["Qiyma kabob", "Шашлык из фарша", "22 000 so‘m", "Mol go‘shti va maxsus ziravorlardan tayyorlangan kabob", "Шашлык из говяжьего фарша с фирменными специями"],
    ["Jaz kabob", "Жаз-кебаб", "27 000 so‘m", "Mayin mol go‘shti bo‘laklari", "Нежные кусочки говядины"],
    ["Tovuq kabob", "Куриный шашлык", "24 000 so‘m", "Marinadlangan tovuq go‘shti", "Маринованное куриное мясо"],
    ["Assorti kabob", "Ассорти шашлыков", "85 000 so‘m", "Turli xil kaboblardan tayyorlangan to‘plam", "Набор из разных видов шашлыка"]
  ]},
  { id: "salat", name: { uz: "Salatlar", ru: "Салаты" }, items: [
    ["Achchiq-chuchuk", "Аччик-чучук", "18 000 so‘m", "Pomidor, piyoz va achchiq qalampir", "Помидоры, лук и острый перец"],
    ["Bahor salati", "Салат «Весна»", "22 000 so‘m", "Bodring, pomidor, ko‘katlar va maxsus sous", "Огурцы, помидоры, зелень и фирменный соус"],
    ["Sezar", "Цезарь", "38 000 so‘m", "Tovuq go‘shti, salat bargi, pishloq va sous", "Курица, листья салата, сыр и соус"],
    ["Olivye", "Оливье", "28 000 so‘m", "Klassik retsept asosida tayyorlangan salat", "Салат, приготовленный по классическому рецепту"]
  ]},
  { id: "ichimlik", name: { uz: "Ichimliklar", ru: "Напитки" }, items: [
    ["Ko‘k choy", "Зелёный чай", "8 000 so‘m", "Choynakda tortiladi", "Подаётся в чайнике"],
    ["Qora choy", "Чёрный чай", "8 000 so‘m", "Choynakda tortiladi", "Подаётся в чайнике"],
    ["Coca-Cola 0.5 L", "Coca-Cola 0,5 л", "12 000 so‘m", "", ""],
    ["Fanta 0.5 L", "Fanta 0,5 л", "12 000 so‘m", "", ""],
    ["Mineral suv 0.5 L", "Минеральная вода 0,5 л", "8 000 so‘m", "", ""],
    ["Sharbat 1 L", "Сок 1 л", "25 000 so‘m", "", ""]
  ]},
  { id: "desert", name: { uz: "Desertlar", ru: "Десерты" }, items: [
    ["Asalli tort", "Медовик", "28 000 so‘m", "Mayin qatlamlar va asal kremi", "Нежные коржи и медовый крем"],
    ["Chizkeyk", "Чизкейк", "32 000 so‘m", "Qaymoqli pishloq asosida tayyorlangan desert", "Десерт на основе сливочного сыра"],
    ["Mevali assorti", "Фруктовое ассорти", "45 000 so‘m", "Mavsumiy yangi mevalar to‘plami", "Ассорти свежих сезонных фруктов"],
    ["Muzqaymoq", "Мороженое", "20 000 so‘m", "Uch xil ta’m tanlovi", "Три вкуса на выбор"]
  ]}
]; */

const tabsRoot = document.querySelector("#category-tabs");
const sectionsRoot = document.querySelector("#menu-sections");
const backToTop = document.querySelector("#back-to-top");
const supportedLanguages = ["uz", "ru", "en", "zh", "ko"];
const savedLanguage = localStorage.getItem("labi-havus-language");
let language = supportedLanguages.includes(savedLanguage) ? savedLanguage : "uz";
let navigationLock = false;
let scrollAnimationFrame;
let scrollTicking = false;

// Official Central Bank of Uzbekistan rates for 24.07.2026 (UZS per unit).
const exchangeRates = { USD: 12101.84, RUB: 153.75, CNY: 1787.65, KRW: 8.24 };

const categoryTranslations = {
  birinchi: { en: "First courses", zh: "汤类", ko: "첫 번째 요리" },
  ikkinchi: { en: "Main courses", zh: "主菜", ko: "메인 요리" },
  yevropa: { en: "European dishes", zh: "欧洲菜", ko: "유럽 요리" },
  kabob: { en: "Kebabs", zh: "烤肉", ko: "케밥" },
  garnir: { en: "Side dishes", zh: "配菜", ko: "사이드 메뉴" },
  ichimlik: { en: "Drinks", zh: "饮品", ko: "음료" },
  non: { en: "Bread", zh: "面包", ko: "빵" },
  desert: { en: "Desserts", zh: "甜点", ko: "디저트" },
  salat: { en: "Salads", zh: "沙拉", ko: "샐러드" }
};

function categoryName(category) {
  return category.name[language] || categoryTranslations[category.id]?.[language] || category.name.uz;
}

function convertedAmount(amount, targetLanguage = language) {
  if (targetLanguage === "uz") {
    return `${Math.round(amount).toLocaleString("uz-UZ")} so‘m`;
  }
  if (targetLanguage === "ru") {
    const value = Math.round((amount / exchangeRates.RUB) / 10) * 10;
    return `${value.toLocaleString("ru-RU")} ₽`;
  }
  if (targetLanguage === "en") {
    const value = Math.round((amount / exchangeRates.USD) * 20) / 20;
    return `$${value.toFixed(2)}`;
  }
  if (targetLanguage === "zh") {
    const value = Math.round(amount / exchangeRates.CNY);
    return `¥${value.toLocaleString("zh-CN")}`;
  }
  const value = Math.round((amount / exchangeRates.KRW) / 100) * 100;
  return `₩${value.toLocaleString("ko-KR")}`;
}

function localizedPrice(price) {
  if (language === "uz") return price;
  return price
    .replace(/\s*so‘m$/, "")
    .split("–")
    .map(part => convertedAmount(Number(part.replace(/\D/g, ""))))
    .join("–");
}

function convertInlinePrices(description) {
  if (language === "uz") return description;
  const pattern = language === "ru"
    ? /([\d\s]+)\s*сум/g
    : /([\d,]+)\s*UZS/g;
  return description.replace(pattern, (_, amount) =>
    convertedAmount(Number(amount.replace(/\D/g, "")))
  );
}

function renderMenu() {
  tabsRoot.innerHTML = menu.map((category, index) => `<button class="category-tab${index === 0 ? " active" : ""}" type="button" data-target="${category.id}">${categoryName(category)}</button>`).join("");
  sectionsRoot.innerHTML = menu.map((category, categoryIndex) => {
    const items = category.items;
    const useRussianMenu = language === "ru";
    return `<section class="menu-section" id="${category.id}" aria-labelledby="${category.id}-title">
      <div class="section-heading"><h2 id="${category.id}-title">${categoryName(category)}</h2><span class="decorative-line" aria-hidden="true"></span></div>
      <ul class="menu-list">${items.map((item, itemIndex) => {
        const localized = window.menuTranslations?.[language]?.[categoryIndex]?.[itemIndex];
        const dishName = localized?.[0] || item[useRussianMenu ? 1 : 0];
        const description = convertInlinePrices(localized?.[1] ?? item[useRussianMenu ? 4 : 3]);
        const isMeta = /daqiqa|минут|minutes?|porsiya|порция|serving|kg|кг|分钟|분|\d[,\d]*\s*[Llл]/i.test(description);
        return `<li class="menu-item"><div class="menu-item-main"><h3 class="dish-name">${dishName}</h3><span class="dish-price">${localizedPrice(item[2])}</span></div><p class="dish-description${isMeta ? " menu-meta" : ""}">${description}</p></li>`;
      }).join("")}</ul>
    </section>`;
  }).join("");
  if (!navigationLock) updateActiveFromPosition();
}

function centerActiveTab(tab) {
  const targetLeft = tab.offsetLeft - (tabsRoot.clientWidth - tab.offsetWidth) / 2;
  tabsRoot.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
}

function activateTab(targetId, center = false) {
  document.querySelectorAll(".category-tab").forEach(tab => {
    const active = tab.dataset.target === targetId;
    const wasActive = tab.classList.contains("active");
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-current", active ? "true" : "false");
    if (active && !wasActive && center) centerActiveTab(tab);
  });
}

function animatePageScroll(destination, targetId) {
  cancelAnimationFrame(scrollAnimationFrame);

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, destination);
    navigationLock = false;
    activateTab(targetId);
    return;
  }

  const start = window.scrollY;
  const distance = destination - start;
  const duration = Math.min(720, Math.max(420, Math.abs(distance) * 0.32));
  const startedAt = performance.now();

  const step = now => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      scrollAnimationFrame = requestAnimationFrame(step);
    } else {
      navigationLock = false;
      activateTab(targetId);
    }
  };

  scrollAnimationFrame = requestAnimationFrame(step);
}

function goToCategory(targetId) {
  const section = document.getElementById(targetId);
  if (!section) return;

  navigationLock = true;
  activateTab(targetId, true);

  const stickyHeight = document.querySelector(".menu-tools").offsetHeight;
  const destination = section.getBoundingClientRect().top + window.scrollY - stickyHeight - 12;
  cancelAnimationFrame(scrollAnimationFrame);
  window.scrollTo(0, Math.max(0, destination));
  activateTab(targetId);

  /* Ignore the scroll event generated by this direct category jump. */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      navigationLock = false;
      activateTab(targetId);
    });
  });
}

function updateInterface() {
  const copy = translations[language] || translations.uz;
  document.documentElement.lang = language;
  document.title = `Labi Hovuz — ${copy.subtitle}`;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = copy[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = copy[element.dataset.i18nPlaceholder]; });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => { element.setAttribute("aria-label", copy[element.dataset.i18nAriaLabel]); });
  document.querySelectorAll(".language-button").forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderMenu();
}

function updateActiveFromPosition() {
  if (navigationLock) return;

  const sections = [...document.querySelectorAll(".menu-section")];
  if (!sections.length) return;

  const marker = document.querySelector(".menu-tools").offsetHeight + 24;
  let current = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) current = section;
    else break;
  }

  activateTab(current.id);
}

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 650);
  if (navigationLock || scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateActiveFromPosition();
    scrollTicking = false;
  });
}, { passive: true });
backToTop.addEventListener("click", () => {
  navigationLock = true;
  activateTab(menu[0].id);
  animatePageScroll(0, menu[0].id);
});

tabsRoot.addEventListener("click", event => {
  const tab = event.target.closest(".category-tab");
  if (!tab) return;
  event.preventDefault();
  goToCategory(tab.dataset.target);
});
document.querySelectorAll(".language-button").forEach(button => button.addEventListener("click", () => {
  language = button.dataset.language;
  localStorage.setItem("labi-havus-language", language);
  updateInterface();
}));

updateInterface();

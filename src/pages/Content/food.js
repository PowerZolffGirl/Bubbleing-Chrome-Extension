let classesDir = {
  1: {
    name: 'Aehobak bokkeum',
    id: 1,
    display_name: 'Aehobak bokkeum',
    sub_name: '애호박 볶음, stir-fried zucchini',
    description:
      'Aehobak bokkeum is a side dish of zucchini stir-fried with oil and seasoned with minced garlic, green onion, and salted shrimp. It is a type of namul ( Korean seasoned vegetables ) , and is in season in summer.',
  },
  2: {
    name: 'Agu jjim',
    id: 2,
    display_name: 'Agu jjim',
    sub_name: '아구찜, Spicy Braised Angler Fish',
    description:
      'Agu jjim is a dish of angler fish simmered with bean sprouts, minari (Korean parsley), mideodeok ( Styela clava) and other various vegetables. It is seasoned with a spices made with chili powder, soybean paste, soy sauce, minced garlic, and green onion. Popular for its chewy fish flesh and fragrant flavor.',
  },
  3: {
    name: 'Bossam',
    id: 3,
    display_name: 'Bossam',
    sub_name: '보쌈, Boiled Beef Slices',
    description:
      'Bossam ( also called Suyuk ) is slices of beef boiled in water. It is usually eaten together with kimchi and cabbage leaves.',
  },
  4: {
    name: 'Bulgogi',
    id: 4,
    display_name: 'Bulgogi',
    sub_name: '불고기, Soy sauce based Korean Barbecue',
    description:
      'Bulgogi is a grilled dish of thin slices of beef marinated with soy sauce, sugar, green onions, garlic, black pepper, and sesame oil. It is one of the most popular Korean traditional foods.',
  },
  5: {
    name: 'chicken',
    id: 5,
    display_name: 'chicken',
    sub_name: '치킨, Korean Fried Chicken',
    description:
      'Korean-style chicken, which Koreans simply call chicken, includes just fried chicken and the ones seasoned with a variety of spices.',
  },
  6: {
    name: 'Dakbal',
    id: 6,
    display_name: 'Dakbal',
    sub_name: '닭발, Grilled Chicken Feet',
    description:
      'Dakbal is a dish of chicken feet grilled with hot spices and vegetables. Usually eaten as a side dish of alchol.',
  },
  7: {
    name: 'Doenjang jjigae',
    id: 7,
    display_name: 'Doenjang jjigae',
    sub_name: '된장찌개, Soybean Paste Stew',
    description:
      'Doenjang jjigae is a stew made of soybean paste and various vegetables. Doenjang ( soybean paste ) is one of the most popular and common fermented condiment which is necessary for so many kinds of Korean dishes.',
  },
  8: {
    name: 'Dubu jorim',
    id: 8,
    display_name: 'Dubu jorim',
    sub_name: '두부조림, Braised Pan-fried Dubu',
    description:
      'A dish of pan-fried slices of dubu (soybean curd / tofu) covered with soy sauce and braised until the sauce is absorbed by the dubu.',
  },
  9: {
    name: 'Eomuk bokkeum',
    id: 9,
    display_name: 'Eomuk bokkeum',
    sub_name: '어묵볶음, Stir-fried Fishcake',
    description:
      'Eomukbokkeum is a dish of fish cake stir-fried with onion and soy sauce. It is a popular side dish easily seen in Korean restaurants that sells home-styled Korean foods.',
  },
  10: {
    name: 'Galbi jjim',
    id: 10,
    display_name: 'Galbi jjim',
    sub_name: '갈비찜, Braised Short Ribs',
    description:
      'Galbi jjim is beef short ribs braised with soy sauce. It is cooked by cutting beef short ribs into chunks and then seasoning them with soy sauce, garlic and other vegetables and spices. It goes well with rice and also alcohol because of its salty and sweet taste.',
  },
  11: {
    name: 'Gamja chae bokkeum',
    id: 11,
    display_name: 'Gamja chae bokkeum',
    sub_name: '감자채 볶음, Stir-fried Shredded Potatoes',
    description:
      'Gamja chae bokkeum is a dish of julienned potatoes sauted in oil. Usually sauted together with other vegetables and then seasoned with salt. It is soft and light food good to eat as a side dish.',
  },
  12: {
    name: 'Gamja jorim',
    id: 12,
    display_name: 'Gamja jorim',
    sub_name: '감자조림, Braised Potatoes',
    description:
      'Gamja jorim is a dish of cubed potatoes braised with soy sauce and oil. It is usually served as a side dish.',
  },
  13: {
    name: 'Gamjatang',
    id: 13,
    display_name: 'Gamjatang',
    sub_name: '감자탕, Pork Backbone Stew',
    description:
      'Gamjatang is a soup made of pig backbones, potato, green cabbage leaves, perilla seeds and leaves, green onions, and garlic. It is a spicy dish with thick soup and deep flavor.',
  },
  14: {
    name: 'Ganjang-gejang',
    id: 14,
    display_name: 'Ganjang-gejang',
    sub_name: '간장게장, Crab Marinated in Soy Sauce',
    description:
      'Ganjang-gejang is a dish of crabs marinated in soy sauce ( ganjang ). People prefer egg-bearing crabs, with some orange-colored creamy tomalley inside. It goes well with rice, so people usually put rice on the top shell, mix the rice with tomalley, crab meat, and soy sauce, and eat it. It tastes wonderful so ganjang gejang is very popular among Koreans.',
  },
  15: {
    name: 'Gim',
    id: 15,
    display_name: 'Gim',
    sub_name: '김, Dried Laver',
    description:
      'Gim is edible seaweed, or dried laver made from seaweed that grows along the western and southern coasts of Korea. It is dried and then softly oiled, salted, or slightly roasted. Also it is usually eaten together with various ingredients, especially rice.',
  },
  16: {
    name: 'Gimbap',
    id: 16,
    display_name: 'Gimbap',
    sub_name: '김밥, Rice Rolls in Laver',
    description:
      'Gimbap is a dish of rice rolled up in a sheet of roasted gim ( dried laver ). The rice is seasoned with salt and sesame oil and is rolled up with pickled reddish, spinach, carrot, and other ingredients. The long roll is sliced into bite-sized pieces.',
  },
  17: {
    name: 'Gopchang',
    id: 17,
    display_name: 'Gopchang',
    sub_name: '곱창, Grilled Small Intestines',
    description:
      'Gopchang is grilled small intestines of a cow. It is grilled like barbecue, and is eaten with salt, sesame oil or soy sauce based sweet dipping sauce. It is often eaten together with grilled big intestines and entrails.',
  },
  18: {
    name: 'Gyeran jjim',
    id: 18,
    display_name: 'Gyeran jjim',
    sub_name: '계란찜, Steamed Eggs',
    description:
      'Gyeran jjim is a dish made by beating in eggs with water and salt, and steaming them. It is warm and soft side dish helpful for raising appetite.',
  },
  19: {
    name: 'Hoe',
    id: 19,
    display_name: 'Hoe',
    sub_name: '회, Raw fish',
    description:
      'Hoe is a dish of filleted raw fish. People usually eat it with chojang, which is a sauce made with red pepper paste and vinegar.',
  },
  20: {
    name: 'Japchae',
    id: 20,
    display_name: 'Japchae',
    sub_name: '잡채, Stir-fried Glass Noodles and Vegetables',
    description:
      'Japchae is a noodle dish cooked by mixing boiled sweet potato noodles with stir-fried vegetables, mushrooms and soy sauce. Because of its color feature, it is typically served on special feast tables.',
  },
  21: {
    name: 'Jeyuk bokkeum',
    id: 21,
    display_name: 'Jeyuk bokkeum',
    sub_name: '제육볶음, Stir-Fried Pork',
    description:
      'Jeyuk bokkeum is a dish of thinly sliced pork and then stir-fried with spicy seasoning. It is also called ‘Dwaeji-bulgogi’ in Korean. Onion and cabbage can be added according to preference.',
  },
  22: {
    name: 'Jinmichae bokkeum',
    id: 22,
    display_name: 'Jinmichae bokkeum',
    sub_name: '진미채볶음, Stir-fried Dried Squid Strips',
    description:
      'Jinmichae bokkeum, which is also called ojingeochae bokkeum is a side dish made by seasoning dried shredded squid ( jinmichae ) with sugar, gochujang ( red pepper paste ), and corn syrup. It is popular because of its sweet and spicy taste.',
  },
  23: {
    name: 'Jjajangmyeon',
    id: 23,
    display_name: 'Jjajangmyeon',
    sub_name: '짜장면, Noodles in Black Bean Sauce',
    description:
      'Jjajangmyeon is a noodle dish mixed with a sauce made of chunjang ( a sauce made of thick black soybean paste ). Pork, onion, lettuce, green pumpkin, and other vegetables are also added.',
  },
  24: {
    name: 'Jjamppong',
    id: 24,
    display_name: 'Jjamppong',
    sub_name: '짬뽕, Spicy Seafood Noodle Soup',
    description:
      'Jjamppong is a spicy noodle soup with pork or chicken based broth with chili powder. Various seafoods and vegetables, such as squid, mussels, onion, and lettuce can be added.',
  },
  25: {
    name: 'Jjimdak',
    id: 25,
    display_name: 'Jjimdak',
    sub_name: '찜닭, Braised Chicken',
    description:
      'Jjimdak is a a dish of chopped chicken braised with soysauce based spices, vegetables, glass noodles. It is a popular side dish that goes well with rice.',
  },
  26: {
    name: 'Jokbal',
    id: 26,
    display_name: 'Jokbal',
    sub_name: '족발, Braised Pigs’ Feet',
    description:
      'Jokbal is a dish of simmered pig’s feet boiled with soy sauce, sugar, ginger and garlic. It is popular because of its chewy texture.',
  },
  27: {
    name: 'Jumeokbap',
    id: 27,
    display_name: 'Jumeokbap',
    sub_name: '주먹밥, Rice Ball',
    description:
      'Jumeokbap is made by shaping seasoned rice into a ball. It can be made with various ingredients, such as canned tuna, kimchi, dried anchovy, leafy vegetables, and many others according to one’s favor.',
  },
  28: {
    name: 'Kalguksu',
    id: 28,
    display_name: 'Kalguksu',
    sub_name: '칼국수, Noodle Soup',
    description:
      'Kalguksu is a noodle dish made of noodles thinly cut from flattened wheat flour dough. It is served in a chicken or beef based soup topped with clams, julienned squash, green onion, and other various vegetables.',
  },
  29: {
    name: 'Kimchi',
    id: 29,
    display_name: 'Kimchi',
    sub_name: '김치, Fermented salted vegetables seasoned with chili powder',
    description:
      'Kimchi a dish of salted vegetables, such as napa cabbage and Korean reddish, and is seasoned with chopped reddish, chili powder, minced garlic, green onion, jeotgal ( salted seafood used for seasoning ) etc. It is staple food, which Korean people almost always have in meals as a side dish.',
  },
  30: {
    name: 'Kimchi jjigae',
    id: 30,
    display_name: 'Kimchi jjigae',
    sub_name: '김치찌개, kimchi stew',
    description:
      'Kimchi jjigae is a spicy stew made with kimchi and pork. Beef or seafood can be added instead of pork to feel unique taste.',
  },
  31: {
    name: 'Kkaennip muchim',
    id: 31,
    display_name: 'Kkaennip muchim',
    sub_name: '깻잎무침, Pickled Wild Sesame Leaves',
    description:
      'Kkaennip muchim is seasame leaves marined in soy sauce. It is made by slightly parboiling the leaves in hot water, and then seasoned with soy sauce, salt, garlic, perilla oil, and thread onion. As sesame leaves are aromatic, it is efficient for raising appetite.',
  },
  32: {
    name: 'Kkakdugi',
    id: 32,
    display_name: 'Kkakdugi',
    sub_name: '깍두기, Diced Radish Kimchi',
    description:
      'Kkakdugi is salted cubed kimchi mixed with chili powder, salted shrimp, dropwort, chives, minced garlic and chopped green onion. It is a type of kimchi usually made in the season from late autumn to early winter when the taste of reddish is the best.',
  },
  33: {
    name: 'Kongnamul muchim',
    id: 33,
    display_name: 'Kongnamul muchim',
    sub_name: '콩나물무침, Bean Sprout Salad',
    description:
      'Kongnamul muchim is a dish made by blanching bean sprouts and seasoning it with salt, chopped green onions, minced garlic, and seasame oil. It is one of the most common side dishes easily found in Korean homes.',
  },
  34: {
    name: 'Maneul jjong muchim',
    id: 34,
    display_name: 'Maneul jjong muchim',
    sub_name: '마늘쫑무침, Garlic Stem Salad',
    description:
      'Maneul jjong muchim is a dish of stems of garlic stir-fried with soy sauce or red pepper paste. Dried shrimps also can be added.',
  },
  35: {
    name: 'Mechuri al jangjorim',
    id: 35,
    display_name: 'Mechuri al jangjorim',
    sub_name: '메추리알 장조림, Braised Quail Eggs in Soy Sauce',
    description:
      'Mechuri al jangjorim is a dish of quail eggs braised in soy sauce with garlic, ginger, sugar, and water. It is a popular side dish which is also loved by children.',
  },
  36: {
    name: 'Miyeok guk',
    id: 36,
    display_name: 'Miyeok guk',
    sub_name: '미역국, Seaweed Soup',
    description:
      'Miyeok guk is a soup made of soaked seaweed with beef, sesame oil, garlic, soy sauce etc. It is traditionally served on one’s birthday.',
  },
  37: {
    name: 'Myeolchi bokkeum',
    id: 37,
    display_name: 'Myeolchi bokkeum',
    sub_name: '멸치볶음, Stir-fried Anchovies',
    description:
      'Myeolchi bokkeum is a side dish of stir-fried dried enchovies. Usually mixed with corn syrup, soy sauce salt, and sesame.',
  },
  38: {
    name: 'Namul muchim',
    id: 38,
    display_name: 'Namul muchim',
    sub_name: '나물무침, Vegetable Salad Side Dishes',
    description:
      'Namul muchim is a dish of seasoned vegetables, herbs, greens or wild roots. It can be cooked either by stir-frying or blanching the main ingredients and seasoning them with soy sauce, oil, garlic etc. All the types of edible plants can be used as ingredients of Namul muchim, just like salad.',
  },
  39: {
    name: 'Eomuk',
    id: 39,
    display_name: 'Eomuk',
    sub_name: '어묵, Fish Cakes',
    description:
      'Eomuk( also called Odeng) is Korean-style fish cake made with minced fish or seafoods, mixed with starch. In Korea, it is usually in thin form. Odeng skewer is one of the most popular street foods in Korea.',
  },
  40: {
    name: 'Oi muchim',
    id: 40,
    display_name: 'Oi muchim',
    sub_name: '오이무침, Cucumber Salad',
    description:
      'Oi muchim is a dish of sliced cucumbers lightly salted and mixed with julienned radish, chili powder, green onions, garlic, ginger, and pepper.',
  },
  41: {
    name: 'Pajeon',
    id: 41,
    display_name: 'Pajeon',
    sub_name: '파전, Green Onion Pancake',
    description:
      'Pajeon is Korean style pancakes made of wheat flour, rice flour, eggs, with onions, green onions, chives, cut squish, beef, clams, and many other ingredients. It is usually eaten with soy sauce.',
  },
  42: {
    name: 'Ramyun',
    id: 42,
    display_name: 'Ramyun',
    sub_name: '라면, Instant Noodle',
    description:
      'Ramyun is the most popular instant noodle of Korea. It is an instant food of fried and dried noodles with powder soup. People boil the noodles with powder soup, and add some green onion or an egg.',
  },
  43: {
    name: 'Ramyun',
    id: 43,
    display_name: 'Ramyun',
    sub_name: '라면, Instant Noodle',
    description:
      'Ramyun is the most popular instant noodle of Korea. It is an instant food of fried and dried noodles with powder soup. People boil the noodles with powder soup, and add some green onion or an egg.',
  },
  44: {
    name: 'Saengseon gui',
    id: 44,
    display_name: 'Saengseon gui',
    sub_name: '생선구이, Grilled Fish',
    description:
      'Saengseon gui is fish grilled with salt or other seasonings. A variety of fish, such as mackerel, saury, yellow corvina and cutlassfish, are grilled and seasoned with salt or red pepper paste according to preference.',
  },
  45: {
    name: 'Samgyeopsal',
    id: 45,
    display_name: 'Samgyeopsal',
    sub_name: '삼겹살, Grilled Pork Belly',
    description:
      'Samgyeopsal is grilled pork belly, and foreign people usually call it ‘barbecue’. Usually people eat it with salt with sesame oil, or with ssamjang ( a sauce mixed with soybean paste and redpepper paste ). It is also eaten wrapped in lettuce leaves, which most Koreans prefer.',
  },
  46: {
    name: 'Samgyetang',
    id: 46,
    display_name: 'Samgyetang',
    sub_name: '삼계탕, Ginseng Chicken Soup',
    description:
      'Samgyetang is a soup made of a chicken stuffed with ginseng, sticky rice, garlic, and many other medicinal herbs. It is steamed in a clear broth with some vegetables. Meat, vegetables, rice and hot soup being all together in one dish, samgyetang is popular for its deep flavor and health benefits.',
  },
  47: {
    name: 'Sannakji',
    id: 47,
    display_name: 'Sannakji',
    sub_name: '산낙지, Live Octopus',
    description:
      'Sannakji is a dish of a chopped live octopus and eaten with a sesame oil or chojang ( a sauce made with red pepper paste and vinegar ).',
  },
  48: {
    name: 'Sigeumchi muchim',
    id: 48,
    display_name: 'Sigeumchi muchim',
    sub_name: '시금치 무침, Korean Spinach Side Dish',
    description:
      'Sigeumchi muchim is a side dish made by blanching sesame leaves and then seasoning them with salt, sesame oil, chopped green onion and minced garlic.',
  },
  49: {
    name: 'Sigeumchi muchim',
    id: 49,
    display_name: 'Sigeumchi muchim',
    sub_name: '시금치 무침, Korean Spinach Side Dish',
    description:
      'Sigeumchi muchim is a side dish made by blanching sesame leaves and then seasoning them with salt, sesame oil, chopped green onion and minced garlic.',
  },
  50: {
    name: 'Soju',
    id: 50,
    display_name: 'Soju',
    sub_name: '소주, Korean Alcoholic Beverage',
    description:
      'Soju is a typical alcoholic beverage of Korea. It is clear, distilled liquor made of rice, sweet potatoes and other ingredients.',
  },
  51: {
    name: 'Soju',
    id: 51,
    display_name: 'Soju',
    sub_name: '소주, Korean Alcoholic Beverage',
    description:
      'Soju is a typical alcoholic beverage of Korea. It is clear, distilled liquor made of rice, sweet potatoes and other ingredients.',
  },
  52: {
    name: 'Sundae',
    id: 52,
    display_name: 'Sundae',
    sub_name: '순대, Korean-style Blood Sausage',
    description:
      'Sundae is a dish of steamed pork intestines stuffed with glass noodles, vegetables and other ingredients. It is usually dipped in salt, and many people enjoy eating it with other organs, such as pork liver.',
  },
  53: {
    name: 'Sundae gukbap',
    id: 53,
    display_name: 'Sundae gukbap',
    sub_name: '순대국밥, Blood Sausage Soup',
    description:
      'Sundae  gukbap is a soup boiled with sundae and pork organs, and is eaten with rice. Sundae is steamed pork intestines stuffed with glass noodles and other ingredients. Seasoned red pepper sauce can be added according to one’s favor.',
  },
  54: {
    name: 'Sundubu jjigae',
    id: 54,
    display_name: 'Sundubu jjigae',
    sub_name: '순두부찌개, Spicy Soft Dubu Stew',
    description:
      'Sundubu jjigae is a spicy stew made by boiling soft dubu ( tofu ), doenjang ( soybean paste ), some meat, and seafoods. Its spicy and refreshing taste makes it a popular stew among Koreans.',
  },
  55: {
    name: 'Bossam',
    id: 55,
    display_name: 'Bossam',
    sub_name: '보쌈, Boiled Beef Slices',
    description:
      'Bossam ( also called Suyuk ) is slices of beef boiled in water. It is usually eaten together with kimchi and cabbage leaves.',
  },
  56: {
    name: 'Tangsuyuk',
    id: 56,
    display_name: 'Tangsuyuk',
    sub_mame: '탕수육, Sweet and Sour Fried Pork',
    description:
      'Tanksuyuk is a dish of bite-sized pork fried with starch. It is eaten with a sour and sweet sauce made with vinegar, soy sauce, sugar, vegetables, and starch.',
  },
  57: {
    name: 'Tteokbokki',
    id: 57,
    display_name: 'Tteokbokki',
    sub_name: '떡볶이, Stir-fried Rice Cakes',
    description:
      'Tteokbokki is a dish of bite-sized rice cakes, stir-fried with red pepper paste based spices and other vegetables. It is one of the most popular snack or street food that is popular among men and women of all ages.',
  },
  58: {
    name: 'Twigim',
    id: 58,
    display_name: 'Twigim',
    sub_name: '튀김, Korean Fries',
    description:
      'Twigim is deep-fries of floured ingredients. A variety of ingredients, such as vegetables, fish, or meat, can be made into twigim.',
  },
  59: {
    name: 'Yangpa jangajji',
    id: 59,
    display_name: 'Yangpa jangajji',
    sub_name: '양파 장아찌, Pickled Onion',
    description:
      'Yangpa jangajji is sweet and sour onion pickled with soy sauce. It refreshes appetite when eaten with meat dishes. Can be easily seen in barbecue restaurants in Korea.',
  },
  60: {
    name: 'Yukhoe',
    id: 60,
    display_name: 'Yukhoe',
    sub_name: '육회, Beef Tarte',
    description:
      'Yukhoe is a dish of thinly sliced raw beef seasoned with soy sauce, salt, and sesame oil. Similar to beef tartare, and it is usually served with julienned pear and an egg yolk.',
  },
};

export default classesDir;

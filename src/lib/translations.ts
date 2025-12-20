export type Language = 'am' | 'en' | 'om' | 'so' | 'ti' | 'wo';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'om', name: 'Afaan Oromo', nativeName: 'Afaan Oromoo' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ' },
  { code: 'wo', name: 'Wolaytta', nativeName: 'Wolaytta' },
];

export const translations: Record<Language, Record<string, string>> = {
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.services': 'አገልግሎቶች',
    'nav.gallery': 'ምስሎች',
    'nav.about': 'ስለ እኛ',
    'nav.contact': 'አግኙን',
    'nav.book': 'ቀጠሮ ይያዙ',

    // Hero
    'hero.tagline': 'ውበትዎ በባለሙያ እና በግል እንክብካቤ የሚጀምርበት ቦታ',
    'hero.cta.book': 'ቀጠሮ ይያዙ',
    'hero.cta.services': 'አገልግሎቶችን ይመልከቱ',

    // Preloader
    'preloader.tagline': 'የዕለት ተዕለት ኑሮዎ ውበት የሚሆንበት',

    // Social Proof
    'social.rating': 'የGoogle ደረጃ',
    'social.clients': '150+ ደስተኛ ደንበኞች በአዲስ አበባ',

    // Reviews
    'reviews.title': 'ደንበኞቻችን ምን ይላሉ',
    'review.1': 'የሚያዳምጡ ባለሙያዎች፣ ንጹህ ቦታ፣ እና ድንቅ ውጤቶች።',
    'review.1.author': 'ሜሮን ተ.',
    'review.2': 'ሁልጊዜ እዚህ ስመጣ ደስተኛ ነኝ። ወዳጃዊ እና ባለሙያ ናቸው።',
    'review.2.author': 'ሳራ ኤ.',
    'review.3': 'ለሰርግ ፀጉሬን እዚህ አሰራሁ። በጣም ድንቅ ነበር!',
    'review.3.author': 'ሃና ኬ.',
    'review.4': 'ጥፍሬን በጣም ውብ አድርገው አሰሩልኝ። ሁሌም እዚህ ነው የምመጣው!',
    'review.4.author': 'ቤዛዊት ገ.',
    'review.5': 'ለልደቴ ሜካፕ አሰራሁ። ሁሉም ሲያዩኝ ተገረሙ። አመሰግናለሁ!',
    'review.5.author': 'ፍሬህይወት ም.',
    'review.6': 'ምርጥ አገልግሎት በተመጣጣኝ ዋጋ። ለጓደኞቼ ሁሉ እመክራለሁ።',
    'review.6.author': 'ሰላማዊት በ.',

    // Services
    'services.title': 'አገልግሎቶቻችን',
    'services.subtitle': 'እያንዳንዱ አገልግሎት በፍቅር እና በትኩረት ይከናወናል',
    'services.hair': 'ፀጉር',
    'services.hair.desc': 'ሽመና፣ ቆረጣ፣ ቀለም፣ እና ልዩ ዘይቤዎች',
    'services.nails': 'ጥፍር',
    'services.nails.desc': 'ማኒኪዩር፣ ፔዲኪዩር፣ እና የጥበብ ዲዛይኖች',
    'services.makeup': 'ሜካፕ',
    'services.makeup.desc': 'የሠርግ፣ ልዩ አጋጣሚ፣ እና የዕለት ውበት',
    'services.lashes': 'ሽፋሽፍት እና ዋክሲንግ',
    'services.lashes.desc': 'የሽፋሽፍት ማራዘሚያ እና ለስላሳ ቆዳ',
    'services.skincare': 'የቆዳ እንክብካቤ',
    'services.skincare.desc': 'የፊት መታጠብ እና የማደስ ህክምናዎች',
    'services.view': 'ዝርዝር ይመልከቱ',

    // Gallery
    'gallery.title': 'ስራዎቻችን',
    'gallery.subtitle': 'ውበት በእያንዳንዱ ዝርዝር ውስጥ',

    // About
    'about.title': 'ስለ ኑሃስ ቢዩቲ ጋርደን',
    'about.story': 'ኑሃስ ቢዩቲ ጋርደን በ ቦሌ አዲስ አበባ ውስጥ በፍቅር እና በእንክብካቤ የተመሰረተ ነው። እያንዳንዱ ደንበኛ ልዩ ስለሆነ ግላዊ እና ባለሙያ አገልግሎት እናቀርባለን።',
    'about.values.1': 'ባለሙያ ቡድን',
    'about.values.2': 'ንጹህ እና ደህንነቱ የተጠበቀ',
    'about.values.3': 'ግላዊ እንክብካቤ',

    // Booking
    'booking.title': 'ቀጠሮ ይያዙ',
    'booking.subtitle': 'ውበትዎ ይጀምራል',
    'booking.name': 'ሙሉ ስም',
    'booking.phone': 'ስልክ / WhatsApp',
    'booking.email': 'ኢሜይል',
    'booking.service': 'አገልግሎት',
    'booking.date': 'ቀን',
    'booking.time': 'ሰዓት',
    'booking.notes': 'ማስታወሻ',
    'booking.submit': 'ጥያቄ ላክ',
    'booking.success': 'ጥያቄዎ ተልኳል! በቅርብ እናገኝዎታለን።',
    'booking.select': 'ይምረጡ',

    // Location
    'location.title': 'ይጎብኙን',
    'location.address': 'ቦሌ — ከዮጎ ቤተክርስቲያን አጠገብ፣ ሪያሊቲ ፕላዛ',
    'location.hours': 'ሰኞ - እሁድ: ከ9:30 ጠዋት - 8:00 ማታ',
    'location.cta': 'ጉብኝትዎን ያቅዱ',

    // Contact
    'contact.title': 'አግኙን',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'ይደውሉ',

    // Footer
    'footer.tagline': 'ውበት፣ እንክብካቤ፣ እና በራስ መተማመን — በየቀኑ።',
    'footer.rights': 'መብቱ በሙሉ የተጠበቀ ነው',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',

    // Hero
    'hero.tagline': 'Where your beauty story begins with expert care and a personal touch',
    'hero.cta.book': 'Book Your Visit',
    'hero.cta.services': 'Explore Services',

    // Preloader
    'preloader.tagline': 'Where Your Everyday Becomes Beautiful',

    // Social Proof
    'social.rating': 'Google Rating',
    'social.clients': '150+ happy clients in Addis Ababa',

    // Reviews
    'reviews.title': 'What Our Clients Say',
    'review.1': 'Listening stylists, clean space, and great results.',
    'review.1.author': 'Meron T.',
    'review.2': 'I always leave feeling happy. Friendly and professional.',
    'review.2.author': 'Sara E.',
    'review.3': 'Had my wedding hair done here. Absolutely stunning!',
    'review.3.author': 'Hana K.',
    'review.4': 'They did my nails so beautifully. This is my go-to salon now!',
    'review.4.author': 'Bezawit G.',
    'review.5': 'Got my birthday makeup done here. Everyone was amazed. Thank you!',
    'review.5.author': 'Firehiwot M.',
    'review.6': 'Best service at affordable prices. I recommend to all my friends.',
    'review.6.author': 'Selamawit B.',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Each service is delivered with love and attention to detail',
    'services.hair': 'Hair',
    'services.hair.desc': 'Braiding, cuts, coloring, and signature styles',
    'services.nails': 'Nails',
    'services.nails.desc': 'Manicure, pedicure, and artistic designs',
    'services.makeup': 'Makeup',
    'services.makeup.desc': 'Bridal, special occasions, and everyday beauty',
    'services.lashes': 'Lashes & Waxing',
    'services.lashes.desc': 'Lash extensions and smooth skin treatments',
    'services.skincare': 'Skincare',
    'services.skincare.desc': 'Facials and rejuvenating treatments',
    'services.view': 'View Details',

    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'Beauty in every detail',

    // About
    'about.title': 'About Nuhas Beauty Garden',
    'about.story': 'Nuhas Beauty Garden was founded with love and care in Bole, Addis Ababa. We believe every client is unique, so we provide personalized and professional service.',
    'about.values.1': 'Expert Team',
    'about.values.2': 'Clean & Safe',
    'about.values.3': 'Personal Care',

    // Booking
    'booking.title': 'Book Your Visit',
    'booking.subtitle': 'Your beauty journey starts here',
    'booking.name': 'Full Name',
    'booking.phone': 'Phone / WhatsApp',
    'booking.email': 'Email',
    'booking.service': 'Service',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.notes': 'Notes',
    'booking.submit': 'Send Request',
    'booking.success': 'Request sent! We will contact you soon.',
    'booking.select': 'Select',

    // Location
    'location.title': 'Visit Us',
    'location.address': 'Bole — Next to Yougo Church, Reality Plaza',
    'location.hours': 'Monday - Sunday: 9:30 AM - 8:00 PM',
    'location.cta': 'Plan Your Visit',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Call Us',

    // Footer
    'footer.tagline': 'Beauty, care, and confidence — every day.',
    'footer.rights': 'All rights reserved',
  },
  om: {
    // Navigation
    'nav.home': 'Mana',
    'nav.services': 'Tajaajila',
    'nav.gallery': 'Suuraa',
    'nav.about': 'Waa\'ee Keenya',
    'nav.contact': 'Nu Quunnamaa',
    'nav.book': 'Beellama Qabadhu',

    // Hero
    'hero.tagline': 'Miidhagni kee kunuunsa ogeeyyii fi tuttuqaa dhuunfaatiin bakka itti jalqabu',
    'hero.cta.book': 'Beellama Qabadhu',
    'hero.cta.services': 'Tajaajila Ilaali',

    // Preloader
    'preloader.tagline': 'Guyyaa Guyyaan Kee Miidhagaa Itti Ta\'u',

    // Social Proof
    'social.rating': 'Sadarkaa Google',
    'social.clients': 'Maamiltoota gammadan 150+ Finfinnee keessatti',

    // Reviews
    'reviews.title': 'Maamiltonni Keenya Maal Jedhu',
    'review.1': 'Ogeeyyii dhaggeeffatan, bakka qulqulluu, fi bu\'aa gaarii.',
    'review.1.author': 'Meron T.',
    'review.2': 'Yeroo hunda gammadee baha. Michuu fi ogummaa.',
    'review.2.author': 'Sara E.',
    'review.3': 'Rifeensa cidha koo asitti hojjechise. Baay\'ee miidhaga!',
    'review.3.author': 'Hana K.',
    'review.4': 'Qeensa koo baay\'ee bareedaa godhan. Yeroo hunda asuman dhufa!',
    'review.4.author': 'Bezawit G.',
    'review.5': 'Guyyaa dhaloota kootiif meekaappii asitti hojjechise. Namni hundi dinqisiifate!',
    'review.5.author': 'Firehiwot M.',
    'review.6': 'Tajaajila gaarii gatii madaalawaa ta\'een. Hiriyyoota koo hundaaf nan gorse.',
    'review.6.author': 'Selamawit B.',

    // Services
    'services.title': 'Tajaajila Keenya',
    'services.subtitle': 'Tajaajilli hundi jaalalaafi xiyyeeffannoon kenname',
    'services.hair': 'Rifeensa',
    'services.hair.desc': 'Shaanee, muruu, halluu, fi akkaataa addaa',
    'services.nails': 'Qeensa',
    'services.nails.desc': 'Maanikyuurii, pedikyuurii, fi dizaayinii',
    'services.makeup': 'Meekaappii',
    'services.makeup.desc': 'Cidhaaf, yeroo addaa, fi miidhagina guyyaa',
    'services.lashes': 'Baallee Ijaa fi Waaksii',
    'services.lashes.desc': 'Baallee ijaa dheereffachuu fi gogaa lallaafaa',
    'services.skincare': 'Kunuunsa Gogaa',
    'services.skincare.desc': 'Fuula dhiqachuu fi haaromsa',
    'services.view': 'Bal\'inaan Ilaali',

    // Gallery
    'gallery.title': 'Hojii Keenya',
    'gallery.subtitle': 'Miidhagina bal\'ina hunda keessatti',

    // About
    'about.title': 'Waa\'ee Nuhas Beauty Garden',
    'about.story': 'Nuhas Beauty Garden jaalalaafi kunuunsaan Boolee, Finfinnee keessatti hundeeffame. Maamiltoota hunda addatti waan ilaalluuf tajaajila dhuunfaafi ogummaa kennina.',
    'about.values.1': 'Garee Ogummaa',
    'about.values.2': 'Qulqulluu & Nageenya',
    'about.values.3': 'Kunuunsa Dhuunfaa',

    // Booking
    'booking.title': 'Beellama Qabadhu',
    'booking.subtitle': 'Imala miidhagina kee as jalqaba',
    'booking.name': 'Maqaa Guutuu',
    'booking.phone': 'Bilbila / WhatsApp',
    'booking.email': 'Imeelii',
    'booking.service': 'Tajaajila',
    'booking.date': 'Guyyaa',
    'booking.time': 'Sa\'aatii',
    'booking.notes': 'Yaadannoo',
    'booking.submit': 'Gaaffii Ergi',
    'booking.success': 'Gaaffiin ergame! Dafnee si quunnamna.',
    'booking.select': 'Filadhu',

    // Location
    'location.title': 'Nu Daawwadhu',
    'location.address': 'Boolee — Mana Kiristaanaa Yougo bira, Reality Plaza',
    'location.hours': 'Wiixata - Dilbata: 9:30 WD - 8:00 WB',
    'location.cta': 'Daawwannaa Kee Karoorssi',

    // Contact
    'contact.title': 'Nu Quunnamaa',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Nutti Bilbili',

    // Footer
    'footer.tagline': 'Miidhagina, kunuunsa, fi ofitti amanamummaa — guyyaa hunda.',
    'footer.rights': 'Mirgi hunduu eegame',
  },
  so: {
    // Navigation
    'nav.home': 'Guriga',
    'nav.services': 'Adeegyada',
    'nav.gallery': 'Sawirrada',
    'nav.about': 'Naga Noo',
    'nav.contact': 'Nala Soo Xiriir',
    'nav.book': 'Ballan Qabso',

    // Hero
    'hero.tagline': 'Halkaas oo sheekada quruxdaadu ka bilowdo daryeel khabiir ah iyo taaban shakhsi ah',
    'hero.cta.book': 'Ballan Qabso',
    'hero.cta.services': 'Adeegyada Eeg',

    // Preloader
    'preloader.tagline': 'Halka Maalinkaagu Qurux Noqdo',

    // Social Proof
    'social.rating': 'Qiimeynta Google',
    'social.clients': '150+ macmiil faraxsan oo Addis Ababa ah',

    // Reviews
    'reviews.title': 'Maxay Macaamiisheenu Yiraahdaan',
    'review.1': 'Khabiiro dhageysta, meel nadiif ah, iyo natiijooyin wanaagsan.',
    'review.1.author': 'Meron T.',
    'review.2': 'Mar kasta oo aan tago waan ku faraxsanahay. Saaxiibtinimo iyo xirfad.',
    'review.2.author': 'Sara E.',
    'review.3': 'Timahayga arooska halkan ayaan ka sameeyay. Aad buu u qurxoon!',
    'review.3.author': 'Hana K.',
    'review.4': 'Cidiyahayga si qurux badan ayay u sameeyeen. Halkan ayaan mar kasta u imaanayaa!',
    'review.4.author': 'Bezawit G.',
    'review.5': 'Qurxintaydii maalinta dhalashada halkan ayaan ka sameystay. Qof kasta wuu yaabay!',
    'review.5.author': 'Firehiwot M.',
    'review.6': 'Adeeg wanaagsan qiimo jaban. Saaxiibadayda oo dhan waan ku talinayaa.',
    'review.6.author': 'Selamawit B.',

    // Services
    'services.title': 'Adeegyadanada',
    'services.subtitle': 'Adeeg kasta waxaa lagu sameeyaa jacayl iyo feejignaan',
    'services.hair': 'Timaha',
    'services.hair.desc': 'Tolid, jar, midab, iyo qaabab gaar ah',
    'services.nails': 'Cidiyaha',
    'services.nails.desc': 'Manicure, pedicure, iyo naqshadeyn farshaxan',
    'services.makeup': 'Qurxinta',
    'services.makeup.desc': 'Aroos, munaasabadaha, iyo quruxda maalinlaha',
    'services.lashes': 'Baalasha & Waxing',
    'services.lashes.desc': 'Kordhinta baalasha iyo maqaarka jilicsan',
    'services.skincare': 'Daryeelka Maqaarka',
    'services.skincare.desc': 'Nadaafinta wejiga iyo daaweynta cusbooneysiinta',
    'services.view': 'Faahfaahin Eeg',

    // Gallery
    'gallery.title': 'Shaqadanada',
    'gallery.subtitle': 'Qurux faahfaahin kasta gudaheeda ah',

    // About
    'about.title': 'Ku Saabsan Nuhas Beauty Garden',
    'about.story': 'Nuhas Beauty Garden waxaa lagu aasaasay jacayl iyo daryeel Bole, Addis Ababa. Macmiil kasta oo gaar ah ayaan u aaminsanahay, sidaas darteed adeeg shakhsiyeysan iyo xirfad ayaan bixinaa.',
    'about.values.1': 'Koox Khabiiro ah',
    'about.values.2': 'Nadiif & Badbaado',
    'about.values.3': 'Daryeel Shakhsi ah',

    // Booking
    'booking.title': 'Ballan Qabso',
    'booking.subtitle': 'Safarka quruxdaadu halkan ka bilaabmayaa',
    'booking.name': 'Magaca Buuxa',
    'booking.phone': 'Telefoon / WhatsApp',
    'booking.email': 'Iimayl',
    'booking.service': 'Adeegga',
    'booking.date': 'Taariikhda',
    'booking.time': 'Waqtiga',
    'booking.notes': 'Qoraalka',
    'booking.submit': 'Codsiga Dir',
    'booking.success': 'Codsiga la diray! Dhawaan kuula soo xiriiri doonaa.',
    'booking.select': 'Dooro',

    // Location
    'location.title': 'Naga Soo Booqo',
    'location.address': 'Bole — Kaniisadda Yougo agteeda, Reality Plaza',
    'location.hours': 'Isniin - Axad: 9:30 subax - 8:00 fiidkii',
    'location.cta': 'Booqashada Qorsho',

    // Contact
    'contact.title': 'Nala Soo Xiriir',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Naga Wac',

    // Footer
    'footer.tagline': 'Qurux, daryeel, iyo kalsooni — maalin kasta.',
    'footer.rights': 'Dhammaan xuquuqaha way dhawran yihiin',
  },
  ti: {
    // Navigation
    'nav.home': 'መበገሲ',
    'nav.services': 'ኣገልግሎታት',
    'nav.gallery': 'ስእልታት',
    'nav.about': 'ብዛዕባና',
    'nav.contact': 'ርኸቡና',
    'nav.book': 'ቆጸራ ሓዙ',

    // Hero
    'hero.tagline': 'ውበትኩም ብክኢላታት ከምኡውን ውልቃዊ ክንክን ዝጅምረሉ ቦታ',
    'hero.cta.book': 'ቆጸራ ሓዙ',
    'hero.cta.services': 'ኣገልግሎታት ርኣዩ',

    // Preloader
    'preloader.tagline': 'መዓልታዊ ህይወትኩም ውቡእ ዝኾነሉ',

    // Social Proof
    'social.rating': 'ደረጃ Google',
    'social.clients': '150+ ሕጉሳት ዓማዊል ኣብ ኣዲስ ኣበባ',

    // Reviews
    'reviews.title': 'ዓማዊልና እንታይ ይብሉ',
    'review.1': 'ዝሰምዑ ክኢላታት፣ ጽሩይ ቦታ፣ ከምኡውን ጽቡቕ ውጽኢት።',
    'review.1.author': 'ሜሮን ተ.',
    'review.2': 'ኩሉ ግዜ ብሓጎስ እወጽእ። ሕውነት ከምኡውን ክኢላነት።',
    'review.2.author': 'ሳራ ኤ.',
    'review.3': 'ጸጉሪ መርዓይ ኣብዚ ገይረ። ኣዝዩ ጽቡቕ!',
    'review.3.author': 'ሃና ኬ.',
    'review.4': 'ጽፍረይ ኣዝዩ ጽቡቕ ገይሮምለይ። ኩሉ ግዜ ኣብዚ እየ ዝመጽእ!',
    'review.4.author': 'ቤዛዊት ገ.',
    'review.5': 'ሜካፕ ዕለት ልደተይ ኣብዚ ገይረ። ኩሉ ሰብ ተገረመ!',
    'review.5.author': 'ፍረህይወት ም.',
    'review.6': 'ዝበለጸ ኣገልግሎት ብተመጣጣኒ ዋጋ። ንኹሎም የዕሩኽተይ እምሕጸኖም።',
    'review.6.author': 'ሰላማዊት በ.',

    // Services
    'services.title': 'ኣገልግሎታትና',
    'services.subtitle': 'ነፍሲ ወከፍ ኣገልግሎት ብፍቕርን ትኩረትን ይወሃብ',
    'services.hair': 'ጸጉሪ',
    'services.hair.desc': 'ምጥላፍ፣ ምቚራጽ፣ ሕብሪ፣ ከምኡውን ፍሉይ ስታይላት',
    'services.nails': 'ጽፍሪ',
    'services.nails.desc': 'ማኒኪዩር፣ ፔዲኪዩር፣ ከምኡውን ስነ-ጥበባዊ ዲዛይናት',
    'services.makeup': 'ሜካፕ',
    'services.makeup.desc': 'ንመርዓ፣ ፍሉይ ኣጋጣሚታት፣ ከምኡውን መዓልታዊ ውበት',
    'services.lashes': 'ሽፋሽፍቲ ከምኡውን ዋክሲንግ',
    'services.lashes.desc': 'ምንዋሕ ሽፋሽፍቲ ከምኡውን ልስሉስ ቆርበት',
    'services.skincare': 'ክንክን ቆርበት',
    'services.skincare.desc': 'ምሕጻብ ገጽ ከምኡውን ምሕዳስ ሕክምናታት',
    'services.view': 'ዝርዝር ርኣዩ',

    // Gallery
    'gallery.title': 'ስራሕና',
    'gallery.subtitle': 'ውበት ኣብ ነፍሲ ወከፍ ዝርዝር',

    // About
    'about.title': 'ብዛዕባ ኑሃስ ቢዩቲ ጋርደን',
    'about.story': 'ኑሃስ ቢዩቲ ጋርደን ብፍቕርን ክንክንን ኣብ ቦሌ ኣዲስ ኣበባ ተመስሪቱ። ነፍሲ ወከፍ ዓሚል ፍሉይ ስለዝኾነ ውልቃዊን ክኢላነታውን ኣገልግሎት ንህብ።',
    'about.values.1': 'ክኢላ ጉጅለ',
    'about.values.2': 'ጽሩይን ውሑስን',
    'about.values.3': 'ውልቃዊ ክንክን',

    // Booking
    'booking.title': 'ቆጸራ ሓዙ',
    'booking.subtitle': 'ጉዕዞ ውበትኩም ኣብዚ ይጅምር',
    'booking.name': 'ምሉእ ስም',
    'booking.phone': 'ቴሌፎን / WhatsApp',
    'booking.email': 'ኢመይል',
    'booking.service': 'ኣገልግሎት',
    'booking.date': 'ዕለት',
    'booking.time': 'ሰዓት',
    'booking.notes': 'መዘክር',
    'booking.submit': 'ሕቶ ስደዱ',
    'booking.success': 'ሕቶ ተሰዲዱ! ኣብ ቀረባ ክንረኽበኩም ኢና።',
    'booking.select': 'ምረጹ',

    // Location
    'location.title': 'ብጻሕና',
    'location.address': 'ቦሌ — ጥቓ ቤተክርስትያን ዮጎ፣ ሪያሊቲ ፕላዛ',
    'location.hours': 'ሰኑይ - ሰንበት: 9:30 ቅ.ቐ - 8:00 ድ.ቐ',
    'location.cta': 'ምብጻሕኩም ውጠኑ',

    // Contact
    'contact.title': 'ርኸቡና',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'ደውሉ',

    // Footer
    'footer.tagline': 'ውበት፣ ክንክን፣ ከምኡውን ምትእምማን — መዓልቲ መዓልቲ።',
    'footer.rights': 'ኩሉ መሰላት ዝተሓለወ',
  },
  wo: {
    // Navigation
    'nav.home': 'Ketha',
    'nav.services': 'Oosota',
    'nav.gallery': 'Misiileta',
    'nav.about': 'Nuubaa',
    'nav.contact': 'Nuna Gakkite',
    'nav.book': 'Koyiro Oykka',

    // Hero
    'hero.tagline': 'Ne loobiya erisiya ginannanne assi toochoy doommiyo sohuwaa',
    'hero.cta.book': 'Koyiro Oykka',
    'hero.cta.services': 'Oosota Beya',

    // Preloader
    'preloader.tagline': 'Ne Gallassay Loobiya Gidiyo Sohuwaa',

    // Social Proof
    'social.rating': 'Google Heeshshaa',
    'social.clients': '150+ ufayttida asata Addis Ababaa',

    // Reviews
    'reviews.title': 'Nu Asatay Woygiyoonaa',
    'review.1': 'Siyiyaageetaa, geeshsha sohuwaa, loobiya ayfeta.',
    'review.1.author': 'Meron T.',
    'review.2': 'Ubba wode ufayttada kiyays. Siiqettiyaanne erisiyaa.',
    'review.2.author': 'Sara E.',
    'review.3': 'Ta bullacha huuphiya hagan oottadis. Keehi loobiis!',
    'review.3.author': 'Hana K.',
    'review.4': 'Ta xuguntta keehi loobiyaa oottidosona. Ubba wode haa yays!',
    'review.4.author': 'Bezawit G.',
    'review.5': 'Ta yeletta gallassaa meekappiya hagan oottadis. Ubba asay malaaleettidosona!',
    'review.5.author': 'Firehiwot M.',
    'review.6': 'Keehi loobiya oosoy gatiya giigissidaagan. Ta laggetau ubbau zoraas.',
    'review.6.author': 'Selamawit B.',

    // Services
    'services.title': 'Nu Oosota',
    'services.subtitle': 'Ubba oosoy siiquwaaninne loobiya ayfiyaan imetees',
    'services.hair': 'Huuphiya',
    'services.hair.desc': 'Xaaxiya, qanxxiya, kaluwaa, dumma sityaaleta',
    'services.nails': 'Xuguntta',
    'services.nails.desc': 'Manikiyuuriya, pedikiyuuriya, loobiya dizayneta',
    'services.makeup': 'Meekappiya',
    'services.makeup.desc': 'Bullachau, dumma wodiyau, gallassa loobiya',
    'services.lashes': 'Ayfiya Iketa & Waaksiya',
    'services.lashes.desc': 'Ayfiya iketaa adussiyaa gallidi liiqo gogaa',
    'services.skincare': 'Gogaa Naagiya',
    'services.skincare.desc': 'Ayfiyaa meechiyaanne ooraxa ootiya',
    'services.view': 'Gujja Beya',

    // Gallery
    'gallery.title': 'Nu Oosuwaa',
    'gallery.subtitle': 'Ubba qommuwa giddon loobiya',

    // About
    'about.title': 'Nuhas Beauty Garden Baggaara',
    'about.story': 'Nuhas Beauty Garden siiquwaanne naaguwan Bole Addis Ababaa giddon essettidaagaa. Ubba asay dumma gidiyo gishshau assi dummanne erisiya oosuwaa immoos.',
    'about.values.1': 'Erisiya Citaa',
    'about.values.2': 'Geeshsha & Saro',
    'about.values.3': 'Assi Naagiya',

    // Booking
    'booking.title': 'Koyiro Oykka',
    'booking.subtitle': 'Ne loobiya ogee hagan doomees',
    'booking.name': 'Kumetta Suntta',
    'booking.phone': 'Silkiya / WhatsApp',
    'booking.email': 'Imeeliya',
    'booking.service': 'Oosuwaa',
    'booking.date': 'Gallassaa',
    'booking.time': 'Saatiya',
    'booking.notes': 'Qofaa',
    'booking.submit': 'Oyshaa Yedda',
    'booking.success': 'Oyshay kiitettiis! Mata wode nena gakkana.',
    'booking.select': 'Doora',

    // Location
    'location.title': 'Nuna Yaa',
    'location.address': 'Bole — Yougo Woosa Keettaa matan, Reality Plaza',
    'location.hours': 'Saynno - Sambata: 9:30 WD - 8:00 WB',
    'location.cta': 'Ne Yiyaa Giigissa',

    // Contact
    'contact.title': 'Nuna Gakkite',
    'contact.whatsapp': 'WhatsApp',
    'contact.call': 'Xeesa',

    // Footer
    'footer.tagline': 'Loobiya, naagiya, ammanetettaa — gallassa ubban.',
    'footer.rights': 'Ubba haqqati naagettidaagaa',
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang]?.[key] || translations['en']?.[key] || key;
}

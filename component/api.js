import {toast} from "react-toastify";

export const byId = (id) => document.getElementById(id).value;
export const objById = (id) => document.getElementById(id);
export const language = () => {
    let lang;
    if (typeof window !== 'undefined') lang = localStorage.getItem("lang");

    if (lang === "en") {
        return {
            name: "Oleo butter 200 gr",
            description: "VERSATILE oleos FOR ANY IDEA",
            more: "More",
            contact: "Contact",
            catalog: "View the catalog",
            downloadCatalog: "Download the catalog",
            fullCatalog: "You can see all our products in our catalog",
            pastries: "\"Oleo\" Pastries",
            sweets: "Our sweets made from oleo margarine and butter. Check out our Margarine recipes",
            nextDish: "Next dish",
            recipe: "View the recipe",
            aboutUs: "about Us",
            aboutInfo: "\"BARAKA FOOD\" LLC was established in 2012 and produces butter, vegetable-cream spreads and margarines under the OLEO trademark. Our wide range of products combine functionality, taste and texture with high nutritional value. The team of professionals who produce the products are very responsible in selecting raw materials for the production of safe and high-quality products.",
            videoClip: "video clip",
            cooperate: "We invite you to cooperate",
            enterpriseAbout: "About \"OLEO\" LLC enterprise",
            companiesOffer: "We invite retail chains, wholesale companies, and manufacturers to cooperate:",
            mainProviders: "Major HoReCa providers",
            kindergartensAndHospitals: "Kindergartens and hospitals",
            cateringEstablishments: "Catering establishments",
            confectioneryEnterprises: "Confectionery enterprises",
            bakeries: "bakeries",
            socialInstitutions: "Social institutions",
            purchase: "purchase",
            learnMore: "Learn more",
            newsAndEvents: "News and events",
            industryNews: "You are here the latest news in the industry",
            meetCan: "you can meet",
            allNews: "All news",
            lastUpdate: "Last updated on 21.12.2022",
            ourAdvantages: "Our advantages",
            qualityProducts: "Quality products",
            countryAgroIndustrial: "The agro-industrial complex of our country is developing steadily and rapidly",
            naturalProduct: "Natural Product",
            productExperience: "products are 100% natural and are produced based on many years of experience.",
            greatTaste: "Great taste",
            excellentTaste: "Excellent taste and pleasant aroma",
            oleoWhere: "Where can I buy oleo oils?",
            oleoCenter: "You can buy oleo oils from Makro Havas stores. You can buy oleo oils from Makro Havas stores.",
            whatDealer: "What to do to become a dealer for our margarines?",
            whatBenefits: "What are the benefits of our oil?",
            whatMaximumAmount: "What is the maximum amount I can buy?",
            forSuggestionsAndQuestions: "For suggestions and questions",
            ourOperators: "Our operators will contact you within 24 hours",
            fullName: "Your first name and last name",
            phoneNumber: "PhoneNumber",
            message: "Leave your message...",
            sendData: "Sending data",
            sendInquiry: "Submit an inquiry",
            selectSoha: "Select a field",
            oleoAbout: "\"BARAKA FOOD\" LLC was established in 2012 and produces butter, vegetable-cream spreads and margarines under the OLEO trademark. Our wide range of products combine functionality, taste and texture with high nutritional value. The team of professionals who produce the products is very responsible in the selection of raw materials for the production of safe and high-quality products. BARAKA FOOD LLC was established in 2012. BARAKA FOOD LLC was established in 2012. OLEO is engaged in the production of butter, vegetable-cream spreads and margarines under the trade mark.",
            ourTeam: "Our team",
            productNumbers: "The production of our company is in numbers",
            oleoColl: "contact us easily and start cooperation",

        }
    }
    return {
        name: "Oleo saryog’lari 200 gr",
        description: "HAR QANDAY G'OYA UCHUN KO'P qirrali “oleo” saryog’lari",
        more: "Batafsil",
        contact: "Aloqa",
        catalog: "Katalogni ko’rish",
        downloadCatalog: "Katalogni Yuklab olish",
        fullCatalog: "Katalogimizda barcha tovarlarimizni ko‘rishingiz mumkin",
        pastries: "\"Oleo\" pishiriqlari",
        sweets: "Oleo margarin va saryog’laridan tayyorlangan psihiriqlarimiz. Bizning Margarinlarimizdan tayyorlangan narsalarni retseptini koring",
        nextDish: "Kiyingi Taom",
        recipe: "Retseptni ko'ring",
        aboutUs: "Biz Haqimizda",
        aboutInfo: "“BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng assortimenti funksionallik, lazzat va teksturani yuqori ozuqaviy qiymat bilan birlashtiradi. Mahsulotlarni ishlab chiqaruvchi professionallar jamoasi xavfsiz va yuqori sifatli mahsulotlarni ishlab chiqarish uchun xom ashyo tanlashda juda mas`uliyatli.\n",
        videoClip: "Vdeo Rolik",
        cooperate: "Sizni hamkorlikka taklif qilamiz",
        enterpriseAbout: "“OLEO” MCHJ korxonasi haqida",
        companiesOffer: "Biz chakana savdo tarmoqlari, ulgurji kompaniyalar va ishlab chiqaruvchilarni hamkorlikka taklif qilamiz:",
        mainProviders: "Asosiy HoReCa provayderlari",
        kindergartensAndHospitals: "Bolalar bog'chalari va kasalxonalar",
        cateringEstablishments: "Umumiy ovqatlanish korxonalari",
        confectioneryEnterprises: "Confectionery enterprises",
        bakeries: "nonvoyxonalar",
        socialInstitutions: "Ijtimoiy institutlar",
        purchase: "sotib olish",
        learnMore: "Batafsil tanishish",
        newsAndEvents: "Yangiliklar va voqea hodisalar",
        industryNews: "Siz bu yerda sohadagi songi yangiliklar",
        meetCan: "bilan tanishishingiz mumkin",
        allNews: "Barcha yangilikla",
        lastUpdate:"21.12.2022 da yangilandi oxirgi marta",
        ourAdvantages: "Bizning afzalliklarimiz",
        qualityProducts: "Sifatli mahsulotlardan",
        countryAgroIndustrial: "Mamlakatimiz agrosanoat kompleksining barqaror va jadal rivojlanayotgan",
        naturalProduct: "Tabiy Mahsulot",
        productExperience: "mahsulotlari 100% tabiiy bo'lib, ko'p yillik tajirbalar asosida ishlab chiqariladi.",
        greatTaste: "Ajoyib ta'm",
        excellentTaste: "Ajoyib ta'm va yoqimli xushbo'y hid",
        oleoWhere: "Oleo saryog`larini qayerdan sotib olsam bo’ladi?",
        oleoCenter: "Siz oleo saryoglarinini Makro Havas dokonlardan harid qilishingiz mukin. Sizoleo saryoglarinini Makro Havas dokonlardan harid qilishingiz mukin.",
        whatDealer: "Margarinlarimizga dillerlik qilish uchun nima qilish kerak?",
        whatBenefits: "Saryog’imizning foydalilik taraflari nimada?",
        whatMaximumAmount: "Maksimum qancha miqdorda sotib ola olaman?",
        forSuggestionsAndQuestions: "Taklif va savollar uchun",
        ourOperators: "Bizning operatorilarimiz 24 soat ichida siz bilan bog’lanishadi",
        fullName: "Isim famliyangiz",
        phoneNumber: "Telefon raqamingiz",
        message: "Xabaringizni qoldiring...",
        sendData: "Ma’lumotlarni yuborish",
        sendInquiry: "So'rov yuboring",
        selectSoha: "Sohangizni tanlang",
        oleoAbout: "“BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar ishlab chiqarish bilan shug‘ullanadi. Mahsulotlarimizning keng assortimenti funksionallik, lazzat va teksturani yuqori ozuqaviy qiymat bilan birlashtiradi. Mahsulotlarni ishlab chiqaruvchi professionallar jamoasi xavfsiz va yuqori sifatli mahsulotlarni ishlab chiqarish uchun xom ashyo tanlashda juda mas'uliyatli.“BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib,“BARAKA FOOD” MChJ 2012-yilda tashkil etilgan bo‘lib, OLEO savdo belgisi ostida sariyog‘, sabzavot-qaymoq yormalari va margarinlar ishlab chiqarish bilan shug‘ullanadi.",
        ourTeam: "Bizning jamoamiz",
        productNumbers: "Kompaniyamiz ishlab chiqarishi sonlarda",
        oleoColl: "biz bilan oson bog’laning va hamkorlikni boshlang",
    }

}
export const sendMessage = (message) => fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message} `, {
    method: "GET"
});

export function CommendSend() {
    let sendButton = objById("sendMessage");
    let fullName = byId("cFullName");
    let phoneNumber = byId("cPhoneNumber");
    let comment = byId("comment");
    if (fullName === "" || phoneNumber === "" || comment === "") {
        toast.error("barcha malumot tuldirilishi shart!");
    } else sendMessage(`Ism: ${fullName}, %0ATelefon Raqam: ${phoneNumber}, %0AComment: ${comment}`).then(() => {
        toast.success("send message");
        sendButton.innerText = "Admin javobini kuring 👍";
        sendButton.disabled = true;
        objById("cFullName").value = "";
        objById("cPhoneNumber").value = "";
        objById("comment").value = "";
    });

    setTimeout(() => {
        sendButton.innerText = language().sendData;
        sendButton.disabled = false;
    }, 500000);
}

export const bot = {
    TOKEN: "5169354010:AAFlFQCD4lk29l9FXfKYb7nTzZnbsfOohy0", chatID: "1085241246",
}
// export const url = "http://localhost:3000/";
export const url = "https://oleo.pythonanywhere.com/";
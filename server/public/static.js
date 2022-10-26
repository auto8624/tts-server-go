/* 单位转换 */
function unitConversion(limit) {
    let size = "";
    if (limit < 0.1 * 1024) {                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    } else if (limit < 0.1 * 1024 * 1024) {            //小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + "KB"
    } else if (limit < 0.1 * 1024 * 1024 * 1024) {        //小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB"
    } else {                                            //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB"
    }

    let sizeStr = size + "";                        //转成字符串
    let index = sizeStr.indexOf(".");                    //获取小数点处的索引
    let dou = sizeStr.substr(index + 1, 2)            //获取小数点后两位的值
    if (dou == "00") {                                //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}

/* 语言选项的汉化 */
let cnLocalLanguage = {
    "af-ZA": "南非荷兰语（南非）",
    "am-ET": "阿姆哈拉语（埃塞俄比亚)",
    "ar-AE": "阿拉伯语（阿拉伯联合酋长国）",
    "ar-BH": "阿拉伯语（巴林）",
    "ar-DZ": "阿拉伯语（阿尔及利亚）",
    "ar-EG": "阿拉伯语（埃及）",
    "ar-IL": "阿拉伯语（以色列）",
    "ar-IQ": "阿拉伯语（伊拉克）",
    "ar-JO": "阿拉伯语（约旦）",
    "ar-KW": "阿拉伯语（科威特）",
    "ar-LB": "阿拉伯语（黎巴嫩）",
    "ar-LY": "阿拉伯语（利比亚）",
    "ar-MA": "阿拉伯语（摩洛哥）",
    "ar-OM": "阿拉伯语（阿曼）",
    "ar-PS": "阿拉伯语（巴勒斯坦占领区)",
    "ar-QA": "阿拉伯语（卡塔尔）",
    "ar-SA": "阿拉伯语（沙特阿拉伯)",
    "ar-SY": "阿拉伯语（叙利亚）",
    "ar-TN": "阿拉伯语（突尼斯）",
    "ar-YE": "阿拉伯语（也门）",
    "az-AZ": "阿塞拜疆语（阿塞拜疆）",
    "bg-BG": "保加利亚语（保加利亚)",
    "bn-BD": "孟加拉语（孟加拉国）",
    "bn-IN": "孟加拉语（印度）",
    "bs-BA": "波斯尼亚语（波斯尼亚)",
    "ca-ES": "加泰罗尼亚语（西班牙)",
    "cs-CZ": "捷克语（捷克）",
    "cy-GB": "威尔士语（英国）",
    "da-DK": "丹麦语（丹麦）",
    "de-AT": "德语（奥地利）",
    "de-CH": "德语（瑞士）",
    "de-DE": "德语（德国）",
    "el-GR": "希腊语（希腊)",
    "en-AU": "英语（澳大利亚）",
    "en-CA": "英语（加拿大）",
    "en-GB": "英语（英国）",
    "en-GH": "英语（加纳）",
    "en-HK": "英语（香港特别行政区）",
    "en-IE": "英语（爱尔兰）",
    "en-IN": "英语（印度）",
    "en-KE": "英语（肯尼亚）",
    "en-NG": "英语（尼日利亚）",
    "en-NZ": "英语（新西兰）",
    "en-PH": "英语（菲律宾）",
    "en-SG": "英语（新加坡）",
    "en-TZ": "英语（坦桑尼亚）",
    "en-US": "英语（美国）",
    "en-ZA": "英语（南非）",
    "es-AR": "西班牙语（阿根廷）",
    "es-BO": "西班牙语（玻利维亚）",
    "es-CL": "西班牙语（智利）",
    "es-CO": "西班牙语（哥伦比亚）",
    "es-CR": "西班牙语（哥斯达黎加）",
    "es-CU": "西班牙语（古巴）",
    "es-DO": "西班牙语（多米尼加共和国）",
    "es-EC": "西班牙语（厄瓜多尔）",
    "es-ES": "西班牙语 （西班牙)",
    "es-GQ": "西班牙语（赤道几内亚）",
    "es-GT": "西班牙语（危地马拉）",
    "es-HN": "西班牙语（洪都拉斯）",
    "es-MX": "西班牙语（墨西哥）",
    "es-NI": "西班牙（尼加拉瓜）",
    "es-PA": "西班牙语（巴拿马）",
    "es-PE": "西班牙语（秘鲁）",
    "es-PR": "西班牙语（波多黎各）",
    "es-PY": "西班牙语（巴拉圭）",
    "es-SV": "西班牙语（萨尔瓦多）",
    "es-US": "西班牙语（美国）",
    "es-UY": "西班牙语（乌拉圭）",
    "es-VE": "西班牙语（委内瑞拉）",
    "et-EE": "爱沙尼亚语（爱沙尼亚)",
    "eu-ES": "巴斯克语",
    "fa-IR": "波斯语（伊朗）",
    "fi-FI": "芬兰语（芬兰）",
    "fil-PH": "菲律宾语（菲律宾）",
    "fr-BE": "法语（比利时）",
    "fr-CA": "法语（加拿大）",
    "fr-CH": "法语（瑞士）",
    "fr-FR": "法语（法国）",
    "ga-IE": "爱尔兰语（爱尔兰）",
    "gl-ES": "加利西亚语",
    "gu-IN": "古吉拉特语（印度）",
    "he-IL": "希伯来语（以色列）",
    "hi-IN": "印地语（印度）",
    "hr-HR": "克罗地亚语（克罗地亚）",
    "hu-HU": "匈牙利语（匈牙利)",
    "hy-AM": "亚美尼亚语（亚美尼亚）",
    "id-ID": "印度尼西亚语（印度尼西亚)",
    "is-IS": "冰岛语（冰岛)",
    "it-CH": "意大利语（瑞士）",
    "it-IT": "意大利语（意大利）",
    "ja-JP": "日语（日本）",
    "jv-ID": "爪哇语（印度尼西亚）",
    "ka-GE": "格鲁吉亚语（格鲁吉亚）",
    "kk-KZ": "哈萨克语（哈萨克斯坦）",
    "km-KH": "高棉语（柬埔寨)",
    "kn-IN": "卡纳达语（印度）",
    "ko-KR": "韩语（韩国)",
    "lo-LA": "老挝语（老挝)",
    "lt-LT": "立陶宛语（立陶宛)",
    "lv-LV": "拉脱维亚语（拉脱维亚)",
    "mk-MK": "马其顿语（北马其顿共和国）",
    "ml-IN": "马拉雅拉姆语（印度）",
    "mn-MN": "蒙古语（蒙古）",
    "mr-IN": "马拉地语（印度）",
    "ms-MY": "马来语（马来西亚）",
    "mt-MT": "马耳他语（马耳他）",
    "my-MM": "缅甸语（缅甸)",
    "nb-NO": "挪威语（博克马尔语，挪威）",
    "ne-NP": "尼泊尔语（尼泊尔）",
    "nl-BE": "荷兰语（比利时）",
    "nl-NL": "荷兰语（荷兰）",
    "pl-PL": "波兰语（波兰）",
    "ps-AF": "普什图语（阿富汗）",
    "pt-BR": "葡萄牙语（巴西）",
    "pt-PT": "葡萄牙语（葡萄牙)",
    "ro-RO": "罗马尼亚语（罗马尼亚）",
    "ru-RU": "俄语（俄罗斯）",
    "si-LK": "僧伽罗语（斯里兰卡)",
    "sk-SK": "斯洛伐克语（斯洛伐克）",
    "sl-SI": "斯洛文尼亚语（斯洛文尼亚)",
    "so-SO": "索马里语（索马里）",
    "sq-AL": "阿尔巴尼亚语（阿尔巴尼亚）",
    "sr-RS": "塞尔维亚语（塞尔维亚）",
    "su-ID": "巽他语（印度尼西亚）",
    "sv-SE": "瑞典语（瑞典）",
    "sw-KE": "斯瓦希里语（肯尼亚）",
    "sw-TZ": "斯瓦希里语（坦桑尼亚）",
    "ta-IN": "泰米尔语（印度）",
    "ta-LK": "泰米尔语（斯里兰卡）",
    "ta-MY": "泰米尔语（马来西亚）",
    "ta-SG": "泰米尔语（新加坡）",
    "te-IN": "泰卢固语（印度）",
    "th-TH": "泰语（泰国）",
    "tr-TR": "土耳其语（土耳其）",
    "uk-UA": "乌克兰语（乌克兰)",
    "ur-IN": "乌尔都语（印度）",
    "ur-PK": "乌尔都语（巴基斯坦）",
    "uz-UZ": "乌兹别克语（乌兹别克斯坦）",
    "vi-VN": "越南语（越南)",
    "wuu-CN": "吴语（中国)",
    "yue-CN": "粤语（中国)",
    "zh-CN": "中文（普通话，简体）",
    "zh-CN-henan": "中文（中原官话河南，简体)河南口音",
    "zh-CN-liaoning": "中文（东北官话，简体)辽宁口音",
    "zh-CN-shaanxi": "中文（中原官话陕西，简体)陕西口音",
    "zh-CN-shandong": "中文（冀鲁官话，简体)山东口音",
    "zh-CN-sichuan": "中文（西南普通话，简体）",
    "zh-HK": "中文（粤语，繁体）",
    "zh-TW": "中文（台湾普通话)",
    "zu-ZA": "祖鲁语（南非）",
}
/* 声音选项的汉化，仅用于Edge接口 */
let cnLocalVoice = {
    "af-ZA-AdriNeural": "Adri",
    "af-ZA-WillemNeural": "Willem",
    "am-ET-AmehaNeural": "አምሀ",
    "am-ET-MekdesNeural": "መቅደስ",
    "ar-AE-FatimaNeural": "فاطمة",
    "ar-AE-HamdanNeural": "حمدان",
    "ar-BH-AliNeural": "علي",
    "ar-BH-LailaNeural": "ليلى",
    "ar-DZ-AminaNeural": "أمينة",
    "ar-DZ-IsmaelNeural": "إسماعيل",
    "ar-EG-SalmaNeural": "سلمى",
    "ar-EG-ShakirNeural": "شاكر",
    "ar-IQ-BasselNeural": "باسل",
    "ar-IQ-RanaNeural": "رنا",
    "ar-JO-SanaNeural": "سناء",
    "ar-JO-TaimNeural": "تيم",
    "ar-KW-FahedNeural": "فهد",
    "ar-KW-NouraNeural": "نورا",
    "ar-LB-LaylaNeural": "ليلى",
    "ar-LB-RamiNeural": "رامي",
    "ar-LY-ImanNeural": "إيمان",
    "ar-LY-OmarNeural": "أحمد",
    "ar-MA-JamalNeural": "جمال",
    "ar-MA-MounaNeural": "منى",
    "ar-OM-AbdullahNeural": "عبدالله",
    "ar-OM-AyshaNeural": "عائشة",
    "ar-QA-AmalNeural": "أمل",
    "ar-QA-MoazNeural": "معاذ",
    "ar-SA-HamedNeural": "حامد",
    "ar-SA-ZariyahNeural": "زارية",
    "ar-SY-AmanyNeural": "أماني",
    "ar-SY-LaithNeural": "ليث",
    "ar-TN-HediNeural": "هادي",
    "ar-TN-ReemNeural": "ريم",
    "ar-YE-MaryamNeural": "مريم",
    "ar-YE-SalehNeural": "صالح",
    "az-AZ-BabekNeural": "Babək",
    "az-AZ-BanuNeural": "Banu",
    "bg-BG-BorislavNeural": "Борислав",
    "bg-BG-KalinaNeural": "Калина",
    "bn-BD-NabanitaNeural": "নবনীতা",
    "bn-BD-PradeepNeural": "প্রদ্বীপ",
    "bn-IN-BashkarNeural": "ভাস্কর",
    "bn-IN-TanishaaNeural": "তানিশা",
    "bs-BA-GoranNeural": "Goran",
    "bs-BA-VesnaNeural": "Vesna",
    "ca-ES-JoanaNeural": "Joana",
    "ca-ES-AlbaNeural": "Alba",
    "ca-ES-EnricNeural": "Enric",
    "cs-CZ-An:ninNeural": "An:nín",
    "cs-CZ-VlastaNeural": "Vlasta",
    "cy-GB-AledNeural": "Aled",
    "cy-GB-NiaNeural": "Nia",
    "da-DK-ChristelNeural": "Christel",
    "da-DK-JeppeNeural": "Jeppe",
    "de-AT-IngridNeural": "Ingrid",
    "de-AT-JonasNeural": "Jonas",
    "de-CH-JanNeural": "Jan",
    "de-CH-LeniNeural": "Leni",
    "de-DE-KatjaNeural": "Katja",
    "de-DE-AmalaNeural": "Amala",
    "de-DE-BerndNeural": "Bernd",
    "de-DE-Chris:phNeural": "Chris:ph",
    "de-DE-ConradNeural": "Conrad",
    "de-DE-ElkeNeural": "Elke",
    "de-DE-GiselaNeural": "Gisela",
    "de-DE-KasperNeural": "Kasper",
    "de-DE-KillianNeural": "Killian",
    "de-DE-KlarissaNeural": "Klarissa",
    "de-DE-KlausNeural": "Klaus",
    "de-DE-LouisaNeural": "Louisa",
    "de-DE-MajaNeural": "Maja",
    "de-DE-RalfNeural": "Ralf",
    "de-DE-TanjaNeural": "Tanja",
    "el-GR-AthinaNeural": "Αθηνά",
    "el-GR-Nes:rasNeural": "Νέστορας",
    "en-AU-NatashaNeural": "Natasha",
    "en-AU-WilliamNeural": "William",
    "en-AU-AnnetteNeural": "Annette",
    "en-AU-CarlyNeural": "Carly",
    "en-AU-DarrenNeural": "Darren",
    "en-AU-DuncanNeural": "Duncan",
    "en-AU-ElsieNeural": "Elsie",
    "en-AU-FreyaNeural": "Freya",
    "en-AU-JoanneNeural": "Joanne",
    "en-AU-KenNeural": "Ken",
    "en-AU-KimNeural": "Kim",
    "en-AU-NeilNeural": "Neil",
    "en-AU-TimNeural": "Tim",
    "en-AU-TinaNeural": "Tina",
    "en-CA-ClaraNeural": "Clara",
    "en-CA-LiamNeural": "Liam",
    "en-GB-LibbyNeural": "Libby",
    "en-GB-AbbiNeural": "Abbi",
    "en-GB-AlfieNeural": "Alfie",
    "en-GB-BellaNeural": "Bella",
    "en-GB-ElliotNeural": "Elliot",
    "en-GB-EthanNeural": "Ethan",
    "en-GB-HollieNeural": "Hollie",
    "en-GB-MaisieNeural": "Maisie",
    "en-GB-NoahNeural": "Noah",
    "en-GB-OliverNeural": "Oliver",
    "en-GB-OliviaNeural": "Olivia",
    "en-GB-ThomasNeural": "Thomas",
    "en-GB-RyanNeural": "Ryan",
    "en-GB-SoniaNeural": "Sonia",
    "en-GB-MiaNeural": "Mia",
    "en-HK-SamNeural": "Sam",
    "en-HK-YanNeural": "Yan",
    "en-IE-ConnorNeural": "Connor",
    "en-IE-EmilyNeural": "Emily",
    "en-IN-NeerjaNeural": "Neerja",
    "en-IN-PrabhatNeural": "Prabhat",
    "en-KE-AsiliaNeural": "Asilia",
    "en-KE-ChilembaNeural": "Chilemba",
    "en-NG-AbeoNeural": "Abeo",
    "en-NG-EzinneNeural": "Ezinne",
    "en-NZ-MitchellNeural": "Mitchell",
    "en-NZ-MollyNeural": "Molly",
    "en-PH-JamesNeural": "James",
    "en-PH-RosaNeural": "Rosa",
    "en-SG-LunaNeural": "Luna",
    "en-SG-WayneNeural": "Wayne",
    "en-TZ-ElimuNeural": "Elimu",
    "en-TZ-ImaniNeural": "Imani",
    "en-US-JennyNeural": "Jenny",
    "en-US-JennyMultilingualNeural": "Jenny Multilingual",
    "en-US-GuyNeural": "Guy",
    "en-US-AmberNeural": "Amber",
    "en-US-AnaNeural": "Ana",
    "en-US-AriaNeural": "Aria",
    "en-US-AshleyNeural": "Ashley",
    "en-US-BrandonNeural": "Brandon",
    "en-US-Chris:pherNeural": "Chris:pher",
    "en-US-CoraNeural": "Cora",
    "en-US-ElizabethNeural": "Elizabeth",
    "en-US-EricNeural": "Eric",
    "en-US-JacobNeural": "Jacob",
    "en-US-MichelleNeural": "Michelle",
    "en-US-MonicaNeural": "Monica",
    "en-US-SaraNeural": "Sara",
    "en-US-AIGenerate1Neural": "AIGenerate1",
    "en-US-AIGenerate2Neural": "AIGenerate2",
    "en-US-DavisNeural": "Davis",
    "en-US-JaneNeural": "Jane",
    "en-US-JasonNeural": "Jason",
    "en-US-NancyNeural": "Nancy",
    "en-US-RogerNeural": "Roger",
    "en-US-SteffanNeural": "Steffan",
    "en-US-:nyNeural": ":ny",
    "en-ZA-LeahNeural": "Leah",
    "en-ZA-LukeNeural": "Luke",
    "es-AR-ElenaNeural": "Elena",
    "es-AR-:masNeural": ":mas",
    "es-BO-MarceloNeural": "Marcelo",
    "es-BO-SofiaNeural": "Sofia",
    "es-CL-CatalinaNeural": "Catalina",
    "es-CL-LorenzoNeural": "Lorenzo",
    "es-CO-GonzaloNeural": "Gonzalo",
    "es-CO-SalomeNeural": "Salome",
    "es-CR-JuanNeural": "Juan",
    "es-CR-MariaNeural": "María",
    "es-CU-BelkysNeural": "Belkys",
    "es-CU-ManuelNeural": "Manuel",
    "es-DO-EmilioNeural": "Emilio",
    "es-DO-RamonaNeural": "Ramona",
    "es-EC-AndreaNeural": "Andrea",
    "es-EC-LuisNeural": "Luis",
    "es-ES-ElviraNeural": "Elvira",
    "es-ES-AbrilNeural": "Abril",
    "es-ES-AlvaroNeural": "Álvaro",
    "es-ES-ArnauNeural": "Arnau",
    "es-ES-DarioNeural": "Dario",
    "es-ES-EliasNeural": "Elias",
    "es-ES-EstrellaNeural": "Estrella",
    "es-ES-IreneNeural": "Irene",
    "es-ES-LaiaNeural": "Laia",
    "es-ES-LiaNeural": "Lia",
    "es-ES-NilNeural": "Nil",
    "es-ES-SaulNeural": "Saul",
    "es-ES-TeoNeural": "Teo",
    "es-ES-TrianaNeural": "Triana",
    "es-ES-VeraNeural": "Vera",
    "es-GQ-JavierNeural": "Javier",
    "es-GQ-TeresaNeural": "Teresa",
    "es-GT-AndresNeural": "Andrés",
    "es-GT-MartaNeural": "Marta",
    "es-HN-CarlosNeural": "Carlos",
    "es-HN-KarlaNeural": "Karla",
    "es-MX-DaliaNeural": "Dalia",
    "es-MX-BeatrizNeural": "Beatriz",
    "es-MX-CandelaNeural": "Candela",
    "es-MX-CarlotaNeural": "Carlota",
    "es-MX-CecilioNeural": "Cecilio",
    "es-MX-GerardoNeural": "Gerardo",
    "es-MX-JorgeNeural": "Jorge",
    "es-MX-LarissaNeural": "Larissa",
    "es-MX-Liber:Neural": "Liber:",
    "es-MX-LucianoNeural": "Luciano",
    "es-MX-MarinaNeural": "Marina",
    "es-MX-NuriaNeural": "Nuria",
    "es-MX-PelayoNeural": "Pelayo",
    "es-MX-RenataNeural": "Renata",
    "es-MX-YagoNeural": "Yago",
    "es-NI-FedericoNeural": "Federico",
    "es-NI-YolandaNeural": "Yolanda",
    "es-PA-MargaritaNeural": "Margarita",
    "es-PA-Rober:Neural": "Rober:",
    "es-PE-AlexNeural": "Alex",
    "es-PE-CamilaNeural": "Camila",
    "es-PR-KarinaNeural": "Karina",
    "es-PR-Vic:rNeural": "Víc:r",
    "es-PY-MarioNeural": "Mario",
    "es-PY-TaniaNeural": "Tania",
    "es-SV-LorenaNeural": "Lorena",
    "es-SV-RodrigoNeural": "Rodrigo",
    "es-US-AlonsoNeural": "Alonso",
    "es-US-PalomaNeural": "Paloma",
    "es-UY-MateoNeural": "Mateo",
    "es-UY-ValentinaNeural": "Valentina",
    "es-VE-PaolaNeural": "Paola",
    "es-VE-SebastianNeural": "Sebastián",
    "et-EE-AnuNeural": "Anu",
    "et-EE-KertNeural": "Kert",
    "eu-ES-AinhoaNeural": "Ainhoa",
    "eu-ES-AnderNeural": "Ander",
    "fa-IR-DilaraNeural": "دلارا",
    "fa-IR-FaridNeural": "فرید",
    "fi-FI-SelmaNeural": "Selma",
    "fi-FI-HarriNeural": "Harri",
    "fi-FI-NooraNeural": "Noora",
    "fil-PH-AngeloNeural": "Angelo",
    "fil-PH-BlessicaNeural": "Blessica",
    "fr-BE-CharlineNeural": "Charline",
    "fr-BE-GerardNeural": "Gerard",
    "fr-CA-SylvieNeural": "Sylvie",
    "fr-CA-An:ineNeural": "An:ine",
    "fr-CA-JeanNeural": "Jean",
    "fr-CH-ArianeNeural": "Ariane",
    "fr-CH-FabriceNeural": "Fabrice",
    "fr-FR-AlainNeural": "Alain",
    "fr-FR-BrigitteNeural": "Brigitte",
    "fr-FR-CelesteNeural": "Celeste",
    "fr-FR-ClaudeNeural": "Claude",
    "fr-FR-CoralieNeural": "Coralie",
    "fr-FR-EloiseNeural": "Eloise",
    "fr-FR-JacquelineNeural": "Jacqueline",
    "fr-FR-JeromeNeural": "Jerome",
    "fr-FR-JosephineNeural": "Josephine",
    "fr-FR-MauriceNeural": "Maurice",
    "fr-FR-YvesNeural": "Yves",
    "fr-FR-YvetteNeural": "Yvette",
    "fr-FR-DeniseNeural": "Denise",
    "fr-FR-HenriNeural": "Henri",
    "ga-IE-ColmNeural": "Colm",
    "ga-IE-OrlaNeural": "Orla",
    "gl-ES-RoiNeural": "Roi",
    "gl-ES-SabelaNeural": "Sabela",
    "gu-IN-DhwaniNeural": "ધ્વની",
    "gu-IN-NiranjanNeural": "નિરંજન",
    "he-IL-AvriNeural": "אברי",
    "he-IL-HilaNeural": "הילה",
    "hi-IN-MadhurNeural": "मधुर",
    "hi-IN-SwaraNeural": "स्वरा",
    "hr-HR-GabrijelaNeural": "Gabrijela",
    "hr-HR-SreckoNeural": "Srećko",
    "hu-HU-NoemiNeural": "Noémi",
    "hu-HU-TamasNeural": "Tamás",
    "hy-AM-AnahitNeural": "Անահիտ",
    "hy-AM-HaykNeural": "Հայկ",
    "id-ID-ArdiNeural": "Ardi",
    "id-ID-GadisNeural": "Gadis",
    "is-IS-GudrunNeural": "Guðrún",
    "is-IS-GunnarNeural": "Gunnar",
    "it-IT-IsabellaNeural": "Isabella",
    "it-IT-ElsaNeural": "Elsa",
    "it-IT-BenignoNeural": "Benigno",
    "it-IT-CalimeroNeural": "Calimero",
    "it-IT-CataldoNeural": "Cataldo",
    "it-IT-DiegoNeural": "Diego",
    "it-IT-FabiolaNeural": "Fabiola",
    "it-IT-FiammaNeural": "Fiamma",
    "it-IT-GianniNeural": "Gianni",
    "it-IT-ImeldaNeural": "Imelda",
    "it-IT-IrmaNeural": "Irma",
    "it-IT-LisandroNeural": "Lisandro",
    "it-IT-PalmiraNeural": "Palmira",
    "it-IT-PierinaNeural": "Pierina",
    "it-IT-RinaldoNeural": "Rinaldo",
    "ja-JP-NanamiNeural": "七海",
    "ja-JP-KeitaNeural": "圭太",
    "ja-JP-AoiNeural": "碧衣",
    "ja-JP-DaichiNeural": "大智",
    "ja-JP-MayuNeural": "真夕",
    "ja-JP-NaokiNeural": "直紀",
    "ja-JP-ShioriNeural": "志織",
    "jv-ID-DimasNeural": "Dimas",
    "jv-ID-SitiNeural": "Siti",
    "ka-GE-EkaNeural": "ეკა",
    "ka-GE-GiorgiNeural": "გიორგი",
    "kk-KZ-AigulNeural": "Айгүл",
    "kk-KZ-DauletNeural": "Дәулет",
    "km-KH-PisethNeural": "ពិសិដ្ឋ",
    "km-KH-SreymomNeural": "ស្រីមុំ",
    "kn-IN-GaganNeural": "ಗಗನ್",
    "kn-IN-SapnaNeural": "ಸಪ್ನಾ",
    "ko-KR-SunHiNeural": "선히",
    "ko-KR-InJoonNeural": "인준",
    "ko-KR-BongJinNeural": "봉진",
    "ko-KR-GookMinNeural": "국민",
    "ko-KR-JiMinNeural": "지민",
    "ko-KR-SeoHyeonNeural": "서현",
    "ko-KR-SoonBokNeural": "순복",
    "ko-KR-YuJinNeural": "유진",
    "lo-LA-ChanthavongNeural": "ຈັນທະວົງ",
    "lo-LA-KeomanyNeural": "ແກ້ວມະນີ",
    "lt-LT-LeonasNeural": "Leonas",
    "lt-LT-OnaNeural": "Ona",
    "lv-LV-EveritaNeural": "Everita",
    "lv-LV-NilsNeural": "Nils",
    "mk-MK-AleksandarNeural": "Александар",
    "mk-MK-MarijaNeural": "Марија",
    "ml-IN-MidhunNeural": "മിഥുൻ",
    "ml-IN-SobhanaNeural": "ശോഭന",
    "mn-MN-BataaNeural": "Батаа",
    "mn-MN-YesuiNeural": "Есүй",
    "mr-IN-AarohiNeural": "आरोही",
    "mr-IN-ManoharNeural": "मनोहर",
    "ms-MY-OsmanNeural": "Osman",
    "ms-MY-YasminNeural": "Yasmin",
    "mt-MT-GraceNeural": "Grace",
    "mt-MT-JosephNeural": "Joseph",
    "my-MM-NilarNeural": "နီလာ",
    "my-MM-ThihaNeural": "သီဟ",
    "nb-NO-PernilleNeural": "Pernille",
    "nb-NO-FinnNeural": "Finn",
    "nb-NO-IselinNeural": "Iselin",
    "ne-NP-HemkalaNeural": "हेमकला",
    "ne-NP-SagarNeural": "सागर",
    "nl-BE-ArnaudNeural": "Arnaud",
    "nl-BE-DenaNeural": "Dena",
    "nl-NL-ColetteNeural": "Colette",
    "nl-NL-FennaNeural": "Fenna",
    "nl-NL-MaartenNeural": "Maarten",
    "pl-PL-AgnieszkaNeural": "Agnieszka",
    "pl-PL-MarekNeural": "Marek",
    "pl-PL-ZofiaNeural": "Zofia",
    "ps-AF-GulNawazNeural": " ګل نواز",
    "ps-AF-LatifaNeural": "لطيفه",
    "pt-BR-FranciscaNeural": "Francisca",
    "pt-BR-An:nioNeural": "Antônio",
    "pt-BR-BrendaNeural": "Brenda",
    "pt-BR-Dona:Neural": "Dona:",
    "pt-BR-ElzaNeural": "Elza",
    "pt-BR-FabioNeural": "Fabio",
    "pt-BR-GiovannaNeural": "Giovanna",
    "pt-BR-Humber:Neural": "Humber:",
    "pt-BR-JulioNeural": "Julio",
    "pt-BR-LeilaNeural": "Leila",
    "pt-BR-LeticiaNeural": "Leticia",
    "pt-BR-ManuelaNeural": "Manuela",
    "pt-BR-NicolauNeural": "Nicolau",
    "pt-BR-ValerioNeural": "Valerio",
    "pt-BR-YaraNeural": "Yara",
    "pt-PT-DuarteNeural": "Duarte",
    "pt-PT-FernandaNeural": "Fernanda",
    "pt-PT-RaquelNeural": "Raquel",
    "ro-RO-AlinaNeural": "Alina",
    "ro-RO-EmilNeural": "Emil",
    "ru-RU-SvetlanaNeural": "Светлана",
    "ru-RU-DariyaNeural": "Дария",
    "ru-RU-DmitryNeural": "Дмитрий",
    "si-LK-SameeraNeural": "සමීර",
    "si-LK-ThiliniNeural": "තිළිණි",
    "sk-SK-LukasNeural": "Lukáš",
    "sk-SK-Vik:riaNeural": "Viktória",
    "sl-SI-PetraNeural": "Petra",
    "sl-SI-RokNeural": "Rok",
    "so-SO-MuuseNeural": "Muuse",
    "so-SO-UbaxNeural": "Ubax",
    "sq-AL-AnilaNeural": "Anila",
    "sq-AL-IlirNeural": "Ilir",
    "sr-RS-NicholasNeural": "Никола",
    "sr-RS-SophieNeural": "Софија",
    "su-ID-JajangNeural": "Jajang",
    "su-ID-TutiNeural": "Tuti",
    "sv-SE-SofieNeural": "Sofie",
    "sv-SE-HilleviNeural": "Hillevi",
    "sv-SE-MattiasNeural": "Mattias",
    "sw-KE-RafikiNeural": "Rafiki",
    "sw-KE-ZuriNeural": "Zuri",
    "sw-TZ-DaudiNeural": "Daudi",
    "sw-TZ-RehemaNeural": "Rehema",
    "ta-IN-PallaviNeural": "பல்லவி",
    "ta-IN-ValluvarNeural": "வள்ளுவர்",
    "ta-LK-KumarNeural": "குமார்",
    "ta-LK-SaranyaNeural": "சரண்யா",
    "ta-MY-KaniNeural": "கனி",
    "ta-MY-SuryaNeural": "சூர்யா",
    "ta-SG-AnbuNeural": "அன்பு",
    "ta-SG-VenbaNeural": "வெண்பா",
    "te-IN-MohanNeural": "మోహన్",
    "te-IN-ShrutiNeural": "శ్రుతి",
    "th-TH-PremwadeeNeural": "เปรมวดี",
    "th-TH-AcharaNeural": "อัจฉรา",
    "th-TH-NiwatNeural": "นิวัฒน์",
    "tr-TR-AhmetNeural": "Ahmet",
    "tr-TR-EmelNeural": "Emel",
    "uk-UA-OstapNeural": "Остап",
    "uk-UA-PolinaNeural": "Поліна",
    "ur-IN-GulNeural": "گل",
    "ur-IN-SalmanNeural": "سلمان",
    "ur-PK-AsadNeural": "اسد",
    "ur-PK-UzmaNeural": "عظمیٰ",
    "uz-UZ-MadinaNeural": "Madina",
    "uz-UZ-SardorNeural": "Sardor",
    "vi-VN-HoaiMyNeural": "Hoài My",
    "vi-VN-NamMinhNeural": "Nam Minh",
    "wuu-CN-Xiao:ngNeural": "晓彤",
    "wuu-CN-YunzheNeural": "云哲",
    "yue-CN-XiaoMinNeural": "晓敏",
    "yue-CN-YunSongNeural": "云松",
    "zh-CN-XiaoxiaoNeural": "晓晓",
    "zh-CN-YunyangNeural": "云扬",
    "zh-CN-XiaochenNeural": "晓辰",
    "zh-CN-XiaohanNeural": "晓涵",
    "zh-CN-XiaomoNeural": "晓墨",
    "zh-CN-XiaoqiuNeural": "晓秋",
    "zh-CN-XiaoruiNeural": "晓睿",
    "zh-CN-XiaoshuangNeural": "晓双",
    "zh-CN-XiaoxuanNeural": "晓萱",
    "zh-CN-XiaoyanNeural": "晓颜",
    "zh-CN-XiaoyouNeural": "晓悠",
    "zh-CN-YunxiNeural": "云希",
    "zh-CN-YunyeNeural": "云野",
    "zh-CN-XiaomengNeural": "晓梦",
    "zh-CN-XiaoyiNeural": "晓伊",
    "zh-CN-XiaozhenNeural": "晓甄",
    "zh-CN-YunfengNeural": "云枫",
    "zh-CN-YunhaoNeural": "云皓",
    "zh-CN-YunjianNeural": "云健",
    "zh-CN-YunxiaNeural": "云夏",
    "zh-CN-YunzeNeural": "云泽",
    "zh-CN-henan-YundengNeural": "云登",
    "zh-CN-liaoning-XiaobeiNeural": "晓北",
    "zh-CN-shaanxi-XiaoniNeural": "晓妮",
    "zh-CN-shandong-YunxiangNeural": "云翔",
    "zh-CN-sichuan-YunxiNeural": "云希",
    "zh-HK-HiuMaanNeural": "曉曼",
    "zh-HK-HiuGaaiNeural": "曉佳",
    "zh-HK-WanLungNeural": "雲龍",
    "zh-TW-HsiaoChenNeural": "曉臻",
    "zh-TW-HsiaoYuNeural": "曉雨",
    "zh-TW-YunJheNeural": "雲哲",
    "zu-ZA-ThandoNeural": "Thando",
    "zu-ZA-ThembaNeural": "Themba",
}
/* 风格和身份选项的汉化 */
let cnLocalStyleAndRole = {
    'general': '普通',
    'assistant': '助手',
    'chat': '闲聊',
    'customerservice': '服侍',
    'newscast': '新闻播报',
    'newscast-casual': '新闻播报(冷淡)',
    'affectionate': '温暖亲切',
    'angry': '生气',
    'calm': '平静',
    'cheerful': '欢快',
    'excited': '激动',
    'friendly': '温和',
    'hopeful': '期待',
    'shouting': '喊叫',
    'terrified': '害怕',
    'unfriendly': '冷漠',
    'whispering': '耳语',
    'empathetic': '同情',
    'newscast-formal': '新闻播报(正式)',
    'disgruntled': '不满',
    'fearful': '担心',
    'gentle': '温合文雅',
    'lyrical': '热情奔放',
    'embarrassed': '犹豫',
    'sad': '悲伤',
    'serious': '严肃',
    'depressed': '忧伤',
    'envious': '嫉妒',
    'poetry-reading': '诗歌朗诵',
    'Default': '默认',
    //角色(身份):
    'narration-professional': '讲故事(专业)',
    'narration-casual': '讲故事(冷淡)',
    'narration-relaxed': '讲故事(轻松)',
    'Narration-relaxed': '讲故事(轻松)',
    'Sports_commentary_excited': '体育解说(激动)',
    'Sports_commentary': '体育解说',
    'Advertisement_upbeat': '广告推销(积极)',
    'YoungAdultFemale': '女性青年',
    'YoungAdultMale': '男性青年',
    'OlderAdultFemale': '年长女性',
    'OlderAdultMale': '年长男性',
    'SeniorFemale': '高龄女性',
    'SeniorMale': '高龄男性',
    'Girl': '小女孩',
    'Boy': '小男孩',
    'Narrator': '旁白',
}
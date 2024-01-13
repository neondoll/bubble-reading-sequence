import {ComicAuthor} from "./interfaces";

const comicAuthors: Record<string, Record<string, ComicAuthor>> = {
    kamerim               : {artist_screenwriter: {authorId: "author_kamerim", positions: ["artist", "screenwriter"]}},
    adelaAdienova         : {colorist: {authorId: "author_adela_adienova", positions: ["colorist"]}},
    alexHatchett          : {
        artist_screenwriter: {authorId: "author_alex_hatchett", positions: ["artist", "screenwriter"]},
        screenwriter       : {authorId: "author_alex_hatchett", positions: ["screenwriter"]}
    },
    alexanderAndrianov    : {artist: {authorId: "author_alexander_andrianov", positions: ["artist"]}},
    alexanderKirillov     : {screenwriter: {authorId: "author_alexander_kirillov", positions: ["screenwriter"]}},
    alexanderMalyshev     : {artist: {authorId: "author_alexander_malyshev", positions: ["artist"]}},
    alexandraBizyaeva     : {
        artist             : {authorId: "author_alexandra_bizyaeva", positions: ["artist"]},
        artist_colorist    : {authorId: "author_alexandra_bizyaeva", positions: ["artist", "colorist"]},
        artist_screenwriter: {authorId: "author_alexandra_bizyaeva", positions: ["artist", "screenwriter"]},
        screenwriter       : {authorId: "author_alexandra_bizyaeva", positions: ["screenwriter"]}
    },
    alexandraZvyagina     : {screenwriter: {authorId: "author_alexandra_zvyagina", positions: ["screenwriter"]}},
    alexandraShchastlivaya: {colorist: {authorId: "author_alexandra_shchastlivaya", positions: ["colorist"]}},
    alexeyVolkov          : {screenwriter: {authorId: "author_alexey_volkov", positions: ["screenwriter"]}},
    alexeyGorbut          : {
        artist         : {authorId: "author_alexey_gorbut", positions: ["artist"]},
        artist_colorist: {authorId: "author_alexey_gorbut", positions: ["artist", "colorist"]}
    },
    alexeyEfremov         : {artist: {authorId: "author_alexey_efremov", positions: ["artist"]}},
    alexeyZamsky          : {screenwriter: {authorId: "author_alexey_zamsky", positions: ["screenwriter"]}},
    alexeyKhromogin       : {screenwriter: {authorId: "author_alexey_khromogin", positions: ["screenwriter"]}},
    alenaKarpova          : {colorist: {authorId: "author_alena_karpova", positions: ["colorist"]}},
    alenaSpiridonova      : {screenwriter: {authorId: "author_alena_spiridonova", positions: ["screenwriter"]}},
    alinaErofeeva         : {artist: {authorId: "author_alina_erofeeva", positions: ["artist"]}},
    alinaLitvinenko       : {colorist: {authorId: "author_alina_litvinenko", positions: ["colorist"]}},
    alisaVedernikova      : {colorist: {authorId: "author_alisa_vedernikova", positions: ["colorist"]}},
    anastasiaAfonina      : {artist: {authorId: "author_anastasia_afonina", positions: ["artist"]}},
    anastasiaVolno        : {colorist: {authorId: "author_anastasia_volno", positions: ["colorist"]}},
    anastasiaGlazunova    : {colorist: {authorId: "author_anastasia_glazunova", positions: ["colorist"]}},
    anastasiaKaterinich   : {
        artist  : {authorId: "author_anastasia_katerinich", positions: ["artist"]},
        colorist: {authorId: "author_anastasia_katerinich", positions: ["colorist"]}
    },
    anastasiaKim          : {
        artist                      : {authorId: "author_anastasia_kim", positions: ["artist"]},
        artist_colorist_screenwriter: {
            authorId : "author_anastasia_kim",
            positions: ["artist", "colorist", "screenwriter"]
        },
        artist_screenwriter         : {authorId: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
        screenwriter                : {authorId: "author_anastasia_kim", positions: ["screenwriter"]}
    },
    anastasiaOzerova      : {colorist: {authorId: "author_anastasia_ozerova", positions: ["colorist"]}},
    anastasiaSyomysheva   : {colorist: {authorId: "author_anastasia_syomysheva", positions: ["colorist"]}},
    anastasiaTroitskaya   : {
        artist  : {authorId: "author_anastasia_troitskaya", positions: ["artist"]},
        colorist: {authorId: "author_anastasia_troitskaya", positions: ["colorist"]}
    },
    anastasiaChebykina    : {colorist: {authorId: "author_anastasia_chebykina", positions: ["colorist"]}},
    andreyVasin           : {artist: {authorId: "author_andrey_vasin", positions: ["artist"]}},
    andreyMuravyov        : {colorist: {authorId: "author_andrey_muravyov", positions: ["colorist"]}},
    andreyRodin           : {artist: {authorId: "author_andrey_rodin", positions: ["artist"]}},
    andreyTevlyukov       : {screenwriter: {authorId: "author_andrey_tevlyukov", positions: ["screenwriter"]}},
    annaAntoshchenkova    : {colorist: {authorId: "author_anna_antoshchenkova", positions: ["colorist"]}},
    annaBulatova          : {
        artist      : {authorId: "author_anna_bulatova", positions: ["artist"]},
        screenwriter: {authorId: "author_anna_bulatova", positions: ["screenwriter"]}
    },
    annaMozaikina         : {
        artist  : {authorId: "author_anna_mozaikina", positions: ["artist"]},
        colorist: {authorId: "author_anna_mozaikina", positions: ["colorist"]}
    },
    annaRud               : {artist: {authorId: "author_anna_rud", positions: ["artist"]}},
    annaSergeeva          : {screenwriter: {authorId: "author_anna_sergeeva", positions: ["screenwriter"]}},
    annaSidorova          : {
        artist_colorist: {authorId: "author_anna_sidorova", positions: ["artist", "colorist"]},
        colorist       : {authorId: "author_anna_sidorova", positions: ["colorist"]}
    },
    annaSinitsyna         : {colorist: {authorId: "author_anna_sinitsyna", positions: ["colorist"]}},
    annaShadrina          : {artist: {authorId: "author_anna_shadrina", positions: ["artist"]}},
    antonSavinov          : {artist: {authorId: "author_anton_savinov", positions: ["artist"]}},
    antonStartsev         : {colorist: {authorId: "author_anton_startsev", positions: ["colorist"]}},
    artyomBizyaev         : {
        artist                      : {authorId: "author_artyom_bizyaev", positions: ["artist"]},
        artist_colorist_screenwriter: {
            authorId : "author_artyom_bizyaev",
            positions: ["artist", "colorist", "screenwriter"]
        },
        artist_screenwriter         : {authorId: "author_artyom_bizyaev", positions: ["artist", "screenwriter"]}
    },
    artyomGabrelyanov     : {
        colorist    : {authorId: "author_artyom_gabrelyanov", positions: ["colorist"]},
        screenwriter: {authorId: "author_artyom_gabrelyanov", positions: ["screenwriter"]}
    },
    artyomMyasnikov       : {
        artist  : {authorId: "author_artyom_myasnikov", positions: ["artist"]},
        colorist: {authorId: "author_artyom_myasnikov", positions: ["colorist"]}
    },
    askoldAkishin         : {artist: {authorId: "author_askold_akishin", positions: ["artist"]}},
    valentinPotkin        : {artist: {authorId: "author_valentin_potkin", positions: ["artist"]}},
    valeriaFrantseva      : {screenwriter: {authorId: "author_valeria_frantseva", positions: ["screenwriter"]}},
    vasilySnigirev        : {screenwriter: {authorId: "author_vasily_snigirev", positions: ["screenwriter"]}},
    victoriaBykova        : {artist: {authorId: "author_victoria_bykova", positions: ["artist"]}},
    victoriaVinogradova   : {
        artist         : {authorId: "author_victoria_vinogradova", positions: ["artist"]},
        artist_colorist: {authorId: "author_victoria_vinogradova", positions: ["artist", "colorist"]},
        colorist       : {authorId: "author_victoria_vinogradova", positions: ["colorist"]}
    },
    victoriaTirtilova     : {colorist: {authorId: "author_victoria_tirtilova", positions: ["colorist"]}},
    vitalySmirnov         : {
        artist  : {authorId: "author_vitaly_smirnov", positions: ["artist"]},
        colorist: {authorId: "author_vitaly_smirnov", positions: ["colorist"]}
    },
    vitalyTerletsky       : {
        artist_screenwriter: {authorId: "author_vitaly_terletsky", positions: ["artist", "screenwriter"]},
        screenwriter       : {authorId: "author_vitaly_terletsky", positions: ["screenwriter"]}
    },
    vyacheslavDoronin     : {
        artist      : {authorId: "author_vyacheslav_doronin", positions: ["artist"]},
        colorist    : {authorId: "author_vyacheslav_doronin", positions: ["colorist"]},
        screenwriter: {authorId: "author_vyacheslav_doronin", positions: ["screenwriter"]}
    },
    gilbertBrissen        : {screenwriter: {authorId: "author_gilbert_brissen", positions: ["screenwriter"]}},
    glebMelnikov          : {
        artist         : {authorId: "author_gleb_melnikov", positions: ["artist"]},
        artist_colorist: {authorId: "author_gleb_melnikov", positions: ["artist", "colorist"]}
    },
    danilPanchenko        : {artist: {authorId: "author_danil_panchenko", positions: ["artist"]}},
    dariaKislyuk          : {colorist: {authorId: "author_daria_kislyuk", positions: ["colorist"]}},
    dariaOreshina         : {colorist: {authorId: "author_daria_oreshina", positions: ["colorist"]}},
    denisBarbe            : {colorist: {authorId: "author_denis_barbe", positions: ["colorist"]}},
    denisZolotov          : {screenwriter: {authorId: "author_denis_zolotov", positions: ["screenwriter"]}},
    denisNechiporenko     : {screenwriter: {authorId: "author_denis_nechiporenko", positions: ["screenwriter"]}},
    denisPopov            : {_: {authorId: "author_denis_popov", positions: []}}, // TODO: выяснить кто он
    jamilyaZulpikarova    : {artist: {authorId: "author_jamilya_zulpikarova", positions: ["artist"]}},
    dmitryTikhonov        : {screenwriter: {authorId: "author_dmitry_tikhonov", positions: ["screenwriter"]}},
    dmitryFeoktistov      : {artist: {authorId: "author_dmitry_feoktistov", positions: ["artist"]}},
    evgeniyAisberg        : {screenwriter: {authorId: "author_evgeniy_aisberg", positions: ["screenwriter"]}},
    evgeniyBornyakov      : {
        artist      : {authorId: "author_evgeniy_bornyakov", positions: ["artist"]},
        screenwriter: {authorId: "author_evgeniy_bornyakov", positions: ["screenwriter"]}
    },
    evgenyEronin          : {screenwriter: {authorId: "author_evgeny_eronin", positions: ["screenwriter"]}},
    evgeniyKiyamov        : {artist: {authorId: "author_evgeniy_kiyamov", positions: ["artist"]}},
    evgeniyPivnev         : {artist: {authorId: "author_evgeniy_pivnev", positions: ["artist"]}},
    evgenyFedotov         : {
        artist_screenwriter: {authorId: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]},
        screenwriter       : {authorId: "author_evgeny_fedotov", positions: ["screenwriter"]}
    },
    evgeniyFrantsev       : {artist: {authorId: "author_evgeniy_frantsev", positions: ["artist"]}},
    evgeniyTonchilov      : {artist: {authorId: "author_evgeniy_tonchilov", positions: ["artist"]}},
    evgenyYakovlev        : {
        artist                      : {authorId: "author_evgeny_yakovlev", positions: ["artist"]},
        artist_colorist             : {authorId: "author_evgeny_yakovlev", positions: ["artist", "colorist"]},
        artist_colorist_screenwriter: {
            authorId : "author_evgeny_yakovlev",
            positions: ["artist", "colorist", "screenwriter"]
        },
        artist_screenwriter         : {authorId: "author_evgeny_yakovlev", positions: ["artist", "screenwriter"]},
        colorist                    : {authorId: "author_evgeny_yakovlev", positions: ["colorist"]},
        colorist_screenwriter       : {authorId: "author_evgeny_yakovlev", positions: ["colorist", "screenwriter"]},
        screenwriter                : {authorId: "author_evgeny_yakovlev", positions: ["screenwriter"]}
    },
    egorGafidov           : {artist: {authorId: "author_egor_gafidov", positions: ["artist"]}},
    egorGerasimov         : {artist: {authorId: "author_egor_gerasimov", positions: ["artist"]}},
    ekaterinaDesyatnikova : {screenwriter: {authorId: "author_ekaterina_desyatnikova", positions: ["screenwriter"]}},
    ekaterinaGrishchenko  : {
        artist         : {authorId: "author_ekaterina_grishchenko", positions: ["artist"]},
        artist_colorist: {authorId: "author_ekaterina_grishchenko", positions: ["artist", "colorist"]}
    },
    ekaterinaMenabde      : {
        artist  : {authorId: "author_ekaterina_menabde", positions: ["artist"]},
        colorist: {authorId: "author_ekaterina_menabde", positions: ["colorist"]}
    },
    ekaterinaMorozova     : {screenwriter: {authorId: "author_ekaterina_morozova", positions: ["screenwriter"]}},
    ekaterinaOvchinnikova : {artist: {authorId: "author_ekaterina_ovchinnikova", positions: ["artist"]}},
    elenaDoronina         : {colorist: {authorId: "author_elena_doronina", positions: ["colorist"]}},
    elenaLebedeva         : {
        artist      : {authorId: "author_elena_lebedeva", positions: ["artist"]},
        screenwriter: {authorId: "author_elena_lebedeva", positions: ["screenwriter"]}
    },
    elizavetaValikova     : {artist: {authorId: "author_elizaveta_valikova", positions: ["artist"]}},
    elizavetaPolyaeva     : {colorist: {authorId: "author_elizaveta_polyaeva", positions: ["colorist"]}},
    ivanDovbnya           : {artist: {authorId: "author_ivan_dovbnya", positions: ["artist"]}},
    ivanYelyasov          : {
        artist  : {authorId: "author_ivan_yelyasov", positions: ["artist"]},
        colorist: {authorId: "author_ivan_yelyasov", positions: ["colorist"]}
    },
    ivanSkorokhodov       : {
        artist_screenwriter: {authorId: "author_ivan_skorokhodov", positions: ["artist", "screenwriter"]},
        screenwriter       : {authorId: "author_ivan_skorokhodov", positions: ["screenwriter"]}
    },
    igorKislitsyn         : {screenwriter: {authorId: "author_igor_kislitsyn", positions: ["screenwriter"]}},
    igorLoboda            : {colorist: {authorId: "author_igor_loboda", positions: ["colorist"]}},
    igorKhudaev           : {screenwriter: {authorId: "author_igor_khudaev", positions: ["screenwriter"]}},
    ingaKanareeva         : {screenwriter: {authorId: "author_inga_kanareeva", positions: ["screenwriter"]}},
    irinaIvanova          : {
        artist         : {authorId: "author_irina_ivanova", positions: ["artist"]},
        artist_colorist: {authorId: "author_irina_ivanova", positions: ["artist", "colorist"]}
    },
    karinaAkhmetvalieva   : {
        artist  : {authorId: "author_karina_akhmetvalieva", positions: ["artist"]},
        colorist: {authorId: "author_karina_akhmetvalieva", positions: ["colorist"]}
    },
    karinaMashkova        : {artist: {authorId: "author_karina_mashkova", positions: ["artist"]}},
    kirillKutuzov         : {screenwriter: {authorId: "author_kirill_kutuzov", positions: ["screenwriter"]}},
    kirillMakagonov       : {artist: {authorId: "author_kirill_makagonov", positions: ["artist"]}},
    kirillPerepelitsyn    : {colorist: {authorId: "author_kirill_perepelitsyn", positions: ["colorist"]}},
    konstantinTarasov     : {
        artist             : {authorId: "author_konstantin_tarasov", positions: ["artist"]},
        artist_screenwriter: {authorId: "author_konstantin_tarasov", positions: ["artist", "screenwriter"]}
    },
    kseniaAlekhina        : {colorist: {authorId: "author_ksenia_alekhina", positions: ["colorist"]}},
    kseniaKolyada         : {artist: {authorId: "author_ksenia_kolyada", positions: ["artist"]}},
    kseniaShpaletskaya    : {screenwriter: {authorId: "author_ksenia_shpaletskaya", positions: ["screenwriter"]}},
    ladaAkishina          : {
        artist_colorist: {authorId: "author_lada_akishina", positions: ["artist", "colorist"]},
        colorist       : {authorId: "author_lada_akishina", positions: ["colorist"]}
    },
    madibekMusabekov      : {artist: {authorId: "author_madibek_musabekov", positions: ["artist"]}},
    maximAnanyin          : {
        artist_colorist_screenwriter: {
            authorId : "author_maxim_ananyin",
            positions: ["artist", "colorist", "screenwriter"]
        }
    },
    maximIvankov          : {screenwriter: {authorId: "author_maxim_ivankov", positions: ["screenwriter"]}},
    maximKarganov         : {screenwriter: {authorId: "author_maxim_karganov", positions: ["screenwriter"]}},
    maximSashenkov        : {artist: {authorId: "author_maxim_sashenkov", positions: ["artist"]}},
    margaritaKablukova    : {
        artist  : {authorId: "author_margarita_kablukova", positions: ["artist"]},
        colorist: {authorId: "author_margarita_kablukova", positions: ["colorist"]}
    },
    marinaVaseva          : {colorist: {authorId: "author_marina_vaseva", positions: ["colorist"]}},
    marinaPrivalova       : {artist: {authorId: "author_marina_privalova", positions: ["artist"]}},
    marinaSukhareva       : {artist: {authorId: "author_marina_sukhareva", positions: ["artist"]}},
    mariaVasilyeva        : {colorist: {authorId: "author_maria_vasilyeva", positions: ["colorist"]}},
    mariaZalogina         : {colorist: {authorId: "author_maria_zalogina", positions: ["colorist"]}},
    mariaZolotova         : {colorist: {authorId: "author_maria_zolotova", positions: ["colorist"]}},
    mariaStepunina        : {screenwriter: {authorId: "author_maria_stepunina", positions: ["screenwriter"]}},
    mariaSukhikh          : {artist_colorist: {authorId: "author_maria_sukhikh", positions: ["artist", "colorist"]}},
    markSimonov           : {colorist: {authorId: "author_mark_simonov", positions: ["colorist"]}},
    nadezhdaKonovalova    : {screenwriter: {authorId: "author_nadezhda_konovalova", positions: ["screenwriter"]}},
    nadezhdaShevchenko    : {colorist: {authorId: "author_nadezhda_shevchenko", positions: ["colorist"]}},
    nataliaVorontsova     : {screenwriter: {authorId: "author_natalia_vorontsova", positions: ["screenwriter"]}},
    nataliaDevova         : {screenwriter: {authorId: "author_natalia_devova", positions: ["screenwriter"]}},
    natalyaZaidova        : {artist: {authorId: "author_natalya_zaidova", positions: ["artist"]}},
    natalyaMartinovich    : {
        artist  : {authorId: "author_natalya_martinovich", positions: ["artist"]},
        colorist: {authorId: "author_natalya_martinovich", positions: ["colorist"]}
    },
    natalyaNesterenko     : {
        artist  : {authorId: "author_natalya_nesterenko", positions: ["artist"]},
        colorist: {authorId: "author_natalya_nesterenko", positions: ["colorist"]}
    },
    natalyaRerekina       : {artist: {authorId: "author_natalya_rerekina", positions: ["artist"]}},
    ninaVakueva           : {
        artist  : {authorId: "author_nina_vakueva", positions: ["artist"]},
        colorist: {authorId: "author_nina_vakueva", positions: ["colorist"]}
    },
    oksanaTurlyay         : {artist: {authorId: "author_oksana_turlyay", positions: ["artist"]}},
    olgaKuran             : {screenwriter: {authorId: "author_olga_kuran", positions: ["screenwriter"]}},
    olegErshov            : {colorist: {authorId: "author_oleg_ershov", positions: ["colorist"]}},
    olegOkunev            : {artist: {authorId: "author_oleg_okunev", positions: ["artist"]}},
    olegChudakov          : {artist: {authorId: "author_oleg_chudakov", positions: ["artist"]}},
    polinaShaposhnikova   : {artist: {authorId: "author_polina_shaposhnikova", positions: ["artist"]}},
    reneBartang           : {colorist: {authorId: "author_rene_bartang", positions: ["colorist"]}},
    romanKotkov           : {screenwriter: {authorId: "author_roman_kotkov", positions: ["screenwriter"]}},
    romanTitov            : {
        artist  : {authorId: "author_roman_titov", positions: ["artist"]},
        colorist: {authorId: "author_roman_titov", positions: ["colorist"]}
    },
    sergeyVolkov          : {screenwriter: {authorId: "author_sergey_volkov", positions: ["screenwriter"]}},
    sergeiKlyuchnikov     : {artist: {authorId: "author_sergei_klyuchnikov", positions: ["artist"]}},
    tamaraPetrosyan       : {artist: {authorId: "author_tamara_petrosyan", positions: ["artist"]}},
    tatianaGoryacheva     : {artist: {authorId: "author_tatiana_goryacheva", positions: ["artist"]}},
    tatianaKuzmina        : {artist: {authorId: "author_tatiana_kuzmina", positions: ["artist"]}},
    tatianaYakubets       : {colorist: {authorId: "author_tatiana_yakubets", positions: ["colorist"]}},
    tayaMakarevich        : {
        artist         : {authorId: "author_taya_makarevich", positions: ["artist"]},
        artist_colorist: {authorId: "author_taya_makarevich", positions: ["artist", "colorist"]},
        colorist       : {authorId: "author_taya_makarevich", positions: ["colorist"]}
    },
    eduardPetrovich       : {artist: {authorId: "author_eduard_petrovich", positions: ["artist"]}},
    ericBragalyan         : {artist: {authorId: "author_eric_bragalyan", positions: ["artist"]}},
    yuliaGaribova         : {
        artist             : {authorId: "author_yulia_garibova", positions: ["artist"]},
        artist_screenwriter: {authorId: "author_yulia_garibova", positions: ["artist", "screenwriter"]},
        colorist           : {authorId: "author_yulia_garibova", positions: ["colorist"]}
    },
    yuliaZhuravleva       : {
        artist                      : {authorId: "author_yulia_zhuravleva", positions: ["artist"]},
        artist_colorist             : {authorId: "author_yulia_zhuravleva", positions: ["artist", "colorist"]},
        artist_colorist_screenwriter: {
            authorId : "author_yulia_zhuravleva",
            positions: ["artist", "colorist", "screenwriter"]
        }
    },
    yuliaKazanina         : {artist: {authorId: "author_yulia_kazanina", positions: ["artist"]}},
    yuliaLoganova         : {colorist: {authorId: "author_yulia_loganova", positions: ["colorist"]}},
    yuliaSmirnova         : {colorist: {authorId: "author_yulia_smirnova", positions: ["colorist"]}},
    yuliaShevtsova        : {colorist: {authorId: "author_yulia_shevtsova", positions: ["colorist"]}},
    yuliaYastrebova       : {colorist: {authorId: "author_yulia_yastrebova", positions: ["colorist"]}},
    yuriNekrasov          : {screenwriter: {authorId: "author_yuri_nekrasov", positions: ["screenwriter"]}}
};

export default comicAuthors;
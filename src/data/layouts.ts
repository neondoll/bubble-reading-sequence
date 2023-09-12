import * as vNG from "v-network-graph";

const x_difference = 100;
const y_difference = 90;

const y_besoboy_single = y_difference;
const y_besoboy_tome = y_besoboy_single + y_difference;
const y_besoboy_vol_2_single = y_difference * 3;
const y_besoboy_vol_2_tome = y_besoboy_vol_2_single + y_difference;
const y_besoboy_vol_2_book = y_besoboy_vol_2_single + y_difference * 2;
const y_inok_single = y_difference * 6;
const y_inok_tome = y_inok_single + y_difference;
const y_mirokhodtsy_single = y_difference * 8;
const y_mirokhodtsy_tome = y_mirokhodtsy_single + y_difference;
const y_mirokhodtsy_book = y_mirokhodtsy_single + y_difference * 2;
const y_inok_vs_besoboy_single = (y_besoboy_single + y_inok_single) / 2;
const y_inok_vs_besoboy_tome = y_inok_vs_besoboy_single + y_difference;
const y_krestovyy_pokhod_single = (y_besoboy_vol_2_single + y_mirokhodtsy_single) / 2;
const y_krestovyy_pokhod_tome = y_krestovyy_pokhod_single + y_difference;
const y_besoboy_i_mirokhodtsy_tome = (y_besoboy_vol_2_single + y_besoboy_vol_2_tome + y_mirokhodtsy_single + y_mirokhodtsy_tome) / 4;
const y_vremya_vorona_single = y_difference * 11;
const y_vremya_vorona_tome = y_vremya_vorona_single + y_difference;
const y_okhota_na_vedm_single = y_difference * 13;
const y_okhota_na_vedm_tome = y_okhota_na_vedm_single + y_difference;
const y_mayor_grom_single = y_difference * 15;
const y_mayor_grom_tome = y_mayor_grom_single + y_difference;
const y_igor_grom_single = y_difference * 17;
const y_igor_grom_tome = y_igor_grom_single + y_difference;
const y_igor_grom_book = y_igor_grom_single + y_difference * 2;
const y_mayor_igor_grom_single = y_difference * 19;
const y_mayor_igor_grom_tome = y_mayor_igor_grom_single + y_difference;
const y_chumnoy_doktor_single = y_difference * 21;
const y_chumnoy_doktor_tome = y_chumnoy_doktor_single + y_difference;
const y_mayor_igor_grom_x_chumnoy_doktor_single = (y_mayor_igor_grom_single + y_chumnoy_doktor_single) / 2;
const y_mayor_igor_grom_x_chumnoy_doktor_tome = y_mayor_igor_grom_x_chumnoy_doktor_single + y_difference;
const y_krasnaya_furiya_single = y_difference * 23;
const y_krasnaya_furiya_tome = y_krasnaya_furiya_single + y_difference;
const y_soyuzniki_single = y_difference * 25;
const y_soyuzniki_tome = y_soyuzniki_single + y_difference;
const y_soyuzniki_book = y_soyuzniki_single + y_difference * 2;
const y_mayor_grom_i_krasnaya_furiya_single = (y_mayor_grom_single + y_krasnaya_furiya_single) / 2;
const y_mayor_grom_i_krasnaya_furiya_tome = y_mayor_grom_i_krasnaya_furiya_single + y_difference;
const y_ekslibrium_single = y_difference * 28;
const y_ekslibrium_tome = y_ekslibrium_single + y_difference;
const y_ekslibrium_zhizn_vtoraya_single = y_difference * 30;
const y_ekslibrium_zhizn_vtoraya_tome = y_ekslibrium_zhizn_vtoraya_single + y_difference;
const y_meteora_single = y_difference * 32;
const y_meteora_tome = y_meteora_single + y_difference;
//const y_inok_i_mayor_grom_tome = y_difference * 34;
const y_ziggi_single = y_difference * 34;
const y_ziggi_tome = y_ziggi_single + y_difference;
const y_koshki_myshki_tome = y_difference * 36;
const y_tsezar_velikolepnyy_single = y_difference * 37;
const y_tsezar_velikolepnyy_tome = y_tsezar_velikolepnyy_single + y_difference;
const y_inok_korol_vecherinok_single = y_difference * 39;
const y_tochka_nevozvrata_tome = y_difference * 40;
const y_igor_ugor = y_difference * 41;
const y_druzhkomiks_single = y_difference * 42;
const y_druzhkomiks_tome = y_druzhkomiks_single + y_difference;
//const y_chornyy_pos_single = y_difference * 44;
//const y_chornyy_pos_tome = y_chornyy_pos_single + y_difference;
const y_priklyucheniya_koti_i_druzey_tome = y_difference * 44;
const y_pidzhaki_i_revolvery_tome = y_difference * 45;
const y_zagovor_yedinorogov_tome = y_difference * 46;
const y_tagar_single = y_difference * 47;
const y_tagar_tome = y_tagar_single + y_difference;
const y_krutiksy_single = y_difference * 49;
const y_krutiksy_tome = y_krutiksy_single + y_difference;
//const y_teo_single = y_difference * 51;
//const y_teo_tome = y_teo_single + y_difference;
const y_ziggi_i_shmyg_tome = y_difference * 51;
//const y_dubin_dima_single = y_difference * 52;
const y_volf_khelsing_single = y_difference * 52;
const y_sem_synovey_tome = y_difference * 53;
const y_russkiye_narodnyye_skazki_v_komiksakh_tome = y_difference * 54;
const y_vor_teney_single = y_difference * 55;
const y_vor_teney_tome = y_vor_teney_single + y_difference;
const y_sestra_single = y_difference * 57;
const y_sokol_single = y_difference * 58;
const y_sokol_tome = y_sokol_single + y_difference;
const y_plyushevyy_politseyskiy_single = y_difference * 60;
const y_chornaya_ruka_single = y_difference * 61;
const y_anna_single = y_difference * 62;
const y_kletka_single = y_difference * 63;
const y_impuls_single = y_difference * 64;
const y_ne_budi_likho_single = y_difference * 65;
const y_memento_mori_single = y_difference * 66;
const y_redaktor_single = y_difference * 67;
//const y_karantinnaya_kniga_tome = y_difference * 68;
const y_nechistaya_sila_single = y_difference * 68;
const y_nechistaya_sila_tome = y_nechistaya_sila_single + y_difference;
const y_izbrannitsa_luny_single = y_difference * 70;
const y_izbrannitsa_luny_tome = y_izbrannitsa_luny_single + y_difference;
const y_gromada_single = y_difference * 72;
const y_gromada_tome = y_gromada_single + y_difference;
const y_mir_single = y_difference * 74;
const y_mir_tome = y_mir_single + y_difference;
const y_turbocarp_tome = y_difference * 76;
const y_bubble_khellouin_single = y_difference * 77;
const y_spetsvypusk_volkov_peklo_single = y_difference * 78;
const y_soyuzmultkomiks_single = y_difference * 79;
const y_ledi_siyaniya_single = y_difference * 80;
const y_zolotoy_voin_tome = y_difference * 81;
const y_spetsvypusk_faeton_single = y_difference * 82;
const y_likoris_single = y_difference * 83;
const y_likoris_tome = y_likoris_single + y_difference;

export const layouts: vNG.Layouts = {
    nodes: {
        node_besoboy_single_1: {x: x_difference, y: y_besoboy_single},
        node_mayor_grom_single_1: {x: x_difference, y: y_mayor_grom_single},
        node_inok_single_1: {x: x_difference, y: y_inok_single},
        node_krasnaya_furiya_single_1: {x: x_difference, y: y_krasnaya_furiya_single},
        node_besoboy_single_2: {x: x_difference * 2, y: y_besoboy_single},
        node_mayor_grom_single_2: {x: x_difference * 2, y: y_mayor_grom_single},
        node_inok_single_2: {x: x_difference * 2, y: y_inok_single},
        node_krasnaya_furiya_single_2: {x: x_difference * 2, y: y_krasnaya_furiya_single},
        node_besoboy_single_3: {x: x_difference * 3, y: y_besoboy_single},
        node_mayor_grom_single_3: {x: x_difference * 3, y: y_mayor_grom_single},
        node_inok_single_3: {x: x_difference * 3, y: y_inok_single},
        node_krasnaya_furiya_single_3: {x: x_difference * 3, y: y_krasnaya_furiya_single},
        node_besoboy_single_4: {x: x_difference * 4, y: y_besoboy_single},
        node_mayor_grom_single_4: {x: x_difference * 4, y: y_mayor_grom_single},
        node_inok_single_4: {x: x_difference * 4, y: y_inok_single},
        node_krasnaya_furiya_single_4: {x: x_difference * 4, y: y_krasnaya_furiya_single},
        node_besoboy_single_5: {x: x_difference * 5, y: y_besoboy_single},
        node_mayor_grom_single_5: {x: x_difference * 5, y: y_mayor_grom_single},
        node_inok_single_5: {x: x_difference * 5, y: y_inok_single},
        node_krasnaya_furiya_single_5: {x: x_difference * 5, y: y_krasnaya_furiya_single},
        node_besoboy_single_6: {x: x_difference * 6, y: y_besoboy_single},
        node_mayor_grom_single_6: {x: x_difference * 6, y: y_mayor_grom_single},
        node_inok_single_6: {x: x_difference * 6, y: y_inok_single},
        node_krasnaya_furiya_single_6: {x: x_difference * 6, y: y_krasnaya_furiya_single},
        node_besoboy_single_7: {x: x_difference * 7, y: y_besoboy_single},
        node_mayor_grom_single_7: {x: x_difference * 7, y: y_mayor_grom_single},
        node_inok_single_7: {x: x_difference * 7, y: y_inok_single},
        node_krasnaya_furiya_single_7: {x: x_difference * 7, y: y_krasnaya_furiya_single},
        node_besoboy_single_8: {x: x_difference * 8, y: y_besoboy_single},
        node_mayor_grom_single_8: {x: x_difference * 8, y: y_mayor_grom_single},
        node_inok_single_8: {x: x_difference * 8, y: y_inok_single},
        node_krasnaya_furiya_single_8: {x: x_difference * 8, y: y_krasnaya_furiya_single},
        node_besoboy_single_9: {x: x_difference * 9, y: y_besoboy_single},
        node_mayor_grom_single_9: {x: x_difference * 9, y: y_mayor_grom_single},
        node_inok_single_9: {x: x_difference * 9, y: y_inok_single},
        node_krasnaya_furiya_single_9: {x: x_difference * 9, y: y_krasnaya_furiya_single},
        node_besoboy_single_10: {x: x_difference * 10, y: y_besoboy_single},
        node_mayor_grom_single_10: {x: x_difference * 10, y: y_mayor_grom_single},
        node_inok_single_10: {x: x_difference * 10, y: y_inok_single},
        node_krasnaya_furiya_single_10: {x: x_difference * 10, y: y_krasnaya_furiya_single},
        node_besoboy_single_11: {x: x_difference * 11, y: y_besoboy_single},
        node_mayor_grom_single_11: {x: x_difference * 11, y: y_mayor_grom_single},
        node_inok_single_11: {x: x_difference * 11, y: y_inok_single},
        node_krasnaya_furiya_single_11: {x: x_difference * 11, y: y_krasnaya_furiya_single},
        node_besoboy_single_12: {x: x_difference * 12, y: y_besoboy_single},
        node_mayor_grom_single_12: {x: x_difference * 12, y: y_mayor_grom_single},
        node_inok_single_12: {x: x_difference * 12, y: y_inok_single},
        node_krasnaya_furiya_single_12: {x: x_difference * 12, y: y_krasnaya_furiya_single},
        node_besoboy_single_13: {x: x_difference * 13, y: y_besoboy_single},
        node_mayor_grom_single_13: {x: x_difference * 13, y: y_mayor_grom_single},
        node_inok_single_13: {x: x_difference * 13, y: y_inok_single},
        node_krasnaya_furiya_single_13: {x: x_difference * 13, y: y_krasnaya_furiya_single},
        node_besoboy_single_14: {x: x_difference * 14, y: y_besoboy_single},
        node_mayor_grom_single_14: {x: x_difference * 14, y: y_mayor_grom_single},
        node_inok_single_14: {x: x_difference * 14, y: y_inok_single},
        node_krasnaya_furiya_single_14: {x: x_difference * 14, y: y_krasnaya_furiya_single},
        node_besoboy_single_15: {x: x_difference * 15, y: y_inok_vs_besoboy_single},
        node_mayor_grom_single_15: {x: x_difference * 15, y: y_mayor_grom_single},
        node_inok_single_15: {x: x_difference * 16, y: y_inok_vs_besoboy_single},
        node_krasnaya_furiya_single_15: {x: x_difference * 16, y: y_krasnaya_furiya_single},
        node_inok_vs_besoboy_single_1: {x: x_difference * 17, y: y_inok_vs_besoboy_single},
        node_besoboy_single_16: {x: x_difference * 18, y: y_inok_vs_besoboy_single},
        node_mayor_grom_single_16: {x: x_difference * 18, y: y_mayor_grom_single},
        node_inok_single_16: {x: x_difference * 19, y: y_inok_vs_besoboy_single},
        node_krasnaya_furiya_single_16: {x: x_difference * 19, y: y_krasnaya_furiya_single},
        node_inok_vs_besoboy_single_2: {x: x_difference * 20, y: y_inok_vs_besoboy_single},
        node_krasnaya_furiya_single_16_1: {x: x_difference * 20, y: y_krasnaya_furiya_single},
        node_besoboy_single_17: {x: x_difference * 21, y: y_inok_vs_besoboy_single},
        node_mayor_grom_single_17: {x: x_difference * 21, y: y_mayor_grom_single},
        node_inok_single_17: {x: x_difference * 22, y: y_inok_vs_besoboy_single},
        node_krasnaya_furiya_single_17: {x: x_difference * 22, y: y_krasnaya_furiya_single},
        node_inok_vs_besoboy_single_3: {x: x_difference * 23, y: y_inok_vs_besoboy_single},
        node_besoboy_single_18: {x: x_difference * 24, y: y_besoboy_single},
        node_mayor_grom_single_18: {x: x_difference * 24, y: y_mayor_grom_single},
        node_inok_single_18: {x: x_difference * 24, y: y_inok_single},
        node_krasnaya_furiya_single_18: {x: x_difference * 24, y: y_krasnaya_furiya_single},
        node_besoboy_single_19: {x: x_difference * 25, y: y_besoboy_single},
        node_mayor_grom_single_19: {x: x_difference * 25, y: y_mayor_grom_single},
        node_inok_single_19: {x: x_difference * 25, y: y_inok_single},
        node_krasnaya_furiya_single_19: {x: x_difference * 25, y: y_krasnaya_furiya_single},
        node_besoboy_single_20: {x: x_difference * 26, y: y_besoboy_single},
        node_mayor_grom_single_20: {x: x_difference * 26, y: y_mayor_grom_single},
        node_inok_single_20: {x: x_difference * 26, y: y_inok_single},
        node_krasnaya_furiya_single_20: {x: x_difference * 26, y: y_krasnaya_furiya_single},
        node_besoboy_single_21: {x: x_difference * 27, y: y_besoboy_single},
        node_mayor_grom_single_21: {x: x_difference * 27, y: y_mayor_grom_single},
        node_inok_single_21: {x: x_difference * 27, y: y_inok_single},
        node_krasnaya_furiya_single_21: {x: x_difference * 27, y: y_krasnaya_furiya_single},
        node_besoboy_single_22: {x: x_difference * 28, y: y_besoboy_single},
        node_mayor_grom_single_22: {x: x_difference * 28, y: y_mayor_grom_single},
        node_inok_single_22: {x: x_difference * 28, y: y_inok_single},
        node_krasnaya_furiya_single_22: {x: x_difference * 28, y: y_krasnaya_furiya_single},
        node_besoboy_single_23: {x: x_difference * 29, y: y_besoboy_single},
        node_mayor_grom_single_23: {x: x_difference * 29, y: y_mayor_grom_single},
        node_inok_single_23: {x: x_difference * 29, y: y_inok_single},
        node_krasnaya_furiya_single_23: {x: x_difference * 29, y: y_krasnaya_furiya_single},
        node_besoboy_single_24: {x: x_difference * 30, y: y_besoboy_single},
        node_mayor_grom_single_24: {x: x_difference * 30, y: y_mayor_grom_single},
        node_inok_single_24: {x: x_difference * 30, y: y_inok_single},
        node_krasnaya_furiya_single_24: {x: x_difference * 30, y: y_krasnaya_furiya_single},
        node_besoboy_single_25: {x: x_difference * 31, y: y_besoboy_single},
        node_besoboy_tome_1: {x: x_difference * 4, y: y_besoboy_tome},                 /* 1 - 7 */
        node_mayor_grom_tome_1: {x: x_difference * 3.5, y: y_mayor_grom_tome},         /* 1 - 6 */
        node_inok_tome_1: {x: x_difference * 4, y: y_inok_tome},                       /* 1 - 7 */
        node_krasnaya_furiya_tome_1: {x: x_difference * 4, y: y_krasnaya_furiya_tome}, /* 1 - 7 */
        node_mayor_grom_single_25: {x: x_difference * 31, y: y_mayor_grom_single},
        node_inok_single_25: {x: x_difference * 31, y: y_inok_single},
        node_krasnaya_furiya_single_25: {x: x_difference * 31, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_1: {x: x_difference * 31, y: y_ekslibrium_single},
        node_meteora_single_1: {x: x_difference * 31, y: y_meteora_single},
        node_besoboy_single_26: {x: x_difference * 32, y: y_besoboy_single},
        node_mayor_grom_single_26: {x: x_difference * 32, y: y_mayor_grom_single},
        node_inok_single_26: {x: x_difference * 32, y: y_inok_single},
        node_krasnaya_furiya_single_26: {x: x_difference * 32, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_2: {x: x_difference * 32, y: y_ekslibrium_single},
        node_meteora_single_2: {x: x_difference * 32, y: y_meteora_single},
        node_besoboy_single_27: {x: x_difference * 33, y: y_besoboy_single},
        node_mayor_grom_single_27: {x: x_difference * 33, y: y_mayor_grom_single},
        node_inok_single_27: {x: x_difference * 33, y: y_inok_single},
        node_krasnaya_furiya_single_27: {x: x_difference * 33, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_3: {x: x_difference * 33, y: y_ekslibrium_single},
        node_besoboy_tome_2: {x: x_difference * 11, y: y_besoboy_tome},                 /* 8 - 14 */
        node_mayor_grom_tome_2: {x: x_difference * 8.5, y: y_mayor_grom_tome},          /* 7 - 10 */
        node_inok_tome_2: {x: x_difference * 11, y: y_inok_tome},                       /* 8 - 14 */
        node_krasnaya_furiya_tome_2: {x: x_difference * 12, y: y_krasnaya_furiya_tome}, /* 8 - 15*/
        node_meteora_single_3: {x: x_difference * 33, y: y_meteora_single},
        node_besoboy_single_28: {x: x_difference * 34, y: y_besoboy_single},
        node_mayor_grom_single_28: {x: x_difference * 34, y: y_mayor_grom_single},
        node_inok_single_28: {x: x_difference * 34, y: y_inok_single},
        node_krasnaya_furiya_single_28: {x: x_difference * 34, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_4: {x: x_difference * 34, y: y_ekslibrium_single},
        node_meteora_single_4: {x: x_difference * 34, y: y_meteora_single},
        node_besoboy_single_29: {x: x_difference * 35, y: y_besoboy_single},
        node_mayor_grom_single_29: {x: x_difference * 35, y: y_mayor_grom_single},
        node_inok_single_29: {x: x_difference * 35, y: y_inok_single},
        node_krasnaya_furiya_single_29: {x: x_difference * 35, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_5: {x: x_difference * 35, y: y_ekslibrium_single},
        node_meteora_single_5: {x: x_difference * 35, y: y_meteora_single},
        node_besoboy_single_30: {x: x_difference * 36, y: y_besoboy_single},
        node_mayor_grom_single_30: {x: x_difference * 36, y: y_mayor_grom_single},
        node_inok_single_30: {x: x_difference * 36, y: y_inok_single},
        node_krasnaya_furiya_single_30: {x: x_difference * 36, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_6: {x: x_difference * 36, y: y_ekslibrium_single},
        node_mayor_grom_tome_3: {x: x_difference * 17.5, y: y_mayor_grom_tome},       /* 11 - 18 */
        node_inok_vs_besoboy_tome: {x: x_difference * 19, y: y_inok_vs_besoboy_tome}, /* b_15, i_15, i_vs_b_1, b_16, i_16, i_vs_b_2, b_17, i_17, i_vs_b_3 */
        node_meteora_single_6: {x: x_difference * 36, y: y_meteora_single},
        node_besoboy_single_31: {x: x_difference * 37, y: y_besoboy_single},
        node_mayor_grom_single_31: {x: x_difference * 37, y: y_mayor_grom_single},
        node_inok_single_31: {x: x_difference * 37, y: y_inok_single},
        node_krasnaya_furiya_single_31: {x: x_difference * 37, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_7: {x: x_difference * 37, y: y_ekslibrium_single},
        node_meteora_single_7: {x: x_difference * 37, y: y_meteora_single},
        node_besoboy_single_32: {x: x_difference * 38, y: y_besoboy_single},
        node_inok_i_mayor_grom_tome: {x: x_difference * 69, y: (y_inok_single + y_inok_tome) / 2}, /* {x: x_difference * 38, y: y_inok_i_mayor_grom_tome} */
        node_mayor_grom_single_32: {x: x_difference * 38, y: y_mayor_grom_single},
        node_inok_single_32: {x: x_difference * 38, y: y_inok_single},
        node_krasnaya_furiya_single_32: {x: x_difference * 38, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_8: {x: x_difference * 38, y: y_ekslibrium_single},
        node_meteora_single_8: {x: x_difference * 38, y: y_meteora_single},
        node_besoboy_single_33: {x: x_difference * 39, y: y_besoboy_single},
        node_mayor_grom_single_33: {x: x_difference * 39, y: y_mayor_grom_single},
        node_inok_single_33: {x: x_difference * 39, y: y_inok_single},
        node_krasnaya_furiya_single_33: {x: x_difference * 39, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_9: {x: x_difference * 39, y: y_ekslibrium_single},
        node_meteora_single_9: {x: x_difference * 39, y: y_meteora_single},
        node_besoboy_single_34: {x: x_difference * 40, y: y_besoboy_single},
        node_mayor_grom_single_34: {x: x_difference * 40, y: y_mayor_grom_single},
        node_inok_single_34: {x: x_difference * 40, y: y_inok_single},
        node_krasnaya_furiya_single_34: {x: x_difference * 40, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_10: {x: x_difference * 40, y: y_ekslibrium_single},
        node_meteora_single_10: {x: x_difference * 40, y: y_meteora_single},
        node_besoboy_tome_3: {x: x_difference * 26, y: y_besoboy_tome},                 /* 18 - 22 */
        node_inok_tome_3: {x: x_difference * 25.5, y: y_inok_tome},                     /* 18 - 21 */
        node_krasnaya_furiya_tome_3: {x: x_difference * 22, y: y_krasnaya_furiya_tome}, /* 16 - 19 */
        node_besoboy_single_35: {x: x_difference * 41, y: y_besoboy_single},
        node_mayor_grom_single_35: {x: x_difference * 41, y: y_mayor_grom_single},
        node_inok_single_35: {x: x_difference * 41, y: y_inok_single},
        node_krasnaya_furiya_single_35: {x: x_difference * 41, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_11: {x: x_difference * 41, y: y_ekslibrium_single},
        node_meteora_single_11: {x: x_difference * 41, y: y_meteora_single},
        node_krasnaya_furiya_tome_4: {x: x_difference * 28, y: y_krasnaya_furiya_tome}, /* 20 - 24 */
        node_besoboy_single_36: {x: x_difference * 42, y: y_besoboy_single},
        node_inok_tome_4: {x: x_difference * 30, y: y_inok_tome}, /* 22 - 26 */
        node_mayor_grom_single_36: {x: x_difference * 42, y: y_mayor_grom_single},
        node_inok_single_36: {x: x_difference * 42, y: y_inok_single},
        node_krasnaya_furiya_single_36: {x: x_difference * 42, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_12: {x: x_difference * 42, y: y_ekslibrium_single},
        node_meteora_single_12: {x: x_difference * 42, y: y_meteora_single},
        node_besoboy_single_37: {x: x_difference * 43, y: y_besoboy_single},
        node_mayor_grom_single_37: {x: x_difference * 43, y: y_mayor_grom_single},
        node_ziggi_single_1: {x: x_difference * 43, y: y_ziggi_single},
        node_besoboy_tome_4: {x: x_difference * 31, y: y_besoboy_tome},         /* 23 - 27 */
        node_mayor_grom_tome_4: {x: x_difference * 27.5, y: y_mayor_grom_tome}, /* 19 - 24 */
        node_ekslibrium_tome_1: {x: x_difference * 33, y: y_ekslibrium_tome},   /* 1 - 5 */
        node_meteora_tome_1: {x: x_difference * 33.5, y: y_meteora_tome},       /* 1 - 6 */
        node_vremya_vorona_tome_predystoriya: {x: x_difference * 43, y: y_vremya_vorona_tome},
        node_vremya_vorona_single_prolog: {x: x_difference * 44, y: y_vremya_vorona_single},
        node_inok_single_37: {x: x_difference * 44, y: y_inok_single},
        node_krasnaya_furiya_single_37: {x: x_difference * 44, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_13: {x: x_difference * 44, y: y_ekslibrium_single},
        node_meteora_single_13: {x: x_difference * 44, y: y_meteora_single},
        node_vremya_vorona_single_1: {x: x_difference * 45, y: y_vremya_vorona_single},
        node_besoboy_single_38: {x: x_difference * 45, y: y_besoboy_single},
        node_mayor_grom_single_38: {x: x_difference * 46, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_inok_single_38: {x: x_difference * 46, y: y_inok_single},
        node_krasnaya_furiya_single_38: {x: x_difference * 47, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_ekslibrium_single_14: {x: x_difference * 47, y: y_ekslibrium_single},
        node_meteora_single_14: {x: x_difference * 47, y: y_meteora_single},
        node_vremya_vorona_single_2: {x: x_difference * 48, y: y_vremya_vorona_single},
        node_besoboy_single_39: {x: x_difference * 48, y: y_besoboy_single},
        node_ziggi_single_2: {x: x_difference * 48, y: y_ziggi_single},
        node_mayor_grom_single_39: {x: x_difference * 49, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_koshki_myshki_tome_1: {x: x_difference * 49, y: y_koshki_myshki_tome},
        node_inok_single_39: {x: x_difference * 49, y: y_inok_single},
        node_krasnaya_furiya_single_39: {x: x_difference * 50, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_ekslibrium_single_15: {x: x_difference * 50, y: y_ekslibrium_single},
        node_meteora_single_15: {x: x_difference * 50, y: y_meteora_single},
        node_vremya_vorona_single_3: {x: x_difference * 51, y: y_vremya_vorona_single},
        node_tsezar_velikolepnyy_single_1: {x: x_difference * 51, y: y_tsezar_velikolepnyy_single},
        node_besoboy_single_40: {x: x_difference * 52, y: y_besoboy_single},
        node_inok_single_40: {x: x_difference * 52, y: y_inok_single},
        node_mayor_grom_single_40: {x: x_difference * 52, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_tsezar_velikolepnyy_single_2: {x: x_difference * 52, y: y_tsezar_velikolepnyy_single},
        node_krasnaya_furiya_single_40: {x: x_difference * 53, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_ekslibrium_single_16: {x: x_difference * 53, y: y_ekslibrium_single},
        node_meteora_single_16: {x: x_difference * 53, y: y_meteora_single},
        node_tsezar_velikolepnyy_single_3: {x: x_difference * 53, y: y_tsezar_velikolepnyy_single},
        node_vremya_vorona_single_4: {x: x_difference * 54, y: y_vremya_vorona_single},
        node_besoboy_single_41: {x: x_difference * 54, y: y_besoboy_single},
        node_tsezar_velikolepnyy_single_4: {x: x_difference * 54, y: y_tsezar_velikolepnyy_single},
        node_krasnaya_furiya_single_41: {x: x_difference * 55, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_inok_single_41: {x: x_difference * 55, y: y_inok_single},
        node_tsezar_velikolepnyy_single_5: {x: x_difference * 55, y: y_tsezar_velikolepnyy_single},
        node_mayor_grom_single_41: {x: x_difference * 56, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_ekslibrium_single_17: {x: x_difference * 56, y: y_ekslibrium_single},
        node_meteora_single_17: {x: x_difference * 56, y: y_meteora_single},
        node_vremya_vorona_single_5: {x: x_difference * 57, y: y_vremya_vorona_single},
        node_ziggi_single_3: {x: x_difference * 57, y: y_ziggi_single},
        node_besoboy_tome_5: {x: x_difference * 36.5, y: y_besoboy_tome},     /* 28 - 33 */
        node_mayor_grom_tome_5: {x: x_difference * 35, y: y_mayor_grom_tome}, /* 25 - 33 */
        node_ekslibrium_tome_2: {x: x_difference * 38, y: y_ekslibrium_tome}, /* 6 - 10 */
        node_vremya_vorona_tome_epilog: {x: x_difference * 58, y: y_vremya_vorona_tome},
        node_krasnaya_furiya_single_42: {x: x_difference * 59, y: y_krasnaya_furiya_single},
        node_besoboy_single_42: {x: x_difference * 59, y: y_besoboy_single},
        node_inok_korol_vecherinok_single: {x: x_difference * 59, y: y_inok_korol_vecherinok_single},
        node_mayor_grom_single_42: {x: x_difference * 59, y: y_mayor_grom_single},
        node_inok_single_42: {x: x_difference * 59, y: y_inok_single},
        node_ekslibrium_single_18: {x: x_difference * 59, y: y_ekslibrium_single},
        node_inok_tome_5: {x: x_difference * 35, y: y_inok_tome},                       /* 27 - 31 */
        node_krasnaya_furiya_tome_5: {x: x_difference * 34, y: y_krasnaya_furiya_tome}, /* 25 - 31 */
        node_meteora_tome_2: {x: x_difference * 39.5, y: y_meteora_tome},               /* 7 - 12 */
        node_meteora_single_18: {x: x_difference * 59, y: y_meteora_single},
        node_besoboy_single_43: {x: x_difference * 60, y: y_besoboy_single},
        node_mayor_grom_single_43: {x: x_difference * 60, y: y_mayor_grom_single},
        node_inok_single_43: {x: x_difference * 60, y: y_inok_single},
        node_krasnaya_furiya_single_43: {x: x_difference * 60, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_19: {x: x_difference * 60, y: y_ekslibrium_single},
        node_meteora_single_19: {x: x_difference * 60, y: y_meteora_single},
        node_besoboy_single_44: {x: x_difference * 61, y: y_besoboy_single},
        node_mayor_grom_single_44: {x: x_difference * 61, y: y_mayor_grom_single},
        node_inok_single_44: {x: x_difference * 61, y: y_inok_single},
        node_krasnaya_furiya_single_44: {x: x_difference * 61, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_20: {x: x_difference * 61, y: y_ekslibrium_single},
        node_meteora_single_20: {x: x_difference * 61, y: y_meteora_single},
        node_besoboy_single_45: {x: x_difference * 62, y: y_besoboy_single},
        node_mayor_grom_single_45: {x: x_difference * 62, y: y_mayor_grom_single},
        node_besoboy_tome_6: {x: x_difference * 41.5, y: y_besoboy_tome},       /* 34 - 37 */
        node_mayor_grom_tome_6: {x: x_difference * 41.5, y: y_mayor_grom_tome}, /* 34 - 37 */
        node_inok_single_45: {x: x_difference * 62, y: y_inok_single},
        node_ziggi_single_4: {x: x_difference * 62, y: y_ziggi_single},
        node_ziggi_single_5: {x: x_difference * 63, y: y_ziggi_single},
        node_krasnaya_furiya_tome_6: {x: x_difference * 41, y: y_krasnaya_furiya_tome}, /* 32 - 37 */
        node_krasnaya_furiya_single_45: {x: x_difference * 63, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_21: {x: x_difference * 63, y: y_ekslibrium_single},
        node_meteora_single_21: {x: x_difference * 63, y: y_meteora_single},
        node_besoboy_single_46: {x: x_difference * 63, y: y_besoboy_single},
        node_mayor_grom_single_46: {x: x_difference * 63, y: y_mayor_grom_single},
        node_inok_single_46: {x: x_difference * 63, y: y_inok_single},
        node_krasnaya_furiya_single_46: {x: x_difference * 64, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_22: {x: x_difference * 64, y: y_ekslibrium_single},
        node_meteora_single_22: {x: x_difference * 64, y: y_meteora_single},
        node_tsezar_velikolepnyy_tome: {x: x_difference * 53, y: y_tsezar_velikolepnyy_tome}, /* 1 - 5 */
        node_besoboy_single_47: {x: x_difference * 64, y: y_besoboy_single},
        node_mayor_grom_single_47: {x: x_difference * 64, y: y_mayor_grom_single},
        node_inok_tome_6: {x: x_difference * 42, y: y_inok_tome}, /* 32 - 38 */
        node_inok_single_47: {x: x_difference * 64, y: y_inok_single},
        node_krasnaya_furiya_single_47: {x: x_difference * 65, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_23: {x: x_difference * 65, y: y_ekslibrium_single},
        node_besoboy_tome_7: {x: x_difference * 52, y: y_besoboy_tome},                                           /* 38 - 42 */
        node_mayor_grom_i_krasnaya_furiya_tome_7: {x: x_difference * 51, y: y_mayor_grom_i_krasnaya_furiya_tome}, /* mg_38, kf_38, mg_39, kf_39, mg_40, kf_40, kf_41, mg_41 */
        node_inok_tome_7: {x: x_difference * 54, y: y_inok_tome},                                                 /* 39 - 42 */
        node_meteora_single_23: {x: x_difference * 65, y: y_meteora_single},
        node_besoboy_single_48: {x: x_difference * 65, y: y_besoboy_single},
        node_mayor_grom_single_48: {x: x_difference * 65, y: y_mayor_grom_single},
        node_ekslibrium_tome_3: {x: x_difference * 48.5, y: y_ekslibrium_tome},     /* 11 - 17 */
        node_meteora_tome_3: {x: x_difference * 48, y: y_meteora_tome},             /* 13 - 17 */
        node_vremya_vorona_tome: {x: x_difference * 50.5, y: y_vremya_vorona_tome}, /* 0 - 5 */
        node_koshki_myshki_tome_2: {x: x_difference * 65, y: y_koshki_myshki_tome},
        node_inok_single_48: {x: x_difference * 65, y: y_inok_single},
        node_krasnaya_furiya_single_48: {x: x_difference * 66, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_24: {x: x_difference * 66, y: y_ekslibrium_single},
        node_meteora_single_24: {x: x_difference * 66, y: y_meteora_single},
        node_besoboy_single_49: {x: x_difference * 66, y: y_besoboy_single},
        node_mayor_grom_single_49: {x: x_difference * 66, y: y_mayor_grom_single},
        node_inok_single_49: {x: x_difference * 66, y: y_inok_single},
        node_krasnaya_furiya_single_49: {x: x_difference * 67, y: y_krasnaya_furiya_single},
        node_ekslibrium_single_25: {x: x_difference * 67, y: y_ekslibrium_single},
        node_meteora_single_25: {x: x_difference * 67, y: y_meteora_single},
        node_besoboy_tome_8: {x: x_difference * 61.5, y: y_besoboy_tome}, /* 43 - 46 */
        node_ekslibrium_single_26: {x: x_difference * 68, y: y_ekslibrium_single},
        node_besoboy_single_50: {x: x_difference * 68, y: y_besoboy_single},
        node_mayor_grom_single_50: {x: x_difference * 68, y: y_mayor_grom_single},
        node_inok_single_50: {x: x_difference * 68, y: y_inok_single},
        node_krasnaya_furiya_single_50: {x: x_difference * 68, y: y_krasnaya_furiya_single},
        node_meteora_single_26: {x: x_difference * 68, y: y_meteora_single},
        node_krasnaya_furiya_tome_8: {x: x_difference * 61, y: y_krasnaya_furiya_tome}, /* 42 - 45 */
        node_ziggi_tome: {x: x_difference * 53, y: y_ziggi_tome},                       /* 1 - 5 */
        node_tochka_nevozvrata_tome: {x: x_difference * 68, y: y_tochka_nevozvrata_tome},
        node_besoboy_vol_2_single_1: {x: x_difference * 69, y: y_besoboy_vol_2_single},
        node_igor_grom_single_1: {x: x_difference * 69, y: y_igor_grom_single},
        node_mirokhodtsy_single_1: {x: x_difference * 69, y: y_mirokhodtsy_single},
        node_soyuzniki_single_1: {x: x_difference * 69, y: y_soyuzniki_single},
        node_ekslibrium_single_27: {x: x_difference * 69, y: y_ekslibrium_single},
        node_meteora_single_27: {x: x_difference * 69, y: y_meteora_single},
        node_soyuzniki_single_2: {x: x_difference * 70, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_2: {x: x_difference * 70, y: y_besoboy_vol_2_single},
        node_igor_grom_single_2: {x: x_difference * 70, y: y_igor_grom_single},
        node_mirokhodtsy_single_2: {x: x_difference * 70, y: y_mirokhodtsy_single},
        node_mayor_grom_single_shans: {x: x_difference * 70, y: (y_mayor_grom_single + y_mayor_grom_tome) / 2},
        node_ekslibrium_single_28: {x: x_difference * 70, y: y_ekslibrium_single},
        node_meteora_single_28: {x: x_difference * 70, y: y_meteora_single},
        node_soyuzniki_single_3: {x: x_difference * 71, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_3: {x: x_difference * 71, y: y_besoboy_vol_2_single},
        node_igor_grom_single_3: {x: x_difference * 71, y: y_igor_grom_single},
        node_mirokhodtsy_single_3: {x: x_difference * 71, y: y_mirokhodtsy_single},
        node_ekslibrium_single_29: {x: x_difference * 71, y: y_ekslibrium_single},
        node_meteora_single_29: {x: x_difference * 71, y: y_meteora_single},
        node_soyuzniki_single_4: {x: x_difference * 72, y: y_soyuzniki_single},
        node_igor_ugor_tome_1: {x: x_difference * 72, y: y_igor_ugor},
        node_besoboy_vol_2_single_4: {x: x_difference * 72, y: y_besoboy_vol_2_single},
        node_igor_grom_single_4: {x: x_difference * 72, y: y_igor_grom_single},
        node_mirokhodtsy_single_4: {x: x_difference * 72, y: y_mirokhodtsy_single},
        node_ekslibrium_single_30: {x: x_difference * 72, y: y_ekslibrium_single},
        node_meteora_single_30: {x: x_difference * 72, y: y_meteora_single},
        node_soyuzniki_single_5: {x: x_difference * 73, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_5: {x: x_difference * 73, y: y_besoboy_vol_2_single},
        node_igor_grom_single_5: {x: x_difference * 73, y: y_igor_grom_single},
        node_besoboy_tome_9: {x: x_difference * 66, y: y_besoboy_tome}, /* 47 - 50 */
        node_mirokhodtsy_single_5: {x: x_difference * 73, y: y_mirokhodtsy_single},
        node_ekslibrium_single_31: {x: x_difference * 73, y: y_ekslibrium_single},
        node_meteora_single_31: {x: x_difference * 73, y: y_meteora_single},
        node_soyuzniki_single_6: {x: x_difference * 74, y: y_soyuzniki_single},
        node_mayor_grom_tome_8: {x: x_difference * 63.5, y: y_mayor_grom_tome}, /* 42 - 50 */
        node_inok_tome_8: {x: x_difference * 64, y: y_inok_tome},               /* 43 - 50 */
        node_besoboy_vol_2_single_6: {x: x_difference * 74, y: y_besoboy_vol_2_single},
        node_igor_grom_single_6: {x: x_difference * 74, y: y_igor_grom_single},
        node_krasnaya_furiya_tome_9: {x: x_difference * 66, y: y_krasnaya_furiya_tome}, /* 46 - 50 */
        node_mirokhodtsy_single_6: {x: x_difference * 74, y: y_mirokhodtsy_single},
        node_ekslibrium_single_32: {x: x_difference * 74, y: y_ekslibrium_single},
        node_meteora_single_32: {x: x_difference * 74, y: y_meteora_single},
        node_soyuzniki_single_7: {x: x_difference * 75, y: y_soyuzniki_single},
        node_druzhkomiks_single_1: {x: x_difference * 75, y: y_druzhkomiks_single},
        node_besoboy_vol_2_single_7: {x: x_difference * 75, y: y_besoboy_vol_2_single},
        node_igor_grom_single_7: {x: x_difference * 75, y: y_igor_grom_single},
        node_mirokhodtsy_single_7: {x: x_difference * 75, y: y_mirokhodtsy_single},
        node_ekslibrium_single_33: {x: x_difference * 75, y: y_ekslibrium_single},
        node_meteora_single_33: {x: x_difference * 75, y: y_meteora_single},
        node_druzhkomiks_single_2: {x: x_difference * 76, y: y_druzhkomiks_single},
        node_ekslibrium_tome_4: {x: x_difference * 62, y: y_ekslibrium_tome}, /* 18 - 23 */
        node_meteora_tome_4: {x: x_difference * 63, y: y_meteora_tome},       /* 18 - 25 */
        node_soyuzniki_single_8: {x: x_difference * 76, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_8: {x: x_difference * 76, y: y_besoboy_vol_2_single},
        node_igor_grom_single_8: {x: x_difference * 76, y: y_igor_grom_single},
        node_mirokhodtsy_single_8: {x: x_difference * 76, y: y_mirokhodtsy_single},
        node_ekslibrium_single_34: {x: x_difference * 76, y: y_ekslibrium_single},
        node_meteora_single_34: {x: x_difference * 76, y: y_meteora_single},
        node_druzhkomiks_single_3: {x: x_difference * 77, y: y_druzhkomiks_single},
        node_soyuzniki_single_9: {x: x_difference * 77, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_9: {x: x_difference * 77, y: y_besoboy_vol_2_single},
        node_igor_grom_single_9: {x: x_difference * 77, y: y_igor_grom_single},
        node_mirokhodtsy_single_9: {x: x_difference * 77, y: y_mirokhodtsy_single},
        node_ekslibrium_single_35: {x: x_difference * 77, y: y_ekslibrium_single},
        node_meteora_single_35: {x: x_difference * 77, y: y_meteora_single},
        node_chornyy_pos_single_1: {x: x_difference * 77, y: y_besoboy_single}, /* {x: x_difference * 77, y: y_chornyy_pos_single} */
        node_besoboy_vol_2_book_1: {x: x_difference * 71, y: y_besoboy_vol_2_book}, /* 1 - 5 */
        node_besoboy_vol_2_tome_1: {x: x_difference * 71, y: y_besoboy_vol_2_tome}, /* 1 - 5 */
        node_igor_grom_book_1: {x: x_difference * 71.5, y: y_igor_grom_book},       /* 1 - 6 */
        node_igor_grom_tome_1: {x: x_difference * 71.5, y: y_igor_grom_tome},       /* 1 - 6 */
        node_soyuzniki_book_1: {x: x_difference * 70.5, y: y_soyuzniki_book},       /* 1 - 4 */
        node_soyuzniki_tome_1: {x: x_difference * 70.5, y: y_soyuzniki_tome},       /* 1 - 4 */
        node_mirokhodtsy_book_1: {x: x_difference * 71.5, y: y_mirokhodtsy_book},   /* 1 - 6 */
        node_mirokhodtsy_tome_1: {x: x_difference * 71.5, y: y_mirokhodtsy_tome},   /* 1 - 6 */
        node_ekslibrium_tome_5: {x: x_difference * 68.5, y: y_ekslibrium_tome},     /* 24 - 29 */
        node_meteora_tome_5: {x: x_difference * 70, y: y_meteora_tome},             /* 26 - 30 */
        node_priklyucheniya_koti_i_druzey_tome: {x: x_difference * 77, y: y_priklyucheniya_koti_i_druzey_tome},
        node_pidzhaki_i_revolvery_tome_1: {x: x_difference * 77, y: y_pidzhaki_i_revolvery_tome},
        node_zagovor_yedinorogov_tome_1: {x: x_difference * 77, y: y_zagovor_yedinorogov_tome},
        node_tagar_tome_1_single_prolog: {x: x_difference * 75, y: y_tagar_single},
        node_tagar_tome_1_single_1: {x: x_difference * 76, y: y_tagar_single},
        node_tagar_tome_1_single_2: {x: x_difference * 77, y: y_tagar_single},
        node_tagar_tome_1_single_3: {x: x_difference * 78, y: y_tagar_single},
        node_tagar_tome_1_single_4: {x: x_difference * 79, y: y_tagar_single},
        node_tagar_tome_1: {x: x_difference * 77, y: y_tagar_tome}, /* 0 - 4 */
        node_koshki_myshki_tome_3: {x: x_difference * 77, y: y_koshki_myshki_tome},
        node_druzhkomiks_single_4: {x: x_difference * 78, y: y_druzhkomiks_single},
        node_soyuzniki_single_10: {x: x_difference * 78, y: y_soyuzniki_single},
        node_krutiksy_single_1: {x: x_difference * 78, y: y_krutiksy_single},
        node_besoboy_vol_2_single_10: {x: x_difference * 78, y: y_besoboy_vol_2_single},
        node_igor_grom_single_10: {x: x_difference * 78, y: y_igor_grom_single},
        node_mirokhodtsy_single_10: {x: x_difference * 78, y: y_mirokhodtsy_single},
        node_ekslibrium_single_36: {x: x_difference * 78, y: y_ekslibrium_single},
        node_meteora_single_36: {x: x_difference * 78, y: y_meteora_single},
        node_chornyy_pos_single_2: {x: x_difference * 78, y: y_besoboy_single}, /* {x: x_difference * 78, y: y_chornyy_pos_single} */
        node_druzhkomiks_single_5: {x: x_difference * 79, y: y_druzhkomiks_single},
        node_soyuzniki_single_11: {x: x_difference * 79, y: y_soyuzniki_single},
        node_krutiksy_single_2: {x: x_difference * 79, y: y_krutiksy_single},
        node_besoboy_vol_2_single_11: {x: x_difference * 79, y: y_besoboy_vol_2_single},
        node_igor_grom_single_11: {x: x_difference * 79, y: y_igor_grom_single},
        node_mirokhodtsy_single_11: {x: x_difference * 79, y: y_mirokhodtsy_single},
        node_ekslibrium_single_37: {x: x_difference * 79, y: y_ekslibrium_single},
        node_meteora_single_37: {x: x_difference * 79, y: y_meteora_single},
        node_chornyy_pos_single_3: {x: x_difference * 79, y: y_besoboy_single}, /* {x: x_difference * 79, y: y_chornyy_pos_single} */
        node_druzhkomiks_single_6: {x: x_difference * 80, y: y_druzhkomiks_single},
        node_soyuzniki_single_12: {x: x_difference * 80, y: y_soyuzniki_single},
        node_krutiksy_single_3: {x: x_difference * 80, y: y_krutiksy_single},
        node_besoboy_vol_2_single_12: {x: x_difference * 80, y: y_besoboy_vol_2_single},
        node_igor_grom_single_12: {x: x_difference * 80, y: y_igor_grom_single},
        node_mirokhodtsy_single_12: {x: x_difference * 80, y: y_mirokhodtsy_single},
        node_ekslibrium_single_38: {x: x_difference * 80, y: y_ekslibrium_single},
        node_chornyy_pos_single_4: {x: x_difference * 80, y: y_besoboy_single}, /* {x: x_difference * 80, y: y_chornyy_pos_single} */
        node_besoboy_i_mirokhodtsy_tome: {x: x_difference * 128, y: y_besoboy_i_mirokhodtsy_tome}, /* {x: x_difference * 80, y: y_besoboy_i_mirokhodtsy_tome} */
        node_meteora_single_38: {x: x_difference * 80, y: y_meteora_single},
        node_druzhkomiks_single_7: {x: x_difference * 81, y: y_druzhkomiks_single},
        node_soyuzniki_single_13: {x: x_difference * 81, y: y_soyuzniki_single},
        node_krutiksy_single_1_2018: {x: x_difference * 81, y: y_krutiksy_single},
        node_besoboy_vol_2_single_13: {x: x_difference * 81, y: y_besoboy_vol_2_single},
        node_igor_grom_single_13: {x: x_difference * 81, y: y_igor_grom_single},
        node_mirokhodtsy_single_13: {x: x_difference * 81, y: y_mirokhodtsy_single},
        node_ekslibrium_single_39: {x: x_difference * 81, y: y_ekslibrium_single},
        node_meteora_single_39: {x: x_difference * 81, y: y_meteora_single},
        node_teo_single_1: {x: x_difference * 97, y: y_meteora_single}, /* {x: x_difference * 81, y: y_teo_single} */
        node_druzhkomiks_single_8: {x: x_difference * 82, y: y_druzhkomiks_single},
        node_soyuzniki_single_14: {x: x_difference * 82, y: y_soyuzniki_single},
        node_krutiksy_single_2_2018: {x: x_difference * 82, y: y_krutiksy_single},
        node_besoboy_vol_2_single_14: {x: x_difference * 82, y: y_besoboy_vol_2_single},
        node_igor_grom_single_14: {x: x_difference * 82, y: y_igor_grom_single},
        node_mirokhodtsy_single_14: {x: x_difference * 82, y: y_mirokhodtsy_single},
        node_ekslibrium_single_40: {x: x_difference * 82, y: y_ekslibrium_single},
        node_meteora_single_40: {x: x_difference * 82, y: y_meteora_single},
        node_teo_single_2: {x: x_difference * 98, y: y_meteora_single}, /* {x: x_difference * 82, y: y_teo_single} */
        node_okhota_na_vedm_single_prolog: {x: x_difference * 82, y: y_okhota_na_vedm_single},
        node_druzhkomiks_single_9: {x: x_difference * 83, y: y_druzhkomiks_single},
        node_krutiksy_single_3_2018: {x: x_difference * 83, y: y_krutiksy_single},
        node_soyuzniki_single_15: {x: x_difference * 83, y: y_soyuzniki_single},
        node_druzhkomiks_single_10: {x: x_difference * 84, y: y_druzhkomiks_single},
        node_besoboy_vol_2_single_15: {x: x_difference * 84, y: y_besoboy_vol_2_single},
        node_druzhkomiks_single_11: {x: x_difference * 85, y: y_druzhkomiks_single},
        node_igor_grom_single_15: {x: x_difference * 85, y: y_igor_grom_single},
        node_druzhkomiks_single_12: {x: x_difference * 86, y: y_druzhkomiks_single},
        node_mirokhodtsy_single_15: {x: x_difference * 86, y: y_mirokhodtsy_single},
        node_ekslibrium_single_41: {x: x_difference * 86, y: y_ekslibrium_single},
        node_meteora_single_41: {x: x_difference * 86, y: y_meteora_single},
        node_teo_single_3: {x: x_difference * 99, y: y_meteora_single}, /* {x: x_difference * 86, y: y_teo_single} */
        node_druzhkomiks_single_13: {x: x_difference * 87, y: y_druzhkomiks_single},
        node_okhota_na_vedm_single_final: {x: x_difference * 87, y: y_okhota_na_vedm_single},
        node_ekslibrium_tome_6: {x: x_difference * 74, y: y_ekslibrium_tome}, /* 30 - 34 */
        node_meteora_tome_6: {x: x_difference * 75, y: y_meteora_tome},       /* 31 - 35 */
        node_chornyy_pos_tome: {x: x_difference * 78.5, y: y_besoboy_tome},   /* 1 - 4 */ /* {x: x_difference * 102.5, y: y_chornyy_pos_tome} */
        node_soyuzniki_single_16: {x: x_difference * 87, y: y_soyuzniki_single},
        node_ziggi_i_shmyg_unichtozhayut_vselennuyu_bubble_tome: {x: x_difference * 87, y: y_ziggi_i_shmyg_tome},
        node_krutiksy_single_4_2018: {x: x_difference * 87, y: y_krutiksy_single},
        node_besoboy_vol_2_single_16: {x: x_difference * 87, y: y_besoboy_vol_2_single},
        node_igor_grom_single_16: {x: x_difference * 87, y: y_igor_grom_single},
        node_mirokhodtsy_single_16: {x: x_difference * 87, y: y_mirokhodtsy_single},
        node_ekslibrium_single_42: {x: x_difference * 87, y: y_ekslibrium_single},
        node_meteora_single_42: {x: x_difference * 87, y: y_meteora_single},
        node_teo_single_4: {x: x_difference * 100, y: y_meteora_single}, /* {x: x_difference * 87, y: y_teo_single} */
        node_druzhkomiks_single_14: {x: x_difference * 88, y: y_druzhkomiks_single},
        node_besoboy_vol_2_single_17: {x: x_difference * 88, y: y_besoboy_vol_2_single},
        node_soyuzniki_single_17: {x: x_difference * 88, y: y_soyuzniki_single},
        node_krutiksy_single_5_2018: {x: x_difference * 88, y: y_krutiksy_single},
        node_igor_grom_single_17: {x: x_difference * 88, y: y_igor_grom_single},
        node_mirokhodtsy_single_17: {x: x_difference * 88, y: y_mirokhodtsy_single},
        node_ekslibrium_single_43: {x: x_difference * 88, y: y_ekslibrium_single},
        node_meteora_single_43: {x: x_difference * 88, y: y_meteora_single},
        node_dubin_dima_single_1: {x: x_difference * 88, y: y_mayor_grom_single}, /* {x: x_difference * 85, y: y_dubin_dima_single} */
        node_druzhkomiks_single_15: {x: x_difference * 89, y: y_druzhkomiks_single},
        node_soyuzniki_single_18: {x: x_difference * 89, y: y_soyuzniki_single},
        node_krutiksy_single_6_2018: {x: x_difference * 89, y: y_krutiksy_single},
        node_besoboy_vol_2_single_18: {x: x_difference * 89, y: y_besoboy_vol_2_single},
        node_igor_grom_single_18: {x: x_difference * 89, y: y_igor_grom_single},
        node_dubin_dima_single_2: {x: x_difference * 89, y: y_mayor_grom_single}, /* {x: x_difference * 86, y: y_dubin_dima_single} */
        node_teo_tome: {x: x_difference * 98.5, y: y_meteora_tome}, /* 1 - 4 */ /* {x: x_difference * 84, y: y_teo_tome} */
        node_mirokhodtsy_single_18: {x: x_difference * 89, y: y_mirokhodtsy_single},
        node_ekslibrium_single_44: {x: x_difference * 89, y: y_ekslibrium_single},
        node_meteora_single_44: {x: x_difference * 89, y: y_meteora_single},
        node_druzhkomiks_single_16: {x: x_difference * 90, y: y_druzhkomiks_single},
        node_soyuzniki_single_19: {x: x_difference * 90, y: y_soyuzniki_single},
        node_krutiksy_single_7_2018: {x: x_difference * 90, y: y_krutiksy_single},
        node_besoboy_vol_2_single_19: {x: x_difference * 90, y: y_besoboy_vol_2_single},
        node_igor_grom_single_19: {x: x_difference * 90, y: y_igor_grom_single},
        node_mirokhodtsy_single_19: {x: x_difference * 90, y: y_mirokhodtsy_single},
        node_ekslibrium_single_45: {x: x_difference * 90, y: y_ekslibrium_single},
        node_meteora_single_45: {x: x_difference * 90, y: y_meteora_single},
        node_dubin_dima_single_3: {x: x_difference * 90, y: y_mayor_grom_single}, /* {x: x_difference * 87, y: y_dubin_dima_single} */
        node_druzhkomiks_single_17: {x: x_difference * 91, y: y_druzhkomiks_single},
        node_soyuzniki_single_20: {x: x_difference * 91, y: y_soyuzniki_single},
        node_krutiksy_single_8_2018: {x: x_difference * 91, y: y_krutiksy_single},
        node_besoboy_vol_2_single_20: {x: x_difference * 91, y: y_besoboy_vol_2_single},
        node_igor_grom_single_20: {x: x_difference * 91, y: y_igor_grom_single},
        node_mirokhodtsy_single_20: {x: x_difference * 91, y: y_mirokhodtsy_single},
        node_volf_khelsing_single: {x: x_difference * 91, y: y_volf_khelsing_single},
        node_besoboy_vol_2_book_2: {x: x_difference * 78, y: y_besoboy_vol_2_book}, /* 6 - 14 */
        node_besoboy_vol_2_tome_2: {x: x_difference * 76, y: y_besoboy_vol_2_tome}, /* 6 - 10 */
        node_igor_grom_book_2: {x: x_difference * 78.5, y: y_igor_grom_book},       /* 7 - 14 */
        node_igor_grom_tome_2: {x: x_difference * 76.5, y: y_igor_grom_tome},       /* 7 - 10 */
        node_soyuzniki_book_2: {x: x_difference * 77.5, y: y_soyuzniki_book},       /* 5 - 14 */
        node_soyuzniki_tome_2: {x: x_difference * 75, y: y_soyuzniki_tome},         /* 5 - 9 */
        node_mirokhodtsy_book_2: {x: x_difference * 78.5, y: y_mirokhodtsy_book},   /* 7 - 14 */
        node_mirokhodtsy_tome_2: {x: x_difference * 76.5, y: y_mirokhodtsy_tome},   /* 7 - 10 */
        node_ekslibrium_single_46: {x: x_difference * 91, y: y_ekslibrium_single},
        node_meteora_single_46: {x: x_difference * 91, y: y_meteora_single},
        node_dubin_dima_single_4: {x: x_difference * 91, y: y_mayor_grom_single}, /* {x: x_difference * 88, y: y_dubin_dima_single} */
        node_druzhkomiks_single_18: {x: x_difference * 92, y: y_druzhkomiks_single},
        node_soyuzniki_single_21: {x: x_difference * 92, y: y_soyuzniki_single},
        node_krutiksy_single_9_2018: {x: x_difference * 92, y: y_krutiksy_single},
        node_besoboy_vol_2_single_21: {x: x_difference * 92, y: y_besoboy_vol_2_single},
        node_igor_grom_single_21: {x: x_difference * 92, y: y_igor_grom_single},
        node_mirokhodtsy_single_21: {x: x_difference * 92, y: y_mirokhodtsy_single},
        node_ekslibrium_single_47: {x: x_difference * 92, y: y_ekslibrium_single},
        node_meteora_single_47: {x: x_difference * 92, y: y_meteora_single},
        node_sem_synovey_tome: {x: x_difference * 92, y: y_sem_synovey_tome},
        node_druzhkomiks_single_19: {x: x_difference * 93, y: y_druzhkomiks_single},
        node_soyuzniki_single_22: {x: x_difference * 93, y: y_soyuzniki_single},
        node_krutiksy_single_10_2018: {x: x_difference * 93, y: y_krutiksy_single},
        node_besoboy_vol_2_single_22: {x: x_difference * 93, y: y_besoboy_vol_2_single},
        node_igor_grom_single_22: {x: x_difference * 93, y: y_igor_grom_single},
        node_krestovyy_pokhod_single_prolog: {x: x_difference * 93, y: y_krestovyy_pokhod_single},
        node_yarkh_single_1: {x: x_difference * 93, y: y_besoboy_single},
        node_ekslibrium_tome_7: {x: x_difference * 79.5, y: y_ekslibrium_tome}, /* 35 - 40 */
        node_meteora_tome_7: {x: x_difference * 79.5, y: y_meteora_tome},       /* 36 - 39 */
        node_dubin_dima_tome: {x: x_difference * 89.5, y: y_mayor_grom_tome},   /* 1 - 4 */
        node_magistr_tome: {x: x_difference * 93, y: (y_inok_single + y_inok_tome) / 2},
        node_ziggi_i_shmyg_spasayut_comiccon_tome: {x: x_difference * 93, y: y_ziggi_i_shmyg_tome},
        node_besoboy_vol_2_tome_3: {x: x_difference * 80.5, y: y_besoboy_vol_2_tome}, /* 11 - 14 */
        node_igor_grom_tome_3: {x: x_difference * 80.5, y: y_igor_grom_tome},         /* 11 - 14 */
        node_mirokhodtsy_tome_3: {x: x_difference * 80.5, y: y_mirokhodtsy_tome},     /* 11 - 14 */
        node_soyuzniki_tome_3: {x: x_difference * 80, y: y_soyuzniki_tome},           /* 10 - 14 */
        node_okhota_na_vedm_tome: {x: x_difference * 84.5, y: y_okhota_na_vedm_tome}, /* onv_p, ig_15, m_15, s_15, bv2_15, onv_f */
        node_pidzhaki_i_revolvery_tome_2: {x: x_difference * 93, y: y_pidzhaki_i_revolvery_tome},
        node_ekslibrium_single_48: {x: x_difference * 93, y: y_ekslibrium_single},
        node_meteora_single_48: {x: x_difference * 93, y: y_meteora_single},
        node_druzhkomiks_single_20: {x: x_difference * 94, y: y_druzhkomiks_single},
        node_yarkh_single_2: {x: x_difference * 94, y: y_besoboy_single},
        node_soyuzniki_single_23: {x: x_difference * 94, y: y_soyuzniki_single},
        node_krutiksy_single_11_2018: {x: x_difference * 94, y: y_krutiksy_single},
        node_besoboy_vol_2_single_23: {x: x_difference * 94, y: y_besoboy_vol_2_single},
        node_igor_grom_single_23: {x: x_difference * 94, y: y_igor_grom_single},
        node_druzhkomiks_single_21: {x: x_difference * 95, y: y_druzhkomiks_single},
        node_krestovyy_pokhod_single_1: {x: x_difference * 95, y: y_krestovyy_pokhod_single},
        node_krestovyy_pokhod_volk_single_1: {x: x_difference * 95, y: y_mirokhodtsy_single},
        node_ekslibrium_single_49: {x: x_difference * 95, y: y_ekslibrium_single},
        node_meteora_single_49: {x: x_difference * 95, y: y_meteora_single},
        node_yarkh_single_3: {x: x_difference * 95, y: y_besoboy_single},
        node_soyuzniki_single_24: {x: x_difference * 95, y: y_soyuzniki_single},
        node_krutiksy_single_12_2018: {x: x_difference * 95, y: y_krutiksy_single},
        node_druzhkomiks_single_22: {x: x_difference * 96, y: y_druzhkomiks_single},
        node_besoboy_vol_2_single_24: {x: x_difference * 96, y: y_besoboy_vol_2_single},
        node_igor_grom_single_24: {x: x_difference * 96, y: y_igor_grom_single},
        node_krestovyy_pokhod_volk_single_2: {x: x_difference * 96, y: y_mirokhodtsy_single},
        node_krestovyy_pokhod_single_2: {x: x_difference * 96, y: y_krestovyy_pokhod_single},
        node_mayor_grom_single_obeshchaniye: {x: x_difference * 107, y: y_igor_grom_single}, /* {x: x_difference * 96, y: (y_mayor_grom_single + y_mayor_grom_tome) / 2} */
        node_ekslibrium_single_50: {x: x_difference * 96, y: y_ekslibrium_single},
        node_meteora_single_50: {x: x_difference * 96, y: y_meteora_single},
        node_igor_ugor_tome_2: {x: x_difference * 96, y: y_igor_ugor},
        node_russkiye_narodnyye_skazki_v_komiksakh_tome: {x: x_difference * 96, y: y_russkiye_narodnyye_skazki_v_komiksakh_tome},
        node_vor_teney_single_1: {x: x_difference * 96, y: y_vor_teney_single},
        node_druzhkomiks_single_23: {x: x_difference * 97, y: y_druzhkomiks_single},
        node_vor_teney_single_2: {x: x_difference * 97, y: y_vor_teney_single},
        node_soyuzniki_single_25: {x: x_difference * 97, y: y_soyuzniki_single},
        node_krutiksy_single_novogodniy_spetsvypusk: {x: x_difference * 97, y: y_krutiksy_single},
        node_besoboy_vol_2_single_25: {x: x_difference * 97, y: y_besoboy_vol_2_single},
        node_igor_grom_single_25: {x: x_difference * 97, y: y_igor_grom_single},
        node_krestovyy_pokhod_single_3: {x: x_difference * 97, y: y_krestovyy_pokhod_single},
        node_krestovyy_pokhod_volk_single_3: {x: x_difference * 97, y: y_mirokhodtsy_single},
        node_yarkh_single_4: {x: x_difference * 97, y: y_besoboy_single},
        node_druzhkomiks_single_24: {x: x_difference * 98, y: y_druzhkomiks_single},
        node_soyuzniki_single_26: {x: x_difference * 98, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_26: {x: x_difference * 98, y: y_besoboy_vol_2_single},
        node_igor_grom_single_26: {x: x_difference * 98, y: y_igor_grom_single},
        node_krestovyy_pokhod_volk_single_4: {x: x_difference * 98, y: y_mirokhodtsy_single},
        node_yarkh_single_5: {x: x_difference * 98, y: y_besoboy_single},
        node_druzhkomiks_single_25: {x: x_difference * 99, y: y_druzhkomiks_single},
        node_soyuzniki_single_27: {x: x_difference * 99, y: y_soyuzniki_single},
        node_krestovyy_pokhod_single_4: {x: x_difference * 99, y: y_krestovyy_pokhod_single},
        node_besoboy_vol_2_single_27: {x: x_difference * 99, y: y_besoboy_vol_2_single},
        node_igor_grom_single_27: {x: x_difference * 99, y: y_igor_grom_single},
        node_krestovyy_pokhod_volk_single_5: {x: x_difference * 99, y: y_mirokhodtsy_single},
        node_yarkh_single_6: {x: x_difference * 99, y: y_besoboy_single},
        node_druzhkomiks_single_26: {x: x_difference * 100, y: y_druzhkomiks_single},
        node_krestovyy_pokhod_single_epilog: {x: x_difference * 100, y: y_krestovyy_pokhod_single},
        node_soyuzniki_single_28: {x: x_difference * 100, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_28: {x: x_difference * 100, y: y_besoboy_vol_2_single},
        node_meteora_tome_8: {x: x_difference * 85.5, y: y_meteora_tome},         /* 40 - 44 */
        node_mirokhodtsy_tome_4: {x: x_difference * 89.5, y: y_mirokhodtsy_tome}, /* 16 - 21 */
        node_igor_grom_single_28: {x: x_difference * 100, y: y_igor_grom_single},
        node_sestra_single: {x: x_difference * 100, y: y_sestra_single},
        node_sokol_single_1: {x: x_difference * 100, y: y_sokol_single},
        node_plyushevyy_politseyskiy_single: {x: x_difference * 100, y: y_plyushevyy_politseyskiy_single},
        node_chornaya_ruka_single: {x: x_difference * 100, y: y_chornaya_ruka_single},
        node_ekslibrium_tome_chistyy_list: {x: x_difference * 100, y: (y_ekslibrium_single + y_ekslibrium_tome) / 2},
        node_besoboy_vol_2_tome_4: {x: x_difference * 88.5, y: y_besoboy_vol_2_tome}, /* 16 - 19 */
        node_besoboy_vol_2_tome_5: {x: x_difference * 92.5, y: y_besoboy_vol_2_tome}, /* 20 - 23 */
        node_druzhkomiks_single_27: {x: x_difference * 101, y: y_druzhkomiks_single},
        node_druzhkomiks_tome: {x: x_difference * 88, y: y_druzhkomiks_tome}, /* 1 - 27 */
        node_soyuzniki_single_29: {x: x_difference * 101, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_29: {x: x_difference * 101, y: y_besoboy_vol_2_single},
        node_soyuzniki_tome_4: {x: x_difference * 88.5, y: y_soyuzniki_tome}, /* 16 - 19 */
        node_igor_grom_single_29: {x: x_difference * 101, y: y_igor_grom_single},
        node_anna_single_1: {x: x_difference * 101, y: y_anna_single},
        node_kletka_single: {x: x_difference * 101, y: y_kletka_single},
        node_impuls_single_1: {x: x_difference * 101, y: y_impuls_single},
        node_ekslibrium_tome_8: {x: x_difference * 88, y: y_ekslibrium_tome}, /* 41 - 45 */
        node_igor_grom_tome_4: {x: x_difference * 89.5, y: y_igor_grom_tome}, /* 16 - 21 */
        node_tagar_tome_2_single_1: {x: x_difference * 99, y: y_tagar_single},
        node_tagar_tome_2_single_2: {x: x_difference * 100, y: y_tagar_single},
        node_tagar_tome_2_single_3: {x: x_difference * 101, y: y_tagar_single},
        node_tagar_tome_2_single_4: {x: x_difference * 102, y: y_tagar_single},
        node_tagar_tome_2_single_5: {x: x_difference * 103, y: y_tagar_single},
        node_tagar_tome_2: {x: x_difference * 101, y: y_tagar_tome}, /* 1 - 5 */
        node_soyuzniki_single_30: {x: x_difference * 102, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_30: {x: x_difference * 102, y: y_besoboy_vol_2_single},
        node_igor_grom_single_30: {x: x_difference * 102, y: y_igor_grom_single},
        node_soyuzniki_tome_5: {x: x_difference * 92.5, y: y_soyuzniki_tome}, /* 20 - 23 */
        node_soyuzniki_single_31: {x: x_difference * 103, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_31: {x: x_difference * 103, y: y_besoboy_vol_2_single},
        node_igor_grom_single_31: {x: x_difference * 103, y: y_igor_grom_single},
        node_ne_budi_likho_single: {x: x_difference * 103, y: y_ne_budi_likho_single},
        node_besoboy_vol_2_single_32: {x: x_difference * 104, y: y_besoboy_vol_2_single},
        node_igor_grom_single_32: {x: x_difference * 104, y: y_igor_grom_single},
        node_soyuzniki_single_32: {x: x_difference * 104, y: y_soyuzniki_single},
        node_soyuzniki_single_33: {x: x_difference * 105, y: y_soyuzniki_single},
        node_memento_mori_single: {x: x_difference * 105, y: y_memento_mori_single},
        node_besoboy_vol_2_tome_6: {x: x_difference * 98, y: y_besoboy_vol_2_tome}, /* 24 - 28 */
        node_igor_grom_tome_5: {x: x_difference * 95, y: y_igor_grom_tome},         /* 22 - 25 */
        node_ekslibrium_zhizn_vtoraya_single_0: {x: x_difference * 105, y: y_ekslibrium_zhizn_vtoraya_single},
        node_krestovyy_pokhod_tome: {x: x_difference * 96.5, y: y_krestovyy_pokhod_tome}, /* p, 1 - 4, e */
        node_krestovyy_pokhod_volk_tome: {x: x_difference * 97, y: y_mirokhodtsy_tome},   /* 1 - 5 */
        node_ekslibrium_tome_9: {x: x_difference * 93.5, y: y_ekslibrium_tome},           /* 46 - 50 */
        node_meteora_tome_9: {x: x_difference * 93, y: y_meteora_tome},                   /* 45 - 50 */
        node_soyuzniki_tome_6: {x: x_difference * 97.5, y: y_soyuzniki_tome},             /* 24 - 28 */
        node_yarkh_tome: {x: x_difference * 96, y: y_besoboy_tome},                       /* 1 - 6 */
        node_balor_i_yana_tome: {x: x_difference * 105, y: (y_besoboy_single + y_besoboy_tome) / 2},
        node_besoboy_vol_2_single_33: {x: x_difference * 105, y: y_besoboy_vol_2_single},
        node_igor_grom_single_33: {x: x_difference * 105, y: y_igor_grom_single},
        node_mayor_grom_tome_1939: {x: x_difference * 105, y: (y_mayor_grom_single + y_mayor_grom_tome) / 2},
        node_soyuzniki_single_34: {x: x_difference * 106, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_34: {x: x_difference * 106, y: y_besoboy_vol_2_single},
        node_igor_grom_single_34: {x: x_difference * 106, y: y_igor_grom_single},
        node_mayor_grom_kak_na_voyne_single_1: {x: x_difference * 106, y: y_mayor_grom_single},
        node_soyuzniki_single_35: {x: x_difference * 107, y: y_soyuzniki_single},
        node_besoboy_vol_2_single_35: {x: x_difference * 107, y: y_besoboy_vol_2_single},
        node_igor_grom_single_35: {x: x_difference * 108, y: y_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_1: {x: x_difference * 108, y: y_ekslibrium_zhizn_vtoraya_single},
        node_soyuzniki_single_36: {x: x_difference * 108, y: y_soyuzniki_single},
        node_mayor_grom_kak_na_voyne_single_2: {x: x_difference * 108, y: y_mayor_grom_single},
        node_mayor_grom_kak_na_voyne_single_3: {x: x_difference * 109, y: y_mayor_grom_single},
        node_mayor_grom_kak_na_voyne_single_4: {x: x_difference * 110, y: y_mayor_grom_single},
        node_besoboy_vol_2_single_36: {x: x_difference * 110, y: y_besoboy_vol_2_single},
        node_igor_grom_single_36: {x: x_difference * 110, y: y_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_2: {x: x_difference * 110, y: y_ekslibrium_zhizn_vtoraya_single},
        node_soyuzniki_single_37: {x: x_difference * 110, y: y_soyuzniki_single},
        node_igor_grom_single_37: {x: x_difference * 111, y: y_igor_grom_single},
        node_besoboy_vol_2_single_37: {x: x_difference * 111, y: y_besoboy_vol_2_single},
        node_mayor_grom_kak_na_voyne_tome: {x: x_difference * 108, y: y_mayor_grom_tome}, // 1 - 4
        node_ekslibrium_zhizn_vtoraya_single_3: {x: x_difference * 111, y: y_ekslibrium_zhizn_vtoraya_single},
        node_soyuzniki_single_38: {x: x_difference * 111, y: y_soyuzniki_single},
        node_pidzhaki_i_revolvery_tome_3: {x: x_difference * 111, y: y_pidzhaki_i_revolvery_tome},
        node_besoboy_vol_2_single_38: {x: x_difference * 112, y: y_besoboy_vol_2_single},
        node_soyuzniki_tome_7: {x: x_difference * 103, y: y_soyuzniki_tome}, /* 29 - 33 */
        node_igor_grom_tome_6: {x: x_difference * 100, y: y_igor_grom_tome}, /* 26 - 30 */
        node_ekslibrium_zhizn_vtoraya_single_4: {x: x_difference * 112, y: y_ekslibrium_zhizn_vtoraya_single},
        node_igor_grom_single_38: {x: x_difference * 112, y: y_igor_grom_single},
        node_soyuzniki_single_39: {x: x_difference * 112, y: y_soyuzniki_single},
        node_inok_korol_vecherinok_single_nikakikh_bolshe_vecherinok: {x: x_difference * 112, y: y_inok_korol_vecherinok_single},
        node_sokol_single_2: {x: x_difference * 112, y: y_sokol_single},
        node_anna_single_2: {x: x_difference * 112, y: y_anna_single},
        node_impuls_single_2: {x: x_difference * 112, y: y_impuls_single},
        node_besoboy_vol_2_tome_7: {x: x_difference * 102.5, y: y_besoboy_vol_2_tome}, /* 29 - 32 */
        node_besoboy_vol_2_single_39: {x: x_difference * 113, y: y_besoboy_vol_2_single},
        node_ekslibrium_zhizn_vtoraya_single_5: {x: x_difference * 113, y: y_ekslibrium_zhizn_vtoraya_single},
        node_ekslibrium_zhizn_vtoraya_tome_1: {x: x_difference * 108.5, y: y_ekslibrium_zhizn_vtoraya_tome}, /* 0 - 4 */
        node_igor_grom_single_39: {x: x_difference * 113, y: y_igor_grom_single},
        node_soyuzniki_single_40: {x: x_difference * 113, y: y_soyuzniki_single},
        node_chumnoy_doktor_single_1: {x: x_difference * 113, y: y_chumnoy_doktor_single},
        node_igor_grom_single_40: {x: x_difference * 114, y: y_igor_grom_single},
        node_besoboy_vol_2_single_40: {x: x_difference * 114, y: y_besoboy_vol_2_single},
        node_ekslibrium_zhizn_vtoraya_single_6: {x: x_difference * 114, y: y_ekslibrium_zhizn_vtoraya_single},
        node_soyuzniki_single_41: {x: x_difference * 114, y: y_soyuzniki_single},
        node_redaktor_single: {x: x_difference * 114, y: y_redaktor_single},
        node_karantinnaya_kniga_tome: {x: x_difference * 128, y: (y_besoboy_vol_2_single + y_besoboy_vol_2_tome) / 2}, /* {x: x_difference * 114, y: y_karantinnaya_kniga_tome} */
        node_igor_grom_single_41: {x: x_difference * 115, y: y_igor_grom_single},
        node_besoboy_vol_2_single_41: {x: x_difference * 115, y: y_besoboy_vol_2_single},
        node_ekslibrium_zhizn_vtoraya_single_7: {x: x_difference * 115, y: y_ekslibrium_zhizn_vtoraya_single},
        node_nechistaya_sila_single_1: {x: x_difference * 115, y: y_nechistaya_sila_single},
        node_izbrannitsa_luny_single_1: {x: x_difference * 115, y: y_izbrannitsa_luny_single},
        node_igor_grom_tome_7: {x: x_difference * 105, y: y_igor_grom_tome}, /* ig_31 - ig_34, mg_o */
        node_igor_grom_single_42: {x: x_difference * 116, y: y_igor_grom_single},
        node_besoboy_vol_2_single_42: {x: x_difference * 116, y: y_besoboy_vol_2_single},
        node_soyuzniki_tome_8: {x: x_difference * 110, y: y_soyuzniki_tome}, /* 34 - 41 */
        node_ekslibrium_zhizn_vtoraya_single_8: {x: x_difference * 116, y: y_ekslibrium_zhizn_vtoraya_single},
        node_nechistaya_sila_single_2: {x: x_difference * 116, y: y_nechistaya_sila_single},
        node_gromada_single_1: {x: x_difference * 116, y: y_gromada_single},
        node_mir_single_1: {x: x_difference * 116, y: y_mir_single},
        node_mir_tome_1: {x: x_difference * 116, y: y_mir_tome}, /* 1 */
        node_izbrannitsa_luny_single_2: {x: x_difference * 116, y: y_izbrannitsa_luny_single},
        node_igor_grom_single_43: {x: x_difference * 117, y: y_igor_grom_single},
        node_besoboy_vol_2_single_43: {x: x_difference * 117, y: y_besoboy_vol_2_single},
        node_ekslibrium_zhizn_vtoraya_single_9: {x: x_difference * 117, y: y_ekslibrium_zhizn_vtoraya_single},
        node_nechistaya_sila_single_3: {x: x_difference * 117, y: y_nechistaya_sila_single},
        node_ekslibrium_zhizn_vtoraya_tome_2: {x: x_difference * 114.5, y: y_ekslibrium_zhizn_vtoraya_tome}, /* 5 - 8 */
        node_besoboy_vol_2_tome_8: {x: x_difference * 108.5, y: y_besoboy_vol_2_tome},                       /* 33 - 38 */
        node_izbrannitsa_luny_single_3: {x: x_difference * 117, y: y_izbrannitsa_luny_single},
        node_igor_grom_tome_8: {x: x_difference * 110.5, y: y_igor_grom_tome}, /* 35 - 39 */
        node_besoboy_vol_2_single_44: {x: x_difference * 118, y: y_besoboy_vol_2_single},
        node_ekslibrium_zhizn_vtoraya_single_10: {x: x_difference * 118, y: y_ekslibrium_zhizn_vtoraya_single},
        node_igor_grom_single_44: {x: x_difference * 118, y: y_igor_grom_single},
        node_mayor_grom_geroy_navsegda_single_1: {x: x_difference * 118, y: y_mayor_grom_single},
        node_nechistaya_sila_single_4: {x: x_difference * 118, y: y_nechistaya_sila_single},
        node_mayor_grom_geroy_navsegda_tome: {x: x_difference * 118, y: y_mayor_grom_tome}, /* 1 */
        node_nechistaya_sila_tome: {x: x_difference * 116.5, y: y_nechistaya_sila_tome},    /* 1 - 4 */
        node_turbocarp_tome: {x: x_difference * 118, y: y_turbocarp_tome},
        node_mir_single_2: {x: x_difference * 118, y: y_mir_single},
        node_mir_tome_2: {x: x_difference * 118.5, y: y_mir_tome}, /* 2 - 3 */
        node_chumnoy_doktor_single_2: {x: x_difference * 118, y: y_chumnoy_doktor_single},
        node_izbrannitsa_luny_single_4: {x: x_difference * 118, y: y_izbrannitsa_luny_single},
        node_igor_grom_single_45: {x: x_difference * 119, y: y_igor_grom_single},
        node_besoboy_vol_2_single_45: {x: x_difference * 119, y: y_besoboy_vol_2_single},
        node_ekslibrium_zhizn_vtoraya_single_11: {x: x_difference * 119, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mir_single_3: {x: x_difference * 119, y: y_mir_single},
        node_izbrannitsa_luny_single_5: {x: x_difference * 119, y: y_izbrannitsa_luny_single},
        node_besoboy_vol_2_single_46: {x: x_difference * 120, y: y_besoboy_vol_2_single},
        node_vor_teney_single_3: {x: x_difference * 120, y: y_vor_teney_single},
        node_vor_teney_single_4: {x: x_difference * 121, y: y_vor_teney_single},
        node_vor_teney_single_5: {x: x_difference * 122, y: y_vor_teney_single},
        node_igor_grom_single_46: {x: x_difference * 122, y: y_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_12: {x: x_difference * 122, y: y_ekslibrium_zhizn_vtoraya_single},
        node_chumnoy_doktor_single_3: {x: x_difference * 122, y: y_chumnoy_doktor_single},
        node_chumnoy_doktor_tome_1: {x: x_difference * 118, y: y_chumnoy_doktor_tome}, /* 1 - 4 */
        node_tagar_tome_3_single_1: {x: x_difference * 119, y: y_tagar_single},
        node_tagar_tome_3_single_2: {x: x_difference * 120, y: y_tagar_single},
        node_tagar_tome_3_single_3: {x: x_difference * 121, y: y_tagar_single},
        node_tagar_tome_3_single_4: {x: x_difference * 122, y: y_tagar_single},
        node_tagar_tome_3_single_5: {x: x_difference * 123, y: y_tagar_single},
        node_tagar_tome_3_single_6: {x: x_difference * 124, y: y_tagar_single},
        node_tagar_tome_3_single_7: {x: x_difference * 125, y: y_tagar_single},
        node_tagar_tome_3: {x: x_difference * 122, y: y_tagar_tome}, /* 1 - 7 */
        node_izbrannitsa_luny_single_6: {x: x_difference * 122, y: y_izbrannitsa_luny_single},
        node_izbrannitsa_luny_tome: {x: x_difference * 118.5, y: y_izbrannitsa_luny_tome}, /* 1 - 6 */
        node_igor_grom_single_47: {x: x_difference * 123, y: y_igor_grom_single},
        node_mir_tome_3: {x: x_difference * 125.5, y: y_mir_tome}, /* 4 - 5 */
        node_chumnoy_doktor_single_4: {x: x_difference * 123, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_single_13: {x: x_difference * 123, y: y_ekslibrium_zhizn_vtoraya_single},
        node_besoboy_vol_2_single_47: {x: x_difference * 123, y: y_besoboy_vol_2_single},
        node_krutiksy_tome_1: {x: x_difference * 80, y: y_krutiksy_tome}, /* 1 - 3, 1 - 2 (2018) */
        node_besoboy_vol_2_single_48: {x: x_difference * 124, y: y_besoboy_vol_2_single},
        node_chumnoy_doktor_single_spetsialnyy_zimniy_spetsvypusk: {x: x_difference * 133, y: y_chumnoy_doktor_single}, /* {x: x_difference * 124, y: y_chumnoy_doktor_single} */
        node_igor_grom_tome_9: {x: x_difference * 116, y: y_igor_grom_tome}, /* 40 - 44 */
        node_ekslibrium_zhizn_vtoraya_single_14: {x: x_difference * 124, y: y_ekslibrium_zhizn_vtoraya_single},
        node_igor_grom_single_48: {x: x_difference * 124, y: y_igor_grom_single},
        node_besoboy_vol_2_single_49: {x: x_difference * 125, y: y_besoboy_vol_2_single},
        node_mir_single_4: {x: x_difference * 125, y: y_mir_single},
        node_besoboy_vol_2_tome_9: {x: x_difference * 114.5, y: y_besoboy_vol_2_tome}, /* 39 - 42 */
        node_igor_grom_single_49: {x: x_difference * 125, y: y_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_15: {x: x_difference * 125, y: y_ekslibrium_zhizn_vtoraya_single},
        node_chumnoy_doktor_single_5: {x: x_difference * 125, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_tome_3: {x: x_difference * 119.5, y: y_ekslibrium_zhizn_vtoraya_tome}, /* 9 - 12 */
        node_mir_single_5: {x: x_difference * 126, y: y_mir_single},
        node_ekslibrium_zhizn_vtoraya_single_16: {x: x_difference * 126, y: y_ekslibrium_zhizn_vtoraya_single},
        node_ekslibrium_zhizn_vtoraya_single_17: {x: x_difference * 127, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mir_single_vechnaya_pamyat: {x: x_difference * 147, y: y_mir_single}, /* {x: x_difference * 127, y: y_mir_single} */
        node_igor_grom_single_50: {x: x_difference * 127, y: y_igor_grom_single},
        node_besoboy_vol_2_single_50: {x: x_difference * 127, y: y_besoboy_vol_2_single},
        node_mir_tome_4: {x: x_difference * 128.5, y: y_mir_tome}, /* 6 - 7 */
        node_chumnoy_doktor_single_6: {x: x_difference * 127, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_single_18: {x: x_difference * 128, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mir_single_6: {x: x_difference * 128, y: y_mir_single},
        node_igor_grom_tome_10: {x: x_difference * 123, y: y_igor_grom_tome}, /* 45 - 50 */
        node_chumnoy_doktor_single_7: {x: x_difference * 128, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_single_19: {x: x_difference * 129, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mayor_igor_grom_single_1: {x: x_difference * 129, y: y_mayor_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_tome_4: {x: x_difference * 125.5, y: y_ekslibrium_zhizn_vtoraya_tome}, /* 13 - 18 */
        node_mir_single_7: {x: x_difference * 129, y: y_mir_single},
        node_ekslibrium_zhizn_vtoraya_single_20: {x: x_difference * 130, y: y_ekslibrium_zhizn_vtoraya_single},
        node_chumnoy_doktor_single_8: {x: x_difference * 130, y: y_chumnoy_doktor_single},
        node_ekslibrium_tome_krasnaya_stroka: {x: x_difference * 130, y: (y_ekslibrium_single + y_ekslibrium_tome) / 2},
        node_gromada_single_2: {x: x_difference * 130, y: y_gromada_single},
        node_gromada_tome: {x: x_difference * 124, y: y_gromada_tome}, /* 1 - 4 */
        node_mayor_igor_grom_single_2: {x: x_difference * 130, y: y_mayor_igor_grom_single},
        node_besoboy_vol_2_tome_10: {x: x_difference * 118.5, y: y_besoboy_vol_2_tome}, /* 43 - 46 */
        node_igor_ugor_single_2_5: {x: x_difference * 130, y: y_igor_ugor},
        node_ekslibrium_zhizn_vtoraya_single_21: {x: x_difference * 131, y: y_ekslibrium_zhizn_vtoraya_single},
        node_chumnoy_doktor_tome_2: {x: x_difference * 127.5, y: y_chumnoy_doktor_tome}, /* 5 - 8 */
        node_chumnoy_doktor_single_9: {x: x_difference * 131, y: y_chumnoy_doktor_single},
        node_gromada_single_3: {x: x_difference * 131, y: y_gromada_single},
        node_mayor_igor_grom_single_3: {x: x_difference * 131, y: y_mayor_igor_grom_single},
        node_besoboy_vol_2_tome_11: {x: x_difference * 125, y: y_besoboy_vol_2_tome}, /* 47 - 50 */
        node_sokol_tome_1: {x: x_difference * 117, y: y_sokol_tome},                  /* 1 - 4 */
        node_pidzhaki_i_revolvery_tome_4: {x: x_difference * 131, y: y_pidzhaki_i_revolvery_tome},
        node_ekslibrium_zhizn_vtoraya_single_22: {x: x_difference * 132, y: y_ekslibrium_zhizn_vtoraya_single},
        node_chumnoy_doktor_single_10: {x: x_difference * 132, y: y_chumnoy_doktor_single},
        node_gromada_single_4: {x: x_difference * 132, y: y_gromada_single},
        node_bubble_khellouin_single: {x: x_difference * 132, y: y_bubble_khellouin_single},
        node_krutiksy_znakomstvo_s_akademiyey_single: {x: x_difference * 132, y: (y_krutiksy_single + y_krutiksy_tome) / 2},
        node_mayor_igor_grom_single_4: {x: x_difference * 132, y: y_mayor_igor_grom_single},
        node_mayor_igor_grom_tome_1: {x: x_difference * 130.5, y: y_mayor_igor_grom_tome},                   /* 1 - 4 */
        node_ekslibrium_zhizn_vtoraya_tome_5: {x: x_difference * 130.5, y: y_ekslibrium_zhizn_vtoraya_tome}, /* 19 - 22 */
        node_sokol_single_3: {x: x_difference * 132, y: y_sokol_single},
        node_chumnoy_doktor_tome_3: {x: x_difference * 132, y: y_chumnoy_doktor_tome}, /* 9 - 10, szs */
        node_ekslibrium_zhizn_vtoraya_single_23: {x: x_difference * 133, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mayor_igor_grom_x_chumnoy_doktor_single_11: {x: x_difference * 139, y: y_mayor_igor_grom_x_chumnoy_doktor_single},
        node_spetsvypusk_volkov_peklo_single: {x: x_difference * 133, y: y_spetsvypusk_volkov_peklo_single},
        node_mir_tome_5: {x: x_difference * 133.5, y: y_mir_tome}, /* 8 - 9 */
        node_mir_single_8: {x: x_difference * 133, y: y_mir_single},
        node_sokol_single_4: {x: x_difference * 133, y: y_sokol_single},
        node_mayor_igor_grom_single_5: {x: x_difference * 133, y: y_mayor_igor_grom_single},
        node_vor_teney_tome_1: {x: x_difference * 109, y: y_vor_teney_tome}, /* 1 - 5 */
        node_ekslibrium_zhizn_vtoraya_single_24: {x: x_difference * 134, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mayor_igor_grom_x_chumnoy_doktor_single_12: {x: x_difference * 140, y: y_mayor_igor_grom_x_chumnoy_doktor_single},
        node_spetsvypusk_prokopenko_single: {x: x_difference * 134, y: (y_mayor_grom_single + y_mayor_grom_tome) / 2},
        node_soyuzmultkomiks_single: {x: x_difference * 134, y: y_soyuzmultkomiks_single},
        node_mir_single_9: {x: x_difference * 134, y: y_mir_single},
        node_vor_teney_single_6: {x: x_difference * 134, y: y_vor_teney_single},
        node_ledi_siyaniya_single_1: {x: x_difference * 134, y: y_ledi_siyaniya_single},
        node_zagovor_yedinorogov_tome_2: {x: x_difference * 134, y: y_zagovor_yedinorogov_tome},
        node_mayor_igor_grom_single_6: {x: x_difference * 134, y: y_mayor_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_25: {x: x_difference * 135, y: y_ekslibrium_zhizn_vtoraya_single},
        node_vor_teney_single_7: {x: x_difference * 135, y: y_vor_teney_single},
        node_ledi_siyaniya_single_2: {x: x_difference * 135, y: y_ledi_siyaniya_single},
        node_mayor_igor_grom_single_7: {x: x_difference * 135, y: y_mayor_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_26: {x: x_difference * 136, y: y_ekslibrium_zhizn_vtoraya_single},
        node_krutiksy_tome_2: {x: x_difference * 86.5, y: y_krutiksy_tome}, /* 3 - 7 (2018) */
        node_vor_teney_single_8: {x: x_difference * 136, y: y_vor_teney_single},
        node_ledi_siyaniya_single_3: {x: x_difference * 136, y: y_ledi_siyaniya_single},
        node_mayor_igor_grom_x_chumnoy_doktor_single_13: {x: x_difference * 141, y: y_mayor_igor_grom_x_chumnoy_doktor_single},
        node_zolotoy_voin_tome: {x: x_difference * 136, y: y_zolotoy_voin_tome},
        node_ekslibrium_zhizn_vtoraya_single_27: {x: x_difference * 137, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mayor_igor_grom_x_chumnoy_doktor_single_14: {x: x_difference * 142, y: y_mayor_igor_grom_x_chumnoy_doktor_single},
        node_vor_teney_single_9: {x: x_difference * 137, y: y_vor_teney_single},
        node_ledi_siyaniya_single_4: {x: x_difference * 137, y: y_ledi_siyaniya_single},
        node_chumnoy_doktor_single_15: {x: x_difference * 143, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_single_28: {x: x_difference * 143, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mayor_igor_grom_single_8: {x: x_difference * 138, y: y_mayor_igor_grom_single},
        node_mayor_igor_grom_x_chumnoy_doktor_tome_4: {x: x_difference * 140.5, y: y_mayor_igor_grom_x_chumnoy_doktor_tome}, /* 11 - 14 */
        node_mir_single_10: {x: x_difference * 143, y: y_mir_single},
        node_mayor_igor_grom_tome_2: {x: x_difference * 135.5, y: y_mayor_igor_grom_tome},                 /* 5 - 8 */
        node_ekslibrium_zhizn_vtoraya_tome_6: {x: x_difference * 135, y: y_ekslibrium_zhizn_vtoraya_tome}, /* 23 - 27 */
        node_mayor_igor_grom_single_9: {x: x_difference * 143, y: y_mayor_igor_grom_single},
        node_chumnoy_doktor_single_16: {x: x_difference * 144, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_single_29: {x: x_difference * 144, y: y_ekslibrium_zhizn_vtoraya_single},
        node_meteora_single_storibuk: {x: x_difference * 144, y: (y_meteora_single + y_meteora_tome) / 2},
        node_krutiksy_tome_3: {x: x_difference * 94, y: y_krutiksy_tome}, /* 8 - 12 (2018), ns */
        node_mir_single_11: {x: x_difference * 144, y: y_mir_single},
        node_mayor_igor_grom_single_10: {x: x_difference * 144, y: y_mayor_igor_grom_single},
        node_chumnoy_doktor_single_17: {x: x_difference * 145, y: y_chumnoy_doktor_single},
        node_ekslibrium_zhizn_vtoraya_single_30: {x: x_difference * 145, y: y_ekslibrium_zhizn_vtoraya_single},
        node_mir_single_12: {x: x_difference * 145, y: y_mir_single},
        node_mir_tome_6: {x: x_difference * 144, y: y_mir_tome}, /* 10 - 12 */
        node_spetsvypusk_faeton_single: {x: x_difference * 145, y: y_spetsvypusk_faeton_single},
        node_mayor_igor_grom_single_11: {x: x_difference * 145, y: y_mayor_igor_grom_single},
        node_ekslibrium_zhizn_vtoraya_single_31: {x: x_difference * 146, y: y_ekslibrium_zhizn_vtoraya_single},
        node_chumnoy_doktor_single_18: {x: x_difference * 146, y: y_chumnoy_doktor_single},
        node_mir_single_13: {x: x_difference * 146, y: y_mir_single},
        node_likoris_single_1: {x: x_difference * 146, y: y_likoris_single},
        node_likoris_tome_1: {x: x_difference * 146, y: y_likoris_tome},

    }
};
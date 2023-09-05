import * as vNG from "v-network-graph";

const x_difference = 100;
const y_difference = 70;

const y_besoboy_single = y_difference;
const y_besoboy_tome = y_besoboy_single + y_difference;
const y_besoboy_vol_2_1_single = y_besoboy_single + y_difference;
const y_besoboy_vol_2_1_tome = y_besoboy_vol_2_1_single + y_difference;
const y_inok_single = y_difference * 4;
const y_inok_tome = y_inok_single + y_difference;
const y_mirokhodtsy_single = y_inok_single + y_difference;
const y_mirokhodtsy_tome = y_mirokhodtsy_single + y_difference;
const y_inok_vs_besoboy_single = (y_besoboy_single + y_inok_single) / 2;
const y_inok_vs_besoboy_tome = y_inok_vs_besoboy_single + y_difference;
const y_vremya_vorona_single = y_difference * 7;
const y_vremya_vorona_tome = y_vremya_vorona_single + y_difference;
const y_mayor_grom_single = y_difference * 9;
const y_mayor_grom_tome = y_mayor_grom_single + y_difference;
const y_igor_grom_single = y_mayor_grom_single + y_difference;
const y_igor_grom_tome = y_igor_grom_single + y_difference;
const y_krasnaya_furiya_single = y_difference * 12;
const y_krasnaya_furiya_tome = y_krasnaya_furiya_single + y_difference;
const y_soyuzniki_single = y_krasnaya_furiya_single + y_difference;
const y_soyuzniki_tome = y_soyuzniki_single + y_difference;
const y_mayor_grom_i_krasnaya_furiya_single = (y_mayor_grom_single + y_krasnaya_furiya_single) / 2;
const y_mayor_grom_i_krasnaya_furiya_tome = y_mayor_grom_i_krasnaya_furiya_single + y_difference;
const y_ekslibrium_single = y_difference * 15;
const y_ekslibrium_tome = y_ekslibrium_single + y_difference;
const y_meteora_single = y_difference * 17;
const y_meteora_tome = y_meteora_single + y_difference;
const y_inok_i_mayor_grom_tome = y_difference * 19;
const y_ziggi_single = y_difference * 20;
const y_ziggi_tome = y_ziggi_single + y_difference;
const y_koshki_myshki_tome = y_difference * 22;
const y_tsezar_velikolepnyy_single = y_difference * 23;
const y_tsezar_velikolepnyy_tome = y_tsezar_velikolepnyy_single + y_difference;
const y_inok_korol_vecherinok_single = y_difference * 25;
const y_tochka_nevozvrata_tome = y_difference * 26;
const y_igor_ugor_tome = y_difference * 27;
const y_druzhkomiks_single = y_difference * 28;

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
        node_inok_i_mayor_grom_tome: {x: x_difference * 69, y: y_inok_single}, // {x: x_difference * 38,
                                                                               //  y: y_inok_i_mayor_grom_tome}
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
        node_besoboy_vol_2_1_single_1: {x: x_difference * 69, y: y_besoboy_vol_2_1_single},
        node_igor_grom_single_1: {x: x_difference * 69, y: y_igor_grom_single},
        node_mirokhodtsy_single_1: {x: x_difference * 69, y: y_mirokhodtsy_single},
        node_soyuzniki_single_1: {x: x_difference * 69, y: y_soyuzniki_single},
        node_ekslibrium_single_27: {x: x_difference * 69, y: y_ekslibrium_single},
        node_meteora_single_27: {x: x_difference * 69, y: y_meteora_single},
        node_soyuzniki_single_2: {x: x_difference * 70, y: y_soyuzniki_single},
        node_besoboy_vol_2_1_single_2: {x: x_difference * 70, y: y_besoboy_vol_2_1_single},
        node_igor_grom_single_2: {x: x_difference * 70, y: y_igor_grom_single},
        node_mirokhodtsy_single_2: {x: x_difference * 70, y: y_mirokhodtsy_single},
        node_mayor_grom_single_shans: {x: x_difference * 70, y: y_mayor_grom_single},
        node_ekslibrium_single_28: {x: x_difference * 70, y: y_ekslibrium_single},
        node_meteora_single_28: {x: x_difference * 70, y: y_meteora_single},
        node_soyuzniki_single_3: {x: x_difference * 71, y: y_soyuzniki_single},
        node_besoboy_vol_2_1_single_3: {x: x_difference * 71, y: y_besoboy_vol_2_1_single},
        node_igor_grom_single_3: {x: x_difference * 71, y: y_igor_grom_single},
        node_mirokhodtsy_single_3: {x: x_difference * 71, y: y_mirokhodtsy_single},
        node_ekslibrium_single_29: {x: x_difference * 71, y: y_ekslibrium_single},
        node_meteora_single_29: {x: x_difference * 71, y: y_meteora_single},
        node_soyuzniki_single_4: {x: x_difference * 72, y: y_soyuzniki_single},
        node_igor_ugor_tome_1: {x: x_difference * 72, y: y_igor_ugor_tome},
        node_besoboy_vol_2_1_single_4: {x: x_difference * 72, y: y_besoboy_vol_2_1_single},
        node_igor_grom_single_4: {x: x_difference * 72, y: y_igor_grom_single},
        node_mirokhodtsy_single_4: {x: x_difference * 72, y: y_mirokhodtsy_single},
        node_ekslibrium_single_30: {x: x_difference * 72, y: y_ekslibrium_single},
        node_meteora_single_30: {x: x_difference * 72, y: y_meteora_single},
        node_soyuzniki_single_5: {x: x_difference * 73, y: y_soyuzniki_single},
        node_besoboy_vol_2_1_single_5: {x: x_difference * 73, y: y_besoboy_vol_2_1_single},
        node_igor_grom_single_5: {x: x_difference * 73, y: y_igor_grom_single},
        node_besoboy_tome_9: {x: x_difference * 66, y: y_besoboy_tome}, /* 47 - 50 */
        node_mirokhodtsy_single_5: {x: x_difference * 73, y: y_mirokhodtsy_single},
        node_ekslibrium_single_31: {x: x_difference * 73, y: y_ekslibrium_single},
        node_meteora_single_31: {x: x_difference * 73, y: y_meteora_single},
        node_soyuzniki_single_6: {x: x_difference * 74, y: y_soyuzniki_single},
        node_mayor_grom_tome_8: {x: x_difference * 63.5, y: y_mayor_grom_tome}, /* 42 - 50 */
        node_inok_tome_8: {x: x_difference * 64, y: y_inok_tome},               /* 43 - 50 */
        node_besoboy_vol_2_1_single_6: {x: x_difference * 74, y: y_besoboy_vol_2_1_single},
        node_igor_grom_single_6: {x: x_difference * 74, y: y_igor_grom_single},
        node_krasnaya_furiya_tome_9: {x: x_difference * 66, y: y_krasnaya_furiya_tome}, /* 46 - 50 */
        node_mirokhodtsy_single_6: {x: x_difference * 74, y: y_mirokhodtsy_single},
        node_ekslibrium_single_32: {x: x_difference * 74, y: y_ekslibrium_single},
        node_meteora_single_32: {x: x_difference * 74, y: y_meteora_single},
        node_soyuzniki_single_7: {x: x_difference * 75, y: y_soyuzniki_single},
        node_druzhkomiks_single_1: {x: x_difference * 75, y: y_druzhkomiks_single},
        node_besoboy_vol_2_1_single_7: {x: x_difference * 75, y: y_besoboy_vol_2_1_single},
        node_druzhkomiks_single_2: {x: x_difference * 76, y: y_druzhkomiks_single},
        node_druzhkomiks_single_3: {x: x_difference * 77, y: y_druzhkomiks_single},
        node_igor_grom_single_7: {x: x_difference * 77, y: y_igor_grom_single},
        node_druzhkomiks_single_4: {x: x_difference * 78, y: y_druzhkomiks_single},
        node_druzhkomiks_single_5: {x: x_difference * 79, y: y_druzhkomiks_single},
        node_mirokhodtsy_single_7: {x: x_difference * 79, y: y_mirokhodtsy_single},
        node_druzhkomiks_single_6: {x: x_difference * 80, y: y_druzhkomiks_single},
        node_druzhkomiks_single_7: {x: x_difference * 81, y: y_druzhkomiks_single},
        node_ekslibrium_single_33: {x: x_difference * 81, y: y_ekslibrium_single},
        node_druzhkomiks_single_8: {x: x_difference * 82, y: y_druzhkomiks_single},
        node_druzhkomiks_single_9: {x: x_difference * 83, y: y_druzhkomiks_single},
        node_meteora_single_33: {x: x_difference * 83, y: y_meteora_single},
        node_druzhkomiks_single_10: {x: x_difference * 84, y: y_druzhkomiks_single},
        node_ekslibrium_tome_4: {x: x_difference * 62, y: y_ekslibrium_tome}, /* 18 - 23 */
        node_meteora_tome_4: {x: x_difference * 63, y: y_meteora_tome},       /* 18 - 25 */
        node_druzhkomiks_single_11: {x: x_difference * 85, y: y_druzhkomiks_single},
        node_soyuzniki_single_8: {x: x_difference * 85, y: y_soyuzniki_single},
        node_druzhkomiks_single_12: {x: x_difference * 86, y: y_druzhkomiks_single},
        node_druzhkomiks_single_13: {x: x_difference * 87, y: y_druzhkomiks_single},
        node_besoboy_vol_2_1_single_8: {x: x_difference * 87, y: y_besoboy_vol_2_1_single},
        node_druzhkomiks_single_14: {x: x_difference * 88, y: y_druzhkomiks_single},
        node_druzhkomiks_single_15: {x: x_difference * 89, y: y_druzhkomiks_single},
        node_igor_grom_single_8: {x: x_difference * 89, y: y_igor_grom_single},
        node_druzhkomiks_single_16: {x: x_difference * 90, y: y_druzhkomiks_single},
        node_druzhkomiks_single_17: {x: x_difference * 91, y: y_druzhkomiks_single},
        node_mirokhodtsy_single_8: {x: x_difference * 91, y: y_mirokhodtsy_single},
        node_druzhkomiks_single_18: {x: x_difference * 92, y: y_druzhkomiks_single},
        node_ekslibrium_single_34: {x: x_difference * 92, y: y_ekslibrium_single},
        node_druzhkomiks_single_19: {x: x_difference * 93, y: y_druzhkomiks_single},
        node_druzhkomiks_single_20: {x: x_difference * 94, y: y_druzhkomiks_single},
        node_meteora_single_34: {x: x_difference * 94, y: y_meteora_single},
        node_druzhkomiks_single_21: {x: x_difference * 95, y: y_druzhkomiks_single},
        node_druzhkomiks_single_22: {x: x_difference * 96, y: y_druzhkomiks_single},
        node_druzhkomiks_single_23: {x: x_difference * 97, y: y_druzhkomiks_single},
        node_soyuzniki_single_9: {x: x_difference * 97, y: y_soyuzniki_single},
        node_druzhkomiks_single_24: {x: x_difference * 98, y: y_druzhkomiks_single},
        node_druzhkomiks_single_25: {x: x_difference * 99, y: y_druzhkomiks_single},
        node_besoboy_vol_2_1_single_9: {x: x_difference * 99, y: y_besoboy_vol_2_1_single},
        node_druzhkomiks_single_26: {x: x_difference * 100, y: y_druzhkomiks_single},
        node_druzhkomiks_single_27: {x: x_difference * 101, y: y_druzhkomiks_single},
        node_igor_grom_single_9: {x: x_difference * 101, y: y_igor_grom_single},
        node_mirokhodtsy_single_9: {x: x_difference * 101, y: y_mirokhodtsy_single},
        node_ekslibrium_single_35: {x: x_difference * 101, y: y_ekslibrium_single},

    }
};
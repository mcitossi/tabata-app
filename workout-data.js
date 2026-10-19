/* Schede trascritte dai PDF 35WORKOUT forniti dall'utente.
 * I nomi originali restano nelle sedute; gli alias uniscono solo varianti testuali.
 * Nessuna demo viene assegnata per somiglianza del gruppo muscolare. */
(function(root){
'use strict';
const exercises = {
  "m_piegamenti_sulle_braccia": {
    "id": "m_piegamenti_sulle_braccia",
    "name": "Piegamenti sulle braccia",
    "equip": "Come da scheda",
    "mediaId": "push_up",
    "sourceNames": [
      "Piegamenti sulle braccia"
    ]
  },
  "m_rematore_2_manubri": {
    "id": "m_rematore_2_manubri",
    "name": "Rematore 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Rematore 2manubri"
    ]
  },
  "m_alzate_laterali_2_manubri": {
    "id": "m_alzate_laterali_2_manubri",
    "name": "Alzate laterali 2 manubri",
    "equip": "Manubri",
    "mediaId": "db_lateral_raise",
    "sourceNames": [
      "Alzate laterali 2manubri"
    ]
  },
  "m_french_press_2_manubri": {
    "id": "m_french_press_2_manubri",
    "name": "French press 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "French press 2manubri"
    ]
  },
  "m_curl_hammer_2_manubri": {
    "id": "m_curl_hammer_2_manubri",
    "name": "Curl hammer 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Curl hammer 2manubri in piedi",
      "Curl hammer",
      "Curl hammer 2manubri",
      "Curl hammer in piedi 2manubri",
      "Curl hammer con 2manubri"
    ]
  },
  "m_stacco_da_terra_2_manubri": {
    "id": "m_stacco_da_terra_2_manubri",
    "name": "Stacco da terra 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Stacco da terra 2manubri"
    ]
  },
  "m_affondi_alternati_2_manubri": {
    "id": "m_affondi_alternati_2_manubri",
    "name": "Affondi alternati 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondi alternati 2manubri"
    ]
  },
  "m_doppio_crunch": {
    "id": "m_doppio_crunch",
    "name": "Doppio crunch",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Doppio Crunch",
      "Doppio crunch"
    ]
  },
  "m_goblet_squat_1_manubrio": {
    "id": "m_goblet_squat_1_manubrio",
    "name": "Goblet squat 1 manubrio",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Goblet squat 1manubrio",
      "Goblet Squat",
      "Goblet squat"
    ]
  },
  "m_stacchi_rumeni_2_manubri": {
    "id": "m_stacchi_rumeni_2_manubri",
    "name": "Stacchi rumeni 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Stacchi rumeni 2manubri",
      "Stacco rumeno 2manubri"
    ]
  },
  "m_mountain_climber": {
    "id": "m_mountain_climber",
    "name": "Mountain climber",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Mountain climber"
    ]
  },
  "m_wide_y_back_2_manubri": {
    "id": "m_wide_y_back_2_manubri",
    "name": "Wide y back 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Wide Y back 2manubri",
      "Wide Y Back 2manubri",
      "Wide Y back"
    ]
  },
  "m_spinte_orizzontali_2_manubri": {
    "id": "m_spinte_orizzontali_2_manubri",
    "name": "Spinte orizzontali 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Spinte orizzontali 2manubri"
    ]
  },
  "m_volare_prono_2_manubri": {
    "id": "m_volare_prono_2_manubri",
    "name": "Volare prono 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Volare prono 2manubri"
    ]
  },
  "m_french_press_dietro_nuca_1_manubrio": {
    "id": "m_french_press_dietro_nuca_1_manubrio",
    "name": "French press dietro nuca 1 manubrio",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "French press dietro nuca 1manubrio"
    ]
  },
  "m_curl_contro_muro_2_manubri": {
    "id": "m_curl_contro_muro_2_manubri",
    "name": "Curl contro muro 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Curl contro muro 2manubri",
      "Curl 2manubri contro muro",
      "Curl con 2manubri contro muro"
    ]
  },
  "m_croci_orizzontali_2_manubri": {
    "id": "m_croci_orizzontali_2_manubri",
    "name": "Croci orizzontali 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Croci orizzontali 2manubri"
    ]
  },
  "m_rematore_presa_neutra_2_manubri": {
    "id": "m_rematore_presa_neutra_2_manubri",
    "name": "Rematore presa neutra 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Rematore presa neutra  2manubri"
    ]
  },
  "m_military_press_2_manubri_seduto_a_terra": {
    "id": "m_military_press_2_manubri_seduto_a_terra",
    "name": "Military press 2 manubri seduto a terra",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Military press 2manubri seduto a terra"
    ]
  },
  "m_curl_2_manubri_in_piedi": {
    "id": "m_curl_2_manubri_in_piedi",
    "name": "Curl 2 manubri in piedi",
    "equip": "Manubri",
    "mediaId": "db_bicep_curl",
    "sourceNames": [
      "Curl 2manubri in piedi",
      "Curl con 2manubri"
    ]
  },
  "m_kick_back_2_manubri": {
    "id": "m_kick_back_2_manubri",
    "name": "Kick back 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Kick back 2manubri"
    ]
  },
  "m_overhead_squat_1_manubrio": {
    "id": "m_overhead_squat_1_manubrio",
    "name": "Overhead squat 1 manubrio",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Overhead squat 1manubrio"
    ]
  },
  "m_squat_bulgaro_sedia": {
    "id": "m_squat_bulgaro_sedia",
    "name": "Squat bulgaro sedia",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Squat bulgaro sedia"
    ]
  },
  "m_spider_mountain_climber": {
    "id": "m_spider_mountain_climber",
    "name": "Spider mountain climber",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Spider mountain climber",
      "Spiede mountain climber"
    ]
  },
  "m_swing_kt": {
    "id": "m_swing_kt",
    "name": "Swing kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Swing kt",
      "Swing  kt",
      "Swing kettlebell"
    ]
  },
  "m_front_squat_kt": {
    "id": "m_front_squat_kt",
    "name": "Front squat kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Front squat kt",
      "Fron squat kt",
      "Front squat kettlebell"
    ]
  },
  "m_affondi_kt": {
    "id": "m_affondi_kt",
    "name": "Affondi kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Affondi kt"
    ]
  },
  "m_crunch_kt": {
    "id": "m_crunch_kt",
    "name": "Crunch kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Crunch kt",
      "Crunch kettlebell"
    ]
  },
  "m_russian_twist_kt": {
    "id": "m_russian_twist_kt",
    "name": "Russian twist kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Russian twist kt",
      "Russian twist kettlebell"
    ]
  },
  "m_piegamenti_sulle_braccia_kt": {
    "id": "m_piegamenti_sulle_braccia_kt",
    "name": "Piegamenti sulle braccia kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Piegamenti sulle braccia kt",
      "Piegamenti braccia kt",
      "Piegamenti sulle braccia su kt"
    ]
  },
  "m_rematore_kt": {
    "id": "m_rematore_kt",
    "name": "Rematore kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Rematore kt"
    ]
  },
  "m_military_press_kt": {
    "id": "m_military_press_kt",
    "name": "Military press kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Military press kt",
      "Militarny press kt",
      "Military press kettlebell"
    ]
  },
  "m_stacco_da_terra_elastico": {
    "id": "m_stacco_da_terra_elastico",
    "name": "Stacco da terra elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Stacco da terra elastico"
    ]
  },
  "m_front_squat_elastico": {
    "id": "m_front_squat_elastico",
    "name": "Front squat elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Front squat elastico"
    ]
  },
  "m_crunch_bicicletta": {
    "id": "m_crunch_bicicletta",
    "name": "Crunch bicicletta",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Crunch bicicletta",
      "Bicicletta",
      "Crunch  bicicletta"
    ]
  },
  "m_piegamenti_sulle_braccia_elastico": {
    "id": "m_piegamenti_sulle_braccia_elastico",
    "name": "Piegamenti sulle braccia elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Piegamenti sulle braccia elastico",
      "Piegamenti braccia elastico"
    ]
  },
  "m_rematore_elastico": {
    "id": "m_rematore_elastico",
    "name": "Rematore elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Rematore elastico"
    ]
  },
  "m_military_press_elastico": {
    "id": "m_military_press_elastico",
    "name": "Military press elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Military press elastico"
    ]
  },
  "m_curl_elastico": {
    "id": "m_curl_elastico",
    "name": "Curl elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Curl con elastico",
      "Curl elastico"
    ]
  },
  "m_french_press_dietro_nuca_elastico": {
    "id": "m_french_press_dietro_nuca_elastico",
    "name": "French press dietro nuca elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "French press dietro nuca elastico"
    ]
  },
  "m_crunch": {
    "id": "m_crunch",
    "name": "Crunch",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Crunch"
    ]
  },
  "m_military_press_2_manubri": {
    "id": "m_military_press_2_manubri",
    "name": "Military press 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Military press 2manubri"
    ]
  },
  "m_affondi_per_dietro_2_manubri": {
    "id": "m_affondi_per_dietro_2_manubri",
    "name": "Affondi per dietro 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondi per dietro 2manubri"
    ]
  },
  "m_hollow_body_position": {
    "id": "m_hollow_body_position",
    "name": "Hollow body position",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Hollow position",
      "Hollow body position"
    ]
  },
  "m_spinte_2_manubri": {
    "id": "m_spinte_2_manubri",
    "name": "Spinte 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Spinte 2manubri",
      "Spine 2manubri"
    ]
  },
  "m_reverse_back_angel": {
    "id": "m_reverse_back_angel",
    "name": "Reverse back angel",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Reverse Back Angel",
      "Reverse back angel"
    ]
  },
  "m_squat_jump": {
    "id": "m_squat_jump",
    "name": "Squat jump",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Squat jump"
    ]
  },
  "m_piegamenti_passo_stretto": {
    "id": "m_piegamenti_passo_stretto",
    "name": "Piegamenti passo stretto",
    "equip": "Come da scheda",
    "mediaId": "close_push_up",
    "sourceNames": [
      "Piegamenti passo stretto",
      "Piegamenti a passo stretto"
    ]
  },
  "m_affondi_laterali_2_manubri": {
    "id": "m_affondi_laterali_2_manubri",
    "name": "Affondi laterali 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondi laterali 2manubri"
    ]
  },
  "m_speed_walkout": {
    "id": "m_speed_walkout",
    "name": "Speed walkout",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Speed Walkout"
    ]
  },
  "m_plank_inverso": {
    "id": "m_plank_inverso",
    "name": "Plank inverso",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Plank inverso"
    ]
  },
  "m_crunch_con_1_manubrio": {
    "id": "m_crunch_con_1_manubrio",
    "name": "Crunch con 1 manubrio",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Crunch + peso",
      "Crunch con 1manubrio"
    ]
  },
  "m_affondi_jump": {
    "id": "m_affondi_jump",
    "name": "Affondi jump",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Affondi jump"
    ]
  },
  "m_alzate_laterali_completa_2_manubri": {
    "id": "m_alzate_laterali_completa_2_manubri",
    "name": "Alzate laterali completa 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Alzate laterali completa 2manubri"
    ]
  },
  "m_side_plank": {
    "id": "m_side_plank",
    "name": "Side plank",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Side plank"
    ]
  },
  "m_stacco_da_terra_kt": {
    "id": "m_stacco_da_terra_kt",
    "name": "Stacco da terra kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Stacco da terra kt",
      "Stacco kt"
    ]
  },
  "m_side_bend_kt": {
    "id": "m_side_bend_kt",
    "name": "Side bend kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Side bend kt"
    ]
  },
  "m_french_press_kt": {
    "id": "m_french_press_kt",
    "name": "French press kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "French press kt",
      "French press kettlebell"
    ]
  },
  "m_full_squat_jump": {
    "id": "m_full_squat_jump",
    "name": "Full squat jump",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Full squat jump"
    ]
  },
  "m_alzata_frontale_elastico": {
    "id": "m_alzata_frontale_elastico",
    "name": "Alzata frontale elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Alzata frontale elastico"
    ]
  },
  "m_stacco_rumeno_elastico": {
    "id": "m_stacco_rumeno_elastico",
    "name": "Stacco rumeno elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Stacco rumeno elastico",
      "Stacchi rumeni elastico"
    ]
  },
  "m_croci_elastico": {
    "id": "m_croci_elastico",
    "name": "Croci elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Croci elastico"
    ]
  },
  "m_french_press_elastico": {
    "id": "m_french_press_elastico",
    "name": "French press elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "French press elastico"
    ]
  },
  "m_cross_mountain_climber": {
    "id": "m_cross_mountain_climber",
    "name": "Cross mountain climber",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Cross mountain climber"
    ]
  },
  "m_croci_2_manubri": {
    "id": "m_croci_2_manubri",
    "name": "Croci 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Croci 2manubri"
    ]
  },
  "m_affondi_2_manubri": {
    "id": "m_affondi_2_manubri",
    "name": "Affondi 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondi 2manubri"
    ]
  },
  "m_plank": {
    "id": "m_plank",
    "name": "Plank",
    "equip": "Come da scheda",
    "mediaId": "plank",
    "sourceNames": [
      "Plank sui gomiti",
      "Plank"
    ]
  },
  "m_affondi_laterali_kt": {
    "id": "m_affondi_laterali_kt",
    "name": "Affondi laterali kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Affondi laterali kt"
    ]
  },
  "m_rematore_gomito_largo_kt": {
    "id": "m_rematore_gomito_largo_kt",
    "name": "Rematore gomito largo kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Rematore gomito largo kt"
    ]
  },
  "m_jerk_kt": {
    "id": "m_jerk_kt",
    "name": "Jerk kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Jerk kt"
    ]
  },
  "m_crunch_braccia_alte": {
    "id": "m_crunch_braccia_alte",
    "name": "Crunch braccia alte",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Crunch braccia alte"
    ]
  },
  "m_piegamenti_a_diamante": {
    "id": "m_piegamenti_a_diamante",
    "name": "Piegamenti a diamante",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Piegamenti a diamante"
    ]
  },
  "m_rematore_gomito_largo_2_manubri": {
    "id": "m_rematore_gomito_largo_2_manubri",
    "name": "Rematore gomito largo 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Rematore gomito largo 2manubri"
    ]
  },
  "m_affondi_alternati_per_dietro_2_manubri": {
    "id": "m_affondi_alternati_per_dietro_2_manubri",
    "name": "Affondi alternati per dietro 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondi alternati per dietro 2manubri"
    ]
  },
  "m_alzata_frontale_2_manubri": {
    "id": "m_alzata_frontale_2_manubri",
    "name": "Alzata frontale 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Alzata frontale 2manubri"
    ]
  },
  "m_crunch_inverso": {
    "id": "m_crunch_inverso",
    "name": "Crunch inverso",
    "equip": "Come da scheda",
    "mediaId": "reverse_crunch",
    "sourceNames": [
      "Crunch inverso"
    ]
  },
  "m_curl_uomo_pigro": {
    "id": "m_curl_uomo_pigro",
    "name": "Curl uomo pigro",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Curl uomo pigro"
    ]
  },
  "m_curl_presa_inversa_2_manubri": {
    "id": "m_curl_presa_inversa_2_manubri",
    "name": "Curl presa inversa 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Curl presa inversa 2manubri",
      "Curl inverso 2manubri"
    ]
  },
  "m_tirata_al_mento_spinta_avanti_kt": {
    "id": "m_tirata_al_mento_spinta_avanti_kt",
    "name": "Tirata al mento + spinta avanti kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Tirata al mento + spinta avanti kettlebell"
    ]
  },
  "m_squat_jump_kt": {
    "id": "m_squat_jump_kt",
    "name": "Squat jump kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Squat jump kettlebell",
      "Squat jump kt"
    ]
  },
  "m_piegamenti_su_kt_o_spinte_kt": {
    "id": "m_piegamenti_su_kt_o_spinte_kt",
    "name": "Piegamenti su kettlebell o spinte kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Piegamenti su kettlebell o Spinte kettlebell"
    ]
  },
  "m_curl_kt": {
    "id": "m_curl_kt",
    "name": "Curl kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Curl kettlebell",
      "Curl kt"
    ]
  },
  "m_pulley_elastico": {
    "id": "m_pulley_elastico",
    "name": "Pulley elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Pulley elastico"
    ]
  },
  "m_curl_seduto_elastico": {
    "id": "m_curl_seduto_elastico",
    "name": "Curl seduto elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Curl da seduto elastico",
      "Curl seduto elastico"
    ]
  },
  "m_french_largo_elastico": {
    "id": "m_french_largo_elastico",
    "name": "French largo elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "French largo elastico"
    ]
  },
  "m_alzate_laterali_ad_applauso_2_manubri": {
    "id": "m_alzate_laterali_ad_applauso_2_manubri",
    "name": "Alzate laterali ad applauso 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Alzate laterali ad applauso 2manubri"
    ]
  },
  "m_stacco_sumo_2_manubri": {
    "id": "m_stacco_sumo_2_manubri",
    "name": "Stacco sumo 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Stacco sumo 2manubri"
    ]
  },
  "m_tate_press_2_manubri": {
    "id": "m_tate_press_2_manubri",
    "name": "Tate press 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Tate press 2manubri"
    ]
  },
  "m_dip_sedia": {
    "id": "m_dip_sedia",
    "name": "Dip sedia",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Dip sedia"
    ]
  },
  "m_goblet_thruster_kt": {
    "id": "m_goblet_thruster_kt",
    "name": "Goblet thruster kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Goblet thruster kt"
    ]
  },
  "m_spinte_in_piedi_o_sdraiato_elastico": {
    "id": "m_spinte_in_piedi_o_sdraiato_elastico",
    "name": "Spinte in piedi o sdraiato elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Spinte in piedi o sdraiato elastico"
    ]
  },
  "m_kick_back_elastico": {
    "id": "m_kick_back_elastico",
    "name": "Kick back elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Kick back elastico"
    ]
  },
  "m_russian_twist_elastico": {
    "id": "m_russian_twist_elastico",
    "name": "Russian twist elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Russian twist elastico"
    ]
  },
  "m_french_press_90_1_manubrio": {
    "id": "m_french_press_90_1_manubrio",
    "name": "French press 90° 1 manubrio",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "French press 90° 1manubrio"
    ]
  },
  "m_french_press_a_terra_2_manubri": {
    "id": "m_french_press_a_terra_2_manubri",
    "name": "French press a terra 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "French press a terra 2manubri"
    ]
  },
  "m_piegamenti_sulle_braccia_passo_largo": {
    "id": "m_piegamenti_sulle_braccia_passo_largo",
    "name": "Piegamenti sulle braccia passo largo",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Piegamenti sulle braccia passo largo"
    ]
  },
  "m_affondo_statico_2_manubri_sx": {
    "id": "m_affondo_statico_2_manubri_sx",
    "name": "Affondo statico 2 manubri sx",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondo statico 2manubri sx"
    ]
  },
  "m_affondo_statico_2_manubri_dx": {
    "id": "m_affondo_statico_2_manubri_dx",
    "name": "Affondo statico 2 manubri dx",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Affondo statico 2manubri dx"
    ]
  },
  "m_squat_avanti_indietro": {
    "id": "m_squat_avanti_indietro",
    "name": "Squat avanti-indietro",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Squat avanti-indietro"
    ]
  },
  "m_side_plank_dx": {
    "id": "m_side_plank_dx",
    "name": "Side plank dx",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Side plank dx"
    ]
  },
  "m_side_plank_sx": {
    "id": "m_side_plank_sx",
    "name": "Side plank sx",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Side plank sx"
    ]
  },
  "m_tirate_al_mento_2_manubri": {
    "id": "m_tirate_al_mento_2_manubri",
    "name": "Tirate al mento 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Tirate al mento 2manubri"
    ]
  },
  "m_renegade_row_1_manubrio_o_2_manubri": {
    "id": "m_renegade_row_1_manubrio_o_2_manubri",
    "name": "Renegade row 1 manubrio o 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Renegade row 1manubrio o 2 manubri"
    ]
  },
  "m_rematore_in_ginocchio_2_manubri": {
    "id": "m_rematore_in_ginocchio_2_manubri",
    "name": "Rematore in ginocchio 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Rematore in ginocchio 2manubri"
    ]
  },
  "m_crunch_8_1_manubrio": {
    "id": "m_crunch_8_1_manubrio",
    "name": "Crunch 8 1 manubrio",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Crunch 8 1manubrio"
    ]
  },
  "m_pull_over_kt": {
    "id": "m_pull_over_kt",
    "name": "Pull over kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Pull over kt"
    ]
  },
  "m_american_swing_kt": {
    "id": "m_american_swing_kt",
    "name": "American swing kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Americam swing kt"
    ]
  },
  "m_russian_sit_up_kt": {
    "id": "m_russian_sit_up_kt",
    "name": "Russian sit-up kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Russian sit-up kt"
    ]
  },
  "m_affondi_elastico": {
    "id": "m_affondi_elastico",
    "name": "Affondi elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Affondi elastico"
    ]
  },
  "m_curl_prono_military_elastico": {
    "id": "m_curl_prono_military_elastico",
    "name": "Curl prono + military elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Curl prono + Military elastico"
    ]
  },
  "m_alzata_frontale": {
    "id": "m_alzata_frontale",
    "name": "Alzata frontale",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Alzata frontale"
    ]
  },
  "m_crunch_libretto": {
    "id": "m_crunch_libretto",
    "name": "Crunch libretto",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Crunch libretto"
    ]
  },
  "m_sit_up": {
    "id": "m_sit_up",
    "name": "Sit-up",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Sit-up"
    ]
  },
  "m_sit_up_crunch": {
    "id": "m_sit_up_crunch",
    "name": "Sit-up/crunch",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Sit-up/Crunch"
    ]
  },
  "m_front_squat_2_manubri": {
    "id": "m_front_squat_2_manubri",
    "name": "Front squat 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Front squat 2manubri"
    ]
  },
  "m_crunch_side_plank_dx": {
    "id": "m_crunch_side_plank_dx",
    "name": "Crunch side plank dx",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Crunch Side plank dx"
    ]
  },
  "m_crunch_side_plank_sx": {
    "id": "m_crunch_side_plank_sx",
    "name": "Crunch side plank sx",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Crunch Side plank sx"
    ]
  },
  "m_tricipiti_a_terra": {
    "id": "m_tricipiti_a_terra",
    "name": "Tricipiti a terra",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Tricipiti a terra"
    ]
  },
  "m_french_press_dietro_nuca": {
    "id": "m_french_press_dietro_nuca",
    "name": "French press dietro nuca",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "French press dietro nuca"
    ]
  },
  "m_curl_military_press_kt": {
    "id": "m_curl_military_press_kt",
    "name": "Curl + military press kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Curl + Military press kt"
    ]
  },
  "m_spinte_orizzontali_elastico": {
    "id": "m_spinte_orizzontali_elastico",
    "name": "Spinte orizzontali elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "Spinte orizzontali elastico"
    ]
  },
  "m_french_press_in_piedi_elastico": {
    "id": "m_french_press_in_piedi_elastico",
    "name": "French press in piedi elastico",
    "equip": "Elastico",
    "mediaId": null,
    "sourceNames": [
      "French press in piedi elastico"
    ]
  },
  "m_spinte_2_manubri_a_terra": {
    "id": "m_spinte_2_manubri_a_terra",
    "name": "Spinte 2 manubri a terra",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Spinte 2manubri a terra"
    ]
  },
  "m_croci_2_manubri_a_terra": {
    "id": "m_croci_2_manubri_a_terra",
    "name": "Croci 2 manubri a terra",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Croci 2 manubri a terra"
    ]
  },
  "m_rematore_presa_neutra": {
    "id": "m_rematore_presa_neutra",
    "name": "Rematore presa neutra",
    "equip": "Come da scheda",
    "mediaId": null,
    "sourceNames": [
      "Rematore presa neutra"
    ]
  },
  "m_pull_over_2_manubri": {
    "id": "m_pull_over_2_manubri",
    "name": "Pull over 2 manubri",
    "equip": "Manubri",
    "mediaId": null,
    "sourceNames": [
      "Pull over 2manubri"
    ]
  },
  "m_mountain_climber_kt": {
    "id": "m_mountain_climber_kt",
    "name": "Mountain climber kettlebell",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Mountain climber kt"
    ]
  },
  "m_military_press_kt_inverso": {
    "id": "m_military_press_kt_inverso",
    "name": "Military press kettlebell inverso",
    "equip": "Kettlebell",
    "mediaId": null,
    "sourceNames": [
      "Military press kt inverso"
    ]
  }
};
const mesocycles = {
  "m1": {
    "id": "m1",
    "name": "Mesociclo 1",
    "method": "Serie per esercizio",
    "mode": "standard",
    "work": 20,
    "rest": 40,
    "rounds": 4,
    "blockSize": 1,
    "blockRest": 40,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "Full Body",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri"
          },
          {
            "id": "m_alzate_laterali_2_manubri",
            "label": "Alzate laterali 2manubri",
            "sourceLabel": "Alzate laterali 2manubri"
          },
          {
            "id": "m_french_press_2_manubri",
            "label": "French press 2manubri",
            "sourceLabel": "French press 2manubri"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer 2manubri in piedi",
            "sourceLabel": "Curl hammer 2manubri in piedi"
          },
          {
            "id": "m_stacco_da_terra_2_manubri",
            "label": "Stacco da terra 2manubri",
            "sourceLabel": "Stacco da terra 2manubri"
          },
          {
            "id": "m_affondi_alternati_2_manubri",
            "label": "Affondi alternati 2manubri",
            "sourceLabel": "Affondi alternati 2manubri"
          },
          {
            "id": "m_doppio_crunch",
            "label": "Doppio Crunch",
            "sourceLabel": "Doppio Crunch"
          }
        ]
      },
      {
        "id": "s2",
        "name": "Full Body",
        "optional": false,
        "exercises": [
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet squat 1manubrio",
            "sourceLabel": "Goblet squat 1manubrio"
          },
          {
            "id": "m_stacchi_rumeni_2_manubri",
            "label": "Stacchi rumeni 2manubri",
            "sourceLabel": "Stacchi rumeni 2manubri"
          },
          {
            "id": "m_mountain_climber",
            "label": "Mountain climber",
            "sourceLabel": "Mountain climber"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y back 2manubri",
            "sourceLabel": "Wide Y back 2manubri"
          },
          {
            "id": "m_spinte_orizzontali_2_manubri",
            "label": "Spinte orizzontali 2manubri",
            "sourceLabel": "Spinte orizzontali 2manubri"
          },
          {
            "id": "m_volare_prono_2_manubri",
            "label": "Volare prono 2manubri",
            "sourceLabel": "Volare prono 2manubri"
          },
          {
            "id": "m_french_press_dietro_nuca_1_manubrio",
            "label": "French press dietro nuca 1manubrio",
            "sourceLabel": "French press dietro nuca 1manubrio"
          },
          {
            "id": "m_curl_contro_muro_2_manubri",
            "label": "Curl contro muro 2manubri",
            "sourceLabel": "Curl contro muro 2manubri"
          }
        ]
      },
      {
        "id": "s3",
        "name": "Full Body",
        "optional": false,
        "exercises": [
          {
            "id": "m_croci_orizzontali_2_manubri",
            "label": "Croci orizzontali 2manubri",
            "sourceLabel": "Croci orizzontali 2manubri"
          },
          {
            "id": "m_rematore_presa_neutra_2_manubri",
            "label": "Rematore presa neutra  2manubri",
            "sourceLabel": "Rematore presa neutra  2manubri"
          },
          {
            "id": "m_military_press_2_manubri_seduto_a_terra",
            "label": "Military press 2manubri seduto a terra",
            "sourceLabel": "Military press 2manubri seduto a terra"
          },
          {
            "id": "m_curl_2_manubri_in_piedi",
            "label": "Curl 2manubri in piedi",
            "sourceLabel": "Curl 2manubri in piedi"
          },
          {
            "id": "m_kick_back_2_manubri",
            "label": "Kick back 2manubri",
            "sourceLabel": "Kick back 2manubri"
          },
          {
            "id": "m_overhead_squat_1_manubrio",
            "label": "Overhead squat 1manubrio",
            "sourceLabel": "Overhead squat 1manubrio"
          },
          {
            "id": "m_squat_bulgaro_sedia",
            "label": "Squat bulgaro sedia",
            "sourceLabel": "Squat bulgaro sedia"
          },
          {
            "id": "m_spider_mountain_climber",
            "label": "Spider mountain climber",
            "sourceLabel": "Spider mountain climber"
          }
        ]
      },
      {
        "id": "s4",
        "name": "Kettlebell Full Body",
        "optional": true,
        "exercises": [
          {
            "id": "m_swing_kt",
            "label": "Swing kt",
            "sourceLabel": "Swing kt"
          },
          {
            "id": "m_front_squat_kt",
            "label": "Front squat kt",
            "sourceLabel": "Front squat kt"
          },
          {
            "id": "m_affondi_kt",
            "label": "Affondi kt",
            "sourceLabel": "Affondi kt"
          },
          {
            "id": "m_crunch_kt",
            "label": "Crunch kt",
            "sourceLabel": "Crunch kt"
          },
          {
            "id": "m_russian_twist_kt",
            "label": "Russian twist kt",
            "sourceLabel": "Russian twist kt"
          },
          {
            "id": "m_piegamenti_sulle_braccia_kt",
            "label": "Piegamenti sulle braccia kt",
            "sourceLabel": "Piegamenti sulle braccia kt"
          },
          {
            "id": "m_rematore_kt",
            "label": "Rematore kt",
            "sourceLabel": "Rematore kt"
          },
          {
            "id": "m_military_press_kt",
            "label": "Military press kt",
            "sourceLabel": "Military press kt"
          }
        ]
      },
      {
        "id": "s5",
        "name": "Elastici Full Body",
        "optional": true,
        "exercises": [
          {
            "id": "m_stacco_da_terra_elastico",
            "label": "Stacco da terra elastico",
            "sourceLabel": "Stacco da terra elastico"
          },
          {
            "id": "m_front_squat_elastico",
            "label": "Front squat elastico",
            "sourceLabel": "Front squat elastico"
          },
          {
            "id": "m_crunch_bicicletta",
            "label": "Crunch bicicletta",
            "sourceLabel": "Crunch bicicletta"
          },
          {
            "id": "m_piegamenti_sulle_braccia_elastico",
            "label": "Piegamenti sulle braccia elastico",
            "sourceLabel": "Piegamenti sulle braccia elastico"
          },
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico"
          },
          {
            "id": "m_military_press_elastico",
            "label": "Military press elastico",
            "sourceLabel": "Military press elastico"
          },
          {
            "id": "m_curl_elastico",
            "label": "Curl con elastico",
            "sourceLabel": "Curl con elastico"
          },
          {
            "id": "m_french_press_dietro_nuca_elastico",
            "label": "French press dietro nuca elastico",
            "sourceLabel": "French press dietro nuca elastico"
          }
        ]
      }
    ]
  },
  "m2": {
    "id": "m2",
    "name": "Mesociclo 2",
    "method": "Due circuiti",
    "mode": "blocks",
    "work": 25,
    "rest": 15,
    "rounds": 6,
    "blockSize": 4,
    "blockRest": 120,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "Full Body",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri"
          },
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet Squat",
            "sourceLabel": "Goblet Squat"
          },
          {
            "id": "m_crunch",
            "label": "Crunch",
            "sourceLabel": "Crunch"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri"
          },
          {
            "id": "m_curl_2_manubri_in_piedi",
            "label": "Curl con 2manubri",
            "sourceLabel": "Curl con 2manubri"
          },
          {
            "id": "m_affondi_per_dietro_2_manubri",
            "label": "Affondi per dietro 2manubri",
            "sourceLabel": "Affondi per dietro 2manubri"
          },
          {
            "id": "m_hollow_body_position",
            "label": "Hollow position",
            "sourceLabel": "Hollow position"
          }
        ]
      },
      {
        "id": "s2",
        "name": "Full Body",
        "optional": false,
        "exercises": [
          {
            "id": "m_spinte_2_manubri",
            "label": "Spinte 2manubri",
            "sourceLabel": "Spinte 2manubri"
          },
          {
            "id": "m_reverse_back_angel",
            "label": "Reverse Back Angel",
            "sourceLabel": "Reverse Back Angel"
          },
          {
            "id": "m_mountain_climber",
            "label": "Mountain climber",
            "sourceLabel": "Mountain climber"
          },
          {
            "id": "m_squat_jump",
            "label": "Squat jump",
            "sourceLabel": "Squat jump"
          },
          {
            "id": "m_piegamenti_passo_stretto",
            "label": "Piegamenti passo stretto",
            "sourceLabel": "Piegamenti passo stretto"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer",
            "sourceLabel": "Curl hammer"
          },
          {
            "id": "m_affondi_laterali_2_manubri",
            "label": "Affondi laterali 2manubri",
            "sourceLabel": "Affondi laterali 2manubri"
          },
          {
            "id": "m_crunch_bicicletta",
            "label": "Bicicletta",
            "sourceLabel": "Bicicletta"
          }
        ]
      },
      {
        "id": "s3",
        "name": "Full Body",
        "optional": false,
        "exercises": [
          {
            "id": "m_stacco_da_terra_2_manubri",
            "label": "Stacco da terra 2manubri",
            "sourceLabel": "Stacco da terra 2manubri"
          },
          {
            "id": "m_speed_walkout",
            "label": "Speed Walkout",
            "sourceLabel": "Speed Walkout"
          },
          {
            "id": "m_plank_inverso",
            "label": "Plank inverso",
            "sourceLabel": "Plank inverso"
          },
          {
            "id": "m_crunch_con_1_manubrio",
            "label": "Crunch + peso",
            "sourceLabel": "Crunch + peso"
          },
          {
            "id": "m_affondi_jump",
            "label": "Affondi jump",
            "sourceLabel": "Affondi jump"
          },
          {
            "id": "m_alzate_laterali_completa_2_manubri",
            "label": "Alzate laterali completa 2manubri",
            "sourceLabel": "Alzate laterali completa 2manubri"
          },
          {
            "id": "m_kick_back_2_manubri",
            "label": "Kick back 2manubri",
            "sourceLabel": "Kick back 2manubri"
          },
          {
            "id": "m_side_plank",
            "label": "Side plank",
            "sourceLabel": "Side plank"
          }
        ]
      },
      {
        "id": "s4",
        "name": "Full Body Kettlebell",
        "optional": true,
        "exercises": [
          {
            "id": "m_swing_kt",
            "label": "Swing  kt",
            "sourceLabel": "Swing  kt"
          },
          {
            "id": "m_military_press_kt",
            "label": "Military press kt",
            "sourceLabel": "Militarny press kt"
          },
          {
            "id": "m_stacco_da_terra_kt",
            "label": "Stacco da terra kt",
            "sourceLabel": "Stacco da terra kt"
          },
          {
            "id": "m_side_bend_kt",
            "label": "Side bend kt",
            "sourceLabel": "Side bend kt"
          },
          {
            "id": "m_front_squat_kt",
            "label": "Front squat kt",
            "sourceLabel": "Fron squat kt"
          },
          {
            "id": "m_rematore_kt",
            "label": "Rematore kt",
            "sourceLabel": "Rematore kt"
          },
          {
            "id": "m_french_press_kt",
            "label": "French press kt",
            "sourceLabel": "French press kt"
          },
          {
            "id": "m_russian_twist_kt",
            "label": "Russian twist kt",
            "sourceLabel": "Russian twist kt"
          }
        ]
      },
      {
        "id": "s5",
        "name": "Full Body Elastici",
        "optional": true,
        "exercises": [
          {
            "id": "m_full_squat_jump",
            "label": "Full squat jump",
            "sourceLabel": "Full squat jump"
          },
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico"
          },
          {
            "id": "m_alzata_frontale_elastico",
            "label": "Alzata frontale elastico",
            "sourceLabel": "Alzata frontale elastico"
          },
          {
            "id": "m_doppio_crunch",
            "label": "Doppio crunch",
            "sourceLabel": "Doppio crunch"
          },
          {
            "id": "m_stacco_rumeno_elastico",
            "label": "Stacco rumeno elastico",
            "sourceLabel": "Stacco rumeno elastico"
          },
          {
            "id": "m_croci_elastico",
            "label": "Croci elastico",
            "sourceLabel": "Croci elastico"
          },
          {
            "id": "m_french_press_elastico",
            "label": "French press elastico",
            "sourceLabel": "French press elastico"
          },
          {
            "id": "m_cross_mountain_climber",
            "label": "Cross mountain climber",
            "sourceLabel": "Cross mountain climber"
          }
        ]
      }
    ]
  },
  "m3": {
    "id": "m3",
    "name": "Mesociclo 3",
    "method": "Serie per esercizio",
    "mode": "standard",
    "work": 30,
    "rest": 30,
    "rounds": 5,
    "blockSize": 1,
    "blockRest": 30,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "Petto - Bicipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_croci_2_manubri",
            "label": "Croci 2manubri",
            "sourceLabel": "Croci 2manubri"
          },
          {
            "id": "m_spinte_2_manubri",
            "label": "Spinte 2manubri",
            "sourceLabel": "Spinte 2manubri"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer 2manubri",
            "sourceLabel": "Curl hammer 2manubri"
          },
          {
            "id": "m_curl_contro_muro_2_manubri",
            "label": "Curl contro muro 2manubri",
            "sourceLabel": "Curl contro muro 2manubri"
          },
          {
            "id": "m_hollow_body_position",
            "label": "Hollow body position",
            "sourceLabel": "Hollow body position"
          }
        ]
      },
      {
        "id": "s2",
        "name": "Gambe - Spalle",
        "optional": false,
        "exercises": [
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet squat",
            "sourceLabel": "Goblet squat"
          },
          {
            "id": "m_affondi_2_manubri",
            "label": "Affondi 2manubri",
            "sourceLabel": "Affondi 2manubri"
          },
          {
            "id": "m_stacchi_rumeni_2_manubri",
            "label": "Stacchi rumeni 2manubri",
            "sourceLabel": "Stacchi rumeni 2manubri"
          },
          {
            "id": "m_squat_jump",
            "label": "Squat jump",
            "sourceLabel": "Squat jump"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri"
          },
          {
            "id": "m_alzate_laterali_2_manubri",
            "label": "Alzate laterali 2manubri",
            "sourceLabel": "Alzate laterali 2manubri"
          }
        ]
      },
      {
        "id": "s3",
        "name": "Dorso - Tricipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri"
          },
          {
            "id": "m_volare_prono_2_manubri",
            "label": "Volare prono 2manubri",
            "sourceLabel": "Volare prono 2manubri"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y back 2manubri",
            "sourceLabel": "Wide Y back 2manubri"
          },
          {
            "id": "m_french_press_2_manubri",
            "label": "French press 2manubri",
            "sourceLabel": "French press 2manubri"
          },
          {
            "id": "m_piegamenti_passo_stretto",
            "label": "Piegamenti passo stretto",
            "sourceLabel": "Piegamenti passo stretto"
          },
          {
            "id": "m_plank",
            "label": "Plank sui gomiti",
            "sourceLabel": "Plank sui gomiti"
          }
        ]
      },
      {
        "id": "s4",
        "name": "Full Body Kettlebell",
        "optional": true,
        "exercises": [
          {
            "id": "m_front_squat_kt",
            "label": "Front squat kt",
            "sourceLabel": "Front squat kt"
          },
          {
            "id": "m_affondi_laterali_kt",
            "label": "Affondi laterali kt",
            "sourceLabel": "Affondi laterali kt"
          },
          {
            "id": "m_rematore_gomito_largo_kt",
            "label": "Rematore gomito largo kt",
            "sourceLabel": "Rematore gomito largo kt"
          },
          {
            "id": "m_jerk_kt",
            "label": "Jerk kt",
            "sourceLabel": "Jerk kt"
          },
          {
            "id": "m_crunch_bicicletta",
            "label": "Crunch bicicletta",
            "sourceLabel": "Crunch bicicletta"
          },
          {
            "id": "m_crunch_kt",
            "label": "Crunch kt",
            "sourceLabel": "Crunch kt"
          }
        ]
      },
      {
        "id": "s5",
        "name": "Full Body Elastico",
        "optional": true,
        "exercises": [
          {
            "id": "m_front_squat_elastico",
            "label": "Front squat elastico",
            "sourceLabel": "Front squat elastico"
          },
          {
            "id": "m_piegamenti_sulle_braccia_elastico",
            "label": "Piegamenti braccia elastico",
            "sourceLabel": "Piegamenti braccia elastico"
          },
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico"
          },
          {
            "id": "m_military_press_elastico",
            "label": "Military press elastico",
            "sourceLabel": "Military press elastico"
          },
          {
            "id": "m_curl_elastico",
            "label": "Curl elastico",
            "sourceLabel": "Curl elastico"
          },
          {
            "id": "m_crunch_braccia_alte",
            "label": "Crunch braccia alte",
            "sourceLabel": "Crunch braccia alte"
          }
        ]
      }
    ]
  },
  "m4": {
    "id": "m4",
    "name": "Mesociclo 4",
    "method": "Jumpset",
    "mode": "blocks",
    "work": 45,
    "rest": 10,
    "rounds": 3,
    "blockSize": 2,
    "blockRest": 60,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "Petto - Dorso - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri"
          },
          {
            "id": "m_croci_2_manubri",
            "label": "Croci 2manubri",
            "sourceLabel": "Croci 2manubri"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y Back 2manubri",
            "sourceLabel": "Wide Y Back 2manubri"
          },
          {
            "id": "m_spinte_2_manubri",
            "label": "Spinte 2manubri",
            "sourceLabel": "Spine 2manubri"
          },
          {
            "id": "m_reverse_back_angel",
            "label": "Reverse back angel",
            "sourceLabel": "Reverse back angel"
          },
          {
            "id": "m_piegamenti_a_diamante",
            "label": "Piegamenti a diamante",
            "sourceLabel": "Piegamenti a diamante"
          },
          {
            "id": "m_rematore_gomito_largo_2_manubri",
            "label": "Rematore gomito largo 2manubri",
            "sourceLabel": "Rematore gomito largo 2manubri"
          },
          {
            "id": "m_plank",
            "label": "Plank",
            "sourceLabel": "Plank"
          },
          {
            "id": "m_crunch",
            "label": "Crunch",
            "sourceLabel": "Crunch"
          }
        ]
      },
      {
        "id": "s2",
        "name": "Gambe - Spalle - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet squat 1manubrio",
            "sourceLabel": "Goblet squat 1manubrio"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri"
          },
          {
            "id": "m_stacchi_rumeni_2_manubri",
            "label": "Stacco rumeno 2manubri",
            "sourceLabel": "Stacco rumeno 2manubri"
          },
          {
            "id": "m_alzate_laterali_2_manubri",
            "label": "Alzate laterali 2manubri",
            "sourceLabel": "Alzate laterali 2manubri"
          },
          {
            "id": "m_affondi_alternati_per_dietro_2_manubri",
            "label": "Affondi alternati per dietro 2manubri",
            "sourceLabel": "Affondi alternati per dietro 2manubri"
          },
          {
            "id": "m_alzata_frontale_2_manubri",
            "label": "Alzata frontale 2manubri",
            "sourceLabel": "Alzata frontale 2manubri"
          },
          {
            "id": "m_stacco_da_terra_2_manubri",
            "label": "Stacco da terra 2manubri",
            "sourceLabel": "Stacco da terra 2manubri"
          },
          {
            "id": "m_volare_prono_2_manubri",
            "label": "Volare prono 2manubri",
            "sourceLabel": "Volare prono 2manubri"
          },
          {
            "id": "m_hollow_body_position",
            "label": "Hollow body position",
            "sourceLabel": "Hollow body position"
          },
          {
            "id": "m_crunch_inverso",
            "label": "Crunch inverso",
            "sourceLabel": "Crunch inverso"
          }
        ]
      },
      {
        "id": "s3",
        "name": "Bicipiti - Tricipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer in piedi 2manubri",
            "sourceLabel": "Curl hammer in piedi 2manubri"
          },
          {
            "id": "m_piegamenti_passo_stretto",
            "label": "Piegamenti a passo stretto",
            "sourceLabel": "Piegamenti a passo stretto"
          },
          {
            "id": "m_curl_contro_muro_2_manubri",
            "label": "Curl 2manubri contro muro",
            "sourceLabel": "Curl 2manubri contro muro"
          },
          {
            "id": "m_kick_back_2_manubri",
            "label": "Kick back 2manubri",
            "sourceLabel": "Kick back 2manubri"
          },
          {
            "id": "m_curl_uomo_pigro",
            "label": "Curl uomo pigro",
            "sourceLabel": "Curl uomo pigro"
          },
          {
            "id": "m_french_press_2_manubri",
            "label": "French press 2manubri",
            "sourceLabel": "French press 2manubri"
          },
          {
            "id": "m_curl_presa_inversa_2_manubri",
            "label": "Curl presa inversa 2manubri",
            "sourceLabel": "Curl presa inversa 2manubri"
          },
          {
            "id": "m_french_press_dietro_nuca_1_manubrio",
            "label": "French press dietro nuca 1manubrio",
            "sourceLabel": "French press dietro nuca 1manubrio"
          },
          {
            "id": "m_plank_inverso",
            "label": "Plank inverso",
            "sourceLabel": "Plank inverso"
          },
          {
            "id": "m_crunch_bicicletta",
            "label": "Crunch  bicicletta",
            "sourceLabel": "Crunch  bicicletta"
          }
        ]
      },
      {
        "id": "s4",
        "name": "Full Body Kettlebell",
        "optional": true,
        "exercises": [
          {
            "id": "m_swing_kt",
            "label": "Swing kettlebell",
            "sourceLabel": "Swing kettlebell"
          },
          {
            "id": "m_military_press_kt",
            "label": "Military press kettlebell",
            "sourceLabel": "Military press kettlebell"
          },
          {
            "id": "m_front_squat_kt",
            "label": "Front squat kettlebell",
            "sourceLabel": "Front squat kettlebell"
          },
          {
            "id": "m_tirata_al_mento_spinta_avanti_kt",
            "label": "Tirata al mento + spinta avanti kettlebell",
            "sourceLabel": "Tirata al mento + spinta avanti kettlebell"
          },
          {
            "id": "m_squat_jump_kt",
            "label": "Squat jump kettlebell",
            "sourceLabel": "Squat jump kettlebell"
          },
          {
            "id": "m_piegamenti_su_kt_o_spinte_kt",
            "label": "Piegamenti su kettlebell o Spinte kettlebell",
            "sourceLabel": "Piegamenti su kettlebell o Spinte kettlebell"
          },
          {
            "id": "m_curl_kt",
            "label": "Curl kettlebell",
            "sourceLabel": "Curl kettlebell"
          },
          {
            "id": "m_french_press_kt",
            "label": "French press kettlebell",
            "sourceLabel": "French press kettlebell"
          },
          {
            "id": "m_russian_twist_kt",
            "label": "Russian twist kettlebell",
            "sourceLabel": "Russian twist kettlebell"
          },
          {
            "id": "m_crunch_kt",
            "label": "Crunch kettlebell",
            "sourceLabel": "Crunch kettlebell"
          }
        ]
      },
      {
        "id": "s5",
        "name": "Full Body Elastico",
        "optional": true,
        "exercises": [
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico"
          },
          {
            "id": "m_croci_elastico",
            "label": "Croci elastico",
            "sourceLabel": "Croci elastico"
          },
          {
            "id": "m_pulley_elastico",
            "label": "Pulley elastico",
            "sourceLabel": "Pulley elastico"
          },
          {
            "id": "m_military_press_elastico",
            "label": "Military press elastico",
            "sourceLabel": "Military press elastico"
          },
          {
            "id": "m_curl_seduto_elastico",
            "label": "Curl da seduto elastico",
            "sourceLabel": "Curl da seduto elastico"
          },
          {
            "id": "m_french_largo_elastico",
            "label": "French largo elastico",
            "sourceLabel": "French largo elastico"
          },
          {
            "id": "m_doppio_crunch",
            "label": "Doppio crunch",
            "sourceLabel": "Doppio crunch"
          },
          {
            "id": "m_spider_mountain_climber",
            "label": "Spider mountain climber",
            "sourceLabel": "Spiede mountain climber"
          },
          {
            "id": "m_stacco_da_terra_elastico",
            "label": "Stacco da terra elastico",
            "sourceLabel": "Stacco da terra elastico"
          },
          {
            "id": "m_stacco_rumeno_elastico",
            "label": "Stacco rumeno elastico",
            "sourceLabel": "Stacco rumeno elastico"
          }
        ]
      }
    ]
  },
  "m5": {
    "id": "m5",
    "name": "Mesociclo 5",
    "method": "Doppio Triset Circuito",
    "mode": "blocks",
    "work": 60,
    "rest": 20,
    "rounds": 4,
    "blockSize": 6,
    "blockRest": 0,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "DoppioTriset Circuito Petto - Bicipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer con 2manubri",
            "sourceLabel": "Curl hammer con 2manubri"
          },
          {
            "id": "m_crunch",
            "label": "Crunch",
            "sourceLabel": "Crunch"
          },
          {
            "id": "m_spinte_2_manubri",
            "label": "Spinte 2manubri",
            "sourceLabel": "Spinte 2manubri"
          },
          {
            "id": "m_curl_contro_muro_2_manubri",
            "label": "Curl contro muro 2manubri",
            "sourceLabel": "Curl contro muro 2manubri"
          },
          {
            "id": "m_plank",
            "label": "Plank",
            "sourceLabel": "Plank"
          }
        ]
      },
      {
        "id": "s2",
        "name": "DoppioTriset Circuito Gambe - Spalle",
        "optional": false,
        "exercises": [
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet squat 1manubrio",
            "sourceLabel": "Goblet squat 1manubrio"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri"
          },
          {
            "id": "m_affondi_alternati_2_manubri",
            "label": "Affondi alternati 2manubri",
            "sourceLabel": "Affondi alternati 2manubri"
          },
          {
            "id": "m_alzate_laterali_ad_applauso_2_manubri",
            "label": "Alzate laterali ad applauso 2manubri",
            "sourceLabel": "Alzate laterali ad applauso 2manubri"
          },
          {
            "id": "m_stacco_sumo_2_manubri",
            "label": "Stacco sumo 2manubri",
            "sourceLabel": "Stacco sumo 2manubri"
          },
          {
            "id": "m_volare_prono_2_manubri",
            "label": "Volare prono 2manubri",
            "sourceLabel": "Volare prono 2manubri"
          }
        ]
      },
      {
        "id": "s3",
        "name": "DoppioTriset  Circuito Dorsali - Tricipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri"
          },
          {
            "id": "m_tate_press_2_manubri",
            "label": "Tate press 2manubri",
            "sourceLabel": "Tate press 2manubri"
          },
          {
            "id": "m_side_plank",
            "label": "Side plank",
            "sourceLabel": "Side plank"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y back",
            "sourceLabel": "Wide Y back"
          },
          {
            "id": "m_dip_sedia",
            "label": "Dip sedia",
            "sourceLabel": "Dip sedia"
          },
          {
            "id": "m_hollow_body_position",
            "label": "Hollow body position",
            "sourceLabel": "Hollow body position"
          }
        ]
      },
      {
        "id": "s4",
        "name": "DoppioTriset Circuito Full Body Kettlebell",
        "optional": true,
        "exercises": [
          {
            "id": "m_goblet_thruster_kt",
            "label": "Goblet thruster kt",
            "sourceLabel": "Goblet thruster kt"
          },
          {
            "id": "m_swing_kt",
            "label": "Swing kt",
            "sourceLabel": "Swing kt"
          },
          {
            "id": "m_rematore_kt",
            "label": "Rematore kt",
            "sourceLabel": "Rematore kt"
          },
          {
            "id": "m_piegamenti_sulle_braccia_kt",
            "label": "Piegamenti sulle braccia kt",
            "sourceLabel": "Piegamenti sulle braccia kt"
          },
          {
            "id": "m_curl_kt",
            "label": "Curl kt",
            "sourceLabel": "Curl kt"
          },
          {
            "id": "m_crunch_kt",
            "label": "Crunch kt",
            "sourceLabel": "Crunch kt"
          }
        ]
      },
      {
        "id": "s5",
        "name": "DoppioTriset Circuito Full Body Elastico",
        "optional": true,
        "exercises": [
          {
            "id": "m_front_squat_elastico",
            "label": "Front squat elastico",
            "sourceLabel": "Front squat elastico"
          },
          {
            "id": "m_spinte_in_piedi_o_sdraiato_elastico",
            "label": "Spinte in piedi o sdraiato elastico",
            "sourceLabel": "Spinte in piedi o sdraiato elastico"
          },
          {
            "id": "m_pulley_elastico",
            "label": "Pulley elastico",
            "sourceLabel": "Pulley elastico"
          },
          {
            "id": "m_kick_back_elastico",
            "label": "Kick back elastico",
            "sourceLabel": "Kick back elastico"
          },
          {
            "id": "m_curl_elastico",
            "label": "Curl elastico",
            "sourceLabel": "Curl elastico"
          },
          {
            "id": "m_russian_twist_elastico",
            "label": "Russian twist elastico",
            "sourceLabel": "Russian twist elastico"
          }
        ]
      }
    ]
  },
  "m6": {
    "id": "m6",
    "name": "Mesociclo 6",
    "method": "JumpTriset",
    "mode": "blocks",
    "work": 30,
    "rest": 10,
    "rounds": 4,
    "blockSize": 3,
    "blockRest": 60,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "JumpTriset Petto - Spalle - Tricipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri"
          },
          {
            "id": "m_french_press_90_1_manubrio",
            "label": "French press 90° 1manubrio",
            "sourceLabel": "French press 90° 1manubrio"
          },
          {
            "id": "m_croci_2_manubri",
            "label": "Croci 2manubri",
            "sourceLabel": "Croci 2manubri"
          },
          {
            "id": "m_alzate_laterali_2_manubri",
            "label": "Alzate laterali 2manubri",
            "sourceLabel": "Alzate laterali 2manubri"
          },
          {
            "id": "m_french_press_a_terra_2_manubri",
            "label": "French press a terra 2manubri",
            "sourceLabel": "French press a terra 2manubri"
          },
          {
            "id": "m_piegamenti_sulle_braccia_passo_largo",
            "label": "Piegamenti sulle braccia passo largo",
            "sourceLabel": "Piegamenti sulle braccia passo largo"
          },
          {
            "id": "m_alzata_frontale_2_manubri",
            "label": "Alzata frontale 2manubri",
            "sourceLabel": "Alzata frontale 2manubri"
          },
          {
            "id": "m_kick_back_2_manubri",
            "label": "Kick back 2manubri",
            "sourceLabel": "Kick back 2manubri"
          },
          {
            "id": "m_crunch",
            "label": "Crunch",
            "sourceLabel": "Crunch"
          },
          {
            "id": "m_crunch_bicicletta",
            "label": "Crunch bicicletta",
            "sourceLabel": "Crunch bicicletta"
          },
          {
            "id": "m_plank",
            "label": "Plank",
            "sourceLabel": "Plank"
          }
        ]
      },
      {
        "id": "s2",
        "name": "JumpTriset  Gambe - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet squat 1manubrio",
            "sourceLabel": "Goblet squat 1manubrio"
          },
          {
            "id": "m_affondi_alternati_2_manubri",
            "label": "Affondi alternati 2manubri",
            "sourceLabel": "Affondi alternati 2manubri"
          },
          {
            "id": "m_squat_jump",
            "label": "Squat jump",
            "sourceLabel": "Squat jump"
          },
          {
            "id": "m_stacco_da_terra_2_manubri",
            "label": "Stacco da terra 2manubri",
            "sourceLabel": "Stacco da terra 2manubri"
          },
          {
            "id": "m_stacchi_rumeni_2_manubri",
            "label": "Stacchi rumeni 2manubri",
            "sourceLabel": "Stacchi rumeni 2manubri"
          },
          {
            "id": "m_affondi_laterali_2_manubri",
            "label": "Affondi laterali 2manubri",
            "sourceLabel": "Affondi laterali 2manubri"
          },
          {
            "id": "m_affondo_statico_2_manubri_sx",
            "label": "Affondo statico 2manubri sx",
            "sourceLabel": "Affondo statico 2manubri sx"
          },
          {
            "id": "m_affondo_statico_2_manubri_dx",
            "label": "Affondo statico 2manubri dx",
            "sourceLabel": "Affondo statico 2manubri dx"
          },
          {
            "id": "m_squat_avanti_indietro",
            "label": "Squat avanti-indietro",
            "sourceLabel": "Squat avanti-indietro"
          },
          {
            "id": "m_doppio_crunch",
            "label": "Doppio crunch",
            "sourceLabel": "Doppio crunch"
          },
          {
            "id": "m_side_plank_dx",
            "label": "Side plank dx",
            "sourceLabel": "Side plank dx"
          },
          {
            "id": "m_side_plank_sx",
            "label": "Side plank sx",
            "sourceLabel": "Side plank sx"
          }
        ]
      },
      {
        "id": "s3",
        "name": "JumpTriset  Dorso - Spalle - Bicipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri"
          },
          {
            "id": "m_volare_prono_2_manubri",
            "label": "Volare prono 2manubri",
            "sourceLabel": "Volare prono 2manubri"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer 2manubri",
            "sourceLabel": "Curl hammer 2manubri"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y back 2manubri",
            "sourceLabel": "Wide Y back 2manubri"
          },
          {
            "id": "m_tirate_al_mento_2_manubri",
            "label": "Tirate al mento 2manubri",
            "sourceLabel": "Tirate al mento 2manubri"
          },
          {
            "id": "m_curl_2_manubri_in_piedi",
            "label": "Curl 2manubri in piedi",
            "sourceLabel": "Curl 2manubri in piedi"
          },
          {
            "id": "m_renegade_row_1_manubrio_o_2_manubri",
            "label": "Renegade row 1manubrio o 2 manubri",
            "sourceLabel": "Renegade row 1manubrio o 2 manubri"
          },
          {
            "id": "m_rematore_in_ginocchio_2_manubri",
            "label": "Rematore in ginocchio 2manubri",
            "sourceLabel": "Rematore in ginocchio 2manubri"
          },
          {
            "id": "m_curl_presa_inversa_2_manubri",
            "label": "Curl inverso 2manubri",
            "sourceLabel": "Curl inverso 2manubri"
          },
          {
            "id": "m_crunch_8_1_manubrio",
            "label": "Crunch 8 1manubrio",
            "sourceLabel": "Crunch 8 1manubrio"
          },
          {
            "id": "m_crunch_con_1_manubrio",
            "label": "Crunch con 1manubrio",
            "sourceLabel": "Crunch con 1manubrio"
          },
          {
            "id": "m_hollow_body_position",
            "label": "Hollow body position",
            "sourceLabel": "Hollow body position"
          }
        ]
      },
      {
        "id": "s4",
        "name": "JumpTriset 30” Full Body Kettlebell",
        "optional": true,
        "exercises": [
          {
            "id": "m_front_squat_kt",
            "label": "Front squat kt",
            "sourceLabel": "Front squat kt"
          },
          {
            "id": "m_piegamenti_sulle_braccia_kt",
            "label": "Piegamenti braccia kt",
            "sourceLabel": "Piegamenti braccia kt"
          },
          {
            "id": "m_pull_over_kt",
            "label": "Pull over kt",
            "sourceLabel": "Pull over kt"
          },
          {
            "id": "m_american_swing_kt",
            "label": "American swing kt",
            "sourceLabel": "Americam swing kt"
          },
          {
            "id": "m_affondi_kt",
            "label": "Affondi kt",
            "sourceLabel": "Affondi kt"
          },
          {
            "id": "m_military_press_kt",
            "label": "Military press kt",
            "sourceLabel": "Military press kt"
          },
          {
            "id": "m_rematore_kt",
            "label": "Rematore kt",
            "sourceLabel": "Rematore kt"
          },
          {
            "id": "m_french_press_kt",
            "label": "French press kt",
            "sourceLabel": "French press kt"
          },
          {
            "id": "m_curl_kt",
            "label": "Curl kt",
            "sourceLabel": "Curl kt"
          },
          {
            "id": "m_russian_sit_up_kt",
            "label": "Russian sit-up kt",
            "sourceLabel": "Russian sit-up kt"
          },
          {
            "id": "m_crunch_kt",
            "label": "Crunch kt",
            "sourceLabel": "Crunch kt"
          },
          {
            "id": "m_spider_mountain_climber",
            "label": "Spider mountain climber",
            "sourceLabel": "Spider mountain climber"
          }
        ]
      },
      {
        "id": "s5",
        "name": "JumpTriset Full Body Elastico",
        "optional": true,
        "exercises": [
          {
            "id": "m_stacco_da_terra_elastico",
            "label": "Stacco da terra elastico",
            "sourceLabel": "Stacco da terra elastico"
          },
          {
            "id": "m_piegamenti_sulle_braccia_elastico",
            "label": "Piegamenti braccia elastico",
            "sourceLabel": "Piegamenti braccia elastico"
          },
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico"
          },
          {
            "id": "m_affondi_elastico",
            "label": "Affondi elastico",
            "sourceLabel": "Affondi elastico"
          },
          {
            "id": "m_curl_prono_military_elastico",
            "label": "Curl prono + Military elastico",
            "sourceLabel": "Curl prono + Military elastico"
          },
          {
            "id": "m_alzata_frontale",
            "label": "Alzata frontale",
            "sourceLabel": "Alzata frontale"
          },
          {
            "id": "m_pulley_elastico",
            "label": "Pulley elastico",
            "sourceLabel": "Pulley elastico"
          },
          {
            "id": "m_curl_seduto_elastico",
            "label": "Curl seduto elastico",
            "sourceLabel": "Curl seduto elastico"
          },
          {
            "id": "m_french_largo_elastico",
            "label": "French largo elastico",
            "sourceLabel": "French largo elastico"
          },
          {
            "id": "m_crunch_libretto",
            "label": "Crunch libretto",
            "sourceLabel": "Crunch libretto"
          },
          {
            "id": "m_plank_inverso",
            "label": "Plank inverso",
            "sourceLabel": "Plank inverso"
          },
          {
            "id": "m_sit_up",
            "label": "Sit-up",
            "sourceLabel": "Sit-up"
          }
        ]
      }
    ]
  },
  "m7": {
    "id": "m7",
    "name": "Mesociclo 7",
    "method": "EMOM SuperSet",
    "mode": "emom",
    "work": 60,
    "rest": 0,
    "rounds": 10,
    "blockSize": 2,
    "blockRest": 60,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "SuperSet Emom Petto - Bicipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia",
            "reps": "8"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer 2manubri",
            "sourceLabel": "Curl hammer 2manubri",
            "reps": "8"
          },
          {
            "id": "m_croci_2_manubri",
            "label": "Croci 2manubri",
            "sourceLabel": "Croci 2manubri",
            "reps": "8"
          },
          {
            "id": "m_curl_contro_muro_2_manubri",
            "label": "Curl con 2manubri contro muro",
            "sourceLabel": "Curl con 2manubri contro muro",
            "reps": "8"
          },
          {
            "id": "m_crunch_libretto",
            "label": "Crunch libretto",
            "sourceLabel": "Crunch libretto",
            "reps": "8"
          },
          {
            "id": "m_sit_up_crunch",
            "label": "Sit-up/Crunch",
            "sourceLabel": "Sit-up/Crunch",
            "reps": "8"
          }
        ]
      },
      {
        "id": "s2",
        "name": "SuperSet Emom Gambe - Spalle - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_front_squat_2_manubri",
            "label": "Front squat 2manubri",
            "sourceLabel": "Front squat 2manubri",
            "reps": "8"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri",
            "reps": "8"
          },
          {
            "id": "m_affondi_jump",
            "label": "Affondi jump",
            "sourceLabel": "Affondi jump",
            "reps": "8 per lato"
          },
          {
            "id": "m_alzate_laterali_2_manubri",
            "label": "Alzate laterali 2manubri",
            "sourceLabel": "Alzate laterali 2manubri",
            "reps": "8"
          },
          {
            "id": "m_crunch_side_plank_dx",
            "label": "Crunch Side plank dx",
            "sourceLabel": "Crunch Side plank dx",
            "reps": "8"
          },
          {
            "id": "m_crunch_side_plank_sx",
            "label": "Crunch Side plank sx",
            "sourceLabel": "Crunch Side plank sx",
            "reps": "8"
          }
        ]
      },
      {
        "id": "s3",
        "name": "SuperSet Emom Dorso - Tricipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_rematore_2_manubri",
            "label": "Rematore 2manubri",
            "sourceLabel": "Rematore 2manubri",
            "reps": "8"
          },
          {
            "id": "m_tricipiti_a_terra",
            "label": "Tricipiti a terra",
            "sourceLabel": "Tricipiti a terra",
            "reps": "8"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y back 2manubri",
            "sourceLabel": "Wide Y back 2manubri",
            "reps": "8"
          },
          {
            "id": "m_french_press_dietro_nuca",
            "label": "French press dietro nuca",
            "sourceLabel": "French press dietro nuca",
            "reps": "8"
          },
          {
            "id": "m_spider_mountain_climber",
            "label": "Spider mountain climber",
            "sourceLabel": "Spider mountain climber",
            "reps": "8 per lato"
          },
          {
            "id": "m_cross_mountain_climber",
            "label": "Cross mountain climber",
            "sourceLabel": "Cross mountain climber",
            "reps": "8 per lato"
          }
        ]
      },
      {
        "id": "s4",
        "name": "SuperSet Emom Full Body Kettlebell",
        "optional": true,
        "exercises": [
          {
            "id": "m_stacco_da_terra_kt",
            "label": "Stacco kt",
            "sourceLabel": "Stacco kt",
            "reps": "8"
          },
          {
            "id": "m_squat_jump",
            "label": "Squat jump",
            "sourceLabel": "Squat jump",
            "reps": "8"
          },
          {
            "id": "m_piegamenti_sulle_braccia_kt",
            "label": "Piegamenti sulle braccia su kt",
            "sourceLabel": "Piegamenti sulle braccia su kt",
            "reps": "8"
          },
          {
            "id": "m_rematore_kt",
            "label": "Rematore kt",
            "sourceLabel": "Rematore kt",
            "reps": "8"
          },
          {
            "id": "m_curl_military_press_kt",
            "label": "Curl + Military press kt",
            "sourceLabel": "Curl + Military press kt",
            "reps": "8"
          },
          {
            "id": "m_russian_twist_kt",
            "label": "Russian twist kt",
            "sourceLabel": "Russian twist kt",
            "reps": "8 per lato"
          }
        ]
      },
      {
        "id": "s5",
        "name": "SuperSet Emom Full Body Elastico",
        "optional": true,
        "exercises": [
          {
            "id": "m_front_squat_elastico",
            "label": "Front squat elastico",
            "sourceLabel": "Front squat elastico",
            "reps": "8"
          },
          {
            "id": "m_stacco_rumeno_elastico",
            "label": "Stacco rumeno elastico",
            "sourceLabel": "Stacco rumeno elastico",
            "reps": "8"
          },
          {
            "id": "m_spinte_orizzontali_elastico",
            "label": "Spinte orizzontali elastico",
            "sourceLabel": "Spinte orizzontali elastico",
            "reps": "8"
          },
          {
            "id": "m_curl_elastico",
            "label": "Curl con elastico",
            "sourceLabel": "Curl con elastico",
            "reps": "8"
          },
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico",
            "reps": "8"
          },
          {
            "id": "m_french_press_in_piedi_elastico",
            "label": "French press in piedi elastico",
            "sourceLabel": "French press in piedi elastico",
            "reps": "8"
          }
        ]
      }
    ]
  },
  "m8": {
    "id": "m8",
    "name": "Mesociclo 8",
    "method": "Serie per esercizio",
    "mode": "standard",
    "work": 40,
    "rest": 20,
    "rounds": 5,
    "blockSize": 1,
    "blockRest": 60,
    "weeks": 4,
    "sessions": [
      {
        "id": "s1",
        "name": "Petto - Bicipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_spinte_2_manubri_a_terra",
            "label": "Spinte 2manubri a terra",
            "sourceLabel": "Spinte 2manubri a terra"
          },
          {
            "id": "m_croci_2_manubri_a_terra",
            "label": "Croci 2 manubri a terra",
            "sourceLabel": "Croci 2 manubri a terra"
          },
          {
            "id": "m_piegamenti_sulle_braccia",
            "label": "Piegamenti sulle braccia",
            "sourceLabel": "Piegamenti sulle braccia"
          },
          {
            "id": "m_curl_hammer_2_manubri",
            "label": "Curl hammer 2manubri in piedi",
            "sourceLabel": "Curl hammer 2manubri in piedi"
          },
          {
            "id": "m_curl_contro_muro_2_manubri",
            "label": "Curl con 2manubri contro muro",
            "sourceLabel": "Curl con 2manubri contro muro"
          },
          {
            "id": "m_doppio_crunch",
            "label": "Doppio Crunch",
            "sourceLabel": "Doppio Crunch"
          }
        ]
      },
      {
        "id": "s2",
        "name": "Gambe - Spalle",
        "optional": false,
        "exercises": [
          {
            "id": "m_goblet_squat_1_manubrio",
            "label": "Goblet squat 1manubrio",
            "sourceLabel": "Goblet squat 1manubrio"
          },
          {
            "id": "m_affondi_alternati_2_manubri",
            "label": "Affondi alternati 2manubri",
            "sourceLabel": "Affondi alternati 2manubri"
          },
          {
            "id": "m_affondi_laterali_2_manubri",
            "label": "Affondi laterali 2manubri",
            "sourceLabel": "Affondi laterali 2manubri"
          },
          {
            "id": "m_military_press_2_manubri",
            "label": "Military press 2manubri",
            "sourceLabel": "Military press 2manubri"
          },
          {
            "id": "m_alzate_laterali_2_manubri",
            "label": "Alzate laterali 2manubri",
            "sourceLabel": "Alzate laterali 2manubri"
          },
          {
            "id": "m_volare_prono_2_manubri",
            "label": "Volare prono 2manubri",
            "sourceLabel": "Volare prono 2manubri"
          }
        ]
      },
      {
        "id": "s3",
        "name": "Dorso - Tricipiti - Addome",
        "optional": false,
        "exercises": [
          {
            "id": "m_rematore_presa_neutra",
            "label": "Rematore presa neutra",
            "sourceLabel": "Rematore presa neutra"
          },
          {
            "id": "m_wide_y_back_2_manubri",
            "label": "Wide Y back 2manubri",
            "sourceLabel": "Wide Y back 2manubri"
          },
          {
            "id": "m_pull_over_2_manubri",
            "label": "Pull over 2manubri",
            "sourceLabel": "Pull over 2manubri"
          },
          {
            "id": "m_kick_back_2_manubri",
            "label": "Kick back 2manubri",
            "sourceLabel": "Kick back 2manubri"
          },
          {
            "id": "m_french_press_2_manubri",
            "label": "French press 2manubri",
            "sourceLabel": "French press 2manubri"
          },
          {
            "id": "m_crunch_bicicletta",
            "label": "Crunch bicicletta",
            "sourceLabel": "Crunch bicicletta"
          }
        ]
      },
      {
        "id": "s4",
        "name": "Kettlebell Full Body",
        "optional": true,
        "exercises": [
          {
            "id": "m_front_squat_kt",
            "label": "Front squat kt",
            "sourceLabel": "Front squat kt"
          },
          {
            "id": "m_swing_kt",
            "label": "Swing kt",
            "sourceLabel": "Swing kt"
          },
          {
            "id": "m_squat_jump_kt",
            "label": "Squat jump kt",
            "sourceLabel": "Squat jump kt"
          },
          {
            "id": "m_mountain_climber_kt",
            "label": "Mountain climber kt",
            "sourceLabel": "Mountain climber kt"
          },
          {
            "id": "m_piegamenti_sulle_braccia_kt",
            "label": "Piegamenti sulle braccia kt",
            "sourceLabel": "Piegamenti sulle braccia kt"
          },
          {
            "id": "m_military_press_kt_inverso",
            "label": "Military press kt inverso",
            "sourceLabel": "Military press kt inverso"
          }
        ]
      },
      {
        "id": "s5",
        "name": "Elastici Full Body",
        "optional": true,
        "exercises": [
          {
            "id": "m_stacco_da_terra_elastico",
            "label": "Stacco da terra elastico",
            "sourceLabel": "Stacco da terra elastico"
          },
          {
            "id": "m_stacco_rumeno_elastico",
            "label": "Stacchi rumeni elastico",
            "sourceLabel": "Stacchi rumeni elastico"
          },
          {
            "id": "m_russian_twist_elastico",
            "label": "Russian twist elastico",
            "sourceLabel": "Russian twist elastico"
          },
          {
            "id": "m_rematore_elastico",
            "label": "Rematore elastico",
            "sourceLabel": "Rematore elastico"
          },
          {
            "id": "m_curl_elastico",
            "label": "Curl con elastico",
            "sourceLabel": "Curl con elastico"
          },
          {
            "id": "m_french_press_dietro_nuca_elastico",
            "label": "French press dietro nuca elastico",
            "sourceLabel": "French press dietro nuca elastico"
          }
        ]
      }
    ]
  }
};
function buildProgram(mesoId, sessionId, prep = 10, overrides = []) {
  const m = mesocycles[mesoId];
  const session = m && m.sessions.find(s => s.id === sessionId);
  if(!session) throw new Error('Scheda non valida');
  const entries = session.exercises.map((e,i) => ({...e, id: overrides[i] || e.id}));
  const out = [];
  const add = (t,dur,ex,serie,extra={}) => { if(dur>0) out.push({t,dur,ex,serie,...extra}); };
  add('prep',prep,1,1);
  if(m.mode === 'emom') {
    for(let start=0;start<entries.length;start+=2) {
      for(let r=1;r<=m.rounds;r++) add('emom',60,start+1,r,{pair:[start+1,start+2],block:start/2+1});
      if(start+2<entries.length) add('blockRest',m.blockRest,start+1,m.rounds,{nextEx:start+3});
    }
  } else if(m.mode === 'standard') {
    for(let i=0;i<entries.length;i++) {
      for(let r=1;r<=m.rounds;r++) {
        add('work',m.work,i+1,r);
        if(r<m.rounds) add('rest',m.rest,i+1,r,{nextEx:i+1});
      }
      if(i+1<entries.length) add('blockRest',m.blockRest,i+1,m.rounds,{nextEx:i+2});
    }
  } else {
    for(let start=0;start<entries.length;start+=m.blockSize) {
      const end=Math.min(start+m.blockSize,entries.length);
      for(let r=1;r<=m.rounds;r++) {
        for(let i=start;i<end;i++) {
          add('work',m.work,i+1,r,{block:Math.floor(start/m.blockSize)+1});
          if(i+1<end || r<m.rounds) add('rest',m.rest,i+1,r,{nextEx:i+1<end?i+2:start+1});
        }
      }
      // La pausa del blocco sostituisce il recupero breve dopo l'ultima serie.
      if(end<entries.length) add('blockRest',m.blockRest,end,m.rounds,{nextEx:end+1});
    }
  }
  // Nessun recupero finale aggiunto dopo l'ultimo lavoro della seduta.
  return out;
}
const api={exercises,mesocycles,buildProgram};
if(typeof module!=='undefined' && module.exports) module.exports=api;
else root.WorkoutLibrary=api;
})(typeof globalThis!=='undefined'?globalThis:this);

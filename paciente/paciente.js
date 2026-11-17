/* ═══════════════════════════════════════════════
   Versión 2026.11.17-18:45:01
   PACIENTE — configuración del programa
   (« programa » = nombre del fichero que abre la Casa : se deja vacío,
   por defecto es paciente.html)
   ═══════════════════════════════════════════════ */
var SF_CONFIG = {
  id: 'paciente',
  version: '2026.11.17-18:45:01',
  familia: 'trabajar',
  /* los títulos que no cuentan al comparar dos nombres de médico (P-H, 17/11/2026) */
  titulos_medico: ['dr','dra','doctor','doctora','adjunto','adjunta','fea','facultativo','facultativa','especialista',
                   'jefe','jefa','servicio','seccion','de','del','la','y','medico','medica','mir','residente','responsable'],
  icono: '🧑‍⚕️',
  nombre: { es:'Paciente', fr:'Patient', ca:'Pacient', en:'Patient' },
  descripcion: {
    es:'La ficha del paciente, en conversación',
    fr:'La fiche du patient, en conversation',
    ca:'La fitxa del pacient, en conversa',
    en:'The patient record, as a conversation'
  }
};

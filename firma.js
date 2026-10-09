// Şirket bilgileri — vergi levhasından ve CEO'dan gelince BURAYA harfi harfine yazılır.
// Boş bırakılan alan sayfada kesikli yer tutucu olarak görünür. Tahmini bilgi yazmayın.
// unvan ve adres EN sürümde de aynen (Türkçe) gösterilir.
// kvkk_* / gizlilik_* alanları HTML kabul eder (<p>, <ul> ...).
window.FIRMA = {
  ceo: '',          // Hakkımızda > Kurucular'da CEO'nun adı
  unvan: '',        // Tam ticaret unvanı (levhadaki gibi)
  adres: '',        // İş yeri adresi (levhadaki gibi)
  vergi_dairesi: '',
  vergi_no: '',
  mersis_no: '',
  telefon: '',      // Örn. biçim: +90 ... (Meta portföyündekiyle aynı)
  kvkk_tr: '',
  kvkk_en: '',
  gizlilik_tr: '',
  gizlilik_en: '',
};

const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const panelContent = document.getElementById('panelContent');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-closed');
});

// Menüdeki SMM panel seçenekleri için içerik değiştirme:
document.querySelectorAll('.menu-item.smm').forEach(item => {
  item.addEventListener('click', () => {
    const panel = item.getAttribute('data-panel');
    if (panel === 'instagram') {
      panelContent.innerHTML = `
        <h2>Instagram İşlemleri</h2>
        <button class="smm-btn">Takipçi</button>
        <button class="smm-btn">Beğeni</button>
      `;
      panelContent.style.backgroundColor = 'black';
      panelContent.style.color = '#0f0';
      panelContent.style.textAlign = 'center';
      panelContent.querySelectorAll('.smm-btn').forEach(btn => {
        btn.style.margin = '10px';
        btn.style.padding = '15px 30px';
        btn.style.fontSize = '1.5rem';
        btn.style.backgroundColor = '#0f0';
        btn.style.color = 'black';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.cursor = 'pointer';
      });
    } else if (panel === 'tiktok') {
      panelContent.innerHTML = `
        <h2>TikTok İşlemleri</h2>
        <p>Henüz eklenmedi.</p>
      `;
    } else if (panel === 'youtube') {
      panelContent.innerHTML = `
        <h2>YouTube İşlemleri</h2>
        <p>Henüz eklenmedi.</p>
      `;
    }
  });
});

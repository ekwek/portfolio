const projects = [
  { title: 'Managing check-in issues', meta: '01 / Identity / 2024', scope: 'Strategy, identity, art direction', client: 'Glass House', description: 'A flexible identity for a new kind of culture platform — transparent in structure, expressive in motion.', position: '0 0' },
  { title: 'Building trust on booking status', meta: '02 / Product design / 2026', scope: 'Research synthesis, UX strategy, product design', client: 'Agoda', description: 'Making booking confirmation feel more trustworthy through clearer proof, verification and human reassurance.', position: '100% 0' },
  { title: 'Alinea', meta: '03 / Digital / 2023', scope: 'Digital product, art direction', client: 'Alinea Spaces', description: 'A digital home for an architecture practice that brings their careful, human approach to the screen.', position: '0 100%' },
  { title: 'Forma', meta: '04 / Campaign / 2023', scope: 'Campaign concept, image direction', client: 'Forma Objects', description: 'A visual launch campaign where color and texture make everyday objects feel wonderfully unfamiliar.', position: '100% 100%' }
];
const dialog = document.querySelector('.project-dialog');
const art = document.querySelector('.modal-art');
document.querySelectorAll('button.project[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.project];
  document.querySelector('#modal-title').textContent = p.title;
  document.querySelector('#modal-meta').textContent = p.meta;
  document.querySelector('#modal-description').textContent = p.description;
  document.querySelector('#modal-scope').textContent = p.scope;
  document.querySelector('#modal-client').textContent = p.client;
  art.style.backgroundPosition = p.position;
  dialog.showModal();
}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

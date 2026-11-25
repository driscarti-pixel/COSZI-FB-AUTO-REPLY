const $ = id => document.getElementById(id);
const log = message => { $('log').textContent = new Date().toLocaleTimeString() + ' — ' + message; };
let active = false;
$('masterToggle').addEventListener('click', () => {
  active = !active;
  $('masterToggle').classList.toggle('active', active);
  $('masterToggle').textContent = active ? 'STOP DASHBOARD PREVIEW' : 'START AUTOMATION';
  $('masterToggle').setAttribute('aria-pressed', String(active));
  $('replyState').textContent = active ? 'PREVIEW ON' : 'OFF';
  log(active ? 'Preview enabled. No Facebook actions are being performed.' : 'Preview stopped.');
});
$('delay').addEventListener('input', e => {
  $('delayValue').textContent = e.target.value;
  $('delayLabel').textContent = e.target.value;
});
$('reactions').addEventListener('click', e => {
  const btn = e.target.closest('[data-reaction]');
  if (!btn) return;
  document.querySelectorAll('.reaction').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  $('selectedReaction').textContent = btn.dataset.reaction;
  log('Preferred reaction set to ' + btn.dataset.reaction + '.');
});
$('typing').addEventListener('change', e => log(e.target.checked ? 'Typing monitor preference enabled.' : 'Typing monitor preference disabled.'));
$('replyText').addEventListener('change', () => log('Default reply message updated locally.'));

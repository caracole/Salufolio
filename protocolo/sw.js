/* ══════════════════════════════════════════════════════════════════════
   SW.JS — le service-worker du Protocolo móvil
   (P-H + Claude, 08/09/2026)

   PROBLÈME QUE MATTIEU A REMONTÉ : la première fois tout va bien — on se
   connecte, on installe l'icône. Les fois suivantes, sans internet, rien
   ne marche.

   La cause : le Protocolo n'avait AUCUN service-worker. Le navigateur
   proposait de l'installer (le manifeste est dans le HTML), mais sans
   cache il redemandait tout au réseau à chaque ouverture.

   Ce fichier garde le Protocolo au premier chargement et le sert ensuite
   depuis le cache. Après ça, l'icône marche dans le train, à la campagne,
   partout — ce qui est le propre d'un carnet de soins.

   POUR METTRE À JOUR : changez le numéro de VERSION ci-dessous. Les
   anciens caches sont effacés et le Protocolo se recharge.
   ══════════════════════════════════════════════════════════════════════ */

const VERSION = 'protocolo-2026.9.8.81';
const GUARDAR = [
  './',
  './index.html',
  './doc.pdf'
];

/* ── à l'installation : on met le Protocolo en cache ── */
self.addEventListener('install', function(ev){
  ev.waitUntil(
    caches.open(VERSION)
      .then(function(c){ return c.addAll(GUARDAR); })
      /* si le pdf manque, on garde au moins le programme */
      .catch(function(){ return caches.open(VERSION).then(function(c){
        return c.addAll(['./index.html']); }); })
      .then(function(){ return self.skipWaiting(); })
  );
});

/* ── à l'activation : on efface les vieux caches ── */
self.addEventListener('activate', function(ev){
  ev.waitUntil(
    caches.keys().then(function(nombres){
      return Promise.all(nombres.filter(function(n){ return n !== VERSION; })
                                .map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* ── à chaque demande : le réseau d'abord, le cache si le réseau manque ──
   Ainsi une version fraîche arrive quand il y a du réseau, et le carnet
   s'ouvre quand même quand il n'y en a pas. */
self.addEventListener('fetch', function(ev){
  if(ev.request.method !== 'GET') return;
  ev.respondWith(
    fetch(ev.request)
      .then(function(r){
        /* on garde la version fraîche pour la prochaine fois */
        if(r && r.status === 200 && r.type === 'basic'){
          var copia = r.clone();
          caches.open(VERSION).then(function(c){ c.put(ev.request, copia); });
        }
        return r;
      })
      .catch(function(){
        /* pas de réseau : on sert ce qu'on a */
        return caches.match(ev.request).then(function(r){
          if(r) return r;
          /* une page qu'on n'a pas : on rend le Protocolo lui-même */
          if(ev.request.mode === 'navigate') return caches.match('./index.html');
        });
      })
  );
});

# MB Shoes 237 — Prototype frontend-first

Prototype de présentation préparé pour MB Shoes 237. Il reprend l'esprit visuel de la maquette fournie : palette crème/terre cuite, typographie éditoriale, grands visuels, collections et appels à l'action.

## Stack
- Next.js 15 / App Router
- React 19
- TypeScript strict
- Tailwind CSS 4
- lucide-react
- Aucun backend couplé

## Architecture
`src/domain` contient les modèles métier.
`src/application` contient les ports et cas d'usage.
`src/infrastructure/mocks` contient uniquement les données de démonstration.
`src/components` contient les adaptateurs UI / composants React.

Le backend réel pourra être développé séparément (API REST ou autre contrat), puis branché via les ports sans refaire l'interface.

## Fonctionnalités de démonstration
- Accueil premium / vitrine
- Catalogue filtrable
- Fiche produit
- Sélection panier légère
- Parcours « création sur mesure » en 3 étapes
- Upload d'une image d'inspiration avec aperçu local
- Choix genre, pointure, matière, couleur, semelle et détails
- Récapitulatif puis redirection WhatsApp
- Section atelier / portfolio / rendez-vous
- Responsive mobile-first

## Démarrage
```bash
npm install
npm run dev
```
Puis ouvrir `http://localhost:3000`.

## Build
```bash
npm run typecheck
npm run build
```

## À brancher plus tard côté back-office
Les options de personnalisation, produits, prix, photos, réalisations, rendez-vous, zones de livraison, disponibilité, messages WhatsApp et commandes sont volontairement des mocks dans cette version. Elles devront être pilotées par le backend/back-office.
# mb-shoes-237

# Architecture — Frontend

## Principes
Le prototype suit une séparation inspirée Clean Architecture / Hexagonal Architecture :

- **Domain** : types et règles métier sans dépendance à Next.js.
- **Application** : cas d'usage et ports d'accès aux données.
- **Infrastructure** : implémentation mock actuelle ; future implémentation API ici.
- **UI / adapters** : React/Next.js, formulaires, navigation et présentation.

## Contrat futur
Le frontend devra consommer une API externe via un adapter `CatalogApiAdapter`, `OrderApiAdapter`, `AppointmentApiAdapter`, etc. Le composant UI ne devra pas connaître Prisma, PostgreSQL ou la logique du backend.

## Mobile
Le frontend est pensé comme une PWA / base web responsive pouvant être emballée dans Capacitor ou une solution équivalente. Les règles de domaine et les composants réutilisables ne dépendent pas du navigateur au-delà des interactions UI nécessaires.

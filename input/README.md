# Pré CQI 2023 - Design Web (10 points)

 *(for english, check README_EN.md in this folder)* 

**NOTE**: Il y a des similarités avec le défi mobile, mais ce n'est pas 100% identique, portez attention.
## Mise en situation

Le Potato Cloud Fest veut confier à une équipe le mandat de rebâtir leur site web *from scratch*! C'est une ressource importante pour tous les gens qui veulent se renseigner sur le festival. On veut un beau design qui va convaincre ceux qui considèrent y aller de s'acheter un billet, et donner hâte à ceux qui ont déjà le leur.

Vous devez construire un site pour leur montrer vos talents en design web.

## Logiciel Requis

Il n'y a pas de logiciel obligatoire, vous êtes libres d'utiliser les technologies que vous désirez (par exemple Angular, React, Vue, ...).

On vous demande seulement de faire la partie *frontend*, vous pouvez donc *hardcoder* vos données directement dans votre code.

## Remise

1. Vous devrez faire une démo de votre site web aux juges (donc leur montrer chaque partie détaillée plus bas)
2. Vous devez remettre des screenshots de votre design
3. Vous devez remettre une copie de votre code source

## Instructions
### **Page principale** (2 points)

La page principale doit contenir:

- Les dates du festival (26-27 janvier 2023)
- Lieu du festival (Montréal)
- Le logo du festival (votre choix)
- Un menu avec ces différentes options*:
    - Billeterie
    - Programmation
    - Infos pratiques
    - FAQ
    - Nous joindre
- Un décompte jusqu'au début de l'événement (26 janvier 2023)

### **Page des tarifs/billeterie** (2 points)

Cette page a pour but de montrer aux utilisateurs les différentes options de billets pour l'événement et d'ajouter un billet à un panier d'achat. On ne vous demande pas d'implémenter la section pour compléter l'achat.

Les types de billets disponibles sont dans `tickets.json`.

La page des tarifs doit contenir:
- La liste des différents billets et bundles qui peuvent être achetés (`tickets.json`). Pour chaque option:
    - Nom
    - Prix
    - Description
    - Bouton pour ajouter au panier
- Panier d'achat qui contient les éléments ajoutés

### **Page de la programmation** (3 points)

Cette page permet aux visiteurs du site de consulter l'horaire complet.

Les événements de la programmation sont donnés dans `schedule.csv`. Vous choisissez comment *parse* les données (si ça vous tente de recopier à la main vous pouvez aussi), et pas besoin de traduire les lieu et types d'événements.
    
(*NOTE: La première ligne du CSV représente le nom des colonnes, le reste ce sont les données.*)

La page de la programmation doit contenir:
- Une/des grille(s) qui montrent l'horaire du festival (`schedule.csv`). Vous choisissez comment organiser les données (par date, lieu, type, etc.)
- Chaque événement dans `schedule.csv`, intégré à la grille
    - Nom
    - Date et heure
    - Lieu
    - Type
- Lorsqu'on clique sur un événement dans la grille, une façon de visualiser (section qui *expand*, dialog, popup, popover, etc)
    - Nom, date, heure, lieu, type
    - Description brève (vous pouvez l'inventer ou mettre un placeholder, on ne vous notera pas là dessus)

### **Page FAQ** (2 points)
La page FAQ, comme son nom le dit, sert à répondre aux questions des utilisateurs. Le design doit permettre de rapidement trouver une question et accéder à sa réponse.

La page FAQ doit contenir:
- Minimum 10 questions (total) séparées en 3 sections
    - Par exemple, les sections:
        - Objets permis/interdits
        - Accès au site
        - Vente et livraison des billets
- Un lien vers la page Nous joindre

Vous pouvez inventer les questions, réponses et sections. Vous ne serez pas notés sur le contenu.

### **Page Nous joindre** (1 point)

La page Nous joindre doit montrer aux visiteurs du site les différentes option pour contacters le comité organisateur du festival.

La page Nous joindre doit contenir:
- Coordonnées des organisateurs
    - Téléphone
    - Adresse postale
    - Adresse courriel
- Section pour envoyer un message
    - Input pour nom
    - Input pour courriel
    - Input pour téléphone
    - Input pour message
    - Bouton envoyer (pas fonctionnel)
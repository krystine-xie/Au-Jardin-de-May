import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    // nav bar
    home_page: "HOME",
    about_page: "ABOUT",
    store_page: "STORE",
    contact_us: "CONTACT US",
    admin_user: "ADMIN",
    user_list: "User List",
    product_list: "Product List",
    order_list: "Order List",
    log_out: "LOG OUT",
    profile: "PROFILE",
    my_cart: "MY CART",
    shop_now: "SHOP NOW",
    login: "LOGIN",

    // about page
    first_about_p:
      "Au Jardin de May is an e-commerce website built to showcase my mother's (May) flowers and succulent arrangements. All of the 'products' shown on this website were handmade by her and subsequently gifted to friends and family.",
    second_about_p:
      "The website's front-end is build with REACTJS, SEMANTIC UI and VANILLA CSS with responsiveness in mind, and the back-end is built with PYTHON through the DJANGO FRAMEWORK. The RESTful API was built with DJANGO REST FRAMEWORK. The front-end state is managed through the use of REDUX + REDUX DEVTOOLS for debugging purposes.",
    third_about_p: "Au Jardin De May uses POSTGRESQL for its database.",
    fourth_about_p:
      "Additionally, this website integrates the PAYPAL API to manage the payments (using Sandbox test accounts). Localisation is managed through React-Intl.",

    //home page
    known_for: "WHAT WE'RE KNOWN FOR",
    contemporary: "CONTEMPORARY",
    handpicked: "HANDPICKED & FRESH",
    long_lasting: "LONG LASTING",
    testimonials: "CUSTOMER TESTIMONIALS",
    newsletter: "JOIN OUR NEWSLETTER FOR UPDATES & DEALS",
    latest_products: "Latest Products",
    shop_description:
      "A flower shop focused on delivering contemporary & customisable floral pieces for all occasions!",
    shop_subheader1: "FLOWER & SUCCULENT",
    shop_subheader2: "ARRANGEMENTS",

    // contact page
    lets_chat: "👋🏽 Hi there! Let's chat. 🌺",
    your_queries: "YOUR QUERIES",
    location: "Mountain View, California",

    // buttons
    submit_button: "SUBMIT",
    reset_button: "RESET",
    update_details: "UPDATE",
    create_product: "CREATE PRODUCT",

    // about page
    about_title: "ABOUT AU JARDIN DE MAY",
    fullstack: "FULL STACK DEVELOPER",

    // page de profil
    user_profile: "USER PROFILE",
    past_orders: "MY PAST ORDERS",

    // login page
    welcome: "Welcome!",
    no_account: "Don't have an account?",
    have_account: "Have an account?",
    sign_up: "SIGN UP",
    create_account: "CREATE ACCOUNT",
    return_to_store: "RETURN TO STORE",

    // product page
    shop_all: "Shop All Products",
    filter_by: "FILTER BY",
    colour: "COLOUR",
    category: "CATEGORY",
    size: "SIZE",

    // product detail page
    add_to_cart: "ADD TO CART",
    quantity: "Quantity",

    // shopping cart
    shopping_cart: "SHOPPING CART",
    proceed_to_checkout: "Proceed to Checkout",
    subtotal: "SUBTOTAL",
    items: "ITEMS",

    // miscellaneous
    loading: "Loading",
    price_display: "{n, number, ::currency/USD}",
    warning: "WARNING",
    error: "ERROR",
    success: "SUCCESS",
    go_back: "Go Back",
    cart_empty: "Your cart is empty",

    // product list
    price: "PRICE",
    name_of_product: "PRODUCT NAME",

    // order list
    amount_paid: "AMOUNT PAID",
    paid: "PAID",
    delivered: "DELIVERED",
    details: "DETAILS",

    // edit product
    edit_product: "Edit Product",
    edit_product_name: "Edit Product Name",
    edit_product_url: "Edit Product Image URL",
    edit_product_description: "Edit Product Description",
    edit_product_price: "Edit Product Price",
    edit_product_colour: "Edit Product Colour",
    edit_product_category: "Edit Product Category",
    edit_product_stock: "Edit Product Stock",
    return_to_product_list: "Return to Product List",
    select_category: "Select Category",

    // user list
    full_name: "FULL NAME",
    email: "EMAIL",

    // shipping
    enter_shipping_address: "ENTER SHIPPING ADDRESS",

    //payment
    select_payment: "SELECT PAYMENT METHOD",
    credit_cart: "Credit Card",

    // vérification
    order_summary: "ORDER SUMMARY",
    place_order: "PLACE ORDER",
    payment_method: "PAYMENT METHOD",
    order_items: "ORDER ITEMS",
    shipping_to: "Ship to",
    confirm_order: "Confirm Order",
    shipping: "SHIPPING",
    order_number: "ORDER #",
    shipping_address: "SHIPPING ADDRESS",
    selected_payment: "Selected Payment",
    not_yet_delivered: "Not Yet Delivered",
    not_yet_paid: "Not Yet Paid",
    paid_on: "Paid on",
    delivered_on: "Delivered on",
    order_empty: "Your order is empty!",
    mark_delivered: "Mark as Delivered",

    // user page
    change_name: "Update Your Name",
    change_email: "Update Your Email",
    change_password: "Change Password",
    confirm_password: "Confirm Password",
  },

  [LOCALES.FRENCH]: {
    // nav bar
    home_page: "ACCUEIL",
    about_page: "À PROPOS",
    store_page: "BOUTIQUE",
    contact_us: "CONTACTEZ-NOUS",
    admin_user: "ADMINISTRATEUR",
    user_list: "Liste d'Utilisateurs",
    product_list: "Liste de Produits",
    order_list: "Liste de Commandes",
    log_out: "DÉCONNEXION",
    profile: "MON PROFIL",
    my_cart: "MON PANIER",
    shop_now: "COMMENCER À MAGASINER",
    login: "OUVRIR UNE SESSION",

    // page d'accueil
    known_for: "NOUS SOMMES CONNUS POUR",
    contemporary: "STYLE CONTEMPORAIN",
    handpicked: "FLEURS FRAÎCHES & SÉLECTIONNÉ À LA MAIN",
    long_lasting: "DURABLES",
    testimonials: "TÉMOIGNAGES DE NOS CLIENTS",
    newsletter:
      "INCRIVEZ-VOUS À NOTRE BULLETIN POUR LES OFFRES & LES MISES À JOUR",
    latest_products: "Les Nouveautés",
    shop_description:
      "Une boutique spécialisée dans la livraison de pièces florales contemporaines et personnalisables pour toutes les occasions !",
    shop_subheader1: "COMPOSITIONS",
    shop_subheader2: "FLORALES & SUCCULENTES",

    // about page
    first_about_p:
      "Au Jardin de May est un site web de commerce électronique conçu pour présenter les compositions florales et succulentes de ma mère (May). Tous le 'produits' présentés ici ont été fabriqués à la main par elle et ensuite offerts aux amis et aux membres de famille.",
    second_about_p:
      "Le front-end du site Web est construit avec REACTJS, SEMANTIC UI et VANILLA CSS dans un souci de réactivité, et le back-end est construit avec PYTHON via le CADRE DJANGO. L'API RESTful a été construite avec DJANGO REST FRAMEWORK. L'état du front-end est géré par l'utilisation de REDUX + REDUX DEVTOOLS aux fins de débogage.",
    third_about_p:
      "Au Jardin De May utilise POSTGRESQL pour sa base de données.",
    fourth_about_p:
      "Enfin, ce site Web intègre l'API PAYPAL pour gérer les paiements (à l'aide de comptes de test Sandbox). La localisation est gérée par React-Intl.",

    // page de contact
    lets_chat: "👋🏽 Salut! On jase. 🌺",
    your_queries: "VOS REQUÊTES",
    location: "Mountain View, Californie",

    // les boutons
    submit_button: "SOUMETTRE",
    reset_button: "RÉINITIALISER",
    update_details: "METTRE À JOUR",
    create_product: "CRÉER UN PRODUIT",

    // about page
    about_title: "À PROPOS D'AU JARDIN DE MAY",
    fullstack: "développeuse fullstack",

    // page de profil
    user_profile: "PROFIL DE L'UTLISATEUR",
    past_orders: "MES COMMANDES PASSÉES",

    // login page
    welcome: "Bienvenue!",
    no_account: "Pas de compte?",
    have_account: "Vous avez déjà un compte ?",
    sign_up: "ENREGISTRER",
    create_account: "CRÉER UN COMPTE",
    return_to_store: "RETOURNER AU MAGASIN",

    // page de produits
    shop_all: "Magasiner Tous Les Produits",
    filter_by: "FILTRER PAR",
    colour: "COULEUR",
    category: "CATÊGORIE",
    size: "GRANDEUR",

    // page de product
    add_to_cart: "AJOUTER AU PANIER",
    quantity: "Quantité",

    // mon panier
    shopping_cart: "MON PANIER",
    proceed_to_checkout: "Passer à la Caisse",
    subtotal: "SOUS-TOTAL",
    items: "ARTICLES",

    // divers
    loading: "Chargement",
    price_display: "{n, number, ::currency/USD}",
    warning: "ATTENTION",
    error: "ERREUR",
    success: "SUCCÈS",
    go_back: "Retourner",
    cart_empty: "Votre panier est vide!",

    //liste de produit
    price: "PRIX",
    name_of_product: "NOM DU PRODUIT",

    // list de commandes
    amount_paid: "MONTANT PAYÉ",
    paid: "PAYÉ",
    delivered: "LIVRÉ",
    details: "DÉTAILS",

    // edit product
    edit_product: "Modifier le Produit",
    edit_product_name: "Modifier Nom du Produit",
    edit_product_url: "Modifier l'Image du Produit",
    edit_product_description: "Modifier le Description du Produit",
    edit_product_price: "Modifier le Prix du Produit",
    edit_product_colour: "Modifier la Couleur du Produit",
    edit_product_category: "Modifier la Catégorie du Produit",
    edit_product_stock: "Modifier le Stock du Produit",
    return_to_product_list: "Retourner à la Liste de Produits",
    select_category: "Sélectionner la Catégorie",

    //liste d'utilisateur
    full_name: "NOM COMPLET",
    email: "ADRESSE COURRIEL",

    // shipping
    enter_shipping_address: "SAISIR L'ADRESSE DE LIVRAISON",

    //payment
    select_payment: "CHOISIR MÉTHODE DE PAIEMENT",
    credit_cart: "Carte de Crédit",

    // vérification
    order_summary: "APPERÇU DE LA COMMANDE",
    place_order: "PASSER LA COMMANDE",
    payment_method: "MÉTHODE DE PAIEMENT",
    order_items: "ARTICLES COMMANDÉS",
    shipping_to: "Expédition à:",
    confirm_order: "Confirmer la Commande",
    shipping: "LIVRAISON",
    shipping_address: "ADRESSE DE LIVRAISON",
    order_number: "COMMANDE NO.",
    selected_payment: "Paiement Sélectionné",
    not_yet_delivered: "Pas Encore Livré",
    not_yet_paid: "Pas Encore Payé",
    paid_on: "Payé le",
    delivered_on: "Livré le",
    order_empty: "Votre commande est vide!",
    mark_delivered: "Marquer Comme Livré",

    // user page
    change_name: "Changez Votre Nom",
    change_email: "Changez Votre Email",
    change_password: "Changez Mot De Passe",
    confirm_password: "Confirmez Mot De Passe",
  },
};

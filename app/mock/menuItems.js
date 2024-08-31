// menuItems.js

export const menuItems = [
    {
      label: "Company",
      submenu: [
        { label: "Who We are", path: "/company/who-we-are" },
        { label: "Services", path: "/company/service" },
        { label: "Career", path: "/company/career" },
        { label: "Events", path: "/company/events" },
      ],
    },
    {
      label: "Services",
      submenu: [
        {
          label: "AI & ML",
          path: "/services/ai-ml",
          sub_submenu: [
            { label: "Object Recognition", path: "/object-recognition" },
            { label: "Text to Speech", path: "/text-to-speech" },
            { label: "Business Intelligence", path: "/business-intelligence" },
            { label: "Data Forcasting", path: "/data-forecasting" },
            {
              label: "Natural Language Processing",
              path: "/natural-language-processing",
            },
            { label: "Data Analytics", path: "/data-analytics" },
            { label: "Recommendation Engine", path: "/recommendation-engine" },
            { label: "Sentimental Analysis", path: "/sentimental-analysis" },
            {
              label: "Alexa Skill Development",
              path: "/alexa-skills-development",
            },
          ],
        },
        {
          label: "Mobile App Development",
          path: "/mobile-app-development",
          sub_submenu: [
            { label: "Android App", path: "/android-app-development" },
            { label: "Iphone App", path: "/iphone-application-development" },
            { label: "Hybrid App", path: "/hybrid-app-development" },
            { label: "Flutter", path: "/flutter-app-development" },
            { label: "React Native", path: "/react-native-app-development" },
            { label: "Kotlin", path: "/kotlin-app-development" },
            { label: "Ionic", path: "/ionic-app-development" },
            { label: "Swift", path: "/swift-development" },
            { label: "Xamarin", path: "/xamarin-app-development" },
          ],
        },
        {
          label: "Web And CMS Development",
          path: "/web-development",
          sub_submenu: [
            { label: "PHP", path: "/php-web-application-development" },
            { label: "WordPress", path: "/wordpress-development" },
            { label: "Drupal", path: "/drupal-development" },
            { label: "Laravel", path: "/laravel-development" },
            { label: "React Js", path: "/reactjs-development" },
            { label: "Angular Js", path: "/angularjs-development" },
            { label: "Node Js", path: "/nodejs-development" },
            { label: "CodeIgniter", path: "/codeigniter-development" },
            { label: "CokePHP", path: "/cakephp-development" },
            { label: "Python", path: "/python-web-development" },
            { label: "TypeScript", path: "/typescript" },
          ],
        },
        {
          label: "Ecommerce Development",
          path: "/ecommerce-development",
          sub_submenu: [
            { label: "Magneto", path: "/magento-development" },
            { label: "Bigcommerce", path: "/bigcommerce" },
            { label: "Ubercart", path: "/ubercart-development" },
            { label: "CScart", path: "/cs-cart-development" },
            { label: "Prestashop", path: "/prestashop" },
            { label: "virtuemart", path: "/virtuemart-development" },
            { label: "Shopify", path: "/shopify-development" },
            { label: "WooCommerce", path: "/woocommerce-development" },
          ],
        },
        {
          label: "Blockchain Development",
          path: "/blockchain-development",
          sub_submenu: [
            { label: "Wallet", path: "/cryptocurrency-wallet-development" },
            { label: "Exchange", path: "/cryptocurrency-exchange-development" },
            { label: "Ethereum", path: "/ethereum-app-development" },
            {
              label: "Hyperledger",
              path: "/hyperledger-blockchain-development",
            },
            { label: "Smart Contracts", path: "/smart-contracts-development" },
            {
              label: "Private Blockchain",
              path: "/private-blockchain-development",
            },
            {
              label: "NFT Marketplace",
              path: "/nft-marketplace-development-company",
            },
          ],
        },
        {
          label: "Game Development",
          path: "/game-development-company",
          sub_submenu: [
            { label: "Unity3D", path: "/unity3d-game-development" },
            { label: "Metaverse", path: "/metaverse-development-company" },
            { label: "Unreal Engine", path: "/unreal-engine-game-development" },
            {
              label: "Augumented Reality",
              path: "/augmented-reality-app-development-company",
            },
            {
              label: "Virtual Reality",
              path: "/virtual-reality-mobile-game-application-development-company",
            },
            { label: "Casual Games", path: "/casual-game-development" },
          ],
        },
        {
          label: "Salesforce Solutions",
          path: "/salesforce-development",
          sub_submenu: [
            {
              label: "Salesforce Development",
              path: "/salesforce-development",
            },
            { label: "Salesforce Consulting", path: "/salesforce-consulting" },
            {
              label: "Salesforce Implementation",
              path: "/salesforce-implementation",
            },
          ],
        },
        {
          label: "IoT & Embedded",
          path: "/iot-development",
          sub_submenu: [
            { label: "IoT App", path: "/iot-app-development" },
            { label: "Embedded Software", path: "/embedded-software" },
            {
              label: "IoT Hardware Prototyping",
              path: "/iot-hardware-prototyping",
            },
            {
              label: "IoT Dashboard and Analysis",
              path: "/iot-dashboard-and-analytics",
            },
            {
              label: "Smart Home - Home Automation",
              path: "/smart-home-home-automation",
            },
          ],
        },
        {
          label: "Devops",
          path: "/devops",
          sub_submenu: [{ label: "Devops", path: "/devops-development" }],
        },
        {
          label: "UI/UX Development",
          path: "/devops",
          sub_submenu: [{ label: "Devops", path: "/devops-development" }],
        },
      ],
    },
    {
      label: "Hire Developers",
      submenu: [
        { label: "App Developers", path: "/hire/app-developers-for-hire" },
        { label: "Web Developers", path: "/hire/hire-web-developers" },
        { label: "Software Developers", path: "/hire/hire-software-developers" },
        { label: "Full-stack Developers", path: "/hire/hire-full-stack-developer" },
        { label: "Frontend Developers", path: "/hire/hire-front-end-developers" },
        { label: "Backend Developers", path: "/hire/hire-backend-developers" },
        { label: "UI/UX Designers", path: "/hire/hire-ui-ux-designer" },
        {
          label: "IoT Solution Architect",
          path: "/hire/hire-iot-solution-architect",
        },
        { label: "Salesforce Developers", path: "/hire/hire-salesforce-developers" },
        { label: "Data Scientist", path: "/hire/hire-data-scientist" },
        { label: "Blockchain Developers", path: "/hire/hire-blockchain-developers" },
        { label: "Android Developers", path: "/hire/hire-android-app-developer" },
        { label: "iOS Developers", path: "/hire/hire-ios-developers" },
        { label: "iPhone Developers", path: "/hire/hire-iphone-app-developer" },
        { label: "Flutter Developers", path: "/hire/hire-flutter-developers" },
        {
          label: "React Native Developers",
          path: "/hire/hire-react-native-app-developers",
        },
        { label: "Swift Developers", path: "/hire/hire-swift-developer" },
        { label: "Ionic Developers", path: "/hire/hire-ionic-developer" },
        { label: "Kotlin Developers", path: "/hire/hire-kotlin-developers" },
        { label: "Java Developers", path: "/hire/hire-java-developers" },
        { label: "AngularJS Developers", path: "/hire/hire-angularjs-developers" },
        { label: "ReactJS Developers", path: "/hire/hire-reactjs-developers" },
        { label: "NodeJS Developers", path: "/hire/hire-nodejs-developers" },
        { label: "VueJS Developers", path: "/hire/hire-vuejs-developers" },
        { label: "PHP Developers", path: "/hire/hire-php-developer" },
        { label: "WordPress Developers", path: "/hire/hire-wordpress-developer" },
        { label: "CakePHP Developers", path: "/hire/hire-cakephp-developer" },
        {
          label: "CodeIgniter Developers",
          path: "/hire/hire-codeigniter-developers",
        },
        { label: "Laravel Developers", path: "/hire/hire-laravel-developers" },
        { label: "Yll Developers", path: "/hire/hire-yii-developers" },
        { label: "Magento Developers", path: "/hire/hire-magento-developer" },
        { label: "Shopify Developers", path: "/hire/hire-shopify-developer" },
        { label: "Drupal Developers", path: "/hire/hire-drupal-developer" },
        {
          label: "WooCommerce Developers",
          path: "/hire/hire-woocommerce-developers",
        },
        { label: "Python Developers", path: "/hire/hire-python-developers" },
        { label: "Golang Developers", path: "/hire/hire-golang-developers" },
        { label: "Solidity Developers", path: "/hire/hire-solidity-developer" },
        { label: "Dart Developers", path: "/hire/hire-dart-developer" },
        {
          label: "Spring Boot Developers",
          path: "/hire/hire-spring-boot-developers",
        },
        { label: "Django Developers", path: "/hire/hire-django-developer" },
      ],
    },
    {
      label: "Industries",
      submenu: [
        { label: "Real Estate", path:"/industry/real-estate" },
        { label: "Education", path:"/industry/education"},
        { label: "Healthcare", path:"/industry/healthcare" },
        { label: "Ecommerce", path:"/industry/real-estate" },
        { label: "On-Demand", path:"/industry/real-estate" },
        { label: "Sass", path:"/industry/real-estate" },
        { label: "Travel", path:"/industry/real-estate" },
        { label: "Finance", path:"/industry/real-estate" },
        { label: "EV", path:"/industry/real-estate" },
        { label: "Game App", path:"/industry/real-estate" },
      ],
    },
    {
      label: "Case Study",
      path: "/case-studies",
    },
    {
      label: "Resources",
      submenu: [
        { label: "Blog", path: "" },
        { label: "Research", path: "" },
        { label: "Media Coverage", path: "" },
        { label: "Press Release", path: "" },
        { label: "Tech News", path: "" },
        { label: "Whitepaper", path: "" },
        { label: "Podcast", path: "" },
        { label: "Portfolio", path: "" },
        { label: "Download-Brochure", path: "" },
      ],
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];
  

  
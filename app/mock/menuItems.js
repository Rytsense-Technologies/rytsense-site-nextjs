import { FaBuilding, FaUserTie, FaCode, FaIndustry, FaBook, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { FaAndroid, FaApple, FaReact, FaJava, FaPython, FaNodeJs, FaPhp, FaWordpress, FaLaravel, FaSwift, FaTools, FaRobot, FaMobile, FaDesktop, FaDatabase, FaHospital, FaGraduationCap, FaShoppingCart, FaHandsHelping, FaChartLine, FaBus, FaWallet, FaGamepad } from "react-icons/fa";

export const menuItems = [
  {
    label: "Company",
    path: "",
    submenu: [
      { label: "Who We are", path: "/company/who-we-are", icon: <FaBriefcase style={{ color: "#f39c12" }} /> },
      { label: "Services", path: "/company/service", icon: <FaTools style={{ color: "#3498db" }} /> },
      { label: "Career", path: "/company/career", icon: <FaUserTie style={{ color: "#9b59b6" }} /> },
      { label: "Events", path: "/company/events", icon: <FaBuilding style={{ color: "#e74c3c" }} /> },
    ],
  },
  {
    label: "Services",
    path: "",
    submenu: [
      { label: "AI & ML", path: "/ai-development-company-usa", icon: <FaRobot style={{ color: "#e67e22" }} /> },
      { label: "Mobile App Development", path: "/services/mobile-app-development", icon: <FaMobile style={{ color: "#2ecc71" }} /> },
      { label: "Web And CMS Development", path: "/services/web-development", icon: <FaDesktop style={{ color: "#3498db" }} /> },
      { label: "Ecommerce Development", path: "/services/ecommerce-development", icon: <FaShoppingCart style={{ color: "#e74c3c" }} /> },
      { label: "Blockchain Development", path: "/services/blockchain-development", icon: <FaWallet style={{ color: "#34495e" }} /> },
      { label: "Game Development", path: "/services/game-development-company", icon: <FaGamepad style={{ color: "#8e44ad" }} /> },
      { label: "Salesforce Solutions", path: "/services/salesforce-development", icon: <FaBriefcase style={{ color: "#f1c40f" }} /> },
      { label: "IoT & Embedded", path: "/services/iot-development", icon: <FaRobot style={{ color: "#27ae60" }} /> },
      { label: "Devops", path: "/services/devops", icon: <FaTools style={{ color: "#2980b9" }} /> },
      { label: "UI/UX Development", path: "/services/ui-ux", icon: <FaUserTie style={{ color: "#e67e22" }} /> },
    ],
  },
  {
    label: "Hire Developers",
    path: "/hire-developers-in-india",
    submenu: [
      {
        label: "Frontend",
        technologies: [
          { label: "ReactJS", path: "/hire/hire-reactjs-developers", icon: <FaReact style={{ color: "#2ecc71" }} /> },
          { label: "AngularJS", path: "/hire/hire-angularjs-developers", icon: <FaCode style={{ color: "#3498db" }} /> },
          { label: "VueJS", path: "/hire/hire-vuejs-developers", icon: <FaCode style={{ color: "#9b59b6" }} /> },
          { label: "HTML/CSS", path: "/hire/hire-html-css-developers", icon: <FaCode style={{ color: "#e67e22" }} /> },
        ],
      },
      {
        label: "Backend",
        technologies: [
          { label: "NodeJS", path: "/hire/hire-nodejs-developers", icon: <FaNodeJs style={{ color: "#e67e22" }} /> },
          { label: "Python", path: "/hire/hire-python-developers", icon: <FaPython style={{ color: "#9b59b6" }} /> },
          { label: "Java", path: "/hire/hire-java-developers", icon: <FaJava style={{ color: "#f1c40f" }} /> },
          { label: "PHP", path: "/hire/hire-php-developer", icon: <FaPhp style={{ color: "#34495e" }} /> },
          { label: "Golang", path: "/hire/hire-golang-developers", icon: <FaCode style={{ color: "#2ecc71" }} /> },
          { label: "Spring Boot", path: "/hire/hire-spring-boot-developers", icon: <FaJava style={{ color: "#f1c40f" }} /> },
          { label: "Django", path: "/hire/hire-django-developer", icon: <FaPython style={{ color: "#e67e22" }} /> },
          { label: "Solidity", path: "/hire/hire-solidity-developer", icon: <FaWallet style={{ color: "#34495e" }} /> },
        ],
      },
      {
        label: "Mobile",
        technologies: [
          { label: "Android", path: "/hire/hire-android-app-developer", icon: <FaAndroid style={{ color: "#2ecc71" }} /> },
          { label: "iOS", path: "/hire/hire-ios-developers", icon: <FaApple style={{ color: "#3498db" }} /> },
          { label: "Flutter", path: "/hire/hire-flutter-developers", icon: <FaReact style={{ color: "#8e44ad" }} /> },
          { label: "React Native", path: "/hire/hire-react-native-app-developers", icon: <FaReact style={{ color: "#3498db" }} /> },
          { label: "Swift", path: "/hire/hire-swift-developer", icon: <FaSwift style={{ color: "#9b59b6" }} /> },
          { label: "Ionic", path: "/hire/hire-ionic-developer", icon: <FaCode style={{ color: "#f39c12" }} /> },
          { label: "Kotlin", path: "/hire/hire-kotlin-developers", icon: <FaCode style={{ color: "#1abc9c" }} /> },
          { label: "Dart", path: "/hire/hire-dart-developer", icon: <FaCode style={{ color: "#3498db" }} /> },
        ],
      },
      {
        label: "CMS",
        technologies: [
          { label: "WordPress", path: "/hire/hire-wordpress-developer", icon: <FaWordpress style={{ color: "#3498db" }} /> },
          { label: "Magento", path: "/hire/hire-magento-developer", icon: <FaShoppingCart style={{ color: "#e67e22" }} /> },
          { label: "Shopify", path: "/hire/hire-shopify-developer", icon: <FaShoppingCart style={{ color: "#3498db" }} /> },
          { label: "WooCommerce", path: "/hire/hire-woocommerce-developers", icon: <FaWordpress style={{ color: "#f39c12" }} /> },
          { label: "Drupal", path: "/hire/hire-drupal-developer", icon: <FaCode style={{ color: "#8e44ad" }} /> },
          { label: "CakePHP", path: "/hire/hire-cakephp-developer", icon: <FaCode style={{ color: "#8e44ad" }} /> },
          { label: "CodeIgniter", path: "/hire/hire-codeigniter-developers", icon: <FaCode style={{ color: "#f39c12" }} /> },
          { label: "Laravel", path: "/hire/hire-laravel-developers", icon: <FaLaravel style={{ color: "#e74c3c" }} /> },
          { label: "YII", path: "/hire/hire-yii-developers", icon: <FaCode style={{ color: "#1abc9c" }} /> },
        ],
      },
      {
        label: "Other",
        technologies: [
          { label: "Full-stack", path: "/hire/hire-full-stack-developer", icon: <FaCode style={{ color: "#2ecc71" }} /> },
          { label: "Salesforce", path: "/hire/hire-salesforce-developers", icon: <FaBriefcase style={{ color: "#f1c40f" }} /> },
          { label: "Data Scientist", path: "/hire/hire-data-scientist", icon: <FaDatabase style={{ color: "#34495e" }} /> },
          { label: "Blockchain", path: "/hire/hire-blockchain-developers", icon: <FaWallet style={{ color: "#34495e" }} /> },
          { label: "IoT Solution Architect", path: "/hire/hire-iot-solution-architect", icon: <FaRobot style={{ color: "#e67e22" }} /> },
          { label: "UI/UX Designers", path: "/hire/hire-ui-ux-designer", icon: <FaUserTie style={{ color: "#f39c12" }} /> },
        ],
      },
    ],
  },
  {
    label: "Industries",
    path: "",
    submenu: [
      { label: "Real Estate", path: "/industry/real-estate", icon: <FaBuilding style={{ color: "#34495e" }} /> },
      { label: "Education", path: "/industry/education", icon: <FaGraduationCap style={{ color: "#9b59b6" }} /> },
      { label: "Healthcare", path: "/industry/healthcare", icon: <FaHospital style={{ color: "#e74c3c" }} /> },
      { label: "Ecommerce", path: "/industry/ecommerce", icon: <FaShoppingCart style={{ color: "#2ecc71" }} /> },
      { label: "On-Demand", path: "/industry/on-demand", icon: <FaHandsHelping style={{ color: "#f1c40f" }} /> },
      { label: "Travel", path: "/industry/travel", icon: <FaBus style={{ color: "#2980b9" }} /> },
      { label: "Finance", path: "/industries-pages/finance", icon: <FaChartLine style={{ color: "#e67e22" }} /> },
      { label: "EV", path: "/industry/ev", icon: <FaBus style={{ color: "#3498db" }} /> },
      { label: "Game App", path: "/industry/game-app", icon: <FaGamepad style={{ color: "#8e44ad" }} /> },
    ],
  },
  {
    label: "Case Study",
    path: "/case-studies",
    icon: <FaBook style={{ color: "#8e44ad" }} />,
  },
  {
    label: "Resources",
    path: "",
    submenu: [
      { label: "Blog", path: "/resource/blog", icon: <FaBook style={{ color: "#f39c12" }} /> },
      { label: "Research", path: "/resource/research", icon: <FaBook style={{ color: "#3498db" }} /> },
      { label: "Media Coverage", path: "/resource/media-coverage", icon: <FaBook style={{ color: "#2ecc71" }} /> },
      { label: "Press Release", path: "/resource/press-release", icon: <FaBook style={{ color: "#e74c3c" }} /> },
      { label: "Tech News", path: "/resource/tech-news", icon: <FaBook style={{ color: "#34495e" }} /> },
      { label: "Whitepaper", path: "/resource/whitepaper", icon: <FaBook style={{ color: "#f1c40f" }} /> },
      { label: "Podcast", path: "/resource/podcast", icon: <FaBook style={{ color: "#27ae60" }} /> },
      { label: "Portfolio", path: "/resource/portfolio", icon: <FaBook style={{ color: "#9b59b6" }} /> },
      { label: "Download-Brochure", path: "/resource/download-brochure", icon: <FaBook style={{ color: "#2980b9" }} /> },
    ],
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    icon: <FaEnvelope style={{ color: "#e67e22" }} />,
  },
];

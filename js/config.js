/**
 * Site Configuration
 * Edit this file to update content without touching the main source code.
 */
var SITE_CONFIG = {

  // ==================== Brand ====================
  brand: {
    name: "Heng Kimjuy Energy",
    logo: "images/logo.webp",
    favicon: "images/logo.ico",
    heroTitle: 'Heng Kimjuy<br><span class="text-primary">Energy</span>',
    heroBg: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80",
  },

  // ==================== Working Hours ====================
  workingHours: {
    openTime: "08:30",   // HH:MM format
    closeTime: "18:30",  // HH:MM format
    closedDays: [0],     // 0=Sunday, 1=Monday, ... 6=Saturday
    statusLabels: {
      th: ["เปิดให้บริการ", "ปิดให้บริการ"],
      en: ["Open", "Closed"],
      zh: ["营业中", "已关门"],
    },
  },

  // ==================== Language Switcher ====================
  languages: [
    { code: "th", label: "ไทย", icon: "images/icons/thailand.png", alt: "Thai" },
    { code: "en", label: "EN", icon: "images/icons/english.png", alt: "English" },
    { code: "zh", label: "中文", icon: "images/icons/china.png", alt: "Chinese" },
  ],

  // ==================== Services ====================
  services: [
    {
      icon: "images/icons/oil.gif",
      alt: "Oil Change",
      titleKey: "services.oilChange.title",
      descKey: "services.oilChange.desc",
      titleDefault: "เปลี่ยนถ่ายน้ำมัน",
      descDefault: "บริการเปลี่ยนถ่ายน้ำมันเครื่อง น้ำมันเกียร์ และน้ำมันเบรก",
    },
    {
      icon: "images/icons/engine.gif",
      alt: "Engine Repair",
      titleKey: "services.engineRepair.title",
      descKey: "services.engineRepair.desc",
      titleDefault: "ซ่อมเครื่องยนต์",
      descDefault: "ตรวจเช็คและซ่อมแซมเครื่องยนต์ทุกประเภท",
    },
    {
      icon: "images/icons/disc-brake.gif",
      alt: "Brake Service",
      titleKey: "services.brakeService.title",
      descKey: "services.brakeService.desc",
      titleDefault: "บริการเบรก",
      descDefault: "ตรวจสอบและเปลี่ยนผ้าเบรก จานเบรก น้ำมันเบรก",
    },
    {
      icon: "images/icons/tire.gif",
      alt: "Tire Service",
      titleKey: "services.tireService.title",
      descKey: "services.tireService.desc",
      titleDefault: "บริการยาง",
      descDefault: "เปลี่ยนยาง ตั้งศูนย์ถ่วงล้อ และตรวจสอบสภาพยาง",
    },
    {
      icon: "images/icons/air-conditioning.gif",
      alt: "Air Conditioning",
      titleKey: "services.airCon.title",
      descKey: "services.airCon.desc",
      titleDefault: "ซ่อมแอร์รถยนต์",
      descDefault: "เติมน้ำยาแอร์ ซ่อมระบบแอร์ และตรวจเช็คระบบทำความเย็น",
    },
    {
      icon: "images/icons/car-service.gif",
      alt: "General Maintenance",
      titleKey: "services.generalMaintenance.title",
      descKey: "services.generalMaintenance.desc",
      titleDefault: "ตรวจเช็คทั่วไป",
      descDefault: "บริการตรวจเช็คสภาพรถยนต์ครบวงจร ก่อนเดินทาง",
    },
  ],

  // ==================== Gallery ====================
  gallery: {
    facebookPhotosUrl: "https://www.facebook.com/hengkimjuy",
    photos: [
      { src: "https://images.unsplash.com/photo-1541968047768-c92c393e0e79?w=1000&q=80", alt: "ผลงานซ่อมรถยนต์", altKey: "gallery.photo1.alt" },
      { src: "images/gallery/photo02.jpg", alt: "ภายในอู่ซ่อมรถ", altKey: "gallery.photo2.alt" },
      { src: "https://images.unsplash.com/photo-1599256630445-67b5772b1204?w=1000&q=80", alt: "เครื่องมือซ่อมรถ", altKey: "gallery.photo3.alt" },
      { src: "images/gallery/photo04.jpg", alt: "บริการเปลี่ยนน้ำมัน", altKey: "gallery.photo4.alt" },
      { src: "https://images.unsplash.com/photo-1742294613221-0b88c55b21f4?w=1000&q=80", alt: "เครื่องมือซ่อมรถ", altKey: "gallery.photo3.alt" },
      { src: "images/gallery/photo06.jpg", alt: "ซ่อมเครื่องยนต์", altKey: "gallery.photo5.alt" },
      { src: "images/gallery/photo07.jpg", alt: "ทีมช่างซ่อมรถ", altKey: "gallery.photo6.alt" },
      { src: "images/gallery/photo08.jpg", alt: "ทีมช่างซ่อมรถ", altKey: "gallery.photo6.alt" },
      { src: "images/gallery/photo09.jpg", alt: "ทีมช่างซ่อมรถ", altKey: "gallery.photo6.alt" },
    ],
  },

  // ==================== Reviews ====================
  // To add real customer photos:
  // 1. Save profile photos to images/reviews/ (e.g. customer1.jpg)
  // 2. Save review photos to images/reviews/ (e.g. review1.jpg)
  // 3. Update avatar and photo fields below
  reviews: {
    facebookMentionsUrl: "https://www.facebook.com/hengkimjuy/reviews",
    items: [
      {
        name: "คุณสมชาย",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=somchai",
        photo: "",
        rating: 5,
        text: "บริการดีมาก ช่างมีฝีมือ ราคาไม่แพง แนะนำเลยครับ",
        date: "2025-12",
        service: "ซ่อมเครื่องยนต์",
      },
      {
        name: "คุณวิภา",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=wipa",
        photo: "",
        rating: 5,
        text: "เปลี่ยนถ่ายน้ำมันเครื่องที่นี่ประจำ พนักงานใจดี งานเร็ว",
        date: "2025-11",
        service: "เปลี่ยนถ่ายน้ำมัน",
      },
      {
        name: "คุณธนา",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=thana",
        photo: "",
        rating: 5,
        text: "แอร์รถเสีย มาซ่อมที่นี่ เย็นฉ่ำเหมือนใหม่ ราคาเป็นกันเอง",
        date: "2025-10",
        service: "ซ่อมแอร์รถยนต์",
      },
      {
        name: "คุณนภา",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=napa",
        photo: "",
        rating: 5,
        text: "ตรวจเช็คสภาพรถก่อนเดินทาง ละเอียดมาก อุ่นใจค่ะ",
        date: "2025-09",
        service: "ตรวจเช็คทั่วไป",
      },
      {
        name: "คุณพิชัย",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=pichai",
        photo: "",
        rating: 5,
        text: "เบรกมีปัญหา มาเปลี่ยนที่นี่ ช่างอธิบายให้ฟังทุกขั้นตอน ประทับใจ",
        date: "2025-08",
        service: "บริการเบรก",
      },
      {
        name: "คุณอรุณ",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=arun",
        photo: "",
        rating: 4,
        text: "เปลี่ยนยางใหม่ 4 เส้น ตั้งศูนย์ถ่วงล้อเรียบร้อย รถวิ่งนิ่มขึ้นมาก",
        date: "2025-07",
        service: "บริการยาง",
      },
      {
        name: "คุณมานะ",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=mana",
        photo: "",
        rating: 5,
        text: "ใช้บริการมาหลายปี ไม่เคยผิดหวัง ช่างซื่อสัตย์ บอกตรงๆ",
        date: "2025-06",
        service: "ซ่อมเครื่องยนต์",
      },
      {
        name: "คุณจันทร์",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=chan",
        photo: "",
        rating: 5,
        text: "พารถมาเช็คระยะ ราคาเป็นกันเอง ไม่ขายของเกินจำเป็น",
        date: "2025-06",
        service: "ตรวจเช็คทั่วไป",
      },
      {
        name: "คุณวีระ",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=weera",
        photo: "",
        rating: 5,
        text: "เครื่องยนต์มีเสียงดัง มาเช็คที่นี่ แก้ปัญหาได้ตรงจุด ขอบคุณครับ",
        date: "2025-05",
        service: "ซ่อมเครื่องยนต์",
      },
      {
        name: "คุณสุดา",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=suda",
        photo: "",
        rating: 5,
        text: "แอร์ไม่เย็น มาเติมน้ำยาแอร์ เย็นฉ่ำเลยค่ะ รอไม่นาน",
        date: "2025-05",
        service: "ซ่อมแอร์รถยนต์",
      },
      {
        name: "คุณประเสริฐ",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=prasert",
        photo: "",
        rating: 4,
        text: "เปลี่ยนผ้าเบรกหน้า-หลัง งานเรียบร้อย ราคาสมเหตุสมผล",
        date: "2025-04",
        service: "บริการเบรก",
      },
      {
        name: "คุณกมล",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=kamol",
        photo: "",
        rating: 5,
        text: "รถเกียร์กระตุก มาซ่อมที่นี่ เปลี่ยนน้ำมันเกียร์แล้วหายเลย",
        date: "2025-04",
        service: "เปลี่ยนถ่ายน้ำมัน",
      },
      {
        name: "คุณรัตนา",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=rattana",
        photo: "",
        rating: 5,
        text: "พาแม่มาเปลี่ยนยาง ช่างแนะนำยางที่เหมาะกับรถ ไม่ยัดเยียด",
        date: "2025-03",
        service: "บริการยาง",
      },
      {
        name: "คุณชัยวัฒน์",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=chaiwat",
        photo: "",
        rating: 5,
        text: "ซ่อมระบบไฟรถ หาที่อื่นไม่ได้ มาที่นี่แก้ได้เลย เก่งมาก",
        date: "2025-03",
        service: "ตรวจเช็คทั่วไป",
      },
      {
        name: "คุณพรทิพย์",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=porntip",
        photo: "",
        rating: 5,
        text: "เป็นผู้หญิงไม่รู้เรื่องรถเลย แต่ช่างอธิบายให้ฟังเข้าใจง่าย ไม่โกง",
        date: "2025-02",
        service: "ตรวจเช็คทั่วไป",
      },
      {
        name: "คุณสมศักดิ์",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=somsak",
        photo: "",
        rating: 4,
        text: "เปลี่ยนถ่ายน้ำมันเครื่องสังเคราะห์ ราคาถูกกว่าศูนย์ งานดีเหมือนกัน",
        date: "2025-02",
        service: "เปลี่ยนถ่ายน้ำมัน",
      },
      {
        name: "คุณอนันต์",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=anan",
        photo: "",
        rating: 5,
        text: "คอมเพรสเซอร์แอร์เสีย เปลี่ยนใหม่ ราคาดี รับประกันด้วย",
        date: "2025-01",
        service: "ซ่อมแอร์รถยนต์",
      },
      {
        name: "คุณดวงใจ",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=duangjai",
        photo: "",
        rating: 5,
        text: "มาตรวจเช็คก่อนขับไปต่างจังหวัด ช่างเช็คละเอียดทุกจุด สบายใจ",
        date: "2025-01",
        service: "ตรวจเช็คทั่วไป",
      },
      {
        name: "คุณภาณุ",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=panu",
        photo: "",
        rating: 5,
        text: "จานเบรกหลังสึก เปลี่ยนใหม่ทั้งคู่ เบรกนิ่มขึ้นมาก ขอบคุณครับ",
        date: "2024-12",
        service: "บริการเบรก",
      },
      {
        name: "คุณศิริพร",
        avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=siriporn",
        photo: "",
        rating: 5,
        text: "ตั้งศูนย์ถ่วงล้อ รถวิ่งนิ่งไม่สั่น ราคา 400 บาท คุ้มมากค่ะ",
        date: "2024-12",
        service: "บริการยาง",
      },
    ],
  },

  // ==================== Branches ====================
  branches: [
    {
      nameKey: "branches.branch1.name",
      nameDefault: "สาขา 1 - สำนักงานใหญ่",
      addressKey: "branches.branch1.address",
      addressDefault: "ถนนเทพารักษ์ กม.7 สมุทรปราการ",
      hoursKey: "branches.branch1.hours",
      hoursDefault: "จันทร์ - เสาร์ 08:30 - 18:30 | อาทิตย์ ปิด",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d100.64!3d13.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzEyLjAiTiAxMDDCsDM4JzI0LjAiRQ!5e0!3m2!1sen!2sth!4v1",
      directionsUrl: "https://maps.app.goo.gl/zb1DMVMYmrEFKQwt8",
    },
    {
      nameKey: "branches.branch2.name",
      nameDefault: "สาขา 2",
      addressKey: "branches.branch2.address",
      addressDefault: "สมุทรปราการ",
      hoursKey: "branches.branch2.hours",
      hoursDefault: "จันทร์ - เสาร์ 08:30 - 18:30 | อาทิตย์ ปิด",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d100.65!3d13.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQ4LjAiTiAxMDDCsDM5JzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1",
      directionsUrl: "https://maps.app.goo.gl/5g4BhZd2KmXu3RzN9",
    },
  ],

  // ==================== Contact ====================
  contact: {
    phone: {
      number: "0867016532",
      displayKey: "contact.phone",
      displayDefault: "086 701 6532",
      labelKey: "contact.phoneLabel",
      labelDefault: "โทรหาเรา",
      icon: "images/icons/contact.gif",
    },
    line: {
      url: "https://line.me/R/ti/p/@364hgjpk",
      displayKey: "contact.line",
      displayDefault: "@364hgjpk",
      labelKey: "contact.lineLabel",
      labelDefault: "LINE",
      icon: "images/icons/line.png",
    },
    facebook: {
      url: "https://www.facebook.com/hengkimjuy",
      displayKey: "contact.facebook",
      displayDefault: "Facebook",
      labelKey: "contact.facebookLabel",
      labelDefault: "ติดตามเรา",
      icon: "images/icons/social-media.gif",
    },
  },

  // ==================== Social Links (Footer) ====================
  social: {
    facebook: "https://www.facebook.com/hengkimjuy",
    line: "https://line.me/R/ti/p/@364hgjpk",
    phone: "0867016532",
  },
};

let btnOne = document.querySelector(".Langue .btn-one");
let btnTwo = document.querySelector(".Langue .btn-two");
let root = document.querySelector(":root");

let body = document.querySelector("body");

let btnThree = document.querySelector(".background .btn-one");
let btnFour = document.querySelector(".background .btn-two");

let headerSpan = document.querySelector(".section-one span");
let headerH1 = document.querySelector(".section-one h1");
let headerP = document.querySelector(".section-one p");

let main = document.querySelector("main");
let mainH3 = document.querySelector("main h3");
let mainP = document.querySelector("main p");
let mainSpan = document.querySelector("main span");

let article = document.querySelector("article");
let articleH3 = document.querySelector("article h3");
let articleP = document.querySelector("article p");

let footer = document.querySelector("footer");
let footerSpan = document.querySelector("footer span");

btnTwo.addEventListener("click", function () {
  btnOne.classList.add("active");
  btnTwo.classList.add("active");
  headerSpan.innerHTML = "مرحبا, اسمي اسلام";
  headerH1.innerHTML = "مرحبا بكم في عالم المبرمجين";
  main.style.direction = "rtl";

  window.localStorage.setItem("main", main.dataset.color);
  main.style.direction = window.localStorage.getItem("main");

  window.localStorage.setItem("translate", "مرحبا, اسمي اسلام");
  headerSpan.innerHTML = window.localStorage.getItem("translate");

  window.localStorage.setItem("headerH1", "مرحبا بكم في عالم المبرمجين");
  headerH1.innerHTML = window.localStorage.getItem("headerH1");

  window.localStorage.setItem("headerP", "نحن نعيش اليوم في عالم حيث كل شيء ممكن باستخدام التكنولوجيا التي قدمها المبرمجون العظماء");
  headerP.innerHTML = window.localStorage.getItem("headerP");

  window.localStorage.setItem("mainH3", "البرمجة في كل مكان");
  mainH3.innerHTML = window.localStorage.getItem("mainH3");

  window.localStorage.setItem("mainP", "البرمجة ، حرفيا ، في كل مكان حولنا. من الوجبات الجاهزة التي نطلبها ، إلى الأفلام التي نبثها ، تتيح التعليمات البرمجية الإجراءات اليومية في حياتنا. لم يعد من الممكن التعرف على شركات التكنولوجيا على أنها مجرد شركات برمجيات بدلا من ذلك ، فهي تجلب الطعام إلى بابنا ، وتساعدنا في الحصول على سيارة أجرة ، أو تؤثر على النتائج في الانتخابات الرئاسية ، أو تعمل كمدرب شخصي.");
  mainP.innerHTML = window.localStorage.getItem("mainP");

  window.localStorage.setItem("mainSpan", "عندما تسير في الشارع ، أين يمكنك العثور على التكنولوجيا في بيئتك انقر على الدوائر البيضاء");
  mainSpan.innerHTML = window.localStorage.getItem("mainSpan");

  article.style.direction = "rtl";

  window.localStorage.setItem("article", article.dataset.color);
  article.style.direction = window.localStorage.getItem("article");

  window.localStorage.setItem("articleH3", "ما هي البرمجة؟");
  articleH3.innerHTML = window.localStorage.getItem("articleH3");

  window.localStorage.setItem("footerSpan", "&copy; جميع الحقوق محفوظه بواسطه <p>اسلام ربيع</p>");
  footerSpan.innerHTML = window.localStorage.getItem("footerSpan");

  window.localStorage.setItem("articleP", "ببساطة ، البرمجة تعطي مجموعة من التعليمات للكمبيوتر لتنفيذها. إذا كنت قد طهيت باستخدام وصفة من قبل ، فيمكنك التفكير في نفسك على أنك الكمبيوتر ومؤلف الوصفة كمبرمج. يوفر لك مؤلف الوصفة مجموعة من التعليمات التي تقرأها ثم تتبعها. كلما كانت التعليمات أكثر تعقيدا ، كانت النتيجة أكثر تعقيدا");
  articleP.innerHTML = window.localStorage.getItem("articleP");

  footer.style.direction = "rtl";

  window.localStorage.setItem("footer", footer.dataset.color);
  footer.style.direction = window.localStorage.getItem("footer");

  window.localStorage.setItem("Langue", `<ion-icon name="language-outline"></ion-icon>`);
  btnOne.innerHTML = window.localStorage.getItem("Langue");
});

if (window.localStorage.getItem("headerH1")) {
  headerH1.innerHTML = window.localStorage.getItem("headerH1");
}

if (window.localStorage.getItem("translate")) {
  headerSpan.innerHTML = window.localStorage.getItem("translate");
}

if (window.localStorage.getItem("headerP")) {
  headerP.innerHTML = window.localStorage.getItem("headerP");
}

if (window.localStorage.getItem("main")) {
  main.style.direction = window.localStorage.getItem("main");
}

if (window.localStorage.getItem("mainH3")) {
  mainH3.innerHTML = window.localStorage.getItem("mainH3");
}

if (window.localStorage.getItem("mainP")) {
  mainP.innerHTML = window.localStorage.getItem("mainP");
}

if (window.localStorage.getItem("mainSpan")) {
  mainSpan.innerHTML = window.localStorage.getItem("mainSpan");
}

if (window.localStorage.getItem("article")) {
  article.style.direction = window.localStorage.getItem("article");
}

if (window.localStorage.getItem("footer")) {
  footer.style.direction = window.localStorage.getItem("footer");
}

if (window.localStorage.getItem("footerSpan")) {
  footerSpan.style.direction = window.localStorage.getItem("footerSpan");
}

if (window.localStorage.getItem("articleH3")) {
  articleH3.innerHTML = window.localStorage.getItem("articleH3");
}

if (window.localStorage.getItem("articleP")) {
  articleP.innerHTML = window.localStorage.getItem("articleP");
}

if (window.localStorage.getItem("Langue")) {
  btnOne.innerHTML = window.localStorage.getItem("Langue");
}

btnOne.addEventListener("click", function () {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  headerSpan.innerHTML = "Hello, My Name Islam";
  headerH1.innerHTML = "Welcome to the world of programmers";
  main.style.direction = "ltr";

  window.localStorage.setItem("main", main.dataset.direction);
  main.style.direction = window.localStorage.getItem("main");

  window.localStorage.setItem("translate", "Hello, My Name Islam");
  headerSpan.innerHTML = window.localStorage.getItem("translate");

  window.localStorage.setItem("headerH1", "Welcome to the world of programmers");
  headerH1.innerHTML = window.localStorage.getItem("headerH1");

  window.localStorage.setItem("headerP", "We are living today in a world where everything is possible using technology introduced by great programmers");
  headerP.innerHTML = window.localStorage.getItem("headerP");

  window.localStorage.setItem("mainH3", "PROGRAMMING IS EVERYWHERE");
  mainH3.innerHTML = window.localStorage.getItem("mainH3");

  window.localStorage.setItem("mainP", "Programming is, quite literally, all around us. From the take-out we order, to the movies we stream, code enables everyday actions in our lives. Tech companies are no longer recognizable as just software companies instead, they bring food to our door, help us get a taxi, influence outcomes in presidential elections, or act as a personal trainer");
  mainP.innerHTML = window.localStorage.getItem("mainP");

  window.localStorage.setItem("mainSpan", "When you’re walking down the street, where can you find technology in your environment Click on the white circles");
  mainSpan.innerHTML = window.localStorage.getItem("mainSpan");

  window.localStorage.setItem("articleH3", "WHAT IS PROGRAMMING?");
  articleH3.innerHTML = window.localStorage.getItem("articleH3");

  window.localStorage.setItem("articleP", "Put simply, programming is giving a set of instructions to a computer to execute. If you’ve ever cooked using a recipe before, you can think of yourself as the computer and the recipe’s author as a programmer. The recipe author provides you with a set of instructions that you read and then follow. The more complex the instructions, the more complex the result");
  articleP.innerHTML = window.localStorage.getItem("articleP");

  article.style.direction = "ltr";

  window.localStorage.setItem("article", article.dataset.direction);
  article.style.direction = window.localStorage.getItem("article");

  footer.style.direction = "ltr";

  window.localStorage.setItem("footer", footer.dataset.direction);
  footer.style.direction = window.localStorage.getItem("footer");

  window.localStorage.setItem("footerSpan", "&copy; CopyRight Is Islam Rabea");
  footerSpan.innerHTML = window.localStorage.getItem("footerSpan");

  window.localStorage.setItem("Langue", `<ion-icon name="text-outline"></ion-icon>`);
  btnTwo.innerHTML = window.localStorage.getItem("Langue");
});

if (window.localStorage.getItem("translate")) {
  headerSpan.innerHTML = window.localStorage.getItem("translate");
}

if (window.localStorage.getItem("headerH1")) {
  headerH1.innerHTML = window.localStorage.getItem("headerH1");
}

if (window.localStorage.getItem("headerP")) {
  headerP.innerHTML = window.localStorage.getItem("headerP");
}

if (window.localStorage.getItem("mainH3")) {
  mainH3.innerHTML = window.localStorage.getItem("mainH3");
}

if (window.localStorage.getItem("mainP")) {
  mainP.innerHTML = window.localStorage.getItem("mainP");
}

if (window.localStorage.getItem("mainSpan")) {
  mainSpan.innerHTML = window.localStorage.getItem("mainSpan");
}

if (window.localStorage.getItem("main")) {
  main.style.direction = window.localStorage.getItem("main");
}

if (window.localStorage.getItem("article")) {
  article.style.direction = window.localStorage.getItem("article");
}

if (window.localStorage.getItem("footer")) {
  footer.style.direction = window.localStorage.getItem("footer");
}

if (window.localStorage.getItem("articleH3")) {
  articleH3.innerHTML = window.localStorage.getItem("articleH3");
}

if (window.localStorage.getItem("articleP")) {
  articleP.innerHTML = window.localStorage.getItem("articleP");
}

if (window.localStorage.getItem("footerSpan")) {
  footerSpan.innerHTML = window.localStorage.getItem("footerSpan");
}

if (window.localStorage.getItem("Langue")) {
  btnTwo.innerHTML = window.localStorage.getItem("Langue");
}

let myFunc = function () {
  btnThree.addEventListener("click", function () {
    btnFour.classList.remove("active");
    btnThree.classList.remove("active");
    body.classList.remove("active");

    window.localStorage.setItem("backGround", btnFour.dataset.color);
    body.style.backgroundImage = window.localStorage.getItem("backGround");

    window.localStorage.setItem("moon", `<ion-icon name="sunny-outline"></ion-icon>`);
    btnFour.innerHTML = window.localStorage.getItem("moon");
  });

  if (window.localStorage.getItem("backGround")) {
    body.style.backgroundImage = window.localStorage.getItem("backGround");
    btnFour.classList.add("active");
  }

  if (window.localStorage.getItem("moon")) {
    btnFour.innerHTML = window.localStorage.getItem("moon");
  }

  btnFour.addEventListener("click", function () {
    btnThree.classList.add("active");
    btnFour.classList.add("active");
    body.classList.remove("active");
    body.classList.add("active");

    window.localStorage.setItem("backGround", btnThree.dataset.color);
    body.style.backgroundImage = window.localStorage.getItem("backGround");

    window.localStorage.setItem("moon", `<ion-icon name="moon-outline"></ion-icon>`);
    btnThree.innerHTML = window.localStorage.getItem("moon");
  });

  if (window.localStorage.getItem("backGround")) {
    body.style.backgroundImage = window.localStorage.getItem("backGround");
    btnThree.classList.add("active");
  }

  if (window.localStorage.getItem("moon")) {
    btnThree.innerHTML = window.localStorage.getItem("moon");
  }
};

myFunc();

let btn = document.querySelector(".btn-top");

window.onscroll = function () {
  (scrollY >= 50) ? btn.classList.add("active") : btn.classList.remove("active");
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
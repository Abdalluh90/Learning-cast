document.addEventListener('DOMContentLoaded', function() {
  // تحديد العناصر التي نريد أن تظهر بشكل تدريجي
  const podcastMain = document.querySelector('.podcast-main');
  const languages = document.querySelectorAll('.language');

  // إضافة الكلاس لجعل العنصر يظهر بعد تحميل الصفحة
  setTimeout(() => {
    podcastMain.classList.add('visible'); // البودكاست
    languages.forEach(language => {
      language.classList.add('visible'); // اللغات
    });
  }, 500); // الانتظار نصف ثانية قبل تفعيل التأثيرات
});
document.getElementById('form').addEventListener('submit', function (e) {
  const phoneInput = document.getElementById('phone_number');
  const errorMessage = document.getElementById('error-message');

  // Foydalanuvchi faqat 9 ta raqamni kiritishi kerak
  const phoneRegex = /^\d{9}$/;

  if (!phoneRegex.test(phoneInput.value)) {
      e.preventDefault(); // Formani jo'natishni to'xtatish
      errorMessage.style.display = 'block'; // Xatolik xabarini ko'rsatish
  } else {
      errorMessage.style.display = 'none'; // Xatolik xabarini yashirish
      // To'liq raqamni olish
      alert("To'liq telefon raqami: +998" + phoneInput.value);
  }
});


const form = document.getElementById('form');
const fullNameInput = document.getElementById('fullname');
const phoneNumberInput = document.getElementById('phone_number');
const errorMessage = document.getElementById('error-message');

// Formni yuborish eventini qo'lga olish
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Formning default submit qilishini to'xtatish

    const fullName = fullNameInput.value.trim();
    const phoneNumber = phoneNumberInput.value.trim();

    // Telefon raqamini validatsiya qilish
    if (phoneNumber.length !== 9 || isNaN(phoneNumber)) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    // Yuboriladigan ma'lumot
    const payload = {
        name: fullName,
        phone: `+998${phoneNumber}`,
        course: "49" // Kurs ID-ni kerakli qiymat bilan almashtiring
    };

    // Axios yordamida POST so'rovi yuborish
    axios.post('https://back.roboticslab.uz/api/courses/register', payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                // Muvaffaqiyatli bo‘lsa, success sahifasiga yo'naltirish
                window.location.href = 'success.html';
            } else {
                alert('Xatolik yuz berdi. Qayta urinib ko‘ring.');
            }
        })
        .catch((error) => {
            console.error('Xatolik yuz berdi:', error);
            alert('Server bilan bog‘lanishda muammo yuz berdi.');
        });
});

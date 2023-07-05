export const validatePhone = (phone, persons) => {
  let error = "";

  if (phone.trim() === "") {
    error = "وارد کردن موبایل الزامی است";
  } else if (phone.length !== 11) {
    error = "شماره موبایل باید 11 رقمی باشد";
  } else if (phone.substring(0, 2) !== "09") {
    error = "شماره موبایل باید با 09 شروع شود";
  } else if (!persons.some((person) => person.phone == phone)) {
    error = "همچین شماره موبایلی موجود نیست";
  }

  return error;
};

export const validatePassword = (password, persons) => {
  let error = "";

  if (password.trim() === "") {
    error = "وارد کردن رمز عبور الزامی است";
  } else if (password.length < 8) {
    error = "رمز عبور نباید کمتر از 8 حرف باشد";
  } else if (!persons.some((person) => person.password == password)) {
    error = "رمز عبور اشتباه است";
  }
  return error;
};

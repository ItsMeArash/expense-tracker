export const validate = (data, persons, type) => {
  const errors = {};

  if (type === "login") {
    if (data.phone.trim() === "") {
      errors.phone = "وارد کردن موبایل الزامی است";
    } else if (data.phone.length !== 11) {
      errors.phone = "شماره موبایل باید 11 رقمی باشد";
    } else if (data.phone.substring(0, 2) !== "09") {
      errors.phone = "شماره موبایل باید با 09 شروع شود";
    } else if (!persons.some((person) => person.phone === data.phone)) {
      errors.phone = "همچین شماره موبایلی موجود نیست";
    } 

    if (data.password.trim() === "") {
      errors.password = "وارد کردن رمز عبور الزامی است";
    } else if (data.password.length < 8) {
      errors.password = "رمز عبور نباید کمتر از 8 حرف باشد";
    } else if (!persons.some((person) => person.password === data.password)) {
      errors.password = "رمز عبور اشتباه است";
    } 
  }

  if (type === "signup") {
    if (data.name.trim() === "") {
      errors.name = "وارد کردن نام و نام خانوادگی الزامی است";
    } else if (!/^[\u0600-\u06FF\s]+$/.test(data.name)) {
      errors.name = "نام و نام خانوادگی فقط میتواند دارای حروف فارسی باشد";
    } else if (persons.some((person) => person.name === data.name)) {
      errors.name = "قبلا ثبت نام کردی؛ از صفحه ورود، وارد حساب شو";
    } 

    if (data.phone.trim() === "") {
      errors.phone = "وارد کردن موبایل الزامی است";
    } else if (data.phone.length !== 11) {
      errors.phone = "شماره موبایل باید 11 رقمی باشد";
    } else if (data.phone.substring(0, 2) !== "09") {
      errors.phone = "شماره موبایل باید با 09 شروع شود";
    } else if (persons.some((person) => person.phone === data.phone)) {
      errors.phone = "این شماره موبایل، قبلا ثبت شده";
    } 

    if (data.password.trim() === "") {
      errors.password = "وارد کردن رمز عبور الزامی است";
    } else if (data.password.length < 8) {
      errors.password = "رمز عبور نباید کمتر از 8 حرف باشد";
    } 

    if (data.rePassword.trim() === "") {
      errors.rePassword = "تکرار رمز عبور را وارد کنید"
    } else if (data.rePassword !== data.password) {
      errors.rePassword = "را رمز عبور وارد شده مطابقت ندارد"
    } 
  }

  return errors;
};

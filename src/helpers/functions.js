export const validatePhone = (phone) => {
  let error = "";

  if (phone.trim() === "") {
    error = "وارد کردن موبایل الزامی است";
  } else if (phone.length !== 11) {
    error = "شماره موبایل باید 11 رقمی باشد";
  } else if (phone.substring(0, 2) !== "09") {
    error = "شماره موبایل باید با 09 شروع شود";
  }

  return error;
};


export const validatePassword = (password) => {
  let error = '';

  if (password.trim() === '') {
    error = "وارد کردن رمز عبور الزامی است"
  } else if (password.length < 8) {
    error = "رمز عبور نباید کمتر از 8 حرفق باشد"
  }


  return error;
}
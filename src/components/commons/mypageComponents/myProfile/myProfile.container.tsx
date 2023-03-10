import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import MyProfileUI from "./myProfile.presenter";
import { RESET_USER_PASSWORD } from "./myProfile.queries";

const MyProfile = () => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showPresentPassword, setShowPresentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);

  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangePasswordCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  };

  const onClickShowPresentPassword = () => {
    setShowPresentPassword((prev) => !prev);
  };
  const onClickShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };
  const onClickShowCheckPassword = () => {
    setShowCheckPassword((prev) => !prev);
  };

  const onClickResetPassword = async () => {
    try {
      if (password === passwordCheck) {
        const result = await resetUserPassword({
          variables: {
            password,
          },
        });
        if (result?.data?.resetUserPassword === true) {
          alert("비밀번호가 바뀌였습니다.");
        }
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MyProfileUI
      password={password}
      passwordCheck={passwordCheck}
      showPresentPassword={showPresentPassword}
      showNewPassword={showNewPassword}
      showCheckPassword={showCheckPassword}
      onClickResetPassword={onClickResetPassword}
      onClickShowPresentPassword={onClickShowPresentPassword}
      onClickShowNewPassword={onClickShowNewPassword}
      onClickShowCheckPassword={onClickShowCheckPassword}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
    />
  );
};

export default MyProfile;

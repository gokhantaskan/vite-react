import "react-toastify/dist/ReactToastify.css";

import styled from "@emotion/styled";
import { ToastContainer, Zoom } from "react-toastify";
import tw from "twin.macro";

const StyledToastContainer = styled(ToastContainer)(() => ({
  "&& .Toastify__toast": {
    ...tw`border shadow-lg light:(bg-gray-50 text-gray-900) dark:(bg-gray-700 border-gray-500 text-white)`,
  },
  "&& .Toastify__close-button": {
    ...tw`opacity-70 text-danger-500 dark:(text-danger-400)`,
  },
}));

export const ToastifyContainer = () => {
  return (
    <StyledToastContainer
      position="bottom-center"
      autoClose={5_000}
      hideProgressBar={true}
      transition={Zoom}
    />
  );
};

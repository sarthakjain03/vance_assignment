import React, { useState } from "react";
import { Dialog, TextField, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { firestore } from "../utils/firebaseConfig";
import { formatDate } from "../utils/dateFormatter";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#4F4F4F",
      borderRadius: 12,
      height: 48,
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#B2BAC2",
    },
    "& .MuiInputBase-input": {
      color: "#F9F9F9",
      fontWeight: 600,
      backgroundColor: "#4F4F4F",
      borderRadius: 12,
      height: 9,
    },
  },
});

const SetAlertDialog = ({ isOpen, onClose, userID, selectedCountry }) => {
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      alertValue: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Required"),
      alertValue: yup.number().required("Required").typeError("Please enter a valid number"),
    }),
    onSubmit: async (values) => {
      setSubmitting(true);
      const data = {
        title: values.title,
        rateValue: Number(values.alertValue),
        setDate: formatDate(new Date().toDateString()),
        country: selectedCountry?.name,
      };
      try {
        const docRef = doc(firestore, "users", userID);
        await updateDoc(docRef, {
          alerts: arrayUnion(data)
        });
        onClose();
        alert("Rate alert set successfully!");
      } catch (error) {
        console.error("Error saving data:", error);
      }
      setSubmitting(false);
    },
  });

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: { width: 400, borderRadius: 24 },
      }}
    >
      <DialogContent sx={{ overflow: "hidden", padding: 0 }}>
        <SimpleBar style={{ maxHeight: 500 }}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col justify-center items-center bg-[#333333] gap-6 p-6">
              <h1 className="m-0 p-0 text-white font-semibold text-lg">
                Set Rate Alert!
              </h1>
              <div className="flex flex-col justify-center items-center gap-3">
                <img
                  src={selectedCountry?.image}
                  alt={`${selectedCountry?.name} flag`}
                  height={64}
                  width={64}
                />
                <div className="flex items-center gap-1 text-white font-semibold">
                  <p>{selectedCountry?.name}</p>
                  <p className="text-sm opacity-50">
                    {selectedCountry?.currency}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 font-semibold text-sm text-[#D5D6DE] w-full">
                <p>Title</p>
                <CustomTextField
                  fullWidth
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  placeholder="Enter Title"
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
                <p>Rate Alert Value</p>
                <CustomTextField
                  fullWidth
                  id="alertValue"
                  name="alertValue"
                  value={formik.values.alertValue}
                  onChange={formik.handleChange}
                  placeholder="Enter Value"
                  error={
                    formik.touched.alertValue &&
                    Boolean(formik.errors.alertValue)
                  }
                  helperText={
                    formik.touched.alertValue && formik.errors.alertValue
                  }
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <button
                  type="submit"
                  className="bg-primary px-5 py-3 flex justify-center items-center gap-2 rounded-full text-[#0B0B0B] w-full"
                  onClick={() => {}}
                  disabled={submitting}
                >
                  <p className="font-semibold">Set Alert</p>
                  <div
                    className="rounded-sm bg-black px-1 pb-1 font-medium text-[#81EBAB]"
                    style={{ lineHeight: "1" }}
                  >
                    +
                  </div>
                </button>
                <button
                  onClick={onClose}
                  disabled={submitting}
                  className="font-semibold text-sm text-white/50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </SimpleBar>
      </DialogContent>
    </Dialog>
  );
};

export default SetAlertDialog;

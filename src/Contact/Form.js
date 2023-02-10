import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import "./contact.css";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
const ariaLabel = { "aria-label": "description" };

const validateSchema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(3, "name must be greater than 3digit")
    .matches(/^([a-zA-Z\+s])*[a-zA-Z]+$/, "enter only character")
    .max(20, "name must be small than 20"),
  mobile: yup.string().required("A number is required").min(10, "must be 10 digit").max(10, "must be 10 digit"),
  email: yup.string().required("A email is required").matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "please enter valid email"),
  msg: yup.string().required("A message is required")
});

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: "all",
    resolver: yupResolver(validateSchema)
  })

  console.log("errors", errors)


  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="8">
            <Box
              component="form"
              onSubmit={handleSubmit((data) => {
                console.log(data)
              })}
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                flexDirection: "column",
                lineHeight: "2rem",
              }}
              noValidate
              autoComplete="off"
            >

              <TextField

                label="Full Name"
                variant="standard"
                name="name"
                {...register("name")}

              />
              {
                <p style={{ color: "#dc3545" }}>{errors?.name?.message}</p>
              }


              <TextField
                label="Email address"
                variant="standard"
                name="email"
                {...register("email",)}

              />
              {
                <p style={{ color: "#dc3545" }}>{errors?.email?.message}</p>
              }

              <TextField
                label="Phone Number"
                variant="standard"
                name="mobile"
                {...register("mobile")}

              />
              {
                <p style={{ color: "#dc3545" }}>{errors?.mobile?.message}</p>
              }
              <TextField
                label="Message"
                variant="standard"
                name="msg"
                {...register("msg")}
              />
              {
                <p style={{ color: "#dc3545" }}>{errors?.msg?.message}</p>
              }
              <button
                type="submit"
                style={{
                  backgroundColor: "#1abc9c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  width: 100,
                  height: 60,

                }}
              >
                Send
              </button>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
}




// object of callback functions
{/* <input
  {...register("test1", {
    validate: {
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      validateNumber: (_: number, formValues: FormValues) {
        return formValues.number1 + formValues.number2 === 3 || 'Check sum number';
      },
      // you can do asynchronous validation as well
      checkUrl: async () => await fetch() || 'error message',  // JS only: <p>error message</p> TS only support string
      messages: v => !v && ['test', 'test2']
    }
  })}
/> */}